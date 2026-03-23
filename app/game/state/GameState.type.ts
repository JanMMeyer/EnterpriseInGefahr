	import type { Pew } from "../shared/types/Pew.type";
import type { Ship, ShipFaction, ShipType } from "../shared/types/Ship.type";

export type GameState = {
	federationShip: Ship;
	klingonShip: Ship;
	activeShip: ShipFaction | null;
	pew: Pew | null;
	winner: ShipFaction | null;
};
export type GameStateActions = {
	shoot: (faction: ShipFaction) => void;
	moveShip: (faction: ShipFaction, numberOfCells: number) => void;
	rotateShip: (faction: ShipFaction, direction: "cw" | "ccw") => void;
	raiseShields: (faction: ShipFaction) => void;
	setFederationShipType: (type: ShipType) => void;
	setActiveFaction: (faction: ShipFaction) => void;
};