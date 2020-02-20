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
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const interval = setInterval(() => {
      console.log('yoooo');
      setFoodImage(foodImage + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  function imageRotate() {
    let foodNumber = Math.floor(Math.random() * 9);
    return "http://www.wok88.se/foto/bild".concat(foodNumber, ".jpg");
  }

  return __jsx(_components_PageWrapper__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3058357043",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(_components_Nav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx(_components_Body__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3058357043",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-3058357043",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "\xD6ppettider"), __jsx("h4", {
    className: "jsx-3058357043",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "M\xE5ndag St\xE4ngt")), __jsx("img", {
    src: "http://www.wok88.se/foto/bild".concat(foodImage, ".jpg"),
    alt: "food stuff in this one",
    className: "jsx-3058357043",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3058357043",
    __self: this
  }, ".jsx-3058357043{background:gold;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYXJuZWxsLnNjaHVsdHovRG9jdW1lbnRzL2phdmFTY3JpcHQvd29rODhOZXh0L3dvazg4bmV4dC9zcmMvcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1DZ0IsQUFFc0IsZ0JBQ0gsMEVBQ1MsOEVBQ1YsWUFDYiIsImZpbGUiOiIvVXNlcnMva2FybmVsbC5zY2h1bHR6L0RvY3VtZW50cy9qYXZhU2NyaXB0L3dvazg4TmV4dC93b2s4OG5leHQvc3JjL3BhZ2VzL2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5hdiBmcm9tICcuLi9jb21wb25lbnRzL05hdic7XG5pbXBvcnQgQm9keSBmcm9tICcuLi9jb21wb25lbnRzL0JvZHknO1xuaW1wb3J0IFBhZ2VXcmFwcGVyIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnZVdyYXBwZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZSgpIHtcblx0Y29uc3QgW2Zvb2RJbWFnZSwgc2V0Rm9vZEltYWdlXSA9IHVzZVN0YXRlKDEpO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZygneW9vb28nKTtcblx0XHRcdHNldEZvb2RJbWFnZShmb29kSW1hZ2UgKyAxKTtcblx0XHR9LCAzMDAwKTtcblx0XHRyZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG5cdH0sIFtdKTtcblxuXHRmdW5jdGlvbiBpbWFnZVJvdGF0ZSgpOiBzdHJpbmcge1xuXHRcdGxldCBmb29kTnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSk7XG5cdFx0cmV0dXJuIGBodHRwOi8vd3d3Lndvazg4LnNlL2ZvdG8vYmlsZCR7Zm9vZE51bWJlcn0uanBnYDtcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PFBhZ2VXcmFwcGVyPlxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PE5hdiAvPlxuXHRcdFx0XHQ8Qm9keT5cblx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0PGgyPsOWcHBldHRpZGVyPC9oMj5cblx0XHRcdFx0XHRcdDxoND5Nw6VuZGFnIFN0w6RuZ3Q8L2g0PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdHNyYz17YGh0dHA6Ly93d3cud29rODguc2UvZm90by9iaWxkJHtmb29kSW1hZ2V9LmpwZ2B9XG5cdFx0XHRcdFx0XHRhbHQ9XCJmb29kIHN0dWZmIGluIHRoaXMgb25lXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L0JvZHk+XG5cdFx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBnb2xkO1xuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdFx0XHRtYXJnaW46IGF1dG87XG5cdFx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdDwvZGl2PlxuXHRcdDwvUGFnZVdyYXBwZXI+XG5cdCk7XG59XG5cbi8vICNlMzA2MTMgaGVhZGVyIGNvbG9yXG4iXX0= */\n/*@ sourceURL=/Users/karnell.schultz/Documents/javaScript/wok88Next/wok88next/src/pages/index.tsx */")));
} // #e30613 header color

/***/ })

})
//# sourceMappingURL=index.js.a5c3ee98c86ee7c8e3e5.hot-update.js.map