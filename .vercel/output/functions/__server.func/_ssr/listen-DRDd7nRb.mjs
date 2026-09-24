import { i as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { b as useProgress, f as Button, g as shuffle, l as SceneArt, m as cn, o as AudioBar, s as speechUnlocked, u as Page } from "./router-Dd6zbqjJ.mjs";
import { t as Card } from "./card-D_EAS73j.mjs";
import { o as reachableSentences } from "./content-DTcfiWqU.mjs";
import { t as BiText } from "./bi-text-WG33CKno.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/listen-DRDd7nRb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Listen() {
	const completed = useProgress((s) => s.completedLessons);
	const autoPlay = useProgress((s) => s.autoPlay);
	const queue = (0, import_react.useMemo)(() => shuffle(reachableSentences(completed)).slice(0, 8), [completed]);
	const [i, setI] = (0, import_react.useState)(0);
	const [picked, setPicked] = (0, import_react.useState)(null);
	const item = queue[i];
	const options = (0, import_react.useMemo)(() => {
		if (!item) return [];
		const others = shuffle(queue.filter((s) => s.ja !== item.ja)).slice(0, 2);
		return shuffle([item, ...others]);
	}, [item, queue]);
	if (!item) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Page, {
		title: "Listening",
		kicker: "Listen",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted-foreground",
			children: "Live a situation first, then come back to hear it again."
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, {
		title: "Listen first",
		kicker: "Listening",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-relaxed text-muted-foreground",
				children: "Hear Japanese. Guess the situation. Meaning comes after."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SceneArt, { art: item.art }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4 p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							lang: "ja",
							className: "ja text-center text-2xl",
							children: item.ja
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AudioBar, {
							ja: item.ja,
							auto: autoPlay && speechUnlocked()
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm",
							children: "What situation is this?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-2",
							children: options.map((o) => {
								const key = o.ja;
								const show = picked !== null;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									disabled: picked !== null,
									onClick: () => setPicked(key),
									className: cn("w-full rounded-[var(--radius-lg)] bg-background px-4 py-3 text-left text-sm shadow-[var(--shadow-border)]", show && o.ja === item.ja && "bg-success/10", show && picked === key && o.ja !== item.ja && "bg-destructive/10"),
									children: [o.title.en, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-0.5 block text-xs text-muted-foreground",
										children: o.meaning.en
									})]
								}, key);
							})
						}),
						picked !== null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BiText, {
							text: item.meaning,
							revealed: true
						}) : null,
						picked !== null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "w-full",
							onClick: () => {
								setPicked(null);
								setI((i + 1) % queue.length);
							},
							children: "Next sound"
						}) : null
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-center text-xs tabular-nums text-muted-foreground",
				children: [
					i + 1,
					" / ",
					queue.length
				]
			})
		]
	});
}
//#endregion
export { Listen as component };
