/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/SpeakersToolbar.js":
/*!*******************************************!*\
  !*** ./src/components/SpeakersToolbar.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/ThemeContext */ \"./src/contexts/ThemeContext.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/kinyera/Designing React Component/src/components/SpeakersToolbar.js\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction SpeakersToolbar(_ref) {\n  _s();\n\n  var showSessions = _ref.showSessions,\n      setShowSessions = _ref.setShowSessions;\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_1__.ThemeContext),\n      theme = _useContext.theme,\n      setTheme = _useContext.setTheme;\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n    className: \"toolbar dark-theme-header\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"container\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"justify-content-between\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n          className: \"toolrow d-flex flex-column flex-lg-row\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            className: \"d-flex flex-column flex-lg-row\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n              children: \"Show Sessions\\xA0\\xA0\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 15,\n              columnNumber: 15\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n              className: \"fav\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"checkbox\",\n                checked: showSessions,\n                onChange: function onChange(event) {\n                  setShowSessions(event.target.checked);\n                }\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 17,\n                columnNumber: 17\n              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"switch\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 24,\n                columnNumber: 20\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 16,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 14,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            className: \"d-flex flex-column flex-md-row ml-sm-5 ml-0\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n              children: \"Theme\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 28,\n              columnNumber: 15\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n              className: \"dropdown\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                className: \"form-control theme\",\n                value: theme,\n                onChange: function onChange(event) {\n                  setTheme(event.target.value);\n                },\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                  value: \"light\",\n                  children: \"Light\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 37,\n                  columnNumber: 20\n                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                  value: \"dark\",\n                  children: \"Dark\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 38,\n                  columnNumber: 20\n                }, this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 30,\n                columnNumber: 17\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 29,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 27,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 13,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }, this);\n}\n\n_s(SpeakersToolbar, \"CrVyfxkbaVKs8B1q77aq0EAdMEo=\");\n\n_c = SpeakersToolbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakersToolbar);\n\nvar _c;\n\n$RefreshReg$(_c, \"SpeakersToolbar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnNUb29sYmFyLmpzPzMyN2YiXSwibmFtZXMiOlsiU3BlYWtlcnNUb29sYmFyIiwic2hvd1Nlc3Npb25zIiwic2V0U2hvd1Nlc3Npb25zIiwidXNlQ29udGV4dCIsIlRoZW1lQ29udGV4dCIsInRoZW1lIiwic2V0VGhlbWUiLCJldmVudCIsInRhcmdldCIsImNoZWNrZWQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFDQSxTQUFTQSxlQUFULE9BR0c7QUFBQTs7QUFBQSxNQUZEQyxZQUVDLFFBRkRBLFlBRUM7QUFBQSxNQUREQyxlQUNDLFFBRERBLGVBQ0M7O0FBQUEsb0JBQzZCQyxpREFBVSxDQUFDQyxnRUFBRCxDQUR2QztBQUFBLE1BQ1NDLEtBRFQsZUFDU0EsS0FEVDtBQUFBLE1BQ2dCQyxRQURoQixlQUNnQkEsUUFEaEI7O0FBR0Qsc0JBQ0U7QUFBUyxhQUFTLEVBQUMsMkJBQW5CO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyx5QkFBZjtBQUFBLCtCQUNFO0FBQUksbUJBQVMsRUFBQyx3Q0FBZDtBQUFBLGtDQUNFO0FBQUkscUJBQVMsRUFBQyxnQ0FBZDtBQUFBLG9DQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBRUU7QUFBTyx1QkFBUyxFQUFDLEtBQWpCO0FBQUEsc0NBQ0U7QUFDRyxvQkFBSSxFQUFDLFVBRFI7QUFFRyx1QkFBTyxFQUFFTCxZQUZaO0FBR0csd0JBQVEsRUFBRSxrQkFBQ00sS0FBRCxFQUFXO0FBQ25CTCxpQ0FBZSxDQUFDSyxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsT0FBZCxDQUFmO0FBQ0Q7QUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGVBUUs7QUFBTSx5QkFBUyxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBUkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQWNFO0FBQUkscUJBQVMsRUFBQyw2Q0FBZDtBQUFBLG9DQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBRUU7QUFBTyx1QkFBUyxFQUFDLFVBQWpCO0FBQUEscUNBQ0U7QUFDQSx5QkFBUyxFQUFDLG9CQURWO0FBRUEscUJBQUssRUFBRUosS0FGUDtBQUdBLHdCQUFRLEVBQUUsa0JBQUNFLEtBQUQsRUFBVztBQUNuQkQsMEJBQVEsQ0FBQ0MsS0FBSyxDQUFDQyxNQUFOLENBQWFFLEtBQWQsQ0FBUjtBQUNELGlCQUxEO0FBQUEsd0NBT0c7QUFBUSx1QkFBSyxFQUFDLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBUEgsZUFRRztBQUFRLHVCQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFSSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXNDRDs7R0E1Q1FWLGU7O0tBQUFBLGU7QUE4Q1QsK0RBQWVBLGVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2Vyc1Rvb2xiYXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1RoZW1lQ29udGV4dH0gZnJvbSBcIi4uL2NvbnRleHRzL1RoZW1lQ29udGV4dFwiO1xuaW1wb3J0IHt1c2VDb250ZXh0fSBmcm9tIFwicmVhY3RcIjtcbmZ1bmN0aW9uIFNwZWFrZXJzVG9vbGJhcih7XG4gIHNob3dTZXNzaW9ucyxcbiAgc2V0U2hvd1Nlc3Npb25zXG59KSB7XG4gICAgY29uc3QgeyB0aGVtZSwgc2V0VGhlbWUgfSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRvb2xiYXIgZGFyay10aGVtZS1oZWFkZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidG9vbHJvdyBkLWZsZXggZmxleC1jb2x1bW4gZmxleC1sZy1yb3dcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gZmxleC1sZy1yb3dcIj5cbiAgICAgICAgICAgICAgPGI+U2hvdyBTZXNzaW9ucyZuYnNwOyZuYnNwOzwvYj5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZhdlwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIiBcbiAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzaG93U2Vzc2lvbnN9XG4gICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgc2V0U2hvd1Nlc3Npb25zKGV2ZW50LnRhcmdldC5jaGVja2VkKTtcbiAgICAgICAgICAgICAgICAgICB9fSBcbiAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN3aXRjaFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIGZsZXgtbWQtcm93IG1sLXNtLTUgbWwtMFwiPlxuICAgICAgICAgICAgICA8c3Ryb25nPlRoZW1lPC9zdHJvbmc+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJkcm9wZG93blwiPlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIHRoZW1lXCIgXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoZW1lfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgIHNldFRoZW1lKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxpZ2h0XCI+TGlnaHQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGFya1wiPkRhcms8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJzVG9vbGJhcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SpeakersToolbar.js\n");

/***/ })

});