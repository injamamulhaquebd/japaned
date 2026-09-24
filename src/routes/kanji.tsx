import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AudioBar, unlockSpeech } from "@/components/lesson/audio-bar";
import { Page } from "@/components/layout/app-shell";
import { BiText } from "@/components/text/bi-text";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { kanjiItems } from "@/lib/content";
import { speakJapanese } from "@/lib/speech";
import { useProgress } from "@/lib/store";

export const Route = createFileRoute("/kanji")({ component: Kanji });

function Kanji() {
  const completed = useProgress((s) => s.completedKanji);
  const complete = useProgress((s) => s.completeKanji);
  const meet = useProgress((s) => s.meetKanji);
  const rate = useProgress((s) => s.voiceRate);
  const showRomaji = useProgress((s) => s.showRomaji);
  const [open, setOpen] = useState<string | null>(null);
  const item = kanjiItems.find((k) => k.id === open);

  if (item) {
    const sentence = item.sentences[0]!;
    return (
      <main className="px-4 pb-8 pt-3 space-y-5">
        <button type="button" onClick={() => setOpen(null)} className="min-h-11 text-sm text-muted-foreground">
          Back
        </button>
        <div className="flex items-end justify-center gap-4">
          <span lang="ja" className="ja text-2xl text-muted-foreground">
            {item.fromKana}
          </span>
          <span className="text-muted-foreground">→</span>
          <span lang="ja" className="ja text-6xl">
            {item.kanji}
          </span>
        </div>
        {showRomaji ? (
          <p className="text-center text-sm text-muted-foreground">{item.readings.join(" · ")}</p>
        ) : null}
        <BiText text={item.meaning} revealed className="text-center" />
        <Card className="space-y-3 p-5">
          <p lang="ja" className="ja text-2xl">
            {sentence.ja}
          </p>
          {showRomaji ? <p className="text-sm text-muted-foreground">{sentence.romaji}</p> : null}
          <AudioBar ja={sentence.ja} />
          <BiText text={sentence.meaning} revealed />
        </Card>
        <div className="flex flex-wrap justify-center gap-2">
          {item.sentences.map((s) => (
            <Button
              key={s.ja}
              variant="outline"
              onClick={() => {
                unlockSpeech();
                speakJapanese(s.ja, { rate });
              }}
            >
              Hear again
            </Button>
          ))}
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          You will see this character again in other sentences. That is how it stays — not as a list.
        </p>
        <Button
          className="w-full"
          size="lg"
          onClick={() => {
            meet(item.kanji);
            complete(item.id);
            setOpen(null);
          }}
        >
          I have met this
        </Button>
      </main>
    );
  }

  return (
    <Page title="Useful N5 kanji" kicker="Kanji">
      <p className="text-sm leading-relaxed text-muted-foreground">
        Not a wall of characters. Each one arrives from a word you already lived, then returns in a sentence.
      </p>
      <div className="grid grid-cols-4 gap-2">
        {kanjiItems.map((k) => (
          <button
            key={k.id}
            type="button"
            onClick={() => setOpen(k.id)}
            className="flex aspect-square flex-col items-center justify-center rounded-[var(--radius-lg)] bg-card shadow-[var(--shadow-border)]"
          >
            <span lang="ja" className="ja text-2xl">
              {k.kanji.length > 1 ? k.kanji.slice(0, 1) : k.kanji}
            </span>
            {completed.includes(k.id) ? <span className="mt-1 text-[10px] text-success">met</span> : null}
          </button>
        ))}
      </div>
    </Page>
  );
}
