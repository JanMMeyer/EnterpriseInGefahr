import { EntRotateCCWCard } from "../entCards/EntRotateCCW";
import type { CardType } from "../shared/Card.type";
import { KlingMoveOneFwdCard } from "./KlingMoveFwdOne";
import { KlingMoveTwoFwdCard } from "./KlingMoveFwdTwo";
import { KlingRaiseShieldsCard } from "./KlingRaiseShields";
import { KlingRotateCWCard } from "./KlingRotateCW";
import { KlingonShootCard } from "./KlingShoot";
import { KlingRotateCCWCard } from "./KlingtRotateCCW";

export function KlingCardFactory({ cardType }: { cardType: CardType }) {
	switch (cardType) {
		case "MoveOneFwd":
			return <KlingMoveOneFwdCard />;
		case "MoveTwoFwd":
			return <KlingMoveTwoFwdCard />;
		case "RotateCW":
			return <KlingRotateCWCard />;
		case "RotateCCW":
			return <KlingRotateCCWCard />;
		case "Shoot":
			return <KlingonShootCard />;
		case "RaiseShields":
			return <KlingRaiseShieldsCard />;
		default:
			return null;
	}
}