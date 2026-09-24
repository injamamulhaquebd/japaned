import { createFileRoute } from "@tanstack/react-router";
import { Page } from "@/components/layout/app-shell";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { hiraganaGroups, kanjiItems, katakanaGroups, lessons } from "@/lib/content";
import { useProgress } from "@/lib/store";
import { todayKey } from "@/lib/utils";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

export const Route = createFileRoute("/progress")({ component: ProgressPage });

function lastDays(n: number, activity: Record<string, number>) {
  const out: { day: string; moments: number }[] = [];
  for (let i = n - 1; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const key = todayKey(d);
    out.push({
      day: `${d.getMonth() + 1}/${d.getDate()}`,
      moments: activity[key] ?? 0,
    });
  }
  return out;
}

function ProgressPage() {
  const s = useProgress();
  const data = lastDays(14, s.activity);
  const lessonPct = Math.round((s.completedLessons.length / lessons.length) * 100);
  const hPct = Math.round((s.completedKanaGroups.filter((id) => hiraganaGroups.some((g) => g.id === id)).length / hiraganaGroups.length) * 100);
  const kPct = Math.round((s.completedKanaGroups.filter((id) => katakanaGroups.some((g) => g.id === id)).length / katakanaGroups.length) * 100);
  const kjPct = Math.round((s.completedKanji.length / kanjiItems.length) * 100);

  return (
    <Page title="Days with Japanese" kicker="Progress">
      <p className="text-sm leading-relaxed text-muted-foreground">
        Not a score. Time spent inside the language.
      </p>
      <div className="grid grid-cols-2 gap-2">
        <Mini label="Streak" value={`${s.streak} days`} />
        <Mini label="Situations" value={`${s.completedLessons.length}`} />
        <Mini label="Heard" value={`${s.listenCount}`} />
        <Mini label="Spoken" value={`${s.speakCount}`} />
      </div>
      <Card className="p-5">
        <p className="text-sm font-medium">Last 14 days</p>
        <div className="mt-3 h-40">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="day" tick={{ fontSize: 10, fill: "#6b635a" }} interval={2} />
              <YAxis hide />
              <Bar dataKey="moments" fill="#3d5a7a" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
      <BarLine label="Situations lived" value={lessonPct} />
      <BarLine label="Hiragana groups" value={hPct} />
      <BarLine label="Katakana groups" value={kPct} />
      <BarLine label="Kanji met" value={kjPct} />
    </Page>
  );
}

function Mini({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[var(--radius-lg)] bg-card px-4 py-3 shadow-[var(--shadow-border)]">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="mt-1 font-display text-xl tabular-nums">{value}</p>
    </div>
  );
}

function BarLine({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="mb-1 flex justify-between text-sm">
        <span>{label}</span>
        <span className="tabular-nums text-muted-foreground">{value}%</span>
      </div>
      <Progress value={value} />
    </div>
  );
}
