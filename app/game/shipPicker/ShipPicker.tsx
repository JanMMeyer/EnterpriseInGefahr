import { useContext } from "react";
import { GameStateContext } from "../state/GameStateContext";
import { Card } from "../cards/shared/Card";

export function ShipPicker() {
	const { setFederationShipType } = useContext(GameStateContext);
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-2 bg-teal-500/50">
      <Card onClick={() => setFederationShipType("entNx")}>
		<img src="/icons8-enterprise-nx-01-100.png" alt="Enterprise NX-01" />
      </Card>
      <Card onClick={() => setFederationShipType("entA")}>Enterprise NCC-1701-A</Card>
      <Card onClick={() => setFederationShipType("entB")}>Enterprise NCC-1701-B</Card>
      <Card onClick={() => setFederationShipType("entC")}>Enterprise NCC-1701-C</Card>
      <Card onClick={() => setFederationShipType("entD")}>Enterprise NCC-1701-D</Card>
      <Card onClick={() => setFederationShipType("entE")}>Enterprise NCC-1701-E</Card>
    </div>
  );
}