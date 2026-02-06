import { useContext } from "react";
import { GameStateContext } from "../state/GameStateContext";
import { Card } from "../cards/shared/Card";
import { shipTypeToImgSrc } from "../shared/utils/shipTypeToImgSrc";

export function ShipPicker({ open }: { open: boolean }) {
	const { setFederationShipType } = useContext(GameStateContext);
  return (
	<div className="size-full absolute bg-teal-900/95 items-center justify-center" style={{ display: open ? "flex" : "none" }}>
		<div className="grid grid-cols-3 grid-rows-2 gap-6 size-content" >
		<Card onClick={() => setFederationShipType("entNx")}>
			<img src={shipTypeToImgSrc.get("entNx")} alt="Enterprise NX-01" />
		</Card>
		<Card onClick={() => setFederationShipType("entA")}>
			<img src={shipTypeToImgSrc.get("entA")} alt="Enterprise NCC-1701-A" />
		</Card>
		<Card onClick={() => setFederationShipType("entB")}>
			<img src={shipTypeToImgSrc.get("entB")} alt="Enterprise NCC-1701-B" />
		</Card>
		<Card onClick={() => setFederationShipType("entC")}>
			<img src={shipTypeToImgSrc.get("entC")} alt="Enterprise NCC-1701-C" />
		</Card>
		<Card onClick={() => setFederationShipType("entD")}>
			<img src={shipTypeToImgSrc.get("entD")} alt="Enterprise NCC-1701-D" />
		</Card>
		<Card onClick={() => setFederationShipType("entE")}>
			<img src={shipTypeToImgSrc.get("entE")} alt="Enterprise NCC-1701-E" />
		</Card>
		</div>
	</div>
  );
}