import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { useEffect } from "react";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { AppShell } from "@/components/layout/app-shell";
import { Onboarding } from "@/components/onboarding";
import { useProgress } from "@/lib/store";
import appCss from "../styles.css?url";

const APP_NAME = "Japaneducation";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { title: APP_NAME },
      { name: "theme-color", content: "#F3EEE6" },
      {
        name: "description",
        content: "Learn JLPT N5 Japanese by hearing, understanding, copying, and using it — not by memorizing lists.",
      },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&family=Noto+Sans+JP:wght@400;500;700&family=Noto+Serif+JP:wght@500;600;700&display=swap",
      },
    ],
  }),
  component: Root,
});

function Root() {
  return (
    <html lang="en" suppressHydrationWarning className="antialiased">
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <ShellGate />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}

function ShellGate() {
  const hydrated = useProgress((s) => s.hydrated);
  const onboardingDone = useProgress((s) => s.onboardingDone);

  useEffect(() => {
    const unsub = useProgress.persist.onFinishHydration(() => {
      useProgress.getState().markHydrated();
    });
    if (useProgress.persist.hasHydrated()) {
      useProgress.getState().markHydrated();
    }
    const t = window.setTimeout(() => useProgress.getState().markHydrated(), 50);
    return () => {
      unsub();
      window.clearTimeout(t);
    };
  }, []);

  if (!hydrated) {
    return (
      <div className="flex min-h-dvh items-center justify-center bg-background text-muted-foreground">
        <p className="font-display text-sm">Japaneducation</p>
      </div>
    );
  }

  if (!onboardingDone) {
    return <Onboarding />;
  }

  return (
    <AppShell>
      <Outlet />
    </AppShell>
  );
}
