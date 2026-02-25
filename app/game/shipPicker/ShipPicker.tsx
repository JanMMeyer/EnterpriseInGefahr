import { useContext } from "react";
import { GameStateContext } from "../state/GameStateContext";
import { ShipSelectCard } from "../cards/shared/ShipSelectCard";
import { shipTypeToImgSrc } from "../shared/utils/shipTypeToImgSrc";

export function ShipPicker({ open }: { open: boolean }) {
	const { setFederationShipType } = useContext(GameStateContext);
  return (
	<div className="size-full absolute bg-teal-900/95 items-center justify-center" style={{ display: open ? "flex" : "none" }}>
		<div className="grid grid-cols-3 grid-rows-2 gap-6 size-content" >
		<ShipSelectCard onClick={() => setFederationShipType("entNx")}>
			<img src={shipTypeToImgSrc.get("entNx")} alt="Enterprise NX-01" />
		</ShipSelectCard>
		<ShipSelectCard onClick={() => setFederationShipType("entA")}>
			<img src={shipTypeToImgSrc.get("entA")} alt="Enterprise NCC-1701-A" />
		</ShipSelectCard>
		<ShipSelectCard onClick={() => setFederationShipType("entB")}>
			<img src={shipTypeToImgSrc.get("entB")} alt="Enterprise NCC-1701-B" />
		</ShipSelectCard>
		<ShipSelectCard onClick={() => setFederationShipType("entC")}>
			<img src={shipTypeToImgSrc.get("entC")} alt="Enterprise NCC-1701-C" />
		</ShipSelectCard>
		<ShipSelectCard onClick={() => setFederationShipType("entD")}>
			<img src={shipTypeToImgSrc.get("entD")} alt="Enterprise NCC-1701-D" />
		</ShipSelectCard>
		<ShipSelectCard onClick={() => setFederationShipType("entE")}>
			<img src={shipTypeToImgSrc.get("entE")} alt="Enterprise NCC-1701-E" />
		</ShipSelectCard>
		</div>
	</div>
  );
}