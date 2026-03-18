import { n as e, t } from "../shared/jsx-runtime.js";
import { useEffect as n, useState as r } from "preact/hooks";
//#region src/shared/blocks/Posts/Posts.tsx
function i({ limit: e }) {
	let [i, a] = r([]), [o, s] = r(!0), [c, l] = r(null);
	return n(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${e}`).then((e) => {
			if (!e.ok) throw Error(`HTTP ${e.status}`);
			return e.json();
		}).then((e) => {
			a(e), s(!1);
		}).catch((e) => {
			l(e.message), s(!1);
		});
	}, [e]), o ? /* @__PURE__ */ (0, t.jsx)("div", {
		className: "posts-loading",
		children: "Chargement..."
	}) : c ? /* @__PURE__ */ (0, t.jsxs)("div", {
		className: "posts-error",
		children: ["Erreur : ", c]
	}) : /* @__PURE__ */ (0, t.jsx)("ul", {
		className: "posts-grid",
		children: i.map((e) => /* @__PURE__ */ (0, t.jsxs)("li", {
			className: "posts-item",
			children: [
				/* @__PURE__ */ (0, t.jsxs)("span", {
					className: "posts-item-id",
					children: ["#", e.id]
				}),
				/* @__PURE__ */ (0, t.jsx)("h3", {
					className: "posts-item-title",
					children: e.title
				}),
				/* @__PURE__ */ (0, t.jsx)("p", {
					className: "posts-item-body",
					children: e.body
				})
			]
		}, e.id))
	});
}
var a = e(i, { decorate: (e) => {
	let t = e.querySelector(":scope > div > div")?.textContent?.trim(), n = t ? parseInt(t, 10) : 10;
	return { limit: isNaN(n) ? 10 : n };
} });
//#endregion
export { a as default };
