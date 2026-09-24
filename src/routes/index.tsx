import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SceneArt } from "@/components/art/scene";
import { AudioBar } from "@/components/lesson/audio-bar";
import { Page } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { lessons, nextLesson } from "@/lib/content";
import { useProgress } from "@/lib/store";

export const Route = createFileRoute("/")({ component: Home });

function greeting() {
  const h = new Date().getHours();
  if (h < 11) return { ja: "おはよう。", romaji: "ohayou", en: "The morning greeting", bn: "সকালের অভিবাদন" };
  if (h < 18) return { ja: "こんにちは。", romaji: "konnichiwa", en: "The daytime greeting", bn: "দিনের অভিবাদন" };
  return { ja: "こんばんは。", romaji: "konbanwa", en: "The evening greeting", bn: "সন্ধ্যার অভিবাদন" };
}

function Home() {
  const name = useProgress((s) => s.learnerName);
  const completed = useProgress((s) => s.completedLessons);
  const streak = useProgress((s) => s.streak);
  const listenCount = useProgress((s) => s.listenCount);
  const next = nextLesson(completed);
  const g = greeting();
  const pct = Math.round((completed.length / lessons.length) * 100);

  return (
    <Page title={`Hello, ${name}`} kicker="Home">
      <Card className="overflow-hidden">
        <SceneArt art={g.ja.startsWith("おは") ? "morning" : g.ja.startsWith("こんば") ? "night" : "day"} />
        <div className="space-y-3 p-5">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Right now</p>
          <p lang="ja" className="ja text-3xl">
            {g.ja}
          </p>
          <p className="text-sm text-muted-foreground">
            {g.en} · {g.bn}
          </p>
          <AudioBar ja={g.ja} />
        </div>
      </Card>

      <div className="grid grid-cols-3 gap-2">
        <Stat label="Streak" value={`${streak}d`} />
        <Stat label="Lived" value={`${completed.length}`} />
        <Stat label="Heard" value={`${listenCount}`} />
      </div>

      <Card className="p-5">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">N5 path</p>
        <Progress value={pct} className="mt-3" />
        <p className="mt-2 text-sm text-muted-foreground">{completed.length} of {lessons.length} situations</p>
      </Card>

      <Card className="p-5">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Continue</p>
        <h2 className="mt-1 font-display text-xl">{next.title.en}</h2>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{next.teaser.en}</p>
        <p className="text-sm text-muted-foreground">{next.teaser.bn}</p>
        <Button asChild className="mt-4 w-full" size="lg">
          <Link to="/lesson/$id" params={{ id: next.id }}>
            Open this situation
            <ArrowRight />
          </Link>
        </Button>
      </Card>

      <Button asChild variant="outline" className="w-full" size="lg">
        <Link to="/daily">Today’s short lesson</Link>
      </Button>
    </Page>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[var(--radius-lg)] bg-card px-3 py-3 shadow-[var(--shadow-border)]">
      <p className="text-[11px] text-muted-foreground">{label}</p>
      <p className="mt-1 font-display text-xl tabular-nums">{value}</p>
    </div>
  );
}
