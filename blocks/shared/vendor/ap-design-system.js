import { n as e, t } from "../rolldown-runtime.js";
//#region ../../node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react.production.min.js
var n = /* @__PURE__ */ t(((e) => {
	var t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), f = Symbol.iterator;
	function p(e) {
		return typeof e != "object" || !e ? null : (e = f && e[f] || e["@@iterator"], typeof e == "function" ? e : null);
	}
	var m = {
		isMounted: function() {
			return !1;
		},
		enqueueForceUpdate: function() {},
		enqueueReplaceState: function() {},
		enqueueSetState: function() {}
	}, h = Object.assign, g = {};
	function _(e, t, n) {
		this.props = e, this.context = t, this.refs = g, this.updater = n || m;
	}
	_.prototype.isReactComponent = {}, _.prototype.setState = function(e, t) {
		if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
		this.updater.enqueueSetState(this, e, t, "setState");
	}, _.prototype.forceUpdate = function(e) {
		this.updater.enqueueForceUpdate(this, e, "forceUpdate");
	};
	function v() {}
	v.prototype = _.prototype;
	function y(e, t, n) {
		this.props = e, this.context = t, this.refs = g, this.updater = n || m;
	}
	var b = y.prototype = new v();
	b.constructor = y, h(b, _.prototype), b.isPureReactComponent = !0;
	var x = Array.isArray, S = Object.prototype.hasOwnProperty, C = { current: null }, w = {
		key: !0,
		ref: !0,
		__self: !0,
		__source: !0
	};
	function T(e, n, r) {
		var i, a = {}, o = null, s = null;
		if (n != null) for (i in n.ref !== void 0 && (s = n.ref), n.key !== void 0 && (o = "" + n.key), n) S.call(n, i) && !w.hasOwnProperty(i) && (a[i] = n[i]);
		var c = arguments.length - 2;
		if (c === 1) a.children = r;
		else if (1 < c) {
			for (var l = Array(c), u = 0; u < c; u++) l[u] = arguments[u + 2];
			a.children = l;
		}
		if (e && e.defaultProps) for (i in c = e.defaultProps, c) a[i] === void 0 && (a[i] = c[i]);
		return {
			$$typeof: t,
			type: e,
			key: o,
			ref: s,
			props: a,
			_owner: C.current
		};
	}
	function E(e, n) {
		return {
			$$typeof: t,
			type: e.type,
			key: n,
			ref: e.ref,
			props: e.props,
			_owner: e._owner
		};
	}
	function ee(e) {
		return typeof e == "object" && !!e && e.$$typeof === t;
	}
	function te(e) {
		var t = {
			"=": "=0",
			":": "=2"
		};
		return "$" + e.replace(/[=:]/g, function(e) {
			return t[e];
		});
	}
	var D = /\/+/g;
	function ne(e, t) {
		return typeof e == "object" && e && e.key != null ? te("" + e.key) : t.toString(36);
	}
	function O(e, r, i, a, o) {
		var s = typeof e;
		(s === "undefined" || s === "boolean") && (e = null);
		var c = !1;
		if (e === null) c = !0;
		else switch (s) {
			case "string":
			case "number":
				c = !0;
				break;
			case "object": switch (e.$$typeof) {
				case t:
				case n: c = !0;
			}
		}
		if (c) return c = e, o = o(c), e = a === "" ? "." + ne(c, 0) : a, x(o) ? (i = "", e != null && (i = e.replace(D, "$&/") + "/"), O(o, r, i, "", function(e) {
			return e;
		})) : o != null && (ee(o) && (o = E(o, i + (!o.key || c && c.key === o.key ? "" : ("" + o.key).replace(D, "$&/") + "/") + e)), r.push(o)), 1;
		if (c = 0, a = a === "" ? "." : a + ":", x(e)) for (var l = 0; l < e.length; l++) {
			s = e[l];
			var u = a + ne(s, l);
			c += O(s, r, i, u, o);
		}
		else if (u = p(e), typeof u == "function") for (e = u.call(e), l = 0; !(s = e.next()).done;) s = s.value, u = a + ne(s, l++), c += O(s, r, i, u, o);
		else if (s === "object") throw r = String(e), Error("Objects are not valid as a React child (found: " + (r === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : r) + "). If you meant to render a collection of children, use an array instead.");
		return c;
	}
	function re(e, t, n) {
		if (e == null) return e;
		var r = [], i = 0;
		return O(e, r, "", "", function(e) {
			return t.call(n, e, i++);
		}), r;
	}
	function ie(e) {
		if (e._status === -1) {
			var t = e._result;
			t = t(), t.then(function(t) {
				(e._status === 0 || e._status === -1) && (e._status = 1, e._result = t);
			}, function(t) {
				(e._status === 0 || e._status === -1) && (e._status = 2, e._result = t);
			}), e._status === -1 && (e._status = 0, e._result = t);
		}
		if (e._status === 1) return e._result.default;
		throw e._result;
	}
	var k = { current: null }, A = { transition: null }, j = {
		ReactCurrentDispatcher: k,
		ReactCurrentBatchConfig: A,
		ReactCurrentOwner: C
	};
	function M() {
		throw Error("act(...) is not supported in production builds of React.");
	}
	e.Children = {
		map: re,
		forEach: function(e, t, n) {
			re(e, function() {
				t.apply(this, arguments);
			}, n);
		},
		count: function(e) {
			var t = 0;
			return re(e, function() {
				t++;
			}), t;
		},
		toArray: function(e) {
			return re(e, function(e) {
				return e;
			}) || [];
		},
		only: function(e) {
			if (!ee(e)) throw Error("React.Children.only expected to receive a single React element child.");
			return e;
		}
	}, e.Component = _, e.Fragment = r, e.Profiler = a, e.PureComponent = y, e.StrictMode = i, e.Suspense = l, e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = j, e.act = M, e.cloneElement = function(e, n, r) {
		if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
		var i = h({}, e.props), a = e.key, o = e.ref, s = e._owner;
		if (n != null) {
			if (n.ref !== void 0 && (o = n.ref, s = C.current), n.key !== void 0 && (a = "" + n.key), e.type && e.type.defaultProps) var c = e.type.defaultProps;
			for (l in n) S.call(n, l) && !w.hasOwnProperty(l) && (i[l] = n[l] === void 0 && c !== void 0 ? c[l] : n[l]);
		}
		var l = arguments.length - 2;
		if (l === 1) i.children = r;
		else if (1 < l) {
			c = Array(l);
			for (var u = 0; u < l; u++) c[u] = arguments[u + 2];
			i.children = c;
		}
		return {
			$$typeof: t,
			type: e.type,
			key: a,
			ref: o,
			props: i,
			_owner: s
		};
	}, e.createContext = function(e) {
		return e = {
			$$typeof: s,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null,
			_defaultValue: null,
			_globalName: null
		}, e.Provider = {
			$$typeof: o,
			_context: e
		}, e.Consumer = e;
	}, e.createElement = T, e.createFactory = function(e) {
		var t = T.bind(null, e);
		return t.type = e, t;
	}, e.createRef = function() {
		return { current: null };
	}, e.forwardRef = function(e) {
		return {
			$$typeof: c,
			render: e
		};
	}, e.isValidElement = ee, e.lazy = function(e) {
		return {
			$$typeof: d,
			_payload: {
				_status: -1,
				_result: e
			},
			_init: ie
		};
	}, e.memo = function(e, t) {
		return {
			$$typeof: u,
			type: e,
			compare: t === void 0 ? null : t
		};
	}, e.startTransition = function(e) {
		var t = A.transition;
		A.transition = {};
		try {
			e();
		} finally {
			A.transition = t;
		}
	}, e.unstable_act = M, e.useCallback = function(e, t) {
		return k.current.useCallback(e, t);
	}, e.useContext = function(e) {
		return k.current.useContext(e);
	}, e.useDebugValue = function() {}, e.useDeferredValue = function(e) {
		return k.current.useDeferredValue(e);
	}, e.useEffect = function(e, t) {
		return k.current.useEffect(e, t);
	}, e.useId = function() {
		return k.current.useId();
	}, e.useImperativeHandle = function(e, t, n) {
		return k.current.useImperativeHandle(e, t, n);
	}, e.useInsertionEffect = function(e, t) {
		return k.current.useInsertionEffect(e, t);
	}, e.useLayoutEffect = function(e, t) {
		return k.current.useLayoutEffect(e, t);
	}, e.useMemo = function(e, t) {
		return k.current.useMemo(e, t);
	}, e.useReducer = function(e, t, n) {
		return k.current.useReducer(e, t, n);
	}, e.useRef = function(e) {
		return k.current.useRef(e);
	}, e.useState = function(e) {
		return k.current.useState(e);
	}, e.useSyncExternalStore = function(e, t, n) {
		return k.current.useSyncExternalStore(e, t, n);
	}, e.useTransition = function() {
		return k.current.useTransition();
	}, e.version = "18.3.1";
})), r = /* @__PURE__ */ t(((e, t) => {
	t.exports = n();
})), i = /* @__PURE__ */ e(r(), 1), a = { exports: {} }, o = {}, s;
function c() {
	if (s) return o;
	s = 1;
	var e = i.default, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = {
		key: !0,
		ref: !0,
		__self: !0,
		__source: !0
	};
	function l(e, n, i) {
		var o, s = {}, l = null, u = null;
		for (o in i !== void 0 && (l = "" + i), n.key !== void 0 && (l = "" + n.key), n.ref !== void 0 && (u = n.ref), n) r.call(n, o) && !c.hasOwnProperty(o) && (s[o] = n[o]);
		if (e && e.defaultProps) for (o in n = e.defaultProps, n) s[o] === void 0 && (s[o] = n[o]);
		return {
			$$typeof: t,
			type: e,
			key: l,
			ref: u,
			props: s,
			_owner: a.current
		};
	}
	return o.Fragment = n, o.jsx = l, o.jsxs = l, o;
}
var l;
function u() {
	return l || (l = 1, a.exports = c()), a.exports;
}
var d = u(), f = {
	color: {
		accent: "#80e0a6",
		interaction: { primary: { rest: "#80e0a6" } },
		text: { label: { hint: {
			0: "#112a31",
			1: "#ffffff"
		} } },
		lineandstroke: {
			strong: "#aeaeb2",
			strongdisabled: { 0: "#aeaeb2" }
		},
		control: { background: { disabled: { 0: "#000000" } } },
		palette: { white: "#ffffff" }
	},
	font: { text: {
		footnote: {
			fontSize: 13,
			fontFamily: "Inter",
			fontWeight: 400,
			letterSpacing: -.08,
			lineHeight: 20
		},
		footnotemedium: {
			fontSize: 13,
			fontFamily: "Inter",
			fontWeight: 500,
			fontStyle: "normal",
			fontStretch: "normal",
			letterSpacing: -.08,
			lineHeight: 20
		},
		subheadline: {
			fontSize: 15,
			fontFamily: "Inter",
			fontWeight: 400,
			letterSpacing: -.24,
			lineHeight: 20
		},
		subheadlinebold: {
			fontSize: 15,
			textDecoration: "none",
			fontFamily: "Inter",
			fontWeight: 600,
			fontStyle: "normal",
			fontStretch: "normal",
			letterSpacing: -.24,
			lineHeight: 20,
			textCase: "none"
		},
		caption: {
			fontSize: 12,
			fontFamily: "Inter",
			fontWeight: 400,
			fontStyle: "normal",
			fontStretch: "normal",
			letterSpacing: 0,
			lineHeight: 16
		},
		captionmedium: {
			fontSize: 12,
			textDecoration: "none",
			fontFamily: "Inter",
			fontWeight: 500,
			fontStyle: "normal",
			fontStretch: "normal",
			letterSpacing: 0,
			lineHeight: 16,
			textCase: "none"
		}
	} },
	effect: {
		interaction: {
			rest3d: {
				radius: 0,
				color: "#00000021",
				offsetX: 0,
				offsetY: -1,
				spread: 0
			},
			pressed3d: {
				radius: 0,
				color: "#00000021",
				offsetX: 0,
				offsetY: -.5,
				spread: 0
			},
			focus3d: {
				0: {
					radius: 0,
					color: "#c6f1d7ff",
					offsetX: 0,
					offsetY: 0,
					spread: 3
				},
				1: {
					radius: 0,
					color: "#00000021",
					offsetX: 0,
					offsetY: -1,
					spread: 0
				}
			},
			focusflat: {
				radius: 0,
				color: "#c6f1d7ff",
				offsetX: 0,
				offsetY: 0,
				spread: 3
			}
		},
		elevation: {
			low: {
				radius: 8,
				color: "#0000000a",
				offsetX: 0,
				offsetY: 4,
				spread: 0
			},
			medium: {
				radius: 24,
				color: "#00000014",
				offsetX: 0,
				offsetY: 8,
				spread: 0
			},
			high: {
				radius: 48,
				color: "#00000033",
				offsetX: 0,
				offsetY: 8,
				spread: 0
			},
			strong: {
				radius: 100,
				color: "#00000033",
				offsetX: 0,
				offsetY: 12,
				spread: 0
			}
		}
	},
	themes: {
		day: {
			ref: {
				palette: {
					brand1: "#80e0a6ff",
					brand2: "#112a31ff",
					brand3: "#ffffffff",
					brand4: "#000000ff",
					grey: "#8e8e93ff",
					red: "#eb4e3dff",
					orange: "#d39834ff",
					yellow: "#d2d546ff",
					green: "#467a5bff",
					mint: "#5ac4bdff",
					teal: "#6a99a9ff",
					cyan: "#7d949bff",
					blue: "#235563ff",
					indigo: "#233988ff",
					purple: "#7c1f76ff",
					pink: "#aa284bff",
					brown: "#9d8563ff"
				},
				opacity: {
					dynamic: {
						"0pc": "#ffffff00",
						ultrathin: "#ffffff33",
						thin: "#ffffff66",
						medium: "#ffffff80",
						thick: "#ffffff8c",
						ultrathick: "#ffffff99",
						tint: "#ffffffcc",
						gigathick: "#ffffffb3"
					},
					white: {
						ultrathin: "#ffffff33",
						thin: "#ffffff59",
						medium: "#ffffff80",
						thick: "#ffffff8c",
						ultrathick: "#ffffff99",
						tint: "#ffffffcc",
						gigathin: "#ffffff0d"
					},
					black: {
						ultrathin: "#0000001a",
						thin: "#00000033",
						medium: "#00000099",
						thick: "#000000b3",
						ultrathick: "#000000cc",
						gigathin: "#0000000d",
						tint: "#000000cc"
					},
					inversed: {
						gigathick: "#000000cc",
						ultrathick: "#00000099",
						thick: "#00000080",
						medium: "#00000066",
						thin: "#0000001f",
						ultrathin: "#00000012",
						"0pc": "#00000000",
						tint: "#000000cc"
					}
				},
				neutral: {
					lvl0: "#ffffffff",
					lvl1: "#f2f2f2ff",
					lvl2: "#e5e5eaff",
					lvl3: "#d1d1d6ff",
					lvl4: "#c7c7ccff",
					lvl5: "#aeaeb2ff",
					whiteforced: "#ffffffff",
					blackforced: "#000000ff",
					lvl0inversed: "#000000ff",
					lvl1inversed: "#1c1c1cff",
					lvl2inversed: "#2c2c2eff",
					lvl3inversed: "#3a3a3cff",
					lvl4inversed: "#48484aff",
					lvl5inversed: "#636366ff"
				},
				special: { brandinteraction: "#112a31ff" }
			},
			fd: {
				main: {
					accent: "#80e0a6ff",
					highlight: "#aa284bff",
					success: "#467a5bff",
					caution: "#d39834ff",
					danger: "#eb4e3dff",
					invisible: "#ffffff03",
					off: "#8e8e93ff"
				},
				bg: {
					container: {
						primary: "#f2f2f2ff",
						secondary: "#ffffffff",
						tertiary: "#f2f2f2ff",
						modifier: { tint: "#ffffffcc" },
						reverse: "#1c1c1cff"
					},
					interac: {
						primary: "#80e0a6ff",
						modifier: {
							hover: "#ffffff59",
							pressed: "#00000033",
							disabled: "#ffffff99"
						},
						danger: "#eb4e3dff",
						secondary: "#e5e5eaff",
						secondaryinversed: "#3a3a3cff"
					},
					cntrl: {
						primary: "#0000001a",
						secondary: "#ffffffff",
						small: "#00000099",
						subtle: "#0000000d",
						modifier: { disabled: "#ffffff99" }
					}
				},
				txt: {
					label: "#112a31ff",
					labelforced: "#112a31ff",
					labelinversedforced: "#ffffffff",
					modifier: {
						secondary: "#ffffff66",
						disabled: "#ffffffb3",
						link: "#00000099",
						hint: "#ffffff80",
						colored: "#00000033",
						linkinversed: "#ffffff33"
					},
					body: "#48484aff",
					link: "#80e0a6ff",
					inversed: "#ffffffff"
				},
				icn: {
					regular: "#112a31ff",
					regularforced: "#112a31ff",
					inversedforced: "#ffffffff",
					modifier: {
						disabled: "#ffffff99",
						hint: "#ffffff66"
					},
					secondary: "#ffffffff"
				},
				stroke: {
					brand: "#112a31ff",
					neutral: "#00000033",
					strong: "#aeaeb2ff",
					color: "#ffffffff"
				},
				material: {
					base: "#0000000d",
					strong: "#000000b3",
					baseinversed: "#ffffff8c",
					subtle: "#0000000d"
				},
				shadow: { strong: "#00000033" }
			}
		},
		night: {
			ref: {
				palette: {
					brand1: "#7febabff",
					brand2: "#15404dff",
					brand3: "#000000ff",
					brand4: "#ffffffff",
					grey: "#98989dff",
					red: "#f25a4aff",
					orange: "#dda340ff",
					yellow: "#dcdf4eff",
					green: "#4fa170ff",
					mint: "#83d1ceff",
					teal: "#72aec2ff",
					cyan: "#82a9b5ff",
					blue: "#277287ff",
					indigo: "#223b94ff",
					purple: "#8a1e83ff",
					pink: "#b8254cff",
					brown: "#a78f6dff"
				},
				opacity: {
					dynamic: {
						"0pc": "#00000000",
						ultrathin: "#0000001a",
						thin: "#0000004d",
						medium: "#00000099",
						thick: "#000000b3",
						ultrathick: "#000000cc",
						tint: "#00000099",
						gigathick: "#000000db"
					},
					white: {
						ultrathin: "#ffffff33",
						thin: "#ffffff59",
						medium: "#ffffff80",
						thick: "#ffffff8c",
						ultrathick: "#ffffff99",
						tint: "#ffffffcc",
						gigathin: "#ffffff0d"
					},
					black: {
						ultrathin: "#0000001a",
						thin: "#00000033",
						medium: "#00000099",
						thick: "#000000b3",
						ultrathick: "#000000cc",
						gigathin: "#0000000d",
						tint: "#000000cc"
					},
					inversed: {
						gigathick: "#ffffffcc",
						ultrathick: "#ffffffb3",
						thick: "#ffffff99",
						medium: "#ffffff66",
						thin: "#ffffff33",
						ultrathin: "#ffffff12",
						"0pc": "#ffffff00",
						tint: "#ffffff99"
					}
				},
				neutral: {
					lvl0: "#000000ff",
					lvl1: "#1c1c1eff",
					lvl2: "#2c2c2eff",
					lvl3: "#3a3a3cff",
					lvl4: "#48484aff",
					lvl5: "#636366ff",
					whiteforced: "#ffffffff",
					blackforced: "#000000ff",
					lvl0inversed: "#ffffffff",
					lvl1inversed: "#f2f2f2ff",
					lvl2inversed: "#e5e5eaff",
					lvl3inversed: "#d1d1d6ff",
					lvl4inversed: "#c7c7ccff",
					lvl5inversed: "#ffffffff"
				},
				special: { brandinteraction: "#efefefff" }
			},
			fd: {
				main: {
					accent: "#7febabff",
					highlight: "#b8254cff",
					success: "#4fa170ff",
					caution: "#dda340ff",
					danger: "#f25a4aff",
					invisible: "#00000003",
					off: "#98989dff"
				},
				bg: {
					container: {
						primary: "#000000ff",
						secondary: "#2c2c2eff",
						tertiary: "#000000ff",
						modifier: { tint: "#00000099" },
						reverse: "#f2f2f2ff"
					},
					interac: {
						primary: "#7febabff",
						modifier: {
							hover: "#ffffff59",
							pressed: "#00000033",
							disabled: "#00000099"
						},
						danger: "#f25a4aff",
						secondary: "#3a3a3cff",
						secondaryinversed: "#d1d1d6ff"
					},
					cntrl: {
						primary: "#ffffff33",
						secondary: "#000000ff",
						small: "#ffffff33",
						subtle: "#ffffff0d",
						modifier: { disabled: "#000000b3" }
					}
				},
				txt: {
					label: "#efefefff",
					labelforced: "#15404dff",
					labelinversedforced: "#ffffffff",
					modifier: {
						secondary: "#0000004d",
						disabled: "#00000099",
						link: "#ffffff33",
						hint: "#0000004d",
						colored: "#ffffff59",
						linkinversed: "#00000099"
					},
					body: "#c7c7ccff",
					link: "#7febabff",
					inversed: "#000000ff"
				},
				icn: {
					regular: "#efefefff",
					regularforced: "#15404dff",
					inversedforced: "#ffffffff",
					modifier: {
						disabled: "#000000b3",
						hint: "#0000004d"
					},
					secondary: "#ffffffff"
				},
				stroke: {
					brand: "#636366ff",
					neutral: "#ffffff33",
					strong: "#636366ff",
					color: "#ffffffff"
				},
				material: {
					base: "#ffffff0d",
					strong: "#ffffff80",
					baseinversed: "#00000033",
					subtle: "#ffffff33"
				},
				shadow: { strong: "#000000cc" }
			}
		}
	},
	density: { standard: {
		ref: {
			spacing: {
				betweencomponent: {
					none: 0,
					s: 4,
					m: 8,
					l: 12,
					xl: 16,
					xxl: 20,
					x3l: 28,
					x4l: 32,
					x5l: 40,
					x6l: 44,
					x7l: 56,
					x8l: 72,
					x9l: 80,
					x10l: 100,
					x11l: 120,
					x12l: 140
				},
				gap: {
					none: 0,
					xs: 2,
					s: 4,
					m: 8,
					l: 12,
					xl: 16,
					xxl: 20,
					x3l: 24,
					x4l: 28,
					x5l: 32
				},
				gapforced: {
					none: 0,
					xxs: 1,
					xs: 2,
					s: 4,
					m: 8,
					l: 12,
					xl: 16,
					xxl: 20,
					x3l: 24,
					x4l: 28,
					x5l: 32,
					x6l: 40,
					x8l: 52,
					x7l: 48
				}
			},
			radius: {
				small: 3,
				medium: 7,
				large: 13,
				none: 0
			}
		},
		fd: { size: {
			controlheight: {
				small: 28,
				medium: 36,
				large: 44
			},
			icn: {
				small: 16,
				medium: 20,
				large: 24,
				mini: 12
			}
		} }
	} },
	typography: {
		title: {
			bigdisplaytitle: {
				fontSize: 62,
				fontWeight: 700,
				letterSpacing: -.5,
				lineHeight: 84
			},
			displaytitle: {
				fontSize: 34,
				textDecoration: "none",
				fontFamily: "Inter",
				fontWeight: 700,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: -.36,
				lineHeight: 44,
				textCase: "none"
			},
			title1: {
				fontSize: 28,
				textDecoration: "none",
				fontFamily: "Inter",
				fontWeight: 700,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 0,
				lineHeight: 36,
				textCase: "none"
			},
			title2: {
				fontSize: 22,
				textDecoration: "none",
				fontFamily: "Inter",
				fontWeight: 700,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 0,
				lineHeight: 28,
				textCase: "none"
			},
			title3: {
				fontSize: 20,
				textDecoration: "none",
				fontFamily: "Inter",
				fontWeight: 700,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 0,
				lineHeight: 24,
				textCase: "none"
			}
		},
		text: {
			headline: {
				fontSize: 17,
				textDecoration: "none",
				fontFamily: "Inter",
				fontWeight: 700,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: -.52,
				lineHeight: 24,
				textCase: "none"
			},
			body: {
				fontSize: 17,
				textDecoration: "none",
				fontFamily: "Inter",
				fontWeight: 400,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: -.41,
				lineHeight: 24,
				paragraphIndent: 0,
				paragraphSpacing: 16,
				textCase: "none"
			},
			bodybold: {
				fontSize: 17,
				textDecoration: "none",
				fontFamily: "Inter",
				fontWeight: 600,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: -.41,
				lineHeight: 24,
				textCase: "none"
			},
			bodymedium: {
				fontSize: 17,
				textDecoration: "none",
				fontFamily: "Inter",
				fontWeight: 500,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: -.41,
				lineHeight: 24,
				paragraphIndent: 0,
				paragraphSpacing: 16,
				textCase: "none"
			},
			bodylink: {
				fontSize: 17,
				textDecoration: "underline",
				fontFamily: "Inter",
				fontWeight: 400,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: -.41,
				lineHeight: 24,
				textCase: "none"
			},
			callout: {
				fontSize: 16,
				textDecoration: "none",
				fontFamily: "Inter",
				fontWeight: 400,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 0,
				lineHeight: 20,
				textCase: "none"
			},
			calloutbold: {
				fontSize: 16,
				textDecoration: "none",
				fontFamily: "Inter",
				fontWeight: 600,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 0,
				lineHeight: 20,
				textCase: "none"
			},
			calloutmedium: {
				fontSize: 16,
				textDecoration: "none",
				fontFamily: "Inter",
				fontWeight: 500,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 0,
				lineHeight: 20,
				textCase: "none"
			},
			footnote: {
				fontSize: 13,
				textDecoration: "none",
				fontFamily: "Inter",
				fontWeight: 400,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: -.08,
				lineHeight: 20,
				textCase: "none"
			},
			footnotelink: {
				fontSize: 13,
				textDecoration: "underline",
				fontFamily: "Inter",
				fontWeight: 400,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: -.08,
				lineHeight: 20,
				textCase: "none"
			},
			footnotebold: {
				fontSize: 13,
				textDecoration: "none",
				fontFamily: "Inter",
				fontWeight: 600,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: -.08,
				lineHeight: 20,
				textCase: "none"
			},
			footnotemedium: {
				fontSize: 13,
				textDecoration: "none",
				fontFamily: "Inter",
				fontWeight: 500,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: -.08,
				lineHeight: 20,
				textCase: "none"
			},
			subheadline: {
				fontSize: 15,
				textDecoration: "none",
				fontFamily: "Inter",
				fontWeight: 400,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: -.24,
				lineHeight: 20,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "none"
			},
			subheadlinemedium: {
				fontSize: 15,
				textDecoration: "none",
				fontFamily: "Inter",
				fontWeight: 500,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: -.24,
				lineHeight: 20,
				textCase: "none"
			},
			caption: {
				fontSize: 12,
				textDecoration: "none",
				fontFamily: "Inter",
				fontWeight: 400,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 0,
				lineHeight: 16,
				textCase: "none"
			},
			captionbold: {
				fontSize: 12,
				textDecoration: "none",
				fontFamily: "Inter",
				fontWeight: 600,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 0,
				lineHeight: 16,
				textCase: "none"
			},
			captionmedium: {
				fontSize: 12,
				textDecoration: "none",
				fontFamily: "Inter",
				fontWeight: 500,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 0,
				lineHeight: 16,
				textCase: "none"
			},
			captionsmall: {
				fontSize: 10,
				textDecoration: "none",
				fontFamily: "Inter",
				fontWeight: 400,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: .07,
				lineHeight: 12,
				textCase: "none"
			},
			captionsmallmedium: {
				fontSize: 10,
				textDecoration: "none",
				fontFamily: "Inter",
				fontWeight: 500,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: .07,
				lineHeight: 12,
				textCase: "none"
			},
			buttonsmall: {
				fontSize: 11,
				textDecoration: "none",
				fontFamily: "Inter",
				fontWeight: 700,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 1,
				lineHeight: 20,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "uppercase"
			},
			buttonmedium: {
				fontSize: 15,
				textDecoration: "none",
				fontFamily: "Inter",
				fontWeight: 600,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 1.5,
				lineHeight: 20,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "uppercase"
			},
			buttonlarge: {
				fontSize: 17,
				textDecoration: "none",
				fontFamily: "Inter",
				fontWeight: 600,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 1.5,
				lineHeight: 20,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "uppercase"
			}
		}
	}
};
//#endregion
//#region ../../node_modules/.pnpm/@ap+design-system@1.7.1_@mui+system@7.3.9_@emotion+react@11.14.0_@types+react@18.3.28_r_345119124a477cdbfd4b44df3888437c/node_modules/@ap/design-system/dist/helpers/index.js
function p(e, t, n) {
	return {
		r: 255 * n(e.r / 255, t.r / 255),
		g: 255 * n(e.g / 255, t.g / 255),
		b: 255 * n(e.b / 255, t.b / 255)
	};
}
function m(e, t) {
	return t;
}
function h(e, t, n) {
	return Math.min(Math.max(e || 0, t), n);
}
function g(e) {
	return {
		r: h(e.r, 0, 255),
		g: h(e.g, 0, 255),
		b: h(e.b, 0, 255),
		a: h(e.a, 0, 1)
	};
}
function _(e) {
	return {
		r: 255 * e.r,
		g: 255 * e.g,
		b: 255 * e.b,
		a: e.a
	};
}
function v(e) {
	return {
		r: e.r / 255,
		g: e.g / 255,
		b: e.b / 255,
		a: e.a
	};
}
function y(e, t) {
	t === void 0 && (t = 0);
	var n = 10 ** t;
	return {
		r: Math.round(e.r * n) / n,
		g: Math.round(e.g * n) / n,
		b: Math.round(e.b * n) / n,
		a: e.a
	};
}
function b(e, t, n, r, i, a) {
	return (1 - t / n) * r + t / n * Math.round((1 - e) * i + e * a);
}
function x(e, t, n, r, i) {
	i === void 0 && (i = {
		unitInput: !1,
		unitOutput: !1,
		roundOutput: !0
	}), i.unitInput && (e = _(e), t = _(t)), e = g(e);
	var a = (t = g(t)).a + e.a - t.a * e.a, o = n(e, t, r), s = g({
		r: b(e.a, t.a, a, e.r, t.r, o.r),
		g: b(e.a, t.a, a, e.g, t.g, o.g),
		b: b(e.a, t.a, a, e.b, t.b, o.b),
		a
	});
	return s = i.unitOutput ? v(s) : i.roundOutput ? y(s) : function(e) {
		return y(e, 9);
	}(s), s;
}
function S(e, t) {
	return x(e, t, p, m);
}
var C = "a-f\\d", w = `#?[${C}]{3}[${C}]?`, T = `#?[${C}]{6}([${C}]{2})?`, E = RegExp(`[^#${C}]`, "gi"), ee = RegExp(`^${w}$|^${T}$`, "i");
function te(e, t = {}) {
	if (typeof e != "string" || E.test(e) || !ee.test(e)) throw TypeError("Expected a valid hex string");
	e = e.replace(/^#/, "");
	let n = 1;
	e.length === 8 && (n = Number.parseInt(e.slice(6, 8), 16) / 255, e = e.slice(0, 6)), e.length === 4 && (n = Number.parseInt(e.slice(3, 4).repeat(2), 16) / 255, e = e.slice(0, 3)), e.length === 3 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]);
	let r = Number.parseInt(e, 16), i = r >> 16, a = r >> 8 & 255, o = r & 255, s = typeof t.alpha == "number" ? t.alpha : n;
	return t.format === "array" ? [
		i,
		a,
		o,
		s
	] : t.format === "css" ? `rgb(${i} ${a} ${o}${s === 1 ? "" : ` / ${Number((s * 100).toFixed(2))}%`})` : {
		red: i,
		green: a,
		blue: o,
		alpha: s
	};
}
var D = (e, t) => {
	let n = te(e), r = te(t), i = S({
		r: n.red,
		g: n.green,
		b: n.blue,
		a: n.alpha
	}, {
		r: r.red,
		g: r.green,
		b: r.blue,
		a: r.alpha
	});
	return `rgba(${i.r}, ${i.g}, ${i.b}, ${i.a})`;
}, ne = (e) => e.palette.mode === "light" ? f.themes.day : f.themes.night, O = (e) => `${e.offsetX}px ${e.offsetY}px ${e.radius}px ${e.spread}px ${e.color}`, re = (e) => `${O(e)} inset`, ie = (e) => ({
	fontFamily: e.fontFamily,
	fontSize: `${e.fontSize}px`,
	fontStretch: e.fontStretch,
	fontStyle: e.fontStyle,
	fontWeight: e.fontWeight,
	letterSpacing: `${e.letterSpacing}px`,
	lineHeight: `${e.lineHeight}px`,
	textTransform: e.textCase,
	textDecoration: e.textDecoration
});
//#endregion
//#region ../../node_modules/.pnpm/@ap+design-system@1.7.1_@mui+system@7.3.9_@emotion+react@11.14.0_@types+react@18.3.28_r_345119124a477cdbfd4b44df3888437c/node_modules/@ap/design-system/dist/_commonjsHelpers-B4e78b8K.js
function k(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function A(e) {
	if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
	var t = e.default;
	if (typeof t == "function") {
		var n = function e() {
			return this instanceof e ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
		};
		n.prototype = t.prototype;
	} else n = {};
	return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(t) {
		var r = Object.getOwnPropertyDescriptor(e, t);
		Object.defineProperty(n, t, r.get ? r : {
			enumerable: !0,
			get: function() {
				return e[t];
			}
		});
	}), n;
}
//#endregion
//#region ../../node_modules/.pnpm/@ap+design-system@1.7.1_@mui+system@7.3.9_@emotion+react@11.14.0_@types+react@18.3.28_r_345119124a477cdbfd4b44df3888437c/node_modules/@ap/design-system/dist/extends-hS2Bh-Yp.js
function j() {
	return j = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, j.apply(null, arguments);
}
//#endregion
//#region ../../node_modules/.pnpm/@ap+design-system@1.7.1_@mui+system@7.3.9_@emotion+react@11.14.0_@types+react@18.3.28_r_345119124a477cdbfd4b44df3888437c/node_modules/@ap/design-system/dist/createTheme-DBk71xX-.js
function M(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
function N(e) {
	if (typeof e != "object" || !e) return !1;
	let t = Object.getPrototypeOf(e);
	return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function ae(e) {
	if (/* @__PURE__ */ i.isValidElement(e) || !N(e)) return e;
	let t = {};
	return Object.keys(e).forEach((n) => {
		t[n] = ae(e[n]);
	}), t;
}
function P(e, t, n = { clone: !0 }) {
	let r = n.clone ? j({}, e) : e;
	return N(e) && N(t) && Object.keys(t).forEach((a) => {
		/* @__PURE__ */ i.isValidElement(t[a]) ? r[a] = t[a] : N(t[a]) && Object.prototype.hasOwnProperty.call(e, a) && N(e[a]) ? r[a] = P(e[a], t[a], n) : n.clone ? r[a] = N(t[a]) ? ae(t[a]) : t[a] : r[a] = t[a];
	}), r;
}
var oe = [
	"values",
	"unit",
	"step"
], se = (e) => {
	let t = Object.keys(e).map((t) => ({
		key: t,
		val: e[t]
	})) || [];
	return t.sort((e, t) => e.val - t.val), t.reduce((e, t) => j({}, e, { [t.key]: t.val }), {});
};
function F(e) {
	let { values: t = {
		xs: 0,
		sm: 600,
		md: 900,
		lg: 1200,
		xl: 1536
	}, unit: n = "px", step: r = 5 } = e, i = M(e, oe), a = se(t), o = Object.keys(a);
	function s(e) {
		return `@media (min-width:${typeof t[e] == "number" ? t[e] : e}${n})`;
	}
	function c(e) {
		return `@media (max-width:${(typeof t[e] == "number" ? t[e] : e) - r / 100}${n})`;
	}
	function l(e, i) {
		let a = o.indexOf(i);
		return `@media (min-width:${typeof t[e] == "number" ? t[e] : e}${n}) and (max-width:${(a !== -1 && typeof t[o[a]] == "number" ? t[o[a]] : i) - r / 100}${n})`;
	}
	function u(e) {
		return o.indexOf(e) + 1 < o.length ? l(e, o[o.indexOf(e) + 1]) : s(e);
	}
	function d(e) {
		let t = o.indexOf(e);
		return t === 0 ? s(o[1]) : t === o.length - 1 ? c(o[t]) : l(e, o[o.indexOf(e) + 1]).replace("@media", "@media not all and");
	}
	return j({
		keys: o,
		values: a,
		up: s,
		down: c,
		between: l,
		only: u,
		not: d,
		unit: n
	}, i);
}
var ce = { borderRadius: 4 };
function le(e, t) {
	return t ? P(e, t, { clone: !1 }) : e;
}
var ue = {
	xs: 0,
	sm: 600,
	md: 900,
	lg: 1200,
	xl: 1536
}, de = {
	keys: [
		"xs",
		"sm",
		"md",
		"lg",
		"xl"
	],
	up: (e) => `@media (min-width:${ue[e]}px)`
};
function I(e, t, n) {
	let r = e.theme || {};
	if (Array.isArray(t)) {
		let e = r.breakpoints || de;
		return t.reduce((r, i, a) => (r[e.up(e.keys[a])] = n(t[a]), r), {});
	}
	if (typeof t == "object") {
		let e = r.breakpoints || de;
		return Object.keys(t).reduce((r, i) => {
			if (Object.keys(e.values || ue).indexOf(i) !== -1) {
				let a = e.up(i);
				r[a] = n(t[i], i);
			} else {
				let e = i;
				r[e] = t[e];
			}
			return r;
		}, {});
	}
	return n(t);
}
function fe(e = {}) {
	return e.keys?.reduce((t, n) => {
		let r = e.up(n);
		return t[r] = {}, t;
	}, {}) || {};
}
function pe(e, t) {
	return e.reduce((e, t) => {
		let n = e[t];
		return (!n || Object.keys(n).length === 0) && delete e[t], e;
	}, t);
}
function me(e) {
	let t = "https://mui.com/production-error/?code=" + e;
	for (let e = 1; e < arguments.length; e += 1) t += "&args[]=" + encodeURIComponent(arguments[e]);
	return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
var he = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
	__proto__: null,
	default: me
}, Symbol.toStringTag, { value: "Module" }));
function L(e) {
	if (typeof e != "string") throw Error(me(7));
	return e.charAt(0).toUpperCase() + e.slice(1);
}
function ge(e, t, n = !0) {
	if (!t || typeof t != "string") return null;
	if (e && e.vars && n) {
		let n = `vars.${t}`.split(".").reduce((e, t) => e && e[t] ? e[t] : null, e);
		if (n != null) return n;
	}
	return t.split(".").reduce((e, t) => e && e[t] != null ? e[t] : null, e);
}
function _e(e, t, n, r = n) {
	let i;
	return i = typeof e == "function" ? e(n) : Array.isArray(e) ? e[n] || r : ge(e, n) || r, t && (i = t(i, r, e)), i;
}
function R(e) {
	let { prop: t, cssProperty: n = e.prop, themeKey: r, transform: i } = e, a = (e) => {
		if (e[t] == null) return null;
		let a = e[t], o = e.theme, s = ge(o, r) || {};
		return I(e, a, (e) => {
			let r = _e(s, i, e);
			return e === r && typeof e == "string" && (r = _e(s, i, `${t}${e === "default" ? "" : L(e)}`, e)), n === !1 ? r : { [n]: r };
		});
	};
	return a.propTypes = {}, a.filterProps = [t], a;
}
function ve(e) {
	let t = {};
	return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
var ye = {
	m: "margin",
	p: "padding"
}, be = {
	t: "Top",
	r: "Right",
	b: "Bottom",
	l: "Left",
	x: ["Left", "Right"],
	y: ["Top", "Bottom"]
}, xe = {
	marginX: "mx",
	marginY: "my",
	paddingX: "px",
	paddingY: "py"
}, Se = ve((e) => {
	if (e.length > 2) if (xe[e]) e = xe[e];
	else return [e];
	let [t, n] = e.split(""), r = ye[t], i = be[n] || "";
	return Array.isArray(i) ? i.map((e) => r + e) : [r + i];
}), Ce = [
	"m",
	"mt",
	"mr",
	"mb",
	"ml",
	"mx",
	"my",
	"margin",
	"marginTop",
	"marginRight",
	"marginBottom",
	"marginLeft",
	"marginX",
	"marginY",
	"marginInline",
	"marginInlineStart",
	"marginInlineEnd",
	"marginBlock",
	"marginBlockStart",
	"marginBlockEnd"
], we = [
	"p",
	"pt",
	"pr",
	"pb",
	"pl",
	"px",
	"py",
	"padding",
	"paddingTop",
	"paddingRight",
	"paddingBottom",
	"paddingLeft",
	"paddingX",
	"paddingY",
	"paddingInline",
	"paddingInlineStart",
	"paddingInlineEnd",
	"paddingBlock",
	"paddingBlockStart",
	"paddingBlockEnd"
];
[...Ce, ...we];
function Te(e, t, n, r) {
	let i = ge(e, t, !1) ?? n;
	return typeof i == "number" ? (e) => typeof e == "string" ? e : i * e : Array.isArray(i) ? (e) => typeof e == "string" ? e : i[e] : typeof i == "function" ? i : () => {};
}
function Ee(e) {
	return Te(e, "spacing", 8, "spacing");
}
function De(e, t) {
	if (typeof t == "string" || t == null) return t;
	let n = e(Math.abs(t));
	return t >= 0 ? n : typeof n == "number" ? -n : `-${n}`;
}
function Oe(e, t) {
	return (n) => e.reduce((e, r) => (e[r] = De(t, n), e), {});
}
function ke(e, t, n, r) {
	if (t.indexOf(n) === -1) return null;
	let i = Oe(Se(n), r), a = e[n];
	return I(e, a, i);
}
function Ae(e, t) {
	let n = Ee(e.theme);
	return Object.keys(e).map((r) => ke(e, t, r, n)).reduce(le, {});
}
function z(e) {
	return Ae(e, Ce);
}
z.propTypes = {}, z.filterProps = Ce;
function B(e) {
	return Ae(e, we);
}
B.propTypes = {}, B.filterProps = we;
function je(e = 8) {
	if (e.mui) return e;
	let t = Ee({ spacing: e }), n = (...e) => (e.length === 0 ? [1] : e).map((e) => {
		let n = t(e);
		return typeof n == "number" ? `${n}px` : n;
	}).join(" ");
	return n.mui = !0, n;
}
function Me(...e) {
	let t = e.reduce((e, t) => (t.filterProps.forEach((n) => {
		e[n] = t;
	}), e), {}), n = (e) => Object.keys(e).reduce((n, r) => t[r] ? le(n, t[r](e)) : n, {});
	return n.propTypes = {}, n.filterProps = e.reduce((e, t) => e.concat(t.filterProps), []), n;
}
function Ne(e) {
	return typeof e == "number" ? `${e}px solid` : e;
}
function Pe(e, t) {
	return R({
		prop: e,
		themeKey: "borders",
		transform: t
	});
}
var Fe = Pe("border", Ne), Ie = Pe("borderTop", Ne), Le = Pe("borderRight", Ne), Re = Pe("borderBottom", Ne), ze = Pe("borderLeft", Ne), Be = Pe("borderColor"), Ve = Pe("borderTopColor"), He = Pe("borderRightColor"), Ue = Pe("borderBottomColor"), We = Pe("borderLeftColor"), Ge = Pe("outline", Ne), Ke = Pe("outlineColor"), qe = (e) => {
	if (e.borderRadius !== void 0 && e.borderRadius !== null) {
		let t = Te(e.theme, "shape.borderRadius", 4, "borderRadius");
		return I(e, e.borderRadius, (e) => ({ borderRadius: De(t, e) }));
	}
	return null;
};
qe.propTypes = {}, qe.filterProps = ["borderRadius"], Me(Fe, Ie, Le, Re, ze, Be, Ve, He, Ue, We, qe, Ge, Ke);
var Je = (e) => {
	if (e.gap !== void 0 && e.gap !== null) {
		let t = Te(e.theme, "spacing", 8, "gap");
		return I(e, e.gap, (e) => ({ gap: De(t, e) }));
	}
	return null;
};
Je.propTypes = {}, Je.filterProps = ["gap"];
var Ye = (e) => {
	if (e.columnGap !== void 0 && e.columnGap !== null) {
		let t = Te(e.theme, "spacing", 8, "columnGap");
		return I(e, e.columnGap, (e) => ({ columnGap: De(t, e) }));
	}
	return null;
};
Ye.propTypes = {}, Ye.filterProps = ["columnGap"];
var Xe = (e) => {
	if (e.rowGap !== void 0 && e.rowGap !== null) {
		let t = Te(e.theme, "spacing", 8, "rowGap");
		return I(e, e.rowGap, (e) => ({ rowGap: De(t, e) }));
	}
	return null;
};
Xe.propTypes = {}, Xe.filterProps = ["rowGap"], Me(Je, Ye, Xe, R({ prop: "gridColumn" }), R({ prop: "gridRow" }), R({ prop: "gridAutoFlow" }), R({ prop: "gridAutoColumns" }), R({ prop: "gridAutoRows" }), R({ prop: "gridTemplateColumns" }), R({ prop: "gridTemplateRows" }), R({ prop: "gridTemplateAreas" }), R({ prop: "gridArea" }));
function Ze(e, t) {
	return t === "grey" ? t : e;
}
Me(R({
	prop: "color",
	themeKey: "palette",
	transform: Ze
}), R({
	prop: "bgcolor",
	cssProperty: "backgroundColor",
	themeKey: "palette",
	transform: Ze
}), R({
	prop: "backgroundColor",
	themeKey: "palette",
	transform: Ze
}));
function V(e) {
	return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
var Qe = R({
	prop: "width",
	transform: V
}), $e = (e) => e.maxWidth !== void 0 && e.maxWidth !== null ? I(e, e.maxWidth, (t) => {
	var n, r;
	let i = ((n = e.theme) == null || (n = n.breakpoints) == null || (n = n.values) == null ? void 0 : n[t]) || ue[t];
	return i ? ((r = e.theme) == null || (r = r.breakpoints) == null ? void 0 : r.unit) === "px" ? { maxWidth: i } : { maxWidth: `${i}${e.theme.breakpoints.unit}` } : { maxWidth: V(t) };
}) : null;
$e.filterProps = ["maxWidth"];
var et = R({
	prop: "minWidth",
	transform: V
}), tt = R({
	prop: "height",
	transform: V
}), nt = R({
	prop: "maxHeight",
	transform: V
}), rt = R({
	prop: "minHeight",
	transform: V
});
R({
	prop: "size",
	cssProperty: "width",
	transform: V
}), R({
	prop: "size",
	cssProperty: "height",
	transform: V
}), Me(Qe, $e, et, tt, nt, rt, R({ prop: "boxSizing" }));
var it = {
	border: {
		themeKey: "borders",
		transform: Ne
	},
	borderTop: {
		themeKey: "borders",
		transform: Ne
	},
	borderRight: {
		themeKey: "borders",
		transform: Ne
	},
	borderBottom: {
		themeKey: "borders",
		transform: Ne
	},
	borderLeft: {
		themeKey: "borders",
		transform: Ne
	},
	borderColor: { themeKey: "palette" },
	borderTopColor: { themeKey: "palette" },
	borderRightColor: { themeKey: "palette" },
	borderBottomColor: { themeKey: "palette" },
	borderLeftColor: { themeKey: "palette" },
	outline: {
		themeKey: "borders",
		transform: Ne
	},
	outlineColor: { themeKey: "palette" },
	borderRadius: {
		themeKey: "shape.borderRadius",
		style: qe
	},
	color: {
		themeKey: "palette",
		transform: Ze
	},
	bgcolor: {
		themeKey: "palette",
		cssProperty: "backgroundColor",
		transform: Ze
	},
	backgroundColor: {
		themeKey: "palette",
		transform: Ze
	},
	p: { style: B },
	pt: { style: B },
	pr: { style: B },
	pb: { style: B },
	pl: { style: B },
	px: { style: B },
	py: { style: B },
	padding: { style: B },
	paddingTop: { style: B },
	paddingRight: { style: B },
	paddingBottom: { style: B },
	paddingLeft: { style: B },
	paddingX: { style: B },
	paddingY: { style: B },
	paddingInline: { style: B },
	paddingInlineStart: { style: B },
	paddingInlineEnd: { style: B },
	paddingBlock: { style: B },
	paddingBlockStart: { style: B },
	paddingBlockEnd: { style: B },
	m: { style: z },
	mt: { style: z },
	mr: { style: z },
	mb: { style: z },
	ml: { style: z },
	mx: { style: z },
	my: { style: z },
	margin: { style: z },
	marginTop: { style: z },
	marginRight: { style: z },
	marginBottom: { style: z },
	marginLeft: { style: z },
	marginX: { style: z },
	marginY: { style: z },
	marginInline: { style: z },
	marginInlineStart: { style: z },
	marginInlineEnd: { style: z },
	marginBlock: { style: z },
	marginBlockStart: { style: z },
	marginBlockEnd: { style: z },
	displayPrint: {
		cssProperty: !1,
		transform: (e) => ({ "@media print": { display: e } })
	},
	display: {},
	overflow: {},
	textOverflow: {},
	visibility: {},
	whiteSpace: {},
	flexBasis: {},
	flexDirection: {},
	flexWrap: {},
	justifyContent: {},
	alignItems: {},
	alignContent: {},
	order: {},
	flex: {},
	flexGrow: {},
	flexShrink: {},
	alignSelf: {},
	justifyItems: {},
	justifySelf: {},
	gap: { style: Je },
	rowGap: { style: Xe },
	columnGap: { style: Ye },
	gridColumn: {},
	gridRow: {},
	gridAutoFlow: {},
	gridAutoColumns: {},
	gridAutoRows: {},
	gridTemplateColumns: {},
	gridTemplateRows: {},
	gridTemplateAreas: {},
	gridArea: {},
	position: {},
	zIndex: { themeKey: "zIndex" },
	top: {},
	right: {},
	bottom: {},
	left: {},
	boxShadow: { themeKey: "shadows" },
	width: { transform: V },
	maxWidth: { style: $e },
	minWidth: { transform: V },
	height: { transform: V },
	maxHeight: { transform: V },
	minHeight: { transform: V },
	boxSizing: {},
	fontFamily: { themeKey: "typography" },
	fontSize: { themeKey: "typography" },
	fontStyle: { themeKey: "typography" },
	fontWeight: { themeKey: "typography" },
	letterSpacing: {},
	textTransform: {},
	lineHeight: {},
	textAlign: {},
	typography: {
		cssProperty: !1,
		themeKey: "typography"
	}
};
function at(...e) {
	let t = e.reduce((e, t) => e.concat(Object.keys(t)), []), n = new Set(t);
	return e.every((e) => n.size === Object.keys(e).length);
}
function ot(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function st() {
	function e(e, t, n, r) {
		let i = {
			[e]: t,
			theme: n
		}, a = r[e];
		if (!a) return { [e]: t };
		let { cssProperty: o = e, themeKey: s, transform: c, style: l } = a;
		if (t == null) return null;
		if (s === "typography" && t === "inherit") return { [e]: t };
		let u = ge(n, s) || {};
		return l ? l(i) : I(i, t, (t) => {
			let n = _e(u, c, t);
			return t === n && typeof t == "string" && (n = _e(u, c, `${e}${t === "default" ? "" : L(t)}`, t)), o === !1 ? n : { [o]: n };
		});
	}
	function t(n) {
		let { sx: r, theme: i = {} } = n || {};
		if (!r) return null;
		let a = i.unstable_sxConfig ?? it;
		function o(n) {
			let r = n;
			if (typeof n == "function") r = n(i);
			else if (typeof n != "object") return n;
			if (!r) return null;
			let o = fe(i.breakpoints), s = Object.keys(o), c = o;
			return Object.keys(r).forEach((n) => {
				let o = ot(r[n], i);
				if (o != null) if (typeof o == "object") if (a[n]) c = le(c, e(n, o, i, a));
				else {
					let e = I({ theme: i }, o, (e) => ({ [n]: e }));
					at(e, o) ? c[n] = t({
						sx: o,
						theme: i
					}) : c = le(c, e);
				}
				else c = le(c, e(n, o, i, a));
			}), pe(s, c);
		}
		return Array.isArray(r) ? r.map(o) : o(r);
	}
	return t;
}
var ct = st();
ct.filterProps = ["sx"];
function lt(e, t) {
	let n = this;
	return n.vars && typeof n.getColorSchemeSelector == "function" ? { [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t } : n.palette.mode === e ? t : {};
}
var ut = [
	"breakpoints",
	"palette",
	"spacing",
	"shape"
];
function dt(e = {}, ...t) {
	let { breakpoints: n = {}, palette: r = {}, spacing: i, shape: a = {} } = e, o = M(e, ut), s = F(n), c = je(i), l = P({
		breakpoints: s,
		direction: "ltr",
		components: {},
		palette: j({ mode: "light" }, r),
		spacing: c,
		shape: j({}, ce, a)
	}, o);
	return l.applyStyles = lt, l = t.reduce((e, t) => P(e, t), l), l.unstable_sxConfig = j({}, it, o?.unstable_sxConfig), l.unstable_sx = function(e) {
		return ct({
			sx: e,
			theme: this
		});
	}, l;
}
var ft = (e) => e, pt = (() => {
	let e = ft;
	return {
		configure(t) {
			e = t;
		},
		generate(t) {
			return e(t);
		},
		reset() {
			e = ft;
		}
	};
})(), mt = {
	active: "active",
	checked: "checked",
	completed: "completed",
	disabled: "disabled",
	error: "error",
	expanded: "expanded",
	focused: "focused",
	focusVisible: "focusVisible",
	open: "open",
	readOnly: "readOnly",
	required: "required",
	selected: "selected"
};
function ht(e, t, n = "Mui") {
	let r = mt[t];
	return r ? `${n}-${r}` : `${pt.generate(e)}-${t}`;
}
function gt(e, t) {
	return j({ toolbar: {
		minHeight: 56,
		[e.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } },
		[e.up("sm")]: { minHeight: 64 }
	} }, t);
}
var H = {}, _t = { exports: {} }, vt;
function yt() {
	return vt || (vt = 1, function(e) {
		function t(e) {
			return e && e.__esModule ? e : { default: e };
		}
		e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
	}(_t)), _t.exports;
}
var bt = /* @__PURE__ */ A(he);
function xt(e, t = -(2 ** 53 - 1), n = 2 ** 53 - 1) {
	return Math.max(t, Math.min(e, n));
}
var St = /* @__PURE__ */ A(/* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
	__proto__: null,
	default: xt
}, Symbol.toStringTag, { value: "Module" }))), Ct;
function wt() {
	if (Ct) return H;
	Ct = 1;
	var e = yt();
	Object.defineProperty(H, "__esModule", { value: !0 }), H.alpha = p, H.blend = x, H.colorChannel = void 0, H.darken = h, H.decomposeColor = o, H.emphasize = y, H.getContrastRatio = f, H.getLuminance = d, H.hexToRgb = i, H.hslToRgb = u, H.lighten = _, H.private_safeAlpha = m, H.private_safeColorChannel = void 0, H.private_safeDarken = g, H.private_safeEmphasize = b, H.private_safeLighten = v, H.recomposeColor = c, H.rgbToHex = l;
	var t = e(bt), n = e(St);
	function r(e, t = 0, r = 1) {
		return (0, n.default)(e, t, r);
	}
	function i(e) {
		e = e.slice(1);
		let t = RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g"), n = e.match(t);
		return n && n[0].length === 1 && (n = n.map((e) => e + e)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((e, t) => t < 3 ? parseInt(e, 16) : Math.round(parseInt(e, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
	}
	function a(e) {
		let t = e.toString(16);
		return t.length === 1 ? `0${t}` : t;
	}
	function o(e) {
		if (e.type) return e;
		if (e.charAt(0) === "#") return o(i(e));
		let n = e.indexOf("("), r = e.substring(0, n);
		if ([
			"rgb",
			"rgba",
			"hsl",
			"hsla",
			"color"
		].indexOf(r) === -1) throw Error((0, t.default)(9, e));
		let a = e.substring(n + 1, e.length - 1), s;
		if (r === "color") {
			if (a = a.split(" "), s = a.shift(), a.length === 4 && a[3].charAt(0) === "/" && (a[3] = a[3].slice(1)), [
				"srgb",
				"display-p3",
				"a98-rgb",
				"prophoto-rgb",
				"rec-2020"
			].indexOf(s) === -1) throw Error((0, t.default)(10, s));
		} else a = a.split(",");
		return a = a.map((e) => parseFloat(e)), {
			type: r,
			values: a,
			colorSpace: s
		};
	}
	let s = (e) => {
		let t = o(e);
		return t.values.slice(0, 3).map((e, n) => t.type.indexOf("hsl") !== -1 && n !== 0 ? `${e}%` : e).join(" ");
	};
	H.colorChannel = s, H.private_safeColorChannel = (e, t) => {
		try {
			return s(e);
		} catch {
			return e;
		}
	};
	function c(e) {
		let { type: t, colorSpace: n } = e, { values: r } = e;
		return t.indexOf("rgb") === -1 ? t.indexOf("hsl") !== -1 && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`) : r = r.map((e, t) => t < 3 ? parseInt(e, 10) : e), r = t.indexOf("color") === -1 ? `${r.join(", ")}` : `${n} ${r.join(" ")}`, `${t}(${r})`;
	}
	function l(e) {
		if (e.indexOf("#") === 0) return e;
		let { values: t } = o(e);
		return `#${t.map((e, t) => a(t === 3 ? Math.round(255 * e) : e)).join("")}`;
	}
	function u(e) {
		e = o(e);
		let { values: t } = e, n = t[0], r = t[1] / 100, i = t[2] / 100, a = r * Math.min(i, 1 - i), s = (e, t = (e + n / 30) % 12) => i - a * Math.max(Math.min(t - 3, 9 - t, 1), -1), l = "rgb", u = [
			Math.round(s(0) * 255),
			Math.round(s(8) * 255),
			Math.round(s(4) * 255)
		];
		return e.type === "hsla" && (l += "a", u.push(t[3])), c({
			type: l,
			values: u
		});
	}
	function d(e) {
		e = o(e);
		let t = e.type === "hsl" || e.type === "hsla" ? o(u(e)).values : e.values;
		return t = t.map((t) => (e.type !== "color" && (t /= 255), t <= .03928 ? t / 12.92 : ((t + .055) / 1.055) ** 2.4)), Number((.2126 * t[0] + .7152 * t[1] + .0722 * t[2]).toFixed(3));
	}
	function f(e, t) {
		let n = d(e), r = d(t);
		return (Math.max(n, r) + .05) / (Math.min(n, r) + .05);
	}
	function p(e, t) {
		return e = o(e), t = r(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, c(e);
	}
	function m(e, t, n) {
		try {
			return p(e, t);
		} catch {
			return e;
		}
	}
	function h(e, t) {
		if (e = o(e), t = r(t), e.type.indexOf("hsl") !== -1) e.values[2] *= 1 - t;
		else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1) for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
		return c(e);
	}
	function g(e, t, n) {
		try {
			return h(e, t);
		} catch {
			return e;
		}
	}
	function _(e, t) {
		if (e = o(e), t = r(t), e.type.indexOf("hsl") !== -1) e.values[2] += (100 - e.values[2]) * t;
		else if (e.type.indexOf("rgb") !== -1) for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
		else if (e.type.indexOf("color") !== -1) for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
		return c(e);
	}
	function v(e, t, n) {
		try {
			return _(e, t);
		} catch {
			return e;
		}
	}
	function y(e, t = .15) {
		return d(e) > .5 ? h(e, t) : _(e, t);
	}
	function b(e, t, n) {
		try {
			return y(e, t);
		} catch {
			return e;
		}
	}
	function x(e, t, n, r = 1) {
		let i = (e, t) => Math.round((e ** (1 / r) * (1 - n) + t ** (1 / r) * n) ** r), a = o(e), s = o(t);
		return c({
			type: "rgb",
			values: [
				i(a.values[0], s.values[0]),
				i(a.values[1], s.values[1]),
				i(a.values[2], s.values[2])
			]
		});
	}
	return H;
}
var Tt = /* @__PURE__ */ wt(), Et = {
	black: "#000",
	white: "#fff"
}, Dt = {
	50: "#fafafa",
	100: "#f5f5f5",
	200: "#eeeeee",
	300: "#e0e0e0",
	400: "#bdbdbd",
	500: "#9e9e9e",
	600: "#757575",
	700: "#616161",
	800: "#424242",
	900: "#212121",
	A100: "#f5f5f5",
	A200: "#eeeeee",
	A400: "#bdbdbd",
	A700: "#616161"
}, Ot = {
	50: "#f3e5f5",
	200: "#ce93d8",
	300: "#ba68c8",
	400: "#ab47bc",
	500: "#9c27b0",
	700: "#7b1fa2"
}, kt = {
	300: "#e57373",
	400: "#ef5350",
	500: "#f44336",
	700: "#d32f2f",
	800: "#c62828"
}, At = {
	300: "#ffb74d",
	400: "#ffa726",
	500: "#ff9800",
	700: "#f57c00",
	900: "#e65100"
}, jt = {
	50: "#e3f2fd",
	200: "#90caf9",
	400: "#42a5f5",
	700: "#1976d2",
	800: "#1565c0"
}, Mt = {
	300: "#4fc3f7",
	400: "#29b6f6",
	500: "#03a9f4",
	700: "#0288d1",
	900: "#01579b"
}, Nt = {
	300: "#81c784",
	400: "#66bb6a",
	500: "#4caf50",
	700: "#388e3c",
	800: "#2e7d32",
	900: "#1b5e20"
}, Pt = [
	"mode",
	"contrastThreshold",
	"tonalOffset"
], Ft = {
	text: {
		primary: "rgba(0, 0, 0, 0.87)",
		secondary: "rgba(0, 0, 0, 0.6)",
		disabled: "rgba(0, 0, 0, 0.38)"
	},
	divider: "rgba(0, 0, 0, 0.12)",
	background: {
		paper: Et.white,
		default: Et.white
	},
	action: {
		active: "rgba(0, 0, 0, 0.54)",
		hover: "rgba(0, 0, 0, 0.04)",
		hoverOpacity: .04,
		selected: "rgba(0, 0, 0, 0.08)",
		selectedOpacity: .08,
		disabled: "rgba(0, 0, 0, 0.26)",
		disabledBackground: "rgba(0, 0, 0, 0.12)",
		disabledOpacity: .38,
		focus: "rgba(0, 0, 0, 0.12)",
		focusOpacity: .12,
		activatedOpacity: .12
	}
}, It = {
	text: {
		primary: Et.white,
		secondary: "rgba(255, 255, 255, 0.7)",
		disabled: "rgba(255, 255, 255, 0.5)",
		icon: "rgba(255, 255, 255, 0.5)"
	},
	divider: "rgba(255, 255, 255, 0.12)",
	background: {
		paper: "#121212",
		default: "#121212"
	},
	action: {
		active: Et.white,
		hover: "rgba(255, 255, 255, 0.08)",
		hoverOpacity: .08,
		selected: "rgba(255, 255, 255, 0.16)",
		selectedOpacity: .16,
		disabled: "rgba(255, 255, 255, 0.3)",
		disabledBackground: "rgba(255, 255, 255, 0.12)",
		disabledOpacity: .38,
		focus: "rgba(255, 255, 255, 0.12)",
		focusOpacity: .12,
		activatedOpacity: .24
	}
};
function Lt(e, t, n, r) {
	let i = r.light || r, a = r.dark || r * 1.5;
	e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = Tt.lighten(e.main, i) : t === "dark" && (e.dark = Tt.darken(e.main, a)));
}
function Rt(e = "light") {
	return e === "dark" ? {
		main: jt[200],
		light: jt[50],
		dark: jt[400]
	} : {
		main: jt[700],
		light: jt[400],
		dark: jt[800]
	};
}
function zt(e = "light") {
	return e === "dark" ? {
		main: Ot[200],
		light: Ot[50],
		dark: Ot[400]
	} : {
		main: Ot[500],
		light: Ot[300],
		dark: Ot[700]
	};
}
function Bt(e = "light") {
	return e === "dark" ? {
		main: kt[500],
		light: kt[300],
		dark: kt[700]
	} : {
		main: kt[700],
		light: kt[400],
		dark: kt[800]
	};
}
function Vt(e = "light") {
	return e === "dark" ? {
		main: Mt[400],
		light: Mt[300],
		dark: Mt[700]
	} : {
		main: Mt[700],
		light: Mt[500],
		dark: Mt[900]
	};
}
function Ht(e = "light") {
	return e === "dark" ? {
		main: Nt[400],
		light: Nt[300],
		dark: Nt[700]
	} : {
		main: Nt[800],
		light: Nt[500],
		dark: Nt[900]
	};
}
function Ut(e = "light") {
	return e === "dark" ? {
		main: At[400],
		light: At[300],
		dark: At[700]
	} : {
		main: "#ed6c02",
		light: At[500],
		dark: At[900]
	};
}
function Wt(e) {
	let { mode: t = "light", contrastThreshold: n = 3, tonalOffset: r = .2 } = e, i = M(e, Pt), a = e.primary || Rt(t), o = e.secondary || zt(t), s = e.error || Bt(t), c = e.info || Vt(t), l = e.success || Ht(t), u = e.warning || Ut(t);
	function d(e) {
		return Tt.getContrastRatio(e, It.text.primary) >= n ? It.text.primary : Ft.text.primary;
	}
	let f = ({ color: e, name: t, mainShade: n = 500, lightShade: i = 300, darkShade: a = 700 }) => {
		if (e = j({}, e), !e.main && e[n] && (e.main = e[n]), !e.hasOwnProperty("main")) throw Error(me(11, t ? ` (${t})` : "", n));
		if (typeof e.main != "string") throw Error(me(12, t ? ` (${t})` : "", JSON.stringify(e.main)));
		return Lt(e, "light", i, r), Lt(e, "dark", a, r), e.contrastText ||= d(e.main), e;
	}, p = {
		dark: It,
		light: Ft
	};
	return P(j({
		common: j({}, Et),
		mode: t,
		primary: f({
			color: a,
			name: "primary"
		}),
		secondary: f({
			color: o,
			name: "secondary",
			mainShade: "A400",
			lightShade: "A200",
			darkShade: "A700"
		}),
		error: f({
			color: s,
			name: "error"
		}),
		warning: f({
			color: u,
			name: "warning"
		}),
		info: f({
			color: c,
			name: "info"
		}),
		success: f({
			color: l,
			name: "success"
		}),
		grey: Dt,
		contrastThreshold: n,
		getContrastText: d,
		augmentColor: f,
		tonalOffset: r
	}, p[t]), i);
}
var Gt = [
	"fontFamily",
	"fontSize",
	"fontWeightLight",
	"fontWeightRegular",
	"fontWeightMedium",
	"fontWeightBold",
	"htmlFontSize",
	"allVariants",
	"pxToRem"
];
function Kt(e) {
	return Math.round(e * 1e5) / 1e5;
}
var qt = { textTransform: "uppercase" }, Jt = "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif";
function Yt(e, t) {
	let n = typeof t == "function" ? t(e) : t, { fontFamily: r = Jt, fontSize: i = 14, fontWeightLight: a = 300, fontWeightRegular: o = 400, fontWeightMedium: s = 500, fontWeightBold: c = 700, htmlFontSize: l = 16, allVariants: u, pxToRem: d } = n, f = M(n, Gt), p = i / 14, m = d || ((e) => `${e / l * p}rem`), h = (e, t, n, i, a) => j({
		fontFamily: r,
		fontWeight: e,
		fontSize: m(t),
		lineHeight: n
	}, r === Jt ? { letterSpacing: `${Kt(i / t)}em` } : {}, a, u), g = {
		h1: h(a, 96, 1.167, -1.5),
		h2: h(a, 60, 1.2, -.5),
		h3: h(o, 48, 1.167, 0),
		h4: h(o, 34, 1.235, .25),
		h5: h(o, 24, 1.334, 0),
		h6: h(s, 20, 1.6, .15),
		subtitle1: h(o, 16, 1.75, .15),
		subtitle2: h(s, 14, 1.57, .1),
		body1: h(o, 16, 1.5, .15),
		body2: h(o, 14, 1.43, .15),
		button: h(s, 14, 1.75, .4, qt),
		caption: h(o, 12, 1.66, .4),
		overline: h(o, 12, 2.66, 1, qt),
		inherit: {
			fontFamily: "inherit",
			fontWeight: "inherit",
			fontSize: "inherit",
			lineHeight: "inherit",
			letterSpacing: "inherit"
		}
	};
	return P(j({
		htmlFontSize: l,
		pxToRem: m,
		fontFamily: r,
		fontSize: i,
		fontWeightLight: a,
		fontWeightRegular: o,
		fontWeightMedium: s,
		fontWeightBold: c
	}, g), f, { clone: !1 });
}
var Xt = .2, Zt = .14, Qt = .12;
function U(...e) {
	return [
		`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Xt})`,
		`${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Zt})`,
		`${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Qt})`
	].join(",");
}
var $t = [
	"none",
	U(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
	U(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
	U(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
	U(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
	U(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
	U(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
	U(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
	U(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
	U(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
	U(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
	U(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
	U(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
	U(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
	U(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
	U(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
	U(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
	U(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
	U(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
	U(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
	U(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
	U(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
	U(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
	U(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
	U(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)
], en = [
	"duration",
	"easing",
	"delay"
], tn = {
	easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
	easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
	easeIn: "cubic-bezier(0.4, 0, 1, 1)",
	sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, nn = {
	shortest: 150,
	shorter: 200,
	short: 250,
	standard: 300,
	complex: 375,
	enteringScreen: 225,
	leavingScreen: 195
};
function rn(e) {
	return `${Math.round(e)}ms`;
}
function an(e) {
	if (!e) return 0;
	let t = e / 36;
	return Math.round((4 + 15 * t ** .25 + t / 5) * 10);
}
function on(e) {
	let t = j({}, tn, e.easing), n = j({}, nn, e.duration);
	return j({
		getAutoHeightDuration: an,
		create: (e = ["all"], r = {}) => {
			let { duration: i = n.standard, easing: a = t.easeInOut, delay: o = 0 } = r;
			return M(r, en), (Array.isArray(e) ? e : [e]).map((e) => `${e} ${typeof i == "string" ? i : rn(i)} ${a} ${typeof o == "string" ? o : rn(o)}`).join(",");
		}
	}, e, {
		easing: t,
		duration: n
	});
}
var sn = {
	mobileStepper: 1e3,
	fab: 1050,
	speedDial: 1050,
	appBar: 1100,
	drawer: 1200,
	modal: 1300,
	snackbar: 1400,
	tooltip: 1500
}, cn = [
	"breakpoints",
	"mixins",
	"spacing",
	"palette",
	"transitions",
	"typography",
	"shape"
];
function ln(e = {}, ...t) {
	let { mixins: n = {}, palette: r = {}, transitions: i = {}, typography: a = {} } = e, o = M(e, cn);
	if (e.vars && e.generateCssVars === void 0) throw Error(me(18));
	let s = Wt(r), c = dt(e), l = P(c, {
		mixins: gt(c.breakpoints, n),
		palette: s,
		shadows: $t.slice(),
		typography: Yt(s, a),
		transitions: on(i),
		zIndex: j({}, sn)
	});
	return l = P(l, o), l = t.reduce((e, t) => P(e, t), l), l.unstable_sxConfig = j({}, it, o?.unstable_sxConfig), l.unstable_sx = function(e) {
		return ct({
			sx: e,
			theme: this
		});
	}, l;
}
//#endregion
//#region ../../node_modules/.pnpm/@ap+design-system@1.7.1_@mui+system@7.3.9_@emotion+react@11.14.0_@types+react@18.3.28_r_345119124a477cdbfd4b44df3888437c/node_modules/@ap/design-system/dist/identifier-DacZrp1H.js
function un(e) {
	if (e.sheet) return e.sheet;
	for (var t = 0; t < document.styleSheets.length; t++) if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function dn(e) {
	var t = document.createElement("style");
	return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var fn = /* @__PURE__ */ function() {
	function e(e) {
		var t = this;
		this._insertTag = function(e) {
			var n = t.tags.length === 0 ? t.insertionPoint ? t.insertionPoint.nextSibling : t.prepend ? t.container.firstChild : t.before : t.tags[t.tags.length - 1].nextSibling;
			t.container.insertBefore(e, n), t.tags.push(e);
		}, this.isSpeedy = e.speedy === void 0 ? !0 : e.speedy, this.tags = [], this.ctr = 0, this.nonce = e.nonce, this.key = e.key, this.container = e.container, this.prepend = e.prepend, this.insertionPoint = e.insertionPoint, this.before = null;
	}
	var t = e.prototype;
	return t.hydrate = function(e) {
		e.forEach(this._insertTag);
	}, t.insert = function(e) {
		this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 && this._insertTag(dn(this));
		var t = this.tags[this.tags.length - 1];
		if (this.isSpeedy) {
			var n = un(t);
			try {
				n.insertRule(e, n.cssRules.length);
			} catch {}
		} else t.appendChild(document.createTextNode(e));
		this.ctr++;
	}, t.flush = function() {
		this.tags.forEach(function(e) {
			return e.parentNode?.removeChild(e);
		}), this.tags = [], this.ctr = 0;
	}, e;
}(), W = "-ms-", pn = "-moz-", G = "-webkit-", mn = "comm", hn = "rule", gn = "decl", _n = "@import", vn = "@keyframes", yn = "@layer", bn = Math.abs, xn = String.fromCharCode, Sn = Object.assign;
function Cn(e, t) {
	return q(e, 0) ^ 45 ? (((t << 2 ^ q(e, 0)) << 2 ^ q(e, 1)) << 2 ^ q(e, 2)) << 2 ^ q(e, 3) : 0;
}
function wn(e) {
	return e.trim();
}
function Tn(e, t) {
	return (e = t.exec(e)) ? e[0] : e;
}
function K(e, t, n) {
	return e.replace(t, n);
}
function En(e, t) {
	return e.indexOf(t);
}
function q(e, t) {
	return e.charCodeAt(t) | 0;
}
function Dn(e, t, n) {
	return e.slice(t, n);
}
function On(e) {
	return e.length;
}
function kn(e) {
	return e.length;
}
function An(e, t) {
	return t.push(e), e;
}
function jn(e, t) {
	return e.map(t).join("");
}
var Mn = 1, Nn = 1, Pn = 0, J = 0, Y = 0, Fn = "";
function In(e, t, n, r, i, a, o) {
	return {
		value: e,
		root: t,
		parent: n,
		type: r,
		props: i,
		children: a,
		line: Mn,
		column: Nn,
		length: o,
		return: ""
	};
}
function Ln(e, t) {
	return Sn(In("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Rn() {
	return Y;
}
function zn() {
	return Y = J > 0 ? q(Fn, --J) : 0, Nn--, Y === 10 && (Nn = 1, Mn--), Y;
}
function X() {
	return Y = J < Pn ? q(Fn, J++) : 0, Nn++, Y === 10 && (Nn = 1, Mn++), Y;
}
function Bn() {
	return q(Fn, J);
}
function Vn() {
	return J;
}
function Hn(e, t) {
	return Dn(Fn, e, t);
}
function Un(e) {
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
function Wn(e) {
	return Mn = Nn = 1, Pn = On(Fn = e), J = 0, [];
}
function Gn(e) {
	return Fn = "", e;
}
function Kn(e) {
	return wn(Hn(J - 1, Yn(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function qn(e) {
	for (; (Y = Bn()) && Y < 33;) X();
	return Un(e) > 2 || Un(Y) > 3 ? "" : " ";
}
function Jn(e, t) {
	for (; --t && X() && !(Y < 48 || Y > 102 || Y > 57 && Y < 65 || Y > 70 && Y < 97););
	return Hn(e, Vn() + (t < 6 && Bn() == 32 && X() == 32));
}
function Yn(e) {
	for (; X();) switch (Y) {
		case e: return J;
		case 34:
		case 39:
			e !== 34 && e !== 39 && Yn(Y);
			break;
		case 40:
			e === 41 && Yn(e);
			break;
		case 92:
			X();
			break;
	}
	return J;
}
function Xn(e, t) {
	for (; X() && e + Y !== 57 && !(e + Y === 84 && Bn() === 47););
	return "/*" + Hn(t, J - 1) + "*" + xn(e === 47 ? e : X());
}
function Zn(e) {
	for (; !Un(Bn());) X();
	return Hn(e, J);
}
function Qn(e) {
	return Gn($n("", null, null, null, [""], e = Wn(e), 0, [0], e));
}
function $n(e, t, n, r, i, a, o, s, c) {
	for (var l = 0, u = 0, d = o, f = 0, p = 0, m = 0, h = 1, g = 1, _ = 1, v = 0, y = "", b = i, x = a, S = r, C = y; g;) switch (m = v, v = X()) {
		case 40: if (m != 108 && q(C, d - 1) == 58) {
			En(C += K(Kn(v), "&", "&\f"), "&\f") != -1 && (_ = -1);
			break;
		}
		case 34:
		case 39:
		case 91:
			C += Kn(v);
			break;
		case 9:
		case 10:
		case 13:
		case 32:
			C += qn(m);
			break;
		case 92:
			C += Jn(Vn() - 1, 7);
			continue;
		case 47:
			switch (Bn()) {
				case 42:
				case 47:
					An(tr(Xn(X(), Vn()), t, n), c);
					break;
				default: C += "/";
			}
			break;
		case 123 * h: s[l++] = On(C) * _;
		case 125 * h:
		case 59:
		case 0:
			switch (v) {
				case 0:
				case 125: g = 0;
				case 59 + u:
					_ == -1 && (C = K(C, /\f/g, "")), p > 0 && On(C) - d && An(p > 32 ? nr(C + ";", r, n, d - 1) : nr(K(C, " ", "") + ";", r, n, d - 2), c);
					break;
				case 59: C += ";";
				default: if (An(S = er(C, t, n, l, u, i, s, y, b = [], x = [], d), a), v === 123) if (u === 0) $n(C, t, S, S, b, a, d, s, x);
				else switch (f === 99 && q(C, 3) === 110 ? 100 : f) {
					case 100:
					case 108:
					case 109:
					case 115:
						$n(e, S, S, r && An(er(e, S, S, 0, 0, i, s, y, i, b = [], d), x), i, x, d, s, r ? b : x);
						break;
					default: $n(C, S, S, S, [""], x, 0, s, x);
				}
			}
			l = u = p = 0, h = _ = 1, y = C = "", d = o;
			break;
		case 58: d = 1 + On(C), p = m;
		default:
			if (h < 1) {
				if (v == 123) --h;
				else if (v == 125 && h++ == 0 && zn() == 125) continue;
			}
			switch (C += xn(v), v * h) {
				case 38:
					_ = u > 0 ? 1 : (C += "\f", -1);
					break;
				case 44:
					s[l++] = (On(C) - 1) * _, _ = 1;
					break;
				case 64:
					Bn() === 45 && (C += Kn(X())), f = Bn(), u = d = On(y = C += Zn(Vn())), v++;
					break;
				case 45: m === 45 && On(C) == 2 && (h = 0);
			}
	}
	return a;
}
function er(e, t, n, r, i, a, o, s, c, l, u) {
	for (var d = i - 1, f = i === 0 ? a : [""], p = kn(f), m = 0, h = 0, g = 0; m < r; ++m) for (var _ = 0, v = Dn(e, d + 1, d = bn(h = o[m])), y = e; _ < p; ++_) (y = wn(h > 0 ? f[_] + " " + v : K(v, /&\f/g, f[_]))) && (c[g++] = y);
	return In(e, t, n, i === 0 ? hn : s, c, l, u);
}
function tr(e, t, n) {
	return In(e, t, n, mn, xn(Rn()), Dn(e, 2, -2), 0);
}
function nr(e, t, n, r) {
	return In(e, t, n, gn, Dn(e, 0, r), Dn(e, r + 1, -1), r);
}
function rr(e, t) {
	for (var n = "", r = kn(e), i = 0; i < r; i++) n += t(e[i], i, e, t) || "";
	return n;
}
function ir(e, t, n, r) {
	switch (e.type) {
		case yn: if (e.children.length) break;
		case _n:
		case gn: return e.return = e.return || e.value;
		case mn: return "";
		case vn: return e.return = e.value + "{" + rr(e.children, r) + "}";
		case hn: e.value = e.props.join(",");
	}
	return On(n = rr(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function ar(e) {
	var t = kn(e);
	return function(n, r, i, a) {
		for (var o = "", s = 0; s < t; s++) o += e[s](n, r, i, a) || "";
		return o;
	};
}
function or(e) {
	return function(t) {
		t.root || (t = t.return) && e(t);
	};
}
function sr(e) {
	var t = /* @__PURE__ */ Object.create(null);
	return function(n) {
		return t[n] === void 0 && (t[n] = e(n)), t[n];
	};
}
var cr = function(e, t, n) {
	for (var r = 0, i = 0; r = i, i = Bn(), r === 38 && i === 12 && (t[n] = 1), !Un(i);) X();
	return Hn(e, J);
}, lr = function(e, t) {
	var n = -1, r = 44;
	do
		switch (Un(r)) {
			case 0:
				r === 38 && Bn() === 12 && (t[n] = 1), e[n] += cr(J - 1, t, n);
				break;
			case 2:
				e[n] += Kn(r);
				break;
			case 4: if (r === 44) {
				e[++n] = Bn() === 58 ? "&\f" : "", t[n] = e[n].length;
				break;
			}
			default: e[n] += xn(r);
		}
	while (r = X());
	return e;
}, ur = function(e, t) {
	return Gn(lr(Wn(e), t));
}, dr = /* @__PURE__ */ new WeakMap(), fr = function(e) {
	if (!(e.type !== "rule" || !e.parent || e.length < 1)) {
		for (var t = e.value, n = e.parent, r = e.column === n.column && e.line === n.line; n.type !== "rule";) if (n = n.parent, !n) return;
		if (!(e.props.length === 1 && t.charCodeAt(0) !== 58 && !dr.get(n)) && !r) {
			dr.set(e, !0);
			for (var i = [], a = ur(t, i), o = n.props, s = 0, c = 0; s < a.length; s++) for (var l = 0; l < o.length; l++, c++) e.props[c] = i[s] ? a[s].replace(/&\f/g, o[l]) : o[l] + " " + a[s];
		}
	}
}, pr = function(e) {
	if (e.type === "decl") {
		var t = e.value;
		t.charCodeAt(0) === 108 && t.charCodeAt(2) === 98 && (e.return = "", e.value = "");
	}
};
function mr(e, t) {
	switch (Cn(e, t)) {
		case 5103: return G + "print-" + e + e;
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
		case 3829: return G + e + e;
		case 5349:
		case 4246:
		case 4810:
		case 6968:
		case 2756: return G + e + pn + e + W + e + e;
		case 6828:
		case 4268: return G + e + W + e + e;
		case 6165: return G + e + W + "flex-" + e + e;
		case 5187: return G + e + K(e, /(\w+).+(:[^]+)/, G + "box-$1$2" + W + "flex-$1$2") + e;
		case 5443: return G + e + W + "flex-item-" + K(e, /flex-|-self/, "") + e;
		case 4675: return G + e + W + "flex-line-pack" + K(e, /align-content|flex-|-self/, "") + e;
		case 5548: return G + e + W + K(e, "shrink", "negative") + e;
		case 5292: return G + e + W + K(e, "basis", "preferred-size") + e;
		case 6060: return G + "box-" + K(e, "-grow", "") + G + e + W + K(e, "grow", "positive") + e;
		case 4554: return G + K(e, /([^-])(transform)/g, "$1" + G + "$2") + e;
		case 6187: return K(K(K(e, /(zoom-|grab)/, G + "$1"), /(image-set)/, G + "$1"), e, "") + e;
		case 5495:
		case 3959: return K(e, /(image-set\([^]*)/, G + "$1$`$1");
		case 4968: return K(K(e, /(.+:)(flex-)?(.*)/, G + "box-pack:$3" + W + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + G + e + e;
		case 4095:
		case 3583:
		case 4068:
		case 2532: return K(e, /(.+)-inline(.+)/, G + "$1$2") + e;
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
			if (On(e) - 1 - t > 6) switch (q(e, t + 1)) {
				case 109: if (q(e, t + 4) !== 45) break;
				case 102: return K(e, /(.+:)(.+)-([^]+)/, "$1" + G + "$2-$3$1" + pn + (q(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
				case 115: return ~En(e, "stretch") ? mr(K(e, "stretch", "fill-available"), t) + e : e;
			}
			break;
		case 4949: if (q(e, t + 1) !== 115) break;
		case 6444:
			switch (q(e, On(e) - 3 - (~En(e, "!important") && 10))) {
				case 107: return K(e, ":", ":" + G) + e;
				case 101: return K(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + G + (q(e, 14) === 45 ? "inline-" : "") + "box$3$1" + G + "$2$3$1" + W + "$2box$3") + e;
			}
			break;
		case 5936:
			switch (q(e, t + 11)) {
				case 114: return G + e + W + K(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
				case 108: return G + e + W + K(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
				case 45: return G + e + W + K(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
			}
			return G + e + W + e + e;
	}
	return e;
}
var hr = [function(e, t, n, r) {
	if (e.length > -1 && !e.return) switch (e.type) {
		case gn:
			e.return = mr(e.value, e.length);
			break;
		case vn: return rr([Ln(e, { value: K(e.value, "@", "@" + G) })], r);
		case hn: if (e.length) return jn(e.props, function(t) {
			switch (Tn(t, /(::plac\w+|:read-\w+)/)) {
				case ":read-only":
				case ":read-write": return rr([Ln(e, { props: [K(t, /:(read-\w+)/, ":" + pn + "$1")] })], r);
				case "::placeholder": return rr([
					Ln(e, { props: [K(t, /:(plac\w+)/, ":" + G + "input-$1")] }),
					Ln(e, { props: [K(t, /:(plac\w+)/, ":" + pn + "$1")] }),
					Ln(e, { props: [K(t, /:(plac\w+)/, W + "input-$1")] })
				], r);
			}
			return "";
		});
	}
}], gr = function(e) {
	var t = e.key;
	if (t === "css") {
		var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
		Array.prototype.forEach.call(n, function(e) {
			e.getAttribute("data-emotion").indexOf(" ") !== -1 && (document.head.appendChild(e), e.setAttribute("data-s", ""));
		});
	}
	var r = e.stylisPlugins || hr, i = {}, a, o = [];
	a = e.container || document.head, Array.prototype.forEach.call(document.querySelectorAll("style[data-emotion^=\"" + t + " \"]"), function(e) {
		for (var t = e.getAttribute("data-emotion").split(" "), n = 1; n < t.length; n++) i[t[n]] = !0;
		o.push(e);
	});
	var s, c = [fr, pr], l, u = [ir, or(function(e) {
		l.insert(e);
	})], d = ar(c.concat(r, u)), f = function(e) {
		return rr(Qn(e), d);
	};
	s = function(e, t, n, r) {
		l = n, f(e ? e + "{" + t.styles + "}" : t.styles), r && (p.inserted[t.name] = !0);
	};
	var p = {
		key: t,
		sheet: new fn({
			key: t,
			container: a,
			nonce: e.nonce,
			speedy: e.speedy,
			prepend: e.prepend,
			insertionPoint: e.insertionPoint
		}),
		nonce: e.nonce,
		inserted: i,
		registered: {},
		insert: s
	};
	return p.sheet.hydrate(o), p;
}, _r = { exports: {} }, Z = {}, vr;
function yr() {
	if (vr) return Z;
	vr = 1;
	var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, _ = e ? Symbol.for("react.responder") : 60118, v = e ? Symbol.for("react.scope") : 60119;
	function y(e) {
		if (typeof e == "object" && e) {
			var f = e.$$typeof;
			switch (f) {
				case t: switch (e = e.type, e) {
					case c:
					case l:
					case r:
					case a:
					case i:
					case d: return e;
					default: switch (e &&= e.$$typeof, e) {
						case s:
						case u:
						case m:
						case p:
						case o: return e;
						default: return f;
					}
				}
				case n: return f;
			}
		}
	}
	function b(e) {
		return y(e) === l;
	}
	return Z.AsyncMode = c, Z.ConcurrentMode = l, Z.ContextConsumer = s, Z.ContextProvider = o, Z.Element = t, Z.ForwardRef = u, Z.Fragment = r, Z.Lazy = m, Z.Memo = p, Z.Portal = n, Z.Profiler = a, Z.StrictMode = i, Z.Suspense = d, Z.isAsyncMode = function(e) {
		return b(e) || y(e) === c;
	}, Z.isConcurrentMode = b, Z.isContextConsumer = function(e) {
		return y(e) === s;
	}, Z.isContextProvider = function(e) {
		return y(e) === o;
	}, Z.isElement = function(e) {
		return typeof e == "object" && !!e && e.$$typeof === t;
	}, Z.isForwardRef = function(e) {
		return y(e) === u;
	}, Z.isFragment = function(e) {
		return y(e) === r;
	}, Z.isLazy = function(e) {
		return y(e) === m;
	}, Z.isMemo = function(e) {
		return y(e) === p;
	}, Z.isPortal = function(e) {
		return y(e) === n;
	}, Z.isProfiler = function(e) {
		return y(e) === a;
	}, Z.isStrictMode = function(e) {
		return y(e) === i;
	}, Z.isSuspense = function(e) {
		return y(e) === d;
	}, Z.isValidElementType = function(e) {
		return typeof e == "string" || typeof e == "function" || e === r || e === l || e === a || e === i || e === d || e === f || typeof e == "object" && !!e && (e.$$typeof === m || e.$$typeof === p || e.$$typeof === o || e.$$typeof === s || e.$$typeof === u || e.$$typeof === g || e.$$typeof === _ || e.$$typeof === v || e.$$typeof === h);
	}, Z.typeOf = y, Z;
}
var br;
function xr() {
	return br || (br = 1, _r.exports = yr()), _r.exports;
}
var Sr, Cr;
function wr() {
	if (Cr) return Sr;
	Cr = 1;
	var e = xr(), t = {
		childContextTypes: !0,
		contextType: !0,
		contextTypes: !0,
		defaultProps: !0,
		displayName: !0,
		getDefaultProps: !0,
		getDerivedStateFromError: !0,
		getDerivedStateFromProps: !0,
		mixins: !0,
		propTypes: !0,
		type: !0
	}, n = {
		name: !0,
		length: !0,
		prototype: !0,
		caller: !0,
		callee: !0,
		arguments: !0,
		arity: !0
	}, r = {
		$$typeof: !0,
		render: !0,
		defaultProps: !0,
		displayName: !0,
		propTypes: !0
	}, i = {
		$$typeof: !0,
		compare: !0,
		defaultProps: !0,
		displayName: !0,
		propTypes: !0,
		type: !0
	}, a = {};
	a[e.ForwardRef] = r, a[e.Memo] = i;
	function o(n) {
		return e.isMemo(n) ? i : a[n.$$typeof] || t;
	}
	var s = Object.defineProperty, c = Object.getOwnPropertyNames, l = Object.getOwnPropertySymbols, u = Object.getOwnPropertyDescriptor, d = Object.getPrototypeOf, f = Object.prototype;
	function p(e, t, r) {
		if (typeof t != "string") {
			if (f) {
				var i = d(t);
				i && i !== f && p(e, i, r);
			}
			var a = c(t);
			l && (a = a.concat(l(t)));
			for (var m = o(e), h = o(t), g = 0; g < a.length; ++g) {
				var _ = a[g];
				if (!n[_] && !(r && r[_]) && !(h && h[_]) && !(m && m[_])) {
					var v = u(t, _);
					try {
						s(e, _, v);
					} catch {}
				}
			}
		}
		return e;
	}
	return Sr = p, Sr;
}
wr();
var Tr = !0;
function Er(e, t, n) {
	var r = "";
	return n.split(" ").forEach(function(n) {
		e[n] === void 0 ? n && (r += n + " ") : t.push(e[n] + ";");
	}), r;
}
var Dr = function(e, t, n) {
	var r = e.key + "-" + t.name;
	(n === !1 || Tr === !1) && e.registered[r] === void 0 && (e.registered[r] = t.styles);
}, Or = function(e, t, n) {
	Dr(e, t, n);
	var r = e.key + "-" + t.name;
	if (e.inserted[t.name] === void 0) {
		var i = t;
		do
			e.insert(t === i ? "." + r : "", i, e.sheet, !0), i = i.next;
		while (i !== void 0);
	}
};
function kr(e) {
	for (var t = 0, n, r = 0, i = e.length; i >= 4; ++r, i -= 4) n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= n >>> 24, t = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
	switch (i) {
		case 3: t ^= (e.charCodeAt(r + 2) & 255) << 16;
		case 2: t ^= (e.charCodeAt(r + 1) & 255) << 8;
		case 1: t ^= e.charCodeAt(r) & 255, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
	}
	return t ^= t >>> 13, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var Ar = {
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
}, jr = /[A-Z]|^ms/g, Mr = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Nr = function(e) {
	return e.charCodeAt(1) === 45;
}, Pr = function(e) {
	return e != null && typeof e != "boolean";
}, Fr = /* @__PURE__ */ sr(function(e) {
	return Nr(e) ? e : e.replace(jr, "-$&").toLowerCase();
}), Ir = function(e, t) {
	switch (e) {
		case "animation":
		case "animationName": if (typeof t == "string") return t.replace(Mr, function(e, t, n) {
			return Br = {
				name: t,
				styles: n,
				next: Br
			}, t;
		});
	}
	return Ar[e] !== 1 && !Nr(e) && typeof t == "number" && t !== 0 ? t + "px" : t;
};
function Lr(e, t, n) {
	if (n == null) return "";
	var r = n;
	if (r.__emotion_styles !== void 0) return r;
	switch (typeof n) {
		case "boolean": return "";
		case "object":
			var i = n;
			if (i.anim === 1) return Br = {
				name: i.name,
				styles: i.styles,
				next: Br
			}, i.name;
			var a = n;
			if (a.styles !== void 0) {
				var o = a.next;
				if (o !== void 0) for (; o !== void 0;) Br = {
					name: o.name,
					styles: o.styles,
					next: Br
				}, o = o.next;
				return a.styles + ";";
			}
			return Rr(e, t, n);
		case "function":
			if (e !== void 0) {
				var s = Br, c = n(e);
				return Br = s, Lr(e, t, c);
			}
			break;
	}
	var l = n;
	if (t == null) return l;
	var u = t[l];
	return u === void 0 ? l : u;
}
function Rr(e, t, n) {
	var r = "";
	if (Array.isArray(n)) for (var i = 0; i < n.length; i++) r += Lr(e, t, n[i]) + ";";
	else for (var a in n) {
		var o = n[a];
		if (typeof o != "object") {
			var s = o;
			t != null && t[s] !== void 0 ? r += a + "{" + t[s] + "}" : Pr(s) && (r += Fr(a) + ":" + Ir(a, s) + ";");
		} else if (Array.isArray(o) && typeof o[0] == "string" && (t == null || t[o[0]] === void 0)) for (var c = 0; c < o.length; c++) Pr(o[c]) && (r += Fr(a) + ":" + Ir(a, o[c]) + ";");
		else {
			var l = Lr(e, t, o);
			switch (a) {
				case "animation":
				case "animationName":
					r += Fr(a) + ":" + l + ";";
					break;
				default: r += a + "{" + l + "}";
			}
		}
	}
	return r;
}
var zr = /label:\s*([^\s;{]+)\s*(;|$)/g, Br;
function Vr(e, t, n) {
	if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0) return e[0];
	var r = !0, i = "";
	Br = void 0;
	var a = e[0];
	a == null || a.raw === void 0 ? (r = !1, i += Lr(n, t, a)) : i += a[0];
	for (var o = 1; o < e.length; o++) i += Lr(n, t, e[o]), r && (i += a[o]);
	zr.lastIndex = 0;
	for (var s = "", c; (c = zr.exec(i)) !== null;) s += "-" + c[1];
	return {
		name: kr(i) + s,
		styles: i,
		next: Br
	};
}
var Hr = function(e) {
	return e();
}, Ur = i.useInsertionEffect ? i.useInsertionEffect : !1, Wr = Ur || Hr, Gr = Ur || i.useLayoutEffect, Kr = /* @__PURE__ */ i.createContext(typeof HTMLElement < "u" ? /* @__PURE__ */ gr({ key: "css" }) : null), qr = Kr.Provider, Jr = function(e) {
	return /* @__PURE__ */ (0, i.forwardRef)(function(t, n) {
		return e(t, (0, i.useContext)(Kr), n);
	});
}, Yr = /* @__PURE__ */ i.createContext({}), Xr = {}.hasOwnProperty, Zr = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Qr = function(e, t) {
	var n = {};
	for (var r in t) Xr.call(t, r) && (n[r] = t[r]);
	return n[Zr] = e, n;
}, $r = function(e) {
	var t = e.cache, n = e.serialized, r = e.isStringTag;
	return Dr(t, n, r), Wr(function() {
		return Or(t, n, r);
	}), null;
}, ei = /* @__PURE__ */ Jr(function(e, t, n) {
	var r = e.css;
	typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
	var a = e[Zr], o = [r], s = "";
	typeof e.className == "string" ? s = Er(t.registered, o, e.className) : e.className != null && (s = e.className + " ");
	var c = Vr(o, void 0, i.useContext(Yr));
	s += t.key + "-" + c.name;
	var l = {};
	for (var u in e) Xr.call(e, u) && u !== "css" && u !== Zr && (l[u] = e[u]);
	return l.className = s, n && (l.ref = n), /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement($r, {
		cache: t,
		serialized: c,
		isStringTag: typeof a == "string"
	}), /* @__PURE__ */ i.createElement(a, l));
}), ti = function(e, t) {
	var n = arguments;
	if (t == null || !Xr.call(t, "css")) return i.createElement.apply(void 0, n);
	var r = n.length, a = Array(r);
	a[0] = ei, a[1] = Qr(e, t);
	for (var o = 2; o < r; o++) a[o] = n[o];
	return i.createElement.apply(null, a);
};
(function(e) {
	var t;
	t ||= e.JSX ||= {};
})(ti ||= {});
var ni = /* @__PURE__ */ Jr(function(e, t) {
	var n = e.styles, r = Vr([n], void 0, i.useContext(Yr)), a = i.useRef();
	return Gr(function() {
		var e = t.key + "-global", n = new t.sheet.constructor({
			key: e,
			nonce: t.sheet.nonce,
			container: t.sheet.container,
			speedy: t.sheet.isSpeedy
		}), i = !1, o = document.querySelector("style[data-emotion=\"" + e + " " + r.name + "\"]");
		return t.sheet.tags.length && (n.before = t.sheet.tags[0]), o !== null && (i = !0, o.setAttribute("data-emotion", e), n.hydrate([o])), a.current = [n, i], function() {
			n.flush();
		};
	}, [t]), Gr(function() {
		var e = a.current, n = e[0];
		if (e[1]) {
			e[1] = !1;
			return;
		}
		r.next !== void 0 && Or(t, r.next, !0), n.tags.length && (n.before = n.tags[n.tags.length - 1].nextElementSibling, n.flush()), t.insert("", r, n, !1);
	}, [t, r.name]), null;
});
function ri() {
	return Vr([...arguments]);
}
function ii() {
	var e = ri.apply(void 0, arguments), t = "animation-" + e.name;
	return {
		name: t,
		styles: "@keyframes " + t + "{" + e.styles + "}",
		anim: 1,
		toString: function() {
			return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
		}
	};
}
var ai;
typeof document == "object" && (ai = gr({
	key: "css",
	prepend: !0
}));
function oi(e) {
	let { injectFirst: t, children: n } = e;
	return t && ai ? /* @__PURE__ */ d.jsx(qr, {
		value: ai,
		children: n
	}) : n;
}
function si(e) {
	return e == null || Object.keys(e).length === 0;
}
function ci(e) {
	let { styles: t, defaultTheme: n = {} } = e, r = typeof t == "function" ? (e) => t(si(e) ? n : e) : t;
	return /* @__PURE__ */ d.jsx(ni, { styles: r });
}
var li = ln(), ui = "$$material", di = { exports: {} }, Q = {}, fi;
function pi() {
	if (fi) return Q;
	fi = 1;
	var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), o = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), f = Symbol.for("react.view_transition"), p = Symbol.for("react.client.reference");
	function m(p) {
		if (typeof p == "object" && p) {
			var m = p.$$typeof;
			switch (m) {
				case e: switch (p = p.type, p) {
					case n:
					case i:
					case r:
					case c:
					case l:
					case f: return p;
					default: switch (p &&= p.$$typeof, p) {
						case o:
						case s:
						case d:
						case u: return p;
						case a: return p;
						default: return m;
					}
				}
				case t: return m;
			}
		}
	}
	return Q.ContextConsumer = a, Q.ContextProvider = o, Q.Element = e, Q.ForwardRef = s, Q.Fragment = n, Q.Lazy = d, Q.Memo = u, Q.Portal = t, Q.Profiler = i, Q.StrictMode = r, Q.Suspense = c, Q.SuspenseList = l, Q.isContextConsumer = function(e) {
		return m(e) === a;
	}, Q.isContextProvider = function(e) {
		return m(e) === o;
	}, Q.isElement = function(t) {
		return typeof t == "object" && !!t && t.$$typeof === e;
	}, Q.isForwardRef = function(e) {
		return m(e) === s;
	}, Q.isFragment = function(e) {
		return m(e) === n;
	}, Q.isLazy = function(e) {
		return m(e) === d;
	}, Q.isMemo = function(e) {
		return m(e) === u;
	}, Q.isPortal = function(e) {
		return m(e) === t;
	}, Q.isProfiler = function(e) {
		return m(e) === i;
	}, Q.isStrictMode = function(e) {
		return m(e) === r;
	}, Q.isSuspense = function(e) {
		return m(e) === c;
	}, Q.isSuspenseList = function(e) {
		return m(e) === l;
	}, Q.isValidElementType = function(e) {
		return typeof e == "string" || typeof e == "function" || e === n || e === i || e === r || e === c || e === l || typeof e == "object" && !!e && (e.$$typeof === d || e.$$typeof === u || e.$$typeof === o || e.$$typeof === a || e.$$typeof === s || e.$$typeof === p || e.getModuleId !== void 0);
	}, Q.typeOf = m, Q;
}
var mi;
function hi() {
	return mi || (mi = 1, di.exports = /* @__PURE__ */ pi()), di.exports;
}
var gi = /* @__PURE__ */ hi(), _i = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
	__proto__: null,
	default: P,
	isPlainObject: N
}, Symbol.toStringTag, { value: "Module" })), vi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
	__proto__: null,
	default: L
}, Symbol.toStringTag, { value: "Module" })), yi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
	__proto__: null,
	default: dt,
	private_createBreakpoints: F,
	unstable_applyStyles: lt
}, Symbol.toStringTag, { value: "Module" })), bi = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, xi = /* @__PURE__ */ sr(function(e) {
	return bi.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
}), Si = function(e) {
	return e !== "theme";
}, Ci = function(e) {
	return typeof e == "string" && e.charCodeAt(0) > 96 ? xi : Si;
}, wi = function(e, t, n) {
	var r;
	if (t) {
		var i = t.shouldForwardProp;
		r = e.__emotion_forwardProp && i ? function(t) {
			return e.__emotion_forwardProp(t) && i(t);
		} : i;
	}
	return typeof r != "function" && n && (r = e.__emotion_forwardProp), r;
}, Ti = function(e) {
	var t = e.cache, n = e.serialized, r = e.isStringTag;
	return Dr(t, n, r), Wr(function() {
		return Or(t, n, r);
	}), null;
}, Ei = function e(t, n) {
	var r = t.__emotion_real === t, a = r && t.__emotion_base || t, o, s;
	n !== void 0 && (o = n.label, s = n.target);
	var c = wi(t, n, r), l = c || Ci(a), u = !l("as");
	return function() {
		var d = arguments, f = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
		if (o !== void 0 && f.push("label:" + o + ";"), d[0] == null || d[0].raw === void 0) f.push.apply(f, d);
		else {
			var p = d[0];
			f.push(p[0]);
			for (var m = d.length, h = 1; h < m; h++) f.push(d[h], p[h]);
		}
		var g = Jr(function(e, t, n) {
			var r = u && e.as || a, o = "", d = [], p = e;
			if (e.theme == null) {
				for (var m in p = {}, e) p[m] = e[m];
				p.theme = i.useContext(Yr);
			}
			typeof e.className == "string" ? o = Er(t.registered, d, e.className) : e.className != null && (o = e.className + " ");
			var h = Vr(f.concat(d), t.registered, p);
			o += t.key + "-" + h.name, s !== void 0 && (o += " " + s);
			var g = u && c === void 0 ? Ci(r) : l, _ = {};
			for (var v in e) u && v === "as" || g(v) && (_[v] = e[v]);
			return _.className = o, n && (_.ref = n), /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Ti, {
				cache: t,
				serialized: h,
				isStringTag: typeof r == "string"
			}), /* @__PURE__ */ i.createElement(r, _));
		});
		return g.displayName = o === void 0 ? "Styled(" + (typeof a == "string" ? a : a.displayName || a.name || "Component") + ")" : o, g.defaultProps = t.defaultProps, g.__emotion_real = g, g.__emotion_base = a, g.__emotion_styles = f, g.__emotion_forwardProp = c, Object.defineProperty(g, "toString", { value: function() {
			return "." + s;
		} }), g.withComponent = function(t, r) {
			return e(t, j({}, n, r, { shouldForwardProp: wi(g, r, !0) })).apply(void 0, f);
		}, g;
	};
}, Di = /* @__PURE__ */ "a.abbr.address.area.article.aside.audio.b.base.bdi.bdo.big.blockquote.body.br.button.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.keygen.label.legend.li.link.main.map.mark.marquee.menu.menuitem.meta.meter.nav.noscript.object.ol.optgroup.option.output.p.param.picture.pre.progress.q.rp.rt.ruby.s.samp.script.section.select.small.source.span.strong.style.sub.summary.sup.table.tbody.td.textarea.tfoot.th.thead.time.title.tr.track.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.foreignObject.g.image.line.linearGradient.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.text.tspan".split("."), Oi = Ei.bind(null);
Di.forEach(function(e) {
	Oi[e] = Oi(e);
});
function ki(e, t) {
	return Oi(e, t);
}
var Ai = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
	__proto__: null,
	GlobalStyles: ci,
	StyledEngineProvider: oi,
	ThemeContext: Yr,
	css: ri,
	default: ki,
	internal_processStyles: (e, t) => {
		Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
	},
	keyframes: ii
}, Symbol.toStringTag, { value: "Module" })), ji = ["sx"], Mi = (e) => {
	var t;
	let n = {
		systemProps: {},
		otherProps: {}
	}, r = (e == null || (t = e.theme) == null ? void 0 : t.unstable_sxConfig) ?? it;
	return Object.keys(e).forEach((t) => {
		r[t] ? n.systemProps[t] = e[t] : n.otherProps[t] = e[t];
	}), n;
};
function Ni(e) {
	let { sx: t } = e, { systemProps: n, otherProps: r } = Mi(M(e, ji)), i;
	return i = Array.isArray(t) ? [n, ...t] : typeof t == "function" ? (...e) => {
		let r = t(...e);
		return N(r) ? j({}, n, r) : n;
	} : j({}, n, t), j({}, r, { sx: i });
}
var Pi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
	__proto__: null,
	default: ct,
	extendSxProp: Ni,
	unstable_createStyleFunctionSx: st,
	unstable_defaultSxConfig: it
}, Symbol.toStringTag, { value: "Module" })), Fi = {}, Ii = { exports: {} }, Li;
function Ri() {
	return Li || (Li = 1, function(e) {
		function t() {
			return e.exports = t = Object.assign ? Object.assign.bind() : function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
				}
				return e;
			}, e.exports.__esModule = !0, e.exports.default = e.exports, t.apply(null, arguments);
		}
		e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
	}(Ii)), Ii.exports;
}
var zi = { exports: {} }, Bi;
function Vi() {
	return Bi || (Bi = 1, function(e) {
		function t(e, t) {
			if (e == null) return {};
			var n = {};
			for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
				if (t.indexOf(r) !== -1) continue;
				n[r] = e[r];
			}
			return n;
		}
		e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
	}(zi)), zi.exports;
}
var Hi = /* @__PURE__ */ A(Ai), Ui = /* @__PURE__ */ A(_i), Wi = /* @__PURE__ */ A(vi), Gi = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function Ki(e) {
	let t = `${e}`.match(Gi);
	return t && t[1] || "";
}
function qi(e, t = "") {
	return e.displayName || e.name || Ki(e) || t;
}
function Ji(e, t, n) {
	let r = qi(t);
	return e.displayName || (r === "" ? n : `${n}(${r})`);
}
function Yi(e) {
	if (e != null) {
		if (typeof e == "string") return e;
		if (typeof e == "function") return qi(e, "Component");
		if (typeof e == "object") switch (e.$$typeof) {
			case gi.ForwardRef: return Ji(e, e.render, "ForwardRef");
			case gi.Memo: return Ji(e, e.type, "memo");
			default: return;
		}
	}
}
var Xi = /* @__PURE__ */ A(/* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
	__proto__: null,
	default: Yi,
	getFunctionName: Ki
}, Symbol.toStringTag, { value: "Module" }))), Zi = /* @__PURE__ */ A(yi), Qi = /* @__PURE__ */ A(Pi), $i;
function ea() {
	if ($i) return Fi;
	$i = 1;
	var e = yt();
	Object.defineProperty(Fi, "__esModule", { value: !0 }), Fi.default = b, Fi.shouldForwardProp = m, Fi.systemDefaultTheme = void 0;
	var t = e(Ri()), n = e(Vi()), r = d(Hi), i = Ui;
	e(Wi), e(Xi);
	var a = e(Zi), o = e(Qi);
	let s = ["ownerState"], c = ["variants"], l = [
		"name",
		"slot",
		"skipVariantsResolver",
		"skipSx",
		"overridesResolver"
	];
	function u(e) {
		if (typeof WeakMap != "function") return null;
		var t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
		return (u = function(e) {
			return e ? n : t;
		})(e);
	}
	function d(e, t) {
		if (e && e.__esModule) return e;
		if (e === null || typeof e != "object" && typeof e != "function") return { default: e };
		var n = u(t);
		if (n && n.has(e)) return n.get(e);
		var r = { __proto__: null }, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
		for (var a in e) if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
			var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
			o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a];
		}
		return r.default = e, n && n.set(e, r), r;
	}
	function f(e) {
		return Object.keys(e).length === 0;
	}
	function p(e) {
		return typeof e == "string" && e.charCodeAt(0) > 96;
	}
	function m(e) {
		return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
	}
	let h = Fi.systemDefaultTheme = (0, a.default)(), g = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
	function _({ defaultTheme: e, theme: t, themeId: n }) {
		return f(t) ? e : t[n] || t;
	}
	function v(e) {
		return e ? (t, n) => n[e] : null;
	}
	function y(e, r) {
		let { ownerState: i } = r, a = (0, n.default)(r, s), o = typeof e == "function" ? e((0, t.default)({ ownerState: i }, a)) : e;
		if (Array.isArray(o)) return o.flatMap((e) => y(e, (0, t.default)({ ownerState: i }, a)));
		if (o && typeof o == "object" && Array.isArray(o.variants)) {
			let { variants: e = [] } = o, r = (0, n.default)(o, c);
			return e.forEach((e) => {
				let n = !0;
				typeof e.props == "function" ? n = e.props((0, t.default)({ ownerState: i }, a, i)) : Object.keys(e.props).forEach((t) => {
					i?.[t] !== e.props[t] && a[t] !== e.props[t] && (n = !1);
				}), n && (Array.isArray(r) || (r = [r]), r.push(typeof e.style == "function" ? e.style((0, t.default)({ ownerState: i }, a, i)) : e.style));
			}), r;
		}
		return o;
	}
	function b(e = {}) {
		let { themeId: a, defaultTheme: s = h, rootShouldForwardProp: c = m, slotShouldForwardProp: u = m } = e, d = (e) => (0, o.default)((0, t.default)({}, e, { theme: _((0, t.default)({}, e, {
			defaultTheme: s,
			themeId: a
		})) }));
		return d.__mui_systemSx = !0, (e, o = {}) => {
			(0, r.internal_processStyles)(e, (e) => e.filter((e) => !(e != null && e.__mui_systemSx)));
			let { name: f, slot: h, skipVariantsResolver: b, skipSx: x, overridesResolver: S = v(g(h)) } = o, C = (0, n.default)(o, l), w = b === void 0 ? h && h !== "Root" && h !== "root" || !1 : b, T = x || !1, E = m;
			h === "Root" || h === "root" ? E = c : h ? E = u : p(e) && (E = void 0);
			let ee = (0, r.default)(e, (0, t.default)({
				shouldForwardProp: E,
				label: void 0
			}, C)), te = (e) => typeof e == "function" && e.__emotion_real !== e || (0, i.isPlainObject)(e) ? (n) => y(e, (0, t.default)({}, n, { theme: _({
				theme: n.theme,
				defaultTheme: s,
				themeId: a
			}) })) : e, D = (n, ...r) => {
				let i = te(n), o = r ? r.map(te) : [];
				f && S && o.push((e) => {
					let n = _((0, t.default)({}, e, {
						defaultTheme: s,
						themeId: a
					}));
					if (!n.components || !n.components[f] || !n.components[f].styleOverrides) return null;
					let r = n.components[f].styleOverrides, i = {};
					return Object.entries(r).forEach(([r, a]) => {
						i[r] = y(a, (0, t.default)({}, e, { theme: n }));
					}), S(e, i);
				}), f && !w && o.push((e) => {
					var n;
					let r = _((0, t.default)({}, e, {
						defaultTheme: s,
						themeId: a
					}));
					return y({ variants: r == null || (n = r.components) == null || (n = n[f]) == null ? void 0 : n.variants }, (0, t.default)({}, e, { theme: r }));
				}), T || o.push(d);
				let c = o.length - r.length;
				if (Array.isArray(n) && c > 0) {
					let e = Array(c).fill("");
					i = [...n, ...e], i.raw = [...n.raw, ...e];
				}
				let l = ee(i, ...o);
				return e.muiName && (l.muiName = e.muiName), l;
			};
			return ee.withConfig && (D.withConfig = ee.withConfig), D;
		};
	}
	return Fi;
}
var ta = /* @__PURE__ */ k(/* @__PURE__ */ ea());
function na(e) {
	return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
var ra = (e) => na(e) && e !== "classes", ia = ta({
	themeId: ui,
	defaultTheme: li,
	rootShouldForwardProp: ra
});
//#endregion
//#region ../../node_modules/.pnpm/@ap+design-system@1.7.1_@mui+system@7.3.9_@emotion+react@11.14.0_@types+react@18.3.28_r_345119124a477cdbfd4b44df3888437c/node_modules/@ap/design-system/dist/generateUtilityClasses-IqoSlPnZ.js
function aa(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") if (Array.isArray(e)) {
		var i = e.length;
		for (t = 0; t < i; t++) e[t] && (n = aa(e[t])) && (r && (r += " "), r += n);
	} else for (n in e) e[n] && (r && (r += " "), r += n);
	return r;
}
function $() {
	for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = aa(e)) && (r && (r += " "), r += t);
	return r;
}
function oa(e, t, n = "Mui") {
	let r = {};
	return t.forEach((t) => {
		r[t] = ht(e, t, n);
	}), r;
}
//#endregion
//#region ../../node_modules/.pnpm/@ap+design-system@1.7.1_@mui+system@7.3.9_@emotion+react@11.14.0_@types+react@18.3.28_r_345119124a477cdbfd4b44df3888437c/node_modules/@ap/design-system/dist/useForkRef-C_4o__cU.js
function sa(e, t) {
	typeof e == "function" ? e(t) : e && (e.current = t);
}
function ca(...e) {
	return i.useMemo(() => e.every((e) => e == null) ? null : (t) => {
		e.forEach((e) => {
			sa(e, t);
		});
	}, e);
}
//#endregion
//#region ../../node_modules/.pnpm/@ap+design-system@1.7.1_@mui+system@7.3.9_@emotion+react@11.14.0_@types+react@18.3.28_r_345119124a477cdbfd4b44df3888437c/node_modules/@ap/design-system/dist/DefaultPropsProvider-CBxX33UX.js
function la(e, t) {
	let n = j({}, t);
	return Object.keys(e).forEach((r) => {
		if (r.toString().match(/^(components|slots)$/)) n[r] = j({}, e[r], n[r]);
		else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
			let i = e[r] || {}, a = t[r];
			n[r] = {}, !a || !Object.keys(a) ? n[r] = i : !i || !Object.keys(i) ? n[r] = a : (n[r] = j({}, a), Object.keys(i).forEach((e) => {
				n[r][e] = la(i[e], a[e]);
			}));
		} else n[r] === void 0 && (n[r] = e[r]);
	}), n;
}
var ua = /* @__PURE__ */ i.createContext(void 0);
function da({ value: e, children: t }) {
	return /* @__PURE__ */ d.jsx(ua.Provider, {
		value: e,
		children: t
	});
}
function fa(e) {
	let { theme: t, name: n, props: r } = e;
	if (!t || !t.components || !t.components[n]) return r;
	let i = t.components[n];
	return i.defaultProps ? la(i.defaultProps, r) : !i.styleOverrides && !i.variants ? la(i, r) : r;
}
function pa({ props: e, name: t }) {
	return fa({
		props: e,
		name: t,
		theme: { components: i.useContext(ua) }
	});
}
function ma(e) {
	return pa(e);
}
//#endregion
//#region ../../node_modules/.pnpm/@ap+design-system@1.7.1_@mui+system@7.3.9_@emotion+react@11.14.0_@types+react@18.3.28_r_345119124a477cdbfd4b44df3888437c/node_modules/@ap/design-system/dist/TransitionGroupContext-BkoHK5Kx.js
function ha(e, t) {
	return ha = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, ha(e, t);
}
function ga(e, t) {
	e.prototype = Object.create(t.prototype), e.prototype.constructor = e, ha(e, t);
}
var _a = i.createContext(null);
//#endregion
//#region ../../node_modules/.pnpm/@ap+design-system@1.7.1_@mui+system@7.3.9_@emotion+react@11.14.0_@types+react@18.3.28_r_345119124a477cdbfd4b44df3888437c/node_modules/@ap/design-system/dist/useThemeWithoutDefault-D0bhF9VE.js
function va(e) {
	return Object.keys(e).length === 0;
}
function ya(e = null) {
	let t = i.useContext(Yr);
	return !t || va(t) ? e : t;
}
//#endregion
//#region ../../node_modules/.pnpm/@ap+design-system@1.7.1_@mui+system@7.3.9_@emotion+react@11.14.0_@types+react@18.3.28_r_345119124a477cdbfd4b44df3888437c/node_modules/@ap/design-system/dist/useTheme-J9iBFBBQ.js
var ba = dt();
function xa(e = ba) {
	return ya(e);
}
//#endregion
//#region ../../node_modules/.pnpm/@ap+design-system@1.7.1_@mui+system@7.3.9_@emotion+react@11.14.0_@types+react@18.3.28_r_345119124a477cdbfd4b44df3888437c/node_modules/@ap/design-system/dist/useIsFocusVisible-RL51RpiG.js
var Sa = {};
function Ca(e, t) {
	let n = i.useRef(Sa);
	return n.current === Sa && (n.current = e(t)), n;
}
var wa = [];
function Ta(e) {
	i.useEffect(e, wa);
}
var Ea = class e {
	constructor() {
		this.currentId = null, this.clear = () => {
			this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
		}, this.disposeEffect = () => this.clear;
	}
	static create() {
		return new e();
	}
	start(e, t) {
		this.clear(), this.currentId = setTimeout(() => {
			this.currentId = null, t();
		}, e);
	}
};
function Da() {
	let e = Ca(Ea.create).current;
	return Ta(e.disposeEffect), e;
}
var Oa = !0, ka = !1, Aa = new Ea(), ja = {
	text: !0,
	search: !0,
	url: !0,
	tel: !0,
	email: !0,
	password: !0,
	number: !0,
	date: !0,
	month: !0,
	week: !0,
	time: !0,
	datetime: !0,
	"datetime-local": !0
};
function Ma(e) {
	let { type: t, tagName: n } = e;
	return !!(n === "INPUT" && ja[t] && !e.readOnly || n === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function Na(e) {
	e.metaKey || e.altKey || e.ctrlKey || (Oa = !0);
}
function Pa() {
	Oa = !1;
}
function Fa() {
	this.visibilityState === "hidden" && ka && (Oa = !0);
}
function Ia(e) {
	e.addEventListener("keydown", Na, !0), e.addEventListener("mousedown", Pa, !0), e.addEventListener("pointerdown", Pa, !0), e.addEventListener("touchstart", Pa, !0), e.addEventListener("visibilitychange", Fa, !0);
}
function La(e) {
	let { target: t } = e;
	try {
		return t.matches(":focus-visible");
	} catch {}
	return Oa || Ma(t);
}
function Ra() {
	let e = i.useCallback((e) => {
		e != null && Ia(e.ownerDocument);
	}, []), t = i.useRef(!1);
	function n() {
		return t.current ? (ka = !0, Aa.start(100, () => {
			ka = !1;
		}), t.current = !1, !0) : !1;
	}
	function r(e) {
		return La(e) ? (t.current = !0, !0) : !1;
	}
	return {
		isFocusVisibleRef: t,
		onFocus: r,
		onBlur: n,
		ref: e
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@ap+design-system@1.7.1_@mui+system@7.3.9_@emotion+react@11.14.0_@types+react@18.3.28_r_345119124a477cdbfd4b44df3888437c/node_modules/@ap/design-system/dist/composeClasses-T9S0jFRL.js
function za(e, t, n = void 0) {
	let r = {};
	return Object.keys(e).forEach((i) => {
		r[i] = e[i].reduce((e, r) => {
			if (r) {
				let i = t(r);
				i !== "" && e.push(i), n && n[r] && e.push(n[r]);
			}
			return e;
		}, []).join(" ");
	}), r;
}
//#endregion
//#region ../../node_modules/.pnpm/@ap+design-system@1.7.1_@mui+system@7.3.9_@emotion+react@11.14.0_@types+react@18.3.28_r_345119124a477cdbfd4b44df3888437c/node_modules/@ap/design-system/dist/Paper-BCwiqAGZ.js
var Ba = (e) => {
	let t;
	return t = e < 1 ? 5.11916 * e ** 2 : 4.5 * Math.log(e + 1) + 2, (t / 100).toFixed(2);
};
function Va(e) {
	return ht("MuiPaper", e);
}
oa("MuiPaper", /* @__PURE__ */ "root.rounded.outlined.elevation.elevation0.elevation1.elevation2.elevation3.elevation4.elevation5.elevation6.elevation7.elevation8.elevation9.elevation10.elevation11.elevation12.elevation13.elevation14.elevation15.elevation16.elevation17.elevation18.elevation19.elevation20.elevation21.elevation22.elevation23.elevation24".split("."));
var Ha = [
	"className",
	"component",
	"elevation",
	"square",
	"variant"
], Ua = (e) => {
	let { square: t, elevation: n, variant: r, classes: i } = e;
	return za({ root: [
		"root",
		r,
		!t && "rounded",
		r === "elevation" && `elevation${n}`
	] }, Va, i);
}, Wa = ia("div", {
	name: "MuiPaper",
	slot: "Root",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [
			t.root,
			t[n.variant],
			!n.square && t.rounded,
			n.variant === "elevation" && t[`elevation${n.elevation}`]
		];
	}
})(({ theme: e, ownerState: t }) => j({
	backgroundColor: (e.vars || e).palette.background.paper,
	color: (e.vars || e).palette.text.primary,
	transition: e.transitions.create("box-shadow")
}, !t.square && { borderRadius: e.shape.borderRadius }, t.variant === "outlined" && { border: `1px solid ${(e.vars || e).palette.divider}` }, t.variant === "elevation" && j({ boxShadow: (e.vars || e).shadows[t.elevation] }, !e.vars && e.palette.mode === "dark" && { backgroundImage: `linear-gradient(${Tt.alpha("#fff", Ba(t.elevation))}, ${Tt.alpha("#fff", Ba(t.elevation))})` }, e.vars && { backgroundImage: e.vars.overlays?.[t.elevation] }))), Ga = /* @__PURE__ */ i.forwardRef(function(e, t) {
	let n = ma({
		props: e,
		name: "MuiPaper"
	}), { className: r, component: i = "div", elevation: a = 1, square: o = !1, variant: s = "elevation" } = n, c = M(n, Ha), l = j({}, n, {
		component: i,
		elevation: a,
		square: o,
		variant: s
	}), u = Ua(l);
	return /* @__PURE__ */ d.jsx(Wa, j({
		as: i,
		ownerState: l,
		className: $(u.root, r),
		ref: t
	}, c));
}), Ka = typeof window < "u" ? i.useLayoutEffect : i.useEffect;
function qa(e) {
	let t = i.useRef(e);
	return Ka(() => {
		t.current = e;
	}), i.useRef((...e) => (0, t.current)(...e)).current;
}
//#endregion
//#region ../../node_modules/.pnpm/@ap+design-system@1.7.1_@mui+system@7.3.9_@emotion+react@11.14.0_@types+react@18.3.28_r_345119124a477cdbfd4b44df3888437c/node_modules/@ap/design-system/dist/ButtonBase-CW83AvNS.js
function Ja(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function Ya(e, t) {
	var n = function(e) {
		return t && (0, i.isValidElement)(e) ? t(e) : e;
	}, r = /* @__PURE__ */ Object.create(null);
	return e && i.Children.map(e, function(e) {
		return e;
	}).forEach(function(e) {
		r[e.key] = n(e);
	}), r;
}
function Xa(e, t) {
	e ||= {}, t ||= {};
	function n(n) {
		return n in t ? t[n] : e[n];
	}
	var r = /* @__PURE__ */ Object.create(null), i = [];
	for (var a in e) a in t ? i.length && (r[a] = i, i = []) : i.push(a);
	var o, s = {};
	for (var c in t) {
		if (r[c]) for (o = 0; o < r[c].length; o++) {
			var l = r[c][o];
			s[r[c][o]] = n(l);
		}
		s[c] = n(c);
	}
	for (o = 0; o < i.length; o++) s[i[o]] = n(i[o]);
	return s;
}
function Za(e, t, n) {
	return n[t] == null ? e.props[t] : n[t];
}
function Qa(e, t) {
	return Ya(e.children, function(n) {
		return (0, i.cloneElement)(n, {
			onExited: t.bind(null, n),
			in: !0,
			appear: Za(n, "appear", e),
			enter: Za(n, "enter", e),
			exit: Za(n, "exit", e)
		});
	});
}
function $a(e, t, n) {
	var r = Ya(e.children), a = Xa(t, r);
	return Object.keys(a).forEach(function(o) {
		var s = a[o];
		if ((0, i.isValidElement)(s)) {
			var c = o in t, l = o in r, u = t[o], d = (0, i.isValidElement)(u) && !u.props.in;
			l && (!c || d) ? a[o] = (0, i.cloneElement)(s, {
				onExited: n.bind(null, s),
				in: !0,
				exit: Za(s, "exit", e),
				enter: Za(s, "enter", e)
			}) : !l && c && !d ? a[o] = (0, i.cloneElement)(s, { in: !1 }) : l && c && (0, i.isValidElement)(u) && (a[o] = (0, i.cloneElement)(s, {
				onExited: n.bind(null, s),
				in: u.props.in,
				exit: Za(s, "exit", e),
				enter: Za(s, "enter", e)
			}));
		}
	}), a;
}
var eo = Object.values || function(e) {
	return Object.keys(e).map(function(t) {
		return e[t];
	});
}, to = {
	component: "div",
	childFactory: function(e) {
		return e;
	}
}, no = /* @__PURE__ */ function(e) {
	ga(t, e);
	function t(t, n) {
		var r = e.call(this, t, n) || this;
		return r.state = {
			contextValue: { isMounting: !0 },
			handleExited: r.handleExited.bind(Ja(r)),
			firstRender: !0
		}, r;
	}
	var n = t.prototype;
	return n.componentDidMount = function() {
		this.mounted = !0, this.setState({ contextValue: { isMounting: !1 } });
	}, n.componentWillUnmount = function() {
		this.mounted = !1;
	}, t.getDerivedStateFromProps = function(e, t) {
		var n = t.children, r = t.handleExited;
		return {
			children: t.firstRender ? Qa(e, r) : $a(e, n, r),
			firstRender: !1
		};
	}, n.handleExited = function(e, t) {
		var n = Ya(this.props.children);
		e.key in n || (e.props.onExited && e.props.onExited(t), this.mounted && this.setState(function(t) {
			var n = j({}, t.children);
			return delete n[e.key], { children: n };
		}));
	}, n.render = function() {
		var e = this.props, t = e.component, n = e.childFactory, r = M(e, ["component", "childFactory"]), a = this.state.contextValue, o = eo(this.state.children).map(n);
		return delete r.appear, delete r.enter, delete r.exit, t === null ? /* @__PURE__ */ i.createElement(_a.Provider, { value: a }, o) : /* @__PURE__ */ i.createElement(_a.Provider, { value: a }, /* @__PURE__ */ i.createElement(t, r, o));
	}, t;
}(i.Component);
no.propTypes = {}, no.defaultProps = to;
function ro(e) {
	let { className: t, classes: n, pulsate: r = !1, rippleX: a, rippleY: o, rippleSize: s, in: c, onExited: l, timeout: u } = e, [f, p] = i.useState(!1), m = $(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), h = {
		width: s,
		height: s,
		top: -(s / 2) + o,
		left: -(s / 2) + a
	}, g = $(n.child, f && n.childLeaving, r && n.childPulsate);
	return !c && !f && p(!0), i.useEffect(() => {
		if (!c && l != null) {
			let e = setTimeout(l, u);
			return () => {
				clearTimeout(e);
			};
		}
	}, [
		l,
		c,
		u
	]), /* @__PURE__ */ d.jsx("span", {
		className: m,
		style: h,
		children: /* @__PURE__ */ d.jsx("span", { className: g })
	});
}
var io = oa("MuiTouchRipple", [
	"root",
	"ripple",
	"rippleVisible",
	"ripplePulsate",
	"child",
	"childLeaving",
	"childPulsate"
]), ao = [
	"center",
	"classes",
	"className"
], oo = (e) => e, so, co, lo, uo, fo = 550, po = 80, mo = ii(so ||= oo`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`), ho = ii(co ||= oo`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`), go = ii(lo ||= oo`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`), _o = ia("span", {
	name: "MuiTouchRipple",
	slot: "Root"
})({
	overflow: "hidden",
	pointerEvents: "none",
	position: "absolute",
	zIndex: 0,
	top: 0,
	right: 0,
	bottom: 0,
	left: 0,
	borderRadius: "inherit"
}), vo = ia(ro, {
	name: "MuiTouchRipple",
	slot: "Ripple"
})(uo ||= oo`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, io.rippleVisible, mo, fo, ({ theme: e }) => e.transitions.easing.easeInOut, io.ripplePulsate, ({ theme: e }) => e.transitions.duration.shorter, io.child, io.childLeaving, ho, fo, ({ theme: e }) => e.transitions.easing.easeInOut, io.childPulsate, go, ({ theme: e }) => e.transitions.easing.easeInOut), yo = /* @__PURE__ */ i.forwardRef(function(e, t) {
	let n = ma({
		props: e,
		name: "MuiTouchRipple"
	}), { center: r = !1, classes: a = {}, className: o } = n, s = M(n, ao), [c, l] = i.useState([]), u = i.useRef(0), f = i.useRef(null);
	i.useEffect(() => {
		f.current &&= (f.current(), null);
	}, [c]);
	let p = i.useRef(!1), m = Da(), h = i.useRef(null), g = i.useRef(null), _ = i.useCallback((e) => {
		let { pulsate: t, rippleX: n, rippleY: r, rippleSize: i, cb: o } = e;
		l((e) => [...e, /* @__PURE__ */ d.jsx(vo, {
			classes: {
				ripple: $(a.ripple, io.ripple),
				rippleVisible: $(a.rippleVisible, io.rippleVisible),
				ripplePulsate: $(a.ripplePulsate, io.ripplePulsate),
				child: $(a.child, io.child),
				childLeaving: $(a.childLeaving, io.childLeaving),
				childPulsate: $(a.childPulsate, io.childPulsate)
			},
			timeout: fo,
			pulsate: t,
			rippleX: n,
			rippleY: r,
			rippleSize: i
		}, u.current)]), u.current += 1, f.current = o;
	}, [a]), v = i.useCallback((e = {}, t = {}, n = () => {}) => {
		let { pulsate: i = !1, center: a = r || t.pulsate, fakeElement: o = !1 } = t;
		if (e?.type === "mousedown" && p.current) {
			p.current = !1;
			return;
		}
		e?.type === "touchstart" && (p.current = !0);
		let s = o ? null : g.current, c = s ? s.getBoundingClientRect() : {
			width: 0,
			height: 0,
			left: 0,
			top: 0
		}, l, u, d;
		if (a || e === void 0 || e.clientX === 0 && e.clientY === 0 || !e.clientX && !e.touches) l = Math.round(c.width / 2), u = Math.round(c.height / 2);
		else {
			let { clientX: t, clientY: n } = e.touches && e.touches.length > 0 ? e.touches[0] : e;
			l = Math.round(t - c.left), u = Math.round(n - c.top);
		}
		if (a) d = Math.sqrt((2 * c.width ** 2 + c.height ** 2) / 3), d % 2 == 0 && (d += 1);
		else {
			let e = Math.max(Math.abs((s ? s.clientWidth : 0) - l), l) * 2 + 2, t = Math.max(Math.abs((s ? s.clientHeight : 0) - u), u) * 2 + 2;
			d = Math.sqrt(e ** 2 + t ** 2);
		}
		e != null && e.touches ? h.current === null && (h.current = () => {
			_({
				pulsate: i,
				rippleX: l,
				rippleY: u,
				rippleSize: d,
				cb: n
			});
		}, m.start(po, () => {
			h.current &&= (h.current(), null);
		})) : _({
			pulsate: i,
			rippleX: l,
			rippleY: u,
			rippleSize: d,
			cb: n
		});
	}, [
		r,
		_,
		m
	]), y = i.useCallback(() => {
		v({}, { pulsate: !0 });
	}, [v]), b = i.useCallback((e, t) => {
		if (m.clear(), e?.type === "touchend" && h.current) {
			h.current(), h.current = null, m.start(0, () => {
				b(e, t);
			});
			return;
		}
		h.current = null, l((e) => e.length > 0 ? e.slice(1) : e), f.current = t;
	}, [m]);
	return i.useImperativeHandle(t, () => ({
		pulsate: y,
		start: v,
		stop: b
	}), [
		y,
		v,
		b
	]), /* @__PURE__ */ d.jsx(_o, j({
		className: $(io.root, a.root, o),
		ref: g
	}, s, { children: /* @__PURE__ */ d.jsx(no, {
		component: null,
		exit: !0,
		children: c
	}) }));
});
function bo(e) {
	return ht("MuiButtonBase", e);
}
var xo = oa("MuiButtonBase", [
	"root",
	"disabled",
	"focusVisible"
]), So = /* @__PURE__ */ "action.centerRipple.children.className.component.disabled.disableRipple.disableTouchRipple.focusRipple.focusVisibleClassName.LinkComponent.onBlur.onClick.onContextMenu.onDragLeave.onFocus.onFocusVisible.onKeyDown.onKeyUp.onMouseDown.onMouseLeave.onMouseUp.onTouchEnd.onTouchMove.onTouchStart.tabIndex.TouchRippleProps.touchRippleRef.type".split("."), Co = (e) => {
	let { disabled: t, focusVisible: n, focusVisibleClassName: r, classes: i } = e, a = za({ root: [
		"root",
		t && "disabled",
		n && "focusVisible"
	] }, bo, i);
	return n && r && (a.root += ` ${r}`), a;
}, wo = ia("button", {
	name: "MuiButtonBase",
	slot: "Root",
	overridesResolver: (e, t) => t.root
})({
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	position: "relative",
	boxSizing: "border-box",
	WebkitTapHighlightColor: "transparent",
	backgroundColor: "transparent",
	outline: 0,
	border: 0,
	margin: 0,
	borderRadius: 0,
	padding: 0,
	cursor: "pointer",
	userSelect: "none",
	verticalAlign: "middle",
	MozAppearance: "none",
	WebkitAppearance: "none",
	textDecoration: "none",
	color: "inherit",
	"&::-moz-focus-inner": { borderStyle: "none" },
	[`&.${xo.disabled}`]: {
		pointerEvents: "none",
		cursor: "default"
	},
	"@media print": { colorAdjust: "exact" }
}), To = /* @__PURE__ */ i.forwardRef(function(e, t) {
	let n = ma({
		props: e,
		name: "MuiButtonBase"
	}), { action: r, centerRipple: a = !1, children: o, className: s, component: c = "button", disabled: l = !1, disableRipple: u = !1, disableTouchRipple: f = !1, focusRipple: p = !1, LinkComponent: m = "a", onBlur: h, onClick: g, onContextMenu: _, onDragLeave: v, onFocus: y, onFocusVisible: b, onKeyDown: x, onKeyUp: S, onMouseDown: C, onMouseLeave: w, onMouseUp: T, onTouchEnd: E, onTouchMove: ee, onTouchStart: te, tabIndex: D = 0, TouchRippleProps: ne, touchRippleRef: O, type: re } = n, ie = M(n, So), k = i.useRef(null), A = i.useRef(null), N = ca(A, O), { isFocusVisibleRef: ae, onFocus: P, onBlur: oe, ref: se } = Ra(), [F, ce] = i.useState(!1);
	l && F && ce(!1), i.useImperativeHandle(r, () => ({ focusVisible: () => {
		ce(!0), k.current.focus();
	} }), []);
	let [le, ue] = i.useState(!1);
	i.useEffect(() => {
		ue(!0);
	}, []);
	let de = le && !u && !l;
	i.useEffect(() => {
		F && p && !u && le && A.current.pulsate();
	}, [
		u,
		p,
		F,
		le
	]);
	function I(e, t, n = f) {
		return qa((r) => (t && t(r), !n && A.current && A.current[e](r), !0));
	}
	let fe = I("start", C), pe = I("stop", _), me = I("stop", v), he = I("stop", T), L = I("stop", (e) => {
		F && e.preventDefault(), w && w(e);
	}), ge = I("start", te), _e = I("stop", E), R = I("stop", ee), ve = I("stop", (e) => {
		oe(e), ae.current === !1 && ce(!1), h && h(e);
	}, !1), ye = qa((e) => {
		k.current ||= e.currentTarget, P(e), ae.current === !0 && (ce(!0), b && b(e)), y && y(e);
	}), be = () => {
		let e = k.current;
		return c && c !== "button" && !(e.tagName === "A" && e.href);
	}, xe = i.useRef(!1), Se = qa((e) => {
		p && !xe.current && F && A.current && e.key === " " && (xe.current = !0, A.current.stop(e, () => {
			A.current.start(e);
		})), e.target === e.currentTarget && be() && e.key === " " && e.preventDefault(), x && x(e), e.target === e.currentTarget && be() && e.key === "Enter" && !l && (e.preventDefault(), g && g(e));
	}), Ce = qa((e) => {
		p && e.key === " " && A.current && F && !e.defaultPrevented && (xe.current = !1, A.current.stop(e, () => {
			A.current.pulsate(e);
		})), S && S(e), g && e.target === e.currentTarget && be() && e.key === " " && !e.defaultPrevented && g(e);
	}), we = c;
	we === "button" && (ie.href || ie.to) && (we = m);
	let Te = {};
	we === "button" ? (Te.type = re === void 0 ? "button" : re, Te.disabled = l) : (!ie.href && !ie.to && (Te.role = "button"), l && (Te["aria-disabled"] = l));
	let Ee = ca(t, se, k), De = j({}, n, {
		centerRipple: a,
		component: c,
		disabled: l,
		disableRipple: u,
		disableTouchRipple: f,
		focusRipple: p,
		tabIndex: D,
		focusVisible: F
	}), Oe = Co(De);
	return /* @__PURE__ */ d.jsxs(wo, j({
		as: we,
		className: $(Oe.root, s),
		ownerState: De,
		onBlur: ve,
		onClick: g,
		onContextMenu: pe,
		onFocus: ye,
		onKeyDown: Se,
		onKeyUp: Ce,
		onMouseDown: fe,
		onMouseLeave: L,
		onMouseUp: he,
		onDragLeave: me,
		onTouchEnd: _e,
		onTouchMove: R,
		onTouchStart: ge,
		ref: Ee,
		tabIndex: l ? -1 : D,
		type: re
	}, Te, ie, { children: [o, de ? /* @__PURE__ */ d.jsx(yo, j({
		ref: N,
		center: a
	}, ne)) : null] }));
});
//#endregion
//#region ../../node_modules/.pnpm/@ap+design-system@1.7.1_@mui+system@7.3.9_@emotion+react@11.14.0_@types+react@18.3.28_r_345119124a477cdbfd4b44df3888437c/node_modules/@ap/design-system/dist/helpers/string.js
function Eo(e) {
	return e.replace(/[A-Z0-9]/g, (e) => `_${e.toLowerCase()}`).replace(/^_/, "");
}
//#endregion
//#region ../../node_modules/.pnpm/@ap+design-system@1.7.1_@mui+system@7.3.9_@emotion+react@11.14.0_@types+react@18.3.28_r_345119124a477cdbfd4b44df3888437c/node_modules/@ap/design-system/dist/Button-CrC6fQNo.js
function Do(e) {
	return ht("MuiButton", e);
}
var Oo = oa("MuiButton", /* @__PURE__ */ "root.text.textInherit.textPrimary.textSecondary.textSuccess.textError.textInfo.textWarning.outlined.outlinedInherit.outlinedPrimary.outlinedSecondary.outlinedSuccess.outlinedError.outlinedInfo.outlinedWarning.contained.containedInherit.containedPrimary.containedSecondary.containedSuccess.containedError.containedInfo.containedWarning.disableElevation.focusVisible.disabled.colorInherit.colorPrimary.colorSecondary.colorSuccess.colorError.colorInfo.colorWarning.textSizeSmall.textSizeMedium.textSizeLarge.outlinedSizeSmall.outlinedSizeMedium.outlinedSizeLarge.containedSizeSmall.containedSizeMedium.containedSizeLarge.sizeMedium.sizeSmall.sizeLarge.fullWidth.startIcon.endIcon.icon.iconSizeSmall.iconSizeMedium.iconSizeLarge".split(".")), ko = /* @__PURE__ */ i.createContext({}), Ao = /* @__PURE__ */ i.createContext(void 0), jo = [
	"children",
	"color",
	"component",
	"className",
	"disabled",
	"disableElevation",
	"disableFocusRipple",
	"endIcon",
	"focusVisibleClassName",
	"fullWidth",
	"size",
	"startIcon",
	"type",
	"variant"
], Mo = (e) => {
	let { color: t, disableElevation: n, fullWidth: r, size: i, variant: a, classes: o } = e;
	return j({}, o, za({
		root: [
			"root",
			a,
			`${a}${L(t)}`,
			`size${L(i)}`,
			`${a}Size${L(i)}`,
			`color${L(t)}`,
			n && "disableElevation",
			r && "fullWidth"
		],
		label: ["label"],
		startIcon: [
			"icon",
			"startIcon",
			`iconSize${L(i)}`
		],
		endIcon: [
			"icon",
			"endIcon",
			`iconSize${L(i)}`
		]
	}, Do, o));
}, No = (e) => j({}, e.size === "small" && { "& > *:nth-of-type(1)": { fontSize: 18 } }, e.size === "medium" && { "& > *:nth-of-type(1)": { fontSize: 20 } }, e.size === "large" && { "& > *:nth-of-type(1)": { fontSize: 22 } }), Po = ia(To, {
	shouldForwardProp: (e) => ra(e) || e === "classes",
	name: "MuiButton",
	slot: "Root",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [
			t.root,
			t[n.variant],
			t[`${n.variant}${L(n.color)}`],
			t[`size${L(n.size)}`],
			t[`${n.variant}Size${L(n.size)}`],
			n.color === "inherit" && t.colorInherit,
			n.disableElevation && t.disableElevation,
			n.fullWidth && t.fullWidth
		];
	}
})(({ theme: e, ownerState: t }) => {
	var n;
	let r = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], i = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
	return j({}, e.typography.button, {
		minWidth: 64,
		padding: "6px 16px",
		borderRadius: (e.vars || e).shape.borderRadius,
		transition: e.transitions.create([
			"background-color",
			"box-shadow",
			"border-color",
			"color"
		], { duration: e.transitions.duration.short }),
		"&:hover": j({
			textDecoration: "none",
			backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Tt.alpha(e.palette.text.primary, e.palette.action.hoverOpacity),
			"@media (hover: none)": { backgroundColor: "transparent" }
		}, t.variant === "text" && t.color !== "inherit" && {
			backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Tt.alpha(e.palette[t.color].main, e.palette.action.hoverOpacity),
			"@media (hover: none)": { backgroundColor: "transparent" }
		}, t.variant === "outlined" && t.color !== "inherit" && {
			border: `1px solid ${(e.vars || e).palette[t.color].main}`,
			backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Tt.alpha(e.palette[t.color].main, e.palette.action.hoverOpacity),
			"@media (hover: none)": { backgroundColor: "transparent" }
		}, t.variant === "contained" && {
			backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedHoverBg : i,
			boxShadow: (e.vars || e).shadows[4],
			"@media (hover: none)": {
				boxShadow: (e.vars || e).shadows[2],
				backgroundColor: (e.vars || e).palette.grey[300]
			}
		}, t.variant === "contained" && t.color !== "inherit" && {
			backgroundColor: (e.vars || e).palette[t.color].dark,
			"@media (hover: none)": { backgroundColor: (e.vars || e).palette[t.color].main }
		}),
		"&:active": j({}, t.variant === "contained" && { boxShadow: (e.vars || e).shadows[8] }),
		[`&.${Oo.focusVisible}`]: j({}, t.variant === "contained" && { boxShadow: (e.vars || e).shadows[6] }),
		[`&.${Oo.disabled}`]: j({ color: (e.vars || e).palette.action.disabled }, t.variant === "outlined" && { border: `1px solid ${(e.vars || e).palette.action.disabledBackground}` }, t.variant === "contained" && {
			color: (e.vars || e).palette.action.disabled,
			boxShadow: (e.vars || e).shadows[0],
			backgroundColor: (e.vars || e).palette.action.disabledBackground
		})
	}, t.variant === "text" && { padding: "6px 8px" }, t.variant === "text" && t.color !== "inherit" && { color: (e.vars || e).palette[t.color].main }, t.variant === "outlined" && {
		padding: "5px 15px",
		border: "1px solid currentColor"
	}, t.variant === "outlined" && t.color !== "inherit" && {
		color: (e.vars || e).palette[t.color].main,
		border: e.vars ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)` : `1px solid ${Tt.alpha(e.palette[t.color].main, .5)}`
	}, t.variant === "contained" && {
		color: e.vars ? e.vars.palette.text.primary : (n = e.palette).getContrastText?.call(n, e.palette.grey[300]),
		backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedBg : r,
		boxShadow: (e.vars || e).shadows[2]
	}, t.variant === "contained" && t.color !== "inherit" && {
		color: (e.vars || e).palette[t.color].contrastText,
		backgroundColor: (e.vars || e).palette[t.color].main
	}, t.color === "inherit" && {
		color: "inherit",
		borderColor: "currentColor"
	}, t.size === "small" && t.variant === "text" && {
		padding: "4px 5px",
		fontSize: e.typography.pxToRem(13)
	}, t.size === "large" && t.variant === "text" && {
		padding: "8px 11px",
		fontSize: e.typography.pxToRem(15)
	}, t.size === "small" && t.variant === "outlined" && {
		padding: "3px 9px",
		fontSize: e.typography.pxToRem(13)
	}, t.size === "large" && t.variant === "outlined" && {
		padding: "7px 21px",
		fontSize: e.typography.pxToRem(15)
	}, t.size === "small" && t.variant === "contained" && {
		padding: "4px 10px",
		fontSize: e.typography.pxToRem(13)
	}, t.size === "large" && t.variant === "contained" && {
		padding: "8px 22px",
		fontSize: e.typography.pxToRem(15)
	}, t.fullWidth && { width: "100%" });
}, ({ ownerState: e }) => e.disableElevation && {
	boxShadow: "none",
	"&:hover": { boxShadow: "none" },
	[`&.${Oo.focusVisible}`]: { boxShadow: "none" },
	"&:active": { boxShadow: "none" },
	[`&.${Oo.disabled}`]: { boxShadow: "none" }
}), Fo = ia("span", {
	name: "MuiButton",
	slot: "StartIcon",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [t.startIcon, t[`iconSize${L(n.size)}`]];
	}
})(({ ownerState: e }) => j({
	display: "inherit",
	marginRight: 8,
	marginLeft: -4
}, e.size === "small" && { marginLeft: -2 }, No(e))), Io = ia("span", {
	name: "MuiButton",
	slot: "EndIcon",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [t.endIcon, t[`iconSize${L(n.size)}`]];
	}
})(({ ownerState: e }) => j({
	display: "inherit",
	marginRight: -4,
	marginLeft: 8
}, e.size === "small" && { marginRight: -2 }, No(e))), Lo = ia(/* @__PURE__ */ i.forwardRef(function(e, t) {
	let n = i.useContext(ko), r = i.useContext(Ao), a = ma({
		props: la(n, e),
		name: "MuiButton"
	}), { children: o, color: s = "primary", component: c = "button", className: l, disabled: u = !1, disableElevation: f = !1, disableFocusRipple: p = !1, endIcon: m, focusVisibleClassName: h, fullWidth: g = !1, size: _ = "medium", startIcon: v, type: y, variant: b = "text" } = a, x = M(a, jo), S = j({}, a, {
		color: s,
		component: c,
		disabled: u,
		disableElevation: f,
		disableFocusRipple: p,
		fullWidth: g,
		size: _,
		type: y,
		variant: b
	}), C = Mo(S), w = v && /* @__PURE__ */ d.jsx(Fo, {
		className: C.startIcon,
		ownerState: S,
		children: v
	}), T = m && /* @__PURE__ */ d.jsx(Io, {
		className: C.endIcon,
		ownerState: S,
		children: m
	}), E = r || "";
	return /* @__PURE__ */ d.jsxs(Po, j({
		ownerState: S,
		className: $(n.className, C.root, l, E),
		component: c,
		disabled: u,
		focusRipple: !p,
		focusVisibleClassName: $(C.focusVisible, h),
		ref: t,
		type: y
	}, x, {
		classes: C,
		children: [
			w,
			o,
			T
		]
	}));
}))(({ theme: e, size: t, variant: n }) => {
	let { fd: r } = ne(e), { fd: { size: { controlheight: i, icn: a } }, ref: { spacing: { gapforced: o }, radius: s } } = f.density.standard, c = e.palette.mode === "light", l = f.effect.interaction.rest3d, u = f.effect.interaction.pressed3d, d = f.effect.interaction.focus3d[0], p = f.effect.interaction.focus3d[1], m = O(d), h = re(p), g = f.effect.interaction.focusflat, _, v, y, b, x, S, C, w, T, E, ee = "none", te = O(l), k = te, A = O(u), j = `${m}, ${h}`, M, N, ae, P, oe, se, F;
	switch (n) {
		case "secondary":
			_ = r.bg.interac.secondary, v = D(r.bg.interac.secondary, r.bg.interac.modifier.hover), y = D(r.bg.interac.secondary, r.bg.interac.modifier.pressed), b = r.bg.interac.secondary, x = "transparent", S = r.txt.label, C = r.txt.label, w = r.txt.label, T = r.txt.label, E = D(S, r.txt.modifier.disabled);
			break;
		case "tertiary":
			_ = "transparent", v = D(r.bg.interac.primary, r.bg.interac.modifier.hover), y = D(r.bg.interac.primary, r.bg.interac.modifier.pressed), b = D(r.bg.interac.primary, r.bg.container.modifier.tint), x = "transparent", S = r.txt.label, C = c ? r.txt.label : r.txt.labelforced, w = c ? r.txt.label : r.txt.labelforced, T = r.txt.label, E = D(r.txt.label, r.txt.modifier.disabled), te = "none", k = "none", A = "none", j = O(g);
			break;
		case "tinted":
			_ = D(r.bg.interac.primary, r.bg.container.modifier.tint), v = D(r.bg.interac.primary, r.bg.interac.modifier.hover), y = D(r.bg.interac.primary, r.bg.interac.modifier.pressed), b = D(r.bg.interac.primary, r.bg.container.modifier.tint), x = D(r.bg.interac.primary, r.bg.interac.modifier.disabled), S = r.txt.label, C = c ? r.txt.label : r.txt.labelforced, w = c ? r.txt.label : r.txt.labelforced, T = r.txt.label, E = D(c ? r.txt.label : r.txt.labelforced, r.txt.modifier.disabled), te = "none", k = "none", A = "none", j = O(g);
			break;
		case "outlined":
			_ = "transparent", v = D(r.bg.interac.secondary, r.bg.interac.modifier.hover), y = D(r.bg.interac.secondary, r.bg.interac.modifier.pressed), b = r.bg.interac.secondary, x = "transparent", S = r.txt.label, C = r.txt.label, w = r.txt.label, T = r.txt.label, E = D(S, r.txt.modifier.disabled), ee = `1px solid ${r.stroke.brand}`, te = "none", k = "none", A = "none";
			break;
		case "danger":
			_ = r.bg.interac.danger, v = D(r.bg.interac.danger, r.bg.interac.modifier.hover), y = D(r.bg.interac.danger, r.bg.interac.modifier.pressed), b = r.bg.interac.danger, x = D(r.bg.interac.danger, r.bg.interac.modifier.disabled), S = r.txt.labelinversedforced, C = r.txt.labelinversedforced, w = r.txt.labelinversedforced, T = r.txt.labelinversedforced, E = D(r.txt.labelinversedforced, r.txt.modifier.disabled);
			break;
		default:
			_ = r.bg.interac.primary, v = D(r.bg.interac.primary, r.bg.interac.modifier.hover), y = D(r.bg.interac.primary, r.bg.interac.modifier.pressed), b = r.bg.interac.primary, x = D(r.bg.interac.primary, r.bg.interac.modifier.disabled), S = r.txt.labelforced, C = r.txt.labelforced, w = r.txt.labelforced, T = r.txt.labelforced, E = D(S, r.txt.modifier.disabled);
			break;
	}
	switch (t) {
		case "small":
			M = `${i.small}px`, N = `${i.small}px`, ae = `${o.s}px ${o.l}px`, P = `${s.small}px`, oe = `${o.s}px`, se = f.typography.text.buttonsmall, F = `${a.small}px`;
			break;
		case "large":
			M = `${i.large}px`, N = `${i.large}px`, ae = `${o.l}px ${o.xxl}px`, P = `${s.small}px`, oe = `${o.l}px`, se = f.typography.text.buttonlarge, F = `${a.medium}px`;
			break;
		default:
			M = `${i.medium}px`, N = `${i.medium}px`, ae = `${o.m}px ${o.xl}px`, P = `${s.small}px`, oe = `${o.m}px`, se = f.typography.text.buttonmedium, F = `${a.medium}px`;
			break;
	}
	return {
		display: "inline-flex",
		justifyContent: "center",
		alignItems: "center",
		...n === "floatingIcon" ? {
			width: M,
			height: N
		} : { gap: oe },
		boxShadow: te,
		padding: ae,
		border: ee,
		borderRadius: P,
		backgroundColor: _,
		color: S,
		minWidth: 0,
		...ie(se),
		"& .MuiButton-startIcon, .MuiButton-endIcon": {
			margin: 0,
			span: {
				fontSize: F,
				color: S
			}
		},
		"&:hover": {
			backgroundColor: v,
			color: C,
			boxShadow: k,
			"& .MuiButton-startIcon, .MuiButton-endIcon": { span: { color: C } }
		},
		"&:active": {
			backgroundColor: y,
			color: w,
			boxShadow: A,
			"& .MuiButton-startIcon, .MuiButton-endIcon": { span: { color: w } }
		},
		"&:focus-visible": {
			backgroundColor: b,
			color: T,
			boxShadow: j,
			"& .MuiButton-startIcon, .MuiButton-endIcon": { span: { color: T } }
		},
		"&:disabled": {
			backgroundColor: x,
			color: E,
			boxShadow: "none",
			border: "none",
			"& .MuiButton-startIcon, .MuiButton-endIcon": { span: { color: E } }
		}
	};
}), Ro = (e) => {
	let { className: t, children: n, variant: r = "primary", size: i = "medium", ...a } = e, o;
	o = r === "floatingIcon" ? e.icon ? e.icon : null : n;
	let s = {
		disableElevation: !0,
		disableFocusRipple: !0,
		disableRipple: !0
	};
	return /* @__PURE__ */ d.jsx(Lo, {
		className: t,
		size: i,
		variant: r,
		...a,
		...s,
		children: o
	});
};
//#endregion
//#region ../../node_modules/.pnpm/@ap+design-system@1.7.1_@mui+system@7.3.9_@emotion+react@11.14.0_@types+react@18.3.28_r_345119124a477cdbfd4b44df3888437c/node_modules/@ap/design-system/dist/GlobalStyles-D-TJgWzk.js
function zo({ styles: e, themeId: t, defaultTheme: n = {} }) {
	let r = xa(n), i = typeof e == "function" ? e(t && r[t] || r) : e;
	return /* @__PURE__ */ d.jsx(ci, { styles: i });
}
function Bo(e) {
	return /* @__PURE__ */ d.jsx(zo, j({}, e, {
		defaultTheme: li,
		themeId: ui
	}));
}
//#endregion
//#region ../../node_modules/.pnpm/@ap+design-system@1.7.1_@mui+system@7.3.9_@emotion+react@11.14.0_@types+react@18.3.28_r_345119124a477cdbfd4b44df3888437c/node_modules/@ap/design-system/dist/index-BH3W4UER.js
var Vo = ["value"], Ho = /* @__PURE__ */ i.createContext();
function Uo(e) {
	let { value: t } = e, n = M(e, Vo);
	return /* @__PURE__ */ d.jsx(Ho.Provider, j({ value: t ?? !0 }, n));
}
//#endregion
//#region ../../node_modules/.pnpm/@ap+design-system@1.7.1_@mui+system@7.3.9_@emotion+react@11.14.0_@types+react@18.3.28_r_345119124a477cdbfd4b44df3888437c/node_modules/@ap/design-system/dist/Card-CS4m0KeL.js
function Wo(e) {
	return ht("MuiCard", e);
}
oa("MuiCard", ["root"]);
var Go = ["className", "raised"], Ko = (e) => {
	let { classes: t } = e;
	return za({ root: ["root"] }, Wo, t);
}, qo = ia(Ga, {
	name: "MuiCard",
	slot: "Root",
	overridesResolver: (e, t) => t.root
})(() => ({ overflow: "hidden" })), Jo = /* @__PURE__ */ i.forwardRef(function(e, t) {
	let n = ma({
		props: e,
		name: "MuiCard"
	}), { className: r, raised: i = !1 } = n, a = M(n, Go), o = j({}, n, { raised: i }), s = Ko(o);
	return /* @__PURE__ */ d.jsx(qo, j({
		className: $(s.root, r),
		elevation: i ? 8 : void 0,
		ref: t,
		ownerState: o
	}, a));
}), Yo = 200, Xo = ia(Jo)(({ theme: e }) => {
	let { fd: t } = ne(e), { ref: { radius: n, spacing: { gapforced: r } } } = f.density.standard;
	return {
		background: t.bg.container.secondary,
		borderRadius: `${n.large}px`,
		boxShadow: O(f.effect.elevation.low),
		minWidth: `${Yo}px`,
		"& .MuiCardHeader-root": {
			margin: 0,
			padding: `${r.xl}px`
		},
		"& .MuiCardHeader-action": {
			margin: 0,
			marginLeft: `${r.xl}px`,
			padding: 0
		},
		"& .MuiCardActions-root": { padding: `${r.m}px ${r.xl}px ${r.xl}px ${r.xl}px` }
	};
}), Zo = typeof window < "u" && window.Math == Math ? window : typeof self < "u" && self.Math == Math ? self : Function("return this")();
//#endregion
//#region ../../node_modules/.pnpm/@ap+design-system@1.7.1_@mui+system@7.3.9_@emotion+react@11.14.0_@types+react@18.3.28_r_345119124a477cdbfd4b44df3888437c/node_modules/@ap/design-system/dist/themes/themes.js
Zo.__MUI_LICENSE_INFO__ = Zo.__MUI_LICENSE_INFO__ || { key: void 0 }, class e {
	static getLicenseInfo() {
		return Zo.__MUI_LICENSE_INFO__;
	}
	static getLicenseKey() {
		return e.getLicenseInfo().key;
	}
	static setLicenseKey(t) {
		let n = e.getLicenseInfo();
		n.key = t;
	}
}.setLicenseKey("19984547fa7c780ed27f3f22931c439dTz03MzYzOCxFPTE3MjQ5MzkxNjEwMDAsUz1wcmVtaXVtLExNPXN1YnNjcmlwdGlvbixLVj0y");
var Qo = {
	xs: 0,
	sm: 744,
	md: 1024,
	lg: 1280,
	xl: 1524
};
function $o(e, t) {
	let n = e === "dark", r = {
		fontFamily: `'${f.typography.text.body.fontFamily}', sans-serif`,
		fontWeight: f.typography.text.subheadline.fontWeight,
		fontSize: `${f.typography.text.subheadline.fontSize}px`,
		lineHeight: `${f.typography.text.subheadline.lineHeight}px`,
		letterSpacing: `${f.typography.text.subheadline.letterSpacing}px`
	}, i = ln({
		breakpoints: { values: Qo },
		spacing: [
			f.density.standard.ref.spacing.betweencomponent.none,
			f.density.standard.ref.spacing.betweencomponent.s,
			f.density.standard.ref.spacing.betweencomponent.m,
			f.density.standard.ref.spacing.betweencomponent.l,
			f.density.standard.ref.spacing.betweencomponent.xl,
			f.density.standard.ref.spacing.betweencomponent.xxl,
			f.density.standard.ref.spacing.betweencomponent.x3l,
			f.density.standard.ref.spacing.betweencomponent.x4l,
			f.density.standard.ref.spacing.betweencomponent.x5l,
			f.density.standard.ref.spacing.betweencomponent.x6l,
			f.density.standard.ref.spacing.betweencomponent.x7l,
			f.density.standard.ref.spacing.betweencomponent.x8l,
			f.density.standard.ref.spacing.betweencomponent.x9l,
			f.density.standard.ref.spacing.betweencomponent.x10l,
			f.density.standard.ref.spacing.betweencomponent.x11l,
			f.density.standard.ref.spacing.betweencomponent.x12l
		],
		palette: {
			mode: e,
			primary: { main: f.color.accent },
			background: { default: f.themes[n ? "night" : "day"].fd.bg.container.primary }
		},
		typography: {
			htmlFontSize: f.typography.text.body.fontSize,
			fontFamily: `'${f.typography.text.body.fontFamily}', sans-serif`,
			h1: void 0,
			h2: void 0,
			h3: void 0,
			h4: void 0,
			h5: void 0,
			h6: void 0,
			subtitle1: void 0,
			subtitle2: void 0,
			body2: void 0,
			button: void 0,
			overline: void 0,
			body: {
				fontFamily: `'${f.typography.text.body.fontFamily}', sans-serif`,
				fontWeight: f.typography.text.body.fontWeight,
				fontSize: `${f.typography.text.body.fontSize}px`,
				lineHeight: `${f.typography.text.body.lineHeight}px`,
				letterSpacing: `${f.typography.text.body.letterSpacing}px`,
				color: f.themes[n ? "night" : "day"].fd.txt.label
			},
			body1: {
				fontFamily: `'${f.typography.text.body.fontFamily}', sans-serif`,
				fontWeight: f.typography.text.body.fontWeight,
				fontSize: `${f.typography.text.body.fontSize}px`,
				lineHeight: `${f.typography.text.body.lineHeight}px`,
				letterSpacing: `${f.typography.text.body.letterSpacing}px`,
				color: f.themes[n ? "night" : "day"].fd.txt.label
			},
			bodyBold: {
				fontFamily: `'${f.typography.text.body.fontFamily}', sans-serif`,
				fontWeight: f.typography.text.bodybold.fontWeight,
				fontSize: `${f.typography.text.bodybold.fontSize}px`,
				lineHeight: `${f.typography.text.bodybold.lineHeight}px`,
				letterSpacing: `${f.typography.text.bodybold.letterSpacing}px`,
				color: f.themes[n ? "night" : "day"].fd.txt.label
			},
			bodyMedium: {
				fontFamily: `'${f.typography.text.body.fontFamily}', sans-serif`,
				fontWeight: f.typography.text.bodymedium.fontWeight,
				fontSize: `${f.typography.text.bodymedium.fontSize}px`,
				lineHeight: `${f.typography.text.bodymedium.lineHeight}px`,
				letterSpacing: `${f.typography.text.bodymedium.letterSpacing}px`,
				color: f.themes[n ? "night" : "day"].fd.txt.label
			},
			buttonLarge: {
				fontFamily: `'${f.typography.text.body.fontFamily}', sans-serif`,
				fontWeight: f.typography.text.buttonlarge.fontWeight,
				fontSize: `${f.typography.text.buttonlarge.fontSize}px`,
				lineHeight: `${f.typography.text.buttonlarge.lineHeight}px`,
				letterSpacing: `${f.typography.text.buttonlarge.letterSpacing}px`,
				color: f.themes[n ? "night" : "day"].fd.txt.label,
				textTransform: `${f.typography.text.buttonlarge.textCase}`
			},
			buttonMedium: {
				fontFamily: `'${f.typography.text.body.fontFamily}', sans-serif`,
				fontWeight: f.typography.text.buttonmedium.fontWeight,
				fontSize: `${f.typography.text.buttonmedium.fontSize}px`,
				lineHeight: `${f.typography.text.buttonmedium.lineHeight}px`,
				letterSpacing: `${f.typography.text.buttonmedium.letterSpacing}px`,
				color: f.themes[n ? "night" : "day"].fd.txt.label,
				textTransform: `${f.typography.text.buttonmedium.textCase}`
			},
			buttonSmall: {
				fontFamily: `'${f.typography.text.body.fontFamily}', sans-serif`,
				fontWeight: f.typography.text.buttonsmall.fontWeight,
				fontSize: `${f.typography.text.buttonsmall.fontSize}px`,
				lineHeight: `${f.typography.text.buttonsmall.lineHeight}px`,
				letterSpacing: `${f.typography.text.buttonsmall.letterSpacing}px`,
				color: f.themes[n ? "night" : "day"].fd.txt.label,
				textTransform: `${f.typography.text.buttonsmall.textCase}`
			},
			caption: {
				fontFamily: `'${f.typography.text.body.fontFamily}', sans-serif`,
				fontWeight: f.typography.text.caption.fontWeight,
				fontSize: `${f.typography.text.caption.fontSize}px`,
				lineHeight: `${f.typography.text.caption.lineHeight}px`,
				letterSpacing: `${f.typography.text.caption.letterSpacing}px`,
				color: f.themes[n ? "night" : "day"].fd.txt.label
			},
			captionBold: {
				fontFamily: `'${f.typography.text.body.fontFamily}', sans-serif`,
				fontWeight: f.typography.text.captionbold.fontWeight,
				fontSize: `${f.typography.text.captionbold.fontSize}px`,
				lineHeight: `${f.typography.text.captionbold.lineHeight}px`,
				letterSpacing: `${f.typography.text.captionbold.letterSpacing}px`,
				color: f.themes[n ? "night" : "day"].fd.txt.label
			},
			captionSmallMedium: {
				fontFamily: `'${f.typography.text.body.fontFamily}', sans-serif`,
				fontWeight: f.typography.text.captionsmallmedium.fontWeight,
				fontSize: `${f.typography.text.captionsmallmedium.fontSize}px`,
				lineHeight: `${f.typography.text.captionsmallmedium.lineHeight}px`,
				letterSpacing: `${f.typography.text.captionsmallmedium.letterSpacing}px`,
				color: f.themes[n ? "night" : "day"].fd.txt.label
			},
			footnote: {
				fontFamily: `'${f.typography.text.body.fontFamily}', sans-serif`,
				fontWeight: f.typography.text.footnote.fontWeight,
				fontSize: `${f.typography.text.footnote.fontSize}px`,
				lineHeight: `${f.typography.text.footnote.lineHeight}px`,
				letterSpacing: `${f.typography.text.footnote.letterSpacing}px`,
				color: f.themes[n ? "night" : "day"].fd.txt.label
			},
			footnoteMedium: {
				fontFamily: `'${f.typography.text.body.fontFamily}', sans-serif`,
				fontWeight: f.typography.text.footnotemedium.fontWeight,
				fontSize: `${f.typography.text.footnotemedium.fontSize}px`,
				lineHeight: `${f.typography.text.footnotemedium.lineHeight}px`,
				letterSpacing: `${f.typography.text.footnotemedium.letterSpacing}px`,
				color: f.themes[n ? "night" : "day"].fd.txt.label
			},
			bigDisplayTitle: {
				fontFamily: `'${f.typography.text.body.fontFamily}', sans-serif`,
				fontWeight: f.typography.title.bigdisplaytitle.fontWeight,
				fontSize: `${f.typography.title.bigdisplaytitle.fontSize}px`,
				lineHeight: `${f.typography.title.bigdisplaytitle.lineHeight}px`,
				letterSpacing: `${f.typography.title.bigdisplaytitle.letterSpacing}px`,
				color: f.themes[n ? "night" : "day"].fd.txt.label
			},
			subheadline: {
				fontFamily: `'${f.typography.text.body.fontFamily}', sans-serif`,
				fontWeight: f.typography.text.subheadline.fontWeight,
				fontSize: `${f.typography.text.subheadline.fontSize}px`,
				lineHeight: `${f.typography.text.subheadline.lineHeight}px`,
				letterSpacing: `${f.typography.text.subheadline.letterSpacing}px`,
				color: f.themes[n ? "night" : "day"].fd.txt.label
			},
			displayTitle: {
				fontFamily: `'${f.typography.text.body.fontFamily}', sans-serif`,
				fontWeight: f.typography.title.displaytitle.fontWeight,
				fontSize: `${f.typography.title.displaytitle.fontSize}px`,
				lineHeight: `${f.typography.title.displaytitle.lineHeight}px`,
				letterSpacing: `${f.typography.title.displaytitle.letterSpacing}px`,
				color: f.themes[n ? "night" : "day"].fd.txt.label
			},
			title1: {
				fontFamily: `'${f.typography.text.body.fontFamily}', sans-serif`,
				fontWeight: f.typography.title.title1.fontWeight,
				fontSize: `${f.typography.title.title1.fontSize}px`,
				lineHeight: `${f.typography.title.title1.lineHeight}px`,
				letterSpacing: `${f.typography.title.title1.letterSpacing}px`,
				color: f.themes[n ? "night" : "day"].fd.txt.label
			},
			title2: {
				fontFamily: `'${f.typography.text.body.fontFamily}', sans-serif`,
				fontWeight: f.typography.title.title2.fontWeight,
				fontSize: `${f.typography.title.title2.fontSize}px`,
				lineHeight: `${f.typography.title.title2.lineHeight}px`,
				letterSpacing: `${f.typography.title.title2.letterSpacing}px`,
				color: f.themes[n ? "night" : "day"].fd.txt.label
			},
			title3: {
				fontFamily: `'${f.typography.text.body.fontFamily}', sans-serif`,
				fontWeight: f.typography.title.title3.fontWeight,
				fontSize: `${f.typography.title.title3.fontSize}px`,
				lineHeight: `${f.typography.title.title3.lineHeight}px`,
				letterSpacing: `${f.typography.title.title3.letterSpacing}px`,
				color: f.themes[n ? "night" : "day"].fd.txt.label
			}
		},
		components: {
			MuiTypography: {
				defaultProps: {
					variant: "body",
					variantMapping: {
						body: "p",
						bodyBold: "p",
						bodyMedium: "p",
						buttonLarge: "span",
						buttonMedium: "span",
						buttonSmall: "span",
						captionBold: "span",
						captionSmallMedium: "span",
						footnote: "p",
						footnoteMedium: "p",
						bigDisplayTitle: "h1",
						subheadline: "h6",
						displayTitle: "p",
						title1: "h2",
						title2: "h3",
						title3: "h4"
					}
				},
				styleOverrides: { gutterBottom: { marginBottom: f.density.standard.ref.spacing.betweencomponent.xl } }
			},
			MuiCssBaseline: { styleOverrides: {
				html: {
					height: "100%",
					"*::-moz-selection": {
						color: f.color.palette.white,
						background: f.color.accent
					},
					"*::selection": {
						color: f.color.palette.white,
						background: f.color.accent
					},
					scrollbarWidth: "thin",
					scrollbarColor: `${f.color.accent} ${f.color.palette.white}`,
					"& *::-webkit-scrollbar": {
						height: "8px",
						width: "10px"
					},
					"& *::-webkit-scrollbar-track": { background: f.color.palette.white },
					"& *::-webkit-scrollbar-thumb": {
						backgroundColor: f.color.accent,
						borderRadius: 20,
						border: `2px solid ${f.color.palette.white}`
					}
				},
				body: {
					height: "100%",
					"&:has(.disable-body-scroll)": { overflow: "hidden" }
				},
				"@media print": { ".hidden-print": { display: "none !important" } }
			} },
			MuiMenu: { styleOverrides: { root: { ".MuiPaper-root": {
				background: f.themes[n ? "night" : "day"].fd.bg.container.secondary,
				border: `1px solid ${f.themes[n ? "night" : "day"].fd.stroke.neutral}`,
				borderRadius: `${f.density.standard.ref.radius.small}px`,
				boxShadow: O(f.effect.elevation.medium)
			} } } },
			MuiBackdrop: { styleOverrides: {
				root: { backgroundColor: n ? "rgba(0, 0, 0, 0.30)" : "rgba(0, 0, 0, 0.25)" },
				invisible: { backgroundColor: "transparent !important" }
			} },
			MuiSelect: { styleOverrides: { select: { ...r } } },
			MuiMenuItem: { styleOverrides: { root: { ...r } } },
			MuiDataGrid: { styleOverrides: { overlay: {
				...r,
				backgroundColor: "inherit"
			} } },
			MuiListItemText: { defaultProps: { primaryTypographyProps: { variant: "body" } } },
			MuiFormLabel: { styleOverrides: { root: { fontFamily: `'${f.typography.text.body.fontFamily}', sans-serif` } } },
			MuiCardHeader: { defaultProps: { titleTypographyProps: { variant: "title2" } } },
			MuiPickersPopper: { styleOverrides: { root: { zIndex: 1400 } } }
		}
	});
	return t && (i = ln(i, t)), i;
}
//#endregion
//#region ../../node_modules/.pnpm/@ap+design-system@1.7.1_@mui+system@7.3.9_@emotion+react@11.14.0_@types+react@18.3.28_r_345119124a477cdbfd4b44df3888437c/node_modules/@ap/design-system/dist/components/APCard/index.js
var es = (e) => {
	let { children: t, ...n } = e;
	return /* @__PURE__ */ d.jsx(Xo, {
		...n,
		children: t
	});
}, ts = [
	"ChevronLeft",
	"ArrowBackIos",
	"ChevronRight",
	"ArrowForwardIos",
	"Close",
	"ZoomIn",
	"ZoomOut",
	"YoutubeSearchedFor",
	"Apps",
	"LeftPanelClose",
	"LeftPanelOpen",
	"Search",
	"Remove",
	"Add",
	"Language",
	"Build",
	"ArrowDownward",
	"ArrowUpward",
	"MoreHoriz",
	"DragIndicator"
], ns = {
	icons: [],
	weights: [300, 400],
	opticalSize: [24]
}, rs = null, is = (e) => `https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@${e.opticalSize.join("..")},${e.weights.join("..")},0..1,0&icon_names=${e.icons.map((e) => Eo(e)).sort().join(",")}&display=block`;
function as(e) {
	let { children: t } = e, n = {
		...ns,
		...e.iconsSettings
	};
	return n = {
		...n,
		icons: [.../* @__PURE__ */ new Set([...n.icons, ...ts])]
	}, (0, i.useEffect)(() => {
		n.icons && (rs || (rs = document.createElement("link"), rs.rel = "stylesheet", document.head.appendChild(rs)), rs.href = is(n));
	}, []), /* @__PURE__ */ d.jsx(i.Fragment, { children: t });
}
//#endregion
//#region ../../node_modules/.pnpm/@ap+design-system@1.7.1_@mui+system@7.3.9_@emotion+react@11.14.0_@types+react@18.3.28_r_345119124a477cdbfd4b44df3888437c/node_modules/@ap/design-system/dist/themes/APThemeProvider.js
var os = /* @__PURE__ */ i.createContext(null);
function ss() {
	return i.useContext(os);
}
var cs = typeof Symbol == "function" && Symbol.for ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function ls(e, t) {
	return typeof t == "function" ? t(e) : j({}, e, t);
}
function us(e) {
	let { children: t, theme: n } = e, r = ss(), a = i.useMemo(() => {
		let e = r === null ? n : ls(r, n);
		return e != null && (e[cs] = r !== null), e;
	}, [n, r]);
	return /* @__PURE__ */ d.jsx(os.Provider, {
		value: a,
		children: t
	});
}
var ds = {};
function fs(e, t, n, r = !1) {
	return i.useMemo(() => {
		let i = e && t[e] || t;
		if (typeof n == "function") {
			let a = n(i), o = e ? j({}, t, { [e]: a }) : a;
			return r ? () => o : o;
		}
		return e ? j({}, t, { [e]: n }) : j({}, t, n);
	}, [
		e,
		t,
		n,
		r
	]);
}
function ps(e) {
	let { children: t, theme: n, themeId: r } = e, i = ya(ds), a = ss() || ds, o = fs(r, i, n), s = fs(r, a, n, !0), c = o.direction === "rtl";
	return /* @__PURE__ */ d.jsx(us, {
		theme: s,
		children: /* @__PURE__ */ d.jsx(Yr.Provider, {
			value: o,
			children: /* @__PURE__ */ d.jsx(Uo, {
				value: c,
				children: /* @__PURE__ */ d.jsx(da, {
					value: o?.components,
					children: t
				})
			})
		})
	});
}
var ms = ["theme"];
function hs(e) {
	let { theme: t } = e, n = M(e, ms), r = t[ui], i = r || t;
	return typeof t != "function" && (r && !r.vars ? i = j({}, r, { vars: null }) : t && !t.vars && (i = j({}, t, { vars: null }))), /* @__PURE__ */ d.jsx(ps, j({}, n, {
		themeId: r ? ui : void 0,
		theme: i
	}));
}
var gs = (e, t) => j({
	WebkitFontSmoothing: "antialiased",
	MozOsxFontSmoothing: "grayscale",
	boxSizing: "border-box",
	WebkitTextSizeAdjust: "100%"
}, t && !e.vars && { colorScheme: e.palette.mode }), _s = (e) => j({ color: (e.vars || e).palette.text.primary }, e.typography.body1, {
	backgroundColor: (e.vars || e).palette.background.default,
	"@media print": { backgroundColor: (e.vars || e).palette.common.white }
}), vs = (e, t = !1) => {
	var n;
	let r = {};
	t && e.colorSchemes && Object.entries(e.colorSchemes).forEach(([t, n]) => {
		r[e.getColorSchemeSelector(t).replace(/\s*&/, "")] = { colorScheme: n.palette?.mode };
	});
	let i = j({
		html: gs(e, t),
		"*, *::before, *::after": { boxSizing: "inherit" },
		"strong, b": { fontWeight: e.typography.fontWeightBold },
		body: j({ margin: 0 }, _s(e), { "&::backdrop": { backgroundColor: (e.vars || e).palette.background.default } })
	}, r), a = (n = e.components) == null || (n = n.MuiCssBaseline) == null ? void 0 : n.styleOverrides;
	return a && (i = [i, a]), i;
};
function ys(e) {
	let { children: t, enableColorScheme: n = !1 } = ma({
		props: e,
		name: "MuiCssBaseline"
	});
	return /* @__PURE__ */ d.jsxs(i.Fragment, { children: [/* @__PURE__ */ d.jsx(Bo, { styles: (e) => vs(e, n) }), t] });
}
function bs(e) {
	let { children: t, muiTheme: n, iconsSettings: r } = e, a = (0, i.useMemo)(() => $o(e.theme, n), [e.theme, n]);
	return /* @__PURE__ */ d.jsx(oi, {
		injectFirst: !0,
		children: /* @__PURE__ */ d.jsxs(hs, {
			theme: a,
			children: [/* @__PURE__ */ d.jsx(ys, {}), /* @__PURE__ */ d.jsx(as, {
				iconsSettings: r,
				children: t
			})]
		})
	});
}
//#endregion
export { r as i, es as n, Ro as r, bs as t };
