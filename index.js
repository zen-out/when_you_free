! function(e, t) { "object" == typeof exports && "object" == typeof module ? module.exports = t(require("moment"), require("define_me"), require("bulletproof_me"), require("whats_wrong")) : "function" == typeof define && define.amd ? define(["moment", "define_me", "bulletproof_me", "whats_wrong"], t) : "object" == typeof exports ? exports.when_you_free = t(require("moment"), require("define_me"), require("bulletproof_me"), require("whats_wrong")) : e.when_you_free = t(e.moment, e.define_me, e.bulletproof_me, e.whats_wrong) }(this, (function(e, t, n, r) { return (() => { "use strict"; var o = { 557: e => { e.exports = n }, 747: e => { e.exports = t }, 896: t => { t.exports = e }, 77: e => { e.exports = r } },
            i = {};

        function a(e) { var t = i[e]; if (void 0 !== t) return t.exports; var n = i[e] = { exports: {} }; return o[e](n, n.exports, a), n.exports }
        a.n = e => { var t = e && e.__esModule ? () => e.default : () => e; return a.d(t, { a: t }), t }, a.d = (e, t) => { for (var n in t) a.o(t, n) && !a.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] }) }, a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), a.r = e => { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }; var u = {}; return (() => { a.r(u), a.d(u, { catchError: () => w, createDay: () => i, createFullDate: () => s, createHour: () => n, createMinute: () => r, createMonth: () => o, dateIsWithinLimit: () => I, difference: () => M, digitalToSeconds: () => W, format: () => H, formatDateToPost: () => x, formatString: () => T, getDuration: () => A, getReadableFormat: () => j, getType: () => S, isBefore: () => D, isBetween: () => _, isDate: () => v }); var e = a(896),
                t = a.n(e);

            function n(e, n, r) { return t()({ hour: e, minute: n, second: r }) }

            function r(e, n) { return t()({ minute: e, second: n }) }

            function o(e, n) { return t()({ year: e, month: n }) }

            function i(e, n, r) { return n -= 1, t()({ year: e, month: n, day: r }) }

            function s(e, n, r, o, i, a) { return t()({ year: e, month: n, day: r, hour: o, minute: i, second: a }) }
            t().locale("en"); var f, c = a(747),
                l = a(557),
                m = a(77);

            function p(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e } var h = (p(f = { January: 0, February: 1, March: 2, April: 3, May: 4, June: 5, July: 6, August: 7, September: 8, October: 9, November: 10, December: 11, Jan: 0, Feb: 1, Mar: 2, Apr: 3 }, "May", 4), p(f, "Jun", 5), p(f, "Jul", 6), p(f, "Aug", 7), p(f, "Sep", 8), p(f, "Oct", 9), p(f, "Nov", 10), p(f, "Dec", 11), f);

            function d(e) { return d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e }, d(e) }

            function y(e) { return e.map(Number) }

            function T(e) { var t, n = (e = (e = e.replaceAll(",", "")).toLowerCase().trim()).split(" "),
                    r = parseInt(n[1]); if ((0, l.STARTSWITH)(e, "j")) t = h.Jan;
                else if ((0, l.STARTSWITH)(e, "f")) t = h.Feb;
                else if ((0, l.STARTSWITH)(e, "mar")) t = h.Mar;
                else if ((0, l.STARTSWITH)(e, "ap")) t = h.Apr;
                else if ((0, l.STARTSWITH)(e, "may")) t = h.May;
                else if ((0, l.STARTSWITH)(e, "jun")) t = h.Jun;
                else if ((0, l.STARTSWITH)(e, "jul")) t = h.Jul;
                else if ((0, l.STARTSWITH)(e, "au")) t = h.Aug;
                else if ((0, l.STARTSWITH)(e, "s")) t = h.Sep;
                else if ((0, l.STARTSWITH)(e, "o")) t = h.Oct;
                else if ((0, l.STARTSWITH)(e, "n")) t = h.Nov;
                else { if (!(0, l.STARTSWITH)(e, "d")) return (0, m.upset)("not valid date", "get type in when_you_free", "should be a valid date");
                    t = h.Dec } return 2 === n.length ? i((new Date).getFullYear(), t, r) : 3 === n.length ? i(parseInt(n[2]), t, r) : void 0 }

            function Y(e) { var t = e.split(":"),
                    o = y(t); return 2 === t.length ? r(o[0], o[1]) : 3 === t.length ? n(o[0], o[1], o[2]) : void 0 }

            function g(e) { var t = e.split("/"),
                    n = y(t); return 4 === t[0].length ? i(n[0], n[1], n[2]) : i(n[2], n[1], n[0]) }

            function b(e) { var t = e.split("-"),
                    n = y(t); return 4 === t[0].length ? i(n[0], n[1], n[2]) : i(n[2], n[1], n[0]) }

            function v(e) { return !!((0, c.containsThis)(e, c.hhmm) || (0, c.containsThis)(e, c.hhmmss) || (0, c.containsThis)(e, c.dashDDMMYYYY) || (0, c.containsThis)(e, c.dashYYYYMMDD) || (0, c.containsThis)(e, c.hyphenDDMMYYYY) || (0, c.containsThis)(e, c.hyphenYYYYMMDD) || (0, c.containsThis)(e, c.yyyymmdd) || (0, c.containsThis)(e, c.knexDate) || (0, c.containsThis)(e, c.stringDate) || e instanceof Date) }

            function S(e) { if ((0, c.containsThis)(e, c.knexDate)) return l = y((f = e.split("T"))[0].split("-")), m = y(f[1].split("Z")[0].split(":")), s(l[0], l[1] - 1, l[2], m[0], m[1], m[2]); if ((0, c.containsThis)(e, c.hhmm)) return Y(e); if ((0, c.containsThis)(e, c.hhmmss)) return Y(e); if ((0, c.containsThis)(e, c.dashDDMMYYYY)) return g(e); if ((0, c.containsThis)(e, c.dashYYYYMMDD)) return g(e); if ((0, c.containsThis)(e, c.hyphenDDMMYYYY)) return b(e); if ((0, c.containsThis)(e, c.hyphenYYYYMMDD)) return b(e); if ((0, c.containsThis)(e, c.yyyymmdd)) return o = (r = e).slice(0, 4), a = r.slice(4, 6), u = r.slice(6, 8), i(parseInt(o), parseInt(a), parseInt(u)); if ((0, c.containsThis)(e, c.stringDate)) { var n = e.replace(",", ""); return T(n = n.toLowerCase().trim()) } return (e instanceof Date || !!t()(e).isValid()) && t()(e); var r, o, a, u, f, l, m }

            function w(e) { return void 0 !== e && "object" === d(e) || (0, m.upset)("not a valid date" + e, "when_you_free module") }

            function D(e, t) { var n = S(e),
                    r = S(t),
                    o = w(n),
                    i = w(r); return !0 == (!0 === o && !0 === i) ? n.isBefore(r) : (0, m.upset)("something wrong with date - is before function", "when_you_free/compare.js") }

            function M(e, t, n) { var r = S(e),
                    o = S(t),
                    i = w(r),
                    a = w(o); return i && a ? Math.abs(r.diff(o, n)) : (0, m.upset)("something wrong with date - difference function", "when_you_free/compare.js") }

            function _(e, t, n) { var r = S(e),
                    o = S(t),
                    i = S(n),
                    a = w(o),
                    u = w(i),
                    s = w(r); return a && u && s ? r.isBetween(o, i) : (0, m.upset)("something wrong with date - is between function", "when_you_free/compare.js") }

            function I(e, n) { var r = S(e),
                    o = new Date,
                    i = (t()(o), t()(r)),
                    a = t()(o); return t().duration({ from: i, to: a }).as("days") <= n }

            function A(t, n, r) { var o = S(t),
                    i = S(n); return console.log(o), console.log(i), (0, e.duration)({ from: o, to: i }).as(r) }

            function j(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "from",
                    n = S(e),
                    r = w(n); return r.error ? (0, m.upset)("something wrong with date", "format.js") : "from" === t ? n.fromNow() : n.toNow() }

            function H(e, t) { var n = { localInput: "YYYY-MM-DDTHH:mm:ss", dateInput: "YYYY-MM-DD", timeInput: "HH:mm:ss", weekInput: "GGGG-[W]WW", monthInput: "YYYY-MM", mmmddyyyy: "ll", mmmmddyyyy: "LL" },
                    r = S(e),
                    o = w(r); return o ? n[t] ? r.format(n[t]) : r.format(t) : o }

            function W(e) { var t = H(e, "hh:mm:ss"); if ("string" == typeof t) { var n = t.split(":"); return 60 * parseInt(n[0]) * 60 + 60 * parseInt(n[1]) + parseInt(n[2]) } return (0, m.upset)("something wrong with date", "format.js") }

            function x(e) { var t = S(e),
                    n = w(t); if (!0 !== n) return n; var r = t.toDate(); return new Date(r) }
            t().locale("en") })(), u })() }));