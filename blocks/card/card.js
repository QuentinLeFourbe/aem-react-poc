import { n as e, r as t, t as n } from "../shared/vendor/ap-design-system.js";
import "../shared/vendor/react-dom.js";
import { a as r, i, n as a, o, r as s, t as c } from "../shared/vendor/mui-material.js";
import "../shared/vendor/emotion-react.js";
import "../shared/vendor/emotion-styled.js";
import { t as l } from "../shared/runtime.js";
//#region src/shared/blocks/Card/Card.tsx
var u = o();
function d({ imageSrc: o, imageAlt: l, title: d, description: f, linkHref: p, linkText: m }) {
	return /* @__PURE__ */ (0, u.jsx)(n, {
		theme: "light",
		children: /* @__PURE__ */ (0, u.jsxs)(e, { children: [
			o && /* @__PURE__ */ (0, u.jsx)(c, {
				component: "img",
				image: o,
				alt: l,
				height: 200
			}),
			/* @__PURE__ */ (0, u.jsx)(i, { title: d }),
			/* @__PURE__ */ (0, u.jsx)(s, { children: /* @__PURE__ */ (0, u.jsx)(r, { children: f }) }),
			m && /* @__PURE__ */ (0, u.jsx)(a, { children: /* @__PURE__ */ (0, u.jsx)(t, {
				variant: "primary",
				size: "medium",
				href: p || void 0,
				children: m
			}) })
		] })
	});
}
var f = l(d, { decorate: (e) => {
	let t = e.querySelector(":scope > div > div"), n = t?.querySelector("picture img") ?? t?.querySelector("img"), r = n?.getAttribute("src") ?? "", i = n?.getAttribute("alt") ?? "", a = t?.querySelector("h1,h2,h3,h4,h5,h6")?.textContent?.trim() ?? "", o = t?.querySelector("a"), s = o?.getAttribute("href") ?? "", c = o?.textContent?.trim() ?? "", l = t?.cloneNode(!0);
	return l?.querySelector("picture")?.remove(), l?.querySelector("h1,h2,h3,h4,h5,h6")?.remove(), l?.querySelector("a")?.remove(), {
		imageSrc: r,
		imageAlt: i,
		title: a,
		description: l?.textContent?.trim() ?? "",
		linkHref: s,
		linkText: c
	};
} });
//#endregion
export { f as default };
