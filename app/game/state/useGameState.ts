import { useState } from "react";
import type { GameState, GameStateActions, ShipPosition } from "./GameState.interface";
import { GameConfig } from "../Game";

export function useGameState(): GameState & GameStateActions {
	const [federationShipPosition, setFederationShipPosition] = useState({ x: 1, y: 1 });
	const [klingonShipPosition, setKlingonShipPosition] = useState({ x: GameConfig.cols, y: GameConfig.rows });
	const [activeShip, setActiveShip] = useState<"federation" | "klingon">("federation");

	const moveFederationShip = (direction: "up" | "down" | "left" | "right") => {
		moveShip(setFederationShipPosition, direction);
	};
	const moveKlingonShip = (direction: "up" | "down" | "left" | "right") => {
		moveShip(setKlingonShipPosition, direction);
	};

	return {
		federationShipPosition,
		klingonShipPosition,
		activeShip,
		moveFederationShip,
		moveKlingonShip,
		setActiveShip,
	};
}

function moveShip(setPosition: (stateFn: (prev: ShipPosition) => ShipPosition) => void,  direction: "up" | "down" | "left" | "right") {
	
	switch (direction) {
		case "up":
			return setPosition((position) => ({ ...position, y: Math.max(1, position.y - 1) }));
		case "down":
			return setPosition((position) => ({ ...position, y: Math.min(GameConfig.rows, position.y + 1) }));
		case "left":		
			return setPosition((position) => ({ ...position, x: Math.max(1, position.x - 1) }));
		case "right":
			return setPosition((position) => ({ ...position, x: Math.min(GameConfig.cols, position.x + 1) }));
	}
}