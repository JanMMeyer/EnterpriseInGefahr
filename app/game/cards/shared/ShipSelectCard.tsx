import { Card } from "./Card";

export type ShipSelectCardProps = {
	children: React.ReactNode;
	onClick: () => void;
  };
  
export function ShipSelectCard({ children, onClick }: ShipSelectCardProps) {

	return (
		<Card 
			bgImage="/icons8-star-trek-symbol-100.svg"
			onClick={onClick}
			className="bg-blue-600"
			innerClassName="bg-white/50"
		>{children}</Card>
	);
}	