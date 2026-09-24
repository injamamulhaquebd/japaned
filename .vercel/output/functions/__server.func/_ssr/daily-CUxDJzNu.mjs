import { i as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { b as useProgress, f as Button, l as SceneArt, u as Page, y as todayKey } from "./router-CDCqzIHv.mjs";
import { t as Card } from "./card-D_EAS73j.mjs";
import { a as nextLesson, i as lessons } from "./content-DTcfiWqU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/daily-CUxDJzNu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Daily() {
	const completed = useProgress((s) => s.completedLessons);
	const dailyDate = useProgress((s) => s.dailyDate);
	const dailyLessonId = useProgress((s) => s.dailyLessonId);
	const setDaily = useProgress((s) => s.setDailyLesson);
	const today = todayKey();
	(0, import_react.useEffect)(() => {
		if (dailyDate !== today) {
			const next = nextLesson(completed);
			setDaily(next.id, today);
		}
	}, [
		completed,
		dailyDate,
		setDaily,
		today
	]);
	const id = dailyDate === today && dailyLessonId ? dailyLessonId : nextLesson(completed).id;
	const lesson = lessons.find((l) => l.id === id) ?? nextLesson(completed);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, {
		title: "A little Japanese today",
		kicker: "Daily",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-relaxed text-muted-foreground",
				children: "Listen → understand → repeat → use. Not twenty words. One situation, lived well."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: "শুনুন → বুঝুন → বলুন → ব্যবহার করুন।"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SceneArt, { art: lesson.art }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2 p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium uppercase tracking-wider text-muted-foreground",
							children: "Today’s situation"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl",
							children: lesson.title.en
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: lesson.title.bn
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-relaxed",
							children: lesson.teaser.en
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							className: "mt-2 w-full",
							size: "lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/lesson/$id",
								params: { id: lesson.id },
								children: "Begin"
							})
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "outline",
				className: "w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/review",
					children: "Or review what you already lived"
				})
			})
		]
	});
}
//#endregion
export { Daily as component };
