import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Lock } from "../_libs/lucide-react.mjs";
import { b as useProgress, m as cn, u as Page } from "./router-CDCqzIHv.mjs";
import { t as Card } from "./card-D_EAS73j.mjs";
import { c as units, r as isUnlocked } from "./content-DTcfiWqU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/learn-CgpTVMAO.js
var import_jsx_runtime = require_jsx_runtime();
function Learn() {
	const completed = useProgress((s) => s.completedLessons);
	const all = units();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, {
		title: "Learn through situations",
		kicker: "Learn",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm leading-relaxed text-muted-foreground",
			children: "Sentences, not word lists. Each lesson is a small real-life room."
		}), all.map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "space-y-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-lg",
					children: u.title.en
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					children: u.title.bn
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-2",
					children: u.lessons.map((l) => {
						const open = isUnlocked(l, completed);
						const done = completed.includes(l.id);
						const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: cn("flex items-center gap-3 p-4", !open && "opacity-60"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex size-10 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-muted font-display text-sm tabular-nums",
									children: open ? l.order : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block font-medium leading-snug",
										children: l.title.en
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block truncate text-xs text-muted-foreground",
										children: l.title.bn
									})]
								}),
								done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-success",
									children: "Lived"
								}) : null
							]
						});
						return open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/lesson/$id",
							params: { id: l.id },
							className: "block",
							children: inner
						}, l.id) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: inner }, l.id);
					})
				})
			]
		}, u.id))]
	});
}
//#endregion
export { Learn as component };
