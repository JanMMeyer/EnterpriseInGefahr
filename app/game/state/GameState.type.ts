	import type { CardType } from "../cards/shared/Card.type";
import type { Pew } from "../shared/types/Pew.type";
import type { Ship, ShipFaction, ShipType } from "../shared/types/Ship.type";

export type GameState = {
	federationDrawPile: CardType[];
	klingonDrawPile: CardType[];
	federationHand: CardType[];
	klingonHand: CardType[];
	federationDiscardPile: CardType[];
	klingonDiscardPile: CardType[];
	federationShip: Ship;
	klingonShip: Ship;
	activeShip: ShipFaction | null;
	pew: Pew | null;
	winner: ShipFaction | null;
};
export type GameStateActions = {
	shuffleDrawPile: (faction: ShipFaction) => void;
	drawHand: (faction: ShipFaction) => void;
	shoot: (faction: ShipFaction) => void;
	moveShip: (faction: ShipFaction, numberOfCells: number) => void;
	rotateShip: (faction: ShipFaction, direction: "cw" | "ccw") => void;
	raiseShields: (faction: ShipFaction) => void;
	setFederationShipType: (type: ShipType) => void;
	setActiveFaction: (faction: ShipFaction) => void;
};