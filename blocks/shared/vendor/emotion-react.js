import { n as e } from "../rolldown-runtime.js";
import { i as t } from "./ap-design-system.js";
import { n, t as r } from "./emotion-cache.js";
import { t as i } from "./emotion-hash.js";
//#region ../../node_modules/.pnpm/@emotion+utils@1.4.2/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js
var a = !0;
function o(e, t, n) {
	var r = "";
	return n.split(" ").forEach(function(n) {
		e[n] === void 0 ? n && (r += n + " ") : t.push(e[n] + ";");
	}), r;
}
var s = function(e, t, n) {
	var r = e.key + "-" + t.name;
	(n === !1 || a === !1) && e.registered[r] === void 0 && (e.registered[r] = t.styles);
}, c = function(e, t, n) {
	s(e, t, n);
	var r = e.key + "-" + t.name;
	if (e.inserted[t.name] === void 0) {
		var i = t;
		do
			e.insert(t === i ? "." + r : "", i, e.sheet, !0), i = i.next;
		while (i !== void 0);
	}
}, l = {
	animationIterationCount: 1,
	aspectRatio: 1,
	borderImageOutset: 1,
	borderImageSlice: 1,
	borderImageWidth: 1,
	boxFlex: 1,
	boxFlexGroup: 1,
	boxOrdinalGroup: 1,
	columnCount: 1,
	columns: 1,
	flex: 1,
	flexGrow: 1,
	flexPositive: 1,
	flexShrink: 1,
	flexNegative: 1,
	flexOrder: 1,
	gridRow: 1,
	gridRowEnd: 1,
	gridRowSpan: 1,
	gridRowStart: 1,
	gridColumn: 1,
	gridColumnEnd: 1,
	gridColumnSpan: 1,
	gridColumnStart: 1,
	msGridRow: 1,
	msGridRowSpan: 1,
	msGridColumn: 1,
	msGridColumnSpan: 1,
	fontWeight: 1,
	lineHeight: 1,
	opacity: 1,
	order: 1,
	orphans: 1,
	scale: 1,
	tabSize: 1,
	widows: 1,
	zIndex: 1,
	zoom: 1,
	WebkitLineClamp: 1,
	fillOpacity: 1,
	floodOpacity: 1,
	stopOpacity: 1,
	strokeDasharray: 1,
	strokeDashoffset: 1,
	strokeMiterlimit: 1,
	strokeOpacity: 1,
	strokeWidth: 1
}, u = !1, d = /[A-Z]|^ms/g, f = /_EMO_([^_]+?)_([^]*?)_EMO_/g, p = function(e) {
	return e.charCodeAt(1) === 45;
}, m = function(e) {
	return e != null && typeof e != "boolean";
}, h = /* @__PURE__ */ n(function(e) {
	return p(e) ? e : e.replace(d, "-$&").toLowerCase();
}), g = function(e, t) {
	switch (e) {
		case "animation":
		case "animationName": if (typeof t == "string") return t.replace(f, function(e, t, n) {
			return x = {
				name: t,
				styles: n,
				next: x
			}, t;
		});
	}
	return l[e] !== 1 && !p(e) && typeof t == "number" && t !== 0 ? t + "px" : t;
}, _ = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function v(e, t, n) {
	if (n == null) return "";
	var r = n;
	if (r.__emotion_styles !== void 0) return r;
	switch (typeof n) {
		case "boolean": return "";
		case "object":
			var i = n;
			if (i.anim === 1) return x = {
				name: i.name,
				styles: i.styles,
				next: x
			}, i.name;
			var a = n;
			if (a.styles !== void 0) {
				var o = a.next;
				if (o !== void 0) for (; o !== void 0;) x = {
					name: o.name,
					styles: o.styles,
					next: x
				}, o = o.next;
				return a.styles + ";";
			}
			return y(e, t, n);
		case "function":
			if (e !== void 0) {
				var s = x, c = n(e);
				return x = s, v(e, t, c);
			}
			break;
	}
	var l = n;
	if (t == null) return l;
	var u = t[l];
	return u === void 0 ? l : u;
}
function y(e, t, n) {
	var r = "";
	if (Array.isArray(n)) for (var i = 0; i < n.length; i++) r += v(e, t, n[i]) + ";";
	else for (var a in n) {
		var o = n[a];
		if (typeof o != "object") {
			var s = o;
			t != null && t[s] !== void 0 ? r += a + "{" + t[s] + "}" : m(s) && (r += h(a) + ":" + g(a, s) + ";");
		} else {
			if (a === "NO_COMPONENT_SELECTOR" && u) throw Error(_);
			if (Array.isArray(o) && typeof o[0] == "string" && (t == null || t[o[0]] === void 0)) for (var c = 0; c < o.length; c++) m(o[c]) && (r += h(a) + ":" + g(a, o[c]) + ";");
			else {
				var l = v(e, t, o);
				switch (a) {
					case "animation":
					case "animationName":
						r += h(a) + ":" + l + ";";
						break;
					default: r += a + "{" + l + "}";
				}
			}
		}
	}
	return r;
}
var b = /label:\s*([^\s;{]+)\s*(;|$)/g, x;
function S(e, t, n) {
	if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0) return e[0];
	var r = !0, a = "";
	x = void 0;
	var o = e[0];
	o == null || o.raw === void 0 ? (r = !1, a += v(n, t, o)) : a += o[0];
	for (var s = 1; s < e.length; s++) a += v(n, t, e[s]), r && (a += o[s]);
	b.lastIndex = 0;
	for (var c = "", l; (l = b.exec(a)) !== null;) c += "-" + l[1];
	return {
		name: i(a) + c,
		styles: a,
		next: x
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.2.0_react@18.3.1/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js
var C = /* @__PURE__ */ e(t()), w = function(e) {
	return e();
}, T = C.useInsertionEffect ? C.useInsertionEffect : !1, E = T || w;
T || C.useLayoutEffect;
//#endregion
//#region ../../node_modules/.pnpm/@emotion+react@11.14.0_@types+react@18.3.28_react@18.3.1/node_modules/@emotion/react/dist/emotion-element-f0de968e.browser.esm.js
var D = /* @__PURE__ */ C.createContext(typeof HTMLElement < "u" ? /* @__PURE__ */ r({ key: "css" }) : null);
D.Provider;
var O = function(e) {
	return /* @__PURE__ */ (0, C.forwardRef)(function(t, n) {
		return e(t, (0, C.useContext)(D), n);
	});
}, k = /* @__PURE__ */ C.createContext({});
({}).hasOwnProperty;
//#endregion
export { o as a, S as i, O as n, c as o, E as r, s, k as t };
