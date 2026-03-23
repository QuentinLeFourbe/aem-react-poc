import { n as e } from "../shared/rolldown-runtime.js";
import { i as t } from "../shared/vendor/ap-design-system.js";
import "../shared/vendor/react-dom.js";
import { o as n } from "../shared/vendor/mui-material.js";
import { t as r } from "../shared/runtime.js";
import { n as i, t as a } from "../shared/picture.js";
//#region src/shared/blocks/Cards/Cards.css
var o = /* @__PURE__ */ e(t(), 1), s = n();
function c({ image: e, title: t, description: n, ctaLabel: r, ctaUrl: i }) {
	return /* @__PURE__ */ (0, s.jsxs)("div", {
		className: "cards-item",
		children: [e && /* @__PURE__ */ (0, s.jsx)("div", {
			className: "cards-item-image",
			children: /* @__PURE__ */ (0, s.jsx)(a, { data: e })
		}), /* @__PURE__ */ (0, s.jsxs)("div", {
			className: "cards-item-body",
			children: [
				/* @__PURE__ */ (0, s.jsx)("h3", { children: t }),
				n && /* @__PURE__ */ (0, s.jsx)("p", {
					className: "cards-item-description",
					children: n
				}),
				r && i && /* @__PURE__ */ (0, s.jsx)("a", {
					href: i,
					className: "cards-item-cta",
					children: r
				})
			]
		})]
	});
}
function l({ items: e }) {
	let t = (0, o.useRef)(null), n = (e) => {
		let n = t.current;
		if (!n) return;
		let r = n.querySelector("li");
		r && n.scrollBy({
			left: e * (r.offsetWidth + 24),
			behavior: "smooth"
		});
	};
	return /* @__PURE__ */ (0, s.jsxs)("div", {
		className: "cards-carousel",
		children: [
			/* @__PURE__ */ (0, s.jsx)("button", {
				type: "button",
				className: "cards-nav cards-nav-prev",
				"aria-label": "Précédent",
				onClick: () => n(-1),
				children: "‹"
			}),
			/* @__PURE__ */ (0, s.jsx)("ul", {
				className: "cards-track",
				ref: t,
				children: e.map((e, t) => /* @__PURE__ */ (0, s.jsx)("li", {
					className: "cards-track-item",
					children: /* @__PURE__ */ (0, s.jsx)(c, { ...e })
				}, t))
			}),
			/* @__PURE__ */ (0, s.jsx)("button", {
				type: "button",
				className: "cards-nav cards-nav-next",
				"aria-label": "Suivant",
				onClick: () => n(1),
				children: "›"
			})
		]
	});
}
var u = r(l, { decorate: (e) => ({ items: [...e.querySelectorAll(":scope > div")].map((e) => {
	let t = e.querySelector(":scope > div"), n = t?.cloneNode(!0), r = i(t);
	n?.querySelector("picture")?.remove();
	let a = n?.querySelector("h1,h2,h3,h4,h5,h6")?.textContent?.trim() ?? "";
	n?.querySelector("h1,h2,h3,h4,h5,h6")?.remove();
	let o = n?.querySelector("p:last-of-type > a") ?? null, s = o?.textContent?.trim() ?? "", c = o?.getAttribute("href") ?? "";
	return o?.closest("p")?.remove(), {
		image: r,
		title: a,
		description: n?.textContent?.trim() ?? "",
		ctaLabel: s,
		ctaUrl: c
	};
}) }) });
//#endregion
export { l as Cards, u as default };
