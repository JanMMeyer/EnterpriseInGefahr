import type { CardType } from "../shared/Card.type";
import { EntMoveOneFwdCard } from "./EntMoveFwdOne";
import { EntMoveTwoFwdCard } from "./EntMoveFwdTwo";
import { EntRaiseShieldsCard } from "./EntRaiseShields";
import { EntRotateCCWCard } from "./EntRotateCCW";
import { EntRotateCWCard } from "./EntRotateCW";
import { EntShootCard } from "./EntShoot";

export function EntCardFactory({ cardType }: { cardType: CardType }) {
	switch (cardType) {
		case "MoveOneFwd":
			return <EntMoveOneFwdCard />;
		case "MoveTwoFwd":
			return <EntMoveTwoFwdCard />;
		case "RotateCW":
			return <EntRotateCWCard />;
		case "RotateCCW":
			return <EntRotateCCWCard />;
		case "Shoot":
			return <EntShootCard />;
		case "RaiseShields":
			return <EntRaiseShieldsCard />;
		default:
			return null;
	}
}