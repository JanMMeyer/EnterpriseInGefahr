import type { OrientedObject, Position, SpacialDirection } from "../types/Game.types";


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
	public readonly boundingBox: BoundingBox
	constructor(
		props: OrientedObject
	) {
		this.origin = props.origin;
		this.orientation = props.orientation;
		this.length = props.length ?? 1;
		this.width = props.width ?? 1;
		this.boundingBox = Intersectable.getBoundingBox(props)
	}

	public intersectsWith(other: OrientedObject ): boolean {
		const otherBoundingBox = Intersectable.getBoundingBox(other)
		return Intersectable.intersects(this.boundingBox, otherBoundingBox)
	}

	public static getBoundingBox({ origin, orientation, length, width }: OrientedObject): BoundingBox {
		length = length ?? 1
		width = width ?? 1
		let minX: number = origin.x
		let maxX: number = origin.x 
		let minY: number = origin.y
		let maxY: number = origin.y
		switch (orientation) {
			case 'up':
				maxX -= width
				minY -= length
			case 'right':
				maxX += length
				maxY += width
			case 'down':
				maxX += width
				maxY += length
			case 'left':
				minX -= length
				minY -= width
		}

		return { minX, maxX, minY, maxY }
	}

	public static intersects(bb1: BoundingBox, bb2: BoundingBox) {
		return 	this.isInBoundingBox(bb1, {x: bb2.minX, y: bb2.minY}) ||
				this.isInBoundingBox(bb1, {x: bb2.minX, y: bb2.maxY}) ||
				this.isInBoundingBox(bb1, {x: bb2.maxX, y: bb2.minY}) ||
				this.isInBoundingBox(bb1, {x: bb2.maxX, y: bb2.maxY}) 
	}

	public static isInBoundingBox(bb: BoundingBox, pos: Position): boolean {
		return ( bb.minX <= pos.x && pos.x < bb.maxX ) && ( bb.minY <= pos.y && pos.y < bb.maxY )
	}
}