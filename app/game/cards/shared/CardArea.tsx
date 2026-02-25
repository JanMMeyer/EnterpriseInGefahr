export type CardAreaProps = {
  children: React.ReactNode;
};

export function CardArea({ children }: CardAreaProps) {
  return (
    <div className="flex flex-col gap-2 items-center h-full p-3 rounded bg-white/30 shadow-xl">{children}</div>
  );
}