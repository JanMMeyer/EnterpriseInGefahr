import { useContext } from "react";
import { GameStateContext } from "../../state/GameStateContext";
import { EntCard } from "../shared/EntCard";

export function EntMoveOneFwdCard() {
	const { moveShip } = useContext(GameStateContext);
	return (
		<EntCard 
			onClick={() => moveShip("federation", 1)}
		>
			<span className="material-symbols-outlined">
				arrow_forward
			</span>
		</EntCard>
	);
}	