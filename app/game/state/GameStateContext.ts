import { createContext } from "react";
import type { GameState, GameStateActions } from "./GameState.type";

export const GameStateContext = createContext<GameState & GameStateActions>({
  federationShip: { faction: "federation", type: null, origin: { x: 1, y: 1 }, orientation: "right", integrity: 100 },
  klingonShip: { faction: "klingon",type: "vorCha", origin: { x: 1, y: 1 }, orientation: "left", integrity: 100 },
  activeShip: "federation",
  moveShip: () => {},
  rotateShip: () => {},
  shoot: () => {},
  setActiveFaction: () => {},
  setFederationShipType: () => {},
});