import { useContext } from "react";
import { GameStateContext } from "../state/GameStateContext";
import { Card } from "./shared/Card";

export function EntMoveTwoFwdCard() {
	const { moveShip } = useContext(GameStateContext);
	return (
		<Card onClick={() => moveShip("federation", 2)}>
			<span className="material-symbols-outlined">
				arrow_forward
			</span>
			<span className="material-symbols-outlined">
				arrow_forward
			</span>
		</Card>
	);
}	