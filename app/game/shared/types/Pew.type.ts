import type { OrientedObject } from "./Game.types";
import type { ShipFaction } from "./Ship.type";

export type Pew = OrientedObject & { shootingFaction: ShipFaction }
