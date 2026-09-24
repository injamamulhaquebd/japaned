import { Check, Mic, Square } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { canRecognize, startRecognition } from "@/lib/speech";
import { useProgress } from "@/lib/store";
import { roughlyMatches } from "@/lib/utils";

export function SpeakPanel({ ja }: { ja: string }) {
  const [supported] = useState(() => canRecognize());
  const [listening, setListening] = useState(false);
  const [heard, setHeard] = useState("");
  const [ok, setOk] = useState<"idle" | "close" | "said">("idle");
  const handle = useRef<{ stop: () => void } | null>(null);

  useEffect(() => {
    return () => handle.current?.stop();
  }, []);

  const start = () => {
    setHeard("");
    setOk("idle");
    setListening(true);
    handle.current = startRecognition(
      (text) => {
        setHeard(text);
        setOk(roughlyMatches(text, ja) ? "close" : "said");
        useProgress.getState().markSpeak();
      },
      () => setListening(false),
    );
  };

  const stop = () => {
    handle.current?.stop();
    setListening(false);
  };

  const saidIt = () => {
    setOk("said");
    useProgress.getState().markSpeak();
  };

  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        {supported ? (
          <Button
            type="button"
            variant={listening ? "destructive" : "secondary"}
            className="flex-1"
            onClick={listening ? stop : start}
          >
            {listening ? <Square /> : <Mic />}
            {listening ? "Stop" : "Repeat"}
          </Button>
        ) : null}
        <Button type="button" variant="outline" className="flex-1" onClick={saidIt}>
          <Check />I said it
        </Button>
      </div>
      {!supported ? (
        <p className="text-xs leading-relaxed text-muted-foreground">
          Speech recognition is not available here. Listen, speak aloud, then continue. No one is scoring you.
        </p>
      ) : null}
      {heard ? (
        <p className="text-sm text-muted-foreground">
          Heard: <span lang="ja">{heard}</span>
        </p>
      ) : null}
      {ok === "close" ? (
        <p className="text-sm text-success">Close enough. Keep the feeling, not the grade.</p>
      ) : null}
      {ok === "said" ? (
        <p className="text-sm text-success">Good. The mouth remembers what the ear already knows.</p>
      ) : null}
    </div>
  );
}
