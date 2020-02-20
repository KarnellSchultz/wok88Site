webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomePage; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Nav */ "./src/components/Nav.js");
/* harmony import */ var _components_Body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Body */ "./src/components/Body.js");
/* harmony import */ var _components_PageWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PageWrapper */ "./src/components/PageWrapper.js");
var _jsxFileName = "/Users/karnell.schultz/Documents/javaScript/wok88Next/wok88next/src/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function HomePage() {
  const {
    0: foodImage,
    1: setFoodImage
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('http://www.wok88.se/foto/bild1.jpg');
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setInterval(imageRotate(), 3000);
  }, [foodImage]);

  function imageRotate() {
    let foodNumber = Math.floor(Math.random() * 9);
    return "http://www.wok88.se/foto/bild".concat(foodNumber, ".jpg");
  }

  return __jsx(_components_PageWrapper__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3058357043",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(_components_Nav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), __jsx(_components_Body__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3058357043",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-3058357043",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "\xD6ppettider"), __jsx("h4", {
    className: "jsx-3058357043",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "M\xE5ndag St\xE4ngt")), __jsx("img", {
    src: foodImage,
    alt: "food stuff in this one",
    className: "jsx-3058357043",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3058357043",
    __self: this
  }, ".jsx-3058357043{background:gold;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYXJuZWxsLnNjaHVsdHovRG9jdW1lbnRzL2phdmFTY3JpcHQvd29rODhOZXh0L3dvazg4bmV4dC9zcmMvcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThCZ0IsQUFFc0IsZ0JBQ0gsMEVBQ1MsOEVBQ1YsWUFDYiIsImZpbGUiOiIvVXNlcnMva2FybmVsbC5zY2h1bHR6L0RvY3VtZW50cy9qYXZhU2NyaXB0L3dvazg4TmV4dC93b2s4OG5leHQvc3JjL3BhZ2VzL2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5hdiBmcm9tICcuLi9jb21wb25lbnRzL05hdic7XG5pbXBvcnQgQm9keSBmcm9tICcuLi9jb21wb25lbnRzL0JvZHknO1xuaW1wb3J0IFBhZ2VXcmFwcGVyIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnZVdyYXBwZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZSgpIHtcblx0Y29uc3QgW2Zvb2RJbWFnZSwgc2V0Rm9vZEltYWdlXSA9IHVzZVN0YXRlKFxuXHRcdCdodHRwOi8vd3d3Lndvazg4LnNlL2ZvdG8vYmlsZDEuanBnJyxcblx0KTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdHNldEludGVydmFsKGltYWdlUm90YXRlKCksIDMwMDApO1xuXHR9LCBbZm9vZEltYWdlXSk7XG5cblx0ZnVuY3Rpb24gaW1hZ2VSb3RhdGUoKTogc3RyaW5nIHtcblx0XHRsZXQgZm9vZE51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpO1xuXHRcdHJldHVybiBgaHR0cDovL3d3dy53b2s4OC5zZS9mb3RvL2JpbGQke2Zvb2ROdW1iZXJ9LmpwZ2A7XG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxQYWdlV3JhcHBlcj5cblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxOYXYgLz5cblx0XHRcdFx0PEJvZHk+XG5cdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdDxoMj7DlnBwZXR0aWRlcjwvaDI+XG5cdFx0XHRcdFx0XHQ8aDQ+TcOlbmRhZyBTdMOkbmd0PC9oND5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8aW1nIHNyYz17Zm9vZEltYWdlfSBhbHQ9XCJmb29kIHN0dWZmIGluIHRoaXMgb25lXCIgLz5cblx0XHRcdFx0PC9Cb2R5PlxuXHRcdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdFx0YmFja2dyb3VuZDogZ29sZDtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRcdFx0bWFyZ2luOiBhdXRvO1xuXHRcdFx0XHRgfTwvc3R5bGU+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L1BhZ2VXcmFwcGVyPlxuXHQpO1xufVxuXG4vLyAjZTMwNjEzIGhlYWRlciBjb2xvclxuIl19 */\n/*@ sourceURL=/Users/karnell.schultz/Documents/javaScript/wok88Next/wok88next/src/pages/index.tsx */")));
} // #e30613 header color

/***/ })

})
//# sourceMappingURL=index.js.f5b276c6a41d3bddeb14.hot-update.js.map