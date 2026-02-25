import type { OrientedObject } from "./Game.types";

export type ShipFaction = "federation" | "klingon";
export type ShipType = "entNx" | "entA" | 'entB' | 'entC' | 'entD' | 'entE' | "vorCha";

export type Ship = OrientedObject & {
	faction: ShipFaction;
	type: ShipType | null;
	integrity: number;
}
