import { useContext } from "react";
import { GameStateContext } from "../../state/GameStateContext";
import { EntCard } from "../shared/EntCard";
import { KlingonCard } from "../shared/KlingonCard";

export function KlingRotateCWCard() {
	const { rotateShip } = useContext(GameStateContext);
	return (
		<KlingonCard onClick={() => rotateShip("klingon", "cw")}>
			<span className="material-symbols-outlined">
				rotate_right
			</span>
		</KlingonCard>
	);
}	