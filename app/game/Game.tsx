import { Board } from "./board/Board";
import { CardArea } from "./cards/shared/CardArea";
import { MoveFwdOneCard } from "./cards/MoveFwdOne";
import { FederationShip } from "./ships/FederationShip";
import { GameStateContext } from "./state/GameStateContext";
import { useGameState } from "./state/useGameState";

export const GameConfig = {
  cols: 16,
  rows: 10,
  cellSize: 80,
}

export function Game() {
  const { federationShipPosition, klingonShipPosition, activeShip, moveFederationShip, moveKlingonShip, setActiveShip } = useGameState();
  return (
	<GameStateContext value={{
	  federationShipPosition,
	  klingonShipPosition,
	  activeShip,
	  moveFederationShip,
	  moveKlingonShip,
	  setActiveShip,
	}}>
		<div 
			className="grid grid-cols-[auto_auto_auto] items-center gap-2 h-full bg-cyan-700"
			style={{ minWidth: GameConfig.cols * GameConfig.cellSize + 200 }}
		>
			<CardArea>
				<MoveFwdOneCard />
			</CardArea>
			<Board>
				<FederationShip />
			</Board>
		</div>
	</GameStateContext>
  );
}