(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/lunchmenu.js"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Flunchmenu&absolutePagePath=%2FUsers%2Fkarnell.schultz%2FDocuments%2FjavaScript%2Fwok88Next%2Fwok88next%2Fsrc%2Fpages%2Flunchmenu.js!./":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Flunchmenu&absolutePagePath=%2FUsers%2Fkarnell.schultz%2FDocuments%2FjavaScript%2Fwok88Next%2Fwok88next%2Fsrc%2Fpages%2Flunchmenu.js ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/lunchmenu", function() {
      var mod = __webpack_require__(/*! ./src/pages/lunchmenu.js */ "./src/pages/lunchmenu.js")
      if(true) {
        module.hot.accept(/*! ./src/pages/lunchmenu.js */ "./src/pages/lunchmenu.js", function() {
          if(!next.router.components["/lunchmenu"]) return
          var updatedPage = __webpack_require__(/*! ./src/pages/lunchmenu.js */ "./src/pages/lunchmenu.js")
          next.router.update("/lunchmenu", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_ef0ff7c60362f24a921f ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_ef0ff7c60362f24a921f */ "dll-reference dll_ef0ff7c60362f24a921f"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;
exports["default"] = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = typeof process !== 'undefined' && process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#" + name + "-deleted-rule____{}";
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  var _proto = StyleSheet.prototype;

  _proto.setOptimizeForSpeed = function setOptimizeForSpeed(bool) {
    invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
    invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
    this.flush();
    this._optimizeForSpeed = bool;
    this.inject();
  };

  _proto.isOptimizeForSpeed = function isOptimizeForSpeed() {
    return this._optimizeForSpeed;
  };

  _proto.inject = function inject() {
    var _this = this;

    invariant(!this._injected, 'sheet already injected');
    this._injected = true;

    if (this._isBrowser && this._optimizeForSpeed) {
      this._tags[0] = this.makeStyleTag(this._name);
      this._optimizeForSpeed = 'insertRule' in this.getSheet();

      if (!this._optimizeForSpeed) {
        if (!isProd) {
          console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
        }

        this.flush();
        this._injected = true;
      }

      return;
    }

    this._serverSheet = {
      cssRules: [],
      insertRule: function insertRule(rule, index) {
        if (typeof index === 'number') {
          _this._serverSheet.cssRules[index] = {
            cssText: rule
          };
        } else {
          _this._serverSheet.cssRules.push({
            cssText: rule
          });
        }

        return index;
      },
      deleteRule: function deleteRule(index) {
        _this._serverSheet.cssRules[index] = null;
      }
    };
  };

  _proto.getSheetForTag = function getSheetForTag(tag) {
    if (tag.sheet) {
      return tag.sheet;
    } // this weirdness brought to you by firefox


    for (var i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].ownerNode === tag) {
        return document.styleSheets[i];
      }
    }
  };

  _proto.getSheet = function getSheet() {
    return this.getSheetForTag(this._tags[this._tags.length - 1]);
  };

  _proto.insertRule = function insertRule(rule, index) {
    invariant(isString(rule), '`insertRule` accepts only strings');

    if (!this._isBrowser) {
      if (typeof index !== 'number') {
        index = this._serverSheet.cssRules.length;
      }

      this._serverSheet.insertRule(rule, index);

      return this._rulesCount++;
    }

    if (this._optimizeForSpeed) {
      var sheet = this.getSheet();

      if (typeof index !== 'number') {
        index = sheet.cssRules.length;
      } // this weirdness for perf, and chrome's weird bug
      // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        }

        return -1;
      }
    } else {
      var insertionPoint = this._tags[index];

      this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
    }

    return this._rulesCount++;
  };

  _proto.replaceRule = function replaceRule(index, rule) {
    if (this._optimizeForSpeed || !this._isBrowser) {
      var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

      if (!rule.trim()) {
        rule = this._deletedRulePlaceholder;
      }

      if (!sheet.cssRules[index]) {
        // @TBD Should we throw an error?
        return index;
      }

      sheet.deleteRule(index);

      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        } // In order to preserve the indices we insert a deleteRulePlaceholder


        sheet.insertRule(this._deletedRulePlaceholder, index);
      }
    } else {
      var tag = this._tags[index];
      invariant(tag, "old rule at index `" + index + "` not found");
      tag.textContent = rule;
    }

    return index;
  };

  _proto.deleteRule = function deleteRule(index) {
    if (!this._isBrowser) {
      this._serverSheet.deleteRule(index);

      return;
    }

    if (this._optimizeForSpeed) {
      this.replaceRule(index, '');
    } else {
      var tag = this._tags[index];
      invariant(tag, "rule at index `" + index + "` not found");
      tag.parentNode.removeChild(tag);
      this._tags[index] = null;
    }
  };

  _proto.flush = function flush() {
    this._injected = false;
    this._rulesCount = 0;

    if (this._isBrowser) {
      this._tags.forEach(function (tag) {
        return tag && tag.parentNode.removeChild(tag);
      });

      this._tags = [];
    } else {
      // simpler on server
      this._serverSheet.cssRules = [];
    }
  };

  _proto.cssRules = function cssRules() {
    var _this2 = this;

    if (!this._isBrowser) {
      return this._serverSheet.cssRules;
    }

    return this._tags.reduce(function (rules, tag) {
      if (tag) {
        rules = rules.concat(Array.prototype.map.call(_this2.getSheetForTag(tag).cssRules, function (rule) {
          return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
        }));
      } else {
        rules.push(null);
      }

      return rules;
    }, []);
  };

  _proto.makeStyleTag = function makeStyleTag(name, cssString, relativeToTag) {
    if (cssString) {
      invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
    }

    var tag = document.createElement('style');
    if (this._nonce) tag.setAttribute('nonce', this._nonce);
    tag.type = 'text/css';
    tag.setAttribute("data-" + name, '');

    if (cssString) {
      tag.appendChild(document.createTextNode(cssString));
    }

    var head = document.head || document.getElementsByTagName('head')[0];

    if (relativeToTag) {
      head.insertBefore(tag, relativeToTag);
    } else {
      head.appendChild(tag);
    }

    return tag;
  };

  _createClass(StyleSheet, [{
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports["default"] = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: " + message + ".");
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.flush = flush;
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var styleSheetRegistry = new _stylesheetRegistry["default"]();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.prevProps = {};
    return _this;
  }

  JSXStyle.dynamic = function dynamic(info) {
    return info.map(function (tagInfo) {
      var baseId = tagInfo[0];
      var props = tagInfo[1];
      return styleSheetRegistry.computeId(baseId, props);
    }).join(' ');
  } // probably faster than PureComponent (shallowEqual)
  ;

  var _proto = JSXStyle.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(otherProps) {
    return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
    // These are the computed values for dynamic styles.
    String(this.props.dynamic) !== String(otherProps.dynamic);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    styleSheetRegistry.remove(this.props);
  };

  _proto.render = function render() {
    // This is a workaround to make the side effect async safe in the "render" phase.
    // See https://github.com/zeit/styled-jsx/pull/484
    if (this.shouldComponentUpdate(this.prevProps)) {
      // Updates
      if (this.prevProps.id) {
        styleSheetRegistry.remove(this.prevProps);
      }

      styleSheetRegistry.add(this.props);
      this.prevProps = this.props;
    }

    return null;
  };

  return JSXStyle;
}(_react.Component);

exports["default"] = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    this._sheet = styleSheet || new _stylesheet["default"]({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  var _proto = StyleSheetRegistry.prototype;

  _proto.add = function add(props) {
    var _this = this;

    if (undefined === this._optimizeForSpeed) {
      this._optimizeForSpeed = Array.isArray(props.children);

      this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    if (this._isBrowser && !this._fromServer) {
      this._fromServer = this.selectFromServer();
      this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
        acc[tagName] = 0;
        return acc;
      }, {});
    }

    var _this$getIdAndRules = this.getIdAndRules(props),
        styleId = _this$getIdAndRules.styleId,
        rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


    if (styleId in this._instancesCounts) {
      this._instancesCounts[styleId] += 1;
      return;
    }

    var indices = rules.map(function (rule) {
      return _this._sheet.insertRule(rule);
    }) // Filter out invalid rules
    .filter(function (index) {
      return index !== -1;
    });
    this._indices[styleId] = indices;
    this._instancesCounts[styleId] = 1;
  };

  _proto.remove = function remove(props) {
    var _this2 = this;

    var _this$getIdAndRules2 = this.getIdAndRules(props),
        styleId = _this$getIdAndRules2.styleId;

    invariant(styleId in this._instancesCounts, "styleId: `" + styleId + "` not found");
    this._instancesCounts[styleId] -= 1;

    if (this._instancesCounts[styleId] < 1) {
      var tagFromServer = this._fromServer && this._fromServer[styleId];

      if (tagFromServer) {
        tagFromServer.parentNode.removeChild(tagFromServer);
        delete this._fromServer[styleId];
      } else {
        this._indices[styleId].forEach(function (index) {
          return _this2._sheet.deleteRule(index);
        });

        delete this._indices[styleId];
      }

      delete this._instancesCounts[styleId];
    }
  };

  _proto.update = function update(props, nextProps) {
    this.add(nextProps);
    this.remove(props);
  };

  _proto.flush = function flush() {
    this._sheet.flush();

    this._sheet.inject();

    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  };

  _proto.cssRules = function cssRules() {
    var _this3 = this;

    var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
      return [styleId, _this3._fromServer[styleId]];
    }) : [];

    var cssRules = this._sheet.cssRules();

    return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
      return [styleId, _this3._indices[styleId].map(function (index) {
        return cssRules[index].cssText;
      }).join(_this3._optimizeForSpeed ? '' : '\n')];
    }) // filter out empty rules
    .filter(function (rule) {
      return Boolean(rule[1]);
    }));
  }
  /**
   * createComputeId
   *
   * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
   */
  ;

  _proto.createComputeId = function createComputeId() {
    var cache = {};
    return function (baseId, props) {
      if (!props) {
        return "jsx-" + baseId;
      }

      var propsToString = String(props);
      var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

      if (!cache[key]) {
        cache[key] = "jsx-" + (0, _stringHash["default"])(baseId + "-" + propsToString);
      }

      return cache[key];
    };
  }
  /**
   * createComputeSelector
   *
   * Creates a function to compute and memoize dynamic selectors.
   */
  ;

  _proto.createComputeSelector = function createComputeSelector(selectoPlaceholderRegexp) {
    if (selectoPlaceholderRegexp === void 0) {
      selectoPlaceholderRegexp = /__jsx-style-dynamic-selector/g;
    }

    var cache = {};
    return function (id, css) {
      // Sanitize SSR-ed CSS.
      // Client side code doesn't need to be sanitized since we use
      // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
      if (!this._isBrowser) {
        css = sanitize(css);
      }

      var idcss = id + css;

      if (!cache[idcss]) {
        cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
      }

      return cache[idcss];
    };
  };

  _proto.getIdAndRules = function getIdAndRules(props) {
    var _this4 = this;

    var css = props.children,
        dynamic = props.dynamic,
        id = props.id;

    if (dynamic) {
      var styleId = this.computeId(id, dynamic);
      return {
        styleId: styleId,
        rules: Array.isArray(css) ? css.map(function (rule) {
          return _this4.computeSelector(styleId, rule);
        }) : [this.computeSelector(styleId, css)]
      };
    }

    return {
      styleId: this.computeId(id),
      rules: Array.isArray(css) ? css : [css]
    };
  }
  /**
   * selectFromServer
   *
   * Collects style tags from the document with id __jsx-XXX
   */
  ;

  _proto.selectFromServer = function selectFromServer() {
    var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
    return elements.reduce(function (acc, element) {
      var id = element.id.slice(2);
      acc[id] = element;
      return acc;
    }, {});
  };

  return StyleSheetRegistry;
}();

exports["default"] = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: " + message + ".");
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./src/components/Body.js":
/*!********************************!*\
  !*** ./src/components/Body.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Body; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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

/***/ "./src/pages/lunchmenu.js":
/*!********************************!*\
  !*** ./src/pages/lunchmenu.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LunchMenu; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_PageWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PageWrapper */ "./src/components/PageWrapper.js");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Nav */ "./src/components/Nav.js");
/* harmony import */ var _components_Body__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Body */ "./src/components/Body.js");
var _jsxFileName = "/Users/karnell.schultz/Documents/javaScript/wok88Next/wok88next/src/pages/lunchmenu.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function LunchMenu() {
  return __jsx(_components_PageWrapper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(_components_Nav__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), __jsx(_components_Body__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2703553901",
    __self: this
  }, ".jsx-398473989{background:green;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYXJuZWxsLnNjaHVsdHovRG9jdW1lbnRzL2phdmFTY3JpcHQvd29rODhOZXh0L3dvazg4bmV4dC9zcmMvcGFnZXMvbHVuY2htZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVlLEFBRXNCLGlCQUNKLDBFQUNTLDhFQUNWLFlBQ2IiLCJmaWxlIjoiL1VzZXJzL2thcm5lbGwuc2NodWx0ei9Eb2N1bWVudHMvamF2YVNjcmlwdC93b2s4OE5leHQvd29rODhuZXh0L3NyYy9wYWdlcy9sdW5jaG1lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBhZ2VXcmFwcGVyIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnZVdyYXBwZXInO1xuaW1wb3J0IE5hdiBmcm9tICcuLi9jb21wb25lbnRzL05hdic7XG5pbXBvcnQgQm9keSBmcm9tICcuLi9jb21wb25lbnRzL0JvZHknO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMdW5jaE1lbnUoKSB7XG5cdHJldHVybiAoXG5cdFx0PFBhZ2VXcmFwcGVyPlxuXHRcdFx0PE5hdiAvPlxuXHRcdFx0PEJvZHkgLz5cblx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0YmFja2dyb3VuZDogZ3JlZW47XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRcdG1hcmdpbjogYXV0bztcblx0XHRcdGB9PC9zdHlsZT5cblxuXHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHRwIHtcblx0XHRcdFx0XHRjb2xvcjogYmx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRkaXYge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6IGdvbGRlbnJvZDtcblx0XHRcdFx0fVxuXHRcdFx0XHRAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcblx0XHRcdFx0XHRkaXYge1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogYmx1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdDxzdHlsZSBnbG9iYWwganN4PntgXG5cdFx0XHRcdGJvZHkge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmZmZmZjA7XG5cdFx0XHRcdH1cblx0XHRcdGB9PC9zdHlsZT5cblx0XHQ8L1BhZ2VXcmFwcGVyPlxuXHQpO1xufVxuIl19 */\n/*@ sourceURL=/Users/karnell.schultz/Documents/javaScript/wok88Next/wok88next/src/pages/lunchmenu.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "134255278",
    __self: this
  }, "p.jsx-398473989{color:blue;}div.jsx-398473989{background:goldenrod;}@media (max-width:600px){div.jsx-398473989{background:blue;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYXJuZWxsLnNjaHVsdHovRG9jdW1lbnRzL2phdmFTY3JpcHQvd29rODhOZXh0L3dvazg4bmV4dC9zcmMvcGFnZXMvbHVuY2htZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCZSxBQUdpQixBQUdVLEFBSUosV0FObEIsS0FPQyxLQUpEIiwiZmlsZSI6Ii9Vc2Vycy9rYXJuZWxsLnNjaHVsdHovRG9jdW1lbnRzL2phdmFTY3JpcHQvd29rODhOZXh0L3dvazg4bmV4dC9zcmMvcGFnZXMvbHVuY2htZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQYWdlV3JhcHBlciBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2VXcmFwcGVyJztcbmltcG9ydCBOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9OYXYnO1xuaW1wb3J0IEJvZHkgZnJvbSAnLi4vY29tcG9uZW50cy9Cb2R5JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTHVuY2hNZW51KCkge1xuXHRyZXR1cm4gKFxuXHRcdDxQYWdlV3JhcHBlcj5cblx0XHRcdDxOYXYgLz5cblx0XHRcdDxCb2R5IC8+XG5cdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdGJhY2tncm91bmQ6IGdyZWVuO1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0XHRtYXJnaW46IGF1dG87XG5cdFx0XHRgfTwvc3R5bGU+XG5cblx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0cCB7XG5cdFx0XHRcdFx0Y29sb3I6IGJsdWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZGl2IHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBnb2xkZW5yb2Q7XG5cdFx0XHRcdH1cblx0XHRcdFx0QG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG5cdFx0XHRcdFx0ZGl2IHtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IGJsdWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRgfTwvc3R5bGU+XG5cdFx0XHQ8c3R5bGUgZ2xvYmFsIGpzeD57YFxuXHRcdFx0XHRib2R5IHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmZmZmYwO1xuXHRcdFx0XHR9XG5cdFx0XHRgfTwvc3R5bGU+XG5cdFx0PC9QYWdlV3JhcHBlcj5cblx0KTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/karnell.schultz/Documents/javaScript/wok88Next/wok88next/src/pages/lunchmenu.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "248257894",
    __self: this
  }, "body{background:#fffff0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYXJuZWxsLnNjaHVsdHovRG9jdW1lbnRzL2phdmFTY3JpcHQvd29rODhOZXh0L3dvazg4bmV4dC9zcmMvcGFnZXMvbHVuY2htZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThCc0IsQUFHeUIsbUJBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9rYXJuZWxsLnNjaHVsdHovRG9jdW1lbnRzL2phdmFTY3JpcHQvd29rODhOZXh0L3dvazg4bmV4dC9zcmMvcGFnZXMvbHVuY2htZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQYWdlV3JhcHBlciBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2VXcmFwcGVyJztcbmltcG9ydCBOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9OYXYnO1xuaW1wb3J0IEJvZHkgZnJvbSAnLi4vY29tcG9uZW50cy9Cb2R5JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTHVuY2hNZW51KCkge1xuXHRyZXR1cm4gKFxuXHRcdDxQYWdlV3JhcHBlcj5cblx0XHRcdDxOYXYgLz5cblx0XHRcdDxCb2R5IC8+XG5cdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdGJhY2tncm91bmQ6IGdyZWVuO1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0XHRtYXJnaW46IGF1dG87XG5cdFx0XHRgfTwvc3R5bGU+XG5cblx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0cCB7XG5cdFx0XHRcdFx0Y29sb3I6IGJsdWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZGl2IHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBnb2xkZW5yb2Q7XG5cdFx0XHRcdH1cblx0XHRcdFx0QG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG5cdFx0XHRcdFx0ZGl2IHtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IGJsdWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRgfTwvc3R5bGU+XG5cdFx0XHQ8c3R5bGUgZ2xvYmFsIGpzeD57YFxuXHRcdFx0XHRib2R5IHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmZmZmYwO1xuXHRcdFx0XHR9XG5cdFx0XHRgfTwvc3R5bGU+XG5cdFx0PC9QYWdlV3JhcHBlcj5cblx0KTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/karnell.schultz/Documents/javaScript/wok88Next/wok88next/src/pages/lunchmenu.js */"));
}

/***/ }),

/***/ 3:
/*!**********************************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Flunchmenu&absolutePagePath=%2FUsers%2Fkarnell.schultz%2FDocuments%2FjavaScript%2Fwok88Next%2Fwok88next%2Fsrc%2Fpages%2Flunchmenu.js ***!
  \**********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Flunchmenu&absolutePagePath=%2FUsers%2Fkarnell.schultz%2FDocuments%2FjavaScript%2Fwok88Next%2Fwok88next%2Fsrc%2Fpages%2Flunchmenu.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Flunchmenu&absolutePagePath=%2FUsers%2Fkarnell.schultz%2FDocuments%2FjavaScript%2Fwok88Next%2Fwok88next%2Fsrc%2Fpages%2Flunchmenu.js!./");


/***/ }),

/***/ "dll-reference dll_ef0ff7c60362f24a921f":
/*!*******************************************!*\
  !*** external "dll_ef0ff7c60362f24a921f" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_ef0ff7c60362f24a921f;

/***/ })

},[[3,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=lunchmenu.js.map