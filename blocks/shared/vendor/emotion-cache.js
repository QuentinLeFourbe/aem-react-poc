//#region ../../node_modules/.pnpm/@emotion+sheet@1.4.0/node_modules/@emotion/sheet/dist/emotion-sheet.esm.js
var e = !1;
function t(e) {
	if (e.sheet) return e.sheet;
	/* istanbul ignore next */
	for (var t = 0; t < document.styleSheets.length; t++) if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function n(e) {
	var t = document.createElement("style");
	return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var r = /* @__PURE__ */ function() {
	function r(t) {
		var n = this;
		this._insertTag = function(e) {
			var t = n.tags.length === 0 ? n.insertionPoint ? n.insertionPoint.nextSibling : n.prepend ? n.container.firstChild : n.before : n.tags[n.tags.length - 1].nextSibling;
			n.container.insertBefore(e, t), n.tags.push(e);
		}, this.isSpeedy = t.speedy === void 0 ? !e : t.speedy, this.tags = [], this.ctr = 0, this.nonce = t.nonce, this.key = t.key, this.container = t.container, this.prepend = t.prepend, this.insertionPoint = t.insertionPoint, this.before = null;
	}
	var i = r.prototype;
	return i.hydrate = function(e) {
		e.forEach(this._insertTag);
	}, i.insert = function(e) {
		this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 && this._insertTag(n(this));
		var r = this.tags[this.tags.length - 1];
		if (this.isSpeedy) {
			var i = t(r);
			try {
				i.insertRule(e, i.cssRules.length);
			} catch {}
		} else r.appendChild(document.createTextNode(e));
		this.ctr++;
	}, i.flush = function() {
		this.tags.forEach(function(e) {
			return e.parentNode?.removeChild(e);
		}), this.tags = [], this.ctr = 0;
	}, r;
}(), i = "-ms-", a = "-moz-", o = "-webkit-", s = "comm", c = "rule", l = "decl", u = "@import", d = "@keyframes", f = "@layer", p = Math.abs, m = String.fromCharCode, h = Object.assign;
function g(e, t) {
	return x(e, 0) ^ 45 ? (((t << 2 ^ x(e, 0)) << 2 ^ x(e, 1)) << 2 ^ x(e, 2)) << 2 ^ x(e, 3) : 0;
}
function _(e) {
	return e.trim();
}
function v(e, t) {
	return (e = t.exec(e)) ? e[0] : e;
}
function y(e, t, n) {
	return e.replace(t, n);
}
function b(e, t) {
	return e.indexOf(t);
}
function x(e, t) {
	return e.charCodeAt(t) | 0;
}
function S(e, t, n) {
	return e.slice(t, n);
}
function C(e) {
	return e.length;
}
function w(e) {
	return e.length;
}
function T(e, t) {
	return t.push(e), e;
}
function E(e, t) {
	return e.map(t).join("");
}
//#endregion
//#region ../../node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Tokenizer.js
var D = 1, O = 1, k = 0, A = 0, j = 0, M = "";
function N(e, t, n, r, i, a, o) {
	return {
		value: e,
		root: t,
		parent: n,
		type: r,
		props: i,
		children: a,
		line: D,
		column: O,
		length: o,
		return: ""
	};
}
function P(e, t) {
	return h(N("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function F() {
	return j;
}
function I() {
	return j = A > 0 ? x(M, --A) : 0, O--, j === 10 && (O = 1, D--), j;
}
function L() {
	return j = A < k ? x(M, A++) : 0, O++, j === 10 && (O = 1, D++), j;
}
function R() {
	return x(M, A);
}
function z() {
	return A;
}
function B(e, t) {
	return S(M, e, t);
}
function V(e) {
	switch (e) {
		case 0:
		case 9:
		case 10:
		case 13:
		case 32: return 5;
		case 33:
		case 43:
		case 44:
		case 47:
		case 62:
		case 64:
		case 126:
		case 59:
		case 123:
		case 125: return 4;
		case 58: return 3;
		case 34:
		case 39:
		case 40:
		case 91: return 2;
		case 41:
		case 93: return 1;
	}
	return 0;
}
function H(e) {
	return D = O = 1, k = C(M = e), A = 0, [];
}
function U(e) {
	return M = "", e;
}
function W(e) {
	return _(B(A - 1, q(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function G(e) {
	for (; (j = R()) && j < 33;) L();
	return V(e) > 2 || V(j) > 3 ? "" : " ";
}
function K(e, t) {
	for (; --t && L() && !(j < 48 || j > 102 || j > 57 && j < 65 || j > 70 && j < 97););
	return B(e, z() + (t < 6 && R() == 32 && L() == 32));
}
function q(e) {
	for (; L();) switch (j) {
		case e: return A;
		case 34:
		case 39:
			e !== 34 && e !== 39 && q(j);
			break;
		case 40:
			e === 41 && q(e);
			break;
		case 92:
			L();
			break;
	}
	return A;
}
function ee(e, t) {
	for (; L() && e + j !== 57 && !(e + j === 84 && R() === 47););
	return "/*" + B(t, A - 1) + "*" + m(e === 47 ? e : L());
}
function te(e) {
	for (; !V(R());) L();
	return B(e, A);
}
//#endregion
//#region ../../node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Parser.js
function ne(e) {
	return U(J("", null, null, null, [""], e = H(e), 0, [0], e));
}
function J(e, t, n, r, i, a, o, s, c) {
	for (var l = 0, u = 0, d = o, f = 0, p = 0, h = 0, g = 1, _ = 1, v = 1, S = 0, w = "", E = i, D = a, O = r, k = w; _;) switch (h = S, S = L()) {
		case 40: if (h != 108 && x(k, d - 1) == 58) {
			b(k += y(W(S), "&", "&\f"), "&\f") != -1 && (v = -1);
			break;
		}
		case 34:
		case 39:
		case 91:
			k += W(S);
			break;
		case 9:
		case 10:
		case 13:
		case 32:
			k += G(h);
			break;
		case 92:
			k += K(z() - 1, 7);
			continue;
		case 47:
			switch (R()) {
				case 42:
				case 47:
					T(re(ee(L(), z()), t, n), c);
					break;
				default: k += "/";
			}
			break;
		case 123 * g: s[l++] = C(k) * v;
		case 125 * g:
		case 59:
		case 0:
			switch (S) {
				case 0:
				case 125: _ = 0;
				case 59 + u:
					v == -1 && (k = y(k, /\f/g, "")), p > 0 && C(k) - d && T(p > 32 ? X(k + ";", r, n, d - 1) : X(y(k, " ", "") + ";", r, n, d - 2), c);
					break;
				case 59: k += ";";
				default: if (T(O = Y(k, t, n, l, u, i, s, w, E = [], D = [], d), a), S === 123) if (u === 0) J(k, t, O, O, E, a, d, s, D);
				else switch (f === 99 && x(k, 3) === 110 ? 100 : f) {
					case 100:
					case 108:
					case 109:
					case 115:
						J(e, O, O, r && T(Y(e, O, O, 0, 0, i, s, w, i, E = [], d), D), i, D, d, s, r ? E : D);
						break;
					default: J(k, O, O, O, [""], D, 0, s, D);
				}
			}
			l = u = p = 0, g = v = 1, w = k = "", d = o;
			break;
		case 58: d = 1 + C(k), p = h;
		default:
			if (g < 1) {
				if (S == 123) --g;
				else if (S == 125 && g++ == 0 && I() == 125) continue;
			}
			switch (k += m(S), S * g) {
				case 38:
					v = u > 0 ? 1 : (k += "\f", -1);
					break;
				case 44:
					s[l++] = (C(k) - 1) * v, v = 1;
					break;
				case 64:
					R() === 45 && (k += W(L())), f = R(), u = d = C(w = k += te(z())), S++;
					break;
				case 45: h === 45 && C(k) == 2 && (g = 0);
			}
	}
	return a;
}
function Y(e, t, n, r, i, a, o, s, l, u, d) {
	for (var f = i - 1, m = i === 0 ? a : [""], h = w(m), g = 0, v = 0, b = 0; g < r; ++g) for (var x = 0, C = S(e, f + 1, f = p(v = o[g])), T = e; x < h; ++x) (T = _(v > 0 ? m[x] + " " + C : y(C, /&\f/g, m[x]))) && (l[b++] = T);
	return N(e, t, n, i === 0 ? c : s, l, u, d);
}
function re(e, t, n) {
	return N(e, t, n, s, m(F()), S(e, 2, -2), 0);
}
function X(e, t, n, r) {
	return N(e, t, n, l, S(e, 0, r), S(e, r + 1, -1), r);
}
//#endregion
//#region ../../node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Serializer.js
function Z(e, t) {
	for (var n = "", r = w(e), i = 0; i < r; i++) n += t(e[i], i, e, t) || "";
	return n;
}
function ie(e, t, n, r) {
	switch (e.type) {
		case f: if (e.children.length) break;
		case u:
		case l: return e.return = e.return || e.value;
		case s: return "";
		case d: return e.return = e.value + "{" + Z(e.children, r) + "}";
		case c: e.value = e.props.join(",");
	}
	return C(n = Z(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
//#endregion
//#region ../../node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Middleware.js
function ae(e) {
	var t = w(e);
	return function(n, r, i, a) {
		for (var o = "", s = 0; s < t; s++) o += e[s](n, r, i, a) || "";
		return o;
	};
}
function oe(e) {
	return function(t) {
		t.root || (t = t.return) && e(t);
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@emotion+memoize@0.9.0/node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
function se(e) {
	var t = Object.create(null);
	return function(n) {
		return t[n] === void 0 && (t[n] = e(n)), t[n];
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@emotion+cache@11.14.0/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js
var ce = function(e, t, n) {
	for (var r = 0, i = 0; r = i, i = R(), r === 38 && i === 12 && (t[n] = 1), !V(i);) L();
	return B(e, A);
}, le = function(e, t) {
	var n = -1, r = 44;
	do
		switch (V(r)) {
			case 0:
				r === 38 && R() === 12 && (t[n] = 1), e[n] += ce(A - 1, t, n);
				break;
			case 2:
				e[n] += W(r);
				break;
			case 4: if (r === 44) {
				e[++n] = R() === 58 ? "&\f" : "", t[n] = e[n].length;
				break;
			}
			default: e[n] += m(r);
		}
	while (r = L());
	return e;
}, ue = function(e, t) {
	return U(le(H(e), t));
}, Q = /* @__PURE__ */ new WeakMap(), de = function(e) {
	if (!(e.type !== "rule" || !e.parent || e.length < 1)) {
		for (var t = e.value, n = e.parent, r = e.column === n.column && e.line === n.line; n.type !== "rule";) if (n = n.parent, !n) return;
		if (!(e.props.length === 1 && t.charCodeAt(0) !== 58 && !Q.get(n)) && !r) {
			Q.set(e, !0);
			for (var i = [], a = ue(t, i), o = n.props, s = 0, c = 0; s < a.length; s++) for (var l = 0; l < o.length; l++, c++) e.props[c] = i[s] ? a[s].replace(/&\f/g, o[l]) : o[l] + " " + a[s];
		}
	}
}, fe = function(e) {
	if (e.type === "decl") {
		var t = e.value;
		t.charCodeAt(0) === 108 && t.charCodeAt(2) === 98 && (e.return = "", e.value = "");
	}
};
function $(e, t) {
	switch (g(e, t)) {
		case 5103: return o + "print-" + e + e;
		case 5737:
		case 4201:
		case 3177:
		case 3433:
		case 1641:
		case 4457:
		case 2921:
		case 5572:
		case 6356:
		case 5844:
		case 3191:
		case 6645:
		case 3005:
		case 6391:
		case 5879:
		case 5623:
		case 6135:
		case 4599:
		case 4855:
		case 4215:
		case 6389:
		case 5109:
		case 5365:
		case 5621:
		case 3829: return o + e + e;
		case 5349:
		case 4246:
		case 4810:
		case 6968:
		case 2756: return o + e + a + e + i + e + e;
		case 6828:
		case 4268: return o + e + i + e + e;
		case 6165: return o + e + i + "flex-" + e + e;
		case 5187: return o + e + y(e, /(\w+).+(:[^]+)/, o + "box-$1$2" + i + "flex-$1$2") + e;
		case 5443: return o + e + i + "flex-item-" + y(e, /flex-|-self/, "") + e;
		case 4675: return o + e + i + "flex-line-pack" + y(e, /align-content|flex-|-self/, "") + e;
		case 5548: return o + e + i + y(e, "shrink", "negative") + e;
		case 5292: return o + e + i + y(e, "basis", "preferred-size") + e;
		case 6060: return o + "box-" + y(e, "-grow", "") + o + e + i + y(e, "grow", "positive") + e;
		case 4554: return o + y(e, /([^-])(transform)/g, "$1" + o + "$2") + e;
		case 6187: return y(y(y(e, /(zoom-|grab)/, o + "$1"), /(image-set)/, o + "$1"), e, "") + e;
		case 5495:
		case 3959: return y(e, /(image-set\([^]*)/, o + "$1$`$1");
		case 4968: return y(y(e, /(.+:)(flex-)?(.*)/, o + "box-pack:$3" + i + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + o + e + e;
		case 4095:
		case 3583:
		case 4068:
		case 2532: return y(e, /(.+)-inline(.+)/, o + "$1$2") + e;
		case 8116:
		case 7059:
		case 5753:
		case 5535:
		case 5445:
		case 5701:
		case 4933:
		case 4677:
		case 5533:
		case 5789:
		case 5021:
		case 4765:
			if (C(e) - 1 - t > 6) switch (x(e, t + 1)) {
				case 109: if (x(e, t + 4) !== 45) break;
				case 102: return y(e, /(.+:)(.+)-([^]+)/, "$1" + o + "$2-$3$1" + a + (x(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
				case 115: return ~b(e, "stretch") ? $(y(e, "stretch", "fill-available"), t) + e : e;
			}
			break;
		case 4949: if (x(e, t + 1) !== 115) break;
		case 6444:
			switch (x(e, C(e) - 3 - (~b(e, "!important") && 10))) {
				case 107: return y(e, ":", ":" + o) + e;
				case 101: return y(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + o + (x(e, 14) === 45 ? "inline-" : "") + "box$3$1" + o + "$2$3$1" + i + "$2box$3") + e;
			}
			break;
		case 5936:
			switch (x(e, t + 11)) {
				case 114: return o + e + i + y(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
				case 108: return o + e + i + y(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
				case 45: return o + e + i + y(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
			}
			return o + e + i + e + e;
	}
	return e;
}
var pe = [function(e, t, n, r) {
	if (e.length > -1 && !e.return) switch (e.type) {
		case l:
			e.return = $(e.value, e.length);
			break;
		case d: return Z([P(e, { value: y(e.value, "@", "@" + o) })], r);
		case c: if (e.length) return E(e.props, function(t) {
			switch (v(t, /(::plac\w+|:read-\w+)/)) {
				case ":read-only":
				case ":read-write": return Z([P(e, { props: [y(t, /:(read-\w+)/, ":" + a + "$1")] })], r);
				case "::placeholder": return Z([
					P(e, { props: [y(t, /:(plac\w+)/, ":" + o + "input-$1")] }),
					P(e, { props: [y(t, /:(plac\w+)/, ":" + a + "$1")] }),
					P(e, { props: [y(t, /:(plac\w+)/, i + "input-$1")] })
				], r);
			}
			return "";
		});
	}
}], me = function(e) {
	var t = e.key;
	if (t === "css") {
		var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
		Array.prototype.forEach.call(n, function(e) {
			e.getAttribute("data-emotion").indexOf(" ") !== -1 && (document.head.appendChild(e), e.setAttribute("data-s", ""));
		});
	}
	var i = e.stylisPlugins || pe, a = {}, o, s = [];
	o = e.container || document.head, Array.prototype.forEach.call(document.querySelectorAll("style[data-emotion^=\"" + t + " \"]"), function(e) {
		for (var t = e.getAttribute("data-emotion").split(" "), n = 1; n < t.length; n++) a[t[n]] = !0;
		s.push(e);
	});
	var c, l = [de, fe], u, d = [ie, oe(function(e) {
		u.insert(e);
	})], f = ae(l.concat(i, d)), p = function(e) {
		return Z(ne(e), f);
	};
	c = function(e, t, n, r) {
		u = n, p(e ? e + "{" + t.styles + "}" : t.styles), r && (m.inserted[t.name] = !0);
	};
	var m = {
		key: t,
		sheet: new r({
			key: t,
			container: o,
			nonce: e.nonce,
			speedy: e.speedy,
			prepend: e.prepend,
			insertionPoint: e.insertionPoint
		}),
		nonce: e.nonce,
		inserted: a,
		registered: {},
		insert: c
	};
	return m.sheet.hydrate(s), m;
};
//#endregion
export { se as n, me as t };
