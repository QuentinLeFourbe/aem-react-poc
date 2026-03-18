import { t as e } from "../shared/runtime.js";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
//#region src/shared/blocks/Card/Card.tsx
function r({ image: e, title: r, description: i }) {
	return console.log({
		image: e,
		title: r,
		description: i
	}), /* @__PURE__ */ n("div", {
		className: "card",
		children: [
			e && /* @__PURE__ */ t("div", {
				className: "card-image",
				dangerouslySetInnerHTML: { __html: e.outerHTML }
			}),
			/* @__PURE__ */ t("h3", { children: r }),
			/* @__PURE__ */ t("div", {
				className: "card-description",
				dangerouslySetInnerHTML: { __html: i }
			})
		]
	});
}
var i = e(r, { decorate: (e) => {
	let t = e.querySelector(":scope > div > div"), n = t?.querySelector("picture") ?? null, r = t?.querySelector("h1,h2,h3,h4,h5,h6")?.textContent?.trim() ?? "", i = t?.cloneNode(!0);
	return i?.querySelector("picture")?.remove(), i?.querySelector("h1,h2,h3,h4,h5,h6")?.remove(), {
		image: n,
		title: r,
		description: i?.innerHTML?.trim() ?? ""
	};
} });
//#endregion
export { i as default };
