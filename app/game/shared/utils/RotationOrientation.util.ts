import type { SpacialDirection } from "../types/Game.types";

export function getRotation(orientation: SpacialDirection) {
	return orientation === 'up' ? -90 : orientation === 'down' ? 90 : orientation === 'left' ? 180 : 0;
}