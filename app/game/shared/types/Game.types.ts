export type Position = { x: number; y: number; };
export type RotationDirection = "cw" | "ccw";
export type SpacialDirection = "up" | "down" | "left" | "right";
export type OrientedObject = {
	origin: Position;
	orientation: SpacialDirection;
	length?: number;
	width?: number;
}
