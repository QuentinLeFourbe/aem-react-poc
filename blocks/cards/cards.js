import { n as e, t } from "../shared/jsx-runtime.js";
//#region src/shared/blocks/Cards/Cards.tsx
function n({ image: e, title: n, description: r }) {
	return /* @__PURE__ */ (0, t.jsxs)("div", {
		className: "cards-item",
		children: [e && /* @__PURE__ */ (0, t.jsx)("div", {
			className: "cards-item-image",
			dangerouslySetInnerHTML: { __html: e }
		}), /* @__PURE__ */ (0, t.jsxs)("div", {
			className: "cards-item-body",
			children: [/* @__PURE__ */ (0, t.jsx)("h3", { children: n }), r && /* @__PURE__ */ (0, t.jsx)("div", {
				className: "cards-item-description",
				dangerouslySetInnerHTML: { __html: r }
			})]
		})]
	});
}
function r({ items: e }) {
	return /* @__PURE__ */ (0, t.jsx)("ul", {
		className: "cards-grid",
		children: e.map((e, r) => /* @__PURE__ */ (0, t.jsx)("li", { children: /* @__PURE__ */ (0, t.jsx)(n, { ...e }) }, r))
	});
}
var i = e(r, { decorate: (e) => ({ items: [...e.querySelectorAll(":scope > div")].map((e) => {
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
export { i as default };
