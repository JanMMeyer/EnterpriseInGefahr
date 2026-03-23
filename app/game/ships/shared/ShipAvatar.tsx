import { GameConfig } from "~/game/Game";
import type { Ship } from "../../shared/types/Ship.type";
import { shipTypeToImgSrc } from "../../shared/utils/shipTypeToImgSrc";
import { ShieldEffect } from "./Shields";

export type ShipProps = Ship & {
  imgRotation: number;
  imgScale?: number;
};

export function ShipAvatar({ type, origin: position, orientation, shields, imgRotation, imgScale = 0.85 }: ShipProps) {
  if (type === null) return null;

  const shipRotation = orientation === 'up' ? -90 : orientation === 'down' ? 90 : orientation === 'left' ? 180 : 0;
  const imageSize = GameConfig.cellSize * imgScale;

  return (
    <div style={{
      gridColumn: position.x,
      gridRow: position.y,
      justifySelf: "center",
      alignSelf: "center",
      position: "relative",
    }}>
      <img
        src={shipTypeToImgSrc.get(type)}
        style={{
          width: imageSize,
          height: imageSize,
          transform: `rotate(${imgRotation + shipRotation}deg)`,
        }}
      />
      <ShieldEffect shields={shields} imageSize={imageSize} />
    </div>
  );
}