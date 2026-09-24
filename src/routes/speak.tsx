import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { AudioBar, speechUnlocked } from "@/components/lesson/audio-bar";
import { SpeakPanel } from "@/components/lesson/speak-panel";
import { Page } from "@/components/layout/app-shell";
import { BiText } from "@/components/text/bi-text";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { reachableSentences } from "@/lib/content";
import { useProgress } from "@/lib/store";
import { shuffle } from "@/lib/utils";

export const Route = createFileRoute("/speak")({ component: Speak });

function Speak() {
  const completed = useProgress((s) => s.completedLessons);
  const autoPlay = useProgress((s) => s.autoPlay);
  const showRomaji = useProgress((s) => s.showRomaji);
  const queue = useMemo(() => shuffle(reachableSentences(completed)).slice(0, 10), [completed]);
  const [i, setI] = useState(0);
  const item = queue[i];

  if (!item) {
    return (
      <Page title="Speaking" kicker="Speak">
        <p className="text-sm text-muted-foreground">Hear a lesson first, then come copy the sounds.</p>
      </Page>
    );
  }

  return (
    <Page title="Speak like a child" kicker="Speaking">
      <p className="text-sm leading-relaxed text-muted-foreground">
        Small mistakes are allowed. Confidence first. Optional microphone — the lesson still works without it.
      </p>
      <Card className="space-y-4 p-5">
        <p lang="ja" className="ja text-center text-3xl">
          {item.ja}
        </p>
        {showRomaji ? <p className="text-center text-sm text-muted-foreground">{item.romaji}</p> : null}
        <AudioBar ja={item.ja} auto={autoPlay && speechUnlocked()} size="lg" />
        <SpeakPanel ja={item.ja} />
        <BiText text={item.meaning} revealed />
        <Button className="w-full" onClick={() => setI((i + 1) % queue.length)}>
          Next sentence
        </Button>
      </Card>
      <p className="text-center text-xs tabular-nums text-muted-foreground">
        {i + 1} / {queue.length}
      </p>
    </Page>
  );
}
