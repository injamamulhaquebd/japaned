import { i as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { _ as speakJapanese, b as useProgress, c as unlockSpeech, f as Button, o as AudioBar, u as Page } from "./router-CDCqzIHv.mjs";
import { t as Card } from "./card-D_EAS73j.mjs";
import { t as BiText } from "./bi-text-WG33CKno.mjs";
import { t as kanjiItems } from "./kanji-BU65v4Ln.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/kanji-BtFbKO-n.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Kanji() {
	const completed = useProgress((s) => s.completedKanji);
	const complete = useProgress((s) => s.completeKanji);
	const meet = useProgress((s) => s.meetKanji);
	const rate = useProgress((s) => s.voiceRate);
	const showRomaji = useProgress((s) => s.showRomaji);
	const [open, setOpen] = (0, import_react.useState)(null);
	const item = kanjiItems.find((k) => k.id === open);
	if (item) {
		const sentence = item.sentences[0];
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "px-4 pb-8 pt-3 space-y-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setOpen(null),
					className: "min-h-11 text-sm text-muted-foreground",
					children: "Back"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-center gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							lang: "ja",
							className: "ja text-2xl text-muted-foreground",
							children: item.fromKana
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: "→"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							lang: "ja",
							className: "ja text-6xl",
							children: item.kanji
						})
					]
				}),
				showRomaji ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-sm text-muted-foreground",
					children: item.readings.join(" · ")
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BiText, {
					text: item.meaning,
					revealed: true,
					className: "text-center"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "space-y-3 p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							lang: "ja",
							className: "ja text-2xl",
							children: sentence.ja
						}),
						showRomaji ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: sentence.romaji
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AudioBar, { ja: sentence.ja }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BiText, {
							text: sentence.meaning,
							revealed: true
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap justify-center gap-2",
					children: item.sentences.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						onClick: () => {
							unlockSpeech();
							speakJapanese(s.ja, { rate });
						},
						children: "Hear again"
					}, s.ja))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm leading-relaxed text-muted-foreground",
					children: "You will see this character again in other sentences. That is how it stays — not as a list."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "w-full",
					size: "lg",
					onClick: () => {
						meet(item.kanji);
						complete(item.id);
						setOpen(null);
					},
					children: "I have met this"
				})
			]
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, {
		title: "Useful N5 kanji",
		kicker: "Kanji",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm leading-relaxed text-muted-foreground",
			children: "Not a wall of characters. Each one arrives from a word you already lived, then returns in a sentence."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-4 gap-2",
			children: kanjiItems.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setOpen(k.id),
				className: "flex aspect-square flex-col items-center justify-center rounded-[var(--radius-lg)] bg-card shadow-[var(--shadow-border)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					lang: "ja",
					className: "ja text-2xl",
					children: k.kanji.length > 1 ? k.kanji.slice(0, 1) : k.kanji
				}), completed.includes(k.id) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-1 text-[10px] text-success",
					children: "met"
				}) : null]
			}, k.id))
		})]
	});
}
//#endregion
export { Kanji as component };
