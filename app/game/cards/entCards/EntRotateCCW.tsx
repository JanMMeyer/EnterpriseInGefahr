import { useContext } from "react";
import { GameStateContext } from "../../state/GameStateContext";
import { EntCard } from "../shared/EntCard";

export function EntRotateCCWCard() {
	const { rotateShip } = useContext(GameStateContext);
	return (
		<EntCard onClick={() => rotateShip("federation", "ccw")}>
			<span className="material-symbols-outlined">
				rotate_left
			</span>
		</EntCard>
	);
}	