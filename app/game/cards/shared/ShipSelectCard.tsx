import { Card } from "./Card";

export type ShipSelectCardProps = {
	children: React.ReactNode;
	onClick: () => void;
  };
  
export function ShipSelectCard({ children, onClick }: ShipSelectCardProps) {

	return (
		<Card 
			onClick={onClick}
			className="bg-blue-200"
			innerClassName="bg-white/50"
		>{children}</Card>
	);
}	