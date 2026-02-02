import type { Ship, ShipType } from "../ships/shared/Ship.type";

export type GameState = {
	federationShip: Ship;
	klingonShip: Ship;
	activeShip: ShipType;
};
export type GameStateActions = {
	moveShip: (type: ShipType, numberOfCells: number) => void;
	setActiveShip: (ship: ShipType) => void;
};