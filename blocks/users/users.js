import { t as e } from "../shared/runtime.js";
import { useQuery as t } from "@tanstack/react-query";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
//#region src/shared/blocks/Users/Users.tsx
function i({ name: e, email: t, company: i, website: a }) {
	return /* @__PURE__ */ r("li", {
		className: "users-item",
		children: [/* @__PURE__ */ n("div", {
			className: "users-item-avatar",
			children: e.charAt(0)
		}), /* @__PURE__ */ r("div", {
			className: "users-item-info",
			children: [
				/* @__PURE__ */ n("h3", {
					className: "users-item-name",
					children: e
				}),
				/* @__PURE__ */ n("a", {
					className: "users-item-email",
					href: `mailto:${t}`,
					children: t
				}),
				/* @__PURE__ */ n("p", {
					className: "users-item-company",
					children: i.name
				}),
				/* @__PURE__ */ n("a", {
					className: "users-item-website",
					href: `https://${a}`,
					target: "_blank",
					rel: "noreferrer",
					children: a
				})
			]
		})]
	});
}
function a() {
	let { data: e, isLoading: a, isError: o, error: s } = t({
		queryKey: ["users"],
		queryFn: () => fetch("https://jsonplaceholder.typicode.com/users").then((e) => e.json())
	});
	return a ? /* @__PURE__ */ n("div", {
		className: "users-loading",
		children: "Chargement des utilisateurs..."
	}) : o ? /* @__PURE__ */ r("div", {
		className: "users-error",
		children: ["Erreur : ", s.message]
	}) : /* @__PURE__ */ n("ul", {
		className: "users-grid",
		children: e?.map((e) => /* @__PURE__ */ n(i, { ...e }, e.id))
	});
}
var o = e(a, { cells: [] });
//#endregion
export { a as Users, o as default };
