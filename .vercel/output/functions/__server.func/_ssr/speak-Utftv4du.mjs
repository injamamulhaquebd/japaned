import { i as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { b as useProgress, f as Button, g as shuffle, o as AudioBar, s as speechUnlocked, u as Page } from "./router-CDCqzIHv.mjs";
import { t as Card } from "./card-D_EAS73j.mjs";
import { o as reachableSentences } from "./content-DTcfiWqU.mjs";
import { t as SpeakPanel } from "./speak-panel-CAPfiq5N.mjs";
import { t as BiText } from "./bi-text-WG33CKno.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/speak-Utftv4du.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Speak() {
	const completed = useProgress((s) => s.completedLessons);
	const autoPlay = useProgress((s) => s.autoPlay);
	const showRomaji = useProgress((s) => s.showRomaji);
	const queue = (0, import_react.useMemo)(() => shuffle(reachableSentences(completed)).slice(0, 10), [completed]);
	const [i, setI] = (0, import_react.useState)(0);
	const item = queue[i];
	if (!item) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Page, {
		title: "Speaking",
		kicker: "Speak",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted-foreground",
			children: "Hear a lesson first, then come copy the sounds."
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, {
		title: "Speak like a child",
		kicker: "Speaking",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-relaxed text-muted-foreground",
				children: "Small mistakes are allowed. Confidence first. Optional microphone — the lesson still works without it."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "space-y-4 p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						lang: "ja",
						className: "ja text-center text-3xl",
						children: item.ja
					}),
					showRomaji ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-center text-sm text-muted-foreground",
						children: item.romaji
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AudioBar, {
						ja: item.ja,
						auto: autoPlay && speechUnlocked(),
						size: "lg"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpeakPanel, { ja: item.ja }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BiText, {
						text: item.meaning,
						revealed: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "w-full",
						onClick: () => setI((i + 1) % queue.length),
						children: "Next sentence"
					})
				]
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
export { Speak as component };
