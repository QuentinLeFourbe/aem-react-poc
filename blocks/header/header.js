import { n as e } from "../shared/rolldown-runtime.js";
import { i as t } from "../shared/vendor/ap-design-system.js";
import "../shared/vendor/react-dom.js";
import { o as n } from "../shared/vendor/mui-material.js";
import { t as r } from "../shared/runtime.js";
//#region src/shared/blocks/Header/Header.tsx
var i = /* @__PURE__ */ e(t(), 1), a = n();
function o({ brand: e, links: t, currentPath: n }) {
	let [r, o] = (0, i.useState)(!1);
	return (0, i.useEffect)(() => {
		let e = (e) => {
			e.key === "Escape" && o(!1);
		};
		return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
	}, []), (0, i.useEffect)(() => (document.body.classList.toggle("nav-open", r), () => document.body.classList.remove("nav-open")), [r]), /* @__PURE__ */ (0, a.jsxs)(a.Fragment, { children: [
		/* @__PURE__ */ (0, a.jsx)("button", {
			className: "sidebar-toggle",
			"aria-controls": "sidebar",
			"aria-expanded": r,
			"aria-label": r ? "Fermer la navigation" : "Ouvrir la navigation",
			onClick: () => o((e) => !e),
			children: /* @__PURE__ */ (0, a.jsx)("span", { className: "sidebar-toggle-icon" })
		}),
		/* @__PURE__ */ (0, a.jsx)("div", {
			className: `sidebar-overlay${r ? " active" : ""}`,
			onClick: () => o(!1)
		}),
		/* @__PURE__ */ (0, a.jsxs)("div", {
			id: "sidebar",
			className: "sidebar",
			"aria-expanded": r,
			children: [/* @__PURE__ */ (0, a.jsx)("div", {
				className: "sidebar-brand",
				children: /* @__PURE__ */ (0, a.jsx)("a", {
					href: e.href,
					children: e.label
				})
			}), /* @__PURE__ */ (0, a.jsx)("nav", {
				className: "sidebar-sections",
				"aria-label": "Navigation principale",
				children: /* @__PURE__ */ (0, a.jsx)("ul", { children: t.map((e) => /* @__PURE__ */ (0, a.jsx)("li", { children: /* @__PURE__ */ (0, a.jsx)("a", {
					href: e.href,
					"aria-current": e.href === n ? "page" : void 0,
					children: e.label
				}) }, e.href)) })
			})]
		})
	] });
}
var s = r(o, { async decorate() {
	let e = await fetch("/nav.plain.html");
	if (!e.ok) return {
		brand: {
			href: "/",
			label: "Home"
		},
		links: [],
		currentPath: window.location.pathname
	};
	let t = await e.text(), n = new DOMParser().parseFromString(t, "text/html"), r = n.querySelector("div:first-child a");
	return {
		brand: {
			href: r?.getAttribute("href") ?? "/",
			label: r?.textContent?.trim() ?? "Home"
		},
		links: [...n.querySelectorAll("div:nth-child(2) ul > li > a")].map((e) => ({
			href: e.getAttribute("href") ?? "#",
			label: e.textContent?.trim() ?? ""
		})),
		currentPath: window.location.pathname
	};
} });
//#endregion
export { s as default };
