import { dialogues } from "./conversations";
import { lessonsA } from "./lessons-a";
import { lessonsB } from "./lessons-b";
import type { ArtKey, Bi, Lesson } from "./types";

export * from "./types";
export { dialogues } from "./conversations";
export { kanjiItems } from "./kanji";
export { allKanaGroups, hiraganaGroups, katakanaGroups, kanaByScript } from "./kana";

export const lessons: Lesson[] = [...lessonsA, ...lessonsB].sort((a, b) => a.order - b.order);

export function getLesson(id: string): Lesson | undefined {
  return lessons.find((l) => l.id === id);
}

export function getDialogue(id: string) {
  return dialogues.find((d) => d.id === id);
}

export function nextLesson(completed: string[]): Lesson {
  return lessons.find((l) => !completed.includes(l.id)) ?? lessons[lessons.length - 1]!;
}

export function isUnlocked(lesson: Lesson, completed: string[]): boolean {
  if (lesson.order <= 1) return true;
  const prev = lessons.find((l) => l.order === lesson.order - 1);
  return !prev || completed.includes(prev.id);
}

export type Unit = { id: string; title: Bi; lessons: Lesson[] };

export function units(): Unit[] {
  const map = new Map<string, Unit>();
  for (const l of lessons) {
    const existing = map.get(l.unit);
    if (existing) existing.lessons.push(l);
    else map.set(l.unit, { id: l.unit, title: l.unitTitle, lessons: [l] });
  }
  return [...map.values()];
}

export type BankSentence = {
  ja: string;
  romaji: string;
  meaning: Bi;
  lessonId: string;
  art: ArtKey;
  title: Bi;
};

export function sentenceBank(): BankSentence[] {
  const out: BankSentence[] = [];
  const seen = new Set<string>();
  for (const l of lessons) {
    for (const s of l.steps) {
      if (s.kind === "hear" || s.kind === "copy") {
        if (!s.ja || seen.has(s.ja)) continue;
        seen.add(s.ja);
        out.push({
          ja: s.ja,
          romaji: s.romaji,
          meaning: s.meaning,
          lessonId: l.id,
          art: l.art,
          title: l.title,
        });
      }
    }
  }
  return out;
}

export function reachableSentences(completed: string[]): BankSentence[] {
  const done = new Set(completed);
  const bank = sentenceBank();
  const allowed = new Set(
    lessons.filter((l) => done.has(l.id) || isUnlocked(l, completed)).map((l) => l.id),
  );
  const filtered = bank.filter((s) => allowed.has(s.lessonId));
  return filtered.length > 0 ? filtered : bank.slice(0, 8);
}
