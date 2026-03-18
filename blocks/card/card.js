import { n as e, t } from "../shared/jsx-runtime.js";
//#region src/shared/blocks/Card/Card.tsx
function n({ image: e, title: n, description: r }) {
	return console.log({
		image: e,
		title: n,
		description: r
	}), /* @__PURE__ */ (0, t.jsxs)("div", {
		className: "card",
		children: [
			e && /* @__PURE__ */ (0, t.jsx)("div", {
				className: "card-image",
				dangerouslySetInnerHTML: { __html: e.outerHTML }
			}),
			/* @__PURE__ */ (0, t.jsx)("h3", { children: n }),
			/* @__PURE__ */ (0, t.jsx)("div", {
				className: "card-description",
				dangerouslySetInnerHTML: { __html: r }
			})
		]
	});
}
var r = e(n, { decorate: (e) => {
	let t = e.querySelector(":scope > div > div"), n = t?.querySelector("picture") ?? null, r = t?.querySelector("h1,h2,h3,h4,h5,h6")?.textContent?.trim() ?? "", i = t?.cloneNode(!0);
	return i?.querySelector("picture")?.remove(), i?.querySelector("h1,h2,h3,h4,h5,h6")?.remove(), {
		image: n,
		title: r,
		description: i?.innerHTML?.trim() ?? ""
	};
} });
//#endregion
export { r as default };
