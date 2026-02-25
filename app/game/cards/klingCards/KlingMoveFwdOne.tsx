import { useContext } from "react";
import { GameStateContext } from "../../state/GameStateContext";
import { EntCard } from "../shared/EntCard";
import { KlingonCard } from "../shared/KlingonCard";

export function KlingMoveOneFwdCard() {
	const { moveShip } = useContext(GameStateContext);
	return (
		<KlingonCard 
			onClick={() => moveShip("klingon", 1)}
		>
			<span className="material-symbols-outlined">
				arrow_upward
			</span>
		</KlingonCard>
	);
}	