import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { b as useProgress, m as cn } from "./router-Dd6zbqjJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/bi-text-WG33CKno.js
var import_jsx_runtime = require_jsx_runtime();
function BiText({ text, revealed, className, enClass, bnClass }) {
	const mode = useProgress((s) => s.bengaliMode);
	if (!revealed && mode === "after") return null;
	const showBn = mode !== "off" && (mode === "always" || revealed);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("space-y-1", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: cn("text-[15px] leading-relaxed text-foreground", enClass),
			children: text.en
		}), showBn ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: cn("text-sm leading-relaxed text-muted-foreground", bnClass),
			children: text.bn
		}) : null]
	});
}
function Ja({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		lang: "ja",
		className: cn("ja text-3xl font-medium leading-snug tracking-wide text-foreground", className),
		children
	});
}
//#endregion
export { Ja as n, BiText as t };
