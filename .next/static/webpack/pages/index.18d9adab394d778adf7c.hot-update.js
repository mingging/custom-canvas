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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fabric */ \"./node_modules/fabric/dist/fabric.js\");\n/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/min/Documents/custom-canvas/src/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\nconst Index = () => {\n  _s();\n\n  const {\n    0: canvas,\n    1: getCanvas\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new fabric__WEBPACK_IMPORTED_MODULE_3__.fabric.Canvas('canvas', {\n    isDrawingMode: true\n  }));\n  const handleClear = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {\n    canvas.clear();\n  }, []);\n  const handleDrawLine = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {\n    if (fabric__WEBPACK_IMPORTED_MODULE_3__.fabric.PatternBrush) {\n      const vLinePatternBrush = new fabric__WEBPACK_IMPORTED_MODULE_3__.fabric.PatternBrush();\n    }\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {}, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: \"Canvas\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      id: 'clear',\n      onClick: handleClear,\n      children: \"Clear\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      onClick: handleDrawLine,\n      children: \"Line\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Canvas, {\n      id: 'canvas',\n      width: 1000,\n      height: 1000\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true);\n};\n\n_s(Index, \"sobzzqkkQi/Brb6Br9JpqWRKqLw=\");\n\n_c = Index;\nconst Canvas = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__.default.canvas`\n  border: 1px solid #000;\n`;\n_c2 = Canvas;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Index\");\n$RefreshReg$(_c2, \"Canvas\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sIm5hbWVzIjpbIkluZGV4IiwiY2FudmFzIiwiZ2V0Q2FudmFzIiwidXNlU3RhdGUiLCJmYWJyaWMiLCJpc0RyYXdpbmdNb2RlIiwiaGFuZGxlQ2xlYXIiLCJ1c2VDYWxsYmFjayIsImNsZWFyIiwiaGFuZGxlRHJhd0xpbmUiLCJ2TGluZVBhdHRlcm5CcnVzaCIsInVzZUVmZmVjdCIsIkNhbnZhcyIsInN0eWxlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLEtBQUssR0FBRyxNQUFNO0FBQUE7O0FBRWhCLFFBQU07QUFBQSxPQUFDQyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQkMsK0NBQVEsQ0FBQyxJQUFJQyxpREFBSixDQUFrQixRQUFsQixFQUE0QjtBQUM3REMsaUJBQWEsRUFBRTtBQUQ4QyxHQUE1QixDQUFELENBQXBDO0FBSUEsUUFBTUMsV0FBVyxHQUFHQyxrREFBVyxDQUFDLE1BQU07QUFDbENOLFVBQU0sQ0FBQ08sS0FBUDtBQUNILEdBRjhCLEVBRTVCLEVBRjRCLENBQS9CO0FBSUEsUUFBTUMsY0FBYyxHQUFHRixrREFBVyxDQUFDLE1BQU07QUFDckMsUUFBR0gsdURBQUgsRUFBd0I7QUFDcEIsWUFBTU0saUJBQWlCLEdBQUcsSUFBSU4sdURBQUosRUFBMUI7QUFDSDtBQUNKLEdBSmlDLEVBSS9CLEVBSitCLENBQWxDO0FBT0FPLGtEQUFTLENBQUMsTUFBTSxDQUVmLENBRlEsRUFFTixFQUZNLENBQVQ7QUFJQSxzQkFDSTtBQUFBLDRCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBUSxRQUFFLEVBQUUsT0FBWjtBQUFxQixhQUFPLEVBQUVMLFdBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLGVBR0k7QUFBUSxhQUFPLEVBQUVHLGNBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhKLGVBSUksOERBQUMsTUFBRDtBQUFRLFFBQUUsRUFBRSxRQUFaO0FBQXNCLFdBQUssRUFBRSxJQUE3QjtBQUFtQyxZQUFNLEVBQUU7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKSjtBQUFBLGtCQURKO0FBUUgsQ0E3QkQ7O0dBQU1ULEs7O0tBQUFBLEs7QUErQk4sTUFBTVksTUFBTSxHQUFHQywyREFBYztBQUM3QjtBQUNBLENBRkE7TUFBTUQsTTtBQUlOLCtEQUFlWixLQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHtmYWJyaWN9IGZyb20gJ2ZhYnJpYydcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG5cbiAgICBjb25zdCBbY2FudmFzLCBnZXRDYW52YXNdID0gdXNlU3RhdGUobmV3IGZhYnJpYy5DYW52YXMoJ2NhbnZhcycsIHtcbiAgICAgICAgaXNEcmF3aW5nTW9kZTogdHJ1ZVxuICAgIH0pKVxuXG4gICAgY29uc3QgaGFuZGxlQ2xlYXIgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGNhbnZhcy5jbGVhcigpXG4gICAgfSwgW10pXG5cbiAgICBjb25zdCBoYW5kbGVEcmF3TGluZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgaWYoZmFicmljLlBhdHRlcm5CcnVzaCkge1xuICAgICAgICAgICAgY29uc3QgdkxpbmVQYXR0ZXJuQnJ1c2ggPSBuZXcgZmFicmljLlBhdHRlcm5CcnVzaCgpXG4gICAgICAgIH1cbiAgICB9LCBbXSlcblxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcblxuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxoMT5DYW52YXM8L2gxPlxuICAgICAgICAgICAgPGJ1dHRvbiBpZD17J2NsZWFyJ30gb25DbGljaz17aGFuZGxlQ2xlYXJ9PkNsZWFyPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZURyYXdMaW5lfT5MaW5lPC9idXR0b24+XG4gICAgICAgICAgICA8Q2FudmFzIGlkPXsnY2FudmFzJ30gd2lkdGg9ezEwMDB9IGhlaWdodD17MTAwMH0vPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmNvbnN0IENhbnZhcyA9IHN0eWxlZC5jYW52YXNgXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG5gXG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

});