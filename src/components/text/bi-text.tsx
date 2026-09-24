import type { ReactNode } from "react";
import type { Bi } from "@/lib/content/types";
import { useProgress } from "@/lib/store";
import { cn } from "@/lib/utils";

export function BiText({
  text,
  revealed,
  className,
  enClass,
  bnClass,
}: {
  text: Bi;
  revealed: boolean;
  className?: string;
  enClass?: string;
  bnClass?: string;
}) {
  const mode = useProgress((s) => s.bengaliMode);
  if (!revealed && mode === "after") return null;
  const showBn = mode !== "off" && (mode === "always" || revealed);
  return (
    <div className={cn("space-y-1", className)}>
      <p className={cn("text-[15px] leading-relaxed text-foreground", enClass)}>{text.en}</p>
      {showBn ? (
        <p className={cn("text-sm leading-relaxed text-muted-foreground", bnClass)}>{text.bn}</p>
      ) : null}
    </div>
  );
}

export function Ja({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p lang="ja" className={cn("ja text-3xl font-medium leading-snug tracking-wide text-foreground", className)}>
      {children}
    </p>
  );
}
