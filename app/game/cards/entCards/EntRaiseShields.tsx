import { useContext } from "react";
import { GameStateContext } from "../../state/GameStateContext";
import { EntCard } from "../shared/EntCard";

export function EntRaiseShieldsCard() {
	const { raiseShields } = useContext(GameStateContext);
	return (
		<EntCard onClick={() => raiseShields("federation")}>
			<span className="material-symbols-outlined">
				shield
			</span>
		</EntCard>
	);
}
