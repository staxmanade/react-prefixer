"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var styles = window.getComputedStyle(document.documentElement, ""),
    prefix = Array.prototype.slice.call(styles).join("").match(/-(moz|webkit|ms)-/)[1] || styles.OLink === "" && ["", "o"];

var isIE10 = (function () {
    try {
        return navigator && navigator.appVersion && navigator.appVersion.indexOf("MSIE 10") >= 0;
    } catch (e) {
        return false;
    }
})();

ret = {
    css: "-" + prefix + "-",
    js: prefix,
    isIE10: isIE10
};

if (ret.js !== "ms") {
    ret.js = ret.js.charAt(0).toUpperCase() + ret.js.slice(1);
}

exports["default"] = ret;
module.exports = exports["default"];