! function(e, t) { "object" == typeof exports && "object" == typeof module ? module.exports = t(require("moment"), require("define_me"), require("whats_wrong")) : "function" == typeof define && define.amd ? define(["moment", "define_me", "whats_wrong"], t) : "object" == typeof exports ? exports.when_you_free = t(require("moment"), require("define_me"), require("whats_wrong")) : e.when_you_free = t(e.moment, e.define_me, e.whats_wrong) }(this, (function(e, t, n) { return (() => { "use strict"; var r = { 747: e => { e.exports = t }, 896: t => { t.exports = e }, 77: e => { e.exports = n } },
            o = {};

        function i(e) { var t = o[e]; if (void 0 !== t) return t.exports; var n = o[e] = { exports: {} }; return r[e](n, n.exports, i), n.exports }
        i.n = e => { var t = e && e.__esModule ? () => e.default : () => e; return i.d(t, { a: t }), t }, i.d = (e, t) => { for (var n in t) i.o(t, n) && !i.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] }) }, i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), i.r = e => { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }; var a = {}; return (() => { i.r(a), i.d(a, { catchError: () => g, createDay: () => s, createFullDate: () => u, createHour: () => n, createMinute: () => r, createMonth: () => o, dateIsWithinLimit: () => T, difference: () => M, digitalToSeconds: () => j, format: () => I, formatDateToPost: () => x, formatString: () => D, getDuration: () => _, getReadableFormat: () => S, getType: () => v, isBefore: () => b, isBetween: () => w, isDate: () => Y }); var e = i(896),
                t = i.n(e);

            function n(e, n, r) { var o = t()({ hour: e, minute: n, second: r }).toDate(); return new Date(o) }

            function r(e, n) { var r = t()({ minute: e, second: n }).toDate(); return new Date(r) }

            function o(e, n) { var r = t()({ year: e, month: n }).toDate(); return new Date(r) }

            function s(e, n, r) { 1 === (n = n.toString()).length && (n = "0" + n), 1 === (r += 1).toString().length && (r = "0" + r); var o = e + "-" + n + "-" + r; return t()(o).toDate() }

            function u(e, n, r, o, i, a) { var u = s(e, n, r); return t()(u).add(o, "h").add(i, "m").add(a, "s").toDate() } var c, f = i(747),
                l = i(77);

            function m(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

            function d(e) { return d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e }, d(e) }

            function h(e, t) { return e.startsWith(t) }

            function p(e) { return e.map(Number) }

            function y(e) { var t = e.split("T"),
                    n = p(t[0].split("-")),
                    r = p(t[1].split("Z")[0].split(":")); return u(n[0], n[1], n[2], r[0], r[1], r[2]) }

            function D(e) { e.includes(",") && (e = e.replace(",", "")); var t = e.toLowerCase().split(" ");
                console.log(t); var n, r = parseInt(t[1]); if (h(e, "j")) n = 1;
                else if (h(e, "f")) n = 2;
                else if (h(e, "mar")) n = 3;
                else if (h(e, "ap")) n = 4;
                else if (h(e, "may")) n = 5;
                else if (h(e, "jun")) n = 6;
                else if (h(e, "jul")) n = 7;
                else if (h(e, "au")) n = 8;
                else if (h(e, "s")) n = 8;
                else if (h(e, "o")) n = 10;
                else if (h(e, "n")) n = 11;
                else { if (!h(e, "d")) return (0, l.upset)("not valid date", "get type in when_you_free", "should be a valid date");
                    n = 12 } return 2 === t.length ? u((new Date).getFullYear(), n, r, 0, 0, 0) : 3 === t.length ? u(parseInt(t[2]), n, r, 0, 0, 0) : void 0 }

            function Y(e) { return !!((0, f.containsThis)(e, f.hhmm) || (0, f.containsThis)(e, f.hhmmss) || (0, f.containsThis)(e, f.dashDDMMYYYY) || (0, f.containsThis)(e, f.dashYYYYMMDD) || (0, f.containsThis)(e, f.hyphenDDMMYYYY) || (0, f.containsThis)(e, f.hyphenYYYYMMDD) || (0, f.containsThis)(e, f.yyyymmdd) || (0, f.containsThis)(e, f.knexDate) || (0, f.containsThis)(e, f.stringDate) || e instanceof Date) }

            function v(e) { try { return e instanceof Date ? y(new Date(e).toISOString()) : (0, f.containsThis)(e, f.knexDate) ? y(e) : (0, f.containsThis)(e, f.hhmm) || (0, f.containsThis)(e, f.hhmmss) ? (o = e.split(":"), i = p(o), 2 === o.length ? r(i[0], i[1]) : 3 === o.length ? n(i[0], i[1], i[2]) : void 0) : (0, f.containsThis)(e, f.dashDDMMYYYY) || (0, f.containsThis)(e, f.dashYYYYMMDD) ? function(e) { var t = e.split("/"),
                            n = p(t); return 4 === t[0].length ? u(n[0], n[1], n[2], 0, 0, 0) : u(n[2], n[1], n[0], 0, 0, 0) }(e) : (0, f.containsThis)(e, f.hyphenDDMMYYYY) || (0, f.containsThis)(e, f.hyphenYYYYMMDD) ? function(e) { var t = e.split("-"),
                            n = p(t); return 4 === t[0].length ? u(n[0], n[1], n[2], 0, 0, 0) : u(n[2], n[1], n[0], 0, 0, 0) }(e) : (0, f.containsThis)(e, f.yyyymmdd) ? (s = (a = e).slice(0, 4), c = a.slice(4, 6), m = a.slice(6, 8), u(parseInt(s), parseInt(c), parseInt(m), 0, 0, 0)) : (0, f.containsThis)(e, f.stringDate) ? D(e) : !!t()(e).isValid() && t()(e) } catch (t) { return (0, l.upset)("not valid date" + e, "gettype.js", "should be valid") } var o, i, a, s, c, m }

            function g(e) { return void 0 !== e && "object" === d(e) || (0, l.upset)("not a valid date" + e, "when_you_free module") }

            function b(e, n) { var r = v(e),
                    o = v(n); return t()(r).isBefore(o) }

            function M(e, n, r) { var o = v(e),
                    i = v(n); return Math.abs(t()(o).diff(i, r)) }

            function w(e, n, r) { var o = v(e),
                    i = v(n),
                    a = v(r); return t()(o).isBetween(i, a) }

            function T(e, n) { var r = v(e),
                    o = new Date,
                    i = t()(r),
                    a = t()(o); return t().duration({ from: i, to: a }).as("days") <= n }

            function _(t, n, r) { var o = v(t),
                    i = v(n); return console.log(o), console.log(i), (0, e.duration)({ from: o, to: i }).as(r) }

            function S(e) { var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "from",
                    r = v(e); return "from" === n ? t()(r).fromNow() : t()(r).toNow() }

            function I(e, n) { var r = { localInput: "YYYY-MM-DDTHH:mm:ss", dateInput: "YYYY-MM-DD", timeInput: "HH:mm:ss", weekInput: "GGGG-[W]WW", monthInput: "YYYY-MM", mmmddyyyy: "ll", mmmmddyyyy: "LL" },
                    o = v(e); return r[n] ? t()(o).format(r[n]) : t()(o).format(n) }

            function j(e) { var t = v.split(":"); return 60 * parseInt(t[0]) * 60 + 60 * parseInt(t[1]) + parseInt(t[2]) }

            function x(e) { var n = v(e),
                    r = t()(n).toDate(); return new Date(r) }
            m(c = { January: 0, February: 1, March: 2, April: 3, May: 4, June: 5, July: 6, August: 7, September: 8, October: 9, November: 10, December: 11, Jan: 0, Feb: 1, Mar: 2, Apr: 3 }, "May", 4), m(c, "Jun", 5), m(c, "Jul", 6), m(c, "Aug", 7), m(c, "Sep", 8), m(c, "Oct", 9), m(c, "Nov", 10), m(c, "Dec", 11) })(), a })() }));