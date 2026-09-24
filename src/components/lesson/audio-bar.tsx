import { RotateCcw, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { speakJapanese, stopSpeaking } from "@/lib/speech";
import { useProgress } from "@/lib/store";
import { useEffect, useState } from "react";

let unlocked = false;
export function unlockSpeech() {
  unlocked = true;
}
export function speechUnlocked() {
  return unlocked;
}

export function AudioBar({
  ja,
  auto,
  size = "default",
}: {
  ja: string;
  auto?: boolean;
  size?: "default" | "lg";
}) {
  const rate = useProgress((s) => s.voiceRate);
  const [playing, setPlaying] = useState(false);

  const play = () => {
    if (!ja.trim()) return;
    unlocked = true;
    setPlaying(true);
    speakJapanese(ja, {
      rate,
      onend: () => setPlaying(false),
    });
    useProgress.getState().markListen(ja);
  };

  useEffect(() => {
    if (auto && unlocked && ja.trim()) {
      play();
    }
    return () => stopSpeaking();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ja, auto]);

  return (
    <div className="flex gap-2">
      <Button
        type="button"
        size={size === "lg" ? "lg" : "default"}
        className="flex-1"
        onClick={play}
        aria-pressed={playing}
      >
        <Volume2 className="ml-0.5" />
        Listen
      </Button>
      <Button type="button" variant="outline" size={size === "lg" ? "lg" : "icon"} onClick={play} aria-label="Listen again">
        <RotateCcw />
        {size === "lg" ? "Again" : null}
      </Button>
    </div>
  );
}
