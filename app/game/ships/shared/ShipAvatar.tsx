import { GameConfig } from "~/game/Game";
import type { Ship } from "../../shared/types/Ship.type";
import { shipTypeToImgSrc } from "../../shared/utils/shipTypeToImgSrc";

export type ShipProps = Ship & {
  imgRotation: number;
  imgScale?: number;
};

export function ShipAvatar({ type, origin: position, orientation, imgRotation, imgScale = 0.85 }: ShipProps) {

if (type === null) return null;
const shipRotation = orientation === 'up' ? -90 : orientation === 'down' ? 90 : orientation === 'left' ? 180 : 0;
return (
    <img
      src={shipTypeToImgSrc.get(type)}
      style={{
        width: GameConfig.cellSize * imgScale,
        height: GameConfig.cellSize * imgScale,
        transform: `rotate(${imgRotation + shipRotation}deg)`,
        gridColumn: position.x,
        gridRow: position.y,
        justifySelf: "center",
        alignSelf: "center",
      }}
    />
  );
}