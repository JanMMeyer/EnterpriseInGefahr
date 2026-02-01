export type ShipType = "federation" | "klingon";
export type ShipPosition = { x: number; y: number; };
export type GameState = {
	federationShipPosition: ShipPosition;
	klingonShipPosition: ShipPosition;
	activeShip: ShipType;
};
export type GameStateActions = {
	moveFederationShip: (direction: "up" | "down" | "left" | "right") => void;
	moveKlingonShip: (direction: "up" | "down" | "left" | "right") => void;
	setActiveShip: (ship: ShipType) => void;
};