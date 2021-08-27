/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ \"@emotion/styled\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fabric */ \"fabric\");\n/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/min/Documents/custom-canvas/src/pages/index.tsx\";\n\n\n\n\nconst Index = () => {\n  const {\n    0: canvas,\n    1: setCanvas\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new fabric__WEBPACK_IMPORTED_MODULE_3__.fabric.Canvas('canvas', {}));\n  const {\n    0: colors,\n    1: getColors\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('#000');\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    setCanvas(initCanvas());\n  }, []);\n\n  const initCanvas = () => new fabric__WEBPACK_IMPORTED_MODULE_3__.fabric.Canvas('canvas', {\n    height: 800,\n    width: 800,\n    backgroundColor: 'pink',\n    isDrawingMode: true\n  });\n\n  const handleColorChange = color => {\n    canvas.isDrawingMode = true;\n    canvas.freeDrawingBrush.color = color; // getColors(color)\n  };\n\n  const handleAddText = () => {\n    var _newText$text, _newText$text2;\n\n    canvas.isDrawingMode = false;\n    var newText = new fabric__WEBPACK_IMPORTED_MODULE_3__.fabric.Textbox('Hello Text!.', {\n      fontSize: 27,\n      top: 10,\n      left: 10,\n      width: 200\n    });\n    canvas.add(newText);\n    canvas.setActiveObject(newText);\n    newText.enterEditing();\n    newText.setSelectionStart((_newText$text = newText.text) === null || _newText$text === void 0 ? void 0 : _newText$text.length);\n    newText.setSelectionEnd((_newText$text2 = newText.text) === null || _newText$text2 === void 0 ? void 0 : _newText$text2.length);\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    canvas.freeDrawingBrush.width = 15;\n  }, [canvas]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ColorBox, {\n      style: {\n        background: `${colors}`\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ColorBoxGroup, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ColorBox, {\n        style: {\n          background: 'red'\n        },\n        onClick: () => handleColorChange('red')\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ColorBox, {\n        style: {\n          background: 'yellow'\n        },\n        onClick: () => handleColorChange('yellow')\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ColorBox, {\n        style: {\n          background: 'blue'\n        },\n        onClick: () => handleColorChange('blue')\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ColorBox, {\n        style: {\n          background: 'black'\n        },\n        onClick: () => handleColorChange('black')\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 17\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      onClick: handleAddText,\n      children: \"Add Text\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n      id: \"canvas\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 50,\n    columnNumber: 9\n  }, undefined);\n};\n\nconst ColorBox = (_emotion_styled__WEBPACK_IMPORTED_MODULE_2___default().div)`\n  width: 30px;\n  height: 30px;\n  border-radius: 50px;\n  margin: 5px;\n`;\nconst ColorBoxGroup = (_emotion_styled__WEBPACK_IMPORTED_MODULE_2___default().div)`\n  display: flex;\n  align-content: center;\n`;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jdXN0b20tY2FudmFzLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sIm5hbWVzIjpbIkluZGV4IiwiY2FudmFzIiwic2V0Q2FudmFzIiwidXNlU3RhdGUiLCJmYWJyaWMiLCJjb2xvcnMiLCJnZXRDb2xvcnMiLCJ1c2VFZmZlY3QiLCJpbml0Q2FudmFzIiwiaGVpZ2h0Iiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJpc0RyYXdpbmdNb2RlIiwiaGFuZGxlQ29sb3JDaGFuZ2UiLCJjb2xvciIsImZyZWVEcmF3aW5nQnJ1c2giLCJoYW5kbGVBZGRUZXh0IiwibmV3VGV4dCIsImZvbnRTaXplIiwidG9wIiwibGVmdCIsImFkZCIsInNldEFjdGl2ZU9iamVjdCIsImVudGVyRWRpdGluZyIsInNldFNlbGVjdGlvblN0YXJ0IiwidGV4dCIsImxlbmd0aCIsInNldFNlbGVjdGlvbkVuZCIsImJhY2tncm91bmQiLCJDb2xvckJveCIsInN0eWxlZCIsIkNvbG9yQm94R3JvdXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUlBLE1BQU1BLEtBQUssR0FBRyxNQUFNO0FBQ2hCLFFBQU07QUFBQSxPQUFDQyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQkMsK0NBQVEsQ0FBQyxJQUFJQyxpREFBSixDQUFrQixRQUFsQixFQUE0QixFQUE1QixDQUFELENBQXBDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCSCwrQ0FBUSxDQUFDLE1BQUQsQ0FBcEM7QUFFQUksa0RBQVMsQ0FBQyxNQUFNO0FBQ1pMLGFBQVMsQ0FBQ00sVUFBVSxFQUFYLENBQVQ7QUFDSCxHQUZRLEVBRU4sRUFGTSxDQUFUOztBQUlBLFFBQU1BLFVBQVUsR0FBRyxNQUNmLElBQUlKLGlEQUFKLENBQWtCLFFBQWxCLEVBQTRCO0FBQ3hCSyxVQUFNLEVBQUUsR0FEZ0I7QUFFeEJDLFNBQUssRUFBRSxHQUZpQjtB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ZWFjdCwge3VzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHtmYWJyaWN9IGZyb20gJ2ZhYnJpYydcblxuXG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICAgIGNvbnN0IFtjYW52YXMsIHNldENhbnZhc10gPSB1c2VTdGF0ZShuZXcgZmFicmljLkNhbnZhcygnY2FudmFzJywge30pKVxuICAgIGNvbnN0IFtjb2xvcnMsIGdldENvbG9yc10gPSB1c2VTdGF0ZSgnIzAwMCcpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRDYW52YXMoaW5pdENhbnZhcygpKVxuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IGluaXRDYW52YXMgPSAoKSA9PiAoXG4gICAgICAgIG5ldyBmYWJyaWMuQ2FudmFzKCdjYW52YXMnLCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDgwMCxcbiAgICAgICAgICAgIHdpZHRoOiA4MDAsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdwaW5rJyxcbiAgICAgICAgICAgIGlzRHJhd2luZ01vZGU6IHRydWUsXG4gICAgICAgIH0pXG4gICAgKVxuXG4gICAgY29uc3QgaGFuZGxlQ29sb3JDaGFuZ2UgPSAoY29sb3I6IHN0cmluZykgPT4ge1xuICAgICAgICBjYW52YXMuaXNEcmF3aW5nTW9kZSA9IHRydWVcbiAgICAgICAgY2FudmFzLmZyZWVEcmF3aW5nQnJ1c2guY29sb3IgPSBjb2xvclxuICAgICAgICAvLyBnZXRDb2xvcnMoY29sb3IpXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQWRkVGV4dCA9ICgpID0+IHtcbiAgICAgICAgY2FudmFzLmlzRHJhd2luZ01vZGUgPSBmYWxzZVxuICAgICAgICB2YXIgbmV3VGV4dCA9IG5ldyBmYWJyaWMuVGV4dGJveCgnSGVsbG8gVGV4dCEuJywge1xuICAgICAgICAgICAgZm9udFNpemU6IDI3LFxuICAgICAgICAgICAgdG9wOiAxMCxcbiAgICAgICAgICAgIGxlZnQ6IDEwLFxuICAgICAgICAgICAgd2lkdGg6IDIwMFxuICAgICAgICB9KTtcbiAgICAgICAgY2FudmFzLmFkZChuZXdUZXh0KTtcbiAgICAgICAgY2FudmFzLnNldEFjdGl2ZU9iamVjdChuZXdUZXh0KTtcbiAgICAgICAgbmV3VGV4dC5lbnRlckVkaXRpbmcoKTtcbiAgICAgICAgbmV3VGV4dC5zZXRTZWxlY3Rpb25TdGFydChuZXdUZXh0LnRleHQ/Lmxlbmd0aCBhcyBudW1iZXIpO1xuICAgICAgICBuZXdUZXh0LnNldFNlbGVjdGlvbkVuZChuZXdUZXh0LnRleHQ/Lmxlbmd0aCBhcyBudW1iZXIpO1xuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNhbnZhcy5mcmVlRHJhd2luZ0JydXNoLndpZHRoID0gMTVcbiAgICB9LCBbY2FudmFzXSlcbiAgICBcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8Q29sb3JCb3ggc3R5bGU9e3tiYWNrZ3JvdW5kOiBgJHtjb2xvcnN9YH19IC8+XG4gICAgICAgICAgICA8Q29sb3JCb3hHcm91cD5cbiAgICAgICAgICAgICAgICA8Q29sb3JCb3ggc3R5bGU9e3tiYWNrZ3JvdW5kOiAncmVkJ319IG9uQ2xpY2s9eygpID0+IGhhbmRsZUNvbG9yQ2hhbmdlKCdyZWQnKX0gLz5cbiAgICAgICAgICAgICAgICA8Q29sb3JCb3ggc3R5bGU9e3tiYWNrZ3JvdW5kOiAneWVsbG93J319IG9uQ2xpY2s9eygpID0+IGhhbmRsZUNvbG9yQ2hhbmdlKCd5ZWxsb3cnKX0gLz5cbiAgICAgICAgICAgICAgICA8Q29sb3JCb3ggc3R5bGU9e3tiYWNrZ3JvdW5kOiAnYmx1ZSd9fSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDb2xvckNoYW5nZSgnYmx1ZScpfSAvPlxuICAgICAgICAgICAgICAgIDxDb2xvckJveCBzdHlsZT17e2JhY2tncm91bmQ6ICdibGFjayd9fSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDb2xvckNoYW5nZSgnYmxhY2snKX0gLz5cbiAgICAgICAgICAgIDwvQ29sb3JCb3hHcm91cD5cblxuXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUFkZFRleHR9PkFkZCBUZXh0PC9idXR0b24+XG5cbiAgICAgICAgICAgIDxjYW52YXMgaWQ9XCJjYW52YXNcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmNvbnN0IENvbG9yQm94ID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgbWFyZ2luOiA1cHg7XG5gXG5cbmNvbnN0IENvbG9yQm94R3JvdXAgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG5gXG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "@emotion/styled":
/*!**********************************!*\
  !*** external "@emotion/styled" ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@emotion/styled");;

/***/ }),

/***/ "fabric":
/*!*************************!*\
  !*** external "fabric" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("fabric");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();