import { useContext } from "react";
import { GameStateContext } from "../state/GameStateContext";
import { Card } from "./shared/Card";

export function MoveFwdOneCard() {
	const { moveFederationShip } = useContext(GameStateContext);
	return (
		<Card onClick={() => moveFederationShip("right")}>
			<span className="material-symbols-outlined">
				arrow_forward
			</span>
		</Card>
	);
}	