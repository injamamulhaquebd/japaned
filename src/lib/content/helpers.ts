import type { ArtKey, Bi, Choice, Lesson, LessonStep } from "./types";

export const bi = (en: string, bn: string): Bi => ({ en, bn });

export function lesson(
  id: string,
  unit: string,
  unitTitle: Bi,
  order: number,
  art: ArtKey,
  title: Bi,
  teaser: Bi,
  steps: LessonStep[],
): Lesson {
  return { id, unit, unitTitle, order, art, title, teaser, steps };
}

export function scene(art: ArtKey, en: string, bn: string): LessonStep {
  return { kind: "scene", art, happening: bi(en, bn) };
}

export function hear(
  ja: string,
  romaji: string,
  en: string,
  bn: string,
  jaKanji?: string,
): LessonStep {
  return { kind: "hear", ja, romaji, meaning: bi(en, bn), jaKanji };
}

export function guess(
  ja: string,
  romaji: string,
  en: string,
  bn: string,
  qEn: string,
  qBn: string,
  options: Choice[],
): LessonStep {
  return {
    kind: "guess",
    ja,
    romaji,
    meaning: bi(en, bn),
    question: bi(qEn, qBn),
    options,
  };
}

export function copy(
  ja: string,
  romaji: string,
  en: string,
  bn: string,
): LessonStep {
  return { kind: "copy", ja, romaji, meaning: bi(en, bn) };
}

export function pattern(
  lines: [string, string, string, string][],
  noticeEn: string,
  noticeBn: string,
): LessonStep {
  return {
    kind: "pattern",
    lines: lines.map(([ja, romaji, en, bn]) => ({
      ja,
      romaji,
      meaning: bi(en, bn),
    })),
    notice: bi(noticeEn, noticeBn),
  };
}

export function useIt(
  promptEn: string,
  promptBn: string,
  options: {
    ja: string;
    romaji?: string;
    en: string;
    bn: string;
    correct: boolean;
  }[],
  promptJa?: string,
): LessonStep {
  return {
    kind: "use",
    prompt: bi(promptEn, promptBn),
    promptJa,
    options: options.map((o) => ({
      ja: o.ja,
      romaji: o.romaji,
      meaning: bi(o.en, o.bn),
      correct: o.correct,
    })),
  };
}

export function buildWord(
  target: string,
  romaji: string,
  en: string,
  bn: string,
  tiles: string[],
): LessonStep {
  return { kind: "build", target, romaji, meaning: bi(en, bn), tiles };
}

export function kanaWord(
  word: string,
  en: string,
  bn: string,
  parts: { char: string; romaji: string }[],
): LessonStep {
  return { kind: "kana", word, meaning: bi(en, bn), parts };
}

export function kanjiMeet(
  kana: string,
  kanji: string,
  reading: string,
  sentence: string,
  sentenceRomaji: string,
  en: string,
  bn: string,
): LessonStep {
  return {
    kind: "kanji",
    kana,
    kanji,
    reading,
    sentence,
    sentenceRomaji,
    meaning: bi(en, bn),
  };
}

export const opt = (
  ja: string,
  en: string,
  bn: string,
  correct: boolean,
  romaji?: string,
): Choice => ({ ja, label: bi(en, bn), correct, romaji });
