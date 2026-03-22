import { useContext } from "react";
import { GameStateContext } from "../state/GameStateContext";

export function GameOverOverlay() {
	const { winner } = useContext(GameStateContext);
	if (!winner) return null;

	const winnerLabel = winner === "federation" ? "Federation" : "Klingon Empire";
	const winnerClassname = winner === "federation" ? "font-bold text-cyan-500" : "font-bold text-red-600";
	return (
		<div className="size-full absolute inset-0 bg-teal-900/95 flex flex-col items-center justify-center z-50 animate-fade-in">
			<h1 className="text-6xl text-teal-400 mb-16">
			The <span className={winnerClassname}>{winnerLabel}</span> wins!
			</h1>
			<button
				className="px-8 py-3 text-xl font-semibold rounded-lg bg-teal-500 hover:bg-teal-400 text-black transition-colors cursor-pointer"
				onClick={() => window.location.reload()}
			>
				Play Again
			</button>
		</div>
	);
}
