! function(e, t) { "object" == typeof exports && "object" == typeof module ? module.exports = t(require("moment"), require("define_me"), require("whats_wrong")) : "function" == typeof define && define.amd ? define(["moment", "define_me", "whats_wrong"], t) : "object" == typeof exports ? exports.when_you_free = t(require("moment"), require("define_me"), require("whats_wrong")) : e.when_you_free = t(e.moment, e.define_me, e.whats_wrong) }(this, (function(e, t, n) { return (() => { "use strict"; var r = { 747: e => { e.exports = t }, 896: t => { t.exports = e }, 77: e => { e.exports = n } },
            o = {};

        function i(e) { var t = o[e]; if (void 0 !== t) return t.exports; var n = o[e] = { exports: {} }; return r[e](n, n.exports, i), n.exports }
        i.n = e => { var t = e && e.__esModule ? () => e.default : () => e; return i.d(t, { a: t }), t }, i.d = (e, t) => { for (var n in t) i.o(t, n) && !i.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] }) }, i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), i.r = e => { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }; var a = {}; return (() => { i.r(a), i.d(a, { catchError: () => y, createDay: () => s, createFullDate: () => u, createHour: () => n, createMinute: () => r, createMonth: () => o, dateIsWithinLimit: () => g, difference: () => Y, digitalToSeconds: () => _, format: () => M, formatDateToPost: () => b, getDuration: () => D, getReadableFormat: () => v, getType: () => d, isBefore: () => l, isBetween: () => w, isDate: () => h }); var e = i(896),
                t = i.n(e);

            function n(e, n, r) { return t()({ hour: e, minute: n, second: r }) }

            function r(e, n) { return t()({ minute: e, second: n }) }

            function o(e, n) { return t()({ year: e, month: n }) }

            function s(e, n, r) { return n -= 1, t()({ year: e, month: n, day: r }) }

            function u(e, n, r, o, i, a) { return t()({ year: e, month: n, day: r, hour: o, minute: i, second: a }) }
            t().locale("en"); var f = i(747);

            function c(e) { return c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e }, c(e) }

            function m(e) { return e.map(Number) }

            function h(e) { return !!((0, f.containsThis)(e, f.hhmm) || (0, f.containsThis)(e, f.hhmmss) || (0, f.containsThis)(e, f.dashDDMMYYYY) || (0, f.containsThis)(e, f.dashYYYYMMDD) || (0, f.containsThis)(e, f.hyphenDDMMYYYY) || (0, f.containsThis)(e, f.hyphenYYYYMMDD) || (0, f.containsThis)(e, f.yyyymmdd) || (0, f.containsThis)(e, f.knexDate) || (0, f.containsThis)(e, f.stringDate) || e instanceof Date) }

            function d(e) { return (0, f.containsThis)(e, f.hhmm) || (0, f.containsThis)(e, f.hhmmss) ? (o = e.split(":"), i = m(o), 2 === o.length ? r(i[0], i[1]) : 3 === o.length ? n(i[0], i[1], i[2]) : void 0) : (0, f.containsThis)(e, f.dashDDMMYYYY) || (0, f.containsThis)(e, f.dashYYYYMMDD) ? function(e) { var t = e.split("/"),
                        n = m(t); return 4 === t[0].length ? s(n[0], n[1], n[2]) : s(n[2], n[1], n[0]) }(e) : (0, f.containsThis)(e, f.hyphenDDMMYYYY) || (0, f.containsThis)(e, f.hyphenYYYYMMDD) ? function(e) { var t = e.split("-"),
                        n = m(t); return 4 === t[0].length ? s(n[0], n[1], n[2]) : s(n[2], n[1], n[0]) }(e) : (0, f.containsThis)(e, f.yyyymmdd) ? (u = (a = e).slice(0, 4), c = a.slice(4, 6), h = a.slice(6, 8), s(parseInt(u), parseInt(c), parseInt(h))) : ((0, f.containsThis)(e, f.knexDate) || (0, f.containsThis)(e, f.stringDate) || e instanceof Date || !!t()(e).isValid()) && t()(e); var o, i, a, u, c, h }

            function y(e) { return void 0 !== e && "object" === c(e) || upset("not a valid date" + e, "when_you_free module") }
            t().locale("en"); var p = i(77);

            function l(e, t) { var n = d(e),
                    r = d(t),
                    o = y(n),
                    i = y(r); return !0 == (!0 === o && !0 === i) ? n.isBefore(r) : (0, p.upset)("something wrong with date - is before function", "when_you_free/compare.js") }

            function Y(e, t, n) { var r = d(e),
                    o = d(t),
                    i = y(r),
                    a = y(o); return i && a ? Math.abs(r.diff(o, n)) : (0, p.upset)("something wrong with date - difference function", "when_you_free/compare.js") }

            function w(e, t, n) { var r = d(e),
                    o = d(t),
                    i = d(n),
                    a = y(o),
                    s = y(i),
                    u = y(r); return a && s && u ? r.isBetween(o, i) : (0, p.upset)("something wrong with date - is between function", "when_you_free/compare.js") }

            function g(e, n) { var r = d(e),
                    o = new Date,
                    i = (t()(o), t()(r)),
                    a = t()(o); return t().duration({ from: i, to: a }).as("days") <= n }

            function D(t, n, r) { var o = d(t),
                    i = d(n),
                    a = y(o),
                    s = y(i); return !0 == (!0 === a && !0 === s) ? (0, e.duration)({ from: o, to: i }).as(r) : (0, p.upset)("something wrong with date - get duration function", "when_you_free/duration.js") }

            function v(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "from",
                    n = d(e),
                    r = y(n); return r.error ? (0, p.upset)("something wrong with date", "format.js") : "from" === t ? n.fromNow() : n.toNow() }

            function M(e, t) { var n = { localInput: "YYYY-MM-DDTHH:mm:ss", dateInput: "YYYY-MM-DD", timeInput: "HH:mm:ss", weekInput: "GGGG-[W]WW", monthInput: "YYYY-MM", mmmddyyyy: "ll", mmmmddyyyy: "LL" },
                    r = d(e),
                    o = y(r); return o ? n[t] ? r.format(n[t]) : r.format(t) : o }

            function _(e) { var t = M(e, "hh:mm:ss"); if ("string" == typeof t) { var n = t.split(":"); return 60 * parseInt(n[0]) * 60 + 60 * parseInt(n[1]) + parseInt(n[2]) } return (0, p.upset)("something wrong with date", "format.js") }

            function b(e) { var t = d(e),
                    n = y(t); if (!0 !== n) return n; var r = t.toDate(); return new Date(r) } })(), a })() }));