export type ShipFaction = "federation" | "klingon";
export type ShipType = "entNx" | "entA" | 'entB' | 'entC' | 'entD' | 'entE' | "vorCha";
export type ShipPosition = { x: number; y: number; };
export type ShipOrientation = "up" | "down" | "left" | "right";

export type Ship = {
	faction: ShipFaction;
	position: ShipPosition;
	orientation: ShipOrientation;
	type: ShipType | null;
}
