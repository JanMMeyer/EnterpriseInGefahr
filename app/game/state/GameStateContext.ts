import { createContext } from "react";
import type { GameState, GameStateActions } from "./GameState.interface";
import { GameConfig } from "../Game";

export const GameStateContext = createContext<GameState & GameStateActions>({
  federationShipPosition: { x: 1, y: 1 },
  klingonShipPosition: { x: 1, y: 1 },
  activeShip: "federation",
  moveFederationShip: () => {},
  moveKlingonShip: () => {},
  setActiveShip: () => {},
});