import { useContext } from "react";
import { GameStateContext } from "../../state/GameStateContext";
import { Card } from "./Card";

export type EntCardProps = {
	children: React.ReactNode;
	onClick: () => void;
  };
  
export function EntCard({ children, onClick }: EntCardProps) {
	const { activeShip } = useContext(GameStateContext);
	const disabled = activeShip !== "federation";

	return (
		<Card 
			bgImage="/icons8-star-trek-symbol-100.svg"
			onClick={onClick}
			disabled={disabled}
			className="bg-blue-600"
			innerClassName="bg-white/50 flex flex-col items-center justify-center"
		>{children}</Card>
	);
}	