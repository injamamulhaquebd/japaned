import { cn } from "@/lib/utils";

export function Seal({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={cn("size-8", className)} aria-hidden>
      <rect width="32" height="32" rx="8" fill="#3d5a7a" />
      <text
        x="16"
        y="22"
        textAnchor="middle"
        fill="#f3eee6"
        fontFamily="Noto Serif JP, serif"
        fontSize="16"
      >
        日
      </text>
    </svg>
  );
}
