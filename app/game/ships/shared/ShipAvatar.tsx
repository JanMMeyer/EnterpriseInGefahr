import { GameConfig } from "~/game/Game";
import type { Ship } from "./Ship.type";

export type ShipProps = Ship &{
  imgSrc: string;
  imgRotation: number;
  imgScale: number;
};

export function ShipAvatar({ position, orientation, imgSrc, imgRotation, imgScale }: ShipProps) {
const shipRotation = orientation === 'up' ? -90 : orientation === 'down' ? 90 : orientation === 'left' ? 180 : 0;
  return (
    <img
      src={imgSrc}
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