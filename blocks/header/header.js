import { t as e } from "../shared/runtime.js";
import { useEffect as t, useState as n } from "react";
import { Fragment as r, jsx as i, jsxs as a } from "react/jsx-runtime";
//#region src/shared/blocks/Header/Header.tsx
function o({ brand: e, links: o, currentPath: s }) {
	let [c, l] = n(!1);
	return t(() => {
		let e = (e) => {
			e.key === "Escape" && l(!1);
		};
		return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
	}, []), t(() => (document.body.classList.toggle("nav-open", c), () => document.body.classList.remove("nav-open")), [c]), /* @__PURE__ */ a(r, { children: [
		/* @__PURE__ */ i("button", {
			className: "sidebar-toggle",
			"aria-controls": "sidebar",
			"aria-expanded": c,
			"aria-label": c ? "Fermer la navigation" : "Ouvrir la navigation",
			onClick: () => l((e) => !e),
			children: /* @__PURE__ */ i("span", { className: "sidebar-toggle-icon" })
		}),
		/* @__PURE__ */ i("div", {
			className: `sidebar-overlay${c ? " active" : ""}`,
			onClick: () => l(!1)
		}),
		/* @__PURE__ */ a("div", {
			id: "sidebar",
			className: "sidebar",
			"aria-expanded": c,
			children: [/* @__PURE__ */ i("div", {
				className: "sidebar-brand",
				children: /* @__PURE__ */ i("a", {
					href: e.href,
					children: e.label
				})
			}), /* @__PURE__ */ i("nav", {
				className: "sidebar-sections",
				"aria-label": "Navigation principale",
				children: /* @__PURE__ */ i("ul", { children: o.map((e) => /* @__PURE__ */ i("li", { children: /* @__PURE__ */ i("a", {
					href: e.href,
					"aria-current": e.href === s ? "page" : void 0,
					children: e.label
				}) }, e.href)) })
			})]
		})
	] });
}
var s = e(o, { async decorate() {
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
