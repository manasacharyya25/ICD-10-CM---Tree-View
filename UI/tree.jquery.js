/*
JqTree 1.7.0

Copyright 2022 Marco Braak

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
@license

*/
var jqtree = (function (e) {
  "use strict";
  function t(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      t &&
        (i = i.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, i);
    }
    return n;
  }
  function n(e) {
    for (var n = 1; n < arguments.length; n++) {
      var i = null != arguments[n] ? arguments[n] : {};
      n % 2
        ? t(Object(i), !0).forEach(function (t) {
            a(e, t, i[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
        : t(Object(i)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
          });
    }
    return e;
  }
  function i(e) {
    return (
      (i =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            }),
      i(e)
    );
  }
  function r(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function o(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(e, N(i.key), i);
    }
  }
  function s(e, t, n) {
    return (
      t && o(e.prototype, t),
      n && o(e, n),
      Object.defineProperty(e, "prototype", { writable: !1 }),
      e
    );
  }
  function a(e, t, n) {
    return (
      (t = N(t)) in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  function l(e, t) {
    if ("function" != typeof t && null !== t)
      throw new TypeError("Super expression must either be null or a function");
    (e.prototype = Object.create(t && t.prototype, {
      constructor: { value: e, writable: !0, configurable: !0 },
    })),
      Object.defineProperty(e, "prototype", { writable: !1 }),
      t && u(e, t);
  }
  function d(e) {
    return (
      (d = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          }),
      d(e)
    );
  }
  function u(e, t) {
    return (
      (u = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (e, t) {
            return (e.__proto__ = t), e;
          }),
      u(e, t)
    );
  }
  function h(e) {
    if (void 0 === e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return e;
  }
  function c(e, t) {
    if (t && ("object" == typeof t || "function" == typeof t)) return t;
    if (void 0 !== t)
      throw new TypeError(
        "Derived constructors may only return object or undefined"
      );
    return h(e);
  }
  function v(e) {
    var t = (function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return (
          Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          ),
          !0
        );
      } catch (e) {
        return !1;
      }
    })();
    return function () {
      var n,
        i = d(e);
      if (t) {
        var r = d(this).constructor;
        n = Reflect.construct(i, arguments, r);
      } else n = i.apply(this, arguments);
      return c(this, n);
    };
  }
  function f(e, t) {
    for (
      ;
      !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = d(e));

    );
    return e;
  }
  function p() {
    return (
      (p =
        "undefined" != typeof Reflect && Reflect.get
          ? Reflect.get.bind()
          : function (e, t, n) {
              var i = f(e, t);
              if (i) {
                var r = Object.getOwnPropertyDescriptor(i, t);
                return r.get
                  ? r.get.call(arguments.length < 3 ? e : n)
                  : r.value;
              }
            }),
      p.apply(this, arguments)
    );
  }
  function g(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, t) {
        var n =
          null == e
            ? null
            : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
        if (null != n) {
          var i,
            r,
            o,
            s,
            a = [],
            l = !0,
            d = !1;
          try {
            if (((o = (n = n.call(e)).next), 0 === t)) {
              if (Object(n) !== n) return;
              l = !1;
            } else
              for (
                ;
                !(l = (i = o.call(n)).done) &&
                (a.push(i.value), a.length !== t);
                l = !0
              );
          } catch (e) {
            (d = !0), (r = e);
          } finally {
            try {
              if (!l && null != n.return && ((s = n.return()), Object(s) !== s))
                return;
            } finally {
              if (d) throw r;
            }
          }
          return a;
        }
      })(e, t) ||
      m(e, t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function m(e, t) {
    if (e) {
      if ("string" == typeof e) return y(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      return (
        "Object" === n && e.constructor && (n = e.constructor.name),
        "Map" === n || "Set" === n
          ? Array.from(e)
          : "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? y(e, t)
          : void 0
      );
    }
  }
  function y(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
    return i;
  }
  function k(e, t) {
    var n =
      ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
    if (!n) {
      if (
        Array.isArray(e) ||
        (n = m(e)) ||
        (t && e && "number" == typeof e.length)
      ) {
        n && (e = n);
        var i = 0,
          r = function () {};
        return {
          s: r,
          n: function () {
            return i >= e.length ? { done: !0 } : { done: !1, value: e[i++] };
          },
          e: function (e) {
            throw e;
          },
          f: r,
        };
      }
      throw new TypeError(
        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    }
    var o,
      s = !0,
      a = !1;
    return {
      s: function () {
        n = n.call(e);
      },
      n: function () {
        var e = n.next();
        return (s = e.done), e;
      },
      e: function (e) {
        (a = !0), (o = e);
      },
      f: function () {
        try {
          s || null == n.return || n.return();
        } finally {
          if (a) throw o;
        }
      },
    };
  }
  function N(e) {
    var t = (function (e, t) {
      if ("object" != typeof e || null === e) return e;
      var n = e[Symbol.toPrimitive];
      if (void 0 !== n) {
        var i = n.call(e, t || "default");
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === t ? String : Number)(e);
    })(e, "string");
    return "symbol" == typeof t ? t : String(t);
  }
  var S;
  !(function (e) {
    (e[(e.Before = 1)] = "Before"),
      (e[(e.After = 2)] = "After"),
      (e[(e.Inside = 3)] = "Inside"),
      (e[(e.None = 4)] = "None");
  })(S || (S = {}));
  var b = { before: S.Before, after: S.After, inside: S.Inside, none: S.None },
    _ = function (e) {
      for (var t in b)
        if (Object.prototype.hasOwnProperty.call(b, t) && b[t] === e) return t;
      return "";
    },
    D = function (e) {
      return (
        "object" === i(e) && "children" in e && e.children instanceof Array
      );
    },
    I = (function () {
      function e() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : null,
          n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          i =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e;
        r(this, e),
          a(this, "id", void 0),
          a(this, "name", void 0),
          a(this, "children", void 0),
          a(this, "parent", void 0),
          a(this, "idMapping", void 0),
          a(this, "tree", void 0),
          a(this, "nodeClass", void 0),
          a(this, "load_on_demand", void 0),
          a(this, "is_open", void 0),
          a(this, "element", void 0),
          a(this, "is_loading", void 0),
          a(this, "isEmptyFolder", void 0),
          (this.name = ""),
          (this.isEmptyFolder = !1),
          (this.load_on_demand = !1),
          this.setData(t),
          (this.children = []),
          (this.parent = null),
          n &&
            ((this.idMapping = new Map()),
            (this.tree = this),
            (this.nodeClass = i));
      }
      return (
        s(e, [
          {
            key: "setData",
            value: function (e) {
              if (e)
                if ("string" == typeof e) this.name = e;
                else if ("object" === i(e))
                  for (var t in e)
                    if (Object.prototype.hasOwnProperty.call(e, t)) {
                      var n = e[t];
                      "label" === t || "name" === t
                        ? "string" == typeof n && (this.name = n)
                        : "children" !== t && "parent" !== t && (this[t] = n);
                    }
            },
          },
          {
            key: "loadFromData",
            value: function (e) {
              this.removeChildren();
              var t,
                n = k(e);
              try {
                for (n.s(); !(t = n.n()).done; ) {
                  var i = t.value,
                    r = this.createNode(i);
                  this.addChild(r),
                    D(i) &&
                      (0 === i.children.length
                        ? (r.isEmptyFolder = !0)
                        : r.loadFromData(i.children));
                }
              } catch (e) {
                n.e(e);
              } finally {
                n.f();
              }
              return this;
            },
          },
          {
            key: "addChild",
            value: function (e) {
              this.children.push(e), e.setParent(this);
            },
          },
          {
            key: "addChildAtPosition",
            value: function (e, t) {
              this.children.splice(t, 0, e), e.setParent(this);
            },
          },
          {
            key: "removeChild",
            value: function (e) {
              e.removeChildren(), this.doRemoveChild(e);
            },
          },
          {
            key: "getChildIndex",
            value: function (e) {
              return this.children.indexOf(e);
            },
          },
          {
            key: "hasChildren",
            value: function () {
              return 0 !== this.children.length;
            },
          },
          {
            key: "isFolder",
            value: function () {
              return this.hasChildren() || this.load_on_demand;
            },
          },
          {
            key: "iterate",
            value: function (e) {
              !(function t(n, i) {
                if (n.children) {
                  var r,
                    o = k(n.children);
                  try {
                    for (o.s(); !(r = o.n()).done; ) {
                      var s = r.value;
                      e(s, i) && s.hasChildren() && t(s, i + 1);
                    }
                  } catch (e) {
                    o.e(e);
                  } finally {
                    o.f();
                  }
                }
              })(this, 0);
            },
          },
          {
            key: "moveNode",
            value: function (e, t, n) {
              if (!e.parent || e.isParentOf(t)) return !1;
              switch ((e.parent.doRemoveChild(e), n)) {
                case S.After:
                  return (
                    !!t.parent &&
                    (t.parent.addChildAtPosition(
                      e,
                      t.parent.getChildIndex(t) + 1
                    ),
                    !0)
                  );
                case S.Before:
                  return (
                    !!t.parent &&
                    (t.parent.addChildAtPosition(e, t.parent.getChildIndex(t)),
                    !0)
                  );
                case S.Inside:
                  return t.addChildAtPosition(e, 0), !0;
                default:
                  return !1;
              }
            },
          },
          {
            key: "getData",
            value: function () {
              var e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0],
                t = function e(t) {
                  return t.map(function (t) {
                    var n = {};
                    for (var i in t)
                      if (
                        -1 ===
                          [
                            "parent",
                            "children",
                            "element",
                            "idMapping",
                            "load_on_demand",
                            "nodeClass",
                            "tree",
                            "isEmptyFolder",
                          ].indexOf(i) &&
                        Object.prototype.hasOwnProperty.call(t, i)
                      ) {
                        var r = t[i];
                        n[i] = r;
                      }
                    return t.hasChildren() && (n.children = e(t.children)), n;
                  });
                };
              return t(e ? [this] : this.children);
            },
          },
          {
            key: "getNodeByName",
            value: function (e) {
              return this.getNodeByCallback(function (t) {
                return t.name === e;
              });
            },
          },
          {
            key: "getNodeByNameMustExist",
            value: function (e) {
              var t = this.getNodeByCallback(function (t) {
                return t.name === e;
              });
              if (!t) throw "Node with name ".concat(e, " not found");
              return t;
            },
          },
          {
            key: "getNodeByCallback",
            value: function (e) {
              var t = null;
              return (
                this.iterate(function (n) {
                  return !t && (!e(n) || ((t = n), !1));
                }),
                t
              );
            },
          },
          {
            key: "addAfter",
            value: function (e) {
              if (this.parent) {
                var t = this.createNode(e),
                  n = this.parent.getChildIndex(this);
                return (
                  this.parent.addChildAtPosition(t, n + 1),
                  D(e) && e.children.length && t.loadFromData(e.children),
                  t
                );
              }
              return null;
            },
          },
          {
            key: "addBefore",
            value: function (e) {
              if (this.parent) {
                var t = this.createNode(e),
                  n = this.parent.getChildIndex(this);
                return (
                  this.parent.addChildAtPosition(t, n),
                  D(e) && e.children.length && t.loadFromData(e.children),
                  t
                );
              }
              return null;
            },
          },
          {
            key: "addParent",
            value: function (e) {
              if (this.parent) {
                var t = this.createNode(e);
                this.tree && t.setParent(this.tree);
                var n,
                  i = this.parent,
                  r = k(i.children);
                try {
                  for (r.s(); !(n = r.n()).done; ) {
                    var o = n.value;
                    t.addChild(o);
                  }
                } catch (e) {
                  r.e(e);
                } finally {
                  r.f();
                }
                return (i.children = []), i.addChild(t), t;
              }
              return null;
            },
          },
          {
            key: "remove",
            value: function () {
              this.parent &&
                (this.parent.removeChild(this), (this.parent = null));
            },
          },
          {
            key: "append",
            value: function (e) {
              var t = this.createNode(e);
              return (
                this.addChild(t),
                D(e) && e.children.length && t.loadFromData(e.children),
                t
              );
            },
          },
          {
            key: "prepend",
            value: function (e) {
              var t = this.createNode(e);
              return (
                this.addChildAtPosition(t, 0),
                D(e) && e.children.length && t.loadFromData(e.children),
                t
              );
            },
          },
          {
            key: "isParentOf",
            value: function (e) {
              for (var t = e.parent; t; ) {
                if (t === this) return !0;
                t = t.parent;
              }
              return !1;
            },
          },
          {
            key: "getLevel",
            value: function () {
              for (var e = 0, t = this; t.parent; ) (e += 1), (t = t.parent);
              return e;
            },
          },
          {
            key: "getNodeById",
            value: function (e) {
              return this.idMapping.get(e) || null;
            },
          },
          {
            key: "addNodeToIndex",
            value: function (e) {
              null != e.id && this.idMapping.set(e.id, e);
            },
          },
          {
            key: "removeNodeFromIndex",
            value: function (e) {
              null != e.id && this.idMapping.delete(e.id);
            },
          },
          {
            key: "removeChildren",
            value: function () {
              var e = this;
              this.iterate(function (t) {
                var n;
                return (
                  null === (n = e.tree) ||
                    void 0 === n ||
                    n.removeNodeFromIndex(t),
                  !0
                );
              }),
                (this.children = []);
            },
          },
          {
            key: "getPreviousSibling",
            value: function () {
              if (this.parent) {
                var e = this.parent.getChildIndex(this) - 1;
                return e >= 0 ? this.parent.children[e] : null;
              }
              return null;
            },
          },
          {
            key: "getNextSibling",
            value: function () {
              if (this.parent) {
                var e = this.parent.getChildIndex(this) + 1;
                return e < this.parent.children.length
                  ? this.parent.children[e]
                  : null;
              }
              return null;
            },
          },
          {
            key: "getNodesByProperty",
            value: function (e, t) {
              return this.filter(function (n) {
                return n[e] === t;
              });
            },
          },
          {
            key: "filter",
            value: function (e) {
              var t = [];
              return (
                this.iterate(function (n) {
                  return e(n) && t.push(n), !0;
                }),
                t
              );
            },
          },
          {
            key: "getNextNode",
            value: function () {
              var e =
                !(arguments.length > 0 && void 0 !== arguments[0]) ||
                arguments[0];
              if (e && this.hasChildren()) return this.children[0];
              if (this.parent) {
                var t = this.getNextSibling();
                return t || this.parent.getNextNode(!1);
              }
              return null;
            },
          },
          {
            key: "getNextVisibleNode",
            value: function () {
              if (this.hasChildren() && this.is_open) return this.children[0];
              if (this.parent) {
                var e = this.getNextSibling();
                return e || this.parent.getNextNode(!1);
              }
              return null;
            },
          },
          {
            key: "getPreviousNode",
            value: function () {
              if (this.parent) {
                var e = this.getPreviousSibling();
                return e
                  ? e.hasChildren()
                    ? e.getLastChild()
                    : e
                  : this.getParent();
              }
              return null;
            },
          },
          {
            key: "getPreviousVisibleNode",
            value: function () {
              if (this.parent) {
                var e = this.getPreviousSibling();
                return e
                  ? e.hasChildren() && e.is_open
                    ? e.getLastChild()
                    : e
                  : this.getParent();
              }
              return null;
            },
          },
          {
            key: "getParent",
            value: function () {
              return this.parent && this.parent.parent ? this.parent : null;
            },
          },
          {
            key: "getLastChild",
            value: function () {
              if (this.hasChildren()) {
                var e = this.children[this.children.length - 1];
                return e.hasChildren() && e.is_open ? e.getLastChild() : e;
              }
              return null;
            },
          },
          {
            key: "initFromData",
            value: function (e) {
              var t,
                n = this,
                i = function (e) {
                  var t,
                    i = k(e);
                  try {
                    for (i.s(); !(t = i.n()).done; ) {
                      var r = t.value,
                        o = n.createNode();
                      o.initFromData(r), n.addChild(o);
                    }
                  } catch (e) {
                    i.e(e);
                  } finally {
                    i.f();
                  }
                };
              (t = e), n.setData(t), D(t) && t.children.length && i(t.children);
            },
          },
          {
            key: "setParent",
            value: function (e) {
              var t;
              (this.parent = e),
                (this.tree = e.tree),
                null === (t = this.tree) ||
                  void 0 === t ||
                  t.addNodeToIndex(this);
            },
          },
          {
            key: "doRemoveChild",
            value: function (e) {
              var t;
              this.children.splice(this.getChildIndex(e), 1),
                null === (t = this.tree) ||
                  void 0 === t ||
                  t.removeNodeFromIndex(e);
            },
          },
          {
            key: "getNodeClass",
            value: function () {
              var t;
              return (
                this.nodeClass ||
                (null == this || null === (t = this.tree) || void 0 === t
                  ? void 0
                  : t.nodeClass) ||
                e
              );
            },
          },
          {
            key: "createNode",
            value: function (e) {
              return new (this.getNodeClass())(e);
            },
          },
        ]),
        e
      );
    })(),
    j = (function () {
      function e(t) {
        r(this, e),
          a(this, "hitAreas", void 0),
          a(this, "isDragging", void 0),
          a(this, "currentItem", void 0),
          a(this, "hoveredArea", void 0),
          a(this, "positionInfo", void 0),
          a(this, "treeWidget", void 0),
          a(this, "dragElement", void 0),
          a(this, "previousGhost", void 0),
          a(this, "openFolderTimer", void 0),
          (this.treeWidget = t),
          (this.hoveredArea = null),
          (this.hitAreas = []),
          (this.isDragging = !1),
          (this.currentItem = null),
          (this.positionInfo = null);
      }
      return (
        s(e, [
          {
            key: "mouseCapture",
            value: function (e) {
              var t = jQuery(e.target);
              if (!this.mustCaptureElement(t)) return null;
              if (
                this.treeWidget.options.onIsMoveHandle &&
                !this.treeWidget.options.onIsMoveHandle(t)
              )
                return null;
              var n = this.treeWidget._getNodeElement(t);
              return (
                n &&
                  this.treeWidget.options.onCanMove &&
                  (this.treeWidget.options.onCanMove(n.node) || (n = null)),
                (this.currentItem = n),
                null != this.currentItem
              );
            },
          },
          {
            key: "mouseStart",
            value: function (e) {
              var t;
              if (!this.currentItem || void 0 === e.pageX || void 0 === e.pageY)
                return !1;
              this.refresh();
              var n = jQuery(e.target).offset(),
                i = n ? n.left : 0,
                r = n ? n.top : 0,
                o = this.currentItem.node;
              return (
                (this.dragElement = new C(
                  o.name,
                  e.pageX - i,
                  e.pageY - r,
                  this.treeWidget.element,
                  null === (t = this.treeWidget.options.autoEscape) ||
                    void 0 === t ||
                    t
                )),
                (this.isDragging = !0),
                (this.positionInfo = e),
                this.currentItem.$element.addClass("jqtree-moving"),
                !0
              );
            },
          },
          {
            key: "mouseDrag",
            value: function (e) {
              if (
                !this.currentItem ||
                !this.dragElement ||
                void 0 === e.pageX ||
                void 0 === e.pageY
              )
                return !1;
              this.dragElement.move(e.pageX, e.pageY), (this.positionInfo = e);
              var t = this.findHoveredArea(e.pageX, e.pageY);
              return (
                t && this.canMoveToArea(t)
                  ? (t.node.isFolder() || this.stopOpenFolderTimer(),
                    this.hoveredArea !== t &&
                      ((this.hoveredArea = t),
                      this.mustOpenFolderTimer(t)
                        ? this.startOpenFolderTimer(t.node)
                        : this.stopOpenFolderTimer(),
                      this.updateDropHint()))
                  : (this.removeDropHint(),
                    this.stopOpenFolderTimer(),
                    (this.hoveredArea = t)),
                t ||
                  (this.treeWidget.options.onDragMove &&
                    this.treeWidget.options.onDragMove(
                      this.currentItem.node,
                      e.originalEvent
                    )),
                !0
              );
            },
          },
          {
            key: "mouseStop",
            value: function (e) {
              this.moveItem(e),
                this.clear(),
                this.removeHover(),
                this.removeDropHint(),
                this.removeHitAreas();
              var t = this.currentItem;
              return (
                this.currentItem &&
                  (this.currentItem.$element.removeClass("jqtree-moving"),
                  (this.currentItem = null)),
                (this.isDragging = !1),
                (this.positionInfo = null),
                !this.hoveredArea &&
                  t &&
                  this.treeWidget.options.onDragStop &&
                  this.treeWidget.options.onDragStop(t.node, e.originalEvent),
                !1
              );
            },
          },
          {
            key: "refresh",
            value: function () {
              this.removeHitAreas(),
                this.currentItem &&
                  (this.generateHitAreas(),
                  (this.currentItem = this.treeWidget._getNodeElementForNode(
                    this.currentItem.node
                  )),
                  this.isDragging &&
                    this.currentItem.$element.addClass("jqtree-moving"));
            },
          },
          {
            key: "generateHitAreas",
            value: function () {
              if (this.currentItem) {
                var e = new E(
                  this.treeWidget.tree,
                  this.currentItem.node,
                  this.getTreeDimensions().bottom
                );
                this.hitAreas = e.generate();
              } else this.hitAreas = [];
            },
          },
          {
            key: "mustCaptureElement",
            value: function (e) {
              return !e.is("input,select,textarea");
            },
          },
          {
            key: "canMoveToArea",
            value: function (e) {
              if (!this.treeWidget.options.onCanMoveTo) return !0;
              if (!this.currentItem) return !1;
              var t = _(e.position);
              return this.treeWidget.options.onCanMoveTo(
                this.currentItem.node,
                e.node,
                t
              );
            },
          },
          {
            key: "removeHitAreas",
            value: function () {
              this.hitAreas = [];
            },
          },
          {
            key: "clear",
            value: function () {
              this.dragElement &&
                (this.dragElement.remove(), (this.dragElement = null));
            },
          },
          {
            key: "removeDropHint",
            value: function () {
              this.previousGhost && this.previousGhost.remove();
            },
          },
          {
            key: "removeHover",
            value: function () {
              this.hoveredArea = null;
            },
          },
          {
            key: "findHoveredArea",
            value: function (e, t) {
              var n = this.getTreeDimensions();
              if (e < n.left || t < n.top || e > n.right || t > n.bottom)
                return null;
              for (var i = 0, r = this.hitAreas.length; i < r; ) {
                var o = (i + r) >> 1,
                  s = this.hitAreas[o];
                if (t < s.top) r = o;
                else {
                  if (!(t > s.bottom)) return s;
                  i = o + 1;
                }
              }
              return null;
            },
          },
          {
            key: "mustOpenFolderTimer",
            value: function (e) {
              var t = e.node;
              return t.isFolder() && !t.is_open && e.position === S.Inside;
            },
          },
          {
            key: "updateDropHint",
            value: function () {
              if (this.hoveredArea) {
                this.removeDropHint();
                var e = this.treeWidget._getNodeElementForNode(
                  this.hoveredArea.node
                );
                this.previousGhost = e.addDropHint(this.hoveredArea.position);
              }
            },
          },
          {
            key: "startOpenFolderTimer",
            value: function (e) {
              var t = this;
              this.stopOpenFolderTimer();
              var n = this.treeWidget.options.openFolderDelay;
              !1 !== n &&
                (this.openFolderTimer = window.setTimeout(function () {
                  t.treeWidget._openNode(
                    e,
                    t.treeWidget.options.slide,
                    function () {
                      t.refresh(), t.updateDropHint();
                    }
                  );
                }, n));
            },
          },
          {
            key: "stopOpenFolderTimer",
            value: function () {
              this.openFolderTimer &&
                (clearTimeout(this.openFolderTimer),
                (this.openFolderTimer = null));
            },
          },
          {
            key: "moveItem",
            value: function (e) {
              var t = this;
              if (
                this.currentItem &&
                this.hoveredArea &&
                this.hoveredArea.position !== S.None &&
                this.canMoveToArea(this.hoveredArea)
              ) {
                var n = this.currentItem.node,
                  i = this.hoveredArea.node,
                  r = this.hoveredArea.position,
                  o = n.parent;
                r === S.Inside && (this.hoveredArea.node.is_open = !0);
                var s = function () {
                  t.treeWidget.tree.moveNode(n, i, r),
                    t.treeWidget.element.empty(),
                    t.treeWidget._refreshElements(null);
                };
                this.treeWidget
                  ._triggerEvent("tree.move", {
                    move_info: {
                      moved_node: n,
                      target_node: i,
                      position: _(r),
                      previous_parent: o,
                      do_move: s,
                      original_event: e.originalEvent,
                    },
                  })
                  .isDefaultPrevented() || s();
              }
            },
          },
          {
            key: "getTreeDimensions",
            value: function () {
              var e = this.treeWidget.element.offset();
              if (e) {
                var t = this.treeWidget.element,
                  n = t.width() || 0,
                  i = t.height() || 0,
                  r = e.left + this.treeWidget._getScrollLeft();
                return {
                  left: r,
                  top: e.top,
                  right: r + n,
                  bottom: e.top + i + 16,
                };
              }
              return { left: 0, top: 0, right: 0, bottom: 0 };
            },
          },
        ]),
        e
      );
    })(),
    E = (function (e) {
      l(n, e);
      var t = v(n);
      function n(e, i, o) {
        var s;
        return (
          r(this, n),
          a(h((s = t.call(this, e))), "currentNode", void 0),
          a(h(s), "treeBottom", void 0),
          a(h(s), "positions", void 0),
          a(h(s), "lastTop", void 0),
          (s.currentNode = i),
          (s.treeBottom = o),
          s
        );
      }
      return (
        s(n, [
          {
            key: "generate",
            value: function () {
              return (
                (this.positions = []),
                (this.lastTop = 0),
                this.iterate(),
                this.generateHitAreas(this.positions)
              );
            },
          },
          {
            key: "generateHitAreas",
            value: function (e) {
              var t,
                n = -1,
                i = [],
                r = [],
                o = k(e);
              try {
                for (o.s(); !(t = o.n()).done; ) {
                  var s = t.value;
                  s.top !== n &&
                    i.length &&
                    (i.length && this.generateHitAreasForGroup(r, i, n, s.top),
                    (n = s.top),
                    (i = [])),
                    i.push(s);
                }
              } catch (e) {
                o.e(e);
              } finally {
                o.f();
              }
              return this.generateHitAreasForGroup(r, i, n, this.treeBottom), r;
            },
          },
          {
            key: "handleOpenFolder",
            value: function (e, t) {
              return (
                e !== this.currentNode &&
                (e.children[0] !== this.currentNode &&
                  this.addPosition(e, S.Inside, this.getTop(t)),
                !0)
              );
            },
          },
          {
            key: "handleClosedFolder",
            value: function (e, t, n) {
              var i = this.getTop(n);
              e === this.currentNode
                ? this.addPosition(e, S.None, i)
                : (this.addPosition(e, S.Inside, i),
                  t !== this.currentNode && this.addPosition(e, S.After, i));
            },
          },
          {
            key: "handleFirstNode",
            value: function (e) {
              e !== this.currentNode &&
                this.addPosition(e, S.Before, this.getTop(jQuery(e.element)));
            },
          },
          {
            key: "handleAfterOpenFolder",
            value: function (e, t) {
              e === this.currentNode || t === this.currentNode
                ? this.addPosition(e, S.None, this.lastTop)
                : this.addPosition(e, S.After, this.lastTop);
            },
          },
          {
            key: "handleNode",
            value: function (e, t, n) {
              var i = this.getTop(n);
              e === this.currentNode
                ? this.addPosition(e, S.None, i)
                : this.addPosition(e, S.Inside, i),
                t === this.currentNode || e === this.currentNode
                  ? this.addPosition(e, S.None, i)
                  : this.addPosition(e, S.After, i);
            },
          },
          {
            key: "getTop",
            value: function (e) {
              var t = e.offset();
              return t ? t.top : 0;
            },
          },
          {
            key: "addPosition",
            value: function (e, t, n) {
              var i = { top: n, bottom: 0, node: e, position: t };
              this.positions.push(i), (this.lastTop = n);
            },
          },
          {
            key: "generateHitAreasForGroup",
            value: function (e, t, n, i) {
              for (
                var r = Math.min(t.length, 4),
                  o = Math.round((i - n) / r),
                  s = n,
                  a = 0;
                a < r;

              ) {
                var l = t[a];
                e.push({
                  top: s,
                  bottom: s + o,
                  node: l.node,
                  position: l.position,
                }),
                  (s += o),
                  (a += 1);
              }
            },
          },
        ]),
        n
      );
    })(
      (function () {
        function e(t) {
          r(this, e), a(this, "tree", void 0), (this.tree = t);
        }
        return (
          s(e, [
            {
              key: "iterate",
              value: function () {
                var e = this,
                  t = !0;
                !(function n(i, r) {
                  var o = (i.is_open || !i.element) && i.hasChildren(),
                    s = null;
                  if (i.element) {
                    if (!(s = jQuery(i.element)).is(":visible")) return;
                    t && (e.handleFirstNode(i), (t = !1)),
                      i.hasChildren()
                        ? i.is_open
                          ? e.handleOpenFolder(i, s) || (o = !1)
                          : e.handleClosedFolder(i, r, s)
                        : e.handleNode(i, r, s);
                  }
                  if (o) {
                    var a = i.children.length;
                    i.children.forEach(function (e, t) {
                      n(i.children[t], t === a - 1 ? null : i.children[t + 1]);
                    }),
                      i.is_open && s && e.handleAfterOpenFolder(i, r);
                  }
                })(this.tree, null);
              },
            },
          ]),
          e
        );
      })()
    ),
    C = (function () {
      function e(t, n, i, o, s) {
        r(this, e),
          a(this, "offsetX", void 0),
          a(this, "offsetY", void 0),
          a(this, "$element", void 0),
          (this.offsetX = n),
          (this.offsetY = i),
          (this.$element = jQuery("<span>").addClass(
            "jqtree-title jqtree-dragging"
          )),
          s ? this.$element.text(t) : this.$element.html(t),
          this.$element.css("position", "absolute"),
          o.append(this.$element);
      }
      return (
        s(e, [
          {
            key: "move",
            value: function (e, t) {
              this.$element.offset({
                left: e - this.offsetX,
                top: t - this.offsetY,
              });
            },
          },
          {
            key: "remove",
            value: function () {
              this.$element.remove();
            },
          },
        ]),
        e
      );
    })(),
    w = function (e) {
      return e ? "true" : "false";
    },
    F = (function () {
      function e(t) {
        r(this, e),
          a(this, "openedIconElement", void 0),
          a(this, "closedIconElement", void 0),
          a(this, "treeWidget", void 0),
          (this.treeWidget = t),
          (this.openedIconElement = this.createButtonElement(
            t.options.openedIcon || "+"
          )),
          (this.closedIconElement = this.createButtonElement(
            t.options.closedIcon || "-"
          ));
      }
      return (
        s(e, [
          {
            key: "render",
            value: function (e) {
              e && e.parent ? this.renderFromNode(e) : this.renderFromRoot();
            },
          },
          {
            key: "renderFromRoot",
            value: function () {
              var e = this.treeWidget.element;
              e.empty(),
                this.createDomElements(
                  e[0],
                  this.treeWidget.tree.children,
                  !0,
                  1
                );
            },
          },
          {
            key: "renderFromNode",
            value: function (e) {
              var t = jQuery(e.element),
                n = this.createLi(e, e.getLevel());
              this.attachNodeData(e, n),
                t.after(n),
                t.remove(),
                e.children &&
                  this.createDomElements(n, e.children, !1, e.getLevel() + 1);
            },
          },
          {
            key: "createDomElements",
            value: function (e, t, n, i) {
              var r = this.createUl(n);
              e.appendChild(r);
              var o,
                s = k(t);
              try {
                for (s.s(); !(o = s.n()).done; ) {
                  var a = o.value,
                    l = this.createLi(a, i);
                  r.appendChild(l),
                    this.attachNodeData(a, l),
                    a.hasChildren() &&
                      this.createDomElements(l, a.children, !1, i + 1);
                }
              } catch (e) {
                s.e(e);
              } finally {
                s.f();
              }
            },
          },
          {
            key: "attachNodeData",
            value: function (e, t) {
              (e.element = t), jQuery(t).data("node", e);
            },
          },
          {
            key: "createUl",
            value: function (e) {
              var t, n;
              e
                ? ((t = "jqtree-tree"),
                  (n = "tree"),
                  this.treeWidget.options.rtl && (t += " jqtree-rtl"))
                : ((t = ""), (n = "group")),
                this.treeWidget.options.dragAndDrop && (t += " jqtree-dnd");
              var i = document.createElement("ul");
              return (
                (i.className = "jqtree_common ".concat(t)),
                i.setAttribute("role", n),
                i
              );
            },
          },
          {
            key: "createLi",
            value: function (e, t) {
              var n = Boolean(
                  this.treeWidget.selectNodeHandler.isNodeSelected(e)
                ),
                i =
                  e.isFolder() ||
                  (e.isEmptyFolder && this.treeWidget.options.showEmptyFolder)
                    ? this.createFolderLi(e, t, n)
                    : this.createNodeLi(e, t, n);
              return (
                this.treeWidget.options.onCreateLi &&
                  this.treeWidget.options.onCreateLi(e, jQuery(i), n),
                i
              );
            },
          },
          {
            key: "createFolderLi",
            value: function (e, t, n) {
              var i = this.getButtonClasses(e),
                r = this.getFolderClasses(e, n),
                o = e.is_open ? this.openedIconElement : this.closedIconElement,
                s = document.createElement("li");
              (s.className = "jqtree_common ".concat(r)),
                s.setAttribute("role", "presentation");
              var a = document.createElement("div");
              (a.className = "jqtree-element jqtree_common"),
                a.setAttribute("role", "presentation"),
                s.appendChild(a);
              var l = document.createElement("a");
              return (
                (l.className = i),
                l.appendChild(o.cloneNode(!0)),
                l.setAttribute("role", "presentation"),
                l.setAttribute("aria-hidden", "true"),
                this.treeWidget.options.buttonLeft && a.appendChild(l),
                a.appendChild(
                  this.createTitleSpan(e.name, t, n, e.is_open, !0)
                ),
                this.treeWidget.options.buttonLeft || a.appendChild(l),
                s
              );
            },
          },
          {
            key: "createNodeLi",
            value: function (e, t, n) {
              var i = ["jqtree_common"];
              n && i.push("jqtree-selected");
              var r = i.join(" "),
                o = document.createElement("li");
              (o.className = r), o.setAttribute("role", "presentation");
              var s = document.createElement("div");
              return (
                (s.className = "jqtree-element jqtree_common"),
                s.setAttribute("role", "presentation"),
                o.appendChild(s),
                s.appendChild(
                  this.createTitleSpan(e.name, t, n, e.is_open, !1)
                ),
                o
              );
            },
          },
          {
            key: "createTitleSpan",
            value: function (e, t, n, i, r) {
              var o = document.createElement("span"),
                s = "jqtree-title jqtree_common";
              if (
                (r && (s += " jqtree-title-folder"),
                (s += " jqtree-title-button-".concat(
                  this.treeWidget.options.buttonLeft ? "left" : "right"
                )),
                (o.className = s),
                o.setAttribute("role", "treeitem"),
                o.setAttribute("aria-level", "".concat(t)),
                o.setAttribute("aria-selected", w(n)),
                o.setAttribute("aria-expanded", w(i)),
                n)
              ) {
                var a = this.treeWidget.options.tabIndex;
                void 0 !== a && o.setAttribute("tabindex", "".concat(a));
              }
              return (
                this.treeWidget.options.autoEscape
                  ? (o.textContent = e)
                  : (o.innerHTML = e),
                o
              );
            },
          },
          {
            key: "getButtonClasses",
            value: function (e) {
              var t = ["jqtree-toggler", "jqtree_common"];
              return (
                e.is_open || t.push("jqtree-closed"),
                this.treeWidget.options.buttonLeft
                  ? t.push("jqtree-toggler-left")
                  : t.push("jqtree-toggler-right"),
                t.join(" ")
              );
            },
          },
          {
            key: "getFolderClasses",
            value: function (e, t) {
              var n = ["jqtree-folder"];
              return (
                e.is_open || n.push("jqtree-closed"),
                t && n.push("jqtree-selected"),
                e.is_loading && n.push("jqtree-loading"),
                n.join(" ")
              );
            },
          },
          {
            key: "createButtonElement",
            value: function (e) {
              if ("string" == typeof e) {
                var t = document.createElement("div");
                return (t.innerHTML = e), document.createTextNode(t.innerHTML);
              }
              return jQuery(e)[0];
            },
          },
        ]),
        e
      );
    })(),
    W = (function () {
      function e(t) {
        r(this, e), a(this, "treeWidget", void 0), (this.treeWidget = t);
      }
      return (
        s(e, [
          {
            key: "loadFromUrl",
            value: function (e, t, n) {
              var i = this;
              if (e) {
                var r = this.getDomElement(t);
                this.addLoadingClass(r), this.notifyLoading(!0, t, r);
                var o = function () {
                  i.removeLoadingClass(r), i.notifyLoading(!1, t, r);
                };
                this.submitRequest(
                  e,
                  function (e) {
                    o(),
                      i.treeWidget.loadData(i.parseData(e), t),
                      n && "function" == typeof n && n();
                  },
                  function (e) {
                    o(),
                      i.treeWidget.options.onLoadFailed &&
                        i.treeWidget.options.onLoadFailed(e);
                  }
                );
              }
            },
          },
          {
            key: "addLoadingClass",
            value: function (e) {
              e && e.addClass("jqtree-loading");
            },
          },
          {
            key: "removeLoadingClass",
            value: function (e) {
              e && e.removeClass("jqtree-loading");
            },
          },
          {
            key: "getDomElement",
            value: function (e) {
              return e ? jQuery(e.element) : this.treeWidget.element;
            },
          },
          {
            key: "notifyLoading",
            value: function (e, t, n) {
              this.treeWidget.options.onLoading &&
                this.treeWidget.options.onLoading(e, t, n),
                this.treeWidget._triggerEvent("tree.loading_data", {
                  isLoading: e,
                  node: t,
                  $el: n,
                });
            },
          },
          {
            key: "submitRequest",
            value: function (e, t, i) {
              var r,
                o = n(
                  {
                    method: "GET",
                    cache: !1,
                    dataType: "json",
                    success: t,
                    error: i,
                  },
                  "string" == typeof e ? { url: e } : e
                );
              (o.method =
                (null === (r = o.method) || void 0 === r
                  ? void 0
                  : r.toUpperCase()) || "GET"),
                jQuery.ajax(o);
            },
          },
          {
            key: "parseData",
            value: function (e) {
              var t = this.treeWidget.options.dataFilter,
                n = "string" == typeof e ? JSON.parse(e) : e;
              return t ? t(n) : n;
            },
          },
        ]),
        e
      );
    })(),
    T = (function () {
      function e(t) {
        var n = this;
        r(this, e),
          a(this, "treeWidget", void 0),
          a(this, "handleKeyDown", function (t) {
            if (!n.canHandleKeyboard()) return !0;
            var i = n.treeWidget.getSelectedNode();
            if (!i) return !0;
            switch (t.which) {
              case e.DOWN:
                return n.moveDown(i);
              case e.UP:
                return n.moveUp(i);
              case e.RIGHT:
                return n.moveRight(i);
              case e.LEFT:
                return n.moveLeft(i);
              default:
                return !0;
            }
          }),
          (this.treeWidget = t),
          t.options.keyboardSupport &&
            jQuery(document).on("keydown.jqtree", this.handleKeyDown);
      }
      return (
        s(e, [
          {
            key: "deinit",
            value: function () {
              jQuery(document).off("keydown.jqtree");
            },
          },
          {
            key: "moveDown",
            value: function (e) {
              return this.selectNode(e.getNextVisibleNode());
            },
          },
          {
            key: "moveUp",
            value: function (e) {
              return this.selectNode(e.getPreviousVisibleNode());
            },
          },
          {
            key: "moveRight",
            value: function (e) {
              return (
                !e.isFolder() ||
                (e.is_open
                  ? this.selectNode(e.getNextVisibleNode())
                  : (this.treeWidget.openNode(e), !1))
              );
            },
          },
          {
            key: "moveLeft",
            value: function (e) {
              return e.isFolder() && e.is_open
                ? (this.treeWidget.closeNode(e), !1)
                : this.selectNode(e.getParent());
            },
          },
          {
            key: "selectNode",
            value: function (e) {
              return (
                !e ||
                (this.treeWidget.selectNode(e),
                this.treeWidget.scrollHandler.isScrolledIntoView(
                  jQuery(e.element).find(".jqtree-element")
                ) || this.treeWidget.scrollToNode(e),
                !1)
              );
            },
          },
          {
            key: "canHandleKeyboard",
            value: function () {
              return (
                !!this.treeWidget.options.keyboardSupport &&
                this.treeWidget.selectNodeHandler.isFocusOnTree()
              );
            },
          },
        ]),
        e
      );
    })();
  a(T, "LEFT", 37), a(T, "UP", 38), a(T, "RIGHT", 39), a(T, "DOWN", 40);
  var P = function (e, t) {
      var n = function () {
          return "simple_widget_".concat(t);
        },
        r = function (e, t) {
          var n = jQuery.data(e, t);
          return n && n instanceof L ? n : null;
        },
        o = function (t, i) {
          var o,
            s = n(),
            a = k(t.get());
          try {
            for (a.s(); !(o = a.n()).done; ) {
              var l = o.value;
              if (!r(l, s)) {
                var d = new e(l, i);
                jQuery.data(l, s) || jQuery.data(l, s, d), d.init();
              }
            }
          } catch (e) {
            a.e(e);
          } finally {
            a.f();
          }
          return t;
        },
        s = function (e) {
          var t,
            i = n(),
            o = k(e.get());
          try {
            for (o.s(); !(t = o.n()).done; ) {
              var s = t.value,
                a = r(s, i);
              a && a.destroy(), jQuery.removeData(s, i);
            }
          } catch (e) {
            o.e(e);
          } finally {
            o.f();
          }
        },
        a = function (e, t, i) {
          var r,
            o = null,
            s = k(e.get());
          try {
            for (s.s(); !(r = s.n()).done; ) {
              var a = r.value,
                l = jQuery.data(a, n());
              if (l && l instanceof L) {
                var d = l[t];
                d && "function" == typeof d && (o = d.apply(l, i));
              }
            }
          } catch (e) {
            s.e(e);
          } finally {
            s.f();
          }
          return o;
        };
      jQuery.fn[t] = function (t) {
        if (!t) return o(this, null);
        if ("object" === i(t)) {
          var n = t;
          return o(this, n);
        }
        if ("string" == typeof t && "_" !== t[0]) {
          var r = t;
          if ("destroy" === r) return s(this);
          if ("get_widget_class" === r) return e;
          for (
            var l = arguments.length, d = new Array(l > 1 ? l - 1 : 0), u = 1;
            u < l;
            u++
          )
            d[u - 1] = arguments[u];
          return a(this, r, d);
        }
      };
    },
    L = (function () {
      function e(t, i) {
        r(this, e),
          a(this, "options", void 0),
          a(this, "$el", void 0),
          (this.$el = jQuery(t));
        var o = this.constructor.defaults;
        this.options = n(n({}, o), i);
      }
      return (
        s(
          e,
          [
            {
              key: "destroy",
              value: function () {
                this.deinit();
              },
            },
            { key: "init", value: function () {} },
            { key: "deinit", value: function () {} },
          ],
          [
            {
              key: "register",
              value: function (e, t) {
                P(e, t);
              },
            },
          ]
        ),
        e
      );
    })();
  a(L, "defaults", {});
  var O = function (e) {
      return {
        pageX: e.pageX,
        pageY: e.pageY,
        target: e.target,
        originalEvent: e,
      };
    },
    A = function (e, t) {
      return {
        pageX: e.pageX,
        pageY: e.pageY,
        target: e.target,
        originalEvent: t,
      };
    },
    H = (function (e) {
      l(n, e);
      var t = v(n);
      function n() {
        var e;
        r(this, n);
        for (var i = arguments.length, o = new Array(i), s = 0; s < i; s++)
          o[s] = arguments[s];
        return (
          a(
            h((e = t.call.apply(t, [this].concat(o)))),
            "isMouseStarted",
            void 0
          ),
          a(h(e), "mouseDownInfo", void 0),
          a(h(e), "mouseDelayTimer", void 0),
          a(h(e), "isMouseDelayMet", void 0),
          a(h(e), "mouseDown", function (t) {
            0 === t.button &&
              e.handleMouseDown(O(t)) &&
              t.cancelable &&
              t.preventDefault();
          }),
          a(h(e), "mouseMove", function (t) {
            e.handleMouseMove(t, O(t));
          }),
          a(h(e), "mouseUp", function (t) {
            e.handleMouseUp(O(t));
          }),
          a(h(e), "touchStart", function (t) {
            if (t && !(t.touches.length > 1)) {
              var n = t.changedTouches[0];
              e.handleMouseDown(A(n, t));
            }
          }),
          a(h(e), "touchMove", function (t) {
            if (t && !(t.touches.length > 1)) {
              var n = t.changedTouches[0];
              e.handleMouseMove(t, A(n, t));
            }
          }),
          a(h(e), "touchEnd", function (t) {
            if (t && !(t.touches.length > 1)) {
              var n = t.changedTouches[0];
              e.handleMouseUp(A(n, t));
            }
          }),
          e
        );
      }
      return (
        s(n, [
          {
            key: "init",
            value: function () {
              var e = this.$el.get(0);
              e &&
                (e.addEventListener("mousedown", this.mouseDown, {
                  passive: !1,
                }),
                e.addEventListener("touchstart", this.touchStart, {
                  passive: !1,
                })),
                (this.isMouseStarted = !1),
                (this.mouseDelayTimer = null),
                (this.isMouseDelayMet = !1),
                (this.mouseDownInfo = null);
            },
          },
          {
            key: "deinit",
            value: function () {
              var e = this.$el.get(0);
              e &&
                (e.removeEventListener("mousedown", this.mouseDown, {
                  passive: !1,
                }),
                e.removeEventListener("touchstart", this.touchStart, {
                  passive: !1,
                })),
                this.removeMouseMoveEventListeners();
            },
          },
          {
            key: "handleMouseDown",
            value: function (e) {
              return (
                this.isMouseStarted && this.handleMouseUp(e),
                (this.mouseDownInfo = e),
                !!this.mouseCapture(e) && (this.handleStartMouse(), !0)
              );
            },
          },
          {
            key: "handleStartMouse",
            value: function () {
              document.addEventListener("mousemove", this.mouseMove, {
                passive: !1,
              }),
                document.addEventListener("touchmove", this.touchMove, {
                  passive: !1,
                }),
                document.addEventListener("mouseup", this.mouseUp, {
                  passive: !1,
                }),
                document.addEventListener("touchend", this.touchEnd, {
                  passive: !1,
                });
              var e = this.getMouseDelay();
              e ? this.startMouseDelayTimer(e) : (this.isMouseDelayMet = !0);
            },
          },
          {
            key: "startMouseDelayTimer",
            value: function (e) {
              var t = this;
              this.mouseDelayTimer && clearTimeout(this.mouseDelayTimer),
                (this.mouseDelayTimer = window.setTimeout(function () {
                  t.mouseDownInfo && (t.isMouseDelayMet = !0);
                }, e)),
                (this.isMouseDelayMet = !1);
            },
          },
          {
            key: "handleMouseMove",
            value: function (e, t) {
              if (this.isMouseStarted)
                return (
                  this.mouseDrag(t), void (e.cancelable && e.preventDefault())
                );
              this.isMouseDelayMet &&
                (this.mouseDownInfo &&
                  (this.isMouseStarted =
                    !1 !== this.mouseStart(this.mouseDownInfo)),
                this.isMouseStarted
                  ? (this.mouseDrag(t), e.cancelable && e.preventDefault())
                  : this.handleMouseUp(t));
            },
          },
          {
            key: "handleMouseUp",
            value: function (e) {
              this.removeMouseMoveEventListeners(),
                (this.isMouseDelayMet = !1),
                (this.mouseDownInfo = null),
                this.isMouseStarted &&
                  ((this.isMouseStarted = !1), this.mouseStop(e));
            },
          },
          {
            key: "removeMouseMoveEventListeners",
            value: function () {
              document.removeEventListener("mousemove", this.mouseMove, {
                passive: !1,
              }),
                document.removeEventListener("touchmove", this.touchMove, {
                  passive: !1,
                }),
                document.removeEventListener("mouseup", this.mouseUp, {
                  passive: !1,
                }),
                document.removeEventListener("touchend", this.touchEnd, {
                  passive: !1,
                });
            },
          },
        ]),
        n
      );
    })(L),
    M = (function () {
      function e(t) {
        r(this, e),
          a(this, "treeWidget", void 0),
          a(this, "_supportsLocalStorage", void 0),
          (this.treeWidget = t);
      }
      return (
        s(e, [
          {
            key: "saveState",
            value: function () {
              var e = JSON.stringify(this.getState());
              this.treeWidget.options.onSetStateFromStorage
                ? this.treeWidget.options.onSetStateFromStorage(e)
                : this.supportsLocalStorage() &&
                  localStorage.setItem(this.getKeyName(), e);
            },
          },
          {
            key: "getStateFromStorage",
            value: function () {
              var e = this.loadFromStorage();
              return e ? this.parseState(e) : null;
            },
          },
          {
            key: "getState",
            value: function () {
              var e,
                t,
                n = this;
              return {
                open_nodes:
                  ((t = []),
                  n.treeWidget.tree.iterate(function (e) {
                    return (
                      e.is_open && e.id && e.hasChildren() && t.push(e.id), !0
                    );
                  }),
                  t),
                selected_node:
                  ((e = []),
                  n.treeWidget.getSelectedNodes().forEach(function (t) {
                    null != t.id && e.push(t.id);
                  }),
                  e),
              };
            },
          },
          {
            key: "setInitialState",
            value: function (e) {
              if (e) {
                var t = !1;
                return (
                  e.open_nodes && (t = this.openInitialNodes(e.open_nodes)),
                  e.selected_node &&
                    (this.resetSelection(),
                    this.selectInitialNodes(e.selected_node)),
                  t
                );
              }
              return !1;
            },
          },
          {
            key: "setInitialStateOnDemand",
            value: function (e, t) {
              e
                ? this.doSetInitialStateOnDemand(
                    e.open_nodes,
                    e.selected_node,
                    t
                  )
                : t();
            },
          },
          {
            key: "getNodeIdToBeSelected",
            value: function () {
              var e = this.getStateFromStorage();
              return e && e.selected_node ? e.selected_node[0] : null;
            },
          },
          {
            key: "parseState",
            value: function (e) {
              var t,
                n = JSON.parse(e);
              return (
                n &&
                  n.selected_node &&
                  "number" == typeof (t = n.selected_node) &&
                  t % 1 == 0 &&
                  (n.selected_node = [n.selected_node]),
                n
              );
            },
          },
          {
            key: "loadFromStorage",
            value: function () {
              return this.treeWidget.options.onGetStateFromStorage
                ? this.treeWidget.options.onGetStateFromStorage()
                : this.supportsLocalStorage()
                ? localStorage.getItem(this.getKeyName())
                : null;
            },
          },
          {
            key: "openInitialNodes",
            value: function (e) {
              var t,
                n = !1,
                i = k(e);
              try {
                for (i.s(); !(t = i.n()).done; ) {
                  var r = t.value,
                    o = this.treeWidget.getNodeById(r);
                  o && (o.load_on_demand ? (n = !0) : (o.is_open = !0));
                }
              } catch (e) {
                i.e(e);
              } finally {
                i.f();
              }
              return n;
            },
          },
          {
            key: "selectInitialNodes",
            value: function (e) {
              var t,
                n = 0,
                i = k(e);
              try {
                for (i.s(); !(t = i.n()).done; ) {
                  var r = t.value,
                    o = this.treeWidget.getNodeById(r);
                  o &&
                    ((n += 1),
                    this.treeWidget.selectNodeHandler.addToSelection(o));
                }
              } catch (e) {
                i.e(e);
              } finally {
                i.f();
              }
              return 0 !== n;
            },
          },
          {
            key: "resetSelection",
            value: function () {
              var e = this.treeWidget.selectNodeHandler;
              e.getSelectedNodes().forEach(function (t) {
                e.removeFromSelection(t);
              });
            },
          },
          {
            key: "doSetInitialStateOnDemand",
            value: function (e, t, n) {
              var i = this,
                r = 0,
                o = e,
                s = function () {
                  var e,
                    s = [],
                    l = k(o);
                  try {
                    for (l.s(); !(e = l.n()).done; ) {
                      var d = e.value,
                        u = i.treeWidget.getNodeById(d);
                      u
                        ? u.is_loading ||
                          (u.load_on_demand
                            ? a(u)
                            : i.treeWidget._openNode(u, !1, null))
                        : s.push(d);
                    }
                  } catch (e) {
                    l.e(e);
                  } finally {
                    l.f();
                  }
                  (o = s),
                    i.selectInitialNodes(t) &&
                      i.treeWidget._refreshElements(null),
                    0 === r && n();
                },
                a = function (e) {
                  (r += 1),
                    i.treeWidget._openNode(e, !1, function () {
                      (r -= 1), s();
                    });
                };
              s();
            },
          },
          {
            key: "getKeyName",
            value: function () {
              return "string" == typeof this.treeWidget.options.saveState
                ? this.treeWidget.options.saveState
                : "tree";
            },
          },
          {
            key: "supportsLocalStorage",
            value: function () {
              return (
                null == this._supportsLocalStorage &&
                  (this._supportsLocalStorage = (function () {
                    if (null == localStorage) return !1;
                    try {
                      var e = "_storage_test";
                      sessionStorage.setItem(e, "value"),
                        sessionStorage.removeItem(e);
                    } catch (e) {
                      return !1;
                    }
                    return !0;
                  })()),
                this._supportsLocalStorage
              );
            },
          },
        ]),
        e
      );
    })(),
    x = (function () {
      function e(t) {
        r(this, e),
          a(this, "treeWidget", void 0),
          a(this, "previousTop", void 0),
          a(this, "isInitialized", void 0),
          a(this, "$scrollParent", void 0),
          a(this, "scrollParentTop", void 0),
          (this.treeWidget = t),
          (this.previousTop = -1),
          (this.isInitialized = !1);
      }
      return (
        s(e, [
          {
            key: "checkScrolling",
            value: function () {
              this.ensureInit(),
                this.checkVerticalScrolling(),
                this.checkHorizontalScrolling();
            },
          },
          {
            key: "scrollToY",
            value: function (e) {
              if ((this.ensureInit(), this.$scrollParent))
                this.$scrollParent[0].scrollTop = e;
              else {
                var t = this.treeWidget.$el.offset(),
                  n = t ? t.top : 0;
                jQuery(document).scrollTop(e + n);
              }
            },
          },
          {
            key: "isScrolledIntoView",
            value: function (e) {
              var t, n, i, r;
              this.ensureInit();
              var o = e.height() || 0;
              if (this.$scrollParent) {
                (r = 0), (n = this.$scrollParent.height() || 0);
                var s = e.offset();
                t = (i = (s ? s.top : 0) - this.scrollParentTop) + o;
              } else {
                n =
                  (r = jQuery(window).scrollTop() || 0) +
                  (jQuery(window).height() || 0);
                var a = e.offset();
                t = (i = a ? a.top : 0) + o;
              }
              return t <= n && i >= r;
            },
          },
          {
            key: "getScrollLeft",
            value: function () {
              return (
                (this.$scrollParent && this.$scrollParent.scrollLeft()) || 0
              );
            },
          },
          {
            key: "initScrollParent",
            value: function () {
              var e = this,
                t = function () {
                  (e.scrollParentTop = 0), (e.$scrollParent = null);
                };
              "fixed" === this.treeWidget.$el.css("position") && t();
              var n = (function () {
                var t = ["overflow", "overflow-y"],
                  n = function (e) {
                    for (var n = 0, i = t; n < i.length; n++) {
                      var r = i[n],
                        o = e.css(r);
                      if ("auto" === o || "scroll" === o) return !0;
                    }
                    return !1;
                  };
                if (n(e.treeWidget.$el)) return e.treeWidget.$el;
                var i,
                  r = k(e.treeWidget.$el.parents().get());
                try {
                  for (r.s(); !(i = r.n()).done; ) {
                    var o = i.value,
                      s = jQuery(o);
                    if (n(s)) return s;
                  }
                } catch (e) {
                  r.e(e);
                } finally {
                  r.f();
                }
                return null;
              })();
              if (n && n.length && "HTML" !== n[0].tagName) {
                this.$scrollParent = n;
                var i = this.$scrollParent.offset();
                this.scrollParentTop = i ? i.top : 0;
              } else t();
              this.isInitialized = !0;
            },
          },
          {
            key: "ensureInit",
            value: function () {
              this.isInitialized || this.initScrollParent();
            },
          },
          {
            key: "handleVerticalScrollingWithScrollParent",
            value: function (e) {
              var t = this.$scrollParent && this.$scrollParent[0];
              t &&
                (this.scrollParentTop + t.offsetHeight - e.bottom < 20
                  ? ((t.scrollTop += 20),
                    this.treeWidget.refreshHitAreas(),
                    (this.previousTop = -1))
                  : e.top - this.scrollParentTop < 20 &&
                    ((t.scrollTop -= 20),
                    this.treeWidget.refreshHitAreas(),
                    (this.previousTop = -1)));
            },
          },
          {
            key: "handleVerticalScrollingWithDocument",
            value: function (e) {
              var t = jQuery(document).scrollTop() || 0;
              e.top - t < 20
                ? jQuery(document).scrollTop(t - 20)
                : (jQuery(window).height() || 0) - (e.bottom - t) < 20 &&
                  jQuery(document).scrollTop(t + 20);
            },
          },
          {
            key: "checkVerticalScrolling",
            value: function () {
              var e = this.treeWidget.dndHandler.hoveredArea;
              e &&
                e.top !== this.previousTop &&
                ((this.previousTop = e.top),
                this.$scrollParent
                  ? this.handleVerticalScrollingWithScrollParent(e)
                  : this.handleVerticalScrollingWithDocument(e));
            },
          },
          {
            key: "checkHorizontalScrolling",
            value: function () {
              var e = this.treeWidget.dndHandler.positionInfo;
              e &&
                (this.$scrollParent
                  ? this.handleHorizontalScrollingWithParent(e)
                  : this.handleHorizontalScrollingWithDocument(e));
            },
          },
          {
            key: "handleHorizontalScrollingWithParent",
            value: function (e) {
              if (void 0 !== e.pageX && void 0 !== e.pageY) {
                var t = this.$scrollParent,
                  n = t && t.offset();
                if (t && n) {
                  var i = t[0],
                    r = i.scrollLeft + i.clientWidth < i.scrollWidth,
                    o = i.scrollLeft > 0,
                    s = n.left + i.clientWidth,
                    a = n.left,
                    l = e.pageX > s - 20,
                    d = e.pageX < a + 20;
                  l && r
                    ? (i.scrollLeft = Math.min(
                        i.scrollLeft + 20,
                        i.scrollWidth
                      ))
                    : d && o && (i.scrollLeft = Math.max(i.scrollLeft - 20, 0));
                }
              }
            },
          },
          {
            key: "handleHorizontalScrollingWithDocument",
            value: function (e) {
              if (void 0 !== e.pageX && void 0 !== e.pageY) {
                var t = jQuery(document),
                  n = t.scrollLeft() || 0,
                  i = jQuery(window).width() || 0,
                  r = n > 0,
                  o = e.pageX > i - 20,
                  s = e.pageX - n < 20;
                o
                  ? t.scrollLeft(n + 20)
                  : s && r && t.scrollLeft(Math.max(n - 20, 0));
              }
            },
          },
        ]),
        e
      );
    })(),
    $ = (function () {
      function e(t) {
        r(this, e),
          a(this, "treeWidget", void 0),
          a(this, "selectedNodes", void 0),
          a(this, "selectedSingleNode", void 0),
          (this.treeWidget = t),
          (this.selectedNodes = new Set()),
          this.clear();
      }
      return (
        s(e, [
          {
            key: "getSelectedNode",
            value: function () {
              var e = this.getSelectedNodes();
              return !!e.length && e[0];
            },
          },
          {
            key: "getSelectedNodes",
            value: function () {
              var e = this;
              if (this.selectedSingleNode) return [this.selectedSingleNode];
              var t = [];
              return (
                this.selectedNodes.forEach(function (n) {
                  var i = e.treeWidget.getNodeById(n);
                  i && t.push(i);
                }),
                t
              );
            },
          },
          {
            key: "getSelectedNodesUnder",
            value: function (e) {
              if (this.selectedSingleNode)
                return e.isParentOf(this.selectedSingleNode)
                  ? [this.selectedSingleNode]
                  : [];
              var t = [];
              for (var n in this.selectedNodes)
                if (
                  Object.prototype.hasOwnProperty.call(this.selectedNodes, n)
                ) {
                  var i = this.treeWidget.getNodeById(n);
                  i && e.isParentOf(i) && t.push(i);
                }
              return t;
            },
          },
          {
            key: "isNodeSelected",
            value: function (e) {
              return null != e.id
                ? this.selectedNodes.has(e.id)
                : !!this.selectedSingleNode &&
                    this.selectedSingleNode.element === e.element;
            },
          },
          {
            key: "clear",
            value: function () {
              this.selectedNodes.clear(), (this.selectedSingleNode = null);
            },
          },
          {
            key: "removeFromSelection",
            value: function (e) {
              var t = this,
                n =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1];
              null == e.id
                ? this.selectedSingleNode &&
                  e.element === this.selectedSingleNode.element &&
                  (this.selectedSingleNode = null)
                : (this.selectedNodes.delete(e.id),
                  n &&
                    e.iterate(function () {
                      return null != e.id && t.selectedNodes.delete(e.id), !0;
                    }));
            },
          },
          {
            key: "addToSelection",
            value: function (e) {
              null != e.id
                ? this.selectedNodes.add(e.id)
                : (this.selectedSingleNode = e);
            },
          },
          {
            key: "isFocusOnTree",
            value: function () {
              var e = document.activeElement;
              return Boolean(
                e && "SPAN" === e.tagName && this.treeWidget._containsElement(e)
              );
            },
          },
        ]),
        e
      );
    })(),
    q = (function () {
      function e(t, n) {
        r(this, e),
          a(this, "node", void 0),
          a(this, "$element", void 0),
          a(this, "treeWidget", void 0),
          this.init(t, n);
      }
      return (
        s(e, [
          {
            key: "init",
            value: function (e, t) {
              if (((this.node = e), (this.treeWidget = t), !e.element)) {
                var n = this.treeWidget.element.get(0);
                n && (e.element = n);
              }
              e.element && (this.$element = jQuery(e.element));
            },
          },
          {
            key: "addDropHint",
            value: function (e) {
              return this.mustShowBorderDropHint(e)
                ? new Q(this.$element, this.treeWidget._getScrollLeft())
                : new U(this.node, this.$element, e);
            },
          },
          {
            key: "select",
            value: function (e) {
              var t,
                n = this.getLi();
              n.addClass("jqtree-selected"), n.attr("aria-selected", "true");
              var i = this.getSpan();
              i.attr(
                "tabindex",
                null !== (t = this.treeWidget.options.tabIndex) && void 0 !== t
                  ? t
                  : null
              ),
                e && i.trigger("focus");
            },
          },
          {
            key: "deselect",
            value: function () {
              var e = this.getLi();
              e.removeClass("jqtree-selected"),
                e.attr("aria-selected", "false");
              var t = this.getSpan();
              t.removeAttr("tabindex"), t.blur();
            },
          },
          {
            key: "getUl",
            value: function () {
              return this.$element.children("ul:first");
            },
          },
          {
            key: "getSpan",
            value: function () {
              return this.$element
                .children(".jqtree-element")
                .find("span.jqtree-title");
            },
          },
          {
            key: "getLi",
            value: function () {
              return this.$element;
            },
          },
          {
            key: "mustShowBorderDropHint",
            value: function (e) {
              return e === S.Inside;
            },
          },
        ]),
        e
      );
    })(),
    B = (function (e) {
      l(n, e);
      var t = v(n);
      function n() {
        return r(this, n), t.apply(this, arguments);
      }
      return (
        s(n, [
          {
            key: "open",
            value: function (e) {
              var t = this,
                n =
                  !(arguments.length > 1 && void 0 !== arguments[1]) ||
                  arguments[1],
                i =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : "fast";
              if (!this.node.is_open) {
                this.node.is_open = !0;
                var r = this.getButton();
                r.removeClass("jqtree-closed"), r.html("");
                var o = r.get(0);
                if (o) {
                  var s = this.treeWidget.renderer.openedIconElement.cloneNode(
                    !0
                  );
                  o.appendChild(s);
                }
                var a = function () {
                  t.getLi().removeClass("jqtree-closed"),
                    t.getSpan().attr("aria-expanded", "true"),
                    e && e(t.node),
                    t.treeWidget._triggerEvent("tree.open", { node: t.node });
                };
                n ? this.getUl().slideDown(i, a) : (this.getUl().show(), a());
              }
            },
          },
          {
            key: "close",
            value: function () {
              var e = this,
                t =
                  !(arguments.length > 0 && void 0 !== arguments[0]) ||
                  arguments[0],
                n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "fast";
              if (this.node.is_open) {
                this.node.is_open = !1;
                var i = this.getButton();
                i.addClass("jqtree-closed"), i.html("");
                var r = i.get(0);
                if (r) {
                  var o = this.treeWidget.renderer.closedIconElement.cloneNode(
                    !0
                  );
                  r.appendChild(o);
                }
                var s = function () {
                  e.getLi().addClass("jqtree-closed"),
                    e.getSpan().attr("aria-expanded", "false"),
                    e.treeWidget._triggerEvent("tree.close", { node: e.node });
                };
                t ? this.getUl().slideUp(n, s) : (this.getUl().hide(), s());
              }
            },
          },
          {
            key: "mustShowBorderDropHint",
            value: function (e) {
              return !this.node.is_open && e === S.Inside;
            },
          },
          {
            key: "getButton",
            value: function () {
              return this.$element
                .children(".jqtree-element")
                .find("a.jqtree-toggler");
            },
          },
        ]),
        n
      );
    })(q),
    Q = (function () {
      function e(t, n) {
        r(this, e), a(this, "$hint", void 0);
        var i = t.children(".jqtree-element"),
          o = t.width() || 0,
          s = Math.max(o + n - 4, 0),
          l = i.outerHeight() || 0,
          d = Math.max(l - 4, 0);
        (this.$hint = jQuery('<span class="jqtree-border"></span>')),
          i.append(this.$hint),
          this.$hint.css({ width: s, height: d });
      }
      return (
        s(e, [
          {
            key: "remove",
            value: function () {
              this.$hint.remove();
            },
          },
        ]),
        e
      );
    })(),
    U = (function () {
      function e(t, n, i) {
        r(this, e),
          a(this, "$element", void 0),
          a(this, "node", void 0),
          a(this, "$ghost", void 0),
          (this.$element = n),
          (this.node = t),
          (this.$ghost = jQuery(
            '<li class="jqtree_common jqtree-ghost"><span class="jqtree_common jqtree-circle"></span>\n            <span class="jqtree_common jqtree-line"></span></li>'
          )),
          i === S.After
            ? this.moveAfter()
            : i === S.Before
            ? this.moveBefore()
            : i === S.Inside &&
              (t.isFolder() && t.is_open
                ? this.moveInsideOpenFolder()
                : this.moveInside());
      }
      return (
        s(e, [
          {
            key: "remove",
            value: function () {
              this.$ghost.remove();
            },
          },
          {
            key: "moveAfter",
            value: function () {
              this.$element.after(this.$ghost);
            },
          },
          {
            key: "moveBefore",
            value: function () {
              this.$element.before(this.$ghost);
            },
          },
          {
            key: "moveInsideOpenFolder",
            value: function () {
              var e = this.node.children[0].element;
              e && jQuery(e).before(this.$ghost);
            },
          },
          {
            key: "moveInside",
            value: function () {
              this.$element.after(this.$ghost),
                this.$ghost.addClass("jqtree-inside");
            },
          },
        ]),
        e
      );
    })(),
    R = "Node parameter is empty",
    X = "Parameter is empty: ",
    Y = (function (e) {
      l(o, e);
      var t = v(o);
      function o() {
        var e;
        r(this, o);
        for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++)
          i[s] = arguments[s];
        return (
          a(h((e = t.call.apply(t, [this].concat(i)))), "element", void 0),
          a(h(e), "tree", void 0),
          a(h(e), "dndHandler", void 0),
          a(h(e), "renderer", void 0),
          a(h(e), "dataLoader", void 0),
          a(h(e), "scrollHandler", void 0),
          a(h(e), "selectNodeHandler", void 0),
          a(h(e), "isInitialized", void 0),
          a(h(e), "saveStateHandler", void 0),
          a(h(e), "keyHandler", void 0),
          a(h(e), "handleClick", function (t) {
            var n = e.getClickTarget(t.target);
            if (n)
              if ("button" === n.type)
                e.toggle(n.node, e.options.slide),
                  t.preventDefault(),
                  t.stopPropagation();
              else if ("label" === n.type) {
                var i = n.node;
                e
                  ._triggerEvent("tree.click", { node: i, click_event: t })
                  .isDefaultPrevented() || e.doSelectNode(i);
              }
          }),
          a(h(e), "handleDblclick", function (t) {
            var n = e.getClickTarget(t.target);
            "label" === (null == n ? void 0 : n.type) &&
              e._triggerEvent("tree.dblclick", {
                node: n.node,
                click_event: t,
              });
          }),
          a(h(e), "handleContextmenu", function (t) {
            var n = jQuery(t.target).closest("ul.jqtree-tree .jqtree-element");
            if (n.length) {
              var i = e.getNode(n);
              if (i)
                return (
                  t.preventDefault(),
                  t.stopPropagation(),
                  e._triggerEvent("tree.contextmenu", {
                    node: i,
                    click_event: t,
                  }),
                  !1
                );
            }
            return null;
          }),
          e
        );
      }
      return (
        s(o, [
          {
            key: "toggle",
            value: function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null;
              if (!e) throw Error(R);
              var n = null != t ? t : this.options.slide;
              return (
                e.is_open ? this.closeNode(e, n) : this.openNode(e, n),
                this.element
              );
            },
          },
          {
            key: "getTree",
            value: function () {
              return this.tree;
            },
          },
          {
            key: "selectNode",
            value: function (e, t) {
              return this.doSelectNode(e, t), this.element;
            },
          },
          {
            key: "getSelectedNode",
            value: function () {
              return this.selectNodeHandler.getSelectedNode();
            },
          },
          {
            key: "toJson",
            value: function () {
              return JSON.stringify(this.tree.getData());
            },
          },
          {
            key: "loadData",
            value: function (e, t) {
              return this.doLoadData(e, t), this.element;
            },
          },
          {
            key: "loadDataFromUrl",
            value: function (e, t, n) {
              return (
                "string" == typeof e
                  ? this.doLoadDataFromUrl(e, t, null != n ? n : null)
                  : this.doLoadDataFromUrl(null, e, t),
                this.element
              );
            },
          },
          {
            key: "reload",
            value: function (e) {
              return this.doLoadDataFromUrl(null, null, e), this.element;
            },
          },
          {
            key: "refresh",
            value: function () {
              return this._refreshElements(null), this.element;
            },
          },
          {
            key: "getNodeById",
            value: function (e) {
              return this.tree.getNodeById(e);
            },
          },
          {
            key: "getNodeByName",
            value: function (e) {
              return this.tree.getNodeByName(e);
            },
          },
          {
            key: "getNodeByNameMustExist",
            value: function (e) {
              return this.tree.getNodeByNameMustExist(e);
            },
          },
          {
            key: "getNodesByProperty",
            value: function (e, t) {
              return this.tree.getNodesByProperty(e, t);
            },
          },
          {
            key: "getNodeByHtmlElement",
            value: function (e) {
              return this.getNode(jQuery(e));
            },
          },
          {
            key: "getNodeByCallback",
            value: function (e) {
              return this.tree.getNodeByCallback(e);
            },
          },
          {
            key: "openNode",
            value: function (e, t, n) {
              var i = this;
              if (!e) throw Error(R);
              var r = (function () {
                  var e, r, o;
                  ("function" == typeof t
                    ? ((e = t), (r = null))
                    : ((r = t), (e = n)),
                  null == r) &&
                    (r = null !== (o = i.options.slide) && void 0 !== o && o);
                  return [r, e];
                })(),
                o = g(r, 2),
                s = o[0],
                a = o[1];
              return this._openNode(e, s, a), this.element;
            },
          },
          {
            key: "closeNode",
            value: function (e, t) {
              if (!e) throw Error(R);
              var n = null != t ? t : this.options.slide;
              return (
                (e.isFolder() || e.isEmptyFolder) &&
                  (new B(e, this).close(n, this.options.animationSpeed),
                  this.saveState()),
                this.element
              );
            },
          },
          {
            key: "isDragging",
            value: function () {
              return this.dndHandler.isDragging;
            },
          },
          {
            key: "refreshHitAreas",
            value: function () {
              return this.dndHandler.refresh(), this.element;
            },
          },
          {
            key: "addNodeAfter",
            value: function (e, t) {
              var n = t.addAfter(e);
              return n && this._refreshElements(t.parent), n;
            },
          },
          {
            key: "addNodeBefore",
            value: function (e, t) {
              if (!t) throw Error(X + "existingNode");
              var n = t.addBefore(e);
              return n && this._refreshElements(t.parent), n;
            },
          },
          {
            key: "addParentNode",
            value: function (e, t) {
              if (!t) throw Error(X + "existingNode");
              var n = t.addParent(e);
              return n && this._refreshElements(n.parent), n;
            },
          },
          {
            key: "removeNode",
            value: function (e) {
              if (!e) throw Error(R);
              if (!e.parent) throw Error("Node has no parent");
              this.selectNodeHandler.removeFromSelection(e, !0);
              var t = e.parent;
              return e.remove(), this._refreshElements(t), this.element;
            },
          },
          {
            key: "appendNode",
            value: function (e, t) {
              var n = t || this.tree,
                i = n.append(e);
              return this._refreshElements(n), i;
            },
          },
          {
            key: "prependNode",
            value: function (e, t) {
              var n = null != t ? t : this.tree,
                i = n.prepend(e);
              return this._refreshElements(n), i;
            },
          },
          {
            key: "updateNode",
            value: function (e, t) {
              if (!e) throw Error(R);
              var n = "object" === i(t) && t.id && t.id !== e.id;
              return (
                n && this.tree.removeNodeFromIndex(e),
                e.setData(t),
                n && this.tree.addNodeToIndex(e),
                "object" === i(t) &&
                  t.children &&
                  t.children instanceof Array &&
                  (e.removeChildren(),
                  t.children.length && e.loadFromData(t.children)),
                this._refreshElements(e),
                this.element
              );
            },
          },
          {
            key: "isSelectedNodeInSubtree",
            value: function (e) {
              var t = this.getSelectedNode();
              return !!t && (e === t || e.isParentOf(t));
            },
          },
          {
            key: "moveNode",
            value: function (e, t, n) {
              if (!e) throw Error(R);
              if (!t) throw Error(X + "targetNode");
              var i = b[n];
              return (
                void 0 !== i &&
                  (this.tree.moveNode(e, t, i), this._refreshElements(null)),
                this.element
              );
            },
          },
          {
            key: "getStateFromStorage",
            value: function () {
              return this.saveStateHandler.getStateFromStorage();
            },
          },
          {
            key: "addToSelection",
            value: function (e, t) {
              if (!e) throw Error(R);
              return (
                this.selectNodeHandler.addToSelection(e),
                this._getNodeElementForNode(e).select(void 0 === t || t),
                this.saveState(),
                this.element
              );
            },
          },
          {
            key: "getSelectedNodes",
            value: function () {
              return this.selectNodeHandler.getSelectedNodes();
            },
          },
          {
            key: "isNodeSelected",
            value: function (e) {
              if (!e) throw Error(R);
              return this.selectNodeHandler.isNodeSelected(e);
            },
          },
          {
            key: "removeFromSelection",
            value: function (e) {
              if (!e) throw Error(R);
              return (
                this.selectNodeHandler.removeFromSelection(e),
                this._getNodeElementForNode(e).deselect(),
                this.saveState(),
                this.element
              );
            },
          },
          {
            key: "scrollToNode",
            value: function (e) {
              if (!e) throw Error(R);
              var t = jQuery(e.element).offset(),
                n = t ? t.top : 0,
                i = this.$el.offset(),
                r = n - (i ? i.top : 0);
              return this.scrollHandler.scrollToY(r), this.element;
            },
          },
          {
            key: "getState",
            value: function () {
              return this.saveStateHandler.getState();
            },
          },
          {
            key: "setState",
            value: function (e) {
              return (
                this.saveStateHandler.setInitialState(e),
                this._refreshElements(null),
                this.element
              );
            },
          },
          {
            key: "setOption",
            value: function (e, t) {
              return (this.options[e] = t), this.element;
            },
          },
          {
            key: "moveDown",
            value: function () {
              var e = this.getSelectedNode();
              return e && this.keyHandler.moveDown(e), this.element;
            },
          },
          {
            key: "moveUp",
            value: function () {
              var e = this.getSelectedNode();
              return e && this.keyHandler.moveUp(e), this.element;
            },
          },
          {
            key: "getVersion",
            value: function () {
              return "1.7.0";
            },
          },
          {
            key: "_triggerEvent",
            value: function (e, t) {
              var n = jQuery.Event(e, t);
              return this.element.trigger(n), n;
            },
          },
          {
            key: "_openNode",
            value: function (e) {
              var t = this,
                n =
                  !(arguments.length > 1 && void 0 !== arguments[1]) ||
                  arguments[1],
                i = arguments.length > 2 ? arguments[2] : void 0,
                r = function (e, n, i) {
                  new B(e, t).open(i, n, t.options.animationSpeed);
                };
              if (e.isFolder() || e.isEmptyFolder)
                if (e.load_on_demand) this.loadFolderOnDemand(e, n, i);
                else {
                  for (var o = e.parent; o; )
                    o.parent && r(o, !1, null), (o = o.parent);
                  r(e, n, i), this.saveState();
                }
            },
          },
          {
            key: "_refreshElements",
            value: function (e) {
              var t = this.selectNodeHandler.isFocusOnTree(),
                n = !!e && this.isSelectedNodeInSubtree(e);
              this.renderer.render(e),
                n && this.selectCurrentNode(t),
                this._triggerEvent("tree.refresh");
            },
          },
          {
            key: "_getNodeElementForNode",
            value: function (e) {
              return e.isFolder() ? new B(e, this) : new q(e, this);
            },
          },
          {
            key: "_getNodeElement",
            value: function (e) {
              var t = this.getNode(e);
              return t ? this._getNodeElementForNode(t) : null;
            },
          },
          {
            key: "_containsElement",
            value: function (e) {
              var t = this.getNode(jQuery(e));
              return null != t && t.tree === this.tree;
            },
          },
          {
            key: "_getScrollLeft",
            value: function () {
              return this.scrollHandler.getScrollLeft();
            },
          },
          {
            key: "init",
            value: function () {
              p(d(o.prototype), "init", this).call(this),
                (this.element = this.$el),
                (this.isInitialized = !1),
                (this.options.rtl = this.getRtlOption()),
                null == this.options.closedIcon &&
                  (this.options.closedIcon = this.getDefaultClosedIcon()),
                (this.renderer = new F(this)),
                (this.dataLoader = new W(this)),
                (this.saveStateHandler = new M(this)),
                (this.selectNodeHandler = new $(this)),
                (this.dndHandler = new j(this)),
                (this.scrollHandler = new x(this)),
                (this.keyHandler = new T(this)),
                this.initData(),
                this.element.on("click", this.handleClick),
                this.element.on("dblclick", this.handleDblclick),
                this.options.useContextMenu &&
                  this.element.on("contextmenu", this.handleContextmenu);
            },
          },
          {
            key: "deinit",
            value: function () {
              this.element.empty(),
                this.element.off(),
                this.keyHandler.deinit(),
                (this.tree = new I({}, !0)),
                p(d(o.prototype), "deinit", this).call(this);
            },
          },
          {
            key: "mouseCapture",
            value: function (e) {
              return (
                !!this.options.dragAndDrop && this.dndHandler.mouseCapture(e)
              );
            },
          },
          {
            key: "mouseStart",
            value: function (e) {
              return (
                !!this.options.dragAndDrop && this.dndHandler.mouseStart(e)
              );
            },
          },
          {
            key: "mouseDrag",
            value: function (e) {
              if (this.options.dragAndDrop) {
                var t = this.dndHandler.mouseDrag(e);
                return this.scrollHandler.checkScrolling(), t;
              }
              return !1;
            },
          },
          {
            key: "mouseStop",
            value: function (e) {
              return !!this.options.dragAndDrop && this.dndHandler.mouseStop(e);
            },
          },
          {
            key: "getMouseDelay",
            value: function () {
              var e;
              return null !== (e = this.options.startDndDelay) && void 0 !== e
                ? e
                : 0;
            },
          },
          {
            key: "initData",
            value: function () {
              this.options.data
                ? this.doLoadData(this.options.data, null)
                : this.getDataUrlInfo(null)
                ? this.doLoadDataFromUrl(null, null, null)
                : this.doLoadData([], null);
            },
          },
          {
            key: "getDataUrlInfo",
            value: function (e) {
              var t,
                n = this,
                r = this.options.dataUrl || this.element.data("url"),
                o = function (t) {
                  if (null != e && e.id) {
                    var i = { node: e.id };
                    t.data = i;
                  } else {
                    var r = n.getNodeIdToBeSelected();
                    if (r) {
                      var o = { selected_node: r };
                      t.data = o;
                    }
                  }
                };
              return "function" == typeof r
                ? r(e)
                : "string" == typeof r
                ? (o((t = { url: r })), t)
                : r && "object" === i(r)
                ? (o(r), r)
                : null;
            },
          },
          {
            key: "getNodeIdToBeSelected",
            value: function () {
              return this.options.saveState
                ? this.saveStateHandler.getNodeIdToBeSelected()
                : null;
            },
          },
          {
            key: "initTree",
            value: function (e) {
              var t = this,
                n = function () {
                  t.isInitialized ||
                    ((t.isInitialized = !0), t._triggerEvent("tree.init"));
                };
              if (this.options.nodeClass) {
                (this.tree = new this.options.nodeClass(
                  null,
                  !0,
                  this.options.nodeClass
                )),
                  this.selectNodeHandler.clear(),
                  this.tree.loadFromData(e);
                var i = this.setInitialState();
                this._refreshElements(null),
                  i ? this.setInitialStateOnDemand(n) : n();
              }
            },
          },
          {
            key: "setInitialState",
            value: function () {
              var e = this,
                t = g(
                  (function () {
                    if (e.options.saveState) {
                      var t = e.saveStateHandler.getStateFromStorage();
                      return t
                        ? [!0, e.saveStateHandler.setInitialState(t)]
                        : [!1, !1];
                    }
                    return [!1, !1];
                  })(),
                  2
                ),
                n = t[0],
                i = t[1];
              return (
                n ||
                  (i = (function () {
                    if (!1 === e.options.autoOpen) return !1;
                    var t = e.getAutoOpenMaxLevel(),
                      n = !1;
                    return (
                      e.tree.iterate(function (e, i) {
                        return e.load_on_demand
                          ? ((n = !0), !1)
                          : !!e.hasChildren() && ((e.is_open = !0), i !== t);
                      }),
                      n
                    );
                  })()),
                i
              );
            },
          },
          {
            key: "setInitialStateOnDemand",
            value: function (e) {
              var t,
                n,
                i,
                r,
                o = this;
              (function () {
                if (o.options.saveState) {
                  var t = o.saveStateHandler.getStateFromStorage();
                  return (
                    !!t &&
                    (o.saveStateHandler.setInitialStateOnDemand(t, e), !0)
                  );
                }
                return !1;
              })() ||
                ((t = o.getAutoOpenMaxLevel()),
                (n = 0),
                (i = function (e) {
                  (n += 1),
                    o._openNode(e, !1, function () {
                      (n -= 1), r();
                    });
                }),
                (r = function () {
                  o.tree.iterate(function (e, n) {
                    return e.load_on_demand
                      ? (e.is_loading || i(e), !1)
                      : (o._openNode(e, !1, null), n !== t);
                  }),
                    0 === n && e();
                })());
            },
          },
          {
            key: "getAutoOpenMaxLevel",
            value: function () {
              return !0 === this.options.autoOpen
                ? -1
                : "number" == typeof this.options.autoOpen
                ? this.options.autoOpen
                : "string" == typeof this.options.autoOpen
                ? parseInt(this.options.autoOpen, 10)
                : 0;
            },
          },
          {
            key: "getClickTarget",
            value: function (e) {
              var t = jQuery(e),
                n = t.closest(".jqtree-toggler");
              if (n.length) {
                var i = this.getNode(n);
                if (i) return { type: "button", node: i };
              } else {
                var r = t.closest(".jqtree-element");
                if (r.length) {
                  var o = this.getNode(r);
                  if (o) return { type: "label", node: o };
                }
              }
              return null;
            },
          },
          {
            key: "getNode",
            value: function (e) {
              var t = e.closest("li.jqtree_common");
              return 0 === t.length ? null : t.data("node");
            },
          },
          {
            key: "saveState",
            value: function () {
              this.options.saveState && this.saveStateHandler.saveState();
            },
          },
          {
            key: "selectCurrentNode",
            value: function (e) {
              var t = this.getSelectedNode();
              if (t) {
                var n = this._getNodeElementForNode(t);
                n && n.select(e);
              }
            },
          },
          {
            key: "deselectCurrentNode",
            value: function () {
              var e = this.getSelectedNode();
              e && this.removeFromSelection(e);
            },
          },
          {
            key: "getDefaultClosedIcon",
            value: function () {
              return this.options.rtl ? "&#x25c0;" : "&#x25ba;";
            },
          },
          {
            key: "getRtlOption",
            value: function () {
              if (null != this.options.rtl) return this.options.rtl;
              var e = this.element.data("rtl");
              return null !== e && !1 !== e && void 0 !== e;
            },
          },
          {
            key: "doSelectNode",
            value: function (e, t) {
              var i = this,
                r = function () {
                  i.options.saveState && i.saveStateHandler.saveState();
                };
              if (!e) return this.deselectCurrentNode(), void r();
              var o = n(n({}, { mustSetFocus: !0, mustToggle: !0 }), t || {});
              if (
                i.options.onCanSelectNode
                  ? !0 === i.options.selectable && i.options.onCanSelectNode(e)
                  : !0 === i.options.selectable
              ) {
                if (this.selectNodeHandler.isNodeSelected(e))
                  o.mustToggle &&
                    (this.deselectCurrentNode(),
                    this._triggerEvent("tree.select", {
                      node: null,
                      previous_node: e,
                    }));
                else {
                  var s = this.getSelectedNode() || null;
                  this.deselectCurrentNode(),
                    this.addToSelection(e, o.mustSetFocus),
                    this._triggerEvent("tree.select", {
                      node: e,
                      deselected_node: s,
                    }),
                    (a = e.parent) &&
                      a.parent &&
                      !a.is_open &&
                      i.openNode(a, !1);
                }
                var a;
                r();
              }
            },
          },
          {
            key: "doLoadData",
            value: function (e, t) {
              e &&
                (t
                  ? (this.deselectNodes(t), this.loadSubtree(e, t))
                  : this.initTree(e),
                this.isDragging() && this.dndHandler.refresh()),
                this._triggerEvent("tree.load_data", {
                  tree_data: e,
                  parent_node: t,
                });
            },
          },
          {
            key: "deselectNodes",
            value: function (e) {
              var t,
                n = k(this.selectNodeHandler.getSelectedNodesUnder(e));
              try {
                for (n.s(); !(t = n.n()).done; ) {
                  var i = t.value;
                  this.selectNodeHandler.removeFromSelection(i);
                }
              } catch (e) {
                n.e(e);
              } finally {
                n.f();
              }
            },
          },
          {
            key: "loadSubtree",
            value: function (e, t) {
              t.loadFromData(e),
                (t.load_on_demand = !1),
                (t.is_loading = !1),
                this._refreshElements(t);
            },
          },
          {
            key: "doLoadDataFromUrl",
            value: function (e, t, n) {
              var i = e || this.getDataUrlInfo(t);
              this.dataLoader.loadFromUrl(i, t, n);
            },
          },
          {
            key: "loadFolderOnDemand",
            value: function (e) {
              var t = this,
                n =
                  !(arguments.length > 1 && void 0 !== arguments[1]) ||
                  arguments[1],
                i = arguments.length > 2 ? arguments[2] : void 0;
              (e.is_loading = !0),
                this.doLoadDataFromUrl(null, e, function () {
                  t._openNode(e, n, i);
                });
            },
          },
        ]),
        o
      );
    })(H);
  return (
    a(Y, "defaults", {
      animationSpeed: "fast",
      autoEscape: !0,
      autoOpen: !1,
      buttonLeft: !0,
      closedIcon: void 0,
      data: void 0,
      dataFilter: void 0,
      dataUrl: void 0,
      dragAndDrop: !1,
      keyboardSupport: !0,
      nodeClass: I,
      onCanMove: void 0,
      onCanMoveTo: void 0,
      onCanSelectNode: void 0,
      onCreateLi: void 0,
      onDragMove: void 0,
      onDragStop: void 0,
      onGetStateFromStorage: void 0,
      onIsMoveHandle: void 0,
      onLoadFailed: void 0,
      onLoading: void 0,
      onSetStateFromStorage: void 0,
      openedIcon: "-",
      openFolderDelay: 500,
      rtl: void 0,
      saveState: !1,
      selectable: !0,
      showEmptyFolder: !1,
      slide: !0,
      startDndDelay: 300,
      tabIndex: 0,
      useContextMenu: !0,
    }),
    L.register(Y, "tree"),
    (e.JqTreeWidget = Y),
    e
  );
})({});
//# sourceMappingURL=tree.jquery.js.map
