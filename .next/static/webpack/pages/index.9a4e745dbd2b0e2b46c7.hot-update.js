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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/ThemeContext */ \"./src/contexts/ThemeContext.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contexts_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/SpeakerFilterContext */ \"./src/contexts/SpeakerFilterContext.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/kinyera/Designing React Component/src/components/SpeakersToolbar.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction SpeakersToolbar() {\n  _s();\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_1__.ThemeContext),\n      theme = _useContext.theme,\n      setTheme = _useContext.setTheme;\n\n  var _useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_3__.SpeakerFilterContext),\n      showSessions = _useContext2.showSessions,\n      stShowSessions = _useContext2.stShowSessions,\n      eventYear = _useContext2.eventYear,\n      setEventYear = _useContext2.setEventYear,\n      setSearchQuery = _useContext2.setSearchQuery,\n      EVENT_YEARS = _useContext2.EVENT_YEARS;\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n    className: \"toolbar dark-theme-header\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"container\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"justify-content-between\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n          className: \"toolrow d-flex flex-column flex-lg-row\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            className: \"d-flex flex-column flex-lg-row\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n              children: \"Show Sessions\\xA0\\xA0\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 20,\n              columnNumber: 15\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n              className: \"fav\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"checkbox\",\n                checked: showSessions,\n                onChange: function onChange(event) {\n                  setShowSessions(event.target.checked);\n                }\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 22,\n                columnNumber: 17\n              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"switch\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 29,\n                columnNumber: 20\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 21,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 19,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            className: \"d-flex flex-column flex-md-row ml-sm-5 ml-0\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n              children: \"Theme\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 33,\n              columnNumber: 15\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n              className: \"dropdown\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                className: \"form-control theme\",\n                value: theme,\n                onChange: function onChange(event) {\n                  setTheme(event.target.value);\n                },\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                  value: \"light\",\n                  children: \"Light\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 42,\n                  columnNumber: 20\n                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                  value: \"dark\",\n                  children: \"Dark\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 43,\n                  columnNumber: 20\n                }, this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 35,\n                columnNumber: 17\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 34,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              className: \"input-group\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                className: \"form-control\",\n                placeholder: \"Search...\",\n                onChange: function onChange(event) {\n                  setSearchQuery(event.target.value);\n                }\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 49,\n                columnNumber: 23\n              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"form-group-append\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                  className: \"btn btn-secondary\",\n                  type: \"button\",\n                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                    className: \"fa fa-search\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 56,\n                    columnNumber: 27\n                  }, this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 55,\n                  columnNumber: 23\n                }, this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 54,\n                columnNumber: 19\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 48,\n              columnNumber: 19\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 15\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              className: \"d-flex flex-column flex-md-row\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                children: \"Year\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 63,\n                columnNumber: 23\n              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                className: \"dropmenu\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                  className: \"form-control\",\n                  value: eventYear,\n                  onChange: function onChange(_ref) {\n                    var currentTarget = _ref.currentTarget;\n                    setEventYear(currentTarget.value);\n                  },\n                  children: EVENT_YEARS.map(function (year) {\n                    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                      value: year,\n                      children: year\n                    }, year, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 72,\n                      columnNumber: 39\n                    }, this);\n                  })\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 65,\n                  columnNumber: 27\n                }, this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 64,\n                columnNumber: 23\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 62,\n              columnNumber: 19\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 15\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 5\n  }, this);\n}\n\n_s(SpeakersToolbar, \"QAjS8hlA87jDMC7t0Hepx4tbkWU=\");\n\n_c = SpeakersToolbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakersToolbar);\n\nvar _c;\n\n$RefreshReg$(_c, \"SpeakersToolbar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnNUb29sYmFyLmpzPzMyN2YiXSwibmFtZXMiOlsiU3BlYWtlcnNUb29sYmFyIiwidXNlQ29udGV4dCIsIlRoZW1lQ29udGV4dCIsInRoZW1lIiwic2V0VGhlbWUiLCJTcGVha2VyRmlsdGVyQ29udGV4dCIsInNob3dTZXNzaW9ucyIsInN0U2hvd1Nlc3Npb25zIiwiZXZlbnRZZWFyIiwic2V0RXZlbnRZZWFyIiwic2V0U2VhcmNoUXVlcnkiLCJFVkVOVF9ZRUFSUyIsImV2ZW50Iiwic2V0U2hvd1Nlc3Npb25zIiwidGFyZ2V0IiwiY2hlY2tlZCIsInZhbHVlIiwiY3VycmVudFRhcmdldCIsIm1hcCIsInllYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU0EsZUFBVCxHQUEyQjtBQUFBOztBQUFBLG9CQUNLQyxpREFBVSxDQUFDQyxnRUFBRCxDQURmO0FBQUEsTUFDZkMsS0FEZSxlQUNmQSxLQURlO0FBQUEsTUFDUkMsUUFEUSxlQUNSQSxRQURROztBQUFBLHFCQVFuQkgsaURBQVUsQ0FBQ0ksZ0ZBQUQsQ0FSUztBQUFBLE1BR25CQyxZQUhtQixnQkFHbkJBLFlBSG1CO0FBQUEsTUFJbkJDLGNBSm1CLGdCQUluQkEsY0FKbUI7QUFBQSxNQUtuQkMsU0FMbUIsZ0JBS25CQSxTQUxtQjtBQUFBLE1BS1RDLFlBTFMsZ0JBS1RBLFlBTFM7QUFBQSxNQU1uQkMsY0FObUIsZ0JBTW5CQSxjQU5tQjtBQUFBLE1BT25CQyxXQVBtQixnQkFPbkJBLFdBUG1COztBQVV6QixzQkFDRTtBQUFTLGFBQVMsRUFBQywyQkFBbkI7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLHlCQUFmO0FBQUEsK0JBQ0U7QUFBSSxtQkFBUyxFQUFDLHdDQUFkO0FBQUEsa0NBQ0U7QUFBSSxxQkFBUyxFQUFDLGdDQUFk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QUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBM0NKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBc0VEOztHQWhGUW5CLGU7O0tBQUFBLGU7QUFrRlQsK0RBQWVBLGVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2Vyc1Rvb2xiYXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1RoZW1lQ29udGV4dH0gZnJvbSBcIi4uL2NvbnRleHRzL1RoZW1lQ29udGV4dFwiO1xuaW1wb3J0IHt1c2VDb250ZXh0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7U3BlYWtlckZpbHRlckNvbnRleHR9IGZyb20gXCIuLi9jb250ZXh0cy9TcGVha2VyRmlsdGVyQ29udGV4dFwiO1xuZnVuY3Rpb24gU3BlYWtlcnNUb29sYmFyKCkge1xuICAgIGNvbnN0IHsgdGhlbWUsIHNldFRoZW1lIH0gPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XG4gICAgY29uc3Qge1xuICAgICAgICBzaG93U2Vzc2lvbnMsXG4gICAgICAgIHN0U2hvd1Nlc3Npb25zLFxuICAgICAgICBldmVudFllYXIsc2V0RXZlbnRZZWFyLFxuICAgICAgICBzZXRTZWFyY2hRdWVyeSxcbiAgICAgICAgRVZFTlRfWUVBUlMsXG4gICAgfSA9IHVzZUNvbnRleHQoU3BlYWtlckZpbHRlckNvbnRleHQpO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidG9vbGJhciBkYXJrLXRoZW1lLWhlYWRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ0b29scm93IGQtZmxleCBmbGV4LWNvbHVtbiBmbGV4LWxnLXJvd1wiPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBmbGV4LWxnLXJvd1wiPlxuICAgICAgICAgICAgICA8Yj5TaG93IFNlc3Npb25zJm5ic3A7Jm5ic3A7PC9iPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZmF2XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiIFxuICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3Nob3dTZXNzaW9uc31cbiAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICBzZXRTaG93U2Vzc2lvbnMoZXZlbnQudGFyZ2V0LmNoZWNrZWQpO1xuICAgICAgICAgICAgICAgICAgIH19IFxuICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3dpdGNoXCI+PC9zcGFuPlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gZmxleC1tZC1yb3cgbWwtc20tNSBtbC0wXCI+XG4gICAgICAgICAgICAgIDxzdHJvbmc+VGhlbWU8L3N0cm9uZz5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgdGhlbWVcIiBcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhlbWV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgc2V0VGhlbWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibGlnaHRcIj5MaWdodDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJkYXJrXCI+RGFyazwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VhcmNoUXVlcnkoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwLWFwcGVuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXNlYXJjaFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIGZsZXgtbWQtcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5ZZWFyPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImRyb3BtZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e2V2ZW50WWVhcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHtjdXJyZW50VGFyZ2V0fSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFdmVudFllYXIoY3VycmVudFRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge0VWRU5UX1lFQVJTLm1hcChmdW5jdGlvbiAoeWVhcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e3llYXJ9IGtleT17eWVhcn0+e3llYXJ9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJzVG9vbGJhcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SpeakersToolbar.js\n");

/***/ })

});