import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { b as useProgress, l as SceneArt, u as Page } from "./router-Dd6zbqjJ.mjs";
import { t as Card } from "./card-D_EAS73j.mjs";
import { t as dialogues } from "./conversations-BZh4Sfom.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/conversation-BtsbXABs.js
var import_jsx_runtime = require_jsx_runtime();
function Conversation() {
	const done = useProgress((s) => s.completedDialogues);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, {
		title: "Short conversations",
		kicker: "Conversation",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm leading-relaxed text-muted-foreground",
			children: "Listen first, then choose your line. They grow a little longer as you go."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-3",
			children: dialogues.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/dialogue/$id",
				params: { id: d.id },
				className: "block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SceneArt, {
						art: d.art,
						className: "h-24 object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-3 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium leading-snug",
							children: d.title.en
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground",
							children: [
								d.place.en,
								" · ",
								d.title.bn
							]
						})] }), done.includes(d.id) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-success",
							children: "Lived"
						}) : null]
					})]
				})
			}, d.id))
		})]
	});
}
//#endregion
export { Conversation as component };
