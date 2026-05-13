import type { CardType } from "./Card.type";

export function CardPile({ numberOfCards, cardComponent }: { numberOfCards: number, cardComponent: React.ReactNode }) {
	const cards = Array.from({ length: numberOfCards }, () => cardComponent);
	return (
		<div className="flex flex-col gap-2 items-center h-full p-3 rounded bg-white/30 shadow-xl">
			{cards.map((card) => card)}
		</div>
	);
}