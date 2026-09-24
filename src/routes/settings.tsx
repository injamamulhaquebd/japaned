import type { ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Page } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { useProgress, type BengaliMode } from "@/lib/store";
import { speakJapanese } from "@/lib/speech";

export const Route = createFileRoute("/settings")({ component: Settings });

function Settings() {
  const s = useProgress();

  return (
    <Page title="Settings" kicker="Settings">
      <section className="space-y-3">
        <Label htmlFor="nm">Your name</Label>
        <Input
          id="nm"
          value={s.learnerName}
          onChange={(e) => s.setName(e.target.value, s.nameJa)}
        />
        <Label htmlFor="nmj">Name in Japanese</Label>
        <Input
          id="nmj"
          lang="ja"
          value={s.nameJa}
          onChange={(e) => s.setName(s.learnerName, e.target.value)}
        />
      </section>

      <Row
        label="Show romaji"
        hint="Latin sounds under Japanese. Turn off as your ear grows."
      >
        <Switch checked={s.showRomaji} onCheckedChange={s.setShowRomaji} />
      </Row>
      <Row
        label="Auto-play audio"
        hint="After the first Listen tap, later sentences can play on their own."
      >
        <Switch checked={s.autoPlay} onCheckedChange={s.setAutoPlay} />
      </Row>

      <div className="space-y-2">
        <p className="text-sm font-medium">Bengali help</p>
        <p className="text-xs leading-relaxed text-muted-foreground">
          Allowed at the beginning. The goal is Japanese → meaning, not Japanese → Bengali → meaning.
        </p>
        <div className="grid grid-cols-3 gap-2">
          {(
            [
              ["after", "After reveal"],
              ["always", "Always"],
              ["off", "Hide"],
            ] as [BengaliMode, string][]
          ).map(([v, label]) => (
            <Button
              key={v}
              variant={s.bengaliMode === v ? "default" : "outline"}
              size="sm"
              onClick={() => s.setBengaliMode(v)}
            >
              {label}
            </Button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span>Voice speed</span>
          <span className="tabular-nums text-muted-foreground">{s.voiceRate.toFixed(2)}</span>
        </div>
        <Slider
          min={0.6}
          max={1.1}
          step={0.02}
          value={[s.voiceRate]}
          onValueChange={(v) => s.setVoiceRate(v[0] ?? 0.88)}
        />
        <Button
          variant="outline"
          className="w-full"
          onClick={() => speakJapanese("おはよう。こんにちは。", { rate: s.voiceRate })}
        >
          Preview voice
        </Button>
      </div>

      <p className="text-xs leading-relaxed text-muted-foreground">
        Progress is saved on this device. No account, no paid APIs — your browser speaks Japanese.
      </p>

      <Button
        variant="destructive"
        className="w-full"
        onClick={() => {
          if (window.confirm("Clear all progress on this device?")) s.resetAll();
        }}
      >
        Reset progress
      </Button>
    </Page>
  );
}

function Row({
  label,
  hint,
  children,
}: {
  label: string;
  hint: string;
  children: ReactNode;
}) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <p className="text-sm font-medium">{label}</p>
        <p className="text-xs leading-relaxed text-muted-foreground">{hint}</p>
      </div>
      {children}
    </div>
  );
}
