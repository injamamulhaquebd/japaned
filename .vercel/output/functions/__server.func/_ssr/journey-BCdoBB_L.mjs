import { i as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { _ as speakJapanese, b as useProgress, c as unlockSpeech, f as Button, g as shuffle, m as cn, o as AudioBar, s as speechUnlocked } from "./router-Dd6zbqjJ.mjs";
import { t as Card } from "./card-D_EAS73j.mjs";
import { t as SpeakPanel } from "./speak-panel-CAPfiq5N.mjs";
import { t as BiText } from "./bi-text-WG33CKno.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/journey-BCdoBB_L.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function KanaJourney({ groups, title, kicker }) {
	const completed = useProgress((s) => s.completedKanaGroups);
	const complete = useProgress((s) => s.completeKanaGroup);
	const meet = useProgress((s) => s.meetKana);
	const showRomaji = useProgress((s) => s.showRomaji);
	const rate = useProgress((s) => s.voiceRate);
	const [open, setOpen] = (0, import_react.useState)(null);
	const group = groups.find((g) => g.id === open);
	if (group) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GroupPractice, {
		group,
		showRomaji,
		rate,
		onDone: () => {
			meet(group.chars.map((c) => c.char));
			complete(group.id);
			setOpen(null);
		},
		onBack: () => setOpen(null)
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "px-4 pb-4 pt-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground",
				children: kicker
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-1 font-display text-[1.65rem] font-medium leading-tight",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm leading-relaxed text-muted-foreground",
				children: "No giant chart to memorize. Characters arrive through words you already heard."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 space-y-2",
				children: groups.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setOpen(g.id),
					className: "w-full text-left",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "flex items-center gap-3 p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								lang: "ja",
								className: "ja w-16 text-2xl",
								children: g.word.ja
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-medium",
									children: g.title.en
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-xs text-muted-foreground",
									children: g.word.meaning.en
								})]
							}),
							completed.includes(g.id) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-success",
								children: "Met"
							}) : null
						]
					})
				}, g.id))
			})
		]
	});
}
function GroupPractice({ group, showRomaji, rate, onDone, onBack }) {
	const autoPlay = useProgress((s) => s.autoPlay);
	const [phase, setPhase] = (0, import_react.useState)(0);
	const quiz = (0, import_react.useMemo)(() => {
		const target = shuffle(group.chars)[0];
		return {
			target,
			opts: shuffle([target, ...shuffle(group.chars.filter((c) => c.char !== target.char)).slice(0, 3)])
		};
	}, [group, phase]);
	const [picked, setPicked] = (0, import_react.useState)(null);
	if (phase === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "px-4 pb-8 pt-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onBack,
				className: "mb-4 min-h-11 text-sm text-muted-foreground",
				children: "Back"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				lang: "ja",
				className: "ja text-center text-4xl",
				children: group.word.ja
			}),
			showRomaji ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-center text-sm text-muted-foreground",
				children: group.word.romaji
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BiText, {
				text: group.word.meaning,
				revealed: true,
				className: "mt-2 text-center"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AudioBar, {
					ja: group.word.ja,
					auto: autoPlay && speechUnlocked()
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "mt-6 w-full",
				size: "lg",
				onClick: () => setPhase(1),
				children: "See the pieces"
			})
		]
	});
	if (phase === 1) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "px-4 pb-8 pt-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs font-medium uppercase tracking-wider text-muted-foreground",
				children: ["Pieces of ", group.word.ja]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid grid-cols-3 gap-2",
				children: group.chars.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => {
						unlockSpeech();
						speakJapanese(c.char, { rate });
					},
					className: "flex flex-col items-center rounded-[var(--radius-lg)] bg-card py-4 shadow-[var(--shadow-border)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						lang: "ja",
						className: "ja text-3xl",
						children: c.char
					}), showRomaji ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 text-xs text-muted-foreground",
						children: c.romaji
					}) : null]
				}, c.char))
			}),
			group.chars.some((c) => c.note) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 space-y-2",
				children: group.chars.filter((c) => c.note).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted-foreground",
					children: [
						c.char,
						": ",
						c.note.en
					]
				}, c.char))
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "mt-6 w-full",
				onClick: () => setPhase(2),
				children: "Hear a sound, pick the character"
			})
		]
	});
	if (phase === 2) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "px-4 pb-8 pt-3 space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm",
				children: "Listen, then choose the character you heard."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AudioBar, {
				ja: quiz.target.char,
				auto: autoPlay && speechUnlocked(),
				size: "lg"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-2",
				children: quiz.opts.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					disabled: picked !== null,
					onClick: () => setPicked(o.char),
					className: cn("flex h-20 items-center justify-center rounded-[var(--radius-lg)] bg-card font-display text-3xl shadow-[var(--shadow-border)]", picked && o.char === quiz.target.char && "bg-success/10", picked === o.char && o.char !== quiz.target.char && "bg-destructive/10"),
					children: o.char
				}, o.char))
			}),
			picked !== null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "w-full",
				onClick: () => {
					setPicked(null);
					setPhase(3);
				},
				children: "Repeat the word"
			}) : null
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "px-4 pb-8 pt-3 space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				lang: "ja",
				className: "ja text-center text-4xl",
				children: group.word.ja
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AudioBar, { ja: group.word.ja }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpeakPanel, { ja: group.word.ja }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "w-full",
				size: "lg",
				onClick: onDone,
				children: "Mark as met"
			})
		]
	});
}
//#endregion
export { KanaJourney as t };
