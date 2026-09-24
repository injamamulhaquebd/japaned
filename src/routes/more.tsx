import { createFileRoute, Link } from "@tanstack/react-router";
import { moreLinks, Page } from "@/components/layout/app-shell";
import { Card } from "@/components/ui/card";

export const Route = createFileRoute("/more")({ component: More });

function More() {
  return (
    <Page title="Practice rooms" kicker="More">
      <p className="text-sm leading-relaxed text-muted-foreground">
        Listening, speaking, kana, kanji — all from Japanese you have already met.
      </p>
      <div className="grid gap-2">
        {moreLinks.map((l) => {
          const Icon = l.icon;
          return (
            <Link key={l.to} to={l.to} className="block">
              <Card className="flex items-center gap-3 p-4">
                <span className="flex size-11 items-center justify-center rounded-[var(--radius-md)] bg-muted text-primary">
                  <Icon className="size-5" />
                </span>
                <span>
                  <span className="block font-medium">{l.label}</span>
                  <span className="block text-xs text-muted-foreground">{l.en}</span>
                </span>
              </Card>
            </Link>
          );
        })}
      </div>
    </Page>
  );
}
