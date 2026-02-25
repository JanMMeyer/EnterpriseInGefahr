import { useContext } from "react";
import { GameStateContext } from "../../state/GameStateContext";
import { EntCard } from "../shared/EntCard";

export function EntShootCard() {
	const { shoot } = useContext(GameStateContext);
	return (
		<EntCard onClick={() => shoot("federation")}>
			<span className="material-symbols-outlined">
				point_scan
			</span>
		</EntCard>
	);
}	