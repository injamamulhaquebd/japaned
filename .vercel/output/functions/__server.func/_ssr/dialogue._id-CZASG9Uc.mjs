import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { b as useProgress, f as Button, r as Route$1 } from "./router-Dd6zbqjJ.mjs";
import { t as getDialogue } from "./content-DTcfiWqU.mjs";
import { t as DialoguePlayer } from "./player-DH-5K1ex.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dialogue._id-CZASG9Uc.js
var import_jsx_runtime = require_jsx_runtime();
function DialoguePage() {
	const { id } = Route$1.useParams();
	const d = getDialogue(id);
	const navigate = useNavigate();
	const complete = useProgress((s) => s.completeDialogue);
	if (!d) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-dvh flex-col items-center justify-center gap-3 px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "That talk is not here." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			onClick: () => navigate({ to: "/conversation" }),
			children: "Back"
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialoguePlayer, {
		title: d.title,
		lines: d.lines,
		onComplete: () => complete(d.id),
		onExit: () => navigate({ to: "/conversation" })
	});
}
//#endregion
export { DialoguePage as component };
