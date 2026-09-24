import { useMemo, useState } from "react";
import { AudioBar, speechUnlocked, unlockSpeech } from "@/components/lesson/audio-bar";
import { SpeakPanel } from "@/components/lesson/speak-panel";
import { BiText } from "@/components/text/bi-text";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { KanaGroup } from "@/lib/content/types";
import { speakJapanese } from "@/lib/speech";
import { useProgress } from "@/lib/store";
import { cn, shuffle } from "@/lib/utils";

export function KanaJourney({
  groups,
  title,
  kicker,
}: {
  groups: KanaGroup[];
  title: string;
  kicker: string;
}) {
  const completed = useProgress((s) => s.completedKanaGroups);
  const complete = useProgress((s) => s.completeKanaGroup);
  const meet = useProgress((s) => s.meetKana);
  const showRomaji = useProgress((s) => s.showRomaji);
  const rate = useProgress((s) => s.voiceRate);
  const [open, setOpen] = useState<string | null>(null);
  const group = groups.find((g) => g.id === open);

  if (group) {
    return (
      <GroupPractice
        group={group}
        showRomaji={showRomaji}
        rate={rate}
        onDone={() => {
          meet(group.chars.map((c) => c.char));
          complete(group.id);
          setOpen(null);
        }}
        onBack={() => setOpen(null)}
      />
    );
  }

  return (
    <main className="px-4 pb-4 pt-2">
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">{kicker}</p>
      <h1 className="mt-1 font-display text-[1.65rem] font-medium leading-tight">{title}</h1>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        No giant chart to memorize. Characters arrive through words you already heard.
      </p>
      <div className="mt-5 space-y-2">
        {groups.map((g) => (
          <button
            key={g.id}
            type="button"
            onClick={() => setOpen(g.id)}
            className="w-full text-left"
          >
            <Card className="flex items-center gap-3 p-4">
              <span lang="ja" className="ja w-16 text-2xl">
                {g.word.ja}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-medium">{g.title.en}</span>
                <span className="block text-xs text-muted-foreground">{g.word.meaning.en}</span>
              </span>
              {completed.includes(g.id) ? <span className="text-xs text-success">Met</span> : null}
            </Card>
          </button>
        ))}
      </div>
    </main>
  );
}

function GroupPractice({
  group,
  showRomaji,
  rate,
  onDone,
  onBack,
}: {
  group: KanaGroup;
  showRomaji: boolean;
  rate: number;
  onDone: () => void;
  onBack: () => void;
}) {
  const autoPlay = useProgress((s) => s.autoPlay);
  const [phase, setPhase] = useState(0);
  const quiz = useMemo(() => {
    const target = shuffle(group.chars)[0]!;
    const opts = shuffle([target, ...shuffle(group.chars.filter((c) => c.char !== target.char)).slice(0, 3)]);
    return { target, opts };
  }, [group, phase]);
  const [picked, setPicked] = useState<string | null>(null);

  if (phase === 0) {
    return (
      <main className="px-4 pb-8 pt-3">
        <button type="button" onClick={onBack} className="mb-4 min-h-11 text-sm text-muted-foreground">
          Back
        </button>
        <p lang="ja" className="ja text-center text-4xl">
          {group.word.ja}
        </p>
        {showRomaji ? <p className="mt-1 text-center text-sm text-muted-foreground">{group.word.romaji}</p> : null}
        <BiText text={group.word.meaning} revealed className="mt-2 text-center" />
        <div className="mt-4">
          <AudioBar ja={group.word.ja} auto={autoPlay && speechUnlocked()} />
        </div>
        <Button className="mt-6 w-full" size="lg" onClick={() => setPhase(1)}>
          See the pieces
        </Button>
      </main>
    );
  }

  if (phase === 1) {
    return (
      <main className="px-4 pb-8 pt-3">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Pieces of {group.word.ja}</p>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {group.chars.map((c) => (
            <button
              key={c.char}
              type="button"
              onClick={() => {
                unlockSpeech();
                speakJapanese(c.char, { rate });
              }}
              className="flex flex-col items-center rounded-[var(--radius-lg)] bg-card py-4 shadow-[var(--shadow-border)]"
            >
              <span lang="ja" className="ja text-3xl">
                {c.char}
              </span>
              {showRomaji ? <span className="mt-1 text-xs text-muted-foreground">{c.romaji}</span> : null}
            </button>
          ))}
        </div>
        {group.chars.some((c) => c.note) ? (
          <div className="mt-4 space-y-2">
            {group.chars
              .filter((c) => c.note)
              .map((c) => (
                <p key={c.char} className="text-sm text-muted-foreground">
                  {c.char}: {c.note!.en}
                </p>
              ))}
          </div>
        ) : null}
        <Button className="mt-6 w-full" onClick={() => setPhase(2)}>
          Hear a sound, pick the character
        </Button>
      </main>
    );
  }

  if (phase === 2) {
    return (
      <main className="px-4 pb-8 pt-3 space-y-4">
        <p className="text-sm">Listen, then choose the character you heard.</p>
        <AudioBar ja={quiz.target.char} auto={autoPlay && speechUnlocked()} size="lg" />
        <div className="grid grid-cols-2 gap-2">
          {quiz.opts.map((o) => (
            <button
              key={o.char}
              type="button"
              disabled={picked !== null}
              onClick={() => setPicked(o.char)}
              className={cn(
                "flex h-20 items-center justify-center rounded-[var(--radius-lg)] bg-card font-display text-3xl shadow-[var(--shadow-border)]",
                picked && o.char === quiz.target.char && "bg-success/10",
                picked === o.char && o.char !== quiz.target.char && "bg-destructive/10",
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
              setPhase(3);
            }}
          >
            Repeat the word
          </Button>
        ) : null}
      </main>
    );
  }

  return (
    <main className="px-4 pb-8 pt-3 space-y-4">
      <p lang="ja" className="ja text-center text-4xl">
        {group.word.ja}
      </p>
      <AudioBar ja={group.word.ja} />
      <SpeakPanel ja={group.word.ja} />
      <Button className="w-full" size="lg" onClick={onDone}>
        Mark as met
      </Button>
    </main>
  );
}
