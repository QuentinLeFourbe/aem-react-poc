import { n as e } from "../rolldown-runtime.js";
import { i as t } from "./ap-design-system.js";
import { o as n } from "./mui-material.js";
import { a as r, i, n as a, o, r as s } from "./tanstack-query-core.js";
//#region ../../node_modules/.pnpm/@tanstack+react-query@5.90.21_react@18.3.1/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js
var c = /* @__PURE__ */ e(t(), 1), l = n(), u = c.createContext(void 0), d = (e) => {
	let t = c.useContext(u);
	if (e) return e;
	if (!t) throw Error("No QueryClient set, use QueryClientProvider to set one");
	return t;
}, f = ({ client: e, children: t }) => (c.useEffect(() => (e.mount(), () => {
	e.unmount();
}), [e]), /* @__PURE__ */ (0, l.jsx)(u.Provider, {
	value: e,
	children: t
})), p = c.createContext(!1), m = () => c.useContext(p);
p.Provider;
//#endregion
//#region ../../node_modules/.pnpm/@tanstack+react-query@5.90.21_react@18.3.1/node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.js
function h() {
	let e = !1;
	return {
		clearReset: () => {
			e = !1;
		},
		reset: () => {
			e = !0;
		},
		isReset: () => e
	};
}
var g = c.createContext(h()), _ = () => c.useContext(g), v = (e, t, n) => {
	let r = n?.state.error && typeof e.throwOnError == "function" ? o(e.throwOnError, [n.state.error, n]) : e.throwOnError;
	(e.suspense || e.experimental_prefetchInRender || r) && (t.isReset() || (e.retryOnMount = !1));
}, y = (e) => {
	c.useEffect(() => {
		e.clearReset();
	}, [e]);
}, b = ({ result: e, errorResetBoundary: t, throwOnError: n, query: r, suspense: i }) => e.isError && !t.isReset() && !e.isFetching && r && (i && e.data === void 0 || o(n, [e.error, r])), x = (e) => {
	if (e.suspense) {
		let t = 1e3, n = (e) => e === "static" ? e : Math.max(e ?? t, t), r = e.staleTime;
		e.staleTime = typeof r == "function" ? (...e) => n(r(...e)) : n(r), typeof e.gcTime == "number" && (e.gcTime = Math.max(e.gcTime, t));
	}
}, S = (e, t) => e.isLoading && e.isFetching && !t, C = (e, t) => e?.suspense && t.isPending, w = (e, t, n) => t.fetchOptimistic(e).catch(() => {
	n.clearReset();
});
//#endregion
//#region ../../node_modules/.pnpm/@tanstack+react-query@5.90.21_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useBaseQuery.js
function T(e, t, n) {
	let a = m(), o = _(), l = d(n), u = l.defaultQueryOptions(e);
	l.getDefaultOptions().queries?._experimental_beforeQuery?.(u);
	let f = l.getQueryCache().get(u.queryHash);
	u._optimisticResults = a ? "isRestoring" : "optimistic", x(u), v(u, o, f), y(o);
	let p = !l.getQueryCache().get(u.queryHash), [h] = c.useState(() => new t(l, u)), g = h.getOptimisticResult(u), T = !a && e.subscribed !== !1;
	if (c.useSyncExternalStore(c.useCallback((e) => {
		let t = T ? h.subscribe(s.batchCalls(e)) : r;
		return h.updateResult(), t;
	}, [h, T]), () => h.getCurrentResult(), () => h.getCurrentResult()), c.useEffect(() => {
		h.setOptions(u);
	}, [u, h]), C(u, g)) throw w(u, h, o);
	if (b({
		result: g,
		errorResetBoundary: o,
		throwOnError: u.throwOnError,
		query: f,
		suspense: u.suspense
	})) throw g.error;
	return l.getDefaultOptions().queries?._experimental_afterQuery?.(u, g), u.experimental_prefetchInRender && !i && S(g, a) && (p ? w(u, h, o) : f?.promise)?.catch(r).finally(() => {
		h.updateResult();
	}), u.notifyOnChangeProps ? g : h.trackResult(g);
}
//#endregion
//#region ../../node_modules/.pnpm/@tanstack+react-query@5.90.21_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useQuery.js
function E(e, t) {
	return T(e, a, t);
}
//#endregion
export { f as n, E as t };
