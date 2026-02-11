import { useContext } from "react";
import { GameStateContext } from "../../state/GameStateContext";
import { KlingonCard } from "../shared/KlingonCard";

export function KlingRotateCCWCard() {
	const { rotateShip } = useContext(GameStateContext);
	return (
		<KlingonCard onClick={() => rotateShip("klingon", "ccw")}>
			<span className="material-symbols-outlined">
				rotate_left
			</span>
		</KlingonCard>
	);
}	