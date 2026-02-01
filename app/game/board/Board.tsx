import { GameConfig } from "../Game";
import { FederationShip } from "../ships/FederationShip";

export type BoardProps = {
 children: React.ReactNode;
};
export function Board({ children }: BoardProps) {
	const cols = GameConfig.cols;
	const rows = GameConfig.rows;
	const cellSize = GameConfig.cellSize;
	const cells = Array.from({ length: cols * rows }, (_, i) => i);
  
	return (
	  <div
		className="grid size-fit border border-pink-500/50"
		style={{
		  gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
		  gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
		  gap: 0,
		  backgroundImage: "url('/nebula.jpg')",
		  backgroundSize: "cover",
		  backgroundPosition: "center",
		}}
	  >
		{cells.map((i) => (
		  <div key={i} className="border border-pink-500/50" />
		))}
		{children}
	  </div>
	);	
  }