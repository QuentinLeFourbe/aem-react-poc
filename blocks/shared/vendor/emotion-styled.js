import { n as e } from "../rolldown-runtime.js";
import { i as t } from "./ap-design-system.js";
import { t as n } from "./babel-runtime.js";
import { a as r, i, n as a, o, r as s, s as c, t as l } from "./emotion-react.js";
import { t as u } from "./emotion-is-prop-valid.js";
//#region ../../node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@18.3.28_react@18.3.1__@types+react@18.3.28_react@18.3.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js
var d = /* @__PURE__ */ e(t()), f = !1, p = u, m = function(e) {
	return e !== "theme";
}, h = function(e) {
	return typeof e == "string" && e.charCodeAt(0) > 96 ? p : m;
}, g = function(e, t, n) {
	var r;
	if (t) {
		var i = t.shouldForwardProp;
		r = e.__emotion_forwardProp && i ? function(t) {
			return e.__emotion_forwardProp(t) && i(t);
		} : i;
	}
	return typeof r != "function" && n && (r = e.__emotion_forwardProp), r;
}, _ = function(e) {
	var t = e.cache, n = e.serialized, r = e.isStringTag;
	return c(t, n, r), s(function() {
		return o(t, n, r);
	}), null;
}, v = function e(t, o) {
	var s = t.__emotion_real === t, c = s && t.__emotion_base || t, u, p;
	o !== void 0 && (u = o.label, p = o.target);
	var m = g(t, o, s), v = m || h(c), y = !v("as");
	return function() {
		var b = arguments, x = s && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
		if (u !== void 0 && x.push("label:" + u + ";"), b[0] == null || b[0].raw === void 0) x.push.apply(x, b);
		else {
			var S = b[0];
			x.push(S[0]);
			for (var C = b.length, w = 1; w < C; w++) x.push(b[w], S[w]);
		}
		var T = a(function(e, t, n) {
			var a = y && e.as || c, o = "", s = [], u = e;
			if (e.theme == null) {
				for (var f in u = {}, e) u[f] = e[f];
				u.theme = d.useContext(l);
			}
			typeof e.className == "string" ? o = r(t.registered, s, e.className) : e.className != null && (o = e.className + " ");
			var g = i(x.concat(s), t.registered, u);
			o += t.key + "-" + g.name, p !== void 0 && (o += " " + p);
			var b = y && m === void 0 ? h(a) : v, S = {};
			for (var C in e) y && C === "as" || b(C) && (S[C] = e[C]);
			return S.className = o, n && (S.ref = n), /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement(_, {
				cache: t,
				serialized: g,
				isStringTag: typeof a == "string"
			}), /* @__PURE__ */ d.createElement(a, S));
		});
		return T.displayName = u === void 0 ? "Styled(" + (typeof c == "string" ? c : c.displayName || c.name || "Component") + ")" : u, T.defaultProps = t.defaultProps, T.__emotion_real = T, T.__emotion_base = c, T.__emotion_styles = x, T.__emotion_forwardProp = m, Object.defineProperty(T, "toString", { value: function() {
			return p === void 0 && f ? "NO_COMPONENT_SELECTOR" : "." + p;
		} }), T.withComponent = function(t, r) {
			return e(t, n({}, o, r, { shouldForwardProp: g(T, r, !0) })).apply(void 0, x);
		}, T;
	};
}, y = /* @__PURE__ */ "a.abbr.address.area.article.aside.audio.b.base.bdi.bdo.big.blockquote.body.br.button.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.keygen.label.legend.li.link.main.map.mark.marquee.menu.menuitem.meta.meter.nav.noscript.object.ol.optgroup.option.output.p.param.picture.pre.progress.q.rp.rt.ruby.s.samp.script.section.select.small.source.span.strong.style.sub.summary.sup.table.tbody.td.textarea.tfoot.th.thead.time.title.tr.track.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.foreignObject.g.image.line.linearGradient.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.text.tspan".split("."), b = v.bind(null);
y.forEach(function(e) {
	b[e] = b(e);
});
//#endregion
export { b as t };
