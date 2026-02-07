import { useState } from "react";
import type { GameState, GameStateActions } from "./GameState.type";
import type { Ship, ShipFaction, ShipOrientation, ShipType } from "../ships/shared/Ship.type";
import { GameConfig } from "../Game";

export function useGameState(): GameState & GameStateActions {
	const [federationShip, setFederationShip] = useState<Ship>({
		faction: "federation",
		position: { x: 1, y: 1 },
		orientation: "right",
		type: null
	});
	const [klingonShip, setKlingonShip] = useState<Ship>({
		faction: "klingon",
		position: { x: GameConfig.cols, y: GameConfig.rows },
		orientation: "left",
		type: "vorCha",
	});
	const [activeShip, setActiveShip] = useState<"federation" | "klingon">("federation");

	const moveShip = (faction: ShipFaction, numberOfCells: number) => {
		const setStateFn = faction === "federation" ? setFederationShip : setKlingonShip;
		updateShipPosition(setStateFn, numberOfCells);
	};

	const rotateShip = (faction: ShipFaction, direction: "cw" | "ccw") => {
		const setStateFn = faction === "federation" ? setFederationShip : setKlingonShip;
		updateShipOrientation(setStateFn, direction);
	};

	const setFederationShipType = (type: ShipType) => {
		setFederationShip({ ...federationShip, type });
	};

	return {
		federationShip,
		klingonShip,
		activeShip,
		moveShip,
		rotateShip,
		setActiveShip,
		setFederationShipType,
	};
}

function updateShipPosition(setShip: (stateFn: (prev: Ship) => Ship) => void,  numberOfCells: number) {
	setShip((ship) => {
		const newPosition = { ...ship.position };
		switch (ship.orientation) {
			case "up":
				newPosition.y = Math.max(1, ship.position.y - numberOfCells);
				break;
			case "down":
				newPosition.y = Math.min(GameConfig.rows, ship.position.y + numberOfCells);
				break;
			case "left":		
				newPosition.x = Math.max(1, ship.position.x - numberOfCells);
				break;
			case "right":
				newPosition.x = Math.min(GameConfig.cols, ship.position.x + numberOfCells);
				break;
		}
		return { ...ship, position: newPosition };
	})
}

function updateShipOrientation(setShip: (stateFn: (prev: Ship) => Ship) => void, direction: "cw" | "ccw") {
	setShip((ship) => {
		let newOrientation: ShipOrientation
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