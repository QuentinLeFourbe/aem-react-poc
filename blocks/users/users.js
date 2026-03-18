import { n as e, t } from "../shared/jsx-runtime.js";
import { useQuery as n } from "@tanstack/react-query";
//#region src/shared/blocks/Users/Users.tsx
function r({ name: e, email: n, company: r, website: i }) {
	return /* @__PURE__ */ (0, t.jsxs)("li", {
		className: "users-item",
		children: [/* @__PURE__ */ (0, t.jsx)("div", {
			className: "users-item-avatar",
			children: e.charAt(0)
		}), /* @__PURE__ */ (0, t.jsxs)("div", {
			className: "users-item-info",
			children: [
				/* @__PURE__ */ (0, t.jsx)("h3", {
					className: "users-item-name",
					children: e
				}),
				/* @__PURE__ */ (0, t.jsx)("a", {
					className: "users-item-email",
					href: `mailto:${n}`,
					children: n
				}),
				/* @__PURE__ */ (0, t.jsx)("p", {
					className: "users-item-company",
					children: r.name
				}),
				/* @__PURE__ */ (0, t.jsx)("a", {
					className: "users-item-website",
					href: `https://${i}`,
					target: "_blank",
					rel: "noreferrer",
					children: i
				})
			]
		})]
	});
}
function i() {
	let { data: e, isLoading: i, isError: a, error: o } = n({
		queryKey: ["users"],
		queryFn: () => fetch("https://jsonplaceholder.typicode.com/users").then((e) => e.json())
	});
	return i ? /* @__PURE__ */ (0, t.jsx)("div", {
		className: "users-loading",
		children: "Chargement des utilisateurs..."
	}) : a ? /* @__PURE__ */ (0, t.jsxs)("div", {
		className: "users-error",
		children: ["Erreur : ", o.message]
	}) : /* @__PURE__ */ (0, t.jsx)("ul", {
		className: "users-grid",
		children: e?.map((e) => /* @__PURE__ */ (0, t.jsx)(r, { ...e }, e.id))
	});
}
var a = e(i, { cells: [] });
//#endregion
export { a as default };
