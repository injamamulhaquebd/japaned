import { createFileRoute } from "@tanstack/react-router";
import { KanaJourney } from "@/components/kana/journey";
import { katakanaGroups } from "@/lib/content";

export const Route = createFileRoute("/katakana")({ component: Katakana });

function Katakana() {
  return <KanaJourney groups={katakanaGroups} title="Katakana from loanwords" kicker="Katakana" />;
}
