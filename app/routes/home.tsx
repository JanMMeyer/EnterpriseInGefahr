import type { Route } from "./+types/home";
import { Game } from "../game/Game";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Enterprise in Gefahr" },
    { name: "GameDescription", content: "Game of Enterprise in Gefahr!" },
  ];
}

export default function Home() {
  return <Game />;
}
