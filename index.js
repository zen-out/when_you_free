! function(e, t) { "object" == typeof exports && "object" == typeof module ? module.exports = t(require("moment"), require("define_me"), require("bulletproof_me"), require("whats_wrong")) : "function" == typeof define && define.amd ? define(["moment", "define_me", "bulletproof_me", "whats_wrong"], t) : "object" == typeof exports ? exports.when_you_free = t(require("moment"), require("define_me"), require("bulletproof_me"), require("whats_wrong")) : e.when_you_free = t(e.moment, e.define_me, e.bulletproof_me, e.whats_wrong) }(this, (function(e, t, n, r) {
    return (() => {
        "use strict";
        var o = { 557: e => { e.exports = n }, 747: e => { e.exports = t }, 896: t => { t.exports = e }, 77: e => { e.exports = r } },
            i = {};

        function a(e) { var t = i[e]; if (void 0 !== t) return t.exports; var n = i[e] = { exports: {} }; return o[e](n, n.exports, a), n.exports }
        a.n = e => { var t = e && e.__esModule ? () => e.default : () => e; return a.d(t, { a: t }), t }, a.d = (e, t) => { for (var n in t) a.o(t, n) && !a.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] }) }, a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), a.r = e => { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) };
        var s = {};
        return (() => {
            a.r(s), a.d(s, { catchError: () => b, createDay: () => i, createFullDate: () => u, createHour: () => n, createMinute: () => r, createMonth: () => o, dateIsWithinLimit: () => w, difference: () => v, digitalToSeconds: () => A, format: () => I, formatDateToPost: () => j, formatString: () => T, getDuration: () => M, getReadableFormat: () => _, getType: () => g, isBefore: () => S, isBetween: () => D, isDate: () => Y });
            var e = a(896),
                t = a.n(e);

            function n(e, n, r) { return t()({ hour: e, minute: n, second: r }) }

            function r(e, n) { return t()({ minute: e, second: n }) }

            function o(e, n) { return t()({ year: e, month: n }) }

            function i(e, n, r) { return n -= 1, t()({ year: e, month: n, day: r }) }

            function u(e, n, r, o, i, a) { return t()({ year: e, month: n, day: r, hour: o, minute: i, second: a }) }
            t().locale("en");
            var f, c = a(747),
                m = a(557),
                l = a(77);

            function h(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
            var p = (h(f = { January: 0, February: 1, March: 2, April: 3, May: 4, June: 5, July: 6, August: 7, September: 8, October: 9, November: 10, December: 11, Jan: 0, Feb: 1, Mar: 2, Apr: 3 }, "May", 4), h(f, "Jun", 5), h(f, "Jul", 6), h(f, "Aug", 7), h(f, "Sep", 8), h(f, "Oct", 9), h(f, "Nov", 10), h(f, "Dec", 11), f);

            function d(e) { return d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e }, d(e) }

            function y(e) { return e.map(Number) }

            function T(e) {
                var t, n = (e = e.toLowerCase()).split(" "),
                    r = parseInt(n[1]);
                if ((0, m.STARTSWITH)(e, "j")) t = p.Jan;
                else if ((0, m.STARTSWITH)(e, "f")) t = p.Feb;
                else if ((0, m.STARTSWITH)(e, "mar")) t = p.Mar;
                else if ((0, m.STARTSWITH)(e, "ap")) t = p.Apr;
                else if ((0, m.STARTSWITH)(e, "may")) t = p.May;
                else if ((0, m.STARTSWITH)(e, "jun")) t = p.Jun;
                else if ((0, m.STARTSWITH)(e, "jul")) t = p.Jul;
                else if ((0, m.STARTSWITH)(e, "au")) t = p.Aug;
                else if ((0, m.STARTSWITH)(e, "s")) t = p.Sep;
                else if ((0, m.STARTSWITH)(e, "o")) t = p.Oct;
                else if ((0, m.STARTSWITH)(e, "n")) t = p.Nov;
                else {
                    if (!(0, m.STARTSWITH)(e, "d")) return (0, l.upset)("not valid date", "get type in when_you_free", "should be a valid date");
                    t = p.Dec
                }
                return 2 === n.length ? i((new Date).getFullYear(), t, r) : 3 === n.length ? i(parseInt(n[2]), t, r) : void 0
            }

            function Y(e) { return !!((0, c.containsThis)(e, c.hhmm) || (0, c.containsThis)(e, c.hhmmss) || (0, c.containsThis)(e, c.dashDDMMYYYY) || (0, c.containsThis)(e, c.dashYYYYMMDD) || (0, c.containsThis)(e, c.hyphenDDMMYYYY) || (0, c.containsThis)(e, c.hyphenYYYYMMDD) || (0, c.containsThis)(e, c.yyyymmdd) || (0, c.containsThis)(e, c.knexDate) || (0, c.containsThis)(e, c.stringDate) || e instanceof Date) }

            function g(e) {
                return (0, c.containsThis)(e, c.knexDate) ? (p = y((h = e.split("T"))[0].split("-")), d = y(h[1].split("Z")[0].split(":")), u(p[0], p[1] - 1, p[2], d[0], d[1], d[2])) : (0, c.containsThis)(e, c.hhmm) || (0, c.containsThis)(e, c.hhmmss) ? (o = e.split(":"), a = y(o), 2 === o.length ? r(a[0], a[1]) : 3 === o.length ? n(a[0], a[1], a[2]) : void 0) : (0, c.containsThis)(e, c.dashDDMMYYYY) || (0, c.containsThis)(e, c.dashYYYYMMDD) ? function(e) {
                    var t = e.split("/"),
                        n = y(t);
                    return 4 === t[0].length ? i(n[0], n[1], n[2]) : i(n[2], n[1], n[0])
                }(e) : (0, c.containsThis)(e, c.hyphenDDMMYYYY) || (0, c.containsThis)(e, c.hyphenYYYYMMDD) ? function(e) {
                    var t = e.split("-"),
                        n = y(t);
                    return 4 === t[0].length ? i(n[0], n[1], n[2]) : i(n[2], n[1], n[0])
                }(e) : (0, c.containsThis)(e, c.yyyymmdd) ? (f = (s = e).slice(0, 4), m = s.slice(4, 6), l = s.slice(6, 8), i(parseInt(f), parseInt(m), parseInt(l))) : (0, c.containsThis)(e, c.stringDate) ? T(e) : (e instanceof Date || !!t()(e).isValid()) && t()(e);
                var o, a, s, f, m, l, h, p, d
            }

            function b(e) { return void 0 !== e && "object" === d(e) || (0, l.upset)("not a valid date" + e, "when_you_free module") }

            function S(e, t) {
                var n = g(e),
                    r = g(t),
                    o = b(n),
                    i = b(r);
                return !0 == (!0 === o && !0 === i) ? n.isBefore(r) : (0, l.upset)("something wrong with date - is before function", "when_you_free/compare.js")
            }

            function v(e, t, n) {
                var r = g(e),
                    o = g(t),
                    i = b(r),
                    a = b(o);
                return i && a ? Math.abs(r.diff(o, n)) : (0, l.upset)("something wrong with date - difference function", "when_you_free/compare.js")
            }

            function D(e, t, n) {
                var r = g(e),
                    o = g(t),
                    i = g(n),
                    a = b(o),
                    s = b(i),
                    u = b(r);
                return a && s && u ? r.isBetween(o, i) : (0, l.upset)("something wrong with date - is between function", "when_you_free/compare.js")
            }

            function w(e, n) {
                var r = g(e),
                    o = new Date,
                    i = (t()(o), t()(r)),
                    a = t()(o);
                return t().duration({ from: i, to: a }).as("days") <= n
            }

            function M(t, n, r) {
                var o = g(t),
                    i = g(n);
                return console.log(o), console.log(i), (0, e.duration)({ from: o, to: i }).as(r)
            }

            function _(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "from",
                    n = g(e),
                    r = b(n);
                return r.error ? (0, l.upset)("something wrong with date", "format.js") : "from" === t ? n.fromNow() : n.toNow()
            }

            function I(e, t) {
                var n = { localInput: "YYYY-MM-DDTHH:mm:ss", dateInput: "YYYY-MM-DD", timeInput: "HH:mm:ss", weekInput: "GGGG-[W]WW", monthInput: "YYYY-MM", mmmddyyyy: "ll", mmmmddyyyy: "LL" },
                    r = g(e),
                    o = b(r);
                return o ? n[t] ? r.format(n[t]) : r.format(t) : o
            }

            function A(e) { var t = I(e, "hh:mm:ss"); if ("string" == typeof t) { var n = t.split(":"); return 60 * parseInt(n[0]) * 60 + 60 * parseInt(n[1]) + parseInt(n[2]) } return (0, l.upset)("something wrong with date", "format.js") }

            function j(e) {
                var t = g(e),
                    n = b(t);
                if (!0 !== n) return n;
                var r = t.toDate();
                return new Date(r)
            }
            t().locale("en")
        })(), s
    })()
}));