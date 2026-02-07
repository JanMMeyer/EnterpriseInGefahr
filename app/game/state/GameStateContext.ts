import { createContext } from "react";
import type { GameState, GameStateActions } from "./GameState.type";

export const GameStateContext = createContext<GameState & GameStateActions>({
  federationShip: { faction: "federation", type: null, position: { x: 1, y: 1 }, orientation: "right" },
  klingonShip: { faction: "klingon",type: "vorCha", position: { x: 1, y: 1 }, orientation: "left" },
  activeShip: "federation",
  moveShip: () => {},
  rotateShip: () => {},
  setActiveShip: () => {},
  setFederationShipType: () => {},
});