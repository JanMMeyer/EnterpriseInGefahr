import type { OrientedObject, Position, SpacialDirection } from "../types/Game.types";
import type { Ship } from "../types/Ship.type";


export type BoundingBox = {
	minX: number;
	minY: number;
	maxX: number;
	maxY: number;
}

export class Intersectable {
	public readonly origin: Position
	public readonly orientation: SpacialDirection
	public readonly length: number
	public readonly width: number
	constructor(
		props: OrientedObject
	) {
		this.origin = props.origin;
		this.orientation = props.orientation;
		this.length = props.length ?? 1;
		this.width = props.width ?? 1;
	}
	public intersectsWith(other: OrientedObject ): boolean {

		return true;
	}

	private getBoundingBox(): BoundingBox {


		return {
			minX: this.origin.x - this.length / 2,
			minY: this.origin.y - this.width / 2,
			maxX: this.origin.x + this.length / 2,
			maxY: this.origin.y + this.width / 2,
		}
	}
}