import { t as e } from "../shared/runtime.js";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
//#region src/shared/blocks/Hero/Hero.tsx
function r({ image: e, heading: r, description: i, ctas: a }) {
	return /* @__PURE__ */ n("section", {
		className: "hero-section",
		children: [
			e && /* @__PURE__ */ t("div", {
				className: "hero-bg",
				dangerouslySetInnerHTML: { __html: e }
			}),
			/* @__PURE__ */ t("div", { className: "hero-overlay" }),
			/* @__PURE__ */ n("div", {
				className: "hero-content",
				children: [
					r && /* @__PURE__ */ t("div", {
						className: "hero-heading",
						dangerouslySetInnerHTML: { __html: r }
					}),
					i && /* @__PURE__ */ t("div", {
						className: "hero-description",
						dangerouslySetInnerHTML: { __html: i }
					}),
					a && /* @__PURE__ */ t("div", {
						className: "hero-ctas",
						dangerouslySetInnerHTML: { __html: a }
					})
				]
			})
		]
	});
}
var i = e(r, { cells: [
	{
		name: "image",
		type: "html"
	},
	{
		name: "heading",
		type: "html"
	},
	{
		name: "description",
		type: "html"
	},
	{
		name: "ctas",
		type: "html"
	}
] });
//#endregion
export { r as Hero, i as default };
