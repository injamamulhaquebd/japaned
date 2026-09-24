import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { b as useProgress, f as Button, n as Route } from "./router-Dd6zbqjJ.mjs";
import { n as getLesson } from "./content-DTcfiWqU.mjs";
import { n as LessonPlayer } from "./player-DH-5K1ex.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/lesson._id-Cy4X70gs.js
var import_jsx_runtime = require_jsx_runtime();
function LessonPage() {
	const { id } = Route.useParams();
	const lesson = getLesson(id);
	const navigate = useNavigate();
	const complete = useProgress((s) => s.completeLesson);
	if (!lesson) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-dvh flex-col items-center justify-center gap-3 px-6 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "That situation is not here." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			onClick: () => navigate({ to: "/learn" }),
			children: "Back to learn"
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LessonPlayer, {
		title: lesson.title,
		art: lesson.art,
		steps: lesson.steps,
		onComplete: () => complete(lesson.id),
		onExit: () => navigate({ to: "/learn" })
	});
}
//#endregion
export { LessonPage as component };
