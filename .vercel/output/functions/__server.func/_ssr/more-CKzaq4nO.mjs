import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as moreLinks, u as Page } from "./router-CDCqzIHv.mjs";
import { t as Card } from "./card-D_EAS73j.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/more-CKzaq4nO.js
var import_jsx_runtime = require_jsx_runtime();
function More() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, {
		title: "Practice rooms",
		kicker: "More",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm leading-relaxed text-muted-foreground",
			children: "Listening, speaking, kana, kanji — all from Japanese you have already met."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-2",
			children: moreLinks.map((l) => {
				const Icon = l.icon;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: l.to,
					className: "block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "flex items-center gap-3 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-11 items-center justify-center rounded-[var(--radius-md)] bg-muted text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-medium",
							children: l.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-xs text-muted-foreground",
							children: l.en
						})] })]
					})
				}, l.to);
			})
		})]
	});
}
//#endregion
export { More as component };
