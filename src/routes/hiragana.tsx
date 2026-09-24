import { createFileRoute } from "@tanstack/react-router";
import { KanaJourney } from "@/components/kana/journey";
import { hiraganaGroups } from "@/lib/content";

export const Route = createFileRoute("/hiragana")({ component: Hiragana });

function Hiragana() {
  return <KanaJourney groups={hiraganaGroups} title="Hiragana from words" kicker="Hiragana" />;
}
