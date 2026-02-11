import { Board } from "./board/Board";
import { EntMoveOneFwdCard } from "./cards/EntMoveFwdOne";
import { EntMoveTwoFwdCard } from "./cards/EntMoveFwdTwo";
import { EntRotateCCWCard } from "./cards/EntRotateCCW";
import { EntRotateCWCard } from "./cards/EntRotateCW";
import { KlingMoveOneFwdCard } from "./cards/klingCards/KlingMoveFwdOne";
import { KlingMoveTwoFwdCard } from "./cards/klingCards/KlingMoveFwdTwo";
import { KlingRotateCWCard } from "./cards/klingCards/KlingRotateCW";
import { KlingRotateCCWCard } from "./cards/klingCards/KlingtRotateCCW";
import { CardArea } from "./cards/shared/CardArea";
import { ShipPicker } from "./shipPicker/ShipPicker";

import { FederationShip } from "./ships/FederationShip";
import { KlingonShip } from "./ships/KlingonShip";
import { GameStateContext } from "./state/GameStateContext";
import { useGameState } from "./state/useGameState";

export const GameConfig = {
  cols: 16,
  rows: 10,
  cellSize: 80,
}

export function Game() {
  const { federationShip, klingonShip, activeShip, moveShip, rotateShip, setActiveShip, setFederationShipType } = useGameState();
  return (
	<GameStateContext value={{
	  federationShip,
	  klingonShip,
	  activeShip,
	  moveShip,
	  rotateShip,
	  setActiveShip,
	  setFederationShipType,
	}}>
		<div 
			className="relative grid grid-cols-[auto_auto_auto] items-center gap-2 h-full bg-cyan-700"
			style={{ minWidth: GameConfig.cols * GameConfig.cellSize + 200 }}
		>
			<CardArea>
				<EntMoveOneFwdCard />
				<EntMoveTwoFwdCard />
				<EntRotateCWCard />
				<EntRotateCCWCard />
			</CardArea>
			<Board>
				<FederationShip />
				<KlingonShip />
			</Board>
			<CardArea>
				<KlingMoveOneFwdCard />
				<KlingMoveTwoFwdCard />
				<KlingRotateCWCard />
				<KlingRotateCCWCard />
			</CardArea>
			<ShipPicker open={federationShip.type === null} />
		</div>
	</GameStateContext>
  );
}