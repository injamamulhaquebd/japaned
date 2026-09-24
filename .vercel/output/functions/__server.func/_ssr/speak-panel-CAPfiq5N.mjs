import { i as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { m as Check, o as Mic, r as Square } from "../_libs/lucide-react.mjs";
import { b as useProgress, f as Button, h as roughlyMatches, p as canRecognize, v as startRecognition } from "./router-CDCqzIHv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/speak-panel-CAPfiq5N.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SpeakPanel({ ja }) {
	const [supported] = (0, import_react.useState)(() => canRecognize());
	const [listening, setListening] = (0, import_react.useState)(false);
	const [heard, setHeard] = (0, import_react.useState)("");
	const [ok, setOk] = (0, import_react.useState)("idle");
	const handle = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		return () => handle.current?.stop();
	}, []);
	const start = () => {
		setHeard("");
		setOk("idle");
		setListening(true);
		handle.current = startRecognition((text) => {
			setHeard(text);
			setOk(roughlyMatches(text, ja) ? "close" : "said");
			useProgress.getState().markSpeak();
		}, () => setListening(false));
	};
	const stop = () => {
		handle.current?.stop();
		setListening(false);
	};
	const saidIt = () => {
		setOk("said");
		useProgress.getState().markSpeak();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [supported ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "button",
					variant: listening ? "destructive" : "secondary",
					className: "flex-1",
					onClick: listening ? stop : start,
					children: [listening ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Square, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, {}), listening ? "Stop" : "Repeat"]
				}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "button",
					variant: "outline",
					className: "flex-1",
					onClick: saidIt,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {}), "I said it"]
				})]
			}),
			!supported ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs leading-relaxed text-muted-foreground",
				children: "Speech recognition is not available here. Listen, speak aloud, then continue. No one is scoring you."
			}) : null,
			heard ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted-foreground",
				children: ["Heard: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					lang: "ja",
					children: heard
				})]
			}) : null,
			ok === "close" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-success",
				children: "Close enough. Keep the feeling, not the grade."
			}) : null,
			ok === "said" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-success",
				children: "Good. The mouth remembers what the ear already knows."
			}) : null
		]
	});
}
//#endregion
export { SpeakPanel as t };
