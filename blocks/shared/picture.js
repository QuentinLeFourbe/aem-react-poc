import { o as e } from "./vendor/mui-material.js";
//#region src/shared/utils/picture.tsx
var t = e();
function n(e) {
	let t = e?.querySelector("img");
	if (!t) return null;
	let n = Array.from(e?.querySelectorAll("source") ?? []).map((e) => ({
		type: e.getAttribute("type") ?? "",
		srcSet: e.getAttribute("srcset") ?? "",
		media: e.getAttribute("media") ?? void 0
	}));
	return {
		src: t.getAttribute("src") ?? "",
		alt: t.getAttribute("alt") ?? "",
		sources: n
	};
}
function r({ data: e, className: n }) {
	return /* @__PURE__ */ (0, t.jsxs)("picture", {
		className: n,
		children: [e.sources.map((e) => /* @__PURE__ */ (0, t.jsx)("source", {
			type: e.type || void 0,
			srcSet: e.srcSet || void 0,
			media: e.media
		}, e.type + e.srcSet)), /* @__PURE__ */ (0, t.jsx)("img", {
			src: e.src,
			alt: e.alt,
			loading: "lazy"
		})]
	});
}
//#endregion
export { n, r as t };
