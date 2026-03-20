import "../shared/vendor/ap-design-system.js";
import "../shared/vendor/react-dom.js";
import { o as e } from "../shared/vendor/mui-material.js";
import { t } from "../shared/runtime.js";
import { n, t as r } from "../shared/picture.js";
//#region src/shared/blocks/Cards/Cards.tsx
var i = e();
function a({ image: e, title: t, description: n }) {
	return /* @__PURE__ */ (0, i.jsxs)("div", {
		className: "cards-item",
		children: [e && /* @__PURE__ */ (0, i.jsx)("div", {
			className: "cards-item-image",
			children: /* @__PURE__ */ (0, i.jsx)(r, { data: e })
		}), /* @__PURE__ */ (0, i.jsxs)("div", {
			className: "cards-item-body",
			children: [/* @__PURE__ */ (0, i.jsx)("h3", { children: t }), n && /* @__PURE__ */ (0, i.jsx)("p", {
				className: "cards-item-description",
				children: n
			})]
		})]
	});
}
function o({ items: e }) {
	return /* @__PURE__ */ (0, i.jsx)("ul", {
		className: "cards-grid",
		children: e.map((e, t) => /* @__PURE__ */ (0, i.jsx)("li", { children: /* @__PURE__ */ (0, i.jsx)(a, { ...e }) }, t))
	});
}
var s = t(o, { decorate: (e) => ({ items: [...e.querySelectorAll(":scope > div")].map((e) => {
	let t = e.querySelector(":scope > div"), r = t?.cloneNode(!0), i = n(t);
	r?.querySelector("picture")?.remove();
	let a = r?.querySelector("h1,h2,h3,h4,h5,h6")?.textContent?.trim() ?? "";
	return r?.querySelector("h1,h2,h3,h4,h5,h6")?.remove(), {
		image: i,
		title: a,
		description: r?.textContent?.trim() ?? ""
	};
}) }) });
//#endregion
export { o as Cards, s as default };
