import { useState } from "react";
import type { GameState, GameStateActions } from "./GameState.type";
import type { Ship, ShipPosition, ShipType } from "../ships/shared/Ship.type";
import { GameConfig } from "../Game";

export function useGameState(): GameState & GameStateActions {
	const [federationShip, setFederationShip] = useState<Ship>({ type: "federation", position: { x: 1, y: 1 }, orientation: "right" });
	const [klingonShip, setKlingonShip] = useState<Ship>({ type: "klingon", position: { x: GameConfig.cols, y: GameConfig.rows }, orientation: "left" });
	const [activeShip, setActiveShip] = useState<"federation" | "klingon">("federation");

	const moveShip = (type: ShipType, numberOfCells: number) => {
		const setStateFn = type === "federation" ? setFederationShip : setKlingonShip;
		updateShipPosition(setStateFn, numberOfCells);
	};

	return {
		federationShip,
		klingonShip,
		activeShip,
		moveShip,
		setActiveShip,
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