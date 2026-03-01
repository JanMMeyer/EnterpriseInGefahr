import { useContext } from "react";
import { GameStateContext } from "~/game/state/GameStateContext";
import { Intersectable } from "../utils/Intersectable.class";
import { GameConfig } from "~/game/Game";

export function Pew() {
	const { pew, federationShip, klingonShip } = useContext(GameStateContext);
	if (pew === null) return null;
	const horizontal = pew.orientation === 'right' || pew.orientation === 'left';
	const targetShip = pew.shootingFaction === "federation" ? klingonShip : federationShip;
	// const opponentShipSetStateFn = shootingFaction === "federation" ?  setKlingonShip : setFederationShip
	if (new Intersectable(pew).intersectsWith(targetShip)) {
		switch (pew.orientation) {
			case "right":
				pew.length = pew.origin.x - targetShip.origin.x;
				break;
			case "left":
				pew.length = targetShip.origin.x - pew.origin.x;
				break;
			case "up":
				pew.length = pew.origin.y - targetShip.origin.y;
				break;
			case "down":
				pew.length = targetShip.origin.y - pew.origin.y;
				break;
		}
	}

	const {minX, maxX, minY, maxY} = intersectablePew.boundingBox;


	const gridPosition = {
		gridColumnStart: pew.orientation === 'right' ? Math.max(1, minX + 1) : Math.max(1, minX),
		gridColumnEnd: pew.orientation === 'right' ? Math.min(GameConfig.cols + 1, maxX + 1) : Math.min(GameConfig.cols + 1, maxX),
		gridRowStart: pew.orientation === 'down' ? Math.max(1, minY + 1 ) : Math.max(1, minY),
		gridRowEnd: pew.orientation === 'down' ? Math.min(GameConfig.rows + 1, maxY + 1) : Math.min(GameConfig.rows + 1, maxY),
	}

	const flexDirection = horizontal ? 'row' : 'column';
	const raySize = horizontal ? { width: '100%', height: '2px' } : { width: '2px', height: '100%' };
	return (
		<div className="relative flex items-center " style={{ ...gridPosition, flexDirection }}>
			{/* <span className="absolute top-3 left-0 bg-lime-300 text-xs">{JSON.stringify(intersectablePew.boundingBox)}</span>
			<span className="absolute top-0 left-0 bg-lime-300 text-xs">{JSON.stringify(gridPosition)}</span> */}
			<div className="grow bg-orange-500" style={{ ...raySize }}></div>
		</div>
	);
}