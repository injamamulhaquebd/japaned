import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { LessonPlayer } from "@/components/lesson/player";
import { Button } from "@/components/ui/button";
import { getLesson } from "@/lib/content";
import { useProgress } from "@/lib/store";

export const Route = createFileRoute("/lesson/$id")({
  component: LessonPage,
});

function LessonPage() {
  const { id } = Route.useParams();
  const lesson = getLesson(id);
  const navigate = useNavigate();
  const complete = useProgress((s) => s.completeLesson);

  if (!lesson) {
    return (
      <main className="flex min-h-dvh flex-col items-center justify-center gap-3 px-6 text-center">
        <p>That situation is not here.</p>
        <Button onClick={() => navigate({ to: "/learn" })}>Back to learn</Button>
      </main>
    );
  }

  return (
    <LessonPlayer
      title={lesson.title}
      art={lesson.art}
      steps={lesson.steps}
      onComplete={() => complete(lesson.id)}
      onExit={() => navigate({ to: "/learn" })}
    />
  );
}
