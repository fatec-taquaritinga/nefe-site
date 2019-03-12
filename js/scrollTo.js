! function (e, t) {
  "function" == typeof define && define.amd ? define([], t(e)) : "object" == typeof exports ? module.exports = t(e) : e.smoothScroll = t(e)
}("undefined" != typeof global ? global : this.window || this.global, function (y) {
  "use strict";
  var c, t, O, S, I, r = {},
    n = "querySelector" in document && "addEventListener" in y,
    H = {
      selector: "[data-scroll]",
      selectorHeader: "[data-scroll-header]",
      speed: 500,
      easing: "easeInOutQuad",
      offset: 40,
      updateURL: !0,
      callback: function () {}
    },
    E = function () {
      var n = {},
        r = !1,
        e = 0,
        t = arguments.length;
      "[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (r = arguments[0], e++);
      for (var o = function (e) {
          for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (r && "[object Object]" === Object.prototype.toString.call(e[t]) ? n[t] = E(!0, n[t], e[t]) : n[t] = e[t])
        }; e < t; e++) {
        o(arguments[e])
      }
      return n
    };
  r.escapeCharacters = function (e) {
    "#" === e.charAt(0) && (e = e.substr(1));
    for (var t, n = String(e), r = n.length, o = -1, a = "", c = n.charCodeAt(0); ++o < r;) {
      if (0 === (t = n.charCodeAt(o))) throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
      a += 1 <= t && t <= 31 || 127 == t || 0 === o && 48 <= t && t <= 57 || 1 === o && 48 <= t && t <= 57 && 45 === c ? "\\" + t.toString(16) + " " : 128 <= t || 45 === t || 95 === t || 48 <= t && t <= 57 || 65 <= t && t <= 90 || 97 <= t && t <= 122 ? n.charAt(o) : "\\" + n.charAt(o)
    }
    return "#" + a
  };
  var j = function (e) {
    return null === e ? 0 : (t = e, Math.max(t.scrollHeight, t.offsetHeight, t.clientHeight) + e.offsetTop);
    var t
  };
  r.animateScroll = function (i, u, e) {
    var t, n, r, o = (t = u ? u.getAttribute("data-options") : null) && "object" == typeof JSON && "function" == typeof JSON.parse ? JSON.parse(t) : {},
      s = E(c || H, e || {}, o),
      l = "[object Number]" === Object.prototype.toString.call(i),
      f = l ? null : "#" === i ? y.document.documentElement : y.document.querySelector(i);
    if (l || f) {
      var d = y.pageYOffset;
      O || (O = y.document.querySelector(s.selectorHeader)), S || (S = j(O));
      var h, p, m = l ? i : function (e, t, n) {
          var r = 0;
          if (e.offsetParent)
            for (; r += e.offsetTop, e = e.offsetParent;);
          return 0 <= (r = r - t - n) ? r : 0
        }(f, S, parseInt(s.offset, 10)),
        g = m - d,
        b = Math.max(y.document.body.scrollHeight, y.document.documentElement.scrollHeight, y.document.body.offsetHeight, y.document.documentElement.offsetHeight, y.document.body.clientHeight, y.document.documentElement.clientHeight),
        v = 0;
      l || (n = i, r = s.updateURL, y.history.pushState && (r || "true" === r) && "file:" !== y.location.protocol && y.history.pushState(null, null, [y.location.protocol, "//", y.location.host, y.location.pathname, y.location.search, n].join("")));
      var a = function () {
        var e, t, n, r, o, a, c;
        h = 1 < (h = (v += 16) / parseInt(s.speed, 10)) ? 1 : h, p = d + g * (o = s.easing, a = h, "easeInQuad" === o && (c = a * a), "easeOutQuad" === o && (c = a * (2 - a)), "easeInOutQuad" === o && (c = a < .5 ? 2 * a * a : (4 - 2 * a) * a - 1), "easeInCubic" === o && (c = a * a * a), "easeOutCubic" === o && (c = --a * a * a + 1), "easeInOutCubic" === o && (c = a < .5 ? 4 * a * a * a : (a - 1) * (2 * a - 2) * (2 * a - 2) + 1), "easeInQuart" === o && (c = a * a * a * a), "easeOutQuart" === o && (c = 1 - --a * a * a * a), "easeInOutQuart" === o && (c = a < .5 ? 8 * a * a * a * a : 1 - 8 * --a * a * a * a), "easeInQuint" === o && (c = a * a * a * a * a), "easeOutQuint" === o && (c = 1 + --a * a * a * a * a), "easeInOutQuint" === o && (c = a < .5 ? 16 * a * a * a * a * a : 1 + 16 * --a * a * a * a * a), c || a), y.scrollTo(0, Math.floor(p)), e = p, t = m, n = I, r = y.pageYOffset, (e == t || r == t || y.innerHeight + r >= b) && (clearInterval(n), l || f.focus(), s.callback(i, u))
      };
      0 === y.pageYOffset && y.scrollTo(0, 0), clearInterval(I), I = setInterval(a, 16)
    }
  };
  var o = function (e) {
      if (0 === e.button && !e.metaKey && !e.ctrlKey) {
        var t = function (e, t) {
          var n, r, o = t.charAt(0),
            a = "classList" in document.documentElement;
          for ("[" === o && 1 < (n = (t = t.substr(1, t.length - 2)).split("=")).length && (r = !0, n[1] = n[1].replace(/"/g, "").replace(/'/g, "")); e && e !== document; e = e.parentNode) {
            if ("." === o)
              if (a) {
                if (e.classList.contains(t.substr(1))) return e
              } else if (new RegExp("(^|\\s)" + t.substr(1) + "(\\s|$)").test(e.className)) return e;
            if ("#" === o && e.id === t.substr(1)) return e;
            if ("[" === o && e.hasAttribute(n[0])) {
              if (!r) return e;
              if (e.getAttribute(n[0]) === n[1]) return e
            }
            if (e.tagName.toLowerCase() === t) return e
          }
          return null
        }(e.target, c.selector);
        if (t && "a" === t.tagName.toLowerCase()) {
          e.preventDefault();
          var n = r.escapeCharacters(t.hash);
          r.animateScroll(n, t, c)
        }
      }
    },
    a = function (e) {
      t || (t = setTimeout(function () {
        t = null, S = j(O)
      }, 66))
    };
  return r.destroy = function () {
    c && (y.document.removeEventListener("click", o, !1), y.removeEventListener("resize", a, !1), I = S = O = t = c = null)
  }, r.init = function (e) {
    n && (r.destroy(), c = E(H, e || {}), O = y.document.querySelector(c.selectorHeader), S = j(O), y.document.addEventListener("click", o, !1), O && y.addEventListener("resize", a, !1))
  }, r
});
