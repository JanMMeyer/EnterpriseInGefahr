import { useContext } from "react";
import { GameStateContext } from "../state/GameStateContext";
import { Card } from "./shared/Card";

export function EntMoveOneFwdCard() {
	const { moveShip } = useContext(GameStateContext);
	return (
		<Card onClick={() => moveShip("federation", 1)}>
			<span className="material-symbols-outlined">
				arrow_forward
			</span>
		</Card>
	);
}	