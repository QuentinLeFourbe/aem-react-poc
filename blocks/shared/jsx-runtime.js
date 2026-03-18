import { createRoot as e } from "preact/compat/client";
import { createElement as t } from "preact/compat";
import { QueryClient as n, QueryClientProvider as r } from "@tanstack/react-query";
//#region \0rolldown/runtime.js
var i = Object.defineProperty, a = Object.getOwnPropertyDescriptor, o = Object.getOwnPropertyNames, s = Object.prototype.hasOwnProperty, c = (e, t) => {
	let n = {};
	for (var r in e) i(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || i(n, Symbol.toStringTag, { value: "Module" }), n;
}, l = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var c = o(t), l = 0, u = c.length, d; l < u; l++) d = c[l], !s.call(e, d) && d !== n && i(e, d, {
		get: ((e) => t[e]).bind(null, d),
		enumerable: !(r = a(t, d)) || r.enumerable
	});
	return e;
}, u = (e, t, n) => (l(e, t, "default"), n && l(n, t, "default")), d = new n({ defaultOptions: { queries: {
	staleTime: 1e3 * 60 * 5,
	retry: 2
} } });
//#endregion
//#region ../eds-react-adapter/src/runtime/renderBlock.ts
function f(n, i, a) {
	n.textContent = "", e(n).render(t(r, { client: d }, t(i, a)));
}
//#endregion
//#region ../eds-react-adapter/src/runtime/dom.ts
var p = (e, t) => e.children[t] ?? null, m = (e, t) => e ? e.children[t] ?? null : null, h = (e, t, n) => m(p(e, t), n), g = (e) => e?.textContent?.trim() ?? "", _ = (e) => e?.innerHTML?.trim() ?? "", v = (e) => e?.querySelector("a")?.getAttribute("href") ?? "", y = (e) => e?.querySelector("img")?.getAttribute("src") ?? "", b = (e, t = "text") => {
	switch (t) {
		case "html": return _(e);
		case "element": return e;
		case "href": return v(e);
		case "src": return y(e);
		default: return g(e);
	}
};
//#endregion
//#region ../eds-react-adapter/src/runtime/defineBlock.ts
function x(e, t) {
	let n = {}, r = 0;
	for (let i of t) {
		let t = i.row ?? r, a = i.col ?? 0, o = i.type ?? "text";
		n[i.name] = b(h(e, t, a), o), i.row === void 0 ? r++ : r = t + 1;
	}
	return n;
}
function S(e, t) {
	return async (n) => {
		f(n, e, t.decorate ? await t.decorate(n) : x(n, t.cells));
	};
}
//#endregion
//#region ../../node_modules/.pnpm/preact@10.29.0/node_modules/preact/compat/jsx-runtime.mjs
var C = /* @__PURE__ */ c({});
import * as w from "preact/jsx-runtime";
u(C, w);
//#endregion
export { S as n, C as t };
