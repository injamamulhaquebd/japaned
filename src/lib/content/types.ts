export type Bi = { en: string; bn: string };

export type ArtKey =
  | "morning"
  | "day"
  | "night"
  | "meet"
  | "introduce"
  | "thisis"
  | "family"
  | "home"
  | "eat"
  | "drink"
  | "go"
  | "return"
  | "shop"
  | "ask"
  | "time"
  | "numbers"
  | "school"
  | "daily"
  | "week"
  | "food"
  | "like"
  | "weather"
  | "write";

export type Choice = {
  ja?: string;
  romaji?: string;
  label: Bi;
  correct: boolean;
};

export type TalkLine =
  | {
      role: "them" | "narrator";
      ja: string;
      romaji: string;
      meaning: Bi;
    }
  | {
      role: "you";
      prompt: Bi;
      options: {
        ja: string;
        romaji: string;
        meaning: Bi;
        correct: boolean;
      }[];
    };

export type LessonStep =
  | { kind: "scene"; art: ArtKey; happening: Bi }
  | {
      kind: "hear";
      ja: string;
      jaKanji?: string;
      romaji: string;
      meaning: Bi;
    }
  | {
      kind: "guess";
      ja: string;
      romaji: string;
      meaning: Bi;
      question: Bi;
      options: Choice[];
    }
  | {
      kind: "copy";
      ja: string;
      romaji: string;
      meaning: Bi;
    }
  | {
      kind: "pattern";
      lines: { ja: string; romaji: string; meaning: Bi }[];
      notice: Bi;
    }
  | {
      kind: "use";
      prompt: Bi;
      promptJa?: string;
      options: {
        ja: string;
        romaji?: string;
        meaning: Bi;
        correct: boolean;
      }[];
    }
  | {
      kind: "build";
      target: string;
      romaji: string;
      meaning: Bi;
      tiles: string[];
    }
  | { kind: "talk"; lines: TalkLine[] }
  | {
      kind: "kana";
      word: string;
      meaning: Bi;
      parts: { char: string; romaji: string }[];
    }
  | {
      kind: "kanji";
      kana: string;
      kanji: string;
      reading: string;
      sentence: string;
      sentenceRomaji: string;
      meaning: Bi;
    };

export type Lesson = {
  id: string;
  unit: string;
  unitTitle: Bi;
  order: number;
  art: ArtKey;
  title: Bi;
  teaser: Bi;
  steps: LessonStep[];
};

export type KanaGroup = {
  id: string;
  script: "hiragana" | "katakana";
  title: Bi;
  word: { ja: string; romaji: string; meaning: Bi };
  chars: { char: string; romaji: string; note?: Bi }[];
};

export type KanjiItem = {
  id: string;
  kanji: string;
  readings: string[];
  meaning: Bi;
  fromKana: string;
  sentences: { ja: string; romaji: string; meaning: Bi }[];
};

export type Dialogue = {
  id: string;
  title: Bi;
  place: Bi;
  art: ArtKey;
  lines: TalkLine[];
};
