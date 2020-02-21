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
      lineNumber: 20
    },
    __self: this
  }), __jsx(_components_Body__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2222617888" + " " + "header-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-2222617888",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "\xD6ppettider"), __jsx("h4", {
    className: "jsx-2222617888",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "M\xE5ndag St\xE4ngt"), __jsx("h4", {
    className: "jsx-2222617888",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Tisdag - Fredag")), __jsx("img", {
    src: "http://www.wok88.se/foto/bild".concat(foodImage, ".jpg"),
    alt: "food stuff in this one",
    className: "jsx-2222617888",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2222617888",
    __self: this
  }, ".jsx-2222617888{background:gold;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:auto;}.header-content.jsx-2222617888{margin:2rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYXJuZWxsLnNjaHVsdHovRG9jdW1lbnRzL2phdmFTY3JpcHQvd29rODhOZXh0L3dvazg4bmV4dC9zcmMvcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCZSxBQUVxQixBQU1ILFlBQ2IsSUFOYSwwRUFDUyw4RUFDVixZQUtiIiwiZmlsZSI6Ii9Vc2Vycy9rYXJuZWxsLnNjaHVsdHovRG9jdW1lbnRzL2phdmFTY3JpcHQvd29rODhOZXh0L3dvazg4bmV4dC9zcmMvcGFnZXMvaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvTmF2JztcbmltcG9ydCBCb2R5IGZyb20gJy4uL2NvbXBvbmVudHMvQm9keSc7XG5pbXBvcnQgUGFnZVdyYXBwZXIgZnJvbSAnLi4vY29tcG9uZW50cy9QYWdlV3JhcHBlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKCkge1xuXHRjb25zdCBbZm9vZEltYWdlLCBzZXRGb29kSW1hZ2VdID0gdXNlU3RhdGUoMSk7XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKCd5b29vbycsIGZvb2RJbWFnZSk7XG5cdFx0XHRmb29kSW1hZ2UgPj0gOSA/IHNldEZvb2RJbWFnZSgxKSA6IHNldEZvb2RJbWFnZShmb29kSW1hZ2UgKyAxKTtcblx0XHR9LCAzMDAwKTtcblx0XHRyZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG5cdH0sIFtmb29kSW1hZ2VdKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxQYWdlV3JhcHBlcj5cblx0XHRcdHsvKiA8ZGl2PiAqL31cblx0XHRcdDxOYXYgLz5cblx0XHRcdDxCb2R5PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1jb250ZW50XCI+XG5cdFx0XHRcdFx0PGgxPsOWcHBldHRpZGVyPC9oMT5cblx0XHRcdFx0XHQ8aDQ+TcOlbmRhZyBTdMOkbmd0PC9oND5cblx0XHRcdFx0XHQ8aDQ+VGlzZGFnIC0gRnJlZGFnPC9oND5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRzcmM9e2BodHRwOi8vd3d3Lndvazg4LnNlL2ZvdG8vYmlsZCR7Zm9vZEltYWdlfS5qcGdgfVxuXHRcdFx0XHRcdGFsdD1cImZvb2Qgc3R1ZmYgaW4gdGhpcyBvbmVcIlxuXHRcdFx0XHQvPlxuXHRcdFx0PC9Cb2R5PlxuXHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHRiYWNrZ3JvdW5kOiBnb2xkO1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0XHRtYXJnaW46IGF1dG87XG5cblx0XHRcdFx0LmhlYWRlci1jb250ZW50IHtcblx0XHRcdFx0XHRtYXJnaW46IDJyZW07XG5cdFx0XHRcdH1cblx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdHsvKiA8L2Rpdj4gKi99XG5cdFx0PC9QYWdlV3JhcHBlcj5cblx0KTtcbn1cblxuLy8gI2UzMDYxMyBoZWFkZXIgY29sb3JcbiJdfQ== */\n/*@ sourceURL=/Users/karnell.schultz/Documents/javaScript/wok88Next/wok88next/src/pages/index.tsx */"));
} // #e30613 header color

/***/ })

})
//# sourceMappingURL=index.js.5dc79d4d70f8e4989bbb.hot-update.js.map