import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { b as useProgress, u as Page, y as todayKey } from "./router-CDCqzIHv.mjs";
import { t as Card } from "./card-D_EAS73j.mjs";
import { i as lessons } from "./content-DTcfiWqU.mjs";
import { t as Progress } from "./progress-Cz3c2XO8.mjs";
import { n as katakanaGroups, t as hiraganaGroups } from "./kana-ClSXJNvR.mjs";
import { t as kanjiItems } from "./kanji-BU65v4Ln.mjs";
import { a as ResponsiveContainer, i as Bar, n as YAxis, r as XAxis, t as BarChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/progress-DpKUxXVo.js
var import_jsx_runtime = require_jsx_runtime();
function lastDays(n, activity) {
	const out = [];
	for (let i = n - 1; i >= 0; i--) {
		const d = /* @__PURE__ */ new Date();
		d.setDate(d.getDate() - i);
		const key = todayKey(d);
		out.push({
			day: `${d.getMonth() + 1}/${d.getDate()}`,
			moments: activity[key] ?? 0
		});
	}
	return out;
}
function ProgressPage() {
	const s = useProgress();
	const data = lastDays(14, s.activity);
	const lessonPct = Math.round(s.completedLessons.length / lessons.length * 100);
	const hPct = Math.round(s.completedKanaGroups.filter((id) => hiraganaGroups.some((g) => g.id === id)).length / hiraganaGroups.length * 100);
	const kPct = Math.round(s.completedKanaGroups.filter((id) => katakanaGroups.some((g) => g.id === id)).length / katakanaGroups.length * 100);
	const kjPct = Math.round(s.completedKanji.length / kanjiItems.length * 100);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, {
		title: "Days with Japanese",
		kicker: "Progress",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-relaxed text-muted-foreground",
				children: "Not a score. Time spent inside the language."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
						label: "Streak",
						value: `${s.streak} days`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
						label: "Situations",
						value: `${s.completedLessons.length}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
						label: "Heard",
						value: `${s.listenCount}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
						label: "Spoken",
						value: `${s.speakCount}`
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium",
					children: "Last 14 days"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 h-40",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
						width: "100%",
						height: "100%",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
							data,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
									dataKey: "day",
									tick: {
										fontSize: 10,
										fill: "#6b635a"
									},
									interval: 2
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, { hide: true }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
									dataKey: "moments",
									fill: "#3d5a7a",
									radius: [
										4,
										4,
										0,
										0
									]
								})
							]
						})
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BarLine, {
				label: "Situations lived",
				value: lessonPct
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BarLine, {
				label: "Hiragana groups",
				value: hPct
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BarLine, {
				label: "Katakana groups",
				value: kPct
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BarLine, {
				label: "Kanji met",
				value: kjPct
			})
		]
	});
}
function Mini({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-[var(--radius-lg)] bg-card px-4 py-3 shadow-[var(--shadow-border)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 font-display text-xl tabular-nums",
			children: value
		})]
	});
}
function BarLine({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-1 flex justify-between text-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "tabular-nums text-muted-foreground",
			children: [value, "%"]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, { value })] });
}
//#endregion
export { ProgressPage as component };
