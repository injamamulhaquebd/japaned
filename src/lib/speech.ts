const JA_TEXT = /[\u3040-\u30ff\u4e00-\u9faf]/;

export function stripJaPunct(text: string): string {
  return text.replace(/[「」『』]/g, "").trim();
}

function pickVoice(): SpeechSynthesisVoice | null {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return null;
  const voices = window.speechSynthesis.getVoices();
  const ja = voices.filter((v) => v.lang.toLowerCase().startsWith("ja"));
  return (
    ja.find((v) => /google/i.test(v.name)) ||
    ja.find((v) => v.localService) ||
    ja[0] ||
    null
  );
}

export function ensureVoices(): Promise<void> {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) {
    return Promise.resolve();
  }
  if (window.speechSynthesis.getVoices().length > 0) return Promise.resolve();
  return new Promise((resolve) => {
    const done = () => {
      window.speechSynthesis.removeEventListener("voiceschanged", done);
      resolve();
    };
    window.speechSynthesis.addEventListener("voiceschanged", done);
    window.setTimeout(done, 1500);
  });
}

export function canSpeak(): boolean {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

export function stopSpeaking(): void {
  if (!canSpeak()) return;
  window.speechSynthesis.cancel();
}

export function speakJapanese(
  text: string,
  opts?: { rate?: number; onend?: () => void },
): void {
  if (!canSpeak()) {
    opts?.onend?.();
    return;
  }
  const cleaned = stripJaPunct(text);
  const u = new SpeechSynthesisUtterance(cleaned);
  u.lang = "ja-JP";
  u.rate = opts?.rate ?? 0.88;
  u.pitch = 1;
  const voice = pickVoice();
  if (voice) u.voice = voice;
  u.onend = () => opts?.onend?.();
  u.onerror = () => opts?.onend?.();
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(u);
}

export type RecognitionHandle = {
  supported: boolean;
  stop: () => void;
};

type RecogCtor = new () => {
  lang: string;
  interimResults: boolean;
  continuous: boolean;
  maxAlternatives: number;
  start: () => void;
  stop: () => void;
  abort: () => void;
  onresult: ((ev: { results: ArrayLike<ArrayLike<{ transcript: string }>> }) => void) | null;
  onend: (() => void) | null;
  onerror: (() => void) | null;
};

function getRecogCtor(): RecogCtor | null {
  if (typeof window === "undefined") return null;
  const w = window as unknown as {
    SpeechRecognition?: RecogCtor;
    webkitSpeechRecognition?: RecogCtor;
  };
  return w.SpeechRecognition || w.webkitSpeechRecognition || null;
}

export function canRecognize(): boolean {
  return getRecogCtor() !== null;
}

export function startRecognition(
  onResult: (text: string) => void,
  onEnd: () => void,
): RecognitionHandle {
  const Ctor = getRecogCtor();
  if (!Ctor) return { supported: false, stop: () => {} };
  const rec = new Ctor();
  rec.lang = "ja-JP";
  rec.interimResults = false;
  rec.continuous = false;
  rec.maxAlternatives = 3;
  rec.onresult = (ev) => {
    const first = ev.results[0]?.[0]?.transcript ?? "";
    if (first) onResult(first);
  };
  rec.onend = () => onEnd();
  rec.onerror = () => onEnd();
  try {
    rec.start();
  } catch {
    onEnd();
  }
  return {
    supported: true,
    stop: () => {
      try {
        rec.abort();
      } catch {
        /* ignore */
      }
    },
  };
}

export function looksJapanese(text: string): boolean {
  return JA_TEXT.test(text);
}
