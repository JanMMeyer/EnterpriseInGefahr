import { useEffect, useState } from "react";
import type { GameState, GameStateActions } from "./GameState.type";
import type { Ship, ShipFaction, ShipType } from "../shared/types/Ship.type";
import { GameConfig } from "../Game";
import type { SpacialDirection } from "../shared/types/Game.types";
import type { Pew } from "../shared/types/Pew.type";
import { Intersectable } from "../shared/utils/Intersectable.class";
import type { CardType } from "../cards/shared/Card.type";

const initialDrawPile: CardType[] = [
	"MoveOneFwd",
	"MoveOneFwd",
	"MoveOneFwd",
	"MoveOneFwd",
	"MoveTwoFwd",
	"MoveTwoFwd",
	"RotateCW",
	"RotateCW",
	"RotateCCW",
	"RotateCCW",
	"Shoot",
	"Shoot",
	"RaiseShields",
];

export function useGameState(): GameState & GameStateActions {
	const [federationDrawPile, setFederationDrawPile] = useState<CardType[]>(initialDrawPile);
	const [klingonDrawPile, setKlingonDrawPile] = useState<CardType[]>(initialDrawPile);
	const [federationHand, setFederationHand] = useState<CardType[]>([]);
	const [klingonHand, setKlingonHand] = useState<CardType[]>([]);
	const [federationDiscardPile, setFederationDiscardPile] = useState<CardType[]>([]);
	const [klingonDiscardPile, setKlingonDiscardPile] = useState<CardType[]>([]);


	const [federationShip, setFederationShip] = useState<Ship>({
		faction: "federation",
		origin: { x: 1, y: 1 },
		orientation: "right",
		type: null,
		integrity: 10,
		shields: 0,
		weaponDamage: 5,
	});
	const [klingonShip, setKlingonShip] = useState<Ship>({
		faction: "klingon",
		origin: { x: GameConfig.cols, y: GameConfig.rows },
		// origin: { x: 9, y: 6 },
		orientation: "left",
		type: "vorCha",
		integrity: 10,
		shields: 0,
		weaponDamage: 5,
	});
	const [activeShip, setActiveShip] = useState<ShipFaction | null>('federation');
	const [pew, setPew] = useState<Pew | null>(null);
	const [winner, setWinner] = useState<ShipFaction | null>(null);

	const shuffleDrawPile = (faction: ShipFaction) => {
		const drawPile = faction === "federation" ? federationDrawPile : klingonDrawPile;
		const setDrawPile = faction === "federation" ? setFederationDrawPile : setKlingonDrawPile;
		const shuffledDrawPile = drawPile.sort(() => Math.random() - 0.5);
		setDrawPile(shuffledDrawPile);
	}

	const drawHand = (faction: ShipFaction) => {
		const drawPile = faction === "federation" ? federationDrawPile : klingonDrawPile;
		const setHand = faction === "federation" ? setFederationHand : setKlingonHand;
		const hand = drawPile.splice(0, 4);
		setHand(hand);
	}

	const toggleTurn = () => {
		setActiveShip((prev) => (prev === "federation" ? "klingon" : "federation"));
	};

	const moveShip = (faction: ShipFaction, numberOfCells: number) => {
		const setStateFn = faction === "federation" ? setFederationShip : setKlingonShip;
		updateShipPosition(setStateFn, numberOfCells);
		toggleTurn();
	};

	const rotateShip = (faction: ShipFaction, direction: "cw" | "ccw") => {
		const setStateFn = faction === "federation" ? setFederationShip : setKlingonShip;
		updateShipOrientation(setStateFn, direction);
		toggleTurn();
	};

	const raiseShields = (faction: ShipFaction) => {
		const setStateFn = faction === "federation" ? setFederationShip : setKlingonShip;
		setStateFn((ship) => ({ ...ship, shields: ship.shields + 5 }));
		toggleTurn();
	};

	const shoot = (shootingFaction: ShipFaction) => {
		const shootingShip = shootingFaction === "federation" ? federationShip : klingonShip;
		const targetShip = shootingFaction === "federation" ? klingonShip : federationShip;
		const opponentShipSetStateFn = shootingFaction === "federation" ?  setKlingonShip : setFederationShip
		const pew: Pew = {
			shootingFaction,
			origin: shootingShip.origin,
			orientation: shootingShip.orientation,
			length: 5,
		} 
		const pewIntersectable: Intersectable = new Intersectable(pew)

		if (pewIntersectable.intersectsWith(targetShip)) {
			const nextShields = Math.max(0, targetShip.shields - shootingShip.weaponDamage);
			const netDamage = Math.max(0, shootingShip.weaponDamage - targetShip.shields);
			const nextIntegrity = Math.max(0, targetShip.integrity - netDamage);
			opponentShipSetStateFn({ ...targetShip, shields: nextShields, integrity: nextIntegrity });
		}
		setPew(pew);
		toggleTurn();
	}

	const setFederationShipType = (type: ShipType) => {
		setFederationShip({ ...federationShip, type });
	};

	// initially shuffles and draws hands
	useEffect(() => {
		shuffleDrawPile("federation");
		shuffleDrawPile("klingon");
		drawHand("federation");
		drawHand("klingon");
	}, []);

	// removes pew after 500ms
	useEffect(() => {
		if (pew !== null) setTimeout(() => {
			setPew(null);
		}, 600);
	}, [pew]);

	// after pew has settled, if integrity is 0, sets ship to blasted and active faction to null, then removes ship and sets winner
	useEffect(() => {
		let winner: ShipFaction | null = null;
		let setShipState: (stateFn: (prev: Ship) => Ship) => void = () => {};
		if (federationShip.integrity <= 0 && federationShip.type && federationShip.type !== "blasted") {
			winner = "klingon";
			setShipState = setFederationShip;
		} else if (klingonShip.integrity <= 0 && klingonShip.type && klingonShip.type !== "blasted") {
			winner = "federation";
			setShipState = setKlingonShip;
		}

		if (winner) {
			console.log("ship is blasted");
			setActiveShip(null);
			const blastTimeout = setTimeout(() => {
				setShipState((ship: Ship) => ({ ...ship, type: "blasted" }));
			}, 550);
			const goBackTimeout = setTimeout(() => {
				setShipState((ship: Ship) => ({ ...ship, type: null }));
			}, 2000);
			const winnerTimeout = setTimeout(() => setWinner(winner), 2500);
			return () => {
				clearTimeout(blastTimeout)
				clearTimeout(goBackTimeout)
				clearTimeout(winnerTimeout)
			};
		}
	}, [federationShip.integrity, klingonShip.integrity]);

	return {
		federationDrawPile,
		klingonDrawPile,
		federationHand,
		klingonHand,
		federationDiscardPile,
		klingonDiscardPile,
		federationShip,
		klingonShip,
		activeShip,
		pew,
		winner,
		shuffleDrawPile,
		drawHand,
		moveShip,
		rotateShip,
		shoot,
		raiseShields,
		setActiveFaction: setActiveShip,
		setFederationShipType,
	};
}

function updateShipPosition(setShip: (stateFn: (prev: Ship) => Ship) => void,  numberOfCells: number) {
	setShip((ship) => {
		const newPosition = { ...ship.origin };
		switch (ship.orientation) {
			case "up":
				newPosition.y = Math.max(1, ship.origin.y - numberOfCells);
				break;
			case "down":
				newPosition.y = Math.min(GameConfig.rows, ship.origin.y + numberOfCells);
				break;
			case "left":		
				newPosition.x = Math.max(1, ship.origin.x - numberOfCells);
				break;
			case "right":
				newPosition.x = Math.min(GameConfig.cols, ship.origin.x + numberOfCells);
				break;
		}
		return { ...ship, origin: newPosition };
	})
}

function updateShipOrientation(setShip: (stateFn: (prev: Ship) => Ship) => void, direction: "cw" | "ccw") {
	setShip((ship) => {
		let newOrientation: SpacialDirection
		switch (ship.orientation) {
			case "up":
				newOrientation = direction === "cw" ? "right" : "left";
				break;
			case "down":
				newOrientation = direction === "cw" ? "left" : "right";
				break;
			case "left":
				newOrientation = direction === "cw" ? "up" : "down";
				break;
			case "right":
				newOrientation = direction === "cw" ? "down" : "up";
				break;
		}
		return { ...ship, orientation: newOrientation };
	})
}