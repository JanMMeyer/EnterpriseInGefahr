import type { OrientedObject } from "./Game.types";

export type ShipFaction = "federation" | "klingon";
export type ShipType = "entNx" | "entA" | 'entB' | 'entC' | 'entD' | 'entE' | "vorCha" | "blasted";

export type Ship = OrientedObject & {
	faction: ShipFaction;
	type: ShipType | null;
	integrity: number;
	shields: number;
	weaponDamage: number;
}
