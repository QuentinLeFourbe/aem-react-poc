import { n as e } from "./rolldown-runtime.js";
import { i as t } from "./vendor/ap-design-system.js";
import { t as n } from "./vendor/react-dom.js";
import { t as r } from "./vendor/tanstack-query-core.js";
import { n as i } from "./vendor/tanstack-react-query.js";
//#region ../eds-react-adapter/src/runtime/queryClient.ts
var a = new r({ defaultOptions: { queries: {
	staleTime: 1e3 * 60 * 5,
	retry: 2
} } }), o = n(), s = /* @__PURE__ */ e(t(), 1);
function c(e, t, n) {
	e.textContent = "", (0, o.createRoot)(e).render((0, s.createElement)(i, { client: a }, (0, s.createElement)(t, n)));
}
//#endregion
//#region ../eds-react-adapter/src/runtime/dom.ts
var l = (e, t) => e.children[t] ?? null, u = (e, t) => e ? e.children[t] ?? null : null, d = (e, t, n) => u(l(e, t), n), f = (e) => e?.textContent?.trim() ?? "", p = (e) => e?.innerHTML?.trim() ?? "", m = (e) => e?.querySelector("a")?.getAttribute("href") ?? "", h = (e) => e?.querySelector("img")?.getAttribute("src") ?? "", g = (e, t = "text") => {
	switch (t) {
		case "html": return p(e);
		case "element": return e;
		case "href": return m(e);
		case "src": return h(e);
		default: return f(e);
	}
};
//#endregion
//#region ../eds-react-adapter/src/runtime/defineBlock.ts
function _(e, t) {
	let n = {}, r = 0;
	for (let i of t) {
		let t = i.row ?? r, a = i.col ?? 0, o = i.type ?? "text";
		n[i.name] = g(d(e, t, a), o), i.row === void 0 ? r++ : r = t + 1;
	}
	return n;
}
function v(e, t) {
	return async (n) => {
		c(n, e, t.decorate ? await t.decorate(n) : _(n, t.cells));
	};
}
//#endregion
export { v as t };
