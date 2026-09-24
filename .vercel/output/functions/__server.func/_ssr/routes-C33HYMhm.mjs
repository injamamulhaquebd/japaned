import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as ArrowRight } from "../_libs/lucide-react.mjs";
import { b as useProgress, f as Button, l as SceneArt, o as AudioBar, u as Page } from "./router-CDCqzIHv.mjs";
import { t as Card } from "./card-D_EAS73j.mjs";
import { a as nextLesson, i as lessons } from "./content-DTcfiWqU.mjs";
import { t as Progress } from "./progress-Cz3c2XO8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C33HYMhm.js
var import_jsx_runtime = require_jsx_runtime();
function greeting() {
	const h = (/* @__PURE__ */ new Date()).getHours();
	if (h < 11) return {
		ja: "おはよう。",
		romaji: "ohayou",
		en: "The morning greeting",
		bn: "সকালের অভিবাদন"
	};
	if (h < 18) return {
		ja: "こんにちは。",
		romaji: "konnichiwa",
		en: "The daytime greeting",
		bn: "দিনের অভিবাদন"
	};
	return {
		ja: "こんばんは。",
		romaji: "konbanwa",
		en: "The evening greeting",
		bn: "সন্ধ্যার অভিবাদন"
	};
}
function Home() {
	const name = useProgress((s) => s.learnerName);
	const completed = useProgress((s) => s.completedLessons);
	const streak = useProgress((s) => s.streak);
	const listenCount = useProgress((s) => s.listenCount);
	const next = nextLesson(completed);
	const g = greeting();
	const pct = Math.round(completed.length / lessons.length * 100);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, {
		title: `Hello, ${name}`,
		kicker: "Home",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SceneArt, { art: g.ja.startsWith("おは") ? "morning" : g.ja.startsWith("こんば") ? "night" : "day" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3 p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium uppercase tracking-wider text-muted-foreground",
							children: "Right now"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							lang: "ja",
							className: "ja text-3xl",
							children: g.ja
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted-foreground",
							children: [
								g.en,
								" · ",
								g.bn
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AudioBar, { ja: g.ja })
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-3 gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Streak",
						value: `${streak}d`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Lived",
						value: `${completed.length}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Heard",
						value: `${listenCount}`
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-wider text-muted-foreground",
						children: "N5 path"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
						value: pct,
						className: "mt-3"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: [
							completed.length,
							" of ",
							lessons.length,
							" situations"
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-wider text-muted-foreground",
						children: "Continue"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-display text-xl",
						children: next.title.en
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm leading-relaxed text-muted-foreground",
						children: next.teaser.en
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: next.teaser.bn
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						className: "mt-4 w-full",
						size: "lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/lesson/$id",
							params: { id: next.id },
							children: ["Open this situation", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "outline",
				className: "w-full",
				size: "lg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/daily",
					children: "Today’s short lesson"
				})
			})
		]
	});
}
function Stat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-[var(--radius-lg)] bg-card px-3 py-3 shadow-[var(--shadow-border)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[11px] text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 font-display text-xl tabular-nums",
			children: value
		})]
	});
}
//#endregion
export { Home as component };
