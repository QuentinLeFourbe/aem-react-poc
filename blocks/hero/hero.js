import "../shared/vendor/ap-design-system.js";
import "../shared/vendor/react-dom.js";
import { o as e } from "../shared/vendor/mui-material.js";
import { t } from "../shared/runtime.js";
//#region src/shared/blocks/Hero/Hero.tsx
var n = e();
function r({ image: e, heading: t, description: r, ctas: i }) {
	return /* @__PURE__ */ (0, n.jsxs)("section", {
		className: "hero-section",
		children: [
			e && /* @__PURE__ */ (0, n.jsx)("div", {
				className: "hero-bg",
				dangerouslySetInnerHTML: { __html: e }
			}),
			/* @__PURE__ */ (0, n.jsx)("div", { className: "hero-overlay" }),
			/* @__PURE__ */ (0, n.jsxs)("div", {
				className: "hero-content",
				children: [
					t && /* @__PURE__ */ (0, n.jsx)("div", {
						className: "hero-heading",
						dangerouslySetInnerHTML: { __html: t }
					}),
					r && /* @__PURE__ */ (0, n.jsx)("div", {
						className: "hero-description",
						dangerouslySetInnerHTML: { __html: r }
					}),
					i && /* @__PURE__ */ (0, n.jsx)("div", {
						className: "hero-ctas",
						dangerouslySetInnerHTML: { __html: i }
					})
				]
			})
		]
	});
}
var i = t(r, { cells: [
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
