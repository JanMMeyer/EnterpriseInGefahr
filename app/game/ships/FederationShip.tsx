import { useContext } from "react";
import { GameStateContext } from "../state/GameStateContext";
import { ShipAvatar } from "./shared/ShipAvatar";

export function FederationShip() {
  const { federationShip } = useContext(GameStateContext);

  return (
    <ShipAvatar
		{...federationShip}
		imgSrc="/icons8-enterprise-ncc-1701-d-100.png"
		imgRotation={90}
		imgScale={0.85} /> 
  );
}
