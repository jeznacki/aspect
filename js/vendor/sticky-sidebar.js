/*!
 * float-sidebar - Lightweight, vanilla javascript library for making smart float sidebars
 * @version v1.1.0
 * @link https://github.com/vursen/FloatSidebar.js
 * @author Sergey Vinogradov
 * @license The MIT License (MIT)
 */
!function (t, n) {
    "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define([], n) : "object" == typeof exports ? exports.FloatSidebar = n() : t.FloatSidebar = n()
}(window, function () {
    return function (t) {
        var n = {};

        function e(i) {
            if (n[i]) return n[i].exports;
            var o = n[i] = {i: i, l: !1, exports: {}};
            return t[i].call(o.exports, o, o.exports, e), o.l = !0, o.exports
        }

        return e.m = t, e.c = n, e.d = function (t, n, i) {
            e.o(t, n) || Object.defineProperty(t, n, {configurable: !1, enumerable: !0, get: i})
        }, e.r = function (t) {
            Object.defineProperty(t, "__esModule", {value: !0})
        }, e.n = function (t) {
            var n = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            };
            return e.d(n, "a", n), n
        }, e.o = function (t, n) {
            return Object.prototype.hasOwnProperty.call(t, n)
        }, e.p = "", e(e.s = 0)
    }([function (t, n, e) {
        "use strict";
        e.r(n);
        var i, o = "START", r = "TOP_FIXED", s = "UNFIXED", u = "BOTTOM_FIXED", a = "FINISH";

        function p(t, n, e) {
            return n in t ? Object.defineProperty(t, n, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = e, t
        }

        var c, f = (p(i = {}, o, [{
            to: a, when: function (t) {
                return [!0 === t.isSideInnerFitsPath, t.viewportTop + t.sideInnerHeight >= t.finishPoint]
            }
        }, {
            to: u, when: function (t) {
                return [!0 === t.isSideInnerFitsPath, !1 === t.isSideInnerFitsViewport, t.viewportBottom >= t.sideInnerBottom + t.bottomSpacing]
            }
        }, {
            to: r, when: function (t) {
                return [!0 === t.isSideInnerFitsPath, !0 === t.isSideInnerFitsViewport, t.viewportTop >= t.startPoint - t.topSpacing]
            }
        }]), p(i, r, [{
            to: o, when: function (t) {
                return [!1 === t.isSideInnerFitsPath]
            }
        }, {
            to: o, when: function (t) {
                return [t.viewportTop <= t.startPoint - t.topSpacing]
            }
        }, {
            to: a, when: function (t) {
                return [t.sideInnerBottom >= t.finishPoint]
            }
        }, {
            to: s, when: function (t) {
                return ["down" === t.scrollDirection, !1 === t.isSideInnerFitsViewport]
            }
        }]), p(i, s, [{
            to: o, when: function (t) {
                return [!1 === t.isSideInnerFitsPath]
            }
        }, {
            to: r, when: function (t) {
                return [t.viewportTop <= t.sideInnerTop - t.topSpacing]
            }
        }, {
            to: r, when: function (t) {
                return [!0 === t.isSideInnerFitsViewport, t.viewportBottom >= t.sideInnerBottom + t.bottomSpacing]
            }
        }, {
            to: u, when: function (t) {
                return [!1 === t.isSideInnerFitsViewport, t.viewportBottom >= t.sideInnerBottom + t.bottomSpacing]
            }
        }]), p(i, u, [{
            to: o, when: function (t) {
                return [!1 === t.isSideInnerFitsPath]
            }
        }, {
            to: s, when: function (t) {
                return ["up" === t.scrollDirection]
            }
        }, {
            to: r, when: function (t) {
                return [!0 === t.isSideInnerFitsViewport]
            }
        }, {
            to: a, when: function (t) {
                return [t.sideInnerBottom >= t.finishPoint]
            }
        }]), p(i, a, [{
            to: o, when: function (t) {
                return [!1 === t.isSideInnerFitsPath]
            }
        }, {
            to: u, when: function (t) {
                return [t.sideInnerBottom + t.bottomSpacing <= t.finishPoint, t.viewportBottom <= t.finishPoint]
            }
        }, {
            to: r, when: function (t) {
                return [t.viewportTop <= t.sideInnerTop - t.topSpacing]
            }
        }]), i);

        function d(t, n, e) {
            return n in t ? Object.defineProperty(t, n, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = e, t
        }

        var l = (d(c = {}, o, function (t, n) {
            var e = n.$sideInner;
            e.style.position = "absolute", e.style.top = "0", e.style.bottom = "auto"
        }), d(c, r, function (t, n) {
            var e = n.$sideInner;
            e.style.position = "fixed", e.style.top = t.topSpacing + "px", e.style.bottom = "auto"
        }), d(c, s, function (t, n) {
            var e = n.$sideInner;
            e.style.position = "absolute", e.style.top = t.sideInnerTop - t.startPoint + "px", e.style.bottom = "auto"
        }), d(c, u, function (t, n) {
            var e = n.$sideInner;
            e.style.position = "fixed", e.style.top = "auto", e.style.bottom = t.bottomSpacing + "px"
        }), d(c, a, function (t, n) {
            var e = n.$sideInner;
            e.style.position = "absolute", e.style.top = "auto", e.style.bottom = "0"
        }), c);
        var h = function (t) {
            var n = t.actions, e = t.transitions, i = t.initialState;
            return {
                findTransitionFor: function () {
                    for (var t = arguments.length, n = Array(t), o = 0; o < t; o++) n[o] = arguments[o];

                    return e[i].find(function (t) {
                        return t.when.apply(void 0, n).every(function (t) {
                            return t
                        })
                    })
                }, performTransition: function (t) {
                    var e = t.to;
                    return function () {
                        i = e, n[e].apply(n, arguments)
                    }
                }
            }
        };
        var v = function (t) {
            var n = void 0;
            return function () {
                n || (n = requestAnimationFrame(function () {
                    n = null, t()
                }))
            }
        }, w = function (t) {
            var n = t.clientHeight || t.innerHeight, e = t.scrollTop || t.pageYOffset;
            return {top: e, bottom: e + n, height: n}
        }, m = function (t, n) {
            var e = t.getBoundingClientRect();
            return {top: e.top + n, bottom: e.bottom + n, height: e.height}
        };
        var g = function (t, n) {
            var e = n.$viewport, i = n.$relative, o = n.$sideInner, r = n.$sideOuter, s = n.topSpacing,
                u = n.bottomSpacing, a = {}, p = function () {
                    var t, n = w(e), p = m(o, n.top), c = m(r, n.top), f = m(i, n.top),
                        d = (t = n.top, a.viewportTop < t ? "down" : a.viewportTop > t ? "up" : "notChanged"), l = c.top,
                        h = f.bottom, v = h - l, g = p.height + s + u < n.height, b = p.height < v,
                        I = Math.max(p.height, v);
                    return {
                        startPoint: l,
                        finishPoint: h,
                        topSpacing: s,
                        bottomSpacing: u,
                        scrollDirection: d,
                        isSideInnerFitsPath: b,
                        isSideInnerFitsViewport: g,
                        sideOuterHeight: I,
                        viewportTop: n.top,
                        viewportBottom: n.bottom,
                        sideInnerTop: p.top,
                        sideInnerBottom: p.bottom,
                        sideInnerHeight: p.height
                    }
                }, c = v(function () {
                    var n = p();
                    t(a, n), a = n
                });
            return {
                start: function () {
                    e.addEventListener("scroll", c), e.addEventListener("resize", c), c()
                }, stop: function () {
                    e.removeEventListener("scroll", c), e.removeEventListener("resize", c)
                }, tick: c
            }
        };
        n.default = function (t) {
            var n = t.viewport || window, e = t.sidebar, i = t.sidebarInner || e.firstElementChild, r = t.relative,
                s = t.topSpacing || 0, u = t.bottomSpacing || 0, a = h({actions: l, transitions: f, initialState: o}),
                p = g(function (t, n) {
                    var o = a.findTransitionFor(n);
                    o && a.performTransition(o)(n, {$sideInner: i, $sideOuter: e, $relative: r}), c(t, n)
                }, {$viewport: n, $sideOuter: e, $sideInner: i, $relative: r, topSpacing: s, bottomSpacing: u}),
                c = function (t, n) {
                    Math.abs((t.sideOuterHeight || 0) - n.sideOuterHeight) >= 1 && (e.style.height = n.sideOuterHeight + "px")
                };
            return requestAnimationFrame(function () {
                e.style.willChange = "height", i.style.willChange = "transform", p.start()
            }), {
                forceUpdate: function () {
                    p.tick()
                }, destroy: function () {
                    p.stop()
                }
            }
        }
    }]).default
});