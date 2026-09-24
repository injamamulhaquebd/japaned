import { i as __toESM } from "../_runtime.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { o as require_jsx_runtime, r as Slot, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { _ as createRootRoute, b as useRouter, d as useRouterState, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as BookOpen, a as RotateCcw, d as Ellipsis, f as Ear, g as CalendarDays, h as ChartColumn, i as Settings, l as Languages, n as TriangleAlert, o as Mic, s as MessageCircle, t as Volume2, u as House } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { t as Root$1 } from "../_libs/@radix-ui/react-label+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/store-BeK7TWEZ.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function todayKey(d = /* @__PURE__ */ new Date()) {
	return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
function yesterdayKey(d = /* @__PURE__ */ new Date()) {
	const y = new Date(d);
	y.setDate(y.getDate() - 1);
	return todayKey(y);
}
function shuffle(items) {
	const copy = [...items];
	for (let i = copy.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const a = copy[i];
		const b = copy[j];
		if (a === void 0 || b === void 0) continue;
		copy[i] = b;
		copy[j] = a;
	}
	return copy;
}
function normalizeJa(s) {
	return s.replace(/[「」『』。、！？!?,.~\s]/g, "").replace(/ー/g, "").toLowerCase();
}
function roughlyMatches(heard, target) {
	const a = normalizeJa(heard);
	const b = normalizeJa(target);
	if (!a || !b) return false;
	if (a.includes(b) || b.includes(a)) return true;
	let matches = 0;
	const min = Math.min(a.length, b.length);
	for (let i = 0; i < min; i++) if (a[i] === b[i]) matches++;
	return matches / Math.max(a.length, b.length) >= .45;
}
function stripJaPunct(text) {
	return text.replace(/[「」『』]/g, "").trim();
}
function pickVoice() {
	if (typeof window === "undefined" || !("speechSynthesis" in window)) return null;
	const ja = window.speechSynthesis.getVoices().filter((v) => v.lang.toLowerCase().startsWith("ja"));
	return ja.find((v) => /google/i.test(v.name)) || ja.find((v) => v.localService) || ja[0] || null;
}
function ensureVoices() {
	if (typeof window === "undefined" || !("speechSynthesis" in window)) return Promise.resolve();
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
function canSpeak() {
	return typeof window !== "undefined" && "speechSynthesis" in window;
}
function stopSpeaking() {
	if (!canSpeak()) return;
	window.speechSynthesis.cancel();
}
function speakJapanese(text, opts) {
	if (!canSpeak()) {
		opts?.onend?.();
		return;
	}
	const cleaned = stripJaPunct(text);
	const u = new SpeechSynthesisUtterance(cleaned);
	u.lang = "ja-JP";
	u.rate = opts?.rate ?? .88;
	u.pitch = 1;
	const voice = pickVoice();
	if (voice) u.voice = voice;
	u.onend = () => opts?.onend?.();
	u.onerror = () => opts?.onend?.();
	window.speechSynthesis.cancel();
	window.speechSynthesis.speak(u);
}
function getRecogCtor() {
	if (typeof window === "undefined") return null;
	const w = window;
	return w.SpeechRecognition || w.webkitSpeechRecognition || null;
}
function canRecognize() {
	return getRecogCtor() !== null;
}
function startRecognition(onResult, onEnd) {
	const Ctor = getRecogCtor();
	if (!Ctor) return {
		supported: false,
		stop: () => {}
	};
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
			} catch {}
		}
	};
}
var initial = {
	onboardingDone: false,
	learnerName: "Injam",
	nameJa: "インジャム",
	showRomaji: true,
	bengaliMode: "after",
	voiceRate: .88,
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
	activity: {}
};
var useProgress = create()(persist((set, get) => ({
	hydrated: false,
	...initial,
	markHydrated: () => set({ hydrated: true }),
	finishOnboarding: (name, nameJa) => {
		set({
			onboardingDone: true,
			learnerName: name.trim() || "Injam",
			nameJa: nameJa.trim() || "インジャム"
		});
		get().touchStreak();
	},
	setName: (name, nameJa) => set({
		learnerName: name.trim() || get().learnerName,
		nameJa: nameJa.trim() || get().nameJa
	}),
	setShowRomaji: (showRomaji) => set({ showRomaji }),
	setBengaliMode: (bengaliMode) => set({ bengaliMode }),
	setVoiceRate: (voiceRate) => set({ voiceRate }),
	setAutoPlay: (autoPlay) => set({ autoPlay }),
	touchStreak: () => {
		const today = todayKey();
		const { lastActiveDate, streak } = get();
		if (lastActiveDate === today) return;
		set({
			lastActiveDate: today,
			streak: lastActiveDate === yesterdayKey() ? streak + 1 : 1
		});
	},
	bumpActivity: (n = 1) => {
		const today = todayKey();
		const activity = { ...get().activity };
		activity[today] = (activity[today] ?? 0) + n;
		set({ activity });
		get().touchStreak();
	},
	markListen: (ja) => {
		const encounteredSentences = get().encounteredSentences.includes(ja) ? get().encounteredSentences : [...get().encounteredSentences, ja];
		set({
			listenCount: get().listenCount + 1,
			encounteredSentences
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
	setDailyLesson: (id, date) => set({
		dailyLessonId: id,
		dailyDate: date
	}),
	resetAll: () => set({
		...initial,
		hydrated: true
	})
}), {
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
		activity: s.activity
	})
}));
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/button-DTS8Rl4x.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius-md)] text-sm font-medium transition-[opacity,transform,background-color,box-shadow] duration-[var(--motion-quick)] ease-[var(--ease-smooth-out)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-40 active:scale-[0.96] min-h-11 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow-[var(--shadow-border)]",
			secondary: "bg-secondary text-secondary-foreground",
			outline: "bg-card text-foreground shadow-[var(--shadow-border)]",
			ghost: "text-foreground hover:bg-muted",
			success: "bg-success text-success-foreground",
			destructive: "bg-destructive text-destructive-foreground"
		},
		size: {
			default: "px-4 py-2",
			lg: "h-12 px-5 text-base",
			xl: "h-14 px-6 text-base rounded-[var(--radius-lg)]",
			sm: "h-9 min-h-9 px-3 text-xs",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-CDCqzIHv.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
function Seal({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 32 32",
		className: cn("size-8", className),
		"aria-hidden": true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			width: "32",
			height: "32",
			rx: "8",
			fill: "#3d5a7a"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
			x: "16",
			y: "22",
			textAnchor: "middle",
			fill: "#f3eee6",
			fontFamily: "Noto Serif JP, serif",
			fontSize: "16",
			children: "日"
		})]
	});
}
var tabs = [
	{
		to: "/",
		label: "Home",
		icon: House
	},
	{
		to: "/learn",
		label: "Learn",
		icon: BookOpen
	},
	{
		to: "/daily",
		label: "Daily",
		icon: CalendarDays
	},
	{
		to: "/review",
		label: "Review",
		icon: RotateCcw
	},
	{
		to: "/more",
		label: "More",
		icon: Ellipsis
	}
];
var moreLinks = [
	{
		to: "/listen",
		label: "Listening",
		en: "Hear situations",
		icon: Ear
	},
	{
		to: "/speak",
		label: "Speaking",
		en: "Copy what you heard",
		icon: Mic
	},
	{
		to: "/conversation",
		label: "Conversation",
		en: "Short real talks",
		icon: MessageCircle
	},
	{
		to: "/hiragana",
		label: "Hiragana",
		en: "Sounds from words",
		icon: Languages
	},
	{
		to: "/katakana",
		label: "Katakana",
		en: "Loanwords you met",
		icon: Languages
	},
	{
		to: "/kanji",
		label: "Kanji",
		en: "Deeper writing",
		icon: BookOpen
	},
	{
		to: "/progress",
		label: "Progress",
		en: "Days with Japanese",
		icon: ChartColumn
	},
	{
		to: "/settings",
		label: "Settings",
		en: "Voice, name, Bengali",
		icon: Settings
	}
];
function isActive(pathname, to) {
	if (to === "/") return pathname === "/";
	return pathname === to || pathname.startsWith(`${to}/`);
}
function AppShell({ children }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const immersive = pathname.startsWith("/lesson/") || pathname.startsWith("/dialogue/");
	(0, import_react.useEffect)(() => {
		ensureVoices();
		const unsub = useProgress.persist.onFinishHydration(() => {
			useProgress.getState().markHydrated();
		});
		if (useProgress.persist.hasHydrated()) useProgress.getState().markHydrated();
		return unsub;
	}, []);
	if (immersive) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex min-h-dvh max-w-lg flex-col bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "safe-top flex items-center gap-3 px-4 pb-2 pt-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Seal, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-[15px] font-medium tracking-tight",
						children: "Japaneducation"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Hear, then live the language"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "safe-bottom flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "fixed inset-x-0 bottom-0 z-20 mx-auto max-w-lg border-t border-border bg-background/95 pb-[env(safe-area-inset-bottom)]",
				"aria-label": "Main",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid grid-cols-5",
					children: tabs.map((t) => {
						const Icon = t.icon;
						const active = isActive(pathname, t.to);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: t.to,
							className: cn("flex min-h-14 flex-col items-center justify-center gap-0.5 text-[11px] font-medium", active ? "text-primary" : "text-muted-foreground"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "size-5",
								strokeWidth: active ? 2.2 : 1.8
							}), t.label]
						}) }, t.to);
					})
				})
			})
		]
	});
}
function Page({ title, kicker, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "px-4 pb-4 pt-2",
		children: [
			kicker ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground",
				children: kicker
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-1 font-display text-[1.65rem] font-medium leading-tight tracking-tight",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 space-y-4",
				children
			})
		]
	});
}
var paper = "#f3eee6";
var ink = "#1c1916";
var indigo = "#3d5a7a";
var clay = "#6b635a";
var wash = "#e8e0d4";
function Frame({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 320 180",
		className: cn("h-auto w-full overflow-hidden rounded-[var(--radius-lg)]", className),
		"aria-hidden": true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			width: "320",
			height: "180",
			fill: paper
		}), children]
	});
}
function SceneArt({ art, className }) {
	switch (art) {
		case "morning": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
			className,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "0",
					y: "0",
					width: "320",
					height: "90",
					fill: "#d9c9b0"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "248",
					cy: "48",
					r: "28",
					fill: indigo,
					opacity: "0.85"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "28",
					y: "78",
					width: "264",
					height: "6",
					fill: ink,
					opacity: "0.18"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "40",
					y: "100",
					width: "120",
					height: "52",
					fill: wash
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "48",
					y: "108",
					width: "104",
					height: "8",
					fill: indigo,
					opacity: "0.25"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "200",
					y: "112",
					width: "64",
					height: "40",
					fill: indigo,
					opacity: "0.35"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "208",
					y: "88",
					width: "16",
					height: "24",
					fill: clay,
					opacity: "0.5"
				})
			]
		});
		case "day": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
			className,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "320",
					height: "110",
					fill: "#cfc6b6"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "0",
					y: "110",
					width: "320",
					height: "70",
					fill: "#d8d0c2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "40",
					y: "40",
					width: "70",
					height: "90",
					fill: wash
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "210",
					y: "50",
					width: "70",
					height: "80",
					fill: indigo,
					opacity: "0.4"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "148",
					y: "120",
					width: "24",
					height: "40",
					fill: ink,
					opacity: "0.45"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "176",
					y: "124",
					width: "20",
					height: "36",
					fill: indigo,
					opacity: "0.7"
				})
			]
		});
		case "night": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
			className,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "320",
					height: "180",
					fill: "#2a3340"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "250",
					cy: "40",
					r: "16",
					fill: paper,
					opacity: "0.8"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "36",
					y: "70",
					width: "90",
					height: "80",
					fill: "#3d4a5c"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "48",
					y: "82",
					width: "28",
					height: "36",
					fill: paper,
					opacity: "0.2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "180",
					y: "100",
					width: "100",
					height: "50",
					fill: "#1c1916",
					opacity: "0.4"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "196",
					y: "88",
					width: "10",
					height: "18",
					fill: "#c4b8a4"
				})
			]
		});
		case "meet": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
			className,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "320",
					height: "180",
					fill: paper
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "0",
					y: "130",
					width: "320",
					height: "50",
					fill: wash
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "118",
					cy: "88",
					r: "22",
					fill: indigo,
					opacity: "0.35"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "100",
					y: "110",
					width: "36",
					height: "48",
					fill: indigo,
					opacity: "0.5"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "202",
					cy: "88",
					r: "22",
					fill: clay,
					opacity: "0.4"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "184",
					y: "110",
					width: "36",
					height: "48",
					fill: ink,
					opacity: "0.35"
				})
			]
		});
		case "introduce": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
			className,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "160",
					cy: "86",
					r: "36",
					fill: indigo,
					opacity: "0.2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "160",
					cy: "70",
					r: "18",
					fill: indigo,
					opacity: "0.55"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "138",
					y: "92",
					width: "44",
					height: "50",
					fill: indigo,
					opacity: "0.45"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "40",
					y: "140",
					width: "240",
					height: "8",
					fill: ink,
					opacity: "0.12"
				})
			]
		});
		case "thisis": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
			className,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "36",
					y: "100",
					width: "248",
					height: "12",
					fill: clay,
					opacity: "0.4"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "56",
					y: "58",
					width: "52",
					height: "42",
					fill: indigo,
					opacity: "0.45"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "132",
					y: "70",
					width: "36",
					height: "30",
					fill: wash
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "232",
					cy: "88",
					rx: "28",
					ry: "16",
					fill: ink,
					opacity: "0.35"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "220",
					cy: "80",
					r: "7",
					fill: indigo
				})
			]
		});
		case "family": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
			className,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "40",
				y: "120",
				width: "240",
				height: "10",
				fill: clay,
				opacity: "0.45"
			}), [
				86,
				132,
				178,
				224
			].map((x, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: x,
				cy: "78",
				r: i === 1 ? 16 : 14,
				fill: i % 2 ? indigo : clay,
				opacity: "0.55"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: x - 12,
				y: "94",
				width: "24",
				height: "28",
				fill: i % 2 ? indigo : ink,
				opacity: "0.35"
			})] }, x))]
		});
		case "home": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
			className,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
					points: "40,90 160,28 280,90",
					fill: indigo,
					opacity: "0.35"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "64",
					y: "90",
					width: "192",
					height: "70",
					fill: wash
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "140",
					y: "112",
					width: "40",
					height: "48",
					fill: indigo,
					opacity: "0.55"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "84",
					y: "108",
					width: "32",
					height: "28",
					fill: paper
				})
			]
		});
		case "eat": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
			className,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "160",
					cy: "118",
					rx: "90",
					ry: "28",
					fill: wash
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "160",
					cy: "108",
					rx: "48",
					ry: "18",
					fill: paper
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "160",
					cy: "108",
					rx: "32",
					ry: "12",
					fill: indigo,
					opacity: "0.25"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "210",
					y: "70",
					width: "6",
					height: "50",
					fill: ink,
					opacity: "0.45"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "222",
					y: "74",
					width: "6",
					height: "46",
					fill: ink,
					opacity: "0.45"
				})
			]
		});
		case "drink": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
			className,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "132",
					y: "70",
					width: "56",
					height: "64",
					rx: "6",
					fill: indigo,
					opacity: "0.4"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "140",
					y: "80",
					width: "40",
					height: "44",
					fill: paper
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M148 70 C148 48 172 48 172 70",
					fill: "none",
					stroke: clay,
					strokeWidth: "3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "70",
					y: "130",
					width: "180",
					height: "10",
					fill: wash
				})
			]
		});
		case "go": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
			className,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "0",
					y: "120",
					width: "320",
					height: "60",
					fill: wash
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "40",
					y: "86",
					width: "80",
					height: "50",
					fill: indigo,
					opacity: "0.3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "200",
					y: "70",
					width: "70",
					height: "66",
					fill: ink,
					opacity: "0.2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "148",
					y: "100",
					width: "18",
					height: "36",
					fill: indigo
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
					points: "250,40 268,70 232,70",
					fill: clay,
					opacity: "0.5"
				})
			]
		});
		case "return": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
			className,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "320",
					height: "80",
					fill: "#c4b7a4"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "90",
					y: "48",
					width: "140",
					height: "110",
					fill: wash
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "140",
					y: "88",
					width: "40",
					height: "70",
					fill: indigo,
					opacity: "0.55"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "248",
					cy: "36",
					r: "14",
					fill: paper,
					opacity: "0.7"
				})
			]
		});
		case "shop": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
			className,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "50",
					y: "40",
					width: "220",
					height: "110",
					fill: wash
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "50",
					y: "40",
					width: "220",
					height: "24",
					fill: indigo,
					opacity: "0.5"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "70",
					y: "80",
					width: "50",
					height: "50",
					fill: paper
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "136",
					y: "80",
					width: "50",
					height: "50",
					fill: paper
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "202",
					y: "80",
					width: "50",
					height: "50",
					fill: paper
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "110",
					y: "136",
					width: "100",
					height: "10",
					fill: clay,
					opacity: "0.4"
				})
			]
		});
		case "ask": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
			className,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "0",
					y: "120",
					width: "320",
					height: "60",
					fill: wash
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "40",
					y: "50",
					width: "16",
					height: "80",
					fill: clay
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "264",
					y: "50",
					width: "16",
					height: "80",
					fill: clay
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "160",
					cy: "78",
					r: "20",
					fill: indigo,
					opacity: "0.5"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "148",
					y: "98",
					width: "24",
					height: "40",
					fill: indigo,
					opacity: "0.4"
				})
			]
		});
		case "time": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
			className,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "160",
					cy: "90",
					r: "52",
					fill: wash
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "160",
					cy: "90",
					r: "44",
					fill: paper
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "160",
					y1: "90",
					x2: "160",
					y2: "58",
					stroke: indigo,
					strokeWidth: "4"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "160",
					y1: "90",
					x2: "188",
					y2: "90",
					stroke: ink,
					strokeWidth: "3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "160",
					cy: "90",
					r: "4",
					fill: indigo
				})
			]
		});
		case "numbers": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
			className,
			children: [
				0,
				1,
				2
			].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: 90 + i * 70,
				cy: "96",
				r: "28",
				fill: i === 1 ? indigo : wash,
				opacity: i === 1 ? .5 : 1
			}, i))
		});
		case "school": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
			className,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "50",
					y: "50",
					width: "220",
					height: "100",
					fill: wash
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "50",
					y: "50",
					width: "220",
					height: "20",
					fill: indigo,
					opacity: "0.45"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "70",
					y: "84",
					width: "44",
					height: "28",
					fill: paper
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "138",
					y: "84",
					width: "44",
					height: "28",
					fill: paper
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "206",
					y: "84",
					width: "44",
					height: "28",
					fill: paper
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "148",
					y: "120",
					width: "24",
					height: "30",
					fill: indigo,
					opacity: "0.5"
				})
			]
		});
		case "daily": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
			className,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "56",
					cy: "40",
					r: "16",
					fill: indigo,
					opacity: "0.5"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "40",
					y: "90",
					width: "70",
					height: "50",
					fill: wash
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "126",
					y: "78",
					width: "70",
					height: "62",
					fill: indigo,
					opacity: "0.25"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "212",
					y: "70",
					width: "70",
					height: "70",
					fill: ink,
					opacity: "0.2"
				})
			]
		});
		case "week": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
			className,
			children: [
				0,
				1,
				2,
				3,
				4,
				5,
				6
			].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: 28 + i * 40,
				y: i === 4 ? 60 : 80,
				width: "32",
				height: i === 4 ? 70 : 50,
				fill: i === 4 ? indigo : wash,
				opacity: i === 4 ? .55 : 1
			}, i))
		});
		case "food": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
			className,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "160",
					cy: "120",
					rx: "80",
					ry: "24",
					fill: wash
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "160",
					cy: "100",
					rx: "54",
					ry: "22",
					fill: indigo,
					opacity: "0.25"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M130 88 C140 60 180 60 190 88",
					fill: "none",
					stroke: clay,
					strokeWidth: "3"
				})
			]
		});
		case "like": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
			className,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "0",
					y: "120",
					width: "320",
					height: "60",
					fill: "#c8d0c4"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "80",
					cy: "48",
					r: "22",
					fill: indigo,
					opacity: "0.4"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "210",
					cy: "118",
					rx: "26",
					ry: "14",
					fill: ink,
					opacity: "0.4"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "200",
					cy: "108",
					r: "8",
					fill: indigo
				})
			]
		});
		case "weather": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
			className,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "90",
					cy: "60",
					r: "24",
					fill: indigo,
					opacity: "0.45"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "190",
					cy: "58",
					rx: "50",
					ry: "18",
					fill: clay,
					opacity: "0.35"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "230",
					cy: "70",
					rx: "40",
					ry: "14",
					fill: wash
				})
			]
		});
		default: return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
			className,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "70",
				y: "50",
				width: "180",
				height: "80",
				fill: wash
			})
		});
	}
}
var unlocked = false;
function unlockSpeech() {
	unlocked = true;
}
function speechUnlocked() {
	return unlocked;
}
function AudioBar({ ja, auto, size = "default" }) {
	const rate = useProgress((s) => s.voiceRate);
	const [playing, setPlaying] = (0, import_react.useState)(false);
	const play = () => {
		if (!ja.trim()) return;
		unlocked = true;
		setPlaying(true);
		speakJapanese(ja, {
			rate,
			onend: () => setPlaying(false)
		});
		useProgress.getState().markListen(ja);
	};
	(0, import_react.useEffect)(() => {
		if (auto && unlocked && ja.trim()) play();
		return () => stopSpeaking();
	}, [ja, auto]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			type: "button",
			size: size === "lg" ? "lg" : "default",
			className: "flex-1",
			onClick: play,
			"aria-pressed": playing,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "ml-0.5" }), "Listen"]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			type: "button",
			variant: "outline",
			size: size === "lg" ? "lg" : "icon",
			onClick: play,
			"aria-label": "Listen again",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, {}), size === "lg" ? "Again" : null]
		})]
	});
}
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
	type,
	className: cn("flex h-12 w-full rounded-[var(--radius-md)] bg-card px-4 text-base text-foreground shadow-[var(--shadow-border)] transition-[box-shadow] duration-[var(--motion-quick)] placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50", className),
	ref,
	...props
}));
Input.displayName = "Input";
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root$1, {
	ref,
	className: cn("text-sm font-medium text-foreground", className),
	...props
}));
Label.displayName = Root$1.displayName;
function Onboarding() {
	const finish = useProgress((s) => s.finishOnboarding);
	const [step, setStep] = (0, import_react.useState)(0);
	const [name, setName] = (0, import_react.useState)("Injam");
	const [nameJa, setNameJa] = (0, import_react.useState)("インジャム");
	const [revealed, setRevealed] = (0, import_react.useState)(false);
	if (step === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex min-h-dvh max-w-lg flex-col justify-end px-5 pb-10 pt-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "stagger-in flex-1 space-y-6 pt-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Seal, { className: "size-12" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-4xl font-medium leading-[1.15] tracking-tight",
					children: "Japaneducation"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-sm text-base leading-relaxed text-muted-foreground",
					children: "You will not memorize lists. You will hear Japanese, understand the situation, copy it, and use it — the way a child meets a language."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm leading-relaxed text-muted-foreground",
					children: "মুখস্থ নয়। শোনা, বোঝা, বলা, ব্যবহার — স্বাভাবিক মনে রাখা।"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			size: "xl",
			className: "w-full",
			onClick: () => setStep(1),
			children: "Begin with listening"
		})]
	});
	if (step === 1) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex min-h-dvh max-w-lg flex-col px-5 pb-10 pt-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex-1 space-y-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground",
					children: "Your name"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl font-medium leading-tight",
					children: "Who is learning?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm leading-relaxed text-muted-foreground",
					children: "Conversations will use this. You can change it later."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "name",
						children: "Name"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "name",
						value: name,
						onChange: (e) => setName(e.target.value)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "nameJa",
						children: "In Japanese (katakana is fine)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "nameJa",
						value: nameJa,
						onChange: (e) => setNameJa(e.target.value),
						lang: "ja"
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			size: "xl",
			className: "w-full",
			onClick: () => setStep(2),
			children: "Hear the first morning"
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex min-h-dvh max-w-lg flex-col px-5 pb-10 pt-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex-1 space-y-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground",
					children: "First Japanese"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SceneArt, { art: "morning" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm leading-relaxed text-muted-foreground",
					children: "A quiet room. Light comes in. Someone sits up."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					lang: "ja",
					className: "ja text-center text-4xl",
					children: "おはよう。"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AudioBar, {
					ja: "おはよう。",
					size: "lg"
				}),
				!revealed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					className: "w-full",
					onClick: () => setRevealed(true),
					children: "Reveal meaning"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Good morning." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "সুপ্রভাত।"
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			size: "xl",
			className: "mt-6 w-full",
			onClick: () => {
				unlockSpeech();
				finish(name, nameJa);
			},
			disabled: !revealed,
			children: "Enter the day"
		})]
	});
}
var styles_default = "/assets/styles-DpTYOxgC.css";
var APP_NAME = "Japaneducation";
var Route$15 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1, viewport-fit=cover"
			},
			{ title: APP_NAME },
			{
				name: "theme-color",
				content: "#F3EEE6"
			},
			{
				name: "description",
				content: "Learn JLPT N5 Japanese by hearing, understanding, copying, and using it — not by memorizing lists."
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&family=Noto+Sans+JP:wght@400;500;700&family=Noto+Serif+JP:wght@500;600;700&display=swap"
			}
		]
	}),
	component: Root
});
function Root() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		className: "antialiased",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShellGate, {}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	});
}
function ShellGate() {
	const hydrated = useProgress((s) => s.hydrated);
	const onboardingDone = useProgress((s) => s.onboardingDone);
	(0, import_react.useEffect)(() => {
		const unsub = useProgress.persist.onFinishHydration(() => {
			useProgress.getState().markHydrated();
		});
		if (useProgress.persist.hasHydrated()) useProgress.getState().markHydrated();
		const t = window.setTimeout(() => useProgress.getState().markHydrated(), 50);
		return () => {
			unsub();
			window.clearTimeout(t);
		};
	}, []);
	if (!hydrated) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-dvh items-center justify-center bg-background text-muted-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-sm",
			children: "Japaneducation"
		})
	});
	if (!onboardingDone) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Onboarding, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) });
}
var $$splitComponentImporter$14 = () => import("./routes-C33HYMhm.mjs");
var Route$14 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$14, "component") });
var $$splitComponentImporter$13 = () => import("./conversation-CpkkvpV0.mjs");
var Route$13 = createFileRoute("/conversation")({ component: lazyRouteComponent($$splitComponentImporter$13, "component") });
var $$splitComponentImporter$12 = () => import("./daily-CUxDJzNu.mjs");
var Route$12 = createFileRoute("/daily")({ component: lazyRouteComponent($$splitComponentImporter$12, "component") });
var $$splitComponentImporter$11 = () => import("./hiragana-BTuWh7c8.mjs");
var Route$11 = createFileRoute("/hiragana")({ component: lazyRouteComponent($$splitComponentImporter$11, "component") });
var $$splitComponentImporter$10 = () => import("./kanji-BtFbKO-n.mjs");
var Route$10 = createFileRoute("/kanji")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
var $$splitComponentImporter$9 = () => import("./katakana-Vq3bvUuJ.mjs");
var Route$9 = createFileRoute("/katakana")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./learn-CgpTVMAO.mjs");
var Route$8 = createFileRoute("/learn")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./listen-DAXUDnV4.mjs");
var Route$7 = createFileRoute("/listen")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./more-CKzaq4nO.mjs");
var Route$6 = createFileRoute("/more")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./progress-DpKUxXVo.mjs");
var Route$5 = createFileRoute("/progress")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./review-Cq6Ya4OV.mjs");
var Route$4 = createFileRoute("/review")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./settings-CkXB4jg1.mjs");
var Route$3 = createFileRoute("/settings")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./speak-Utftv4du.mjs");
var Route$2 = createFileRoute("/speak")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./dialogue._id-4AWlUjFR.mjs");
var Route$1 = createFileRoute("/dialogue/$id")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./lesson._id-BiRvgNk3.mjs");
var Route = createFileRoute("/lesson/$id")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var rootRouteChildren = {
	IndexRoute: Route$14.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$15
	}),
	ConversationRoute: Route$13.update({
		id: "/conversation",
		path: "/conversation",
		getParentRoute: () => Route$15
	}),
	DailyRoute: Route$12.update({
		id: "/daily",
		path: "/daily",
		getParentRoute: () => Route$15
	}),
	HiraganaRoute: Route$11.update({
		id: "/hiragana",
		path: "/hiragana",
		getParentRoute: () => Route$15
	}),
	KanjiRoute: Route$10.update({
		id: "/kanji",
		path: "/kanji",
		getParentRoute: () => Route$15
	}),
	KatakanaRoute: Route$9.update({
		id: "/katakana",
		path: "/katakana",
		getParentRoute: () => Route$15
	}),
	LearnRoute: Route$8.update({
		id: "/learn",
		path: "/learn",
		getParentRoute: () => Route$15
	}),
	ListenRoute: Route$7.update({
		id: "/listen",
		path: "/listen",
		getParentRoute: () => Route$15
	}),
	MoreRoute: Route$6.update({
		id: "/more",
		path: "/more",
		getParentRoute: () => Route$15
	}),
	ProgressRoute: Route$5.update({
		id: "/progress",
		path: "/progress",
		getParentRoute: () => Route$15
	}),
	ReviewRoute: Route$4.update({
		id: "/review",
		path: "/review",
		getParentRoute: () => Route$15
	}),
	SettingsRoute: Route$3.update({
		id: "/settings",
		path: "/settings",
		getParentRoute: () => Route$15
	}),
	SpeakRoute: Route$2.update({
		id: "/speak",
		path: "/speak",
		getParentRoute: () => Route$15
	}),
	DialogueIdRoute: Route$1.update({
		id: "/dialogue/$id",
		path: "/dialogue/$id",
		getParentRoute: () => Route$15
	}),
	LessonIdRoute: Route.update({
		id: "/lesson/$id",
		path: "/lesson/$id",
		getParentRoute: () => Route$15
	})
};
var routeTree = Route$15._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { speakJapanese as _, Input as a, useProgress as b, unlockSpeech as c, moreLinks as d, Button as f, shuffle as g, roughlyMatches as h, Label as i, SceneArt as l, cn as m, Route as n, AudioBar as o, canRecognize as p, Route$1 as r, speechUnlocked as s, router_exports as t, Page as u, startRecognition as v, todayKey as y };
