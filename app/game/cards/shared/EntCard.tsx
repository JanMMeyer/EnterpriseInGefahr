import { Card } from "./Card";

export type EntCardProps = {
	children: React.ReactNode;
	onClick: () => void;
  };
  
export function EntCard({ children, onClick }: EntCardProps) {

	return (
		<Card 
			bgImage="/icons8-star-trek-symbol-100.svg"
			onClick={onClick}
			className="bg-blue-600"
			innerClassName="bg-white/50 flex flex-col items-center justify-center"
		>{children}</Card>
	);
}	