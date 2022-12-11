/*! For license information please see main.js.LICENSE.txt */
!(function () {
  'use strict';
  var t = {
      917: function (t, n, e) {
        var r = e(81),
          o = e.n(r),
          i = e(645),
          a = e.n(i)()(o());
        a.push([
          t.id,
          "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",
          ''
        ]),
          (n.Z = a);
      },
      28: function (t, n, e) {
        var r = e(81),
          o = e.n(r),
          i = e(645),
          a = e.n(i),
          c = e(667),
          s = e.n(c),
          l = new URL(e(303), e.b),
          u = a()(o()),
          p = s()(l);
        u.push([
          t.id,
          ":root {\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-weight: 500;\n}\n\nbody {\n    background-image: url(" +
            p +
            ");\n    background-size: cover;\n    background-attachment: fixed;\n}\n\n.search-container {\n    position: absolute;\n    top: calc(var(--innerHeight) / 2 - 25px);\n    left: calc(var(--innerWidth) / 2 - 150px);\n\n    height: 50px;\n    width: 300px;\n\n    display: flex;\n}\n\n.search-container.display-active {\n    top: max(250px,calc(var(--innerHeight) / 2 - 25px));\n}\n\n.search-input {\n    flex: 1;\n\n    border: 0px;\n    border-radius: 4px;\n    background-color: rgba(255, 255, 255, 0.2);\n\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 20px;\n    font-weight: 600;\n\n    padding: 0px 10px 0px 10px;\n\n    color: black;\n}\n\n.search-input:focus {\n    outline: none;\n}\n\n.error-message {\n    position: absolute;\n    top: 50px;\n    \n    height: 50px;\n    width: 100%;\n    padding: 5px 0px 0px 10px;\n\n    color: red;\n\n    display: none;\n}\n\n.error-message.active {\n    display: block;\n}\n\n.content-container {\n    position: absolute;\n    padding: 30px 0px 0px 30px;\n\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n\n    display: none;\n}\n\n.content-container.active {\n    display: flex;\n}\n\n.location-label {\n    font-size: 30px;\n}\n\n.temperature-label {\n    font-size: 90px;\n}\n\n.temperature-max-label::before {\n    content: 'High: ';\n}\n\n.temperature-min-label::before {\n    content: 'Low: ';\n}\n\n.temperature-label::after , .temperature-max-label::after , .temperature-min-label::after {\n    content: 'ºF';\n}\n\n/* loading icon */\n\n.lds-ellipsis {\n    position: absolute;\n    top: calc(var(--innerHeight) / 2 - 40px - 50px);\n    left: calc(var(--innerWidth) / 2 - 40px);\n\n    display: inline-block;\n    width: 80px;\n    height: 80px;\n\n    display: none;\n  }\n  .lds-ellipsis div {\n    position: absolute;\n    top: 33px;\n    width: 13px;\n    height: 13px;\n    border-radius: 50%;\n    background: #fff;\n    animation-timing-function: cubic-bezier(0, 1, 1, 0);\n  }\n  .lds-ellipsis div:nth-child(1) {\n    left: 8px;\n    animation: lds-ellipsis1 0.6s infinite;\n  }\n  .lds-ellipsis div:nth-child(2) {\n    left: 8px;\n    animation: lds-ellipsis2 0.6s infinite;\n  }\n  .lds-ellipsis div:nth-child(3) {\n    left: 32px;\n    animation: lds-ellipsis2 0.6s infinite;\n  }\n  .lds-ellipsis div:nth-child(4) {\n    left: 56px;\n    animation: lds-ellipsis3 0.6s infinite;\n  }\n  @keyframes lds-ellipsis1 {\n    0% {\n      transform: scale(0);\n    }\n    100% {\n      transform: scale(1);\n    }\n  }\n  @keyframes lds-ellipsis3 {\n    0% {\n      transform: scale(1);\n    }\n    100% {\n      transform: scale(0);\n    }\n  }\n  @keyframes lds-ellipsis2 {\n    0% {\n      transform: translate(0, 0);\n    }\n    100% {\n      transform: translate(24px, 0);\n    }\n  }\n\n  .lds-ellipsis.active {\n    display: inline-block;\n  }",
          ''
        ]),
          (n.Z = u);
      },
      645: function (t) {
        t.exports = function (t) {
          var n = [];
          return (
            (n.toString = function () {
              return this.map(function (n) {
                var e = '',
                  r = void 0 !== n[5];
                return (
                  n[4] && (e += '@supports ('.concat(n[4], ') {')),
                  n[2] && (e += '@media '.concat(n[2], ' {')),
                  r &&
                    (e += '@layer'.concat(
                      n[5].length > 0 ? ' '.concat(n[5]) : '',
                      ' {'
                    )),
                  (e += t(n)),
                  r && (e += '}'),
                  n[2] && (e += '}'),
                  n[4] && (e += '}'),
                  e
                );
              }).join('');
            }),
            (n.i = function (t, e, r, o, i) {
              'string' == typeof t && (t = [[null, t, void 0]]);
              var a = {};
              if (r)
                for (var c = 0; c < this.length; c++) {
                  var s = this[c][0];
                  null != s && (a[s] = !0);
                }
              for (var l = 0; l < t.length; l++) {
                var u = [].concat(t[l]);
                (r && a[u[0]]) ||
                  (void 0 !== i &&
                    (void 0 === u[5] ||
                      (u[1] = '@layer'
                        .concat(u[5].length > 0 ? ' '.concat(u[5]) : '', ' {')
                        .concat(u[1], '}')),
                    (u[5] = i)),
                  e &&
                    (u[2]
                      ? ((u[1] = '@media '
                          .concat(u[2], ' {')
                          .concat(u[1], '}')),
                        (u[2] = e))
                      : (u[2] = e)),
                  o &&
                    (u[4]
                      ? ((u[1] = '@supports ('
                          .concat(u[4], ') {')
                          .concat(u[1], '}')),
                        (u[4] = o))
                      : (u[4] = ''.concat(o))),
                  n.push(u));
              }
            }),
            n
          );
        };
      },
      667: function (t) {
        t.exports = function (t, n) {
          return (
            n || (n = {}),
            t
              ? ((t = String(t.__esModule ? t.default : t)),
                /^['"].*['"]$/.test(t) && (t = t.slice(1, -1)),
                n.hash && (t += n.hash),
                /["'() \t\n]|(%20)/.test(t) || n.needQuotes
                  ? '"'.concat(
                      t.replace(/"/g, '\\"').replace(/\n/g, '\\n'),
                      '"'
                    )
                  : t)
              : t
          );
        };
      },
      81: function (t) {
        t.exports = function (t) {
          return t[1];
        };
      },
      379: function (t) {
        var n = [];
        function e(t) {
          for (var e = -1, r = 0; r < n.length; r++)
            if (n[r].identifier === t) {
              e = r;
              break;
            }
          return e;
        }
        function r(t, r) {
          for (var i = {}, a = [], c = 0; c < t.length; c++) {
            var s = t[c],
              l = r.base ? s[0] + r.base : s[0],
              u = i[l] || 0,
              p = ''.concat(l, ' ').concat(u);
            i[l] = u + 1;
            var f = e(p),
              d = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5]
              };
            if (-1 !== f) n[f].references++, n[f].updater(d);
            else {
              var h = o(d, r);
              (r.byIndex = c),
                n.splice(c, 0, { identifier: p, updater: h, references: 1 });
            }
            a.push(p);
          }
          return a;
        }
        function o(t, n) {
          var e = n.domAPI(n);
          return (
            e.update(t),
            function (n) {
              if (n) {
                if (
                  n.css === t.css &&
                  n.media === t.media &&
                  n.sourceMap === t.sourceMap &&
                  n.supports === t.supports &&
                  n.layer === t.layer
                )
                  return;
                e.update((t = n));
              } else e.remove();
            }
          );
        }
        t.exports = function (t, o) {
          var i = r((t = t || []), (o = o || {}));
          return function (t) {
            t = t || [];
            for (var a = 0; a < i.length; a++) {
              var c = e(i[a]);
              n[c].references--;
            }
            for (var s = r(t, o), l = 0; l < i.length; l++) {
              var u = e(i[l]);
              0 === n[u].references && (n[u].updater(), n.splice(u, 1));
            }
            i = s;
          };
        };
      },
      569: function (t) {
        var n = {};
        t.exports = function (t, e) {
          var r = (function (t) {
            if (void 0 === n[t]) {
              var e = document.querySelector(t);
              if (
                window.HTMLIFrameElement &&
                e instanceof window.HTMLIFrameElement
              )
                try {
                  e = e.contentDocument.head;
                } catch (t) {
                  e = null;
                }
              n[t] = e;
            }
            return n[t];
          })(t);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(e);
        };
      },
      216: function (t) {
        t.exports = function (t) {
          var n = document.createElement('style');
          return t.setAttributes(n, t.attributes), t.insert(n, t.options), n;
        };
      },
      565: function (t, n, e) {
        t.exports = function (t) {
          var n = e.nc;
          n && t.setAttribute('nonce', n);
        };
      },
      795: function (t) {
        t.exports = function (t) {
          var n = t.insertStyleElement(t);
          return {
            update: function (e) {
              !(function (t, n, e) {
                var r = '';
                e.supports && (r += '@supports ('.concat(e.supports, ') {')),
                  e.media && (r += '@media '.concat(e.media, ' {'));
                var o = void 0 !== e.layer;
                o &&
                  (r += '@layer'.concat(
                    e.layer.length > 0 ? ' '.concat(e.layer) : '',
                    ' {'
                  )),
                  (r += e.css),
                  o && (r += '}'),
                  e.media && (r += '}'),
                  e.supports && (r += '}');
                var i = e.sourceMap;
                i &&
                  'undefined' != typeof btoa &&
                  (r +=
                    '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      ' */'
                    )),
                  n.styleTagTransform(r, t, n.options);
              })(n, t, e);
            },
            remove: function () {
              !(function (t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
              })(n);
            }
          };
        };
      },
      589: function (t) {
        t.exports = function (t, n) {
          if (n.styleSheet) n.styleSheet.cssText = t;
          else {
            for (; n.firstChild; ) n.removeChild(n.firstChild);
            n.appendChild(document.createTextNode(t));
          }
        };
      },
      303: function (t, n, e) {
        t.exports = e.p + '8fbf098285b89970dc32.jpg';
      }
    },
    n = {};
  function e(r) {
    var o = n[r];
    if (void 0 !== o) return o.exports;
    var i = (n[r] = { id: r, exports: {} });
    return t[r](i, i.exports, e), i.exports;
  }
  (e.m = t),
    (e.n = function (t) {
      var n =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return e.d(n, { a: n }), n;
    }),
    (e.d = function (t, n) {
      for (var r in n)
        e.o(n, r) &&
          !e.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: n[r] });
    }),
    (e.g = (function () {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (t) {
        if ('object' == typeof window) return window;
      }
    })()),
    (e.o = function (t, n) {
      return Object.prototype.hasOwnProperty.call(t, n);
    }),
    (function () {
      var t;
      e.g.importScripts && (t = e.g.location + '');
      var n = e.g.document;
      if (!t && n && (n.currentScript && (t = n.currentScript.src), !t)) {
        var r = n.getElementsByTagName('script');
        r.length && (t = r[r.length - 1].src);
      }
      if (!t)
        throw new Error(
          'Automatic publicPath is not supported in this browser'
        );
      (t = t
        .replace(/#.*$/, '')
        .replace(/\?.*$/, '')
        .replace(/\/[^\/]+$/, '/')),
        (e.p = t);
    })(),
    (e.b = document.baseURI || self.location.href),
    (e.nc = void 0),
    (function () {
      var t = e(379),
        n = e.n(t),
        r = e(795),
        o = e.n(r),
        i = e(569),
        a = e.n(i),
        c = e(565),
        s = e.n(c),
        l = e(216),
        u = e.n(l),
        p = e(589),
        f = e.n(p),
        d = e(917),
        h = {};
      (h.styleTagTransform = f()),
        (h.setAttributes = s()),
        (h.insert = a().bind(null, 'head')),
        (h.domAPI = o()),
        (h.insertStyleElement = u()),
        n()(d.Z, h),
        d.Z && d.Z.locals && d.Z.locals;
      var v = e(28),
        m = {};
      function y(t) {
        return (
          (y =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          y(t)
        );
      }
      function g() {
        g = function () {
          return t;
        };
        var t = {},
          n = Object.prototype,
          e = n.hasOwnProperty,
          r =
            Object.defineProperty ||
            function (t, n, e) {
              t[n] = e.value;
            },
          o = 'function' == typeof Symbol ? Symbol : {},
          i = o.iterator || '@@iterator',
          a = o.asyncIterator || '@@asyncIterator',
          c = o.toStringTag || '@@toStringTag';
        function s(t, n, e) {
          return (
            Object.defineProperty(t, n, {
              value: e,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }),
            t[n]
          );
        }
        try {
          s({}, '');
        } catch (t) {
          s = function (t, n, e) {
            return (t[n] = e);
          };
        }
        function l(t, n, e, o) {
          var i = n && n.prototype instanceof f ? n : f,
            a = Object.create(i.prototype),
            c = new O(o || []);
          return r(a, '_invoke', { value: k(t, e, c) }), a;
        }
        function u(t, n, e) {
          try {
            return { type: 'normal', arg: t.call(n, e) };
          } catch (t) {
            return { type: 'throw', arg: t };
          }
        }
        t.wrap = l;
        var p = {};
        function f() {}
        function d() {}
        function h() {}
        var v = {};
        s(v, i, function () {
          return this;
        });
        var m = Object.getPrototypeOf,
          b = m && m(m(T([])));
        b && b !== n && e.call(b, i) && (v = b);
        var x = (h.prototype = f.prototype = Object.create(v));
        function w(t) {
          ['next', 'throw', 'return'].forEach(function (n) {
            s(t, n, function (t) {
              return this._invoke(n, t);
            });
          });
        }
        function L(t, n) {
          function o(r, i, a, c) {
            var s = u(t[r], t, i);
            if ('throw' !== s.type) {
              var l = s.arg,
                p = l.value;
              return p && 'object' == y(p) && e.call(p, '__await')
                ? n.resolve(p.__await).then(
                    function (t) {
                      o('next', t, a, c);
                    },
                    function (t) {
                      o('throw', t, a, c);
                    }
                  )
                : n.resolve(p).then(
                    function (t) {
                      (l.value = t), a(l);
                    },
                    function (t) {
                      return o('throw', t, a, c);
                    }
                  );
            }
            c(s.arg);
          }
          var i;
          r(this, '_invoke', {
            value: function (t, e) {
              function r() {
                return new n(function (n, r) {
                  o(t, e, n, r);
                });
              }
              return (i = i ? i.then(r, r) : r());
            }
          });
        }
        function k(t, n, e) {
          var r = 'suspendedStart';
          return function (o, i) {
            if ('executing' === r)
              throw new Error('Generator is already running');
            if ('completed' === r) {
              if ('throw' === o) throw i;
              return { value: void 0, done: !0 };
            }
            for (e.method = o, e.arg = i; ; ) {
              var a = e.delegate;
              if (a) {
                var c = E(a, e);
                if (c) {
                  if (c === p) continue;
                  return c;
                }
              }
              if ('next' === e.method) e.sent = e._sent = e.arg;
              else if ('throw' === e.method) {
                if ('suspendedStart' === r) throw ((r = 'completed'), e.arg);
                e.dispatchException(e.arg);
              } else 'return' === e.method && e.abrupt('return', e.arg);
              r = 'executing';
              var s = u(t, n, e);
              if ('normal' === s.type) {
                if (
                  ((r = e.done ? 'completed' : 'suspendedYield'), s.arg === p)
                )
                  continue;
                return { value: s.arg, done: e.done };
              }
              'throw' === s.type &&
                ((r = 'completed'), (e.method = 'throw'), (e.arg = s.arg));
            }
          };
        }
        function E(t, n) {
          var e = n.method,
            r = t.iterator[e];
          if (void 0 === r)
            return (
              (n.delegate = null),
              ('throw' === e &&
                t.iterator.return &&
                ((n.method = 'return'),
                (n.arg = void 0),
                E(t, n),
                'throw' === n.method)) ||
                ('return' !== e &&
                  ((n.method = 'throw'),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + e + "' method"
                  )))),
              p
            );
          var o = u(r, t.iterator, n.arg);
          if ('throw' === o.type)
            return (
              (n.method = 'throw'), (n.arg = o.arg), (n.delegate = null), p
            );
          var i = o.arg;
          return i
            ? i.done
              ? ((n[t.resultName] = i.value),
                (n.next = t.nextLoc),
                'return' !== n.method &&
                  ((n.method = 'next'), (n.arg = void 0)),
                (n.delegate = null),
                p)
              : i
            : ((n.method = 'throw'),
              (n.arg = new TypeError('iterator result is not an object')),
              (n.delegate = null),
              p);
        }
        function S(t) {
          var n = { tryLoc: t[0] };
          1 in t && (n.catchLoc = t[1]),
            2 in t && ((n.finallyLoc = t[2]), (n.afterLoc = t[3])),
            this.tryEntries.push(n);
        }
        function j(t) {
          var n = t.completion || {};
          (n.type = 'normal'), delete n.arg, (t.completion = n);
        }
        function O(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            t.forEach(S, this),
            this.reset(!0);
        }
        function T(t) {
          if (t) {
            var n = t[i];
            if (n) return n.call(t);
            if ('function' == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var r = -1,
                o = function n() {
                  for (; ++r < t.length; )
                    if (e.call(t, r)) return (n.value = t[r]), (n.done = !1), n;
                  return (n.value = void 0), (n.done = !0), n;
                };
              return (o.next = o);
            }
          }
          return { next: _ };
        }
        function _() {
          return { value: void 0, done: !0 };
        }
        return (
          (d.prototype = h),
          r(x, 'constructor', { value: h, configurable: !0 }),
          r(h, 'constructor', { value: d, configurable: !0 }),
          (d.displayName = s(h, c, 'GeneratorFunction')),
          (t.isGeneratorFunction = function (t) {
            var n = 'function' == typeof t && t.constructor;
            return (
              !!n &&
              (n === d || 'GeneratorFunction' === (n.displayName || n.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, h)
                : ((t.__proto__ = h), s(t, c, 'GeneratorFunction')),
              (t.prototype = Object.create(x)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          w(L.prototype),
          s(L.prototype, a, function () {
            return this;
          }),
          (t.AsyncIterator = L),
          (t.async = function (n, e, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new L(l(n, e, r, o), i);
            return t.isGeneratorFunction(e)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          w(x),
          s(x, c, 'Generator'),
          s(x, i, function () {
            return this;
          }),
          s(x, 'toString', function () {
            return '[object Generator]';
          }),
          (t.keys = function (t) {
            var n = Object(t),
              e = [];
            for (var r in n) e.push(r);
            return (
              e.reverse(),
              function t() {
                for (; e.length; ) {
                  var r = e.pop();
                  if (r in n) return (t.value = r), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (t.values = T),
          (O.prototype = {
            constructor: O,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(j),
                !t)
              )
                for (var n in this)
                  't' === n.charAt(0) &&
                    e.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ('throw' === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var n = this;
              function r(e, r) {
                return (
                  (a.type = 'throw'),
                  (a.arg = t),
                  (n.next = e),
                  r && ((n.method = 'next'), (n.arg = void 0)),
                  !!r
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i.completion;
                if ('root' === i.tryLoc) return r('end');
                if (i.tryLoc <= this.prev) {
                  var c = e.call(i, 'catchLoc'),
                    s = e.call(i, 'finallyLoc');
                  if (c && s) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  } else if (c) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                  } else {
                    if (!s)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, n) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r];
                if (
                  o.tryLoc <= this.prev &&
                  e.call(o, 'finallyLoc') &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o;
                  break;
                }
              }
              i &&
                ('break' === t || 'continue' === t) &&
                i.tryLoc <= n &&
                n <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = t),
                (a.arg = n),
                i
                  ? ((this.method = 'next'), (this.next = i.finallyLoc), p)
                  : this.complete(a)
              );
            },
            complete: function (t, n) {
              if ('throw' === t.type) throw t.arg;
              return (
                'break' === t.type || 'continue' === t.type
                  ? (this.next = t.arg)
                  : 'return' === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === t.type && n && (this.next = n),
                p
              );
            },
            finish: function (t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var e = this.tryEntries[n];
                if (e.finallyLoc === t)
                  return this.complete(e.completion, e.afterLoc), j(e), p;
              }
            },
            catch: function (t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var e = this.tryEntries[n];
                if (e.tryLoc === t) {
                  var r = e.completion;
                  if ('throw' === r.type) {
                    var o = r.arg;
                    j(e);
                  }
                  return o;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (t, n, e) {
              return (
                (this.delegate = { iterator: T(t), resultName: n, nextLoc: e }),
                'next' === this.method && (this.arg = void 0),
                p
              );
            }
          }),
          t
        );
      }
      function b(t, n, e, r, o, i, a) {
        try {
          var c = t[i](a),
            s = c.value;
        } catch (t) {
          return void e(t);
        }
        c.done ? n(s) : Promise.resolve(s).then(r, o);
      }
      function x(t) {
        return function () {
          var n = this,
            e = arguments;
          return new Promise(function (r, o) {
            var i = t.apply(n, e);
            function a(t) {
              b(i, r, o, a, c, 'next', t);
            }
            function c(t) {
              b(i, r, o, a, c, 'throw', t);
            }
            a(void 0);
          });
        };
      }
      (m.styleTagTransform = f()),
        (m.setAttributes = s()),
        (m.insert = a().bind(null, 'head')),
        (m.domAPI = o()),
        (m.insertStyleElement = u()),
        n()(v.Z, m),
        v.Z && v.Z.locals && v.Z.locals;
      var w = 'f95e40c94a03a4ec0328c71ffffc2eae',
        L = document.querySelector(':root'),
        k = document.querySelector('body');
      function E(t) {
        var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
          e =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '',
          r = document.createElement(t);
        return (
          r.setAttribute('class', n),
          'img' == t ? (r.src = e) : (r.textContent = e),
          r
        );
      }
      function S() {
        L.style.setProperty('--innerHeight', window.innerHeight + 'px');
      }
      function j() {
        L.style.setProperty('--innerWidth', window.innerWidth + 'px');
      }
      window.addEventListener('resize', function () {
        S(), j();
      }),
        S(),
        j();
      var O = E('form'),
        T = E('div', 'search-container'),
        _ = E('img', 'search-icon'),
        C = E('input', 'search-input');
      C.setAttribute('placeholder', 'Search for a city...');
      var P = E('input', 'submit');
      P.setAttribute('type', 'submit'), P.setAttribute('style', 'display:none');
      var q = E('div', 'error-message');
      O.append(T), T.append(_, C, q), k.append(O);
      var N = E('div', 'content-container'),
        A = E('div', 'location-label'),
        M = E('div', 'temperature-label'),
        I = E('div', 'temperature-max-label'),
        H = E('div', 'temperature-min-label'),
        F = E('div', 'humidity-label'),
        Z = E('div', 'pressure-label');
      function G(t, n) {
        N.classList.add('active'),
          T.classList.add('display-active'),
          (C.value = ''),
          q.classList.remove('active'),
          (A.textContent = t),
          (M.textContent = R(n.temp)),
          (I.textContent = R(n.temp_max)),
          (H.textContent = R(n.temp_min));
      }
      function R(t) {
        return Math.round((9 * (t - 273.15)) / 5 + 32);
      }
      N.append(A, M, I, H, F, Z), k.append(N);
      var U = E('div', 'lds-ellipsis');
      function z() {
        return (z = x(
          g().mark(function t(n) {
            var e, r, o, i, a, c;
            return g().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        U.classList.add('active'),
                        (t.prev = 1),
                        (t.next = 4),
                        fetch(
                          'https://api.openweathermap.org/geo/1.0/direct?q='
                            .concat(n, '&appid=')
                            .concat(w)
                        )
                      );
                    case 4:
                      return (e = t.sent), (t.next = 7), e.json();
                    case 7:
                      return (
                        (r = t.sent),
                        (t.prev = 8),
                        (o = r[0].lat),
                        (i = r[0].lon),
                        (t.prev = 11),
                        (t.next = 14),
                        fetch(
                          'https://api.openweathermap.org/data/2.5/weather?lat='
                            .concat(o, '&lon=')
                            .concat(i, '&appid=')
                            .concat(w)
                        )
                      );
                    case 14:
                      return (a = t.sent), (t.next = 17), a.json();
                    case 17:
                      G((c = t.sent).name, c.main),
                        U.classList.remove('active'),
                        (t.next = 27);
                      break;
                    case 22:
                      (t.prev = 22),
                        (t.t0 = t.catch(11)),
                        q.classList.add('active'),
                        (q.textContent = 'Request failed'),
                        U.classList.remove('active');
                    case 27:
                      t.next = 34;
                      break;
                    case 29:
                      (t.prev = 29),
                        (t.t1 = t.catch(8)),
                        q.classList.add('active'),
                        (q.textContent = 'Location not found'),
                        U.classList.remove('active');
                    case 34:
                      t.next = 41;
                      break;
                    case 36:
                      (t.prev = 36),
                        (t.t2 = t.catch(1)),
                        q.classList.add('active'),
                        (q.textContent = 'Request failed'),
                        U.classList.remove('active');
                    case 41:
                    case 'end':
                      return t.stop();
                  }
              },
              t,
              null,
              [
                [1, 36],
                [8, 29],
                [11, 22]
              ]
            );
          })
        )).apply(this, arguments);
      }
      (U.innerHTML = '<div></div><div></div><div></div><div></div>'),
        k.append(U),
        O.addEventListener('submit', function (t) {
          t.preventDefault(),
            (q.textContent = ''),
            (function (t) {
              z.apply(this, arguments);
            })(C.value);
        });
    })();
})();
