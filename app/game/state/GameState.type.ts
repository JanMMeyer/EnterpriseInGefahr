import type { Ship, ShipFaction, ShipType } from "../ships/shared/Ship.type";

export type GameState = {
	federationShip: Ship;
	klingonShip: Ship;
	activeShip: ShipFaction;
};
export type GameStateActions = {
	moveShip: (type: ShipFaction, numberOfCells: number) => void;
	rotateShip: (type: ShipFaction, direction: "cw" | "ccw") => void;
	setFederationShipType: (type: ShipType) => void;
	setActiveShip: (ship: ShipFaction) => void;
};