/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fabric */ \"./node_modules/fabric/dist/fabric.js\");\n/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/min/Documents/custom-canvas/src/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\nconst Index = () => {\n  _s();\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    fabric__WEBPACK_IMPORTED_MODULE_3__.fabric.Object.prototype.transparentCorners = false;\n  }, []);\n  const {\n    0: canvas,\n    1: getCanvas\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new fabric__WEBPACK_IMPORTED_MODULE_3__.fabric.Canvas('canvas', {\n    isDrawingMode: true\n  }));\n  const handleClear = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {\n    canvas.clear();\n  }, []);\n  const handleDrawLine = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {\n    if (fabric__WEBPACK_IMPORTED_MODULE_3__.fabric.PatternBrush) {\n      var vLinePatternBrush = new fabric__WEBPACK_IMPORTED_MODULE_3__.fabric.PatternBrush(canvas);\n    }\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: \"Canvas\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      id: 'clear',\n      onClick: handleClear,\n      children: \"Clear\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      onClick: handleDrawLine,\n      children: \"Line\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Canvas, {\n      id: 'canvas',\n      width: 1000,\n      height: 1000\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true);\n};\n\n_s(Index, \"0hrQEZNGP6UjNwJ3E4TOEfF/VuA=\");\n\n_c = Index;\nconst Canvas = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__.default.canvas`\n  border: 1px solid #000;\n`;\n_c2 = Canvas;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Index\");\n$RefreshReg$(_c2, \"Canvas\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sIm5hbWVzIjpbIkluZGV4IiwidXNlRWZmZWN0IiwiZmFicmljIiwiY2FudmFzIiwiZ2V0Q2FudmFzIiwidXNlU3RhdGUiLCJpc0RyYXdpbmdNb2RlIiwiaGFuZGxlQ2xlYXIiLCJ1c2VDYWxsYmFjayIsImNsZWFyIiwiaGFuZGxlRHJhd0xpbmUiLCJ2TGluZVBhdHRlcm5CcnVzaCIsIkNhbnZhcyIsInN0eWxlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLEtBQUssR0FBRyxNQUFNO0FBQUE7O0FBRWhCQyxrREFBUyxDQUFDLE1BQU07QUFDWkMsa0ZBQUEsR0FBNkMsS0FBN0M7QUFDSCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUEsUUFBTTtBQUFBLE9BQUNDLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCQywrQ0FBUSxDQUFDLElBQUlILGlEQUFKLENBQWtCLFFBQWxCLEVBQTRCO0FBQzdESSxpQkFBYSxFQUFFO0FBRDhDLEdBQTVCLENBQUQsQ0FBcEM7QUFJQSxRQUFNQyxXQUFXLEdBQUdDLGtEQUFXLENBQUMsTUFBTTtBQUNsQ0wsVUFBTSxDQUFDTSxLQUFQO0FBQ0gsR0FGOEIsRUFFNUIsRUFGNEIsQ0FBL0I7QUFJQSxRQUFNQyxjQUFjLEdBQUdGLGtEQUFXLENBQUMsTUFBTTtBQUNyQyxRQUFHTix1REFBSCxFQUF3QjtBQUFDLFVBQUlTLGlCQUFpQixHQUFHLElBQUlULHVEQUFKLENBQXdCQyxNQUF4QixDQUF4QjtBQUN4QjtBQUNKLEdBSGlDLEVBRy9CLEVBSCtCLENBQWxDO0FBTUEsc0JBQ0k7QUFBQSw0QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJO0FBQVEsUUFBRSxFQUFFLE9BQVo7QUFBcUIsYUFBTyxFQUFFSSxXQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSixlQUdJO0FBQVEsYUFBTyxFQUFFRyxjQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFISixlQUlJLDhEQUFDLE1BQUQ7QUFBUSxRQUFFLEVBQUUsUUFBWjtBQUFzQixXQUFLLEVBQUUsSUFBN0I7QUFBbUMsWUFBTSxFQUFFO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSko7QUFBQSxrQkFESjtBQVFILENBNUJEOztHQUFNVixLOztLQUFBQSxLO0FBOEJOLE1BQU1ZLE1BQU0sR0FBR0MsMkRBQWM7QUFDN0I7QUFDQSxDQUZBO01BQU1ELE07QUFJTiwrREFBZVosS0FBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7ZmFicmljfSBmcm9tICdmYWJyaWMnXG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZmFicmljLk9iamVjdC5wcm90b3R5cGUudHJhbnNwYXJlbnRDb3JuZXJzID0gZmFsc2VcbiAgICB9LCBbXSlcblxuICAgIGNvbnN0IFtjYW52YXMsIGdldENhbnZhc10gPSB1c2VTdGF0ZShuZXcgZmFicmljLkNhbnZhcygnY2FudmFzJywge1xuICAgICAgICBpc0RyYXdpbmdNb2RlOiB0cnVlXG4gICAgfSkpXG5cbiAgICBjb25zdCBoYW5kbGVDbGVhciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgY2FudmFzLmNsZWFyKClcbiAgICB9LCBbXSlcblxuICAgIGNvbnN0IGhhbmRsZURyYXdMaW5lID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBpZihmYWJyaWMuUGF0dGVybkJydXNoKSB7dmFyIHZMaW5lUGF0dGVybkJydXNoID0gbmV3IGZhYnJpYy5QYXR0ZXJuQnJ1c2goY2FudmFzKTtcbiAgICAgICAgfVxuICAgIH0sIFtdKVxuICAgIFxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxoMT5DYW52YXM8L2gxPlxuICAgICAgICAgICAgPGJ1dHRvbiBpZD17J2NsZWFyJ30gb25DbGljaz17aGFuZGxlQ2xlYXJ9PkNsZWFyPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZURyYXdMaW5lfT5MaW5lPC9idXR0b24+XG4gICAgICAgICAgICA8Q2FudmFzIGlkPXsnY2FudmFzJ30gd2lkdGg9ezEwMDB9IGhlaWdodD17MTAwMH0vPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmNvbnN0IENhbnZhcyA9IHN0eWxlZC5jYW52YXNgXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG5gXG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

});