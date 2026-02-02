
export type ShipType = "federation" | "klingon";
export type ShipPosition = { x: number; y: number; };
export type ShipOrientation = "up" | "down" | "left" | "right";

export type Ship = {
	type: ShipType;
	position: ShipPosition;
	orientation: ShipOrientation;
}
