import { GameConfig } from "~/game/Game";
import type { ShipPosition } from "~/game/state/GameState.interface";

export type ShipProps = {
  position: ShipPosition;
  imgSrc: string;
  imgRotation: number;
  imgScale: number;
};

export function Ship({ position, imgSrc, imgRotation, imgScale }: ShipProps) {
  return (
    <img
      src={imgSrc}
      style={{
        width: GameConfig.cellSize * imgScale,
        height: GameConfig.cellSize * imgScale,
        transform: `rotate(${imgRotation}deg)`,
        gridColumn: position.x,
        gridRow: position.y,
        justifySelf: "center",
        alignSelf: "center",
      }}
    />
  );
}