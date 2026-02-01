import { GameConfig } from "../Game";
import { useContext } from "react";
import { GameStateContext } from "../state/GameStateContext";
import { Ship } from "./shared/Ship";

export function FederationShip() {
  const { federationShipPosition } = useContext(GameStateContext);

  return (
    <Ship
		position={federationShipPosition}
		imgSrc="/icons8-enterprise-ncc-1701-d-100.png"
		imgRotation={90}
		imgScale={0.85} /> 
  );
}
