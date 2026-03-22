import { useContext } from "react";
import { GameStateContext } from "../../state/GameStateContext";
import { EntCard } from "../shared/EntCard";
import { KlingonCard } from "../shared/KlingonCard";

export function KlingonShootCard() {
	const { shoot } = useContext(GameStateContext);
	return (
		<KlingonCard onClick={() => shoot("klingon")}>
			<span className="material-symbols-outlined">
				point_scan
			</span>
		</KlingonCard>
	);
}	