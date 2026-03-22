import { useContext } from "react";
import { GameStateContext } from "../../state/GameStateContext";
import { Card } from "./Card";

export type KlingonCardProps = {
	children: React.ReactNode;
	onClick: () => void;
  };
  
export function KlingonCard({ children, onClick }: KlingonCardProps) {
	const { activeShip } = useContext(GameStateContext);
	const disabled = activeShip !== "klingon";

	return (
		<Card 
			bgImage="/Logo_Klingon.svg"
			onClick={onClick}
			disabled={disabled}
			className="bg-red-600"
			innerClassName="bg-white/50 flex flex-col items-center justify-center"
			style={{ backgroundSize: '190%' }}
		>{children}</Card>
	);
}	