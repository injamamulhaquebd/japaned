import { i as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { _ as speakJapanese, a as Input, b as useProgress, f as Button, i as Label, m as cn, u as Page } from "./router-Dd6zbqjJ.mjs";
import { i as SliderTrack, n as SliderRange, r as SliderThumb, t as Slider$1 } from "../_libs/@radix-ui/react-slider+[...].mjs";
import { n as SwitchThumb, t as Switch$1 } from "../_libs/radix-ui__react-switch.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/settings-DtrUjW_1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Slider = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slider$1, {
	ref,
	className: cn("relative flex w-full touch-none items-center select-none", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderTrack, {
		className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-muted",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderRange, { className: "absolute h-full bg-primary" })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderThumb, { className: "block size-5 rounded-full bg-card shadow-[var(--shadow-border)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" })]
}));
Slider.displayName = Slider$1.displayName;
var Switch = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch$1, {
	className: cn("peer inline-flex h-7 w-12 shrink-0 cursor-pointer items-center rounded-full bg-muted transition-colors duration-[var(--motion-quick)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary", className),
	...props,
	ref,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchThumb, { className: "pointer-events-none block size-6 translate-x-0.5 rounded-full bg-card shadow-[var(--shadow-border)] transition-transform duration-[var(--motion-fast)] ease-[var(--ease-smooth-out)] data-[state=checked]:translate-x-[1.35rem]" })
}));
Switch.displayName = Switch$1.displayName;
function Settings() {
	const s = useProgress();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, {
		title: "Settings",
		kicker: "Settings",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "nm",
						children: "Your name"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "nm",
						value: s.learnerName,
						onChange: (e) => s.setName(e.target.value, s.nameJa)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "nmj",
						children: "Name in Japanese"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "nmj",
						lang: "ja",
						value: s.nameJa,
						onChange: (e) => s.setName(s.learnerName, e.target.value)
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
				label: "Show romaji",
				hint: "Latin sounds under Japanese. Turn off as your ear grows.",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
					checked: s.showRomaji,
					onCheckedChange: s.setShowRomaji
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
				label: "Auto-play audio",
				hint: "After the first Listen tap, later sentences can play on their own.",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
					checked: s.autoPlay,
					onCheckedChange: s.setAutoPlay
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium",
						children: "Bengali help"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs leading-relaxed text-muted-foreground",
						children: "Allowed at the beginning. The goal is Japanese → meaning, not Japanese → Bengali → meaning."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-3 gap-2",
						children: [
							["after", "After reveal"],
							["always", "Always"],
							["off", "Hide"]
						].map(([v, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: s.bengaliMode === v ? "default" : "outline",
							size: "sm",
							onClick: () => s.setBengaliMode(v),
							children: label
						}, v))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Voice speed" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tabular-nums text-muted-foreground",
							children: s.voiceRate.toFixed(2)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
						min: .6,
						max: 1.1,
						step: .02,
						value: [s.voiceRate],
						onValueChange: (v) => s.setVoiceRate(v[0] ?? .88)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						className: "w-full",
						onClick: () => speakJapanese("おはよう。こんにちは。", { rate: s.voiceRate }),
						children: "Preview voice"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs leading-relaxed text-muted-foreground",
				children: "Progress is saved on this device. No account, no paid APIs — your browser speaks Japanese."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "destructive",
				className: "w-full",
				onClick: () => {
					if (window.confirm("Clear all progress on this device?")) s.resetAll();
				},
				children: "Reset progress"
			})
		]
	});
}
function Row({ label, hint, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-start justify-between gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm font-medium",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs leading-relaxed text-muted-foreground",
			children: hint
		})] }), children]
	});
}
//#endregion
export { Settings as component };
