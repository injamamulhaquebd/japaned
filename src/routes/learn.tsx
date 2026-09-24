import { createFileRoute, Link } from "@tanstack/react-router";
import { Lock } from "lucide-react";
import { Page } from "@/components/layout/app-shell";
import { Card } from "@/components/ui/card";
import { isUnlocked, units } from "@/lib/content";
import { useProgress } from "@/lib/store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/learn")({ component: Learn });

function Learn() {
  const completed = useProgress((s) => s.completedLessons);
  const all = units();

  return (
    <Page title="Learn through situations" kicker="Learn">
      <p className="text-sm leading-relaxed text-muted-foreground">
        Sentences, not word lists. Each lesson is a small real-life room.
      </p>
      {all.map((u) => (
        <section key={u.id} className="space-y-2">
          <h2 className="font-display text-lg">{u.title.en}</h2>
          <p className="text-xs text-muted-foreground">{u.title.bn}</p>
          <div className="space-y-2">
            {u.lessons.map((l) => {
              const open = isUnlocked(l, completed);
              const done = completed.includes(l.id);
              const inner = (
                <Card
                  className={cn(
                    "flex items-center gap-3 p-4",
                    !open && "opacity-60",
                  )}
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-muted font-display text-sm tabular-nums">
                    {open ? l.order : <Lock className="size-4" />}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-medium leading-snug">{l.title.en}</span>
                    <span className="block truncate text-xs text-muted-foreground">{l.title.bn}</span>
                  </span>
                  {done ? (
                    <span className="text-xs text-success">Lived</span>
                  ) : null}
                </Card>
              );
              return open ? (
                <Link key={l.id} to="/lesson/$id" params={{ id: l.id }} className="block">
                  {inner}
                </Link>
              ) : (
                <div key={l.id}>{inner}</div>
              );
            })}
          </div>
        </section>
      ))}
    </Page>
  );
}
