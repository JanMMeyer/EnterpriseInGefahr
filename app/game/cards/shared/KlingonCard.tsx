import { Card } from "./Card";

export type KklingonCardProps = {
	children: React.ReactNode;
	onClick: () => void;
  };
  
export function KlingonCard({ children, onClick }: KklingonCardProps) {

	return (
		<Card 
			bgImage="/Logo_Klingon.svg"
			onClick={onClick}
			className="bg-red-600"
			innerClassName="bg-white/50 flex flex-col items-center justify-center"
			style={{ backgroundSize: '190%' }}
		>{children}</Card>
	);
}	