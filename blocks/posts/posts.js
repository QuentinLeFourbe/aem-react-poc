import { n as e } from "../shared/rolldown-runtime.js";
import { i as t } from "../shared/vendor/ap-design-system.js";
import "../shared/vendor/react-dom.js";
import { o as n } from "../shared/vendor/mui-material.js";
import { t as r } from "../shared/runtime.js";
//#region src/shared/blocks/Posts/Posts.css
var i = /* @__PURE__ */ e(t(), 1), a = n();
function o({ limit: e }) {
	let [t, n] = (0, i.useState)([]), [r, o] = (0, i.useState)(!0), [s, c] = (0, i.useState)(null);
	return (0, i.useEffect)(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${e}`).then((e) => {
			if (!e.ok) throw Error(`HTTP ${e.status}`);
			return e.json();
		}).then((e) => {
			n(e), o(!1);
		}).catch((e) => {
			c(e.message), o(!1);
		});
	}, [e]), r ? /* @__PURE__ */ (0, a.jsx)("div", {
		className: "posts-loading",
		children: "Chargement..."
	}) : s ? /* @__PURE__ */ (0, a.jsxs)("div", {
		className: "posts-error",
		children: ["Erreur : ", s]
	}) : /* @__PURE__ */ (0, a.jsx)("ul", {
		className: "posts-grid",
		children: t.map((e) => /* @__PURE__ */ (0, a.jsxs)("li", {
			className: "posts-item",
			children: [
				/* @__PURE__ */ (0, a.jsxs)("span", {
					className: "posts-item-id",
					children: ["#", e.id]
				}),
				/* @__PURE__ */ (0, a.jsx)("h3", {
					className: "posts-item-title",
					children: e.title
				}),
				/* @__PURE__ */ (0, a.jsx)("p", {
					className: "posts-item-body",
					children: e.body
				})
			]
		}, e.id))
	});
}
var s = r(o, { decorate: (e) => {
	let t = e.querySelector(":scope > div > div")?.textContent?.trim(), n = t ? parseInt(t, 10) : 10;
	return { limit: isNaN(n) ? 10 : n };
} });
//#endregion
export { o as Posts, s as default };
