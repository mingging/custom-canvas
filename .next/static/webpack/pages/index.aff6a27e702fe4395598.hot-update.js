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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fabric */ \"./node_modules/fabric/dist/fabric.js\");\n/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/min/Documents/custom-canvas/src/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\nconst Index = () => {\n  _s();\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    fabric__WEBPACK_IMPORTED_MODULE_3__.fabric.Object.prototype.transparentCorners = false;\n  }, []);\n  const canvas = new fabric__WEBPACK_IMPORTED_MODULE_3__.fabric.Canvas('draw', {\n    isDrawingMode: true,\n    freeDrawingCursor: 'none'\n  }); // const cursor = new fabric.StaticCanvas(\"cursor\");\n\n  canvas.freeDrawingBrush.width = 20;\n  canvas.freeDrawingBrush.color = '#ff0000';\n  const handleClear = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {\n    canvas.clear();\n  }, []); // const handleDrawLine = useCallback(() => {\n  //     const brush = new fabric.BaseBrush( )\n  //     brush.color = '#000'\n  //     canvas.add(brush)\n  // }, [])\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: \"Canvas\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      id: 'clear',\n      onClick: handleClear,\n      children: \"Clear\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Canvas, {\n      id: 'draw',\n      width: 1000,\n      height: 1000\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 9\n  }, undefined);\n};\n\n_s(Index, \"HFX5wWRnx2hq1L68lFWcXXp0U3Q=\");\n\n_c = Index;\nconst Canvas = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__.default.canvas`\n  border: 1px solid #000;\n`;\n_c2 = Canvas;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Index\");\n$RefreshReg$(_c2, \"Canvas\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sIm5hbWVzIjpbIkluZGV4IiwidXNlRWZmZWN0IiwiZmFicmljIiwiY2FudmFzIiwiaXNEcmF3aW5nTW9kZSIsImZyZWVEcmF3aW5nQ3Vyc29yIiwiZnJlZURyYXdpbmdCcnVzaCIsIndpZHRoIiwiY29sb3IiLCJoYW5kbGVDbGVhciIsInVzZUNhbGxiYWNrIiwiY2xlYXIiLCJDYW52YXMiLCJzdHlsZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLEtBQUssR0FBRyxNQUFNO0FBQUE7O0FBRWhCQyxrREFBUyxDQUFDLE1BQU07QUFDWkMsa0ZBQUEsR0FBNkMsS0FBN0M7QUFDSCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUEsUUFBTUMsTUFBTSxHQUFHLElBQUlELGlEQUFKLENBQWtCLE1BQWxCLEVBQTBCO0FBQ3JDRSxpQkFBYSxFQUFFLElBRHNCO0FBRXJDQyxxQkFBaUIsRUFBRTtBQUZrQixHQUExQixDQUFmLENBTmdCLENBVWhCOztBQUNBRixRQUFNLENBQUNHLGdCQUFQLENBQXdCQyxLQUF4QixHQUFnQyxFQUFoQztBQUNBSixRQUFNLENBQUNHLGdCQUFQLENBQXdCRSxLQUF4QixHQUFnQyxTQUFoQztBQUtBLFFBQU1DLFdBQVcsR0FBR0Msa0RBQVcsQ0FBQyxNQUFNO0FBQ2xDUCxVQUFNLENBQUNRLEtBQVA7QUFDSCxHQUY4QixFQUU1QixFQUY0QixDQUEvQixDQWpCZ0IsQ0FxQmhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0Esc0JBQ0k7QUFBQSw0QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJO0FBQVEsUUFBRSxFQUFFLE9BQVo7QUFBcUIsYUFBTyxFQUFFRixXQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSixlQUdJLDhEQUFDLE1BQUQ7QUFBUSxRQUFFLEVBQUUsTUFBWjtBQUFvQixXQUFLLEVBQUUsSUFBM0I7QUFBaUMsWUFBTSxFQUFFO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFRSCxDQXBDRDs7R0FBTVQsSzs7S0FBQUEsSztBQXNDTixNQUFNWSxNQUFNLEdBQUdDLDJEQUFjO0FBQzdCO0FBQ0EsQ0FGQTtNQUFNRCxNO0FBSU4sK0RBQWVaLEtBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQge2ZhYnJpY30gZnJvbSAnZmFicmljJ1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZhYnJpYy5PYmplY3QucHJvdG90eXBlLnRyYW5zcGFyZW50Q29ybmVycyA9IGZhbHNlXG4gICAgfSwgW10pXG5cbiAgICBjb25zdCBjYW52YXMgPSBuZXcgZmFicmljLkNhbnZhcygnZHJhdycsIHtcbiAgICAgICAgaXNEcmF3aW5nTW9kZTogdHJ1ZSxcbiAgICAgICAgZnJlZURyYXdpbmdDdXJzb3I6ICdub25lJ1xuICAgIH0pXG4gICAgLy8gY29uc3QgY3Vyc29yID0gbmV3IGZhYnJpYy5TdGF0aWNDYW52YXMoXCJjdXJzb3JcIik7XG4gICAgY2FudmFzLmZyZWVEcmF3aW5nQnJ1c2gud2lkdGggPSAyMFxuICAgIGNhbnZhcy5mcmVlRHJhd2luZ0JydXNoLmNvbG9yID0gJyNmZjAwMDAnXG5cblxuXG5cbiAgICBjb25zdCBoYW5kbGVDbGVhciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgY2FudmFzLmNsZWFyKClcbiAgICB9LCBbXSlcblxuICAgIC8vIGNvbnN0IGhhbmRsZURyYXdMaW5lID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIC8vICAgICBjb25zdCBicnVzaCA9IG5ldyBmYWJyaWMuQmFzZUJydXNoKCApXG4gICAgLy8gICAgIGJydXNoLmNvbG9yID0gJyMwMDAnXG4gICAgLy8gICAgIGNhbnZhcy5hZGQoYnJ1c2gpXG4gICAgLy8gfSwgW10pXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+Q2FudmFzPC9oMT5cbiAgICAgICAgICAgIDxidXR0b24gaWQ9eydjbGVhcid9IG9uQ2xpY2s9e2hhbmRsZUNsZWFyfT5DbGVhcjwvYnV0dG9uPlxuICAgICAgICAgICAgPENhbnZhcyBpZD17J2RyYXcnfSB3aWR0aD17MTAwMH0gaGVpZ2h0PXsxMDAwfS8+XG4gICAgICAgICAgICB7Lyo8Y2FudmFzIGlkPXsnY3Vyc29yJ30gd2lkdGg9XCI1MDBcIiBoZWlnaHQ9XCI1MDBcIj48L2NhbnZhcz4qL31cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5jb25zdCBDYW52YXMgPSBzdHlsZWQuY2FudmFzYFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuYFxuXG5leHBvcnQgZGVmYXVsdCBJbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

});