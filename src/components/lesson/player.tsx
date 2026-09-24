import { Check, ChevronRight } from "lucide-react";
import { useMemo, useState, type ReactNode } from "react";
import { SceneArt } from "@/components/art/scene";
import { AudioBar, speechUnlocked, unlockSpeech } from "@/components/lesson/audio-bar";
import { SpeakPanel } from "@/components/lesson/speak-panel";
import { BiText, Ja } from "@/components/text/bi-text";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import type { ArtKey, Bi, LessonStep, TalkLine } from "@/lib/content/types";
import { useProgress } from "@/lib/store";
import { cn, shuffle } from "@/lib/utils";

function withName(ja: string, nameJa: string) {
  return ja.replace(/インジャム/g, nameJa || "インジャム");
}

function MeaningBlock({ meaning, revealed }: { meaning: Bi; revealed: boolean }) {
  if (!revealed) return null;
  return <BiText text={meaning} revealed className="mt-3" />;
}

function ChoiceButtons({
  options,
  onPick,
  picked,
}: {
  options: { key: string; label: ReactNode; correct: boolean }[];
  onPick: (correct: boolean, key: string) => void;
  picked: string | null;
}) {
  return (
    <div className="flex flex-col gap-2">
      {options.map((o) => {
        const isPicked = picked === o.key;
        const show = picked !== null;
        return (
          <button
            key={o.key}
            type="button"
            disabled={picked !== null}
            onClick={() => onPick(o.correct, o.key)}
            className={cn(
              "min-h-12 rounded-[var(--radius-lg)] bg-card px-4 py-3 text-left text-sm leading-snug shadow-[var(--shadow-border)] transition-[transform,background-color] duration-[var(--motion-quick)] active:scale-[0.98]",
              show && o.correct && "bg-success/10",
              show && isPicked && !o.correct && "bg-destructive/10",
            )}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

function BuildStep({
  target,
  tiles,
  romaji,
  meaning,
  showRomaji,
  onDone,
}: {
  target: string;
  tiles: string[];
  romaji: string;
  meaning: Bi;
  showRomaji: boolean;
  onDone: () => void;
}) {
  const pool = useMemo(() => shuffle(tiles), [tiles]);
  const [built, setBuilt] = useState<string[]>([]);
  const [wrong, setWrong] = useState<string | null>(null);
  const goal = target.replace(/\s/g, "");
  const current = built.join("");
  const nextChar = goal[current.length];

  const tap = (ch: string, i: number) => {
    if (ch === nextChar) {
      const next = [...built, ch];
      setBuilt(next);
      setWrong(null);
      if (next.join("") === goal) {
        setTimeout(onDone, 400);
      }
    } else {
      setWrong(`${ch}-${i}`);
    }
  };

  return (
    <div className="space-y-5">
      <Ja className="text-center">{built.join(" ") || "…"}</Ja>
      {showRomaji ? <p className="text-center text-sm text-muted-foreground">{romaji}</p> : null}
      <BiText text={meaning} revealed />
      <div className="flex flex-wrap justify-center gap-2">
        {pool.map((ch, i) => {
          const usedCount = built.filter((b) => b === ch).length;
          const needCount = Array.from(goal).filter((g) => g === ch).length;
          const already = usedCount >= needCount;
          return (
            <button
              key={`${ch}-${i}`}
              type="button"
              disabled={already}
              onClick={() => tap(ch, i)}
              className={cn(
                "flex size-12 items-center justify-center rounded-[var(--radius-md)] bg-card font-display text-xl shadow-[var(--shadow-border)] transition-transform duration-[var(--motion-quick)] active:scale-[0.96]",
                wrong === `${ch}-${i}` && "bg-destructive/10",
                already && "opacity-40",
              )}
            >
              {ch}
            </button>
          );
        })}
      </div>
      {current === goal ? (
        <p className="text-center text-sm text-success">The sounds sit together now.</p>
      ) : null}
    </div>
  );
}

function TalkView({
  lines,
  nameJa,
  showRomaji,
  autoPlay,
  onDone,
}: {
  lines: TalkLine[];
  nameJa: string;
  showRomaji: boolean;
  autoPlay: boolean;
  onDone: () => void;
}) {
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const line = lines[i];
  if (!line) {
    return (
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">The conversation rests here.</p>
        <Button className="w-full" size="lg" onClick={onDone}>
          Continue
        </Button>
      </div>
    );
  }

  if (line.role === "narrator") {
    return (
      <div className="space-y-5">
        <BiText text={line.meaning} revealed />
        <Button className="w-full" onClick={() => setI(i + 1)}>
          Continue
        </Button>
      </div>
    );
  }

  if (line.role === "them") {
    const ja = withName(line.ja, nameJa);
    return (
      <div className="space-y-5">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">They say</p>
        <Ja>{ja}</Ja>
        {showRomaji ? <p className="text-sm text-muted-foreground">{line.romaji}</p> : null}
        <AudioBar ja={ja} auto={autoPlay && speechUnlocked()} />
        <BiText text={line.meaning} revealed />
        <Button className="w-full" onClick={() => setI(i + 1)}>
          Continue
        </Button>
      </div>
    );
  }

  if (line.role !== "you") {
    return null;
  }

  const options = line.options.map((o, idx) => ({
    key: `${idx}`,
    correct: o.correct,
    ja: withName(o.ja, nameJa),
    label: (
      <span>
        <span lang="ja" className="ja block text-base">
          {withName(o.ja, nameJa)}
        </span>
        <span className="text-muted-foreground">{o.meaning.en}</span>
      </span>
    ),
  }));

  return (
    <div className="space-y-5">
      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">You</p>
      <BiText text={line.prompt} revealed />
      <ChoiceButtons
        options={options}
        picked={picked}
        onPick={(correct, key) => {
          setPicked(key);
          const chosen = line.options[Number(key)];
          if (chosen) unlockSpeech();
          void correct;
        }}
      />
      {picked !== null ? (
        <Button
          className="w-full"
          onClick={() => {
            setPicked(null);
            setI(i + 1);
          }}
        >
          Continue
        </Button>
      ) : null}
    </div>
  );
}

function StepView({
  step,
  art,
  nameJa,
  onDone,
}: {
  step: LessonStep;
  art: ArtKey;
  nameJa: string;
  onDone: () => void;
}) {
  const showRomaji = useProgress((s) => s.showRomaji);
  const autoPlay = useProgress((s) => s.autoPlay);
  const meetKana = useProgress((s) => s.meetKana);
  const meetKanji = useProgress((s) => s.meetKanji);
  const [revealed, setRevealed] = useState(false);
  const [picked, setPicked] = useState<string | null>(null);

  if (step.kind === "scene") {
    return (
      <div className="space-y-5">
        <SceneArt art={step.art} />
        <BiText text={step.happening} revealed />
        <Button className="w-full" size="lg" onClick={onDone}>
          Listen
          <ChevronRight />
        </Button>
      </div>
    );
  }

  if (step.kind === "hear") {
    const ja = withName(step.ja, nameJa);
    return (
      <div className="space-y-5">
        <SceneArt art={art} />
        <Ja className="text-center">{step.jaKanji ?? ja}</Ja>
        {showRomaji ? <p className="text-center text-sm text-muted-foreground">{step.romaji}</p> : null}
        <AudioBar ja={ja} auto={autoPlay && speechUnlocked()} size="lg" />
        {!revealed ? (
          <Button
            variant="outline"
            className="w-full"
            onClick={() => setRevealed(true)}
          >
            Reveal meaning
          </Button>
        ) : (
          <>
            <MeaningBlock meaning={step.meaning} revealed />
            <Button className="w-full" size="lg" onClick={onDone}>
              Continue
            </Button>
          </>
        )}
      </div>
    );
  }

  if (step.kind === "guess") {
    const ja = withName(step.ja, nameJa);
    const options = step.options.map((o, i) => ({
      key: `${i}`,
      correct: o.correct,
      label: (
        <span>
          {o.label.en}
          <span className="mt-0.5 block text-muted-foreground">{o.label.bn}</span>
        </span>
      ),
    }));
    return (
      <div className="space-y-5">
        <Ja className="text-center">{ja}</Ja>
        {showRomaji ? <p className="text-center text-sm text-muted-foreground">{step.romaji}</p> : null}
        <AudioBar ja={ja} auto={autoPlay && speechUnlocked()} />
        <BiText text={step.question} revealed />
        <ChoiceButtons
          options={options}
          picked={picked}
          onPick={(_c, key) => {
            setPicked(key);
            setRevealed(true);
          }}
        />
        <MeaningBlock meaning={step.meaning} revealed={revealed} />
        {picked !== null ? (
          <Button className="w-full" onClick={onDone}>
            Continue
          </Button>
        ) : null}
      </div>
    );
  }

  if (step.kind === "copy") {
    const ja = withName(step.ja, nameJa);
    return (
      <div className="space-y-5">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Copy</p>
        <Ja className="text-center">{ja}</Ja>
        {showRomaji ? <p className="text-center text-sm text-muted-foreground">{step.romaji}</p> : null}
        <AudioBar ja={ja} auto={autoPlay && speechUnlocked()} />
        <SpeakPanel ja={ja} />
        <BiText text={step.meaning} revealed />
        <Button className="w-full" size="lg" onClick={onDone}>
          Continue
        </Button>
      </div>
    );
  }

  if (step.kind === "pattern") {
    return (
      <div className="space-y-5">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Notice the shape</p>
        <div className="space-y-3">
          {step.lines.map((l) => (
            <Card key={l.ja} className="p-4">
              <button type="button" className="w-full text-left" onClick={() => unlockSpeech()}>
                <Ja className="text-xl">{withName(l.ja, nameJa)}</Ja>
                {showRomaji ? <p className="mt-1 text-xs text-muted-foreground">{l.romaji}</p> : null}
                <BiText text={l.meaning} revealed className="mt-2" />
              </button>
              <div className="mt-3">
                <AudioBar ja={withName(l.ja, nameJa)} />
              </div>
            </Card>
          ))}
        </div>
        <div className="rounded-[var(--radius-lg)] bg-muted/60 px-4 py-3">
          <BiText text={step.notice} revealed />
        </div>
        <Button className="w-full" size="lg" onClick={onDone}>
          Continue
        </Button>
      </div>
    );
  }

  if (step.kind === "use") {
    const options = step.options.map((o, i) => ({
      key: `${i}`,
      correct: o.correct,
      label: (
        <span>
          <span lang="ja" className="ja block text-base">
            {withName(o.ja, nameJa)}
          </span>
          <span className="text-muted-foreground">{o.meaning.en}</span>
        </span>
      ),
    }));
    return (
      <div className="space-y-5">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Use it</p>
        {step.promptJa ? <Ja className="text-xl">{withName(step.promptJa, nameJa)}</Ja> : null}
        <BiText text={step.prompt} revealed />
        <ChoiceButtons
          options={options}
          picked={picked}
          onPick={(_c, key) => setPicked(key)}
        />
        {picked !== null ? (
          <Button className="w-full" onClick={onDone}>
            Continue
          </Button>
        ) : null}
      </div>
    );
  }

  if (step.kind === "build") {
    return (
      <BuildStep
        target={step.target}
        tiles={step.tiles}
        romaji={step.romaji}
        meaning={step.meaning}
        showRomaji={showRomaji}
        onDone={onDone}
      />
    );
  }

  if (step.kind === "talk") {
    return (
      <TalkView
        lines={step.lines}
        nameJa={nameJa}
        showRomaji={showRomaji}
        autoPlay={autoPlay}
        onDone={onDone}
      />
    );
  }

  if (step.kind === "kana") {
    return (
      <div className="space-y-5">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">The sounds inside</p>
        <Ja className="text-center text-4xl">{step.word}</Ja>
        <BiText text={step.meaning} revealed className="text-center" />
        <div className="grid grid-cols-4 gap-2">
          {step.parts.map((p) => (
            <button
              key={p.char + p.romaji}
              type="button"
              onClick={() => {
                unlockSpeech();
                meetKana([p.char]);
              }}
              className="flex flex-col items-center rounded-[var(--radius-lg)] bg-card py-3 shadow-[var(--shadow-border)]"
            >
              <span lang="ja" className="ja text-2xl">
                {p.char}
              </span>
              {showRomaji ? <span className="text-xs text-muted-foreground">{p.romaji}</span> : null}
            </button>
          ))}
        </div>
        <AudioBar ja={step.word} auto={autoPlay && speechUnlocked()} />
        <p className="text-sm leading-relaxed text-muted-foreground">
          You already heard this word. The characters are just the pieces of a sound you know.
        </p>
        <Button
          className="w-full"
          onClick={() => {
            meetKana(step.parts.map((p) => p.char));
            onDone();
          }}
        >
          Continue
        </Button>
      </div>
    );
  }

  const k = step;
  return (
    <div className="space-y-5">
      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">The same word, written deeper</p>
      <div className="flex items-end justify-center gap-4">
        <span lang="ja" className="ja text-2xl text-muted-foreground">
          {k.kana}
        </span>
        <span className="text-muted-foreground">→</span>
        <span lang="ja" className="ja text-5xl">
          {k.kanji}
        </span>
      </div>
      {showRomaji ? <p className="text-center text-sm text-muted-foreground">{k.reading}</p> : null}
      <Ja className="text-center text-2xl">{k.sentence}</Ja>
      {showRomaji ? <p className="text-center text-sm text-muted-foreground">{k.sentenceRomaji}</p> : null}
      <AudioBar ja={k.sentence} auto={autoPlay && speechUnlocked()} />
      <BiText text={k.meaning} revealed />
      <Button
        className="w-full"
        onClick={() => {
          meetKanji(k.kanji);
          onDone();
        }}
      >
        Continue
      </Button>
    </div>
  );
}

export function LessonPlayer({
  title,
  art,
  steps,
  onComplete,
  onExit,
}: {
  title: Bi;
  art: ArtKey;
  steps: LessonStep[];
  onComplete: () => void;
  onExit: () => void;
}) {
  const nameJa = useProgress((s) => s.nameJa);
  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(false);
  const step = steps[index];
  const pct = steps.length ? Math.round(((done ? steps.length : index) / steps.length) * 100) : 100;

  const next = () => {
    if (index + 1 >= steps.length) {
      setDone(true);
      onComplete();
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <div className="mx-auto flex min-h-dvh max-w-lg flex-col px-4 pb-8 pt-3">
      <header className="mb-4 flex items-center gap-3">
        <button
          type="button"
          onClick={onExit}
          className="flex size-11 items-center justify-center rounded-[var(--radius-md)] text-muted-foreground"
          aria-label="Back"
        >
          <ChevronRight className="rotate-180" />
        </button>
        <div className="min-w-0 flex-1">
          <p className="truncate font-display text-sm">{title.en}</p>
          <Progress value={pct} className="mt-2" />
        </div>
        <span className="tabular-nums text-xs text-muted-foreground">
          {Math.min(index + 1, steps.length)}/{steps.length}
        </span>
      </header>

      {done || !step ? (
        <div className="flex flex-1 flex-col items-center justify-center space-y-4 text-center">
          <div className="flex size-14 items-center justify-center rounded-full bg-success/10 text-success">
            <Check className="size-6" />
          </div>
          <h2 className="font-display text-2xl">You lived this Japanese</h2>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Not a list. A small real moment. It will come back in other rooms.
          </p>
          <Button className="w-full max-w-xs" size="lg" onClick={onExit}>
            Continue
          </Button>
        </div>
      ) : (
        <div key={index} className="stagger-in flex-1">
          <StepView step={step} art={art} nameJa={nameJa} onDone={next} />
        </div>
      )}
    </div>
  );
}

export function DialoguePlayer({
  title,
  lines,
  onComplete,
  onExit,
}: {
  title: Bi;
  lines: TalkLine[];
  onComplete: () => void;
  onExit: () => void;
}) {
  const nameJa = useProgress((s) => s.nameJa);
  const showRomaji = useProgress((s) => s.showRomaji);
  const autoPlay = useProgress((s) => s.autoPlay);
  const [done, setDone] = useState(false);

  return (
    <div className="mx-auto flex min-h-dvh max-w-lg flex-col px-4 pb-8 pt-3">
      <header className="mb-4 flex items-center gap-3">
        <button
          type="button"
          onClick={onExit}
          className="flex size-11 items-center justify-center rounded-[var(--radius-md)] text-muted-foreground"
          aria-label="Back"
        >
          <ChevronRight className="rotate-180" />
        </button>
        <p className="font-display text-sm">{title.en}</p>
      </header>
      {done ? (
        <div className="flex flex-1 flex-col items-center justify-center space-y-4 text-center">
          <h2 className="font-display text-2xl">You spoke in the situation</h2>
          <Button className="w-full max-w-xs" size="lg" onClick={onExit}>
            Continue
          </Button>
        </div>
      ) : (
        <TalkView
          lines={lines}
          nameJa={nameJa}
          showRomaji={showRomaji}
          autoPlay={autoPlay}
          onDone={() => {
            setDone(true);
            onComplete();
          }}
        />
      )}
    </div>
  );
}
