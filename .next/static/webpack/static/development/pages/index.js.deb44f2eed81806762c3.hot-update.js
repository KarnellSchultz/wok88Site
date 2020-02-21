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
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Nav */ "./src/components/Nav.tsx");
/* harmony import */ var _components_Body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Body */ "./src/components/Body.tsx");
/* harmony import */ var _components_PageWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PageWrapper */ "./src/components/PageWrapper.tsx");
var _jsxFileName = "/Users/karnell.schultz/Documents/javaScript/wok88Next/wok88next/src/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function HomePage() {
  const {
    0: foodImage,
    1: setFoodImage
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const interval = setInterval(() => {
      console.log('yoooo', foodImage);
      foodImage >= 9 ? setFoodImage(1) : setFoodImage(foodImage + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [foodImage]);
  return __jsx(_components_PageWrapper__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(_components_Nav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx(_components_Body__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1956498209" + " " + "header-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-1956498209",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "\xD6ppettider"), __jsx("h4", {
    className: "jsx-1956498209",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "M\xE5ndag St\xE4ngt"), __jsx("h4", {
    className: "jsx-1956498209",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Tisdag - Fredag")), __jsx("div", {
    className: "jsx-1956498209" + " " + "food-images",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("img", {
    src: "http://www.wok88.se/foto/bild".concat(foodImage, ".jpg"),
    alt: "food stuff in this one",
    className: "jsx-1956498209",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1956498209",
    __self: this
  }, ".jsx-1956498209{background:gold;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:auto;}.header-content.jsx-1956498209{margin:2rem;}.food-images.jsx-1956498209{margin:1.5rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYXJuZWxsLnNjaHVsdHovRG9jdW1lbnRzL2phdmFTY3JpcHQvd29rODhOZXh0L3dvazg4bmV4dC9zcmMvcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDZSxBQUVxQixBQU1ILEFBR0UsWUFGZixFQUdBLEVBVGEsMEVBQ1MsOEVBQ1YsWUFRYiIsImZpbGUiOiIvVXNlcnMva2FybmVsbC5zY2h1bHR6L0RvY3VtZW50cy9qYXZhU2NyaXB0L3dvazg4TmV4dC93b2s4OG5leHQvc3JjL3BhZ2VzL2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5hdiBmcm9tICcuLi9jb21wb25lbnRzL05hdic7XG5pbXBvcnQgQm9keSBmcm9tICcuLi9jb21wb25lbnRzL0JvZHknO1xuaW1wb3J0IFBhZ2VXcmFwcGVyIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnZVdyYXBwZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZSgpIHtcblx0Y29uc3QgW2Zvb2RJbWFnZSwgc2V0Rm9vZEltYWdlXSA9IHVzZVN0YXRlKDEpO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZygneW9vb28nLCBmb29kSW1hZ2UpO1xuXHRcdFx0Zm9vZEltYWdlID49IDkgPyBzZXRGb29kSW1hZ2UoMSkgOiBzZXRGb29kSW1hZ2UoZm9vZEltYWdlICsgMSk7XG5cdFx0fSwgMzAwMCk7XG5cdFx0cmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuXHR9LCBbZm9vZEltYWdlXSk7XG5cblx0cmV0dXJuIChcblx0XHQ8UGFnZVdyYXBwZXI+XG5cdFx0XHQ8TmF2IC8+XG5cdFx0XHQ8Qm9keT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoZWFkZXItY29udGVudFwiPlxuXHRcdFx0XHRcdDxoMT7DlnBwZXR0aWRlcjwvaDE+XG5cdFx0XHRcdFx0PGg0Pk3DpW5kYWcgU3TDpG5ndDwvaDQ+XG5cdFx0XHRcdFx0PGg0PlRpc2RhZyAtIEZyZWRhZzwvaDQ+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvb2QtaW1hZ2VzXCI+XG5cdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0c3JjPXtgaHR0cDovL3d3dy53b2s4OC5zZS9mb3RvL2JpbGQke2Zvb2RJbWFnZX0uanBnYH1cblx0XHRcdFx0XHRcdGFsdD1cImZvb2Qgc3R1ZmYgaW4gdGhpcyBvbmVcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9Cb2R5PlxuXHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHRiYWNrZ3JvdW5kOiBnb2xkO1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0XHRtYXJnaW46IGF1dG87XG5cblx0XHRcdFx0LmhlYWRlci1jb250ZW50IHtcblx0XHRcdFx0XHRtYXJnaW46IDJyZW07XG5cdFx0XHRcdH1cblx0XHRcdFx0LmZvb2QtaW1hZ2VzIHtcblx0XHRcdFx0XHRtYXJnaW46IDEuNXJlbTtcblx0XHRcdFx0fVxuXHRcdFx0YH08L3N0eWxlPlxuXHRcdDwvUGFnZVdyYXBwZXI+XG5cdCk7XG59XG5cbi8vICNlMzA2MTMgaGVhZGVyIGNvbG9yXG4iXX0= */\n/*@ sourceURL=/Users/karnell.schultz/Documents/javaScript/wok88Next/wok88next/src/pages/index.tsx */"));
} // #e30613 header color

/***/ })

})
//# sourceMappingURL=index.js.deb44f2eed81806762c3.hot-update.js.map