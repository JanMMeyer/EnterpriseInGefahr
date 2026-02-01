export type CardProps = {
  children: React.ReactNode;
  onClick: () => void;
};

export function Card({ children, onClick }: CardProps) {
  return (
    <div className="w-18 h-22 bg-white rounded shadow-xl p-4 flex items-center justify-center cursor-pointer select-none" onClick={onClick}>
		{children}
	</div>
  );
}