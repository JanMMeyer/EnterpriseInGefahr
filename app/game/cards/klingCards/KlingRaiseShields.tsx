import { useContext } from "react";
import { GameStateContext } from "../../state/GameStateContext";
import { KlingonCard } from "../shared/KlingonCard";

export function KlingRaiseShieldsCard() {
	const { raiseShields } = useContext(GameStateContext);
	return (
		<KlingonCard onClick={() => raiseShields("klingon")}>
			<span className="material-symbols-outlined">
				shield
			</span>
		</KlingonCard>
	);
}
