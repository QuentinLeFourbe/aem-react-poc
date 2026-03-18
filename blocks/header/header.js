import { n as e, t } from "../shared/jsx-runtime.js";
import { useEffect as n, useState as r } from "preact/compat";
//#region src/shared/blocks/Header/Header.tsx
function i({ brand: e, links: i, currentPath: a }) {
	let [o, s] = r(!1);
	return n(() => {
		let e = (e) => {
			e.key === "Escape" && s(!1);
		};
		return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
	}, []), n(() => (document.body.classList.toggle("nav-open", o), () => document.body.classList.remove("nav-open")), [o]), /* @__PURE__ */ (0, t.jsxs)(t.Fragment, { children: [
		/* @__PURE__ */ (0, t.jsx)("button", {
			className: "sidebar-toggle",
			"aria-controls": "sidebar",
			"aria-expanded": o,
			"aria-label": o ? "Fermer la navigation" : "Ouvrir la navigation",
			onClick: () => s((e) => !e),
			children: /* @__PURE__ */ (0, t.jsx)("span", { className: "sidebar-toggle-icon" })
		}),
		/* @__PURE__ */ (0, t.jsx)("div", {
			className: `sidebar-overlay${o ? " active" : ""}`,
			onClick: () => s(!1)
		}),
		/* @__PURE__ */ (0, t.jsxs)("div", {
			id: "sidebar",
			className: "sidebar",
			"aria-expanded": o,
			children: [/* @__PURE__ */ (0, t.jsx)("div", {
				className: "sidebar-brand",
				children: /* @__PURE__ */ (0, t.jsx)("a", {
					href: e.href,
					children: e.label
				})
			}), /* @__PURE__ */ (0, t.jsx)("nav", {
				className: "sidebar-sections",
				"aria-label": "Navigation principale",
				children: /* @__PURE__ */ (0, t.jsx)("ul", { children: i.map((e) => /* @__PURE__ */ (0, t.jsx)("li", { children: /* @__PURE__ */ (0, t.jsx)("a", {
					href: e.href,
					"aria-current": e.href === a ? "page" : void 0,
					children: e.label
				}) }, e.href)) })
			})]
		})
	] });
}
var a = e(i, { async decorate() {
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
export { a as default };
