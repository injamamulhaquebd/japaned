import type { ReactNode } from "react";
import type { ArtKey } from "@/lib/content/types";
import { cn } from "@/lib/utils";

const paper = "#f3eee6";
const ink = "#1c1916";
const indigo = "#3d5a7a";
const clay = "#6b635a";
const wash = "#e8e0d4";

function Frame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <svg
      viewBox="0 0 320 180"
      className={cn("h-auto w-full overflow-hidden rounded-[var(--radius-lg)]", className)}
      aria-hidden
    >
      <rect width="320" height="180" fill={paper} />
      {children}
    </svg>
  );
}

export function SceneArt({ art, className }: { art: ArtKey; className?: string }) {
  switch (art) {
    case "morning":
      return (
        <Frame className={className}>
          <rect x="0" y="0" width="320" height="90" fill="#d9c9b0" />
          <circle cx="248" cy="48" r="28" fill={indigo} opacity="0.85" />
          <rect x="28" y="78" width="264" height="6" fill={ink} opacity="0.18" />
          <rect x="40" y="100" width="120" height="52" fill={wash} />
          <rect x="48" y="108" width="104" height="8" fill={indigo} opacity="0.25" />
          <rect x="200" y="112" width="64" height="40" fill={indigo} opacity="0.35" />
          <rect x="208" y="88" width="16" height="24" fill={clay} opacity="0.5" />
        </Frame>
      );
    case "day":
      return (
        <Frame className={className}>
          <rect width="320" height="110" fill="#cfc6b6" />
          <rect x="0" y="110" width="320" height="70" fill="#d8d0c2" />
          <rect x="40" y="40" width="70" height="90" fill={wash} />
          <rect x="210" y="50" width="70" height="80" fill={indigo} opacity="0.4" />
          <rect x="148" y="120" width="24" height="40" fill={ink} opacity="0.45" />
          <rect x="176" y="124" width="20" height="36" fill={indigo} opacity="0.7" />
        </Frame>
      );
    case "night":
      return (
        <Frame className={className}>
          <rect width="320" height="180" fill="#2a3340" />
          <circle cx="250" cy="40" r="16" fill={paper} opacity="0.8" />
          <rect x="36" y="70" width="90" height="80" fill="#3d4a5c" />
          <rect x="48" y="82" width="28" height="36" fill={paper} opacity="0.2" />
          <rect x="180" y="100" width="100" height="50" fill="#1c1916" opacity="0.4" />
          <rect x="196" y="88" width="10" height="18" fill="#c4b8a4" />
        </Frame>
      );
    case "meet":
      return (
        <Frame className={className}>
          <rect width="320" height="180" fill={paper} />
          <rect x="0" y="130" width="320" height="50" fill={wash} />
          <circle cx="118" cy="88" r="22" fill={indigo} opacity="0.35" />
          <rect x="100" y="110" width="36" height="48" fill={indigo} opacity="0.5" />
          <circle cx="202" cy="88" r="22" fill={clay} opacity="0.4" />
          <rect x="184" y="110" width="36" height="48" fill={ink} opacity="0.35" />
        </Frame>
      );
    case "introduce":
      return (
        <Frame className={className}>
          <circle cx="160" cy="86" r="36" fill={indigo} opacity="0.2" />
          <circle cx="160" cy="70" r="18" fill={indigo} opacity="0.55" />
          <rect x="138" y="92" width="44" height="50" fill={indigo} opacity="0.45" />
          <rect x="40" y="140" width="240" height="8" fill={ink} opacity="0.12" />
        </Frame>
      );
    case "thisis":
      return (
        <Frame className={className}>
          <rect x="36" y="100" width="248" height="12" fill={clay} opacity="0.4" />
          <rect x="56" y="58" width="52" height="42" fill={indigo} opacity="0.45" />
          <rect x="132" y="70" width="36" height="30" fill={wash} />
          <ellipse cx="232" cy="88" rx="28" ry="16" fill={ink} opacity="0.35" />
          <circle cx="220" cy="80" r="7" fill={indigo} />
        </Frame>
      );
    case "family":
      return (
        <Frame className={className}>
          <rect x="40" y="120" width="240" height="10" fill={clay} opacity="0.45" />
          {[86, 132, 178, 224].map((x, i) => (
            <g key={x}>
              <circle cx={x} cy="78" r={i === 1 ? 16 : 14} fill={i % 2 ? indigo : clay} opacity="0.55" />
              <rect x={x - 12} y="94" width="24" height="28" fill={i % 2 ? indigo : ink} opacity="0.35" />
            </g>
          ))}
        </Frame>
      );
    case "home":
      return (
        <Frame className={className}>
          <polygon points="40,90 160,28 280,90" fill={indigo} opacity="0.35" />
          <rect x="64" y="90" width="192" height="70" fill={wash} />
          <rect x="140" y="112" width="40" height="48" fill={indigo} opacity="0.55" />
          <rect x="84" y="108" width="32" height="28" fill={paper} />
        </Frame>
      );
    case "eat":
      return (
        <Frame className={className}>
          <ellipse cx="160" cy="118" rx="90" ry="28" fill={wash} />
          <ellipse cx="160" cy="108" rx="48" ry="18" fill={paper} />
          <ellipse cx="160" cy="108" rx="32" ry="12" fill={indigo} opacity="0.25" />
          <rect x="210" y="70" width="6" height="50" fill={ink} opacity="0.45" />
          <rect x="222" y="74" width="6" height="46" fill={ink} opacity="0.45" />
        </Frame>
      );
    case "drink":
      return (
        <Frame className={className}>
          <rect x="132" y="70" width="56" height="64" rx="6" fill={indigo} opacity="0.4" />
          <rect x="140" y="80" width="40" height="44" fill={paper} />
          <path d="M148 70 C148 48 172 48 172 70" fill="none" stroke={clay} strokeWidth="3" />
          <rect x="70" y="130" width="180" height="10" fill={wash} />
        </Frame>
      );
    case "go":
      return (
        <Frame className={className}>
          <rect x="0" y="120" width="320" height="60" fill={wash} />
          <rect x="40" y="86" width="80" height="50" fill={indigo} opacity="0.3" />
          <rect x="200" y="70" width="70" height="66" fill={ink} opacity="0.2" />
          <rect x="148" y="100" width="18" height="36" fill={indigo} />
          <polygon points="250,40 268,70 232,70" fill={clay} opacity="0.5" />
        </Frame>
      );
    case "return":
      return (
        <Frame className={className}>
          <rect width="320" height="80" fill="#c4b7a4" />
          <rect x="90" y="48" width="140" height="110" fill={wash} />
          <rect x="140" y="88" width="40" height="70" fill={indigo} opacity="0.55" />
          <circle cx="248" cy="36" r="14" fill={paper} opacity="0.7" />
        </Frame>
      );
    case "shop":
      return (
        <Frame className={className}>
          <rect x="50" y="40" width="220" height="110" fill={wash} />
          <rect x="50" y="40" width="220" height="24" fill={indigo} opacity="0.5" />
          <rect x="70" y="80" width="50" height="50" fill={paper} />
          <rect x="136" y="80" width="50" height="50" fill={paper} />
          <rect x="202" y="80" width="50" height="50" fill={paper} />
          <rect x="110" y="136" width="100" height="10" fill={clay} opacity="0.4" />
        </Frame>
      );
    case "ask":
      return (
        <Frame className={className}>
          <rect x="0" y="120" width="320" height="60" fill={wash} />
          <rect x="40" y="50" width="16" height="80" fill={clay} />
          <rect x="264" y="50" width="16" height="80" fill={clay} />
          <circle cx="160" cy="78" r="20" fill={indigo} opacity="0.5" />
          <rect x="148" y="98" width="24" height="40" fill={indigo} opacity="0.4" />
        </Frame>
      );
    case "time":
      return (
        <Frame className={className}>
          <circle cx="160" cy="90" r="52" fill={wash} />
          <circle cx="160" cy="90" r="44" fill={paper} />
          <line x1="160" y1="90" x2="160" y2="58" stroke={indigo} strokeWidth="4" />
          <line x1="160" y1="90" x2="188" y2="90" stroke={ink} strokeWidth="3" />
          <circle cx="160" cy="90" r="4" fill={indigo} />
        </Frame>
      );
    case "numbers":
      return (
        <Frame className={className}>
          {[0, 1, 2].map((i) => (
            <circle key={i} cx={90 + i * 70} cy="96" r="28" fill={i === 1 ? indigo : wash} opacity={i === 1 ? 0.5 : 1} />
          ))}
        </Frame>
      );
    case "school":
      return (
        <Frame className={className}>
          <rect x="50" y="50" width="220" height="100" fill={wash} />
          <rect x="50" y="50" width="220" height="20" fill={indigo} opacity="0.45" />
          <rect x="70" y="84" width="44" height="28" fill={paper} />
          <rect x="138" y="84" width="44" height="28" fill={paper} />
          <rect x="206" y="84" width="44" height="28" fill={paper} />
          <rect x="148" y="120" width="24" height="30" fill={indigo} opacity="0.5" />
        </Frame>
      );
    case "daily":
      return (
        <Frame className={className}>
          <circle cx="56" cy="40" r="16" fill={indigo} opacity="0.5" />
          <rect x="40" y="90" width="70" height="50" fill={wash} />
          <rect x="126" y="78" width="70" height="62" fill={indigo} opacity="0.25" />
          <rect x="212" y="70" width="70" height="70" fill={ink} opacity="0.2" />
        </Frame>
      );
    case "week":
      return (
        <Frame className={className}>
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <rect
              key={i}
              x={28 + i * 40}
              y={i === 4 ? 60 : 80}
              width="32"
              height={i === 4 ? 70 : 50}
              fill={i === 4 ? indigo : wash}
              opacity={i === 4 ? 0.55 : 1}
            />
          ))}
        </Frame>
      );
    case "food":
      return (
        <Frame className={className}>
          <ellipse cx="160" cy="120" rx="80" ry="24" fill={wash} />
          <ellipse cx="160" cy="100" rx="54" ry="22" fill={indigo} opacity="0.25" />
          <path d="M130 88 C140 60 180 60 190 88" fill="none" stroke={clay} strokeWidth="3" />
        </Frame>
      );
    case "like":
      return (
        <Frame className={className}>
          <rect x="0" y="120" width="320" height="60" fill="#c8d0c4" />
          <circle cx="80" cy="48" r="22" fill={indigo} opacity="0.4" />
          <ellipse cx="210" cy="118" rx="26" ry="14" fill={ink} opacity="0.4" />
          <circle cx="200" cy="108" r="8" fill={indigo} />
        </Frame>
      );
    case "weather":
      return (
        <Frame className={className}>
          <circle cx="90" cy="60" r="24" fill={indigo} opacity="0.45" />
          <ellipse cx="190" cy="58" rx="50" ry="18" fill={clay} opacity="0.35" />
          <ellipse cx="230" cy="70" rx="40" ry="14" fill={wash} />
        </Frame>
      );
    default:
      return (
        <Frame className={className}>
          <rect x="70" y="50" width="180" height="80" fill={wash} />
        </Frame>
      );
  }
}
