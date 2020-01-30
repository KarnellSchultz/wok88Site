module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Body.js":
/*!********************************!*\
  !*** ./src/components/Body.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Body; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/karnell.schultz/Documents/javaScript/wok88Next/wok88next/src/components/Body.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function Body() {
  return __jsx("div", {
    className: "jsx-3579384912",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-3579384912",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "\xD6ppettider"), __jsx("h4", {
    className: "jsx-3579384912",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "M\xE5ndag St\xE4ngt"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3579384912",
    __self: this
  }, ".jsx-3579384912{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:cornsilk;margin:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYXJuZWxsLnNjaHVsdHovRG9jdW1lbnRzL2phdmFTY3JpcHQvd29rODhOZXh0L3dvazg4bmV4dC9zcmMvY29tcG9uZW50cy9Cb2R5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9lLEFBRWtCLDBFQUNTLDhFQUNGLG9CQUNSLFlBQ2IiLCJmaWxlIjoiL1VzZXJzL2thcm5lbGwuc2NodWx0ei9Eb2N1bWVudHMvamF2YVNjcmlwdC93b2s4OE5leHQvd29rODhuZXh0L3NyYy9jb21wb25lbnRzL0JvZHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb2R5KCkge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8aDI+w5ZwcGV0dGlkZXI8L2gyPlxuXHRcdFx0PGg0Pk3DpW5kYWcgU3TDpG5ndDwvaDQ+XG5cdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRcdGJhY2tncm91bmQ6IGNvcm5zaWxrO1xuXHRcdFx0XHRtYXJnaW46IGF1dG87XG5cdFx0XHRgfTwvc3R5bGU+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG4iXX0= */\n/*@ sourceURL=/Users/karnell.schultz/Documents/javaScript/wok88Next/wok88next/src/components/Body.js */"));
}

/***/ }),

/***/ "./src/components/Button.js":
/*!**********************************!*\
  !*** ./src/components/Button.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Button; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/karnell.schultz/Documents/javaScript/wok88Next/wok88next/src/components/Button.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function Button({
  text = 'Click Me',
  link = '/'
}) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("button", {
    className: "jsx-3769058734",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("a", {
    href: link,
    className: "jsx-3769058734",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, text)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3769058734",
    __self: this
  }, ".button.jsx-3769058734,a.button.jsx-3769058734,button.jsx-3769058734,[type='submit'].jsx-3769058734,[type='reset'].jsx-3769058734,[type='button'].jsx-3769058734{-webkit-appearance:none;display:inline-block;border:1px solid #0366ee;border-radius:4px;background:#0366ee;color:#ffffff;font-weight:600;font-family:-apple-system,BlinkMacSystemFont,Helvetica Neue, Helvetica,Arial,sans-serif;font-size:1rem;text-transform:none;padding:0.75rem 1.25rem;margin:0 0 0.5rem 0;vertical-align:middle;text-align:center;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;line-height:1;}.button.jsx-3769058734:hover,a.button.jsx-3769058734:hover,button.jsx-3769058734:hover,[type='submit']:hover.jsx-3769058734,[type='reset']:hover.jsx-3769058734,[type='button']:hover.jsx-3769058734{border:1px solid #0250bc;background:#0250bc;color:#ffffff;-webkit-text-decoration:none;text-decoration:none;}.button.jsx-3769058734:focus,.button.jsx-3769058734:active,a.button.jsx-3769058734:focus,a.button.jsx-3769058734:active,button.jsx-3769058734:focus,button.jsx-3769058734:active,[type='submit']:focus.jsx-3769058734,[type='submit']:active.jsx-3769058734,[type='reset']:focus.jsx-3769058734,[type='reset']:active.jsx-3769058734,[type='button']:focus.jsx-3769058734,[type='button']:active.jsx-3769058734{border:1px solid #0250bc;background:#0250bc;color:#ffffff;-webkit-text-decoration:none;text-decoration:none;}.button.jsx-3769058734::-moz-focus-inner,a.button.jsx-3769058734::-moz-focus-inner,button.jsx-3769058734::-moz-focus-inner,[type='submit']::-moz-focus-inner.jsx-3769058734,[type='reset']::-moz-focus-inner.jsx-3769058734,[type='button']::-moz-focus-inner.jsx-3769058734{border:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYXJuZWxsLnNjaHVsdHovRG9jdW1lbnRzL2phdmFTY3JpcHQvd29rODhOZXh0L3dvazg4bmV4dC9zcmMvY29tcG9uZW50cy9CdXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU0ssQUFRK0IsQUEwQkMsQUFrQkEsQUFZaEIsU0FDQyxVQUNYLEtBekRzQixDQTBCRixBQWtCQSxtQkFqQkwsQUFrQkEsQ0E1Q1csYUEyQkosQUFrQkEsWUE1Q0gsa0JBQ0MsbUJBQ0wsQ0F5QmYsQUFrQkEsYUExQ2lCLGdCQUVhLHdGQUNkLGVBQ0ssb0JBQ0ksd0JBQ0osb0JBQ0Usc0JBQ0osa0JBQ0gsZUFDTSxrREFDUCxjQUNmIiwiZmlsZSI6Ii9Vc2Vycy9rYXJuZWxsLnNjaHVsdHovRG9jdW1lbnRzL2phdmFTY3JpcHQvd29rODhOZXh0L3dvazg4bmV4dC9zcmMvY29tcG9uZW50cy9CdXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdXR0b24oeyB0ZXh0ID0gJ0NsaWNrIE1lJywgbGluayA9ICcvJyB9KSB7XG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxidXR0b24+XG5cdFx0XHRcdDxhIGhyZWY9e2xpbmt9Pnt0ZXh0fTwvYT5cblx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PHN0eWxlIGpzeD5cblx0XHRcdFx0e2Bcblx0XHRcdFx0XHQuYnV0dG9uLFxuXHRcdFx0XHRcdGEuYnV0dG9uLFxuXHRcdFx0XHRcdGJ1dHRvbixcblx0XHRcdFx0XHRbdHlwZT0nc3VibWl0J10sXG5cdFx0XHRcdFx0W3R5cGU9J3Jlc2V0J10sXG5cdFx0XHRcdFx0W3R5cGU9J2J1dHRvbiddIHtcblx0XHRcdFx0XHRcdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICMwMzY2ZWU7XG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA0cHg7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjMDM2NmVlO1xuXHRcdFx0XHRcdFx0Y29sb3I6ICNmZmZmZmY7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgSGVsdmV0aWNhIE5ldWUsXG5cdFx0XHRcdFx0XHRcdEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDFyZW07XG5cdFx0XHRcdFx0XHR0ZXh0LXRyYW5zZm9ybTogbm9uZTtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDAuNzVyZW0gMS4yNXJlbTtcblx0XHRcdFx0XHRcdG1hcmdpbjogMCAwIDAuNXJlbSAwO1xuXHRcdFx0XHRcdFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcblx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5idXR0b246aG92ZXIsXG5cdFx0XHRcdFx0YS5idXR0b246aG92ZXIsXG5cdFx0XHRcdFx0YnV0dG9uOmhvdmVyLFxuXHRcdFx0XHRcdFt0eXBlPSdzdWJtaXQnXTpob3Zlcixcblx0XHRcdFx0XHRbdHlwZT0ncmVzZXQnXTpob3Zlcixcblx0XHRcdFx0XHRbdHlwZT0nYnV0dG9uJ106aG92ZXIge1xuXHRcdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgIzAyNTBiYztcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICMwMjUwYmM7XG5cdFx0XHRcdFx0XHRjb2xvcjogI2ZmZmZmZjtcblx0XHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuYnV0dG9uOmZvY3VzLFxuXHRcdFx0XHRcdC5idXR0b246YWN0aXZlLFxuXHRcdFx0XHRcdGEuYnV0dG9uOmZvY3VzLFxuXHRcdFx0XHRcdGEuYnV0dG9uOmFjdGl2ZSxcblx0XHRcdFx0XHRidXR0b246Zm9jdXMsXG5cdFx0XHRcdFx0YnV0dG9uOmFjdGl2ZSxcblx0XHRcdFx0XHRbdHlwZT0nc3VibWl0J106Zm9jdXMsXG5cdFx0XHRcdFx0W3R5cGU9J3N1Ym1pdCddOmFjdGl2ZSxcblx0XHRcdFx0XHRbdHlwZT0ncmVzZXQnXTpmb2N1cyxcblx0XHRcdFx0XHRbdHlwZT0ncmVzZXQnXTphY3RpdmUsXG5cdFx0XHRcdFx0W3R5cGU9J2J1dHRvbiddOmZvY3VzLFxuXHRcdFx0XHRcdFt0eXBlPSdidXR0b24nXTphY3RpdmUge1xuXHRcdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgIzAyNTBiYztcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICMwMjUwYmM7XG5cdFx0XHRcdFx0XHRjb2xvcjogI2ZmZmZmZjtcblx0XHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxuXHRcdFx0XHRcdGEuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxuXHRcdFx0XHRcdGJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcblx0XHRcdFx0XHRbdHlwZT0nc3VibWl0J106Oi1tb3otZm9jdXMtaW5uZXIsXG5cdFx0XHRcdFx0W3R5cGU9J3Jlc2V0J106Oi1tb3otZm9jdXMtaW5uZXIsXG5cdFx0XHRcdFx0W3R5cGU9J2J1dHRvbiddOjotbW96LWZvY3VzLWlubmVyIHtcblx0XHRcdFx0XHRcdGJvcmRlcjogMDtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRgfVxuXHRcdFx0PC9zdHlsZT5cblx0XHQ8Lz5cblx0KTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/karnell.schultz/Documents/javaScript/wok88Next/wok88next/src/components/Button.js */"));
}

/***/ }),

/***/ "./src/components/Nav.js":
/*!*******************************!*\
  !*** ./src/components/Nav.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Nav; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ "./src/components/Button.js");
var _jsxFileName = "/Users/karnell.schultz/Documents/javaScript/wok88Next/wok88next/src/components/Nav.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Nav() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-1265554084" + " " + "nav-bar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-1265554084",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-1265554084",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: 'Hem',
    link: '/',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  })), __jsx("li", {
    className: "jsx-1265554084",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: 'lunchMenu',
    link: '/lunchmenu',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })), __jsx("li", {
    className: "jsx-1265554084",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: 'A la Carte',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })), __jsx("li", {
    className: "jsx-1265554084",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: 'Contact Us',
    link: '/contact',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })), __jsx("li", {
    className: "jsx-1265554084",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: 'Lunch Me',
    link: '/woot',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "640589675",
    __self: this
  }, ".jsx-1265554084{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:frow;-ms-flex-direction:frow;flex-direction:frow;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;background:#e30613;width:100%;}.nav-bar.jsx-1265554084{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYXJuZWxsLnNjaHVsdHovRG9jdW1lbnRzL2phdmFTY3JpcHQvd29rODhOZXh0L3dvazg4bmV4dC9zcmMvY29tcG9uZW50cy9OYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUJlLEFBRWtCLEFBTUMsMEVBTE0sQUFNcEIsd0VBTDhCLG1IQUNYLG1CQUNSLFdBSVoiLCJmaWxlIjoiL1VzZXJzL2thcm5lbGwuc2NodWx0ei9Eb2N1bWVudHMvamF2YVNjcmlwdC93b2s4OE5leHQvd29rODhuZXh0L3NyYy9jb21wb25lbnRzL05hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2KCkge1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5hdi1iYXJcIj5cblx0XHRcdFx0PHVsPlxuXHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdDxCdXR0b24gdGV4dD17J0hlbSd9IGxpbms9eycvJ30+PC9CdXR0b24+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHQ8QnV0dG9uIHRleHQ9eydsdW5jaE1lbnUnfSBsaW5rPXsnL2x1bmNobWVudSd9PjwvQnV0dG9uPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0PEJ1dHRvbiB0ZXh0PXsnQSBsYSBDYXJ0ZSd9PjwvQnV0dG9uPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0PEJ1dHRvbiB0ZXh0PXsnQ29udGFjdCBVcyd9IGxpbms9eycvY29udGFjdCd9PjwvQnV0dG9uPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0PEJ1dHRvbiB0ZXh0PXsnTHVuY2ggTWUnfSBsaW5rPXsnL3dvb3QnfSAvPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdDwvdWw+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGZyb3c7XG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRcdFx0YmFja2dyb3VuZDogI2UzMDYxMztcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdC5uYXYtYmFyIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHR9XG5cdFx0XHRgfTwvc3R5bGU+XG5cdFx0XHQ8c3R5bGUgZ2xvYmFsIGpzeD57YFxuXHRcdFx0XHRib2R5IHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmZmZmYwO1xuXHRcdFx0XHR9XG5cdFx0XHRgfTwvc3R5bGU+XG5cdFx0PC8+XG5cdCk7XG59XG4iXX0= */\n/*@ sourceURL=/Users/karnell.schultz/Documents/javaScript/wok88Next/wok88next/src/components/Nav.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "248257894",
    __self: this
  }, "body{background:#fffff0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYXJuZWxsLnNjaHVsdHovRG9jdW1lbnRzL2phdmFTY3JpcHQvd29rODhOZXh0L3dvazg4bmV4dC9zcmMvY29tcG9uZW50cy9OYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUNzQixBQUd5QixtQkFDcEIiLCJmaWxlIjoiL1VzZXJzL2thcm5lbGwuc2NodWx0ei9Eb2N1bWVudHMvamF2YVNjcmlwdC93b2s4OE5leHQvd29rODhuZXh0L3NyYy9jb21wb25lbnRzL05hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2KCkge1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5hdi1iYXJcIj5cblx0XHRcdFx0PHVsPlxuXHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdDxCdXR0b24gdGV4dD17J0hlbSd9IGxpbms9eycvJ30+PC9CdXR0b24+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHQ8QnV0dG9uIHRleHQ9eydsdW5jaE1lbnUnfSBsaW5rPXsnL2x1bmNobWVudSd9PjwvQnV0dG9uPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0PEJ1dHRvbiB0ZXh0PXsnQSBsYSBDYXJ0ZSd9PjwvQnV0dG9uPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0PEJ1dHRvbiB0ZXh0PXsnQ29udGFjdCBVcyd9IGxpbms9eycvY29udGFjdCd9PjwvQnV0dG9uPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0PEJ1dHRvbiB0ZXh0PXsnTHVuY2ggTWUnfSBsaW5rPXsnL3dvb3QnfSAvPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdDwvdWw+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGZyb3c7XG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRcdFx0YmFja2dyb3VuZDogI2UzMDYxMztcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdC5uYXYtYmFyIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHR9XG5cdFx0XHRgfTwvc3R5bGU+XG5cdFx0XHQ8c3R5bGUgZ2xvYmFsIGpzeD57YFxuXHRcdFx0XHRib2R5IHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmZmZmYwO1xuXHRcdFx0XHR9XG5cdFx0XHRgfTwvc3R5bGU+XG5cdFx0PC8+XG5cdCk7XG59XG4iXX0= */\n/*@ sourceURL=/Users/karnell.schultz/Documents/javaScript/wok88Next/wok88next/src/components/Nav.js */"));
}

/***/ }),

/***/ "./src/components/PageWrapper.js":
/*!***************************************!*\
  !*** ./src/components/PageWrapper.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PageWrapper; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/karnell.schultz/Documents/javaScript/wok88Next/wok88next/src/components/PageWrapper.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function PageWrapper({
  children
}) {
  return __jsx("div", {
    className: "jsx-1727269062",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("img", {
    src: "http://www.wok88.se/logotype.png",
    alt: "drag-on",
    className: "jsx-1727269062",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1727269062",
    __self: this
  }, ".jsx-1727269062{-moz-box-shadow:3px 3px 5px 6px #ccc;-webkit-box-shadow:3px 3px 5px 6px #ccc;box-shadow:3px 3px 5px 6px #ccc;width:800px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYXJuZWxsLnNjaHVsdHovRG9jdW1lbnRzL2phdmFTY3JpcHQvd29rODhOZXh0L3dvazg4bmV4dC9zcmMvY29tcG9uZW50cy9QYWdlV3JhcHBlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPZSxBQUUwQyxxQ0FDRyx3Q0FDUixnQ0FDcEIsWUFDYiIsImZpbGUiOiIvVXNlcnMva2FybmVsbC5zY2h1bHR6L0RvY3VtZW50cy9qYXZhU2NyaXB0L3dvazg4TmV4dC93b2s4OG5leHQvc3JjL2NvbXBvbmVudHMvUGFnZVdyYXBwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlV3JhcHBlcih7IGNoaWxkcmVuIH0pIHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2PlxuXHRcdFx0PGltZyBzcmM9XCJodHRwOi8vd3d3Lndvazg4LnNlL2xvZ290eXBlLnBuZ1wiIGFsdD1cImRyYWctb25cIiAvPlxuXHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHQtbW96LWJveC1zaGFkb3c6IDNweCAzcHggNXB4IDZweCAjY2NjO1xuXHRcdFx0XHQtd2Via2l0LWJveC1zaGFkb3c6IDNweCAzcHggNXB4IDZweCAjY2NjO1xuXHRcdFx0XHRib3gtc2hhZG93OiAzcHggM3B4IDVweCA2cHggI2NjYztcblx0XHRcdFx0d2lkdGg6IDgwMHB4O1xuXHRcdFx0YH08L3N0eWxlPlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIl19 */\n/*@ sourceURL=/Users/karnell.schultz/Documents/javaScript/wok88Next/wok88next/src/components/PageWrapper.js */"));
}

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomePage; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Nav */ "./src/components/Nav.js");
/* harmony import */ var _components_Body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Body */ "./src/components/Body.js");
/* harmony import */ var _components_PageWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PageWrapper */ "./src/components/PageWrapper.js");
var _jsxFileName = "/Users/karnell.schultz/Documents/javaScript/wok88Next/wok88next/src/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function HomePage() {
  return __jsx(_components_PageWrapper__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2435438406",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx(_components_Nav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), __jsx(_components_Body__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2435438406",
    __self: this
  }, ".jsx-2435438406{background:green;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYXJuZWxsLnNjaHVsdHovRG9jdW1lbnRzL2phdmFTY3JpcHQvd29rODhOZXh0L3dvazg4bmV4dC9zcmMvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV2dCLEFBRXVCLGlCQUNKLDBFQUNTLDhFQUNWLFlBQ2IiLCJmaWxlIjoiL1VzZXJzL2thcm5lbGwuc2NodWx0ei9Eb2N1bWVudHMvamF2YVNjcmlwdC93b2s4OE5leHQvd29rODhuZXh0L3NyYy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvTmF2JztcbmltcG9ydCBCb2R5IGZyb20gJy4uL2NvbXBvbmVudHMvQm9keSc7XG5pbXBvcnQgUGFnZVdyYXBwZXIgZnJvbSAnLi4vY29tcG9uZW50cy9QYWdlV3JhcHBlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKCkge1xuXHRyZXR1cm4gKFxuXHRcdDxQYWdlV3JhcHBlcj5cblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxOYXYgLz5cblx0XHRcdFx0PEJvZHkgLz5cblx0XHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHRcdGJhY2tncm91bmQ6IGdyZWVuO1xuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdFx0XHRtYXJnaW46IGF1dG87XG5cdFx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdDwvZGl2PlxuXHRcdDwvUGFnZVdyYXBwZXI+XG5cdCk7XG59XG5cbi8vICNlMzA2MTMgaGVhZGVyIGNvbG9yXG4iXX0= */\n/*@ sourceURL=/Users/karnell.schultz/Documents/javaScript/wok88Next/wok88next/src/pages/index.js */")));
} // #e30613 header color

/***/ }),

/***/ 4:
/*!**********************************!*\
  !*** multi ./src/pages/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/karnell.schultz/Documents/javaScript/wok88Next/wok88next/src/pages/index.js */"./src/pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map