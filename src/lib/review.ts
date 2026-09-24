import {
  dialogues,
  hiraganaGroups,
  kanjiItems,
  katakanaGroups,
  reachableSentences,
  sentenceBank,
  type Bi,
} from "@/lib/content";
import { shuffle } from "@/lib/utils";

export type ReviewItem =
  | {
      kind: "listen";
      ja: string;
      romaji: string;
      meaning: Bi;
      question: Bi;
      options: { label: Bi; correct: boolean }[];
    }
  | {
      kind: "complete";
      ja: string;
      romaji: string;
      meaning: Bi;
      pieces: string[];
      distractors: string[];
    }
  | {
      kind: "respond";
      promptJa: string;
      promptRomaji: string;
      promptMeaning: Bi;
      options: { ja: string; romaji: string; meaning: Bi; correct: boolean }[];
    }
  | {
      kind: "kana";
      char: string;
      romaji: string;
      options: { char: string; romaji: string; correct: boolean }[];
    }
  | {
      kind: "kanji";
      kanji: string;
      meaning: Bi;
      sentence: string;
      options: { label: Bi; correct: boolean }[];
    }
  | {
      kind: "repeat";
      ja: string;
      romaji: string;
      meaning: Bi;
    };

function otherMeanings(except: string, n: number): Bi[] {
  const pool = sentenceBank()
    .map((s) => s.meaning)
    .filter((m) => m.en !== except);
  return shuffle(pool).slice(0, n);
}

export function buildReviewSet(completedLessons: string[], size = 8): ReviewItem[] {
  const sentences = reachableSentences(completedLessons);
  const items: ReviewItem[] = [];

  const listenPool = shuffle(sentences).slice(0, 3);
  for (const s of listenPool) {
    const wrong = otherMeanings(s.meaning.en, 2);
    const options = shuffle([
      { label: s.meaning, correct: true },
      ...wrong.map((w) => ({ label: w, correct: false })),
    ]);
    items.push({
      kind: "listen",
      ja: s.ja,
      romaji: s.romaji,
      meaning: s.meaning,
      question: {
        en: "What is happening?",
        bn: "কী হচ্ছে?",
      },
      options,
    });
  }

  const completePool = shuffle(sentences.filter((s) => s.ja.replace(/\s/g, "").length >= 4)).slice(0, 2);
  for (const s of completePool) {
    const pieces = s.ja.replace(/[。？！]/g, "").split(/\s+/).filter(Boolean);
    if (pieces.length < 2) continue;
    const distractors = shuffle(
      sentenceBank()
        .flatMap((x) => x.ja.replace(/[。？！]/g, "").split(/\s+/))
        .filter((p) => p && !pieces.includes(p)),
    ).slice(0, 3);
    items.push({
      kind: "complete",
      ja: s.ja,
      romaji: s.romaji,
      meaning: s.meaning,
      pieces,
      distractors,
    });
  }

  const talk = shuffle(dialogues).slice(0, 2);
  for (const d of talk) {
    const you = d.lines.find((l) => l.role === "you");
    const them = d.lines.find((l) => l.role === "them");
    if (!you || you.role !== "you" || !them || them.role !== "them") continue;
    items.push({
      kind: "respond",
      promptJa: them.ja,
      promptRomaji: them.romaji,
      promptMeaning: them.meaning,
      options: you.options,
    });
  }

  const kanaChars = [...hiraganaGroups, ...katakanaGroups].flatMap((g) => g.chars);
  const kanaPick = shuffle(kanaChars).slice(0, 2);
  for (const k of kanaPick) {
    const others = shuffle(kanaChars.filter((c) => c.char !== k.char)).slice(0, 3);
    items.push({
      kind: "kana",
      char: k.char,
      romaji: k.romaji,
      options: shuffle([
        { char: k.char, romaji: k.romaji, correct: true },
        ...others.map((o) => ({ char: o.char, romaji: o.romaji, correct: false })),
      ]),
    });
  }

  const kanjiPick = shuffle(kanjiItems).slice(0, 1);
  for (const k of kanjiPick) {
    const wrong = shuffle(kanjiItems.filter((x) => x.id !== k.id)).slice(0, 2);
    items.push({
      kind: "kanji",
      kanji: k.kanji,
      meaning: k.meaning,
      sentence: k.sentences[0]?.ja ?? k.kanji,
      options: shuffle([
        { label: k.meaning, correct: true },
        ...wrong.map((w) => ({ label: w.meaning, correct: false })),
      ]),
    });
  }

  const repeat = shuffle(sentences).slice(0, 2);
  for (const s of repeat) {
    items.push({
      kind: "repeat",
      ja: s.ja,
      romaji: s.romaji,
      meaning: s.meaning,
    });
  }

  return shuffle(items).slice(0, size);
}
