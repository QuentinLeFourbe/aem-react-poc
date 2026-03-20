import "../shared/vendor/ap-design-system.js";
import "../shared/vendor/react-dom.js";
import { o as e } from "../shared/vendor/mui-material.js";
import { t } from "../shared/runtime.js";
import { n, t as r } from "../shared/picture.js";
//#region src/shared/blocks/Hero/Hero.tsx
var i = e();
function a({ image: e, heading: t, description: n, ctaLabel: a, ctaUrl: o }) {
	return /* @__PURE__ */ (0, i.jsxs)("section", {
		className: "hero-section",
		children: [
			e && /* @__PURE__ */ (0, i.jsx)("div", {
				className: "hero-bg",
				children: /* @__PURE__ */ (0, i.jsx)(r, { data: e })
			}),
			/* @__PURE__ */ (0, i.jsx)("div", { className: "hero-overlay" }),
			/* @__PURE__ */ (0, i.jsxs)("div", {
				className: "hero-content",
				children: [
					t && /* @__PURE__ */ (0, i.jsx)("h2", {
						className: "hero-heading",
						children: t
					}),
					n && /* @__PURE__ */ (0, i.jsx)("p", {
						className: "hero-description",
						children: n
					}),
					a && o && /* @__PURE__ */ (0, i.jsx)("div", {
						className: "hero-ctas",
						children: /* @__PURE__ */ (0, i.jsx)("a", {
							href: o,
							className: "button primary",
							children: a
						})
					})
				]
			})
		]
	});
}
var o = t(a, { decorate: (e) => {
	let t = (t) => e.children[t]?.children[1] ?? null;
	return {
		image: n(t(0)),
		heading: t(1)?.textContent?.trim() ?? "",
		description: t(2)?.textContent?.trim() ?? "",
		ctaLabel: t(3)?.textContent?.trim() ?? "",
		ctaUrl: t(4)?.querySelector("a")?.getAttribute("href") ?? t(4)?.textContent?.trim() ?? ""
	};
} });
//#endregion
export { a as Hero, o as default };
