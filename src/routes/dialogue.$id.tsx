import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { DialoguePlayer } from "@/components/lesson/player";
import { Button } from "@/components/ui/button";
import { getDialogue } from "@/lib/content";
import { useProgress } from "@/lib/store";

export const Route = createFileRoute("/dialogue/$id")({
  component: DialoguePage,
});

function DialoguePage() {
  const { id } = Route.useParams();
  const d = getDialogue(id);
  const navigate = useNavigate();
  const complete = useProgress((s) => s.completeDialogue);

  if (!d) {
    return (
      <main className="flex min-h-dvh flex-col items-center justify-center gap-3 px-6">
        <p>That talk is not here.</p>
        <Button onClick={() => navigate({ to: "/conversation" })}>Back</Button>
      </main>
    );
  }

  return (
    <DialoguePlayer
      title={d.title}
      lines={d.lines}
      onComplete={() => complete(d.id)}
      onExit={() => navigate({ to: "/conversation" })}
    />
  );
}
