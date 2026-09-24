import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { AudioBar, speechUnlocked } from "@/components/lesson/audio-bar";
import { SpeakPanel } from "@/components/lesson/speak-panel";
import { Page } from "@/components/layout/app-shell";
import { BiText } from "@/components/text/bi-text";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { buildReviewSet, type ReviewItem } from "@/lib/review";
import { useProgress } from "@/lib/store";
import { cn, shuffle } from "@/lib/utils";

export const Route = createFileRoute("/review")({ component: Review });

function Review() {
  const completed = useProgress((s) => s.completedLessons);
  const mark = useProgress((s) => s.markReview);
  const items = useMemo(() => buildReviewSet(completed, 8), [completed]);
  const [i, setI] = useState(0);
  const [finished, setFinished] = useState(false);
  const item = items[i];

  const next = () => {
    mark();
    if (i + 1 >= items.length) setFinished(true);
    else setI(i + 1);
  };

  if (finished) {
    return (
      <Page title="That's enough for now" kicker="Review">
        <p className="text-sm leading-relaxed text-muted-foreground">
          You listened, chose situations, completed shapes, and spoke. The language stays by returning, not by testing.
        </p>
        <Button
          className="w-full"
          onClick={() => {
            setI(0);
            setFinished(false);
          }}
        >
          Another short round
        </Button>
      </Page>
    );
  }

  return (
    <Page title="Return to Japanese" kicker="Review">
      <p className="text-sm text-muted-foreground">
        Not a translation quiz — listen, choose, complete, respond.
      </p>
      <p className="text-xs tabular-nums text-muted-foreground">
        {i + 1} / {items.length}
      </p>
      {item ? <ReviewCard key={`${item.kind}-${i}`} item={item} onNext={next} /> : null}
    </Page>
  );
}

function ReviewCard({ item, onNext }: { item: ReviewItem; onNext: () => void }) {
  const showRomaji = useProgress((s) => s.showRomaji);
  const autoPlay = useProgress((s) => s.autoPlay);
  const [picked, setPicked] = useState<string | null>(null);

  if (item.kind === "listen") {
    return (
      <Card className="space-y-4 p-5">
        <p lang="ja" className="ja text-center text-2xl">
          {item.ja}
        </p>
        <AudioBar ja={item.ja} auto={autoPlay && speechUnlocked()} />
        <BiText text={item.question} revealed />
        <div className="space-y-2">
          {item.options.map((o, idx) => (
            <button
              key={idx}
              type="button"
              disabled={picked !== null}
              onClick={() => setPicked(String(idx))}
              className={cn(
                "w-full rounded-[var(--radius-md)] bg-background px-4 py-3 text-left text-sm shadow-[var(--shadow-border)]",
                picked !== null && o.correct && "bg-success/10",
                picked === String(idx) && !o.correct && "bg-destructive/10",
              )}
            >
              {o.label.en}
            </button>
          ))}
        </div>
        {picked !== null ? (
          <>
            <BiText text={item.meaning} revealed />
            <Button
              className="w-full"
              onClick={() => {
                setPicked(null);
                onNext();
              }}
            >
              Continue
            </Button>
          </>
        ) : null}
      </Card>
    );
  }

  if (item.kind === "complete") {
    return <CompleteReview item={item} onNext={onNext} showRomaji={showRomaji} />;
  }

  if (item.kind === "respond") {
    return (
      <Card className="space-y-4 p-5">
        <p className="text-xs uppercase tracking-wider text-muted-foreground">They say</p>
        <p lang="ja" className="ja text-2xl">
          {item.promptJa}
        </p>
        <AudioBar ja={item.promptJa} auto={autoPlay && speechUnlocked()} />
        <div className="space-y-2">
          {item.options.map((o, idx) => (
            <button
              key={idx}
              type="button"
              disabled={picked !== null}
              onClick={() => setPicked(String(idx))}
              className={cn(
                "w-full rounded-[var(--radius-md)] bg-background px-4 py-3 text-left text-sm shadow-[var(--shadow-border)]",
                picked !== null && o.correct && "bg-success/10",
                picked === String(idx) && !o.correct && "bg-destructive/10",
              )}
            >
              <span lang="ja" className="ja block">
                {o.ja}
              </span>
              <span className="text-muted-foreground">{o.meaning.en}</span>
            </button>
          ))}
        </div>
        {picked !== null ? (
          <Button
            className="w-full"
            onClick={() => {
              setPicked(null);
              onNext();
            }}
          >
            Continue
          </Button>
        ) : null}
      </Card>
    );
  }

  if (item.kind === "kana") {
    return (
      <Card className="space-y-4 p-5">
        <p className="text-sm">Which character is this sound?</p>
        <AudioBar ja={item.char} auto={autoPlay && speechUnlocked()} size="lg" />
        <div className="grid grid-cols-2 gap-2">
          {item.options.map((o) => (
            <button
              key={o.char}
              type="button"
              disabled={picked !== null}
              onClick={() => setPicked(o.char)}
              className={cn(
                "flex h-16 items-center justify-center rounded-[var(--radius-lg)] bg-background font-display text-3xl shadow-[var(--shadow-border)]",
                picked && o.correct && "bg-success/10",
                picked === o.char && !o.correct && "bg-destructive/10",
              )}
            >
              {o.char}
            </button>
          ))}
        </div>
        {picked !== null ? (
          <Button
            className="w-full"
            onClick={() => {
              setPicked(null);
              onNext();
            }}
          >
            Continue
          </Button>
        ) : null}
      </Card>
    );
  }

  if (item.kind === "kanji") {
    return (
      <Card className="space-y-4 p-5">
        <p lang="ja" className="ja text-center text-5xl">
          {item.kanji}
        </p>
        <p lang="ja" className="ja text-center text-lg">
          {item.sentence}
        </p>
        <AudioBar ja={item.sentence} />
        <div className="space-y-2">
          {item.options.map((o, idx) => (
            <button
              key={idx}
              type="button"
              disabled={picked !== null}
              onClick={() => setPicked(String(idx))}
              className={cn(
                "w-full rounded-[var(--radius-md)] bg-background px-4 py-3 text-left text-sm shadow-[var(--shadow-border)]",
                picked !== null && o.correct && "bg-success/10",
                picked === String(idx) && !o.correct && "bg-destructive/10",
              )}
            >
              {o.label.en}
            </button>
          ))}
        </div>
        {picked !== null ? (
          <Button
            className="w-full"
            onClick={() => {
              setPicked(null);
              onNext();
            }}
          >
            Continue
          </Button>
        ) : null}
      </Card>
    );
  }

  return (
    <Card className="space-y-4 p-5">
      <p lang="ja" className="ja text-center text-3xl">
        {item.ja}
      </p>
      {showRomaji ? <p className="text-center text-sm text-muted-foreground">{item.romaji}</p> : null}
      <AudioBar ja={item.ja} auto={autoPlay && speechUnlocked()} />
      <SpeakPanel ja={item.ja} />
      <BiText text={item.meaning} revealed />
      <Button className="w-full" onClick={onNext}>
        Continue
      </Button>
    </Card>
  );
}

function CompleteReview({
  item,
  onNext,
  showRomaji,
}: {
  item: Extract<ReviewItem, { kind: "complete" }>;
  onNext: () => void;
  showRomaji: boolean;
}) {
  const tiles = useMemo(() => shuffle([...item.pieces, ...item.distractors]), [item]);
  const [built, setBuilt] = useState<string[]>([]);
  const done = built.length === item.pieces.length;

  return (
    <Card className="space-y-4 p-5">
      <p className="text-sm">Complete the sentence in order.</p>
      <p lang="ja" className="ja text-xl">
        {built.join(" ") || "…"}
      </p>
      {showRomaji ? <p className="text-xs text-muted-foreground">{item.romaji}</p> : null}
      <div className="flex flex-wrap gap-2">
        {tiles.map((t, idx) => (
          <button
            key={`${t}-${idx}`}
            type="button"
            onClick={() => {
              if (t === item.pieces[built.length]) {
                const n = [...built, t];
                setBuilt(n);
              }
            }}
            className="rounded-[var(--radius-md)] bg-background px-3 py-2 font-display shadow-[var(--shadow-border)]"
          >
            {t}
          </button>
        ))}
      </div>
      {done ? (
        <>
          <BiText text={item.meaning} revealed />
          <Button className="w-full" onClick={onNext}>
            Continue
          </Button>
        </>
      ) : null}
    </Card>
  );
}
