import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SceneArt } from "@/components/art/scene";
import { AudioBar, speechUnlocked } from "@/components/lesson/audio-bar";
import { Page } from "@/components/layout/app-shell";
import { BiText } from "@/components/text/bi-text";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { reachableSentences } from "@/lib/content";
import { useProgress } from "@/lib/store";
import { cn, shuffle } from "@/lib/utils";

export const Route = createFileRoute("/listen")({ component: Listen });

function Listen() {
  const completed = useProgress((s) => s.completedLessons);
  const autoPlay = useProgress((s) => s.autoPlay);
  const queue = useMemo(() => shuffle(reachableSentences(completed)).slice(0, 8), [completed]);
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const item = queue[i];
  const options = useMemo(() => {
    if (!item) return [];
    const others = shuffle(queue.filter((s) => s.ja !== item.ja)).slice(0, 2);
    return shuffle([item, ...others]);
  }, [item, queue]);

  if (!item) {
    return (
      <Page title="Listening" kicker="Listen">
        <p className="text-sm text-muted-foreground">Live a situation first, then come back to hear it again.</p>
      </Page>
    );
  }

  return (
    <Page title="Listen first" kicker="Listening">
      <p className="text-sm leading-relaxed text-muted-foreground">
        Hear Japanese. Guess the situation. Meaning comes after.
      </p>
      <Card className="overflow-hidden">
        <SceneArt art={item.art} />
        <div className="space-y-4 p-5">
          <p lang="ja" className="ja text-center text-2xl">
            {item.ja}
          </p>
          <AudioBar ja={item.ja} auto={autoPlay && speechUnlocked()} />
          <p className="text-sm">What situation is this?</p>
          <div className="space-y-2">
            {options.map((o) => {
              const key = o.ja;
              const show = picked !== null;
              return (
                <button
                  key={key}
                  type="button"
                  disabled={picked !== null}
                  onClick={() => setPicked(key)}
                  className={cn(
                    "w-full rounded-[var(--radius-lg)] bg-background px-4 py-3 text-left text-sm shadow-[var(--shadow-border)]",
                    show && o.ja === item.ja && "bg-success/10",
                    show && picked === key && o.ja !== item.ja && "bg-destructive/10",
                  )}
                >
                  {o.title.en}
                  <span className="mt-0.5 block text-xs text-muted-foreground">{o.meaning.en}</span>
                </button>
              );
            })}
          </div>
          {picked !== null ? <BiText text={item.meaning} revealed /> : null}
          {picked !== null ? (
            <Button
              className="w-full"
              onClick={() => {
                setPicked(null);
                setI((i + 1) % queue.length);
              }}
            >
              Next sound
            </Button>
          ) : null}
        </div>
      </Card>
      <p className="text-center text-xs tabular-nums text-muted-foreground">
        {i + 1} / {queue.length}
      </p>
    </Page>
  );
}
