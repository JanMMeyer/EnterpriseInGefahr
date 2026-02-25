import type { Pew } from "../shared/types/Pew.type";
import type { Ship, ShipFaction, ShipType } from "../shared/types/Ship.type";

export type GameState = {
	federationShip: Ship;
	klingonShip: Ship;
	activeShip: ShipFaction;
	pew: Pew | null;
};
export type GameStateActions = {
	shoot: (faction: ShipFaction) => void;
	moveShip: (faction: ShipFaction, numberOfCells: number) => void;
	rotateShip: (faction: ShipFaction, direction: "cw" | "ccw") => void;
	setFederationShipType: (type: ShipType) => void;
	setActiveFaction: (faction: ShipFaction) => void;
};