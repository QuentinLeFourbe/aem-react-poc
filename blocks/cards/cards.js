import "../shared/vendor/ap-design-system.js";
import "../shared/vendor/react-dom.js";
import { o as e } from "../shared/vendor/mui-material.js";
import { t } from "../shared/runtime.js";
//#region src/shared/blocks/Cards/Cards.tsx
var n = e();
function r({ image: e, title: t, description: r }) {
	return /* @__PURE__ */ (0, n.jsxs)("div", {
		className: "cards-item",
		children: [e && /* @__PURE__ */ (0, n.jsx)("div", {
			className: "cards-item-image",
			dangerouslySetInnerHTML: { __html: e }
		}), /* @__PURE__ */ (0, n.jsxs)("div", {
			className: "cards-item-body",
			children: [/* @__PURE__ */ (0, n.jsx)("h3", { children: t }), r && /* @__PURE__ */ (0, n.jsx)("div", {
				className: "cards-item-description",
				dangerouslySetInnerHTML: { __html: r }
			})]
		})]
	});
}
function i({ items: e }) {
	return /* @__PURE__ */ (0, n.jsx)("ul", {
		className: "cards-grid",
		children: e.map((e, t) => /* @__PURE__ */ (0, n.jsx)("li", { children: /* @__PURE__ */ (0, n.jsx)(r, { ...e }) }, t))
	});
}
var a = t(i, { decorate: (e) => ({ items: [...e.querySelectorAll(":scope > div")].map((e) => {
	let t = e.querySelector(":scope > div"), n = t?.cloneNode(!0), r = t?.querySelector("picture")?.outerHTML ?? "";
	n?.querySelector("picture")?.remove();
	let i = n?.querySelector("h1,h2,h3,h4,h5,h6")?.textContent?.trim() ?? "";
	return n?.querySelector("h1,h2,h3,h4,h5,h6")?.remove(), {
		image: r,
		title: i,
		description: n?.innerHTML?.trim() ?? ""
	};
}) }) });
//#endregion
export { i as Cards, a as default };
