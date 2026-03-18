import { createRoot as e } from "react-dom/client";
import { createElement as t } from "react";
import { QueryClient as n, QueryClientProvider as r } from "@tanstack/react-query";
//#region ../eds-react-adapter/src/runtime/queryClient.ts
var i = new n({ defaultOptions: { queries: {
	staleTime: 1e3 * 60 * 5,
	retry: 2
} } });
//#endregion
//#region ../eds-react-adapter/src/runtime/renderBlock.ts
function a(n, a, o) {
	n.textContent = "", e(n).render(t(r, { client: i }, t(a, o)));
}
//#endregion
//#region ../eds-react-adapter/src/runtime/dom.ts
var o = (e, t) => e.children[t] ?? null, s = (e, t) => e ? e.children[t] ?? null : null, c = (e, t, n) => s(o(e, t), n), l = (e) => e?.textContent?.trim() ?? "", u = (e) => e?.innerHTML?.trim() ?? "", d = (e) => e?.querySelector("a")?.getAttribute("href") ?? "", f = (e) => e?.querySelector("img")?.getAttribute("src") ?? "", p = (e, t = "text") => {
	switch (t) {
		case "html": return u(e);
		case "element": return e;
		case "href": return d(e);
		case "src": return f(e);
		default: return l(e);
	}
};
//#endregion
//#region ../eds-react-adapter/src/runtime/defineBlock.ts
function m(e, t) {
	let n = {}, r = 0;
	for (let i of t) {
		let t = i.row ?? r, a = i.col ?? 0, o = i.type ?? "text";
		n[i.name] = p(c(e, t, a), o), i.row === void 0 ? r++ : r = t + 1;
	}
	return n;
}
function h(e, t) {
	return async (n) => {
		a(n, e, t.decorate ? await t.decorate(n) : m(n, t.cells));
	};
}
//#endregion
export { h as t };
