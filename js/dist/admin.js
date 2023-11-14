/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/sweetalert/dist/sweetalert.min.js":
/*!********************************************************!*\
  !*** ./node_modules/sweetalert/dist/sweetalert.min.js ***!
  \********************************************************/
/***/ (function(module) {

!function (t, e) {
   true ? module.exports = e() : 0;
}(this, function () {
  return function (t) {
    function e(o) {
      if (n[o]) return n[o].exports;
      var r = n[o] = {
        i: o,
        l: !1,
        exports: {}
      };
      return t[o].call(r.exports, r, r.exports, e), r.l = !0, r.exports;
    }
    var n = {};
    return e.m = t, e.c = n, e.d = function (t, n, o) {
      e.o(t, n) || Object.defineProperty(t, n, {
        configurable: !1,
        enumerable: !0,
        get: o
      });
    }, e.n = function (t) {
      var n = t && t.__esModule ? function () {
        return t["default"];
      } : function () {
        return t;
      };
      return e.d(n, "a", n), n;
    }, e.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, e.p = "", e(e.s = 8);
  }([function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var o = "swal-button";
    e.CLASS_NAMES = {
      MODAL: "swal-modal",
      OVERLAY: "swal-overlay",
      SHOW_MODAL: "swal-overlay--show-modal",
      MODAL_TITLE: "swal-title",
      MODAL_TEXT: "swal-text",
      ICON: "swal-icon",
      ICON_CUSTOM: "swal-icon--custom",
      CONTENT: "swal-content",
      FOOTER: "swal-footer",
      BUTTON_CONTAINER: "swal-button-container",
      BUTTON: o,
      CONFIRM_BUTTON: o + "--confirm",
      CANCEL_BUTTON: o + "--cancel",
      DANGER_BUTTON: o + "--danger",
      BUTTON_LOADING: o + "--loading",
      BUTTON_LOADER: o + "__loader"
    }, e["default"] = e.CLASS_NAMES;
  }, function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.getNode = function (t) {
      var e = "." + t;
      return document.querySelector(e);
    }, e.stringToNode = function (t) {
      var e = document.createElement("div");
      return e.innerHTML = t.trim(), e.firstChild;
    }, e.insertAfter = function (t, e) {
      var n = e.nextSibling;
      e.parentNode.insertBefore(t, n);
    }, e.removeNode = function (t) {
      t.parentElement.removeChild(t);
    }, e.throwErr = function (t) {
      throw t = t.replace(/ +(?= )/g, ""), "SweetAlert: " + (t = t.trim());
    }, e.isPlainObject = function (t) {
      if ("[object Object]" !== Object.prototype.toString.call(t)) return !1;
      var e = Object.getPrototypeOf(t);
      return null === e || e === Object.prototype;
    }, e.ordinalSuffixOf = function (t) {
      var e = t % 10,
        n = t % 100;
      return 1 === e && 11 !== n ? t + "st" : 2 === e && 12 !== n ? t + "nd" : 3 === e && 13 !== n ? t + "rd" : t + "th";
    };
  }, function (t, e, n) {
    "use strict";

    function o(t) {
      for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), o(n(25));
    var r = n(26);
    e.overlayMarkup = r["default"], o(n(27)), o(n(28)), o(n(29));
    var i = n(0),
      a = i["default"].MODAL_TITLE,
      s = i["default"].MODAL_TEXT,
      c = i["default"].ICON,
      l = i["default"].FOOTER;
    e.iconMarkup = '\n  <div class="' + c + '"></div>', e.titleMarkup = '\n  <div class="' + a + '"></div>\n', e.textMarkup = '\n  <div class="' + s + '"></div>', e.footerMarkup = '\n  <div class="' + l + '"></div>\n';
  }, function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var o = n(1);
    e.CONFIRM_KEY = "confirm", e.CANCEL_KEY = "cancel";
    var r = {
        visible: !0,
        text: null,
        value: null,
        className: "",
        closeModal: !0
      },
      i = Object.assign({}, r, {
        visible: !1,
        text: "Cancel",
        value: null
      }),
      a = Object.assign({}, r, {
        text: "OK",
        value: !0
      });
    e.defaultButtonList = {
      cancel: i,
      confirm: a
    };
    var s = function s(t) {
        switch (t) {
          case e.CONFIRM_KEY:
            return a;
          case e.CANCEL_KEY:
            return i;
          default:
            var n = t.charAt(0).toUpperCase() + t.slice(1);
            return Object.assign({}, r, {
              text: n,
              value: t
            });
        }
      },
      c = function c(t, e) {
        var n = s(t);
        return !0 === e ? Object.assign({}, n, {
          visible: !0
        }) : "string" == typeof e ? Object.assign({}, n, {
          visible: !0,
          text: e
        }) : o.isPlainObject(e) ? Object.assign({
          visible: !0
        }, n, e) : Object.assign({}, n, {
          visible: !1
        });
      },
      l = function l(t) {
        for (var e = {}, n = 0, o = Object.keys(t); n < o.length; n++) {
          var r = o[n],
            a = t[r],
            s = c(r, a);
          e[r] = s;
        }
        return e.cancel || (e.cancel = i), e;
      },
      u = function u(t) {
        var n = {};
        switch (t.length) {
          case 1:
            n[e.CANCEL_KEY] = Object.assign({}, i, {
              visible: !1
            });
            break;
          case 2:
            n[e.CANCEL_KEY] = c(e.CANCEL_KEY, t[0]), n[e.CONFIRM_KEY] = c(e.CONFIRM_KEY, t[1]);
            break;
          default:
            o.throwErr("Invalid number of 'buttons' in array (" + t.length + ").\n      If you want more than 2 buttons, you need to use an object!");
        }
        return n;
      };
    e.getButtonListOpts = function (t) {
      var n = e.defaultButtonList;
      return "string" == typeof t ? n[e.CONFIRM_KEY] = c(e.CONFIRM_KEY, t) : Array.isArray(t) ? n = u(t) : o.isPlainObject(t) ? n = l(t) : !0 === t ? n = u([!0, !0]) : !1 === t ? n = u([!1, !1]) : void 0 === t && (n = e.defaultButtonList), n;
    };
  }, function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var o = n(1),
      r = n(2),
      i = n(0),
      a = i["default"].MODAL,
      s = i["default"].OVERLAY,
      c = n(30),
      l = n(31),
      u = n(32),
      f = n(33);
    e.injectElIntoModal = function (t) {
      var e = o.getNode(a),
        n = o.stringToNode(t);
      return e.appendChild(n), n;
    };
    var d = function d(t) {
        t.className = a, t.textContent = "";
      },
      p = function p(t, e) {
        d(t);
        var n = e.className;
        n && t.classList.add(n);
      };
    e.initModalContent = function (t) {
      var e = o.getNode(a);
      p(e, t), c["default"](t.icon), l.initTitle(t.title), l.initText(t.text), f["default"](t.content), u["default"](t.buttons, t.dangerMode);
    };
    var m = function m() {
      var t = o.getNode(s),
        e = o.stringToNode(r.modalMarkup);
      t.appendChild(e);
    };
    e["default"] = m;
  }, function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var o = n(3),
      r = {
        isOpen: !1,
        promise: null,
        actions: {},
        timer: null
      },
      i = Object.assign({}, r);
    e.resetState = function () {
      i = Object.assign({}, r);
    }, e.setActionValue = function (t) {
      if ("string" == typeof t) return a(o.CONFIRM_KEY, t);
      for (var e in t) a(e, t[e]);
    };
    var a = function a(t, e) {
      i.actions[t] || (i.actions[t] = {}), Object.assign(i.actions[t], {
        value: e
      });
    };
    e.setActionOptionsFor = function (t, e) {
      var n = (void 0 === e ? {} : e).closeModal,
        o = void 0 === n || n;
      Object.assign(i.actions[t], {
        closeModal: o
      });
    }, e["default"] = i;
  }, function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var o = n(1),
      r = n(3),
      i = n(0),
      a = i["default"].OVERLAY,
      s = i["default"].SHOW_MODAL,
      c = i["default"].BUTTON,
      l = i["default"].BUTTON_LOADING,
      u = n(5);
    e.openModal = function () {
      o.getNode(a).classList.add(s), u["default"].isOpen = !0;
    };
    var f = function f() {
      o.getNode(a).classList.remove(s), u["default"].isOpen = !1;
    };
    e.onAction = function (t) {
      void 0 === t && (t = r.CANCEL_KEY);
      var e = u["default"].actions[t],
        n = e.value;
      if (!1 === e.closeModal) {
        var i = c + "--" + t;
        o.getNode(i).classList.add(l);
      } else f();
      u["default"].promise.resolve(n);
    }, e.getState = function () {
      var t = Object.assign({}, u["default"]);
      return delete t.promise, delete t.timer, t;
    }, e.stopLoading = function () {
      for (var t = document.querySelectorAll("." + c), e = 0; e < t.length; e++) {
        t[e].classList.remove(l);
      }
    };
  }, function (t, e) {
    var n;
    n = function () {
      return this;
    }();
    try {
      n = n || Function("return this")() || (0, eval)("this");
    } catch (t) {
      "object" == typeof window && (n = window);
    }
    t.exports = n;
  }, function (t, e, n) {
    (function (e) {
      t.exports = e.sweetAlert = n(9);
    }).call(e, n(7));
  }, function (t, e, n) {
    (function (e) {
      t.exports = e.swal = n(10);
    }).call(e, n(7));
  }, function (t, e, n) {
    "undefined" != typeof window && n(11), n(16);
    var o = n(23)["default"];
    t.exports = o;
  }, function (t, e, n) {
    var o = n(12);
    "string" == typeof o && (o = [[t.i, o, ""]]);
    var r = {
      insertAt: "top"
    };
    r.transform = void 0;
    n(14)(o, r);
    o.locals && (t.exports = o.locals);
  }, function (t, e, n) {
    e = t.exports = n(13)(void 0), e.push([t.i, '.swal-icon--error{border-color:#f27474;-webkit-animation:animateErrorIcon .5s;animation:animateErrorIcon .5s}.swal-icon--error__x-mark{position:relative;display:block;-webkit-animation:animateXMark .5s;animation:animateXMark .5s}.swal-icon--error__line{position:absolute;height:5px;width:47px;background-color:#f27474;display:block;top:37px;border-radius:2px}.swal-icon--error__line--left{-webkit-transform:rotate(45deg);transform:rotate(45deg);left:17px}.swal-icon--error__line--right{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);right:16px}@-webkit-keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@-webkit-keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}@keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}.swal-icon--warning{border-color:#f8bb86;-webkit-animation:pulseWarning .75s infinite alternate;animation:pulseWarning .75s infinite alternate}.swal-icon--warning__body{width:5px;height:47px;top:10px;border-radius:2px;margin-left:-2px}.swal-icon--warning__body,.swal-icon--warning__dot{position:absolute;left:50%;background-color:#f8bb86}.swal-icon--warning__dot{width:7px;height:7px;border-radius:50%;margin-left:-4px;bottom:-11px}@-webkit-keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}@keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}.swal-icon--success{border-color:#a5dc86}.swal-icon--success:after,.swal-icon--success:before{content:"";border-radius:50%;position:absolute;width:60px;height:120px;background:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal-icon--success:before{border-radius:120px 0 0 120px;top:-7px;left:-33px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:60px 60px;transform-origin:60px 60px}.swal-icon--success:after{border-radius:0 120px 120px 0;top:-11px;left:30px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 60px;transform-origin:0 60px;-webkit-animation:rotatePlaceholder 4.25s ease-in;animation:rotatePlaceholder 4.25s ease-in}.swal-icon--success__ring{width:80px;height:80px;border:4px solid hsla(98,55%,69%,.2);border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.swal-icon--success__hide-corners{width:5px;height:90px;background-color:#fff;padding:1px;position:absolute;left:28px;top:8px;z-index:1;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal-icon--success__line{height:5px;background-color:#a5dc86;display:block;border-radius:2px;position:absolute;z-index:2}.swal-icon--success__line--tip{width:25px;left:14px;top:46px;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation:animateSuccessTip .75s;animation:animateSuccessTip .75s}.swal-icon--success__line--long{width:47px;right:8px;top:38px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-animation:animateSuccessLong .75s;animation:animateSuccessLong .75s}@-webkit-keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@-webkit-keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}@keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}.swal-icon--info{border-color:#c9dae1}.swal-icon--info:before{width:5px;height:29px;bottom:17px;border-radius:2px;margin-left:-2px}.swal-icon--info:after,.swal-icon--info:before{content:"";position:absolute;left:50%;background-color:#c9dae1}.swal-icon--info:after{width:7px;height:7px;border-radius:50%;margin-left:-3px;top:19px}.swal-icon{width:80px;height:80px;border-width:4px;border-style:solid;border-radius:50%;padding:0;position:relative;box-sizing:content-box;margin:20px auto}.swal-icon:first-child{margin-top:32px}.swal-icon--custom{width:auto;height:auto;max-width:100%;border:none;border-radius:0}.swal-icon img{max-width:100%;max-height:100%}.swal-title{color:rgba(0,0,0,.65);font-weight:600;text-transform:none;position:relative;display:block;padding:13px 16px;font-size:27px;line-height:normal;text-align:center;margin-bottom:0}.swal-title:first-child{margin-top:26px}.swal-title:not(:first-child){padding-bottom:0}.swal-title:not(:last-child){margin-bottom:13px}.swal-text{font-size:16px;position:relative;float:none;line-height:normal;vertical-align:top;text-align:left;display:inline-block;margin:0;padding:0 10px;font-weight:400;color:rgba(0,0,0,.64);max-width:calc(100% - 20px);overflow-wrap:break-word;box-sizing:border-box}.swal-text:first-child{margin-top:45px}.swal-text:last-child{margin-bottom:45px}.swal-footer{text-align:right;padding-top:13px;margin-top:13px;padding:13px 16px;border-radius:inherit;border-top-left-radius:0;border-top-right-radius:0}.swal-button-container{margin:5px;display:inline-block;position:relative}.swal-button{background-color:#7cd1f9;color:#fff;border:none;box-shadow:none;border-radius:5px;font-weight:600;font-size:14px;padding:10px 24px;margin:0;cursor:pointer}.swal-button:not([disabled]):hover{background-color:#78cbf2}.swal-button:active{background-color:#70bce0}.swal-button:focus{outline:none;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(43,114,165,.29)}.swal-button[disabled]{opacity:.5;cursor:default}.swal-button::-moz-focus-inner{border:0}.swal-button--cancel{color:#555;background-color:#efefef}.swal-button--cancel:not([disabled]):hover{background-color:#e8e8e8}.swal-button--cancel:active{background-color:#d7d7d7}.swal-button--cancel:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(116,136,150,.29)}.swal-button--danger{background-color:#e64942}.swal-button--danger:not([disabled]):hover{background-color:#df4740}.swal-button--danger:active{background-color:#cf423b}.swal-button--danger:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(165,43,43,.29)}.swal-content{padding:0 20px;margin-top:20px;font-size:medium}.swal-content:last-child{margin-bottom:20px}.swal-content__input,.swal-content__textarea{-webkit-appearance:none;background-color:#fff;border:none;font-size:14px;display:block;box-sizing:border-box;width:100%;border:1px solid rgba(0,0,0,.14);padding:10px 13px;border-radius:2px;transition:border-color .2s}.swal-content__input:focus,.swal-content__textarea:focus{outline:none;border-color:#6db8ff}.swal-content__textarea{resize:vertical}.swal-button--loading{color:transparent}.swal-button--loading~.swal-button__loader{opacity:1}.swal-button__loader{position:absolute;height:auto;width:43px;z-index:2;left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);text-align:center;pointer-events:none;opacity:0}.swal-button__loader div{display:inline-block;float:none;vertical-align:baseline;width:9px;height:9px;padding:0;border:none;margin:2px;opacity:.4;border-radius:7px;background-color:hsla(0,0%,100%,.9);transition:background .2s;-webkit-animation:swal-loading-anim 1s infinite;animation:swal-loading-anim 1s infinite}.swal-button__loader div:nth-child(3n+2){-webkit-animation-delay:.15s;animation-delay:.15s}.swal-button__loader div:nth-child(3n+3){-webkit-animation-delay:.3s;animation-delay:.3s}@-webkit-keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}@keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}.swal-overlay{position:fixed;top:0;bottom:0;left:0;right:0;text-align:center;font-size:0;overflow-y:auto;background-color:rgba(0,0,0,.4);z-index:10000;pointer-events:none;opacity:0;transition:opacity .3s}.swal-overlay:before{content:" ";display:inline-block;vertical-align:middle;height:100%}.swal-overlay--show-modal{opacity:1;pointer-events:auto}.swal-overlay--show-modal .swal-modal{opacity:1;pointer-events:auto;box-sizing:border-box;-webkit-animation:showSweetAlert .3s;animation:showSweetAlert .3s;will-change:transform}.swal-modal{width:478px;opacity:0;pointer-events:none;background-color:#fff;text-align:center;border-radius:5px;position:static;margin:20px auto;display:inline-block;vertical-align:middle;-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;z-index:10001;transition:opacity .2s,-webkit-transform .3s;transition:transform .3s,opacity .2s;transition:transform .3s,opacity .2s,-webkit-transform .3s}@media (max-width:500px){.swal-modal{width:calc(100% - 20px)}}@-webkit-keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}', ""]);
  }, function (t, e) {
    function n(t, e) {
      var n = t[1] || "",
        r = t[3];
      if (!r) return n;
      if (e && "function" == typeof btoa) {
        var i = o(r);
        return [n].concat(r.sources.map(function (t) {
          return "/*# sourceURL=" + r.sourceRoot + t + " */";
        })).concat([i]).join("\n");
      }
      return [n].join("\n");
    }
    function o(t) {
      return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(t)))) + " */";
    }
    t.exports = function (t) {
      var e = [];
      return e.toString = function () {
        return this.map(function (e) {
          var o = n(e, t);
          return e[2] ? "@media " + e[2] + "{" + o + "}" : o;
        }).join("");
      }, e.i = function (t, n) {
        "string" == typeof t && (t = [[null, t, ""]]);
        for (var o = {}, r = 0; r < this.length; r++) {
          var i = this[r][0];
          "number" == typeof i && (o[i] = !0);
        }
        for (r = 0; r < t.length; r++) {
          var a = t[r];
          "number" == typeof a[0] && o[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e.push(a));
        }
      }, e;
    };
  }, function (t, e, n) {
    function o(t, e) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n],
          r = m[o.id];
        if (r) {
          r.refs++;
          for (var i = 0; i < r.parts.length; i++) r.parts[i](o.parts[i]);
          for (; i < o.parts.length; i++) r.parts.push(u(o.parts[i], e));
        } else {
          for (var a = [], i = 0; i < o.parts.length; i++) a.push(u(o.parts[i], e));
          m[o.id] = {
            id: o.id,
            refs: 1,
            parts: a
          };
        }
      }
    }
    function r(t, e) {
      for (var n = [], o = {}, r = 0; r < t.length; r++) {
        var i = t[r],
          a = e.base ? i[0] + e.base : i[0],
          s = i[1],
          c = i[2],
          l = i[3],
          u = {
            css: s,
            media: c,
            sourceMap: l
          };
        o[a] ? o[a].parts.push(u) : n.push(o[a] = {
          id: a,
          parts: [u]
        });
      }
      return n;
    }
    function i(t, e) {
      var n = v(t.insertInto);
      if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
      var o = w[w.length - 1];
      if ("top" === t.insertAt) o ? o.nextSibling ? n.insertBefore(e, o.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), w.push(e);else {
        if ("bottom" !== t.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
        n.appendChild(e);
      }
    }
    function a(t) {
      if (null === t.parentNode) return !1;
      t.parentNode.removeChild(t);
      var e = w.indexOf(t);
      e >= 0 && w.splice(e, 1);
    }
    function s(t) {
      var e = document.createElement("style");
      return t.attrs.type = "text/css", l(e, t.attrs), i(t, e), e;
    }
    function c(t) {
      var e = document.createElement("link");
      return t.attrs.type = "text/css", t.attrs.rel = "stylesheet", l(e, t.attrs), i(t, e), e;
    }
    function l(t, e) {
      Object.keys(e).forEach(function (n) {
        t.setAttribute(n, e[n]);
      });
    }
    function u(t, e) {
      var n, o, r, i;
      if (e.transform && t.css) {
        if (!(i = e.transform(t.css))) return function () {};
        t.css = i;
      }
      if (e.singleton) {
        var l = h++;
        n = g || (g = s(e)), o = f.bind(null, n, l, !1), r = f.bind(null, n, l, !0);
      } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = c(e), o = p.bind(null, n, e), r = function r() {
        a(n), n.href && URL.revokeObjectURL(n.href);
      }) : (n = s(e), o = d.bind(null, n), r = function r() {
        a(n);
      });
      return o(t), function (e) {
        if (e) {
          if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
          o(t = e);
        } else r();
      };
    }
    function f(t, e, n, o) {
      var r = n ? "" : o.css;
      if (t.styleSheet) t.styleSheet.cssText = x(e, r);else {
        var i = document.createTextNode(r),
          a = t.childNodes;
        a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(i, a[e]) : t.appendChild(i);
      }
    }
    function d(t, e) {
      var n = e.css,
        o = e.media;
      if (o && t.setAttribute("media", o), t.styleSheet) t.styleSheet.cssText = n;else {
        for (; t.firstChild;) t.removeChild(t.firstChild);
        t.appendChild(document.createTextNode(n));
      }
    }
    function p(t, e, n) {
      var o = n.css,
        r = n.sourceMap,
        i = void 0 === e.convertToAbsoluteUrls && r;
      (e.convertToAbsoluteUrls || i) && (o = y(o)), r && (o += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
      var a = new Blob([o], {
          type: "text/css"
        }),
        s = t.href;
      t.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s);
    }
    var m = {},
      b = function (t) {
        var e;
        return function () {
          return void 0 === e && (e = t.apply(this, arguments)), e;
        };
      }(function () {
        return window && document && document.all && !window.atob;
      }),
      v = function (t) {
        var e = {};
        return function (n) {
          return void 0 === e[n] && (e[n] = t.call(this, n)), e[n];
        };
      }(function (t) {
        return document.querySelector(t);
      }),
      g = null,
      h = 0,
      w = [],
      y = n(15);
    t.exports = function (t, e) {
      if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
      e = e || {}, e.attrs = "object" == typeof e.attrs ? e.attrs : {}, e.singleton || (e.singleton = b()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
      var n = r(t, e);
      return o(n, e), function (t) {
        for (var i = [], a = 0; a < n.length; a++) {
          var s = n[a],
            c = m[s.id];
          c.refs--, i.push(c);
        }
        if (t) {
          o(r(t, e), e);
        }
        for (var a = 0; a < i.length; a++) {
          var c = i[a];
          if (0 === c.refs) {
            for (var l = 0; l < c.parts.length; l++) c.parts[l]();
            delete m[c.id];
          }
        }
      };
    };
    var x = function () {
      var t = [];
      return function (e, n) {
        return t[e] = n, t.filter(Boolean).join("\n");
      };
    }();
  }, function (t, e) {
    t.exports = function (t) {
      var e = "undefined" != typeof window && window.location;
      if (!e) throw new Error("fixUrls requires window.location");
      if (!t || "string" != typeof t) return t;
      var n = e.protocol + "//" + e.host,
        o = n + e.pathname.replace(/\/[^\/]*$/, "/");
      return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (t, e) {
        var r = e.trim().replace(/^"(.*)"$/, function (t, e) {
          return e;
        }).replace(/^'(.*)'$/, function (t, e) {
          return e;
        });
        if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r)) return t;
        var i;
        return i = 0 === r.indexOf("//") ? r : 0 === r.indexOf("/") ? n + r : o + r.replace(/^\.\//, ""), "url(" + JSON.stringify(i) + ")";
      });
    };
  }, function (t, e, n) {
    var o = n(17);
    "undefined" == typeof window || window.Promise || (window.Promise = o), n(21), String.prototype.includes || (String.prototype.includes = function (t, e) {
      "use strict";

      return "number" != typeof e && (e = 0), !(e + t.length > this.length) && -1 !== this.indexOf(t, e);
    }), Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
      value: function value(t, e) {
        if (null == this) throw new TypeError('"this" is null or not defined');
        var n = Object(this),
          o = n.length >>> 0;
        if (0 === o) return !1;
        for (var r = 0 | e, i = Math.max(r >= 0 ? r : o - Math.abs(r), 0); i < o;) {
          if (function (t, e) {
            return t === e || "number" == typeof t && "number" == typeof e && isNaN(t) && isNaN(e);
          }(n[i], t)) return !0;
          i++;
        }
        return !1;
      }
    }), "undefined" != typeof window && function (t) {
      t.forEach(function (t) {
        t.hasOwnProperty("remove") || Object.defineProperty(t, "remove", {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          value: function value() {
            this.parentNode.removeChild(this);
          }
        });
      });
    }([Element.prototype, CharacterData.prototype, DocumentType.prototype]);
  }, function (t, e, n) {
    (function (e) {
      !function (n) {
        function o() {}
        function r(t, e) {
          return function () {
            t.apply(e, arguments);
          };
        }
        function i(t) {
          if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
          if ("function" != typeof t) throw new TypeError("not a function");
          this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], f(t, this);
        }
        function a(t, e) {
          for (; 3 === t._state;) t = t._value;
          if (0 === t._state) return void t._deferreds.push(e);
          t._handled = !0, i._immediateFn(function () {
            var n = 1 === t._state ? e.onFulfilled : e.onRejected;
            if (null === n) return void (1 === t._state ? s : c)(e.promise, t._value);
            var o;
            try {
              o = n(t._value);
            } catch (t) {
              return void c(e.promise, t);
            }
            s(e.promise, o);
          });
        }
        function s(t, e) {
          try {
            if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
            if (e && ("object" == typeof e || "function" == typeof e)) {
              var n = e.then;
              if (e instanceof i) return t._state = 3, t._value = e, void l(t);
              if ("function" == typeof n) return void f(r(n, e), t);
            }
            t._state = 1, t._value = e, l(t);
          } catch (e) {
            c(t, e);
          }
        }
        function c(t, e) {
          t._state = 2, t._value = e, l(t);
        }
        function l(t) {
          2 === t._state && 0 === t._deferreds.length && i._immediateFn(function () {
            t._handled || i._unhandledRejectionFn(t._value);
          });
          for (var e = 0, n = t._deferreds.length; e < n; e++) a(t, t._deferreds[e]);
          t._deferreds = null;
        }
        function u(t, e, n) {
          this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.promise = n;
        }
        function f(t, e) {
          var n = !1;
          try {
            t(function (t) {
              n || (n = !0, s(e, t));
            }, function (t) {
              n || (n = !0, c(e, t));
            });
          } catch (t) {
            if (n) return;
            n = !0, c(e, t);
          }
        }
        var d = setTimeout;
        i.prototype["catch"] = function (t) {
          return this.then(null, t);
        }, i.prototype.then = function (t, e) {
          var n = new this.constructor(o);
          return a(this, new u(t, e, n)), n;
        }, i.all = function (t) {
          var e = Array.prototype.slice.call(t);
          return new i(function (t, n) {
            function o(i, a) {
              try {
                if (a && ("object" == typeof a || "function" == typeof a)) {
                  var s = a.then;
                  if ("function" == typeof s) return void s.call(a, function (t) {
                    o(i, t);
                  }, n);
                }
                e[i] = a, 0 == --r && t(e);
              } catch (t) {
                n(t);
              }
            }
            if (0 === e.length) return t([]);
            for (var r = e.length, i = 0; i < e.length; i++) o(i, e[i]);
          });
        }, i.resolve = function (t) {
          return t && "object" == typeof t && t.constructor === i ? t : new i(function (e) {
            e(t);
          });
        }, i.reject = function (t) {
          return new i(function (e, n) {
            n(t);
          });
        }, i.race = function (t) {
          return new i(function (e, n) {
            for (var o = 0, r = t.length; o < r; o++) t[o].then(e, n);
          });
        }, i._immediateFn = "function" == typeof e && function (t) {
          e(t);
        } || function (t) {
          d(t, 0);
        }, i._unhandledRejectionFn = function (t) {
          "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t);
        }, i._setImmediateFn = function (t) {
          i._immediateFn = t;
        }, i._setUnhandledRejectionFn = function (t) {
          i._unhandledRejectionFn = t;
        }, void 0 !== t && t.exports ? t.exports = i : n.Promise || (n.Promise = i);
      }(this);
    }).call(e, n(18).setImmediate);
  }, function (t, e, n) {
    function o(t, e) {
      this._id = t, this._clearFn = e;
    }
    var r = Function.prototype.apply;
    e.setTimeout = function () {
      return new o(r.call(setTimeout, window, arguments), clearTimeout);
    }, e.setInterval = function () {
      return new o(r.call(setInterval, window, arguments), clearInterval);
    }, e.clearTimeout = e.clearInterval = function (t) {
      t && t.close();
    }, o.prototype.unref = o.prototype.ref = function () {}, o.prototype.close = function () {
      this._clearFn.call(window, this._id);
    }, e.enroll = function (t, e) {
      clearTimeout(t._idleTimeoutId), t._idleTimeout = e;
    }, e.unenroll = function (t) {
      clearTimeout(t._idleTimeoutId), t._idleTimeout = -1;
    }, e._unrefActive = e.active = function (t) {
      clearTimeout(t._idleTimeoutId);
      var e = t._idleTimeout;
      e >= 0 && (t._idleTimeoutId = setTimeout(function () {
        t._onTimeout && t._onTimeout();
      }, e));
    }, n(19), e.setImmediate = setImmediate, e.clearImmediate = clearImmediate;
  }, function (t, e, n) {
    (function (t, e) {
      !function (t, n) {
        "use strict";

        function o(t) {
          "function" != typeof t && (t = new Function("" + t));
          for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++) e[n] = arguments[n + 1];
          var o = {
            callback: t,
            args: e
          };
          return l[c] = o, s(c), c++;
        }
        function r(t) {
          delete l[t];
        }
        function i(t) {
          var e = t.callback,
            o = t.args;
          switch (o.length) {
            case 0:
              e();
              break;
            case 1:
              e(o[0]);
              break;
            case 2:
              e(o[0], o[1]);
              break;
            case 3:
              e(o[0], o[1], o[2]);
              break;
            default:
              e.apply(n, o);
          }
        }
        function a(t) {
          if (u) setTimeout(a, 0, t);else {
            var e = l[t];
            if (e) {
              u = !0;
              try {
                i(e);
              } finally {
                r(t), u = !1;
              }
            }
          }
        }
        if (!t.setImmediate) {
          var s,
            c = 1,
            l = {},
            u = !1,
            f = t.document,
            d = Object.getPrototypeOf && Object.getPrototypeOf(t);
          d = d && d.setTimeout ? d : t, "[object process]" === {}.toString.call(t.process) ? function () {
            s = function s(t) {
              e.nextTick(function () {
                a(t);
              });
            };
          }() : function () {
            if (t.postMessage && !t.importScripts) {
              var e = !0,
                n = t.onmessage;
              return t.onmessage = function () {
                e = !1;
              }, t.postMessage("", "*"), t.onmessage = n, e;
            }
          }() ? function () {
            var e = "setImmediate$" + Math.random() + "$",
              n = function n(_n) {
                _n.source === t && "string" == typeof _n.data && 0 === _n.data.indexOf(e) && a(+_n.data.slice(e.length));
              };
            t.addEventListener ? t.addEventListener("message", n, !1) : t.attachEvent("onmessage", n), s = function s(n) {
              t.postMessage(e + n, "*");
            };
          }() : t.MessageChannel ? function () {
            var t = new MessageChannel();
            t.port1.onmessage = function (t) {
              a(t.data);
            }, s = function s(e) {
              t.port2.postMessage(e);
            };
          }() : f && "onreadystatechange" in f.createElement("script") ? function () {
            var t = f.documentElement;
            s = function s(e) {
              var n = f.createElement("script");
              n.onreadystatechange = function () {
                a(e), n.onreadystatechange = null, t.removeChild(n), n = null;
              }, t.appendChild(n);
            };
          }() : function () {
            s = function s(t) {
              setTimeout(a, 0, t);
            };
          }(), d.setImmediate = o, d.clearImmediate = r;
        }
      }("undefined" == typeof self ? void 0 === t ? this : t : self);
    }).call(e, n(7), n(20));
  }, function (t, e) {
    function n() {
      throw new Error("setTimeout has not been defined");
    }
    function o() {
      throw new Error("clearTimeout has not been defined");
    }
    function r(t) {
      if (u === setTimeout) return setTimeout(t, 0);
      if ((u === n || !u) && setTimeout) return u = setTimeout, setTimeout(t, 0);
      try {
        return u(t, 0);
      } catch (e) {
        try {
          return u.call(null, t, 0);
        } catch (e) {
          return u.call(this, t, 0);
        }
      }
    }
    function i(t) {
      if (f === clearTimeout) return clearTimeout(t);
      if ((f === o || !f) && clearTimeout) return f = clearTimeout, clearTimeout(t);
      try {
        return f(t);
      } catch (e) {
        try {
          return f.call(null, t);
        } catch (e) {
          return f.call(this, t);
        }
      }
    }
    function a() {
      b && p && (b = !1, p.length ? m = p.concat(m) : v = -1, m.length && s());
    }
    function s() {
      if (!b) {
        var t = r(a);
        b = !0;
        for (var e = m.length; e;) {
          for (p = m, m = []; ++v < e;) p && p[v].run();
          v = -1, e = m.length;
        }
        p = null, b = !1, i(t);
      }
    }
    function c(t, e) {
      this.fun = t, this.array = e;
    }
    function l() {}
    var u,
      f,
      d = t.exports = {};
    !function () {
      try {
        u = "function" == typeof setTimeout ? setTimeout : n;
      } catch (t) {
        u = n;
      }
      try {
        f = "function" == typeof clearTimeout ? clearTimeout : o;
      } catch (t) {
        f = o;
      }
    }();
    var p,
      m = [],
      b = !1,
      v = -1;
    d.nextTick = function (t) {
      var e = new Array(arguments.length - 1);
      if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
      m.push(new c(t, e)), 1 !== m.length || b || r(s);
    }, c.prototype.run = function () {
      this.fun.apply(null, this.array);
    }, d.title = "browser", d.browser = !0, d.env = {}, d.argv = [], d.version = "", d.versions = {}, d.on = l, d.addListener = l, d.once = l, d.off = l, d.removeListener = l, d.removeAllListeners = l, d.emit = l, d.prependListener = l, d.prependOnceListener = l, d.listeners = function (t) {
      return [];
    }, d.binding = function (t) {
      throw new Error("process.binding is not supported");
    }, d.cwd = function () {
      return "/";
    }, d.chdir = function (t) {
      throw new Error("process.chdir is not supported");
    }, d.umask = function () {
      return 0;
    };
  }, function (t, e, n) {
    "use strict";

    n(22).polyfill();
  }, function (t, e, n) {
    "use strict";

    function o(t, e) {
      if (void 0 === t || null === t) throw new TypeError("Cannot convert first argument to object");
      for (var n = Object(t), o = 1; o < arguments.length; o++) {
        var r = arguments[o];
        if (void 0 !== r && null !== r) for (var i = Object.keys(Object(r)), a = 0, s = i.length; a < s; a++) {
          var c = i[a],
            l = Object.getOwnPropertyDescriptor(r, c);
          void 0 !== l && l.enumerable && (n[c] = r[c]);
        }
      }
      return n;
    }
    function r() {
      Object.assign || Object.defineProperty(Object, "assign", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: o
      });
    }
    t.exports = {
      assign: o,
      polyfill: r
    };
  }, function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var o = n(24),
      r = n(6),
      i = n(5),
      a = n(36),
      s = function s() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        if ("undefined" != typeof window) {
          var n = a.getOpts.apply(void 0, t);
          return new Promise(function (t, e) {
            i["default"].promise = {
              resolve: t,
              reject: e
            }, o["default"](n), setTimeout(function () {
              r.openModal();
            });
          });
        }
      };
    s.close = r.onAction, s.getState = r.getState, s.setActionValue = i.setActionValue, s.stopLoading = r.stopLoading, s.setDefaults = a.setDefaults, e["default"] = s;
  }, function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var o = n(1),
      r = n(0),
      i = r["default"].MODAL,
      a = n(4),
      s = n(34),
      c = n(35),
      l = n(1);
    e.init = function (t) {
      o.getNode(i) || (document.body || l.throwErr("You can only use SweetAlert AFTER the DOM has loaded!"), s["default"](), a["default"]()), a.initModalContent(t), c["default"](t);
    }, e["default"] = e.init;
  }, function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var o = n(0),
      r = o["default"].MODAL;
    e.modalMarkup = '\n  <div class="' + r + '" role="dialog" aria-modal="true"></div>', e["default"] = e.modalMarkup;
  }, function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var o = n(0),
      r = o["default"].OVERLAY,
      i = '<div \n    class="' + r + '"\n    tabIndex="-1">\n  </div>';
    e["default"] = i;
  }, function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var o = n(0),
      r = o["default"].ICON;
    e.errorIconMarkup = function () {
      var t = r + "--error",
        e = t + "__line";
      return '\n    <div class="' + t + '__x-mark">\n      <span class="' + e + " " + e + '--left"></span>\n      <span class="' + e + " " + e + '--right"></span>\n    </div>\n  ';
    }, e.warningIconMarkup = function () {
      var t = r + "--warning";
      return '\n    <span class="' + t + '__body">\n      <span class="' + t + '__dot"></span>\n    </span>\n  ';
    }, e.successIconMarkup = function () {
      var t = r + "--success";
      return '\n    <span class="' + t + "__line " + t + '__line--long"></span>\n    <span class="' + t + "__line " + t + '__line--tip"></span>\n\n    <div class="' + t + '__ring"></div>\n    <div class="' + t + '__hide-corners"></div>\n  ';
    };
  }, function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var o = n(0),
      r = o["default"].CONTENT;
    e.contentMarkup = '\n  <div class="' + r + '">\n\n  </div>\n';
  }, function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var o = n(0),
      r = o["default"].BUTTON_CONTAINER,
      i = o["default"].BUTTON,
      a = o["default"].BUTTON_LOADER;
    e.buttonMarkup = '\n  <div class="' + r + '">\n\n    <button\n      class="' + i + '"\n    ></button>\n\n    <div class="' + a + '">\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n\n  </div>\n';
  }, function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var o = n(4),
      r = n(2),
      i = n(0),
      a = i["default"].ICON,
      s = i["default"].ICON_CUSTOM,
      c = ["error", "warning", "success", "info"],
      l = {
        error: r.errorIconMarkup(),
        warning: r.warningIconMarkup(),
        success: r.successIconMarkup()
      },
      u = function u(t, e) {
        var n = a + "--" + t;
        e.classList.add(n);
        var o = l[t];
        o && (e.innerHTML = o);
      },
      f = function f(t, e) {
        e.classList.add(s);
        var n = document.createElement("img");
        n.src = t, e.appendChild(n);
      },
      d = function d(t) {
        if (t) {
          var e = o.injectElIntoModal(r.iconMarkup);
          c.includes(t) ? u(t, e) : f(t, e);
        }
      };
    e["default"] = d;
  }, function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var o = n(2),
      r = n(4),
      i = function i(t) {
        navigator.userAgent.includes("AppleWebKit") && (t.style.display = "none", t.offsetHeight, t.style.display = "");
      };
    e.initTitle = function (t) {
      if (t) {
        var e = r.injectElIntoModal(o.titleMarkup);
        e.textContent = t, i(e);
      }
    }, e.initText = function (t) {
      if (t) {
        var e = document.createDocumentFragment();
        t.split("\n").forEach(function (t, n, o) {
          e.appendChild(document.createTextNode(t)), n < o.length - 1 && e.appendChild(document.createElement("br"));
        });
        var n = r.injectElIntoModal(o.textMarkup);
        n.appendChild(e), i(n);
      }
    };
  }, function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var o = n(1),
      r = n(4),
      i = n(0),
      a = i["default"].BUTTON,
      s = i["default"].DANGER_BUTTON,
      c = n(3),
      l = n(2),
      u = n(6),
      f = n(5),
      d = function d(t, e, n) {
        var r = e.text,
          i = e.value,
          d = e.className,
          p = e.closeModal,
          m = o.stringToNode(l.buttonMarkup),
          b = m.querySelector("." + a),
          v = a + "--" + t;
        if (b.classList.add(v), d) {
          (Array.isArray(d) ? d : d.split(" ")).filter(function (t) {
            return t.length > 0;
          }).forEach(function (t) {
            b.classList.add(t);
          });
        }
        n && t === c.CONFIRM_KEY && b.classList.add(s), b.textContent = r;
        var g = {};
        return g[t] = i, f.setActionValue(g), f.setActionOptionsFor(t, {
          closeModal: p
        }), b.addEventListener("click", function () {
          return u.onAction(t);
        }), m;
      },
      p = function p(t, e) {
        var n = r.injectElIntoModal(l.footerMarkup);
        for (var o in t) {
          var i = t[o],
            a = d(o, i, e);
          i.visible && n.appendChild(a);
        }
        0 === n.children.length && n.remove();
      };
    e["default"] = p;
  }, function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var o = n(3),
      r = n(4),
      i = n(2),
      a = n(5),
      s = n(6),
      c = n(0),
      l = c["default"].CONTENT,
      u = function u(t) {
        t.addEventListener("input", function (t) {
          var e = t.target,
            n = e.value;
          a.setActionValue(n);
        }), t.addEventListener("keyup", function (t) {
          if ("Enter" === t.key) return s.onAction(o.CONFIRM_KEY);
        }), setTimeout(function () {
          t.focus(), a.setActionValue("");
        }, 0);
      },
      f = function f(t, e, n) {
        var o = document.createElement(e),
          r = l + "__" + e;
        o.classList.add(r);
        for (var i in n) {
          var a = n[i];
          o[i] = a;
        }
        "input" === e && u(o), t.appendChild(o);
      },
      d = function d(t) {
        if (t) {
          var e = r.injectElIntoModal(i.contentMarkup),
            n = t.element,
            o = t.attributes;
          "string" == typeof n ? f(e, n, o) : e.appendChild(n);
        }
      };
    e["default"] = d;
  }, function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var o = n(1),
      r = n(2),
      i = function i() {
        var t = o.stringToNode(r.overlayMarkup);
        document.body.appendChild(t);
      };
    e["default"] = i;
  }, function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var o = n(5),
      r = n(6),
      i = n(1),
      a = n(3),
      s = n(0),
      c = s["default"].MODAL,
      l = s["default"].BUTTON,
      u = s["default"].OVERLAY,
      f = function f(t) {
        t.preventDefault(), v();
      },
      d = function d(t) {
        t.preventDefault(), g();
      },
      p = function p(t) {
        if (o["default"].isOpen) switch (t.key) {
          case "Escape":
            return r.onAction(a.CANCEL_KEY);
        }
      },
      m = function m(t) {
        if (o["default"].isOpen) switch (t.key) {
          case "Tab":
            return f(t);
        }
      },
      b = function b(t) {
        if (o["default"].isOpen) return "Tab" === t.key && t.shiftKey ? d(t) : void 0;
      },
      v = function v() {
        var t = i.getNode(l);
        t && (t.tabIndex = 0, t.focus());
      },
      g = function g() {
        var t = i.getNode(c),
          e = t.querySelectorAll("." + l),
          n = e.length - 1,
          o = e[n];
        o && o.focus();
      },
      h = function h(t) {
        t[t.length - 1].addEventListener("keydown", m);
      },
      w = function w(t) {
        t[0].addEventListener("keydown", b);
      },
      y = function y() {
        var t = i.getNode(c),
          e = t.querySelectorAll("." + l);
        e.length && (h(e), w(e));
      },
      x = function x(t) {
        if (i.getNode(u) === t.target) return r.onAction(a.CANCEL_KEY);
      },
      _ = function _(t) {
        var e = i.getNode(u);
        e.removeEventListener("click", x), t && e.addEventListener("click", x);
      },
      k = function k(t) {
        o["default"].timer && clearTimeout(o["default"].timer), t && (o["default"].timer = window.setTimeout(function () {
          return r.onAction(a.CANCEL_KEY);
        }, t));
      },
      O = function O(t) {
        t.closeOnEsc ? document.addEventListener("keyup", p) : document.removeEventListener("keyup", p), t.dangerMode ? v() : g(), y(), _(t.closeOnClickOutside), k(t.timer);
      };
    e["default"] = O;
  }, function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var o = n(1),
      r = n(3),
      i = n(37),
      a = n(38),
      s = {
        title: null,
        text: null,
        icon: null,
        buttons: r.defaultButtonList,
        content: null,
        className: null,
        closeOnClickOutside: !0,
        closeOnEsc: !0,
        dangerMode: !1,
        timer: null
      },
      c = Object.assign({}, s);
    e.setDefaults = function (t) {
      c = Object.assign({}, s, t);
    };
    var l = function l(t) {
        var e = t && t.button,
          n = t && t.buttons;
        return void 0 !== e && void 0 !== n && o.throwErr("Cannot set both 'button' and 'buttons' options!"), void 0 !== e ? {
          confirm: e
        } : n;
      },
      u = function u(t) {
        return o.ordinalSuffixOf(t + 1);
      },
      f = function f(t, e) {
        o.throwErr(u(e) + " argument ('" + t + "') is invalid");
      },
      d = function d(t, e) {
        var n = t + 1,
          r = e[n];
        o.isPlainObject(r) || void 0 === r || o.throwErr("Expected " + u(n) + " argument ('" + r + "') to be a plain object");
      },
      p = function p(t, e) {
        var n = t + 1,
          r = e[n];
        void 0 !== r && o.throwErr("Unexpected " + u(n) + " argument (" + r + ")");
      },
      m = function m(t, e, n, r) {
        var i = typeof e,
          a = "string" === i,
          s = e instanceof Element;
        if (a) {
          if (0 === n) return {
            text: e
          };
          if (1 === n) return {
            text: e,
            title: r[0]
          };
          if (2 === n) return d(n, r), {
            icon: e
          };
          f(e, n);
        } else {
          if (s && 0 === n) return d(n, r), {
            content: e
          };
          if (o.isPlainObject(e)) return p(n, r), e;
          f(e, n);
        }
      };
    e.getOpts = function () {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      var n = {};
      t.forEach(function (e, o) {
        var r = m(0, e, o, t);
        Object.assign(n, r);
      });
      var o = l(n);
      n.buttons = r.getButtonListOpts(o), delete n.button, n.content = i.getContentOpts(n.content);
      var u = Object.assign({}, s, c, n);
      return Object.keys(u).forEach(function (t) {
        a.DEPRECATED_OPTS[t] && a.logDeprecation(t);
      }), u;
    };
  }, function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var o = n(1),
      r = {
        element: "input",
        attributes: {
          placeholder: ""
        }
      };
    e.getContentOpts = function (t) {
      var e = {};
      return o.isPlainObject(t) ? Object.assign(e, t) : t instanceof Element ? {
        element: t
      } : "input" === t ? r : null;
    };
  }, function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.logDeprecation = function (t) {
      var n = e.DEPRECATED_OPTS[t],
        o = n.onlyRename,
        r = n.replacement,
        i = n.subOption,
        a = n.link,
        s = o ? "renamed" : "deprecated",
        c = 'SweetAlert warning: "' + t + '" option has been ' + s + ".";
      if (r) {
        c += " Please use" + (i ? ' "' + i + '" in ' : " ") + '"' + r + '" instead.';
      }
      var l = "https://sweetalert.js.org";
      c += a ? " More details: " + l + a : " More details: " + l + "/guides/#upgrading-from-1x", console.warn(c);
    }, e.DEPRECATED_OPTS = {
      type: {
        replacement: "icon",
        link: "/docs/#icon"
      },
      imageUrl: {
        replacement: "icon",
        link: "/docs/#icon"
      },
      customClass: {
        replacement: "className",
        onlyRename: !0,
        link: "/docs/#classname"
      },
      imageSize: {},
      showCancelButton: {
        replacement: "buttons",
        link: "/docs/#buttons"
      },
      showConfirmButton: {
        replacement: "button",
        link: "/docs/#button"
      },
      confirmButtonText: {
        replacement: "button",
        link: "/docs/#button"
      },
      confirmButtonColor: {},
      cancelButtonText: {
        replacement: "buttons",
        link: "/docs/#buttons"
      },
      closeOnConfirm: {
        replacement: "button",
        subOption: "closeModal",
        link: "/docs/#button"
      },
      closeOnCancel: {
        replacement: "buttons",
        subOption: "closeModal",
        link: "/docs/#buttons"
      },
      showLoaderOnConfirm: {
        replacement: "buttons"
      },
      animation: {},
      inputType: {
        replacement: "content",
        link: "/docs/#content"
      },
      inputValue: {
        replacement: "content",
        link: "/docs/#content"
      },
      inputPlaceholder: {
        replacement: "content",
        link: "/docs/#content"
      },
      html: {
        replacement: "content",
        link: "/docs/#content"
      },
      allowEscapeKey: {
        replacement: "closeOnEsc",
        onlyRename: !0,
        link: "/docs/#closeonesc"
      },
      allowClickOutside: {
        replacement: "closeOnClickOutside",
        onlyRename: !0,
        link: "/docs/#closeonclickoutside"
      }
    };
  }]);
});

/***/ }),

/***/ "./src/admin/AllCategories.js":
/*!************************************!*\
  !*** ./src/admin/AllCategories.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AllCategories: () => (/* binding */ AllCategories)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _forum_components_CsrfToken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../forum/components/CsrfToken */ "./src/forum/components/CsrfToken.js");
/* harmony import */ var _components_editcategory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/editcategory */ "./src/admin/components/editcategory.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);





function AllCategories() {
  var url = app.forum.attribute('apiUrl');
  function deleteModalForm(_x) {
    return _deleteModalForm.apply(this, arguments);
  }
  function _deleteModalForm() {
    _deleteModalForm = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(e) {
      var id;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            id = $(this).attr("id");
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
              title: "Are you sure?",
              text: "Are you sure that you want to delete",
              icon: "warning",
              dangerMode: true,
              buttons: ["Cancel", "Ok"]
            }).then( /*#__PURE__*/function () {
              var _ref2 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(willDelete) {
                var csrfToken;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!willDelete) {
                        _context2.next = 6;
                        break;
                      }
                      sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Deleted!", "Deleted successfully", "success");
                      _context2.next = 4;
                      return (0,_forum_components_CsrfToken__WEBPACK_IMPORTED_MODULE_2__.fetchCsrfToken)();
                    case 4:
                      csrfToken = _context2.sent;
                      fetch(url + "/wiki/category/" + id, {
                        method: 'Delete',
                        headers: {
                          'Content-Type': 'application/json',
                          'X-CSRF-Token': csrfToken
                        }
                      }).then(function (response) {
                        return response.json();
                      }).then(function (data) {
                        AllSubCategories(); // Refresh the data
                      })["catch"](function (error) {
                        console.error('API Error:', error);
                      });
                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }, _callee2);
              }));
              return function (_x2) {
                return _ref2.apply(this, arguments);
              };
            }());
          case 2:
          case "end":
            return _context3.stop();
        }
      }, _callee3, this);
    }));
    return _deleteModalForm.apply(this, arguments);
  }
  $(document).ready( /*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var main_sidtechno_plugin, extensionPage, permission_container, tableContainer, csrfToken;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          main_sidtechno_plugin = $(".sidtechno-customlogin-Page");
          extensionPage = main_sidtechno_plugin.find(".ExtensionPage-permissions");
          permission_container = extensionPage.find(".container");
          tableContainer = permission_container[1];
          $('.sid_permission_point_btn,.sid_view_point_btn').removeClass('active');
          $('.sid_points_rule_btn,.sid_view_point_btn').removeClass('active');
          $(".sid_category_btn").addClass('active');
          if (!tableContainer) {
            _context.next = 12;
            break;
          }
          _context.next = 10;
          return (0,_forum_components_CsrfToken__WEBPACK_IMPORTED_MODULE_2__.fetchCsrfToken)();
        case 10:
          csrfToken = _context.sent;
          fetch(url + "/wiki/category", {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          }).then(function (response) {
            return response.json();
          }).then(function (res) {
            var itemsPerPage = 15;
            var currentPage = 1;
            function displayDataForPage() {
              var _res$data;
              var startIndex = (currentPage - 1) * itemsPerPage;
              var endIndex = startIndex + itemsPerPage;
              var dataToDisplay = ((_res$data = res.data) == null ? void 0 : _res$data.slice(startIndex, endIndex)) || [];
              var rowsHTML = dataToDisplay.map(function (item) {
                return "\n                        <tr>\n                            <td>" + item.name + "</td>\n                        </tr>\n                    ";
              }).join('');
              var tableHTML = "\n                        <table class='sid_subcategory_table'>\n                            <thead>\n                                <tr>\n                                    <th>Category</th>\n\n                                </tr>\n                            </thead>\n                            <tbody>\n                                " + rowsHTML + "\n                            </tbody>\n                        </table>";
              tableContainer.innerHTML = tableHTML;
              $(".subcategory_table_edit_btn").each(function () {
                $(this).on("click", _components_editcategory__WEBPACK_IMPORTED_MODULE_3__.editcategory);
              });
              $(".subcategory_table_delete_btn").each(function () {
                $(this).on("click", deleteModalForm);
              });
              updatePaginationControls();
            }
            function updatePaginationControls() {
              var totalPages = Math.ceil(res.data.length / itemsPerPage);
              var paginationControls = document.createElement('div');
              paginationControls.classList.add('pagination_btn_div');
              paginationControls.innerHTML = "\n                        <button class=\"Button\" id=\"prevPage\">Previous</button>\n                        <button class=\"Button\" id=\"nextPage\">Next</button>\n                    ";
              tableContainer.appendChild(paginationControls);
              document.getElementById('prevPage').addEventListener('click', function () {
                if (currentPage > 1) {
                  currentPage--;
                  displayDataForPage();
                }
              });
              document.getElementById('nextPage').addEventListener('click', function () {
                if (currentPage < totalPages) {
                  currentPage++;
                  displayDataForPage();
                }
              });
            }
            if (res.data && res.data.length > 0) {
              displayDataForPage();
            }
          })["catch"](function (error) {
            console.error('API Error:', error);
          });
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));
}

/***/ }),

/***/ "./src/admin/AllPemissionData.js":
/*!***************************************!*\
  !*** ./src/admin/AllPemissionData.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AllPermission: () => (/* binding */ AllPermission)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _forum_components_CsrfToken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../forum/components/CsrfToken */ "./src/forum/components/CsrfToken.js");
/* harmony import */ var _components_Admin_EditPoint_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Admin_EditPoint_Modal */ "./src/admin/components/Admin_EditPoint_Modal.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);





function AllPermission() {
  var url = app.forum.attribute('apiUrl');
  console.log(window.location);
  function deleteModalForm(_x) {
    return _deleteModalForm.apply(this, arguments);
  }
  function _deleteModalForm() {
    _deleteModalForm = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(e) {
      var id;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            id = $(this).attr("id");
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
              title: "Are you sure?",
              text: "Are you sure that you want to delete",
              icon: "warning",
              dangerMode: true,
              buttons: ["Cancel", "Ok"]
            }).then( /*#__PURE__*/function () {
              var _ref2 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(willDelete) {
                var csrfToken;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!willDelete) {
                        _context2.next = 7;
                        break;
                      }
                      sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Deleted!", "Deleted successfully", "success");
                      console.log(id, "SDsadasd");
                      _context2.next = 5;
                      return (0,_forum_components_CsrfToken__WEBPACK_IMPORTED_MODULE_2__.fetchCsrfToken)();
                    case 5:
                      csrfToken = _context2.sent;
                      // Now you have the CSRF token in the "csrfToken" variable
                      // Make an API request to a hypothetical endpoint
                      fetch(url + "/permission/delete/" + id, {
                        method: 'GET',
                        headers: {
                          'Content-Type': 'application/json',
                          'X-CSRF-Token': csrfToken
                        }
                      }).then(function (response) {
                        return response.json();
                      }).then(function (data) {
                        // Handle the API response here

                        AllPermission();
                        // You can perform actions like showing a success message or redirecting the user.
                      })["catch"](function (error) {
                        // Handle errors
                        console.error('API Error:', error);
                        // You can display an error message to the user.
                      });
                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }, _callee2);
              }));
              return function (_x2) {
                return _ref2.apply(this, arguments);
              };
            }());
          case 2:
          case "end":
            return _context3.stop();
        }
      }, _callee3, this);
    }));
    return _deleteModalForm.apply(this, arguments);
  }
  $(document).ready( /*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var main_sidtechno_plugin, extensionPage, permission_container, tableContainer, csrfToken;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          main_sidtechno_plugin = $(".sidtechno-customlogin-Page");
          extensionPage = main_sidtechno_plugin.find(".ExtensionPage-permissions");
          permission_container = extensionPage.find(".container");
          tableContainer = permission_container[1];
          if (!(main_sidtechno_plugin.length > 0)) {
            _context.next = 11;
            break;
          }
          $('.sid_points_rule_btn,.sid_view_point_btn').removeClass('active');
          $(".sid_permission_point_btn").addClass('active');
          _context.next = 9;
          return (0,_forum_components_CsrfToken__WEBPACK_IMPORTED_MODULE_2__.fetchCsrfToken)();
        case 9:
          csrfToken = _context.sent;
          fetch(url + "/permission/all", {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          }).then(function (response) {
            return response.json();
          }).then(function (res) {
            console.log(res.data);
            // Handle the API response here
            // Define variables for pagination
            var itemsPerPage = 15; // Number of items to display per page
            var currentPage = 1; // Current page

            // Function to display data for the current page
            function displayDataForPage() {
              var _res$data;
              var startIndex = (currentPage - 1) * itemsPerPage;
              var endIndex = startIndex + itemsPerPage;
              var dataToDisplay = ((_res$data = res.data) == null ? void 0 : _res$data.slice(startIndex, endIndex)) || [];
              var rowsHTML = dataToDisplay.map(function (item) {
                return "\n      <tr>\n          <td>" + item.permission.replaceAll("_", " ") + "</td>\n          <td>" + item.reputation_requirement + "</td>\n          <td>\n              <button id=\"" + item.id + "\" class='Button permission_table_edit_btn'>Edit</button>\n          </td>\n      </tr>\n  ";
              }).join('');
              var tableHTML = "\n      <table class='sid_permission_table'>\n          <thead>\n              <tr>\n                  <th>Permissions</th>\n                  <th>Points</th>\n                  <th>Actions</th>\n              </tr>\n          </thead>\n          <tbody>\n              " + rowsHTML + "\n          </tbody>\n      </table>";
              tableContainer.innerHTML = tableHTML;
              console.log(tableContainer);
              // Attach event listeners
              document.querySelectorAll(".permission_table_edit_btn").forEach(function (btn) {
                btn.addEventListener("click", _components_Admin_EditPoint_Modal__WEBPACK_IMPORTED_MODULE_3__.EditModalForm);
              });
              document.querySelectorAll(".permission_table_delete_btn").forEach(function (btn) {
                btn.addEventListener("click", deleteModalForm);
              });

              // Update pagination controls
              updatePaginationControls();
            }

            // Function to update pagination controls
            function updatePaginationControls() {
              var paginationControls = document.createElement('div');
              paginationControls.classList.add('pagination_btn_div');
              var totalPages = Math.ceil(res.data.length / itemsPerPage);
              function setPage(pageNumber) {
                if (pageNumber >= 1 && pageNumber <= totalPages) {
                  currentPage = pageNumber;
                  displayDataForPage();
                }
              }
              paginationControls.innerHTML = "\n    <button class=\"Button\" id=\"prevPage\">Previous</button>\n    <button class=\"Button\" id=\"nextPage\">Next</button>\n  ";
              tableContainer.appendChild(paginationControls);
              var prevPageButton = document.getElementById('prevPage');
              var nextPageButton = document.getElementById('nextPage');
              prevPageButton.addEventListener('click', function () {
                return setPage(currentPage - 1);
              });
              nextPageButton.addEventListener('click', function () {
                return setPage(currentPage + 1);
              });

              // Disable Previous and Next buttons when appropriate
              if (currentPage === 1) {
                prevPageButton.disabled = true;
              } else {
                prevPageButton.disabled = false;
              }
              if (currentPage === totalPages) {
                nextPageButton.disabled = true;
              } else {
                nextPageButton.disabled = false;
              }
            }

            // Check if there is data to display
            if (res.message && res.data.length > 0) {
              // Calculate the total number of pages
              var totalPages = Math.ceil(res.data.length / itemsPerPage);

              // Function to update the page number and re-display data

              // Initial display of data and pagination controls
              displayDataForPage();
            }

            // You can perform actions like showing a success message or redirecting the user.
          })["catch"](function (error) {
            // Handle errors
            console.error('API Error:', error);
            // You can display an error message to the user.
          });
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));
}

/***/ }),

/***/ "./src/admin/AllPointsRule.js":
/*!************************************!*\
  !*** ./src/admin/AllPointsRule.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AllPointsRule: () => (/* binding */ AllPointsRule)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _forum_components_CsrfToken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../forum/components/CsrfToken */ "./src/forum/components/CsrfToken.js");
/* harmony import */ var _components_admin_points_rule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/admin_points_rule */ "./src/admin/components/admin_points_rule.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);





function AllPointsRule() {
  var url = app.forum.attribute('apiUrl');
  function deleteModalForm(_x) {
    return _deleteModalForm.apply(this, arguments);
  }
  function _deleteModalForm() {
    _deleteModalForm = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(e) {
      var id;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            id = $(this).attr("id");
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
              title: "Are you sure?",
              text: "Are you sure that you want to delete",
              icon: "warning",
              dangerMode: true,
              buttons: ["Cancel", "Ok"]
            }).then( /*#__PURE__*/function () {
              var _ref2 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(willDelete) {
                var csrfToken;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!willDelete) {
                        _context2.next = 7;
                        break;
                      }
                      sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Deleted!", "Deleted successfully", "success");
                      console.log(id, "SDsadasd");
                      _context2.next = 5;
                      return (0,_forum_components_CsrfToken__WEBPACK_IMPORTED_MODULE_2__.fetchCsrfToken)();
                    case 5:
                      csrfToken = _context2.sent;
                      // Now you have the CSRF token in the "csrfToken" variable
                      // Make an API request to a hypothetical endpoint
                      fetch(url + "/newflarum/public/permission/delete/" + id, {
                        method: 'GET',
                        headers: {
                          'Content-Type': 'application/json',
                          'X-CSRF-Token': csrfToken
                        }
                      }).then(function (response) {
                        return response.json();
                      }).then(function (data) {
                        // Handle the API response here

                        AllPointsRule();
                        // You can perform actions like showing a success message or redirecting the user.
                      })["catch"](function (error) {
                        // Handle errors
                        console.error('API Error:', error);
                        // You can display an error message to the user.
                      });
                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }, _callee2);
              }));
              return function (_x2) {
                return _ref2.apply(this, arguments);
              };
            }());
          case 2:
          case "end":
            return _context3.stop();
        }
      }, _callee3, this);
    }));
    return _deleteModalForm.apply(this, arguments);
  }
  $(document).ready( /*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var main_sidtechno_plugin, extensionPage, permission_container, tableContainer, csrfToken;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          main_sidtechno_plugin = $(".sidtechno-customlogin-Page");
          extensionPage = main_sidtechno_plugin.find(".ExtensionPage-permissions");
          permission_container = extensionPage.find(".container");
          tableContainer = permission_container[1];
          if (!(main_sidtechno_plugin.length > 0)) {
            _context.next = 11;
            break;
          }
          $('.sid_permission_point_btn,.sid_view_point_btn').removeClass('active');
          $(".sid_points_rule_btn ").addClass('active');
          _context.next = 9;
          return (0,_forum_components_CsrfToken__WEBPACK_IMPORTED_MODULE_2__.fetchCsrfToken)();
        case 9:
          csrfToken = _context.sent;
          fetch(url + "/points_rule", {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'X-CSRF-Token': csrfToken
            }
          }).then(function (response) {
            return response.json();
          }).then(function (res) {
            console.log(res.data);
            // Handle the API response here
            // Define variables for pagination
            var itemsPerPage = 15; // Number of items to display per page
            var currentPage = 1; // Current page

            // Function to display data for the current page
            function displayDataForPage() {
              var _res$data;
              var startIndex = (currentPage - 1) * itemsPerPage;
              var endIndex = startIndex + itemsPerPage;
              var dataToDisplay = ((_res$data = res.data) == null ? void 0 : _res$data.slice(startIndex, endIndex)) || [];
              var rowsHTML = dataToDisplay.map(function (item) {
                return "\n      <tr>\n          <td>" + item.condition.replaceAll("_", " ") + "</td>\n          <td>" + item.score + "</td>\n          <td>" + item.limit + "</td>\n          <td>\n              <button id=\"" + item.id + "\" class='Button permission_table_edit_btn'>Edit</button>\n          </td>\n      </tr>\n  ";
              }).join('');
              var tableHTML = "\n      <table class='sid_permission_table'>\n          <thead>\n              <tr>\n                  <th>Conditions</th>\n                  <th>Points</th>\n                  <th>Limits</th>\n                  <th>Actions</th>\n              </tr>\n          </thead>\n          <tbody>\n              " + rowsHTML + "\n          </tbody>\n      </table>";
              tableContainer.innerHTML = tableHTML;

              // Attach event listeners
              document.querySelectorAll(".permission_table_edit_btn").forEach(function (btn) {
                btn.addEventListener("click", _components_admin_points_rule__WEBPACK_IMPORTED_MODULE_3__.EditModalForm);
              });
              document.querySelectorAll(".permission_table_delete_btn").forEach(function (btn) {
                btn.addEventListener("click", deleteModalForm);
              });

              // Update pagination controls
              updatePaginationControls();
            }

            // Function to update pagination controls
            function updatePaginationControls() {
              var paginationControls = document.createElement('div');
              paginationControls.classList.add('pagination_btn_div');
              var totalPages = Math.ceil(res.data.length / itemsPerPage);
              function setPage(pageNumber) {
                if (pageNumber >= 1 && pageNumber <= totalPages) {
                  currentPage = pageNumber;
                  displayDataForPage();
                }
              }
              paginationControls.innerHTML = "\n    <button class=\"Button\" id=\"prevPage\">Previous</button>\n    <button class=\"Button\" id=\"nextPage\">Next</button>\n  ";
              tableContainer.appendChild(paginationControls);
              var prevPageButton = document.getElementById('prevPage');
              var nextPageButton = document.getElementById('nextPage');
              prevPageButton.addEventListener('click', function () {
                return setPage(currentPage - 1);
              });
              nextPageButton.addEventListener('click', function () {
                return setPage(currentPage + 1);
              });

              // Disable Previous and Next buttons when appropriate
              if (currentPage === 1) {
                prevPageButton.disabled = true;
              } else {
                prevPageButton.disabled = false;
              }
              if (currentPage === totalPages) {
                nextPageButton.disabled = true;
              } else {
                nextPageButton.disabled = false;
              }
            }

            // Check if there is data to display
            if (res.message && res.data.length > 0) {
              // Calculate the total number of pages
              var totalPages = Math.ceil(res.data.length / itemsPerPage);

              // Function to update the page number and re-display data

              // Initial display of data and pagination controls
              displayDataForPage();
            }

            // You can perform actions like showing a success message or redirecting the user.
          })["catch"](function (error) {
            // Handle errors
            console.error('API Error:', error);
            // You can display an error message to the user.
          });
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));
}

/***/ }),

/***/ "./src/admin/components/Admin_EditPoint_Modal.js":
/*!*******************************************************!*\
  !*** ./src/admin/components/Admin_EditPoint_Modal.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditModalForm: () => (/* binding */ EditModalForm)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _forum_components_CsrfToken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../forum/components/CsrfToken */ "./src/forum/components/CsrfToken.js");
/* harmony import */ var _AllPemissionData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../AllPemissionData */ "./src/admin/AllPemissionData.js");




function EditModalForm(_x) {
  return _EditModalForm.apply(this, arguments);
}
function _EditModalForm() {
  _EditModalForm = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(e) {
    var id, url, csrfToken;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          id = $(this).attr("id");
          url = app.forum.attribute('apiUrl');
          _context2.next = 4;
          return (0,_forum_components_CsrfToken__WEBPACK_IMPORTED_MODULE_2__.fetchCsrfToken)();
        case 4:
          csrfToken = _context2.sent;
          // Now you have the CSRF token in the "csrfToken" variable
          // Make an API request to a hypothetical endpoint
          fetch(url + "/permission/edit/" + id, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'X-CSRF-Token': csrfToken
            }
          }).then(function (response) {
            return response.json();
          }).then(function (data) {
            var alldata = data.data;
            console.log(data);

            // console.log(e.target.getAttribute("edit-data"))
            // Create a container div for centering the form and overlay
            var container = document.createElement('div');
            container.style.position = 'fixed';
            container.style.top = '0';
            container.style.left = '0';
            container.style.width = '100%';
            container.style.height = '100%';
            container.style.display = 'flex';
            container.style.justifyContent = 'center';
            container.style.alignItems = 'center';
            container.style.zIndex = 999999;
            container.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Semi-transparent black background
            container.classList.add('admin_add_point_modal');
            // Create a form element
            var form = document.createElement('form');
            form.style.backgroundColor = 'white'; // Form background color
            form.style.padding = '20px';
            form.style.width = '45%';
            // Add padding to the form
            form.classList.add('admin_add_point_modal_form');
            // Create input elements for username, email, and password
            var usernameInput = document.createElement('input');
            usernameInput.defaultValue = alldata == null ? void 0 : alldata.permission;
            usernameInput.setAttribute('type', 'text');
            usernameInput.setAttribute('placeholder', 'condition Score/Deduction');
            usernameInput.style.marginBottom = '10px';
            var number_Input = document.createElement('input');
            number_Input.defaultValue = alldata == null ? void 0 : alldata.reputation_requirement;
            number_Input.setAttribute('type', 'number');
            number_Input.style.marginBottom = '10px';
            var descriptionInput = document.createElement('input');
            descriptionInput.defaultValue = alldata == null ? void 0 : alldata.description;
            descriptionInput.setAttribute('type', 'text');
            descriptionInput.setAttribute('placeholder', 'Description');
            descriptionInput.style.marginBottom = '10px';

            // Add input elements to the form
            // Add form elements to the form
            var usernameLabel = document.createElement('label');
            usernameLabel.innerText = 'Permission Name:';
            var numberLabel = document.createElement('label');
            numberLabel.innerText = 'Number:';
            var descriptionLabel = document.createElement('label');
            descriptionLabel.innerText = 'Description:';

            // Create div elements to wrap each label and input pair
            var usernameDiv = document.createElement('div');
            usernameDiv.appendChild(usernameLabel);
            usernameDiv.appendChild(usernameInput);
            var numberDiv = document.createElement('div');
            numberDiv.appendChild(numberLabel);
            numberDiv.appendChild(number_Input);
            var descriptionDiv = document.createElement('div');
            descriptionDiv.appendChild(descriptionLabel);
            descriptionDiv.appendChild(descriptionInput);

            // Append the divs to the form

            // Create a "Sign Up" button
            var editPointBtn = document.createElement('button');
            editPointBtn.setAttribute('type', 'submit');
            editPointBtn.innerText = 'Add Point';
            editPointBtn.style.marginBottom = '5px';
            editPointBtn.className = ' Button Button--primary points_add_btn'; // Add a class for styling

            // Create an "Already have an account?" line

            // Add form elements to the form
            $(form).append("<div class='securityQuestion_text_admin'>\n    <span>Edit Permissions</span>\n    </div>");
            form.appendChild(usernameDiv);
            form.appendChild(numberDiv);
            form.appendChild(descriptionDiv);
            form.appendChild(editPointBtn);

            // Add the form to the container
            container.appendChild(form);

            // Append the container to the body of the document
            document.body.appendChild(container);

            // Define a cleanup method for removing the styling and container
            function cleanup() {
              // Remove the container from the DOM
              container.remove();
            }

            // Define a submit method for the form
            function submitForm() {
              return _submitForm.apply(this, arguments);
            } // Add a submit event listener to the form
            function _submitForm() {
              _submitForm = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
                var permission, reputation_requirement, description, formData, _csrfToken;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      permission = usernameInput.value;
                      reputation_requirement = number_Input.value;
                      description = descriptionInput.value;
                      if (!(permission.trim() && reputation_requirement.trim())) {
                        _context.next = 12;
                        break;
                      }
                      // Perform actions with the form data (e.g., validation, API request)
                      formData = {
                        permission: permission,
                        reputation_requirement: reputation_requirement,
                        description: description
                      };
                      _context.next = 7;
                      return (0,_forum_components_CsrfToken__WEBPACK_IMPORTED_MODULE_2__.fetchCsrfToken)();
                    case 7:
                      _csrfToken = _context.sent;
                      // Now you have the CSRF token in the "csrfToken" variable
                      // Make an API request to a hypothetical endpoint
                      fetch(url + "/permission/update/" + id, {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json',
                          'X-CSRF-Token': _csrfToken
                        },
                        body: JSON.stringify(formData)
                      }).then(function (response) {
                        return response.json();
                      }).then(function (data) {
                        cleanup();
                        swal("Updated!", "Updated successfully", "success");

                        // Handle the API response here

                        (0,_AllPemissionData__WEBPACK_IMPORTED_MODULE_3__.AllPermission)();
                        // You can perform actions like showing a success message or redirecting the user.
                      })["catch"](function (error) {
                        // Handle errors
                        console.error('API Error:', error);
                        // You can display an error message to the user.
                      });
                      // Prevent the default form submission behavior
                      return _context.abrupt("return", false);
                    case 12:
                      swal("Warning!", "Permission name and Points are required", "warning");
                    case 13:
                    case "end":
                      return _context.stop();
                  }
                }, _callee);
              }));
              return _submitForm.apply(this, arguments);
            }
            form.addEventListener('submit', function (event) {
              event.preventDefault(); // Prevent the default form submission
              submitForm(); // Call the custom submitForm method
              // Remove the form after submission
            });

            // Add a click event listener to the container to close the form (modal)
            container.addEventListener('click', function (event) {
              if (event.target === container) {
                cleanup(); // Close the form when clicking outside
              }
            });

            // Return the form element and submitForm method
            return {
              form: form,
              submitForm: submitForm
            };
          })["catch"](function (error) {
            // Handle errors
            console.error('API Error:', error);
            // You can display an error message to the user.
          });
        case 6:
        case "end":
          return _context2.stop();
      }
    }, _callee2, this);
  }));
  return _EditModalForm.apply(this, arguments);
}

/***/ }),

/***/ "./src/admin/components/Admin_addpoint_modal.js":
/*!******************************************************!*\
  !*** ./src/admin/components/Admin_addpoint_modal.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomModalForm: () => (/* binding */ CustomModalForm)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _forum_components_CsrfToken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../forum/components/CsrfToken */ "./src/forum/components/CsrfToken.js");
/* harmony import */ var _AllPemissionData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../AllPemissionData */ "./src/admin/AllPemissionData.js");




function CustomModalForm() {
  // Create a container div for centering the form and overlay
  var url = app.forum.attribute('apiUrl');
  var container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.top = '0';
  container.style.left = '0';
  container.style.width = '100%';
  container.style.height = '100%';
  container.style.display = 'flex';
  container.style.justifyContent = 'center';
  container.style.alignItems = 'center';
  container.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Semi-transparent black background
  container.classList.add('admin_add_point_modal');
  // Create a form element
  var form = document.createElement('form');
  form.style.textAlign = 'center';
  form.style.backgroundColor = 'white'; // Form background color
  form.style.padding = '20px'; // Add padding to the form
  form.classList.add('admin_add_point_modal_form');
  // Create input elements for username, email, and password
  var usernameInput = document.createElement('input');
  usernameInput.setAttribute('type', 'text');
  usernameInput.setAttribute('placeholder', 'condition Score/Deduction');
  usernameInput.style.marginBottom = '10px';
  var number_Input = document.createElement('input');
  number_Input.setAttribute('type', 'number');
  number_Input.style.marginBottom = '10px';
  var descriptionInput = document.createElement('input');
  descriptionInput.setAttribute('type', 'text');
  descriptionInput.setAttribute('placeholder', 'Description');
  descriptionInput.style.marginBottom = '10px';

  // Add input elements to the form
  form.appendChild(usernameInput);
  form.appendChild(number_Input);
  form.appendChild(descriptionInput);

  // Create a "Sign Up" button
  var signUpButton = document.createElement('button');
  signUpButton.setAttribute('type', 'submit');
  signUpButton.innerText = 'Add Point';
  signUpButton.style.marginBottom = '5px';
  signUpButton.className = ' Button Button--primary points_add_btn'; // Add a class for styling

  // Add form elements to the form
  var usernameLabel = document.createElement('label');
  usernameLabel.innerText = 'Permission Name:';
  var numberLabel = document.createElement('label');
  numberLabel.innerText = 'Number:';
  var descriptionLabel = document.createElement('label');
  descriptionLabel.innerText = 'Description:';

  // Create div elements to wrap each label and input pair
  var usernameDiv = document.createElement('div');
  usernameDiv.appendChild(usernameLabel);
  usernameDiv.appendChild(usernameInput);
  var numberDiv = document.createElement('div');
  numberDiv.appendChild(numberLabel);
  numberDiv.appendChild(number_Input);
  var descriptionDiv = document.createElement('div');
  descriptionDiv.appendChild(descriptionLabel);
  descriptionDiv.appendChild(descriptionInput);

  // Append the divs to the form
  form.appendChild(usernameDiv);
  form.appendChild(numberDiv);
  form.appendChild(descriptionDiv);
  form.appendChild(signUpButton);

  // Add the form to the container
  container.appendChild(form);

  // Append the container to the body of the document
  document.body.appendChild(container);

  // Define a cleanup method for removing the styling and container
  function cleanup() {
    // Remove the container from the DOM
    container.remove();
  }

  // Define a submit method for the form
  function submitForm() {
    return _submitForm.apply(this, arguments);
  } // Add a submit event listener to the form
  function _submitForm() {
    _submitForm = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var permission_name, reputation_required, description, formData, csrfToken;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            permission_name = usernameInput.value;
            reputation_required = number_Input.value;
            description = descriptionInput.value;
            if (!(permission_name.trim() && reputation_required.trim())) {
              _context.next = 12;
              break;
            }
            // Perform actions with the form data (e.g., validation, API request)
            formData = {
              permission_name: permission_name,
              reputation_required: reputation_required,
              description: description
            };
            _context.next = 7;
            return (0,_forum_components_CsrfToken__WEBPACK_IMPORTED_MODULE_2__.fetchCsrfToken)();
          case 7:
            csrfToken = _context.sent;
            // Now you have the CSRF token in the "csrfToken" variable
            // Make an API request to a hypothetical endpoint
            fetch(url + "/permission/store", {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': csrfToken
              },
              body: JSON.stringify(formData)
            }).then(function (response) {
              return response.json();
            }).then(function (data) {
              swal("Added successfully", "", "success");
              cleanup(); // Remove the form after submission

              // Handle the API response here

              (0,_AllPemissionData__WEBPACK_IMPORTED_MODULE_3__.AllPermission)();
              // You can perform actions like showing a success message or redirecting the user.
            })["catch"](function (error) {
              // Handle errors
              console.error('API Error:', error);
              // You can display an error message to the user.
            });
            // Prevent the default form submission behavior
            return _context.abrupt("return", false);
          case 12:
            swal("Warning!", "Permission name and Points are required", "warning");
          case 13:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _submitForm.apply(this, arguments);
  }
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission
    submitForm(); // Call the custom submitForm method
  });

  // Add a click event listener to the container to close the form (modal)
  container.addEventListener('click', function (event) {
    if (event.target === container) {
      cleanup(); // Close the form when clicking outside
    }
  });

  // Return the form element and submitForm method
  return {
    form: form,
    submitForm: submitForm
  };
}

/***/ }),

/***/ "./src/admin/components/CustomAdminPage.js":
/*!*************************************************!*\
  !*** ./src/admin/components/CustomAdminPage.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomAdminPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Page */ "flarum/components/Page");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__);


var CustomAdminPage = /*#__PURE__*/function (_Page) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(CustomAdminPage, _Page);
  function CustomAdminPage() {
    return _Page.apply(this, arguments) || this;
  }
  var _proto = CustomAdminPage.prototype;
  _proto.view = function view() {
    return m("div", {
      className: "CustomAdminPage"
    }, m("div", {
      className: "CustomAdminPage-header"
    }, m("div", {
      className: "container"
    }, m("h2", null, "Custom Admin Page"))), m("div", {
      className: "CustomAdminPage-body"
    }, m("div", {
      className: "container"
    })));
  };
  return CustomAdminPage;
}((flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/admin/components/admin_points_rule.js":
/*!***************************************************!*\
  !*** ./src/admin/components/admin_points_rule.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditModalForm: () => (/* binding */ EditModalForm)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _forum_components_CsrfToken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../forum/components/CsrfToken */ "./src/forum/components/CsrfToken.js");
/* harmony import */ var _AllPointsRule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../AllPointsRule */ "./src/admin/AllPointsRule.js");




function EditModalForm(_x) {
  return _EditModalForm.apply(this, arguments);
}
function _EditModalForm() {
  _EditModalForm = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(e) {
    var id, url, csrfToken;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          id = $(this).attr("id");
          url = app.forum.attribute('apiUrl');
          _context2.next = 4;
          return (0,_forum_components_CsrfToken__WEBPACK_IMPORTED_MODULE_2__.fetchCsrfToken)();
        case 4:
          csrfToken = _context2.sent;
          // Now you have the CSRF token in the "csrfToken" variable
          // Make an API request to a hypothetical endpoint
          fetch(url + "/points_rules/edit/" + id, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'X-CSRF-Token': csrfToken
            }
          }).then(function (response) {
            return response.json();
          }).then(function (data) {
            var alldata = data.data;
            console.log(data);

            // console.log(e.target.getAttribute("edit-data"))
            // Create a container div for centering the form and overlay
            var container = document.createElement('div');
            container.style.position = 'fixed';
            container.style.top = '0';
            container.style.left = '0';
            container.style.width = '100%';
            container.style.height = '100%';
            container.style.display = 'flex';
            container.style.justifyContent = 'center';
            container.style.alignItems = 'center';
            container.style.zIndex = 999999;
            container.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Semi-transparent black background
            container.classList.add('admin_add_point_modal');
            // Create a form element

            var form = document.createElement('form');
            form.style.backgroundColor = 'white'; // Form background color
            form.style.padding = '20px';
            form.style.width = '45%';
            // Add padding to the form
            form.classList.add('admin_add_point_modal_form');
            $(form).append("<div class='securityQuestion_text_admin'>\n    <span>Edit Points </span>\n    </div>");
            // Create input elements for username, email, and password
            var usernameInput = document.createElement('input');
            usernameInput.defaultValue = alldata == null ? void 0 : alldata.condition;
            usernameInput.setAttribute('type', 'text');
            usernameInput.setAttribute('placeholder', 'condition Score/Deduction');
            usernameInput.setAttribute('readonly', 'true');
            usernameInput.style.marginBottom = '10px';
            var number_Input = document.createElement('input');
            number_Input.defaultValue = alldata == null ? void 0 : alldata.score;
            number_Input.setAttribute('type', 'number');
            number_Input.style.marginBottom = '10px';
            var descriptionInput = document.createElement('input');
            descriptionInput.defaultValue = alldata == null ? void 0 : alldata.limit;
            descriptionInput.setAttribute('type', 'number');
            descriptionInput.setAttribute('placeholder', 'Limit');
            descriptionInput.style.marginBottom = '10px';

            // Add input elements to the form
            // Add form elements to the form
            var usernameLabel = document.createElement('label');
            usernameLabel.innerText = 'Permission Name:';
            var numberLabel = document.createElement('label');
            numberLabel.innerText = 'Score:';
            var descriptionLabel = document.createElement('label');
            descriptionLabel.innerText = 'limit:';

            // Create div elements to wrap each label and input pair
            var usernameDiv = document.createElement('div');
            usernameDiv.appendChild(usernameLabel);
            usernameDiv.appendChild(usernameInput);
            var numberDiv = document.createElement('div');
            numberDiv.appendChild(numberLabel);
            numberDiv.appendChild(number_Input);
            var descriptionDiv = document.createElement('div');
            descriptionDiv.appendChild(descriptionLabel);
            descriptionDiv.appendChild(descriptionInput);

            // Append the divs to the form

            // Create a "Sign Up" button
            var editPointBtn = document.createElement('button');
            editPointBtn.setAttribute('type', 'submit');
            editPointBtn.innerText = 'Add Point';
            editPointBtn.style.marginBottom = '5px';
            editPointBtn.className = ' Button Button--primary points_add_btn'; // Add a class for styling

            // Create an "Already have an account?" line

            // Add form elements to the form
            form.appendChild(usernameDiv);
            form.appendChild(numberDiv);
            form.appendChild(descriptionDiv);
            form.appendChild(editPointBtn);

            // Add the form to the container
            container.appendChild(form);

            // Append the container to the body of the document
            document.body.appendChild(container);

            // Define a cleanup method for removing the styling and container
            function cleanup() {
              // Remove the container from the DOM
              container.remove();
            }

            // Define a submit method for the form
            function submitForm() {
              return _submitForm.apply(this, arguments);
            } // Add a submit event listener to the form
            function _submitForm() {
              _submitForm = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
                var permission, reputation_requirement, description, formData, _csrfToken;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      permission = usernameInput.value;
                      reputation_requirement = number_Input.value;
                      description = descriptionInput.value;
                      if (!(permission.trim() && reputation_requirement.trim())) {
                        _context.next = 12;
                        break;
                      }
                      // Perform actions with the form data (e.g., validation, API request)
                      formData = {
                        condition: permission,
                        score: reputation_requirement,
                        limit: description
                      };
                      _context.next = 7;
                      return (0,_forum_components_CsrfToken__WEBPACK_IMPORTED_MODULE_2__.fetchCsrfToken)();
                    case 7:
                      _csrfToken = _context.sent;
                      // Now you have the CSRF token in the "csrfToken" variable
                      // Make an API request to a hypothetical endpoint
                      fetch(url + "/point_rule/update/" + id, {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json',
                          'X-CSRF-Token': _csrfToken
                        },
                        body: JSON.stringify(formData)
                      }).then(function (response) {
                        return response.json();
                      }).then(function (data) {
                        cleanup();
                        swal("Updated!", "Updated successfully", "success");

                        // Handle the API response here

                        (0,_AllPointsRule__WEBPACK_IMPORTED_MODULE_3__.AllPointsRule)();
                        // You can perform actions like showing a success message or redirecting the user.
                      })["catch"](function (error) {
                        // Handle errors
                        console.error('API Error:', error);
                        // You can display an error message to the user.
                      });
                      // Prevent the default form submission behavior
                      return _context.abrupt("return", false);
                    case 12:
                      swal("Warning!", "Permission name and Points are required", "warning");
                    case 13:
                    case "end":
                      return _context.stop();
                  }
                }, _callee);
              }));
              return _submitForm.apply(this, arguments);
            }
            form.addEventListener('submit', function (event) {
              event.preventDefault(); // Prevent the default form submission
              submitForm(); // Call the custom submitForm method
              // Remove the form after submission
            });

            // Add a click event listener to the container to close the form (modal)
            container.addEventListener('click', function (event) {
              if (event.target === container) {
                cleanup(); // Close the form when clicking outside
              }
            });

            // Return the form element and submitForm method
            return {
              form: form,
              submitForm: submitForm
            };
          })["catch"](function (error) {
            // Handle errors
            console.error('API Error:', error);
            // You can display an error message to the user.
          });
        case 6:
        case "end":
          return _context2.stop();
      }
    }, _callee2, this);
  }));
  return _EditModalForm.apply(this, arguments);
}

/***/ }),

/***/ "./src/admin/components/editcategory.js":
/*!**********************************************!*\
  !*** ./src/admin/components/editcategory.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editcategory: () => (/* binding */ editcategory)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _forum_components_CsrfToken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../forum/components/CsrfToken */ "./src/forum/components/CsrfToken.js");



function editcategory() {
  return _editcategory.apply(this, arguments);
}
function _editcategory() {
  _editcategory = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
    var id, url, csrfToken;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          id = this.getAttribute("id");
          url = app.forum.attribute('apiUrl');
          _context2.next = 4;
          return (0,_forum_components_CsrfToken__WEBPACK_IMPORTED_MODULE_2__.fetchCsrfToken)();
        case 4:
          csrfToken = _context2.sent;
          fetch(url + "wiki/category/" + id, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          }).then(function (response) {
            return response.json();
          }).then(function (data) {
            var alldata = data.data;
            var container = document.createElement('div');
            // ... [rest of the container styling and properties]

            var form = document.createElement('form');
            // ... [rest of the form styling and properties]

            // Name field
            var nameLabel = document.createElement('label');
            nameLabel.innerText = 'Name:';
            var nameInput = document.createElement('input');
            nameInput.setAttribute('type', 'text');
            nameInput.setAttribute('placeholder', 'Name');
            nameInput.defaultValue = alldata == null ? void 0 : alldata.name;
            nameInput.style.marginBottom = '10px';
            var nameDiv = document.createElement('div');
            nameDiv.appendChild(nameLabel);
            nameDiv.appendChild(nameInput);

            // ... [rest of the input fields and labels for username, number, and description]

            form.appendChild(nameDiv); // Append the name field
            // ... [append other divs and buttons]
            function submitForm() {
              return _submitForm.apply(this, arguments);
            }
            function _submitForm() {
              _submitForm = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
                var name, permission, formData;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      name = nameInput.value;
                      permission = usernameInput.value; // ... [rest of the values]
                      if (name.trim() && permission.trim() && reputation_requirement.trim()) {
                        formData = {
                          name: name
                          // ... [rest of the formData]
                        };

                        fetch(url + "/wiki/category/" + id, {
                          method: 'PUT',
                          headers: {
                            'Content-Type': 'application/json',
                            'X-CSRF-Token': csrfToken
                          },
                          body: JSON.stringify(formData)
                        });
                        // ... [rest of the fetch process]
                      } else {
                        swal("Warning!", "Name, Permission name, and Points are required", "warning");
                      }
                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }, _callee);
              }));
              return _submitForm.apply(this, arguments);
            }
            form.addEventListener('submit', function (event) {
              event.preventDefault();
              submitForm();
            });
            var handleContainerClick = function handleContainerClick(event) {
              if (event.target === container) {
                cleanup();
              }
            };
            container.addEventListener('click', handleContainerClick);
            return {
              form: form,
              cleanup: function (_cleanup) {
                function cleanup() {
                  return _cleanup.apply(this, arguments);
                }
                cleanup.toString = function () {
                  return _cleanup.toString();
                };
                return cleanup;
              }(function () {
                cleanup();
                container.removeEventListener('click', handleContainerClick);
              })
            };
          })["catch"](function (error) {
            console.error('API Error:', error);
          });
        case 6:
        case "end":
          return _context2.stop();
      }
    }, _callee2, this);
  }));
  return _editcategory.apply(this, arguments);
}

/***/ }),

/***/ "./src/admin/index.js":
/*!****************************!*\
  !*** ./src/admin/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CustomAdminPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/CustomAdminPage */ "./src/admin/components/CustomAdminPage.js");
/* harmony import */ var _components_Admin_addpoint_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Admin_addpoint_modal */ "./src/admin/components/Admin_addpoint_modal.js");
/* harmony import */ var _AllPemissionData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AllPemissionData */ "./src/admin/AllPemissionData.js");
/* harmony import */ var _AllPointsRule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AllPointsRule */ "./src/admin/AllPointsRule.js");
/* harmony import */ var _AllCategories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AllCategories */ "./src/admin/AllCategories.js");
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }






flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('sidtechno/customlogin', function () {
  flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().extensionData["for"]('sidtechno/customlogin') // Changed to match your extension id
  .registerPage({
    component: _components_CustomAdminPage__WEBPACK_IMPORTED_MODULE_1__["default"],
    icon: 'fas fa-chart-bar',
    // Choose an appropriate FontAwesome icon
    label: 'Custom Data',
    path: '/custom-data'
  });
  console.log('[sidtechno/customlogin] Hello, admin!');
  $(document).ready(function () {
    var main_sidtechno_plugin = $(".sidtechno-customlogin-Page");
    var main_page = $("#content");
    var observer = new MutationObserver(function (mutationsList, observer) {
      var _loop = function _loop() {
        var mutation = _step.value;
        if (mutation.type === 'childList' && $(mutation.target).find('.sidtechno-customlogin-Page').length > 0) {
          console.log(mutation.target, 'sadsada', $(mutation.target).find('.sidtechno-customlogin-Page'));
          if ($(mutation.target).find('.sidtechno-customlogin-Page').length > 0) {
            (0,_AllPemissionData__WEBPACK_IMPORTED_MODULE_3__.AllPermission)();
            var extensionHeaderDiv = $(mutation.target).find(".ExtensionPage-header");
            var extensionBodyDiv = $(mutation.target).find(".ExtensionPage-body");
            var containerDiv = extensionHeaderDiv.find(".container");
            var containerDiv_body = extensionBodyDiv.find(".container");
            if (containerDiv.length > 0) {
              // let helpTextElements = containerDiv.find(".helpText");
              var user_point = containerDiv_body.find(".ExtensionTitle");

              // let buttonElement = $("<button>").text("Add Points").addClass("sid_add_point_btn btn btn-primary"); // Add a custom class to the button
              var button_permission = $("<button>").text("View Permissions").addClass("sid_permission_point_btn Button btn-primary"); // Add a custom class to the button
              var button_points_rule = $("<button>").text("Points Rules").addClass("sid_points_rule_btn Button btn-primary"); // Add a custom class to the button
              // let button_category = $("<button>").text("Category").addClass("sid_category_btn Button btn-primary");

              containerDiv.on("click", ".sid_add_point_btn", function () {
                (0,_components_Admin_addpoint_modal__WEBPACK_IMPORTED_MODULE_2__.CustomModalForm)();
              });
              containerDiv_body.on("click", ".sid_permission_point_btn", function () {
                (0,_AllPemissionData__WEBPACK_IMPORTED_MODULE_3__.AllPermission)();
              });
              containerDiv_body.on("click", ".sid_points_rule_btn", function () {
                (0,_AllPointsRule__WEBPACK_IMPORTED_MODULE_4__.AllPointsRule)();
              });
              //  containerDiv_body.on("click", ".sid_category_btn", function() {
              //   AllCategories();  // Assuming you have defined this function
              //   });

              // ///// add point btn ////////
              // helpTextElements.each(function() {

              //   buttonElement.clone().insertAfter($(this));
              // });

              // ///// add point btn ////////

              user_point.each(function () {
                button_points_rule.clone().insertAfter($(this));
                button_permission.clone().insertAfter($(this));
                // button_category.clone().insertAfter($(this));
                // button_subcategory.clone().insertAfter($(this));
              });
            }
          }
          return 1; // break
        }
      };
      // Check if any mutations are relevant to your page changes

      for (var _iterator = _createForOfIteratorHelperLoose(mutationsList), _step; !(_step = _iterator()).done;) {
        if (_loop()) break;
      }
    });
    var observerConfig = {
      childList: true
    };
    observer.observe(main_page[0], observerConfig);
    if (main_sidtechno_plugin.length > 0) {
      (0,_AllPemissionData__WEBPACK_IMPORTED_MODULE_3__.AllPermission)();
      var extensionHeaderDiv = main_sidtechno_plugin.find(".ExtensionPage-header");
      var extensionBodyDiv = main_sidtechno_plugin.find(".ExtensionPage-body");
      var containerDiv = extensionHeaderDiv.find(".container");
      var containerDiv_body = extensionBodyDiv.find(".container");
      if (containerDiv.length > 0) {
        // let helpTextElements = containerDiv.find(".helpText");
        var user_point = containerDiv_body.find(".ExtensionTitle");

        // let buttonElement = $("<button>").text("Add Points").addClass("sid_add_point_btn btn btn-primary"); // Add a custom class to the button
        var button_permission = $("<button>").text("View Permissions").addClass("sid_permission_point_btn Button btn-primary"); // Add a custom class to the button
        var button_points_rule = $("<button>").text("Points Rules").addClass("sid_points_rule_btn Button btn-primary"); // Add a custom class to the button
        // let button_category = $("<button>").text("Category").addClass("sid_category_btn Button btn-primary");

        containerDiv.on("click", ".sid_add_point_btn", function () {
          (0,_components_Admin_addpoint_modal__WEBPACK_IMPORTED_MODULE_2__.CustomModalForm)();
        });
        containerDiv_body.on("click", ".sid_permission_point_btn", function () {
          (0,_AllPemissionData__WEBPACK_IMPORTED_MODULE_3__.AllPermission)();
        });
        containerDiv_body.on("click", ".sid_points_rule_btn", function () {
          (0,_AllPointsRule__WEBPACK_IMPORTED_MODULE_4__.AllPointsRule)();
        });
        containerDiv_body.on("click", ".sid_category_btn", function () {
          (0,_AllCategories__WEBPACK_IMPORTED_MODULE_5__.AllCategories)(); // Assuming you have defined this function
        });

        // ///// add point btn ////////
        // helpTextElements.each(function() {

        //   buttonElement.clone().insertAfter($(this));
        // });

        // ///// add point btn ////////

        user_point.each(function () {
          button_points_rule.clone().insertAfter($(this));
          button_permission.clone().insertAfter($(this));
          button_category.clone().insertAfter($(this));
        });
      }
    }
  });
});

/***/ }),

/***/ "./src/common/index.js":
/*!*****************************!*\
  !*** ./src/common/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/app */ "flarum/common/app");
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_app__WEBPACK_IMPORTED_MODULE_0__);

flarum_common_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('sidtechno/customlogin', function () {
  console.log('[sidtechno/customlogin] Hello, forum and admin!');
});

/***/ }),

/***/ "./src/forum/components/CsrfToken.js":
/*!*******************************************!*\
  !*** ./src/forum/components/CsrfToken.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchCsrfToken: () => (/* binding */ fetchCsrfToken)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);


function fetchCsrfToken() {
  return _fetchCsrfToken.apply(this, arguments);
}
function _fetchCsrfToken() {
  _fetchCsrfToken = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var url, response, csrfToken;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          url = app.forum.attribute('apiUrl');
          ;
          _context.prev = 2;
          _context.next = 5;
          return fetch("" + url, {
            method: 'GET',
            credentials: 'include' // Include cookies
          });
        case 5:
          response = _context.sent;
          csrfToken = response.headers.get('X-CSRF-Token');
          if (csrfToken) {
            _context.next = 9;
            break;
          }
          throw new Error('CSRF token not found');
        case 9:
          return _context.abrupt("return", csrfToken);
        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](2);
          console.error('Error fetching CSRF token:', _context.t0);
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 12]]);
  }));
  return _fetchCsrfToken.apply(this, arguments);
}

/***/ }),

/***/ "flarum/admin/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['admin/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/app'];

/***/ }),

/***/ "flarum/common/app":
/*!***************************************************!*\
  !*** external "flarum.core.compat['common/app']" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/app'];

/***/ }),

/***/ "flarum/components/Page":
/*!********************************************************!*\
  !*** external "flarum.core.compat['components/Page']" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['components/Page'];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"]);
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw new Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw new Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    "catch": function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ ((module) => {

function _typeof(o) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js")();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./admin.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common */ "./src/common/index.js");
/* harmony import */ var _src_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/admin */ "./src/admin/index.js");


})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=admin.js.map