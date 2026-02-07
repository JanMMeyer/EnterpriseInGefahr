import { useContext } from "react";
import { GameStateContext } from "../state/GameStateContext";
import { EntCard } from "./shared/EntCard";

export function EntMoveTwoFwdCard() {
	const { moveShip } = useContext(GameStateContext);
	return (
		<EntCard onClick={() => moveShip("federation", 2)}>
			<span className="material-symbols-outlined">
				arrow_forward
			</span>
			<span className="material-symbols-outlined">
				arrow_forward
			</span>
		</EntCard>
	);
}	