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
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const interval = setInterval(() => {
      console.log('yoooo', foodImage);
      setFoodImage(foodImage + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [foodImage]);

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
  }, ".jsx-3058357043{background:gold;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYXJuZWxsLnNjaHVsdHovRG9jdW1lbnRzL2phdmFTY3JpcHQvd29rODhOZXh0L3dvazg4bmV4dC9zcmMvcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1DZ0IsQUFFc0IsZ0JBQ0gsMEVBQ1MsOEVBQ1YsWUFDYiIsImZpbGUiOiIvVXNlcnMva2FybmVsbC5zY2h1bHR6L0RvY3VtZW50cy9qYXZhU2NyaXB0L3dvazg4TmV4dC93b2s4OG5leHQvc3JjL3BhZ2VzL2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5hdiBmcm9tICcuLi9jb21wb25lbnRzL05hdic7XG5pbXBvcnQgQm9keSBmcm9tICcuLi9jb21wb25lbnRzL0JvZHknO1xuaW1wb3J0IFBhZ2VXcmFwcGVyIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnZVdyYXBwZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZSgpIHtcblx0Y29uc3QgW2Zvb2RJbWFnZSwgc2V0Rm9vZEltYWdlXSA9IHVzZVN0YXRlKDApO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZygneW9vb28nLCBmb29kSW1hZ2UpO1xuXHRcdFx0c2V0Rm9vZEltYWdlKGZvb2RJbWFnZSArIDEpO1xuXHRcdH0sIDMwMDApO1xuXHRcdHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcblx0fSwgW2Zvb2RJbWFnZV0pO1xuXG5cdGZ1bmN0aW9uIGltYWdlUm90YXRlKCk6IHN0cmluZyB7XG5cdFx0bGV0IGZvb2ROdW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KTtcblx0XHRyZXR1cm4gYGh0dHA6Ly93d3cud29rODguc2UvZm90by9iaWxkJHtmb29kTnVtYmVyfS5qcGdgO1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8UGFnZVdyYXBwZXI+XG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8TmF2IC8+XG5cdFx0XHRcdDxCb2R5PlxuXHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHQ8aDI+w5ZwcGV0dGlkZXI8L2gyPlxuXHRcdFx0XHRcdFx0PGg0Pk3DpW5kYWcgU3TDpG5ndDwvaDQ+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0c3JjPXtgaHR0cDovL3d3dy53b2s4OC5zZS9mb3RvL2JpbGQke2Zvb2RJbWFnZX0uanBnYH1cblx0XHRcdFx0XHRcdGFsdD1cImZvb2Qgc3R1ZmYgaW4gdGhpcyBvbmVcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvQm9keT5cblx0XHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHRcdGJhY2tncm91bmQ6IGdvbGQ7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0XHRcdG1hcmdpbjogYXV0bztcblx0XHRcdFx0YH08L3N0eWxlPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9QYWdlV3JhcHBlcj5cblx0KTtcbn1cblxuLy8gI2UzMDYxMyBoZWFkZXIgY29sb3JcbiJdfQ== */\n/*@ sourceURL=/Users/karnell.schultz/Documents/javaScript/wok88Next/wok88next/src/pages/index.tsx */")));
} // #e30613 header color

/***/ })

})
//# sourceMappingURL=index.js.f588e83cde7bb09bd456.hot-update.js.map