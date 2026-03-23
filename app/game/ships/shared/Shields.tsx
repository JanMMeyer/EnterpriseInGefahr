const BASE_RADIUS = 30;
const GAP = 5;

type ShieldEffectProps = {
  shields: number;
  imageSize: number;
};

export function ShieldEffect({ shields, imageSize }: ShieldEffectProps) {
  if (shields <= 0) return null;

  const center = imageSize / 2;
  const thickCircles = Math.floor(shields / 2);
  const hasRemainder = shields % 2 === 1;

  return (
    <svg
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        pointerEvents: "none",
        overflow: "visible",
      }}
      width={imageSize}
      height={imageSize}
    >
      {Array.from({ length: thickCircles }, (_, i) => (
        <circle
          key={i}
          cx={center}
          cy={center}
          r={BASE_RADIUS + i * GAP}
          fill="none"
          stroke="rgba(80, 160, 255, 0.80)"
          strokeWidth={3}
        />
      ))}
      {hasRemainder && (
        <circle
          cx={center}
          cy={center}
          r={BASE_RADIUS + thickCircles * GAP}
          fill="none"
          stroke="rgba(80, 160, 255, 0.55)"
          strokeWidth={3}
        />
      )}
    </svg>
  );
}
