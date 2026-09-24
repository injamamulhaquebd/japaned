import { createFileRoute, Link } from "@tanstack/react-router";
import { SceneArt } from "@/components/art/scene";
import { Page } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { lessons, nextLesson } from "@/lib/content";
import { useProgress } from "@/lib/store";
import { todayKey } from "@/lib/utils";
import { useEffect } from "react";

export const Route = createFileRoute("/daily")({ component: Daily });

function Daily() {
  const completed = useProgress((s) => s.completedLessons);
  const dailyDate = useProgress((s) => s.dailyDate);
  const dailyLessonId = useProgress((s) => s.dailyLessonId);
  const setDaily = useProgress((s) => s.setDailyLesson);
  const today = todayKey();

  useEffect(() => {
    if (dailyDate !== today) {
      const next = nextLesson(completed);
      setDaily(next.id, today);
    }
  }, [completed, dailyDate, setDaily, today]);

  const id = dailyDate === today && dailyLessonId ? dailyLessonId : nextLesson(completed).id;
  const lesson = lessons.find((l) => l.id === id) ?? nextLesson(completed);

  return (
    <Page title="A little Japanese today" kicker="Daily">
      <p className="text-sm leading-relaxed text-muted-foreground">
        Listen → understand → repeat → use. Not twenty words. One situation, lived well.
      </p>
      <p className="text-sm text-muted-foreground">শুনুন → বুঝুন → বলুন → ব্যবহার করুন।</p>
      <Card className="overflow-hidden">
        <SceneArt art={lesson.art} />
        <div className="space-y-2 p-5">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Today’s situation</p>
          <h2 className="font-display text-2xl">{lesson.title.en}</h2>
          <p className="text-sm text-muted-foreground">{lesson.title.bn}</p>
          <p className="text-sm leading-relaxed">{lesson.teaser.en}</p>
          <Button asChild className="mt-2 w-full" size="lg">
            <Link to="/lesson/$id" params={{ id: lesson.id }}>
              Begin
            </Link>
          </Button>
        </div>
      </Card>
      <Button asChild variant="outline" className="w-full">
        <Link to="/review">Or review what you already lived</Link>
      </Button>
    </Page>
  );
}
