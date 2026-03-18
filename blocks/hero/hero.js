import { n as e, t } from "../shared/jsx-runtime.js";
//#region src/shared/blocks/Hero/Hero.tsx
function n({ image: e, heading: n, description: r, ctas: i }) {
	return /* @__PURE__ */ (0, t.jsxs)("section", {
		className: "hero-section",
		children: [
			e && /* @__PURE__ */ (0, t.jsx)("div", {
				className: "hero-bg",
				dangerouslySetInnerHTML: { __html: e }
			}),
			/* @__PURE__ */ (0, t.jsx)("div", { className: "hero-overlay" }),
			/* @__PURE__ */ (0, t.jsxs)("div", {
				className: "hero-content",
				children: [
					n && /* @__PURE__ */ (0, t.jsx)("div", {
						className: "hero-heading",
						dangerouslySetInnerHTML: { __html: n }
					}),
					r && /* @__PURE__ */ (0, t.jsx)("div", {
						className: "hero-description",
						dangerouslySetInnerHTML: { __html: r }
					}),
					i && /* @__PURE__ */ (0, t.jsx)("div", {
						className: "hero-ctas",
						dangerouslySetInnerHTML: { __html: i }
					})
				]
			})
		]
	});
}
var r = e(n, { cells: [
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
export { r as default };
