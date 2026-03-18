import { t as e } from "../shared/runtime.js";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
//#region src/shared/blocks/Cards/Cards.tsx
function r({ image: e, title: r, description: i }) {
	return /* @__PURE__ */ n("div", {
		className: "cards-item",
		children: [e && /* @__PURE__ */ t("div", {
			className: "cards-item-image",
			dangerouslySetInnerHTML: { __html: e }
		}), /* @__PURE__ */ n("div", {
			className: "cards-item-body",
			children: [/* @__PURE__ */ t("h3", { children: r }), i && /* @__PURE__ */ t("div", {
				className: "cards-item-description",
				dangerouslySetInnerHTML: { __html: i }
			})]
		})]
	});
}
function i({ items: e }) {
	return /* @__PURE__ */ t("ul", {
		className: "cards-grid",
		children: e.map((e, n) => /* @__PURE__ */ t("li", { children: /* @__PURE__ */ t(r, { ...e }) }, n))
	});
}
var a = e(i, { decorate: (e) => ({ items: [...e.querySelectorAll(":scope > div")].map((e) => {
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
