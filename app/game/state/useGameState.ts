import { useState } from "react";
import type { GameState, GameStateActions } from "./GameState.type";
import type { Ship, ShipFaction, ShipType } from "../shared/types/Ship.type";
import { GameConfig } from "../Game";
import type { SpacialDirection } from "../shared/types/Game.types";
import type { Pew } from "../shared/types/Pew.type";
import { Intersectable } from "../shared/utils/Intersectable.class";


export function useGameState(): GameState & GameStateActions {
	const [federationShip, setFederationShip] = useState<Ship>({
		faction: "federation",
		origin: { x: 1, y: 1 },
		orientation: "right",
		type: null,
		integrity: 100,
	});
	const [klingonShip, setKlingonShip] = useState<Ship>({
		faction: "klingon",
		origin: { x: GameConfig.cols, y: GameConfig.rows },
		orientation: "left",
		type: "vorCha",
		integrity: 100,
	});
	const [activeShip, setActiveShip] = useState<"federation" | "klingon">("federation");
	const [pew, setPew] = useState<Pew | null>(null);

	const moveShip = (faction: ShipFaction, numberOfCells: number) => {
		const setStateFn = faction === "federation" ? setFederationShip : setKlingonShip;
		updateShipPosition(setStateFn, numberOfCells);
	};

	const rotateShip = (faction: ShipFaction, direction: "cw" | "ccw") => {
		const setStateFn = faction === "federation" ? setFederationShip : setKlingonShip;
		updateShipOrientation(setStateFn, direction);
	};

	const shoot = (shootingFaction: ShipFaction) => {
		const shootingShip = shootingFaction === "federation" ? federationShip : klingonShip;
		const targetShip = shootingFaction === "federation" ? klingonShip : federationShip;
		const opponentShipSetStateFn = shootingFaction === "federation" ?  setKlingonShip : setFederationShip
		const pew: Pew = {
			origin: shootingShip.origin,
			orientation: shootingShip.orientation,
			length: 10,
		} 
		const pewIntersectable: Intersectable = new Intersectable(pew)


		setPew(pew);
		if (pewIntersectable.intersectsWith(targetShip)) {
			alert('ship hit')
		}

	}

	const setFederationShipType = (type: ShipType) => {
		setFederationShip({ ...federationShip, type });
	};

	return {
		federationShip,
		klingonShip,
		activeShip,
		pew,
		moveShip,
		rotateShip,
		shoot,
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