import { useContext } from "react";
import { GameStateContext } from "../../state/GameStateContext";
import { EntCard } from "../shared/EntCard";
import { KlingonCard } from "../shared/KlingonCard";

export function KlingMoveTwoFwdCard() {
	const { moveShip } = useContext(GameStateContext);
	return (
		<KlingonCard onClick={() => moveShip("klingon", 2)}>
			<span className="material-symbols-outlined">
				arrow_forward
			</span>
			<span className="material-symbols-outlined">
				arrow_forward
			</span>
		</KlingonCard>
	);
}	