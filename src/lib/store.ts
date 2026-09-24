import { create } from "zustand";
import { persist } from "zustand/middleware";
import { todayKey, yesterdayKey } from "@/lib/utils";

export type BengaliMode = "after" | "always" | "off";

type ProgressState = {
  hydrated: boolean;
  onboardingDone: boolean;
  learnerName: string;
  nameJa: string;
  showRomaji: boolean;
  bengaliMode: BengaliMode;
  voiceRate: number;
  autoPlay: boolean;
  completedLessons: string[];
  completedDialogues: string[];
  completedKanaGroups: string[];
  completedKanji: string[];
  encounteredSentences: string[];
  encounteredKana: string[];
  encounteredKanji: string[];
  streak: number;
  lastActiveDate: string;
  dailyDate: string;
  dailyLessonId: string;
  listenCount: number;
  speakCount: number;
  reviewCount: number;
  activity: Record<string, number>;
};

type ProgressActions = {
  markHydrated: () => void;
  finishOnboarding: (name: string, nameJa: string) => void;
  setName: (name: string, nameJa: string) => void;
  setShowRomaji: (v: boolean) => void;
  setBengaliMode: (v: BengaliMode) => void;
  setVoiceRate: (v: number) => void;
  setAutoPlay: (v: boolean) => void;
  touchStreak: () => void;
  bumpActivity: (n?: number) => void;
  markListen: (ja: string) => void;
  markSpeak: () => void;
  markReview: () => void;
  completeLesson: (id: string) => void;
  completeDialogue: (id: string) => void;
  completeKanaGroup: (id: string) => void;
  completeKanji: (id: string) => void;
  meetKana: (chars: string[]) => void;
  meetKanji: (kanji: string) => void;
  setDailyLesson: (id: string, date: string) => void;
  resetAll: () => void;
};

const initial: Omit<ProgressState, "hydrated"> = {
  onboardingDone: false,
  learnerName: "Injam",
  nameJa: "インジャム",
  showRomaji: true,
  bengaliMode: "after",
  voiceRate: 0.88,
  autoPlay: true,
  completedLessons: [],
  completedDialogues: [],
  completedKanaGroups: [],
  completedKanji: [],
  encounteredSentences: [],
  encounteredKana: [],
  encounteredKanji: [],
  streak: 0,
  lastActiveDate: "",
  dailyDate: "",
  dailyLessonId: "",
  listenCount: 0,
  speakCount: 0,
  reviewCount: 0,
  activity: {},
};

export const useProgress = create<ProgressState & ProgressActions>()(
  persist(
    (set, get) => ({
      hydrated: false,
      ...initial,
      markHydrated: () => set({ hydrated: true }),
      finishOnboarding: (name, nameJa) => {
        set({
          onboardingDone: true,
          learnerName: name.trim() || "Injam",
          nameJa: nameJa.trim() || "インジャム",
        });
        get().touchStreak();
      },
      setName: (name, nameJa) =>
        set({
          learnerName: name.trim() || get().learnerName,
          nameJa: nameJa.trim() || get().nameJa,
        }),
      setShowRomaji: (showRomaji) => set({ showRomaji }),
      setBengaliMode: (bengaliMode) => set({ bengaliMode }),
      setVoiceRate: (voiceRate) => set({ voiceRate }),
      setAutoPlay: (autoPlay) => set({ autoPlay }),
      touchStreak: () => {
        const today = todayKey();
        const { lastActiveDate, streak } = get();
        if (lastActiveDate === today) return;
        const next =
          lastActiveDate === yesterdayKey() ? streak + 1 : 1;
        set({ lastActiveDate: today, streak: next });
      },
      bumpActivity: (n = 1) => {
        const today = todayKey();
        const activity = { ...get().activity };
        activity[today] = (activity[today] ?? 0) + n;
        set({ activity });
        get().touchStreak();
      },
      markListen: (ja) => {
        const encounteredSentences = get().encounteredSentences.includes(ja)
          ? get().encounteredSentences
          : [...get().encounteredSentences, ja];
        set({
          listenCount: get().listenCount + 1,
          encounteredSentences,
        });
        get().bumpActivity(1);
      },
      markSpeak: () => {
        set({ speakCount: get().speakCount + 1 });
        get().bumpActivity(1);
      },
      markReview: () => {
        set({ reviewCount: get().reviewCount + 1 });
        get().bumpActivity(1);
      },
      completeLesson: (id) => {
        if (get().completedLessons.includes(id)) {
          get().bumpActivity(1);
          return;
        }
        set({ completedLessons: [...get().completedLessons, id] });
        get().bumpActivity(5);
      },
      completeDialogue: (id) => {
        if (get().completedDialogues.includes(id)) return;
        set({ completedDialogues: [...get().completedDialogues, id] });
        get().bumpActivity(3);
      },
      completeKanaGroup: (id) => {
        if (get().completedKanaGroups.includes(id)) return;
        set({ completedKanaGroups: [...get().completedKanaGroups, id] });
        get().bumpActivity(2);
      },
      completeKanji: (id) => {
        if (get().completedKanji.includes(id)) return;
        set({ completedKanji: [...get().completedKanji, id] });
        get().meetKanji(id);
        get().bumpActivity(2);
      },
      meetKana: (chars) => {
        const setChars = new Set(get().encounteredKana);
        chars.forEach((c) => setChars.add(c));
        set({ encounteredKana: [...setChars] });
      },
      meetKanji: (kanji) => {
        if (get().encounteredKanji.includes(kanji)) return;
        set({ encounteredKanji: [...get().encounteredKanji, kanji] });
      },
      setDailyLesson: (id, date) => set({ dailyLessonId: id, dailyDate: date }),
      resetAll: () => set({ ...initial, hydrated: true }),
    }),
    {
      name: "japaneducation-progress",
      version: 1,
      partialize: (s) => ({
        onboardingDone: s.onboardingDone,
        learnerName: s.learnerName,
        nameJa: s.nameJa,
        showRomaji: s.showRomaji,
        bengaliMode: s.bengaliMode,
        voiceRate: s.voiceRate,
        autoPlay: s.autoPlay,
        completedLessons: s.completedLessons,
        completedDialogues: s.completedDialogues,
        completedKanaGroups: s.completedKanaGroups,
        completedKanji: s.completedKanji,
        encounteredSentences: s.encounteredSentences,
        encounteredKana: s.encounteredKana,
        encounteredKanji: s.encounteredKanji,
        streak: s.streak,
        lastActiveDate: s.lastActiveDate,
        dailyDate: s.dailyDate,
        dailyLessonId: s.dailyLessonId,
        listenCount: s.listenCount,
        speakCount: s.speakCount,
        reviewCount: s.reviewCount,
        activity: s.activity,
      }),
    },
  ),
);

export function useHydrated(): boolean {
  return useProgress((s) => s.hydrated);
}
