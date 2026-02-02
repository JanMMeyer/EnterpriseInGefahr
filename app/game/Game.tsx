import { Board } from "./board/Board";
import { EntMoveOneFwdCard } from "./cards/EntMoveFwdOne";
import { EntMoveTwoFwdCard } from "./cards/EntMoveFwdTwo copy";
import { CardArea } from "./cards/shared/CardArea";

import { FederationShip } from "./ships/FederationShip";
import { GameStateContext } from "./state/GameStateContext";
import { useGameState } from "./state/useGameState";

export const GameConfig = {
  cols: 16,
  rows: 10,
  cellSize: 80,
}

export function Game() {
  const { federationShip, klingonShip, activeShip, moveShip, setActiveShip } = useGameState();
  return (
	<GameStateContext value={{
	  federationShip,
	  klingonShip,
	  activeShip,
	  moveShip,
	  setActiveShip,
	}}>
		<div 
			className="grid grid-cols-[auto_auto_auto] items-center gap-2 h-full bg-cyan-700"
			style={{ minWidth: GameConfig.cols * GameConfig.cellSize + 200 }}
		>
			<CardArea>
				<EntMoveOneFwdCard />
				<EntMoveTwoFwdCard />
			</CardArea>
			<Board>
				<FederationShip />
			</Board>
		</div>
	</GameStateContext>
  );
}