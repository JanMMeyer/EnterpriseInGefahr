import { useContext } from "react";
import { GameStateContext } from "../state/GameStateContext";
import { ShipAvatar } from "./shared/ShipAvatar";

export function KlingonShip() {
  const { klingonShip } = useContext(GameStateContext);

  return (
    <ShipAvatar
		{...klingonShip}
		imgRotation={90}
		imgScale={0.85} /> 
  );
}