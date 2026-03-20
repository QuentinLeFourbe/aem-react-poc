import "../shared/vendor/ap-design-system.js";
import "../shared/vendor/react-dom.js";
import { o as e } from "../shared/vendor/mui-material.js";
import { t } from "../shared/vendor/tanstack-react-query.js";
import { t as n } from "../shared/runtime.js";
//#region src/shared/blocks/Users/Users.tsx
var r = e();
function i({ name: e, email: t, company: n, website: i }) {
	return /* @__PURE__ */ (0, r.jsxs)("li", {
		className: "users-item",
		children: [/* @__PURE__ */ (0, r.jsx)("div", {
			className: "users-item-avatar",
			children: e.charAt(0)
		}), /* @__PURE__ */ (0, r.jsxs)("div", {
			className: "users-item-info",
			children: [
				/* @__PURE__ */ (0, r.jsx)("h3", {
					className: "users-item-name",
					children: e
				}),
				/* @__PURE__ */ (0, r.jsx)("a", {
					className: "users-item-email",
					href: `mailto:${t}`,
					children: t
				}),
				/* @__PURE__ */ (0, r.jsx)("p", {
					className: "users-item-company",
					children: n.name
				}),
				/* @__PURE__ */ (0, r.jsx)("a", {
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
function a() {
	let { data: e, isLoading: n, isError: a, error: o } = t({
		queryKey: ["users"],
		queryFn: () => fetch("https://jsonplaceholder.typicode.com/users").then((e) => e.json())
	});
	return n ? /* @__PURE__ */ (0, r.jsx)("div", {
		className: "users-loading",
		children: "Chargement des utilisateurs..."
	}) : a ? /* @__PURE__ */ (0, r.jsxs)("div", {
		className: "users-error",
		children: ["Erreur : ", o.message]
	}) : /* @__PURE__ */ (0, r.jsx)("ul", {
		className: "users-grid",
		children: e?.map((e) => /* @__PURE__ */ (0, r.jsx)(i, { ...e }, e.id))
	});
}
var o = n(a, { cells: [] });
//#endregion
export { a as Users, o as default };
