import { useContext } from "react";
import { GameStateContext } from "../state/GameStateContext";
import { EntCard } from "./shared/EntCard";

export function EntRotateCWCard() {
	const { rotateShip } = useContext(GameStateContext);
	return (
		<EntCard onClick={() => rotateShip("federation", "cw")}>
			<span className="material-symbols-outlined">
				rotate_right
			</span>
		</EntCard>
	);
}	