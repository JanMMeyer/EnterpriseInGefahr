import { useContext } from "react";
import { GameStateContext } from "../state/GameStateContext";
import { ShipAvatar } from "./shared/ShipAvatar";

export function FederationShip() {
  const { federationShip } = useContext(GameStateContext);

  return (
    <ShipAvatar
		{...federationShip}
		imgRotation={90}
		imgScale={0.85} /> 
  );
}
