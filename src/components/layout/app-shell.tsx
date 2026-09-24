import type { ReactNode } from "react";
import {
  BookOpen,
  CalendarDays,
  Ear,
  Ellipsis,
  Home,
  MessageCircle,
  Mic,
  Settings,
  Languages,
  BarChart3,
  RotateCcw,
} from "lucide-react";
import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";
import { Seal } from "@/components/brand/logo";
import { ensureVoices } from "@/lib/speech";
import { useProgress } from "@/lib/store";
import { cn } from "@/lib/utils";

const tabs = [
  { to: "/", label: "Home", icon: Home },
  { to: "/learn", label: "Learn", icon: BookOpen },
  { to: "/daily", label: "Daily", icon: CalendarDays },
  { to: "/review", label: "Review", icon: RotateCcw },
  { to: "/more", label: "More", icon: Ellipsis },
] as const;

export const moreLinks = [
  { to: "/listen", label: "Listening", en: "Hear situations", icon: Ear },
  { to: "/speak", label: "Speaking", en: "Copy what you heard", icon: Mic },
  { to: "/conversation", label: "Conversation", en: "Short real talks", icon: MessageCircle },
  { to: "/hiragana", label: "Hiragana", en: "Sounds from words", icon: Languages },
  { to: "/katakana", label: "Katakana", en: "Loanwords you met", icon: Languages },
  { to: "/kanji", label: "Kanji", en: "Deeper writing", icon: BookOpen },
  { to: "/progress", label: "Progress", en: "Days with Japanese", icon: BarChart3 },
  { to: "/settings", label: "Settings", en: "Voice, name, Bengali", icon: Settings },
] as const;

function isActive(pathname: string, to: string) {
  if (to === "/") return pathname === "/";
  return pathname === to || pathname.startsWith(`${to}/`);
}

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const immersive =
    pathname.startsWith("/lesson/") || pathname.startsWith("/dialogue/");

  useEffect(() => {
    void ensureVoices();
    const unsub = useProgress.persist.onFinishHydration(() => {
      useProgress.getState().markHydrated();
    });
    if (useProgress.persist.hasHydrated()) {
      useProgress.getState().markHydrated();
    }
    return unsub;
  }, []);

  if (immersive) return <>{children}</>;

  return (
    <div className="mx-auto flex min-h-dvh max-w-lg flex-col bg-background">
      <header className="safe-top flex items-center gap-3 px-4 pb-2 pt-3">
        <Seal />
        <div className="min-w-0">
          <p className="font-display text-[15px] font-medium tracking-tight">Japaneducation</p>
          <p className="text-xs text-muted-foreground">Hear, then live the language</p>
        </div>
      </header>
      <div className="safe-bottom flex-1">{children}</div>
      <nav
        className="fixed inset-x-0 bottom-0 z-20 mx-auto max-w-lg border-t border-border bg-background/95 pb-[env(safe-area-inset-bottom)]"
        aria-label="Main"
      >
        <ul className="grid grid-cols-5">
          {tabs.map((t) => {
            const Icon = t.icon;
            const active = isActive(pathname, t.to);
            return (
              <li key={t.to}>
                <Link
                  to={t.to}
                  className={cn(
                    "flex min-h-14 flex-col items-center justify-center gap-0.5 text-[11px] font-medium",
                    active ? "text-primary" : "text-muted-foreground",
                  )}
                >
                  <Icon className="size-5" strokeWidth={active ? 2.2 : 1.8} />
                  {t.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export function Page({
  title,
  kicker,
  children,
}: {
  title: string;
  kicker?: string;
  children: ReactNode;
}) {
  return (
    <main className="px-4 pb-4 pt-2">
      {kicker ? (
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">{kicker}</p>
      ) : null}
      <h1 className="mt-1 font-display text-[1.65rem] font-medium leading-tight tracking-tight">{title}</h1>
      <div className="mt-5 space-y-4">{children}</div>
    </main>
  );
}
