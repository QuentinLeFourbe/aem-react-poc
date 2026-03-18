import { t as e } from "../shared/runtime.js";
import { useEffect as t, useState as n } from "react";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
//#region src/shared/blocks/Posts/Posts.tsx
function a({ limit: e }) {
	let [a, o] = n([]), [s, c] = n(!0), [l, u] = n(null);
	return t(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${e}`).then((e) => {
			if (!e.ok) throw Error(`HTTP ${e.status}`);
			return e.json();
		}).then((e) => {
			o(e), c(!1);
		}).catch((e) => {
			u(e.message), c(!1);
		});
	}, [e]), s ? /* @__PURE__ */ r("div", {
		className: "posts-loading",
		children: "Chargement..."
	}) : l ? /* @__PURE__ */ i("div", {
		className: "posts-error",
		children: ["Erreur : ", l]
	}) : /* @__PURE__ */ r("ul", {
		className: "posts-grid",
		children: a.map((e) => /* @__PURE__ */ i("li", {
			className: "posts-item",
			children: [
				/* @__PURE__ */ i("span", {
					className: "posts-item-id",
					children: ["#", e.id]
				}),
				/* @__PURE__ */ r("h3", {
					className: "posts-item-title",
					children: e.title
				}),
				/* @__PURE__ */ r("p", {
					className: "posts-item-body",
					children: e.body
				})
			]
		}, e.id))
	});
}
var o = e(a, { decorate: (e) => {
	let t = e.querySelector(":scope > div > div")?.textContent?.trim(), n = t ? parseInt(t, 10) : 10;
	return { limit: isNaN(n) ? 10 : n };
} });
//#endregion
export { a as Posts, o as default };
