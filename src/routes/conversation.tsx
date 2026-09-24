import { createFileRoute, Link } from "@tanstack/react-router";
import { SceneArt } from "@/components/art/scene";
import { Page } from "@/components/layout/app-shell";
import { Card } from "@/components/ui/card";
import { dialogues } from "@/lib/content";
import { useProgress } from "@/lib/store";

export const Route = createFileRoute("/conversation")({ component: Conversation });

function Conversation() {
  const done = useProgress((s) => s.completedDialogues);
  return (
    <Page title="Short conversations" kicker="Conversation">
      <p className="text-sm leading-relaxed text-muted-foreground">
        Listen first, then choose your line. They grow a little longer as you go.
      </p>
      <div className="space-y-3">
        {dialogues.map((d) => (
          <Link key={d.id} to="/dialogue/$id" params={{ id: d.id }} className="block">
            <Card className="overflow-hidden">
              <SceneArt art={d.art} className="h-24 object-cover" />
              <div className="flex items-center justify-between gap-3 p-4">
                <div>
                  <p className="font-medium leading-snug">{d.title.en}</p>
                  <p className="text-xs text-muted-foreground">{d.place.en} · {d.title.bn}</p>
                </div>
                {done.includes(d.id) ? <span className="text-xs text-success">Lived</span> : null}
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </Page>
  );
}
