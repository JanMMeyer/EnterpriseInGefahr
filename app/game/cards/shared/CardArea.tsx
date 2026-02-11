export type CardAreaProps = {
  children: React.ReactNode;
};

export function CardArea({ children }: CardAreaProps) {
  return (
    <div className="flex flex-col gap-2 items-center h-full p-4 border-px border-pink-500">{children}</div>
  );
}