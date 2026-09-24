import { useState } from "react";
import { SceneArt } from "@/components/art/scene";
import { Seal } from "@/components/brand/logo";
import { AudioBar, unlockSpeech } from "@/components/lesson/audio-bar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useProgress } from "@/lib/store";

export function Onboarding() {
  const finish = useProgress((s) => s.finishOnboarding);
  const [step, setStep] = useState(0);
  const [name, setName] = useState("Injam");
  const [nameJa, setNameJa] = useState("インジャム");
  const [revealed, setRevealed] = useState(false);

  if (step === 0) {
    return (
      <div className="mx-auto flex min-h-dvh max-w-lg flex-col justify-end px-5 pb-10 pt-8">
        <div className="stagger-in flex-1 space-y-6 pt-10">
          <Seal className="size-12" />
          <h1 className="font-display text-4xl font-medium leading-[1.15] tracking-tight">
            Japaneducation
          </h1>
          <p className="max-w-sm text-base leading-relaxed text-muted-foreground">
            You will not memorize lists. You will hear Japanese, understand the
            situation, copy it, and use it — the way a child meets a language.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            মুখস্থ নয়। শোনা, বোঝা, বলা, ব্যবহার — স্বাভাবিক মনে রাখা।
          </p>
        </div>
        <Button size="xl" className="w-full" onClick={() => setStep(1)}>
          Begin with listening
        </Button>
      </div>
    );
  }

  if (step === 1) {
    return (
      <div className="mx-auto flex min-h-dvh max-w-lg flex-col px-5 pb-10 pt-8">
        <div className="flex-1 space-y-5">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">Your name</p>
          <h1 className="font-display text-3xl font-medium leading-tight">Who is learning?</h1>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Conversations will use this. You can change it later.
          </p>
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="nameJa">In Japanese (katakana is fine)</Label>
            <Input id="nameJa" value={nameJa} onChange={(e) => setNameJa(e.target.value)} lang="ja" />
          </div>
        </div>
        <Button size="xl" className="w-full" onClick={() => setStep(2)}>
          Hear the first morning
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto flex min-h-dvh max-w-lg flex-col px-5 pb-10 pt-8">
      <div className="flex-1 space-y-5">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">First Japanese</p>
        <SceneArt art="morning" />
        <p className="text-sm leading-relaxed text-muted-foreground">
          A quiet room. Light comes in. Someone sits up.
        </p>
        <p lang="ja" className="ja text-center text-4xl">
          おはよう。
        </p>
        <AudioBar ja="おはよう。" size="lg" />
        {!revealed ? (
          <Button variant="outline" className="w-full" onClick={() => setRevealed(true)}>
            Reveal meaning
          </Button>
        ) : (
          <div className="space-y-1 text-center">
            <p>Good morning.</p>
            <p className="text-sm text-muted-foreground">সুপ্রভাত।</p>
          </div>
        )}
      </div>
      <Button
        size="xl"
        className="mt-6 w-full"
        onClick={() => {
          unlockSpeech();
          finish(name, nameJa);
        }}
        disabled={!revealed}
      >
        Enter the day
      </Button>
    </div>
  );
}
