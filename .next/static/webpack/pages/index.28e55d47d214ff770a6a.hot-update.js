/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/SpeakersList.js":
/*!****************************************!*\
  !*** ./src/components/SpeakersList.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_kinyera_Designing_React_Component_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Speaker */ \"./src/components/Speaker.js\");\n/* harmony import */ var react_placeholder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-placeholder */ \"./node_modules/react-placeholder/lib/index.js\");\n/* harmony import */ var _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useRequestDelay */ \"./src/hooks/useRequestDelay.js\");\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../SpeakerData */ \"./SpeakerData.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/kinyera/Designing React Component/src/components/SpeakersList.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_home_kinyera_Designing_React_Component_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nfunction SpeakersList(_ref) {\n  _s();\n\n  var showSessions = _ref.showSessions;\n\n  var _useRequestDelay = (0,_hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_4__.default)(2000, _SpeakerData__WEBPACK_IMPORTED_MODULE_5__.data),\n      speakersData = _useRequestDelay.data,\n      requestStatus = _useRequestDelay.requestStatus,\n      error = _useRequestDelay.error,\n      updateRecord = _useRequestDelay.updateRecord;\n\n  if (requestStatus === _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_4__.REQUEST_STATUS.FAILURE) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: \"text-danger\",\n      children: [\"ERROR: \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"b\", {\n        children: [\"loading Speaker Data Failed \", error]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 18\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }, this);\n  } //if (isLoading === true) return <div>Loading...</div>;\n\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    className: \"container speakers-list\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_placeholder__WEBPACK_IMPORTED_MODULE_3__.default, {\n      type: \"media\",\n      rows: 15,\n      className: \"speakerslist-placeholder\",\n      ready: requestStatus === _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_4__.REQUEST_STATUS.SUCCESS,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"row\",\n        children: speakersData.map(function (speaker) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_2__.default, {\n            speaker: speaker,\n            showSessions: showSessions,\n            onFavoriteToggle: function onFavoriteToggle(doneCallback) {\n              updateRecord(_objectSpread(_objectSpread({}, speaker), {}, {\n                favorite: !speaker.favorite\n              }), doneCallback);\n            }\n          }, speaker.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 15\n          }, this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 5\n  }, this);\n}\n\n_s(SpeakersList, \"5R+1HM5IQC2WnfnnhHGb8HgL4x4=\", false, function () {\n  return [_hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_4__.default];\n});\n\n_c = SpeakersList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakersList);\n\nvar _c;\n\n$RefreshReg$(_c, \"SpeakersList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnNMaXN0LmpzP2NhNTAiXSwibmFtZXMiOlsiU3BlYWtlcnNMaXN0Iiwic2hvd1Nlc3Npb25zIiwidXNlUmVxdWVzdERlbGF5IiwiZGF0YSIsInNwZWFrZXJzRGF0YSIsInJlcXVlc3RTdGF0dXMiLCJlcnJvciIsInVwZGF0ZVJlY29yZCIsIlJFUVVFU1RfU1RBVFVTIiwibWFwIiwic3BlYWtlciIsImRvbmVDYWxsYmFjayIsImZhdm9yaXRlIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxZQUFULE9BQXdDO0FBQUE7O0FBQUEsTUFBaEJDLFlBQWdCLFFBQWhCQSxZQUFnQjs7QUFBQSx5QkFPbENDLCtEQUFlLENBQUMsSUFBRCxFQUFPQyw4Q0FBUCxDQVBtQjtBQUFBLE1BRy9CQyxZQUgrQixvQkFHcENELElBSG9DO0FBQUEsTUFJcENFLGFBSm9DLG9CQUlwQ0EsYUFKb0M7QUFBQSxNQUtwQ0MsS0FMb0Msb0JBS3BDQSxLQUxvQztBQUFBLE1BTXBDQyxZQU5vQyxvQkFNcENBLFlBTm9DOztBQVNwQyxNQUFJRixhQUFhLEtBQUtHLDBFQUF0QixFQUE4QztBQUM1Qyx3QkFDRTtBQUFLLGVBQVMsRUFBQyxhQUFmO0FBQUEseUNBQ1M7QUFBQSxtREFBZ0NGLEtBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBS0QsR0FmbUMsQ0FnQnBDOzs7QUFDRixzQkFDRTtBQUFLLGFBQVMsRUFBQyx5QkFBZjtBQUFBLDJCQUNFLDhEQUFDLHNEQUFEO0FBQ0csVUFBSSxFQUFDLE9BRFI7QUFFRyxVQUFJLEVBQUUsRUFGVDtBQUdHLGVBQVMsRUFBQywwQkFIYjtBQUlHLFdBQUssRUFBRUQsYUFBYSxLQUFLRywwRUFKNUI7QUFBQSw2QkFNRTtBQUFLLGlCQUFTLEVBQUMsS0FBZjtBQUFBLGtCQUNFSixZQUFZLENBQUNLLEdBQWIsQ0FBaUIsVUFBVUMsT0FBVixFQUFtQjtBQUNuQyw4QkFDRyw4REFBQyw2Q0FBRDtBQUVFLG1CQUFPLEVBQUVBLE9BRlg7QUFHRSx3QkFBWSxFQUFFVCxZQUhoQjtBQUlFLDRCQUFnQixFQUFFLDBCQUFDVSxZQUFELEVBQWtCO0FBQ3BDSiwwQkFBWSxpQ0FDUEcsT0FETztBQUVWRSx3QkFBUSxFQUFFLENBQUNGLE9BQU8sQ0FBQ0U7QUFGVCxrQkFHVkQsWUFIVSxDQUFaO0FBSUM7QUFUSCxhQUNPRCxPQUFPLENBQUNHLEVBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESDtBQWFBLFNBZEQ7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTRCRDs7R0E3Q1FiLFk7VUFPSEUsMkQ7OztLQVBHRixZO0FBK0NULCtEQUFlQSxZQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnNMaXN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwZWFrZXIgZnJvbSBcIi4vU3BlYWtlclwiO1xuaW1wb3J0IFJlYWN0UGxhY2Vob2xkZXIgZnJvbSBcInJlYWN0LXBsYWNlaG9sZGVyXCI7XG5pbXBvcnQgdXNlUmVxdWVzdERlbGF5LCB7UkVRVUVTVF9TVEFUVVN9IGZyb20gXCIuLi9ob29rcy91c2VSZXF1ZXN0RGVsYXlcIjtcbmltcG9ydCB7IGRhdGEgfSBmcm9tIFwiLi4vLi4vU3BlYWtlckRhdGFcIjtcblxuXG5mdW5jdGlvbiBTcGVha2Vyc0xpc3QoeyBzaG93U2Vzc2lvbnMgfSkge1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOnNwZWFrZXJzRGF0YSwgXG4gICAgcmVxdWVzdFN0YXR1cyxcbiAgICBlcnJvcixcbiAgICB1cGRhdGVSZWNvcmQsXG4gIH0gPSB1c2VSZXF1ZXN0RGVsYXkoMjAwMCwgZGF0YSlcbiAgXG4gICAgaWYgKHJlcXVlc3RTdGF0dXMgPT09IFJFUVVFU1RfU1RBVFVTLkZBSUxVUkUpIHtcbiAgICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPlxuICAgICAgICAgIEVSUk9SOiA8Yj5sb2FkaW5nIFNwZWFrZXIgRGF0YSBGYWlsZWQge2Vycm9yfTwvYj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuICAgIC8vaWYgKGlzTG9hZGluZyA9PT0gdHJ1ZSkgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBzcGVha2Vycy1saXN0XCI+XG4gICAgICA8UmVhY3RQbGFjZWhvbGRlciBcbiAgICAgICAgIHR5cGU9XCJtZWRpYVwiIFxuICAgICAgICAgcm93cz17MTV9IFxuICAgICAgICAgY2xhc3NOYW1lPVwic3BlYWtlcnNsaXN0LXBsYWNlaG9sZGVyXCIgXG4gICAgICAgICByZWFkeT17cmVxdWVzdFN0YXR1cyA9PT0gUkVRVUVTVF9TVEFUVVMuU1VDQ0VTU31cbiAgICAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgIHtzcGVha2Vyc0RhdGEubWFwKGZ1bmN0aW9uIChzcGVha2VyKSB7XG4gICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxTcGVha2VyXG4gICAgICAgICAgICAgICAga2V5PXtzcGVha2VyLmlkfVxuICAgICAgICAgICAgICAgIHNwZWFrZXI9e3NwZWFrZXJ9XG4gICAgICAgICAgICAgICAgc2hvd1Nlc3Npb25zPXtzaG93U2Vzc2lvbnN9XG4gICAgICAgICAgICAgICAgb25GYXZvcml0ZVRvZ2dsZT17KGRvbmVDYWxsYmFjaykgPT4ge1xuICAgICAgICAgICAgICAgIHVwZGF0ZVJlY29yZCh7XG4gICAgICAgICAgICAgICAgICAuLi5zcGVha2VyLFxuICAgICAgICAgICAgICAgICAgZmF2b3JpdGU6ICFzcGVha2VyLmZhdm9yaXRlLFxuICAgICAgICAgICAgICAgIH0sZG9uZUNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1JlYWN0UGxhY2Vob2xkZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJzTGlzdDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SpeakersList.js\n");

/***/ }),

/***/ "./src/hooks/useRequestDelay.js":
/*!**************************************!*\
  !*** ./src/hooks/useRequestDelay.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"REQUEST_STATUS\": function() { return /* binding */ REQUEST_STATUS; }\n/* harmony export */ });\n/* harmony import */ var _home_kinyera_Designing_React_Component_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _home_kinyera_Designing_React_Component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_kinyera_Designing_React_Component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_kinyera_Designing_React_Component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_kinyera_Designing_React_Component_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _s = $RefreshSig$();\n\n\nvar REQUEST_STATUS = {\n  LOADING: \"loading\",\n  SUCCESS: \"success\",\n  FAILURE: \"failure\"\n};\n\nfunction useRequestDelay() {\n  _s();\n\n  var delayTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;\n  var initialData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),\n      data = _useState[0],\n      setData = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(REQUEST_STATUS.LOADING),\n      requestStatus = _useState2[0],\n      setRequestStatus = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"),\n      error = _useState3[0],\n      setError = _useState3[1];\n\n  var delay = function delay(ms) {\n    return new Promise(function (resolve) {\n      return setTimeout(resolve, ms);\n    });\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    function delayFunc() {\n      return _delayFunc.apply(this, arguments);\n    }\n\n    function _delayFunc() {\n      _delayFunc = (0,_home_kinyera_Designing_React_Component_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_kinyera_Designing_React_Component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n        return _home_kinyera_Designing_React_Component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.prev = 0;\n                _context.next = 3;\n                return delay(delayTime);\n\n              case 3:\n                setRequestStatus(REQUEST_STATUS.SUCCESS);\n                setData(initialData);\n                _context.next = 11;\n                break;\n\n              case 7:\n                _context.prev = 7;\n                _context.t0 = _context[\"catch\"](0);\n                setRequestStatus(REQUEST_STATUS.FAILURE);\n                setError(_context.t0);\n\n              case 11:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[0, 7]]);\n      }));\n      return _delayFunc.apply(this, arguments);\n    }\n\n    delayFunc();\n  }, []);\n\n  function updateRecord(recordUpdated, doneCallback) {\n    var originalRecords = (0,_home_kinyera_Designing_React_Component_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(data);\n\n    var newRecords = data.map(function (rec) {\n      return rec.id === recordUpdated.id ? recordUpdated : rec;\n    });\n\n    function delayFunction() {\n      return _delayFunction.apply(this, arguments);\n    }\n\n    function _delayFunction() {\n      _delayFunction = (0,_home_kinyera_Designing_React_Component_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_kinyera_Designing_React_Component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {\n        return _home_kinyera_Designing_React_Component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.prev = 0;\n                setData(newRecords);\n                _context2.next = 4;\n                return delay(delayTime);\n\n              case 4:\n                if (doneCallback) {\n                  doneCallback();\n                }\n\n                _context2.next = 12;\n                break;\n\n              case 7:\n                _context2.prev = 7;\n                _context2.t0 = _context2[\"catch\"](0);\n                console.log(\"error thrown inside delayFunction\", _context2.t0);\n\n                if (doneCallback) {\n                  doneCallback();\n                }\n\n                setData(originalRecords);\n\n              case 12:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, null, [[0, 7]]);\n      }));\n      return _delayFunction.apply(this, arguments);\n    }\n\n    delayFunction();\n  }\n\n  return {\n    data: data,\n    requestStatus: requestStatus,\n    error: error,\n    updateRecord: updateRecord\n  };\n}\n\n_s(useRequestDelay, \"uvvVBilWoUeFPXc52bF5AHAvR6Y=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useRequestDelay);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZVJlcXVlc3REZWxheS5qcz82ZGRmIl0sIm5hbWVzIjpbIlJFUVVFU1RfU1RBVFVTIiwiTE9BRElORyIsIlNVQ0NFU1MiLCJGQUlMVVJFIiwidXNlUmVxdWVzdERlbGF5IiwiZGVsYXlUaW1lIiwiaW5pdGlhbERhdGEiLCJ1c2VTdGF0ZSIsImRhdGEiLCJzZXREYXRhIiwicmVxdWVzdFN0YXR1cyIsInNldFJlcXVlc3RTdGF0dXMiLCJlcnJvciIsInNldEVycm9yIiwiZGVsYXkiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsInVzZUVmZmVjdCIsImRlbGF5RnVuYyIsInVwZGF0ZVJlY29yZCIsInJlY29yZFVwZGF0ZWQiLCJkb25lQ2FsbGJhY2siLCJvcmlnaW5hbFJlY29yZHMiLCJuZXdSZWNvcmRzIiwibWFwIiwicmVjIiwiaWQiLCJkZWxheUZ1bmN0aW9uIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLGNBQWMsR0FBRztBQUM1QkMsU0FBTyxFQUFFLFNBRG1CO0FBRTVCQyxTQUFPLEVBQUUsU0FGbUI7QUFHNUJDLFNBQU8sRUFBRTtBQUhtQixDQUF2Qjs7QUFNUCxTQUFTQyxlQUFULEdBQTZEO0FBQUE7O0FBQUEsTUFBcENDLFNBQW9DLHVFQUF4QixJQUF3QjtBQUFBLE1BQWxCQyxXQUFrQix1RUFBSixFQUFJOztBQUFBLGtCQUNuQ0MsK0NBQVEsQ0FBQyxFQUFELENBRDJCO0FBQUEsTUFDcERDLElBRG9EO0FBQUEsTUFDOUNDLE9BRDhDOztBQUFBLG1CQUVqQkYsK0NBQVEsQ0FBQ1AsY0FBYyxDQUFDQyxPQUFoQixDQUZTO0FBQUEsTUFFcERTLGFBRm9EO0FBQUEsTUFFckNDLGdCQUZxQzs7QUFBQSxtQkFHakNKLCtDQUFRLENBQUMsRUFBRCxDQUh5QjtBQUFBLE1BR3BESyxLQUhvRDtBQUFBLE1BRzdDQyxRQUg2Qzs7QUFJM0QsTUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsRUFBRDtBQUFBLFdBQVEsSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQ7QUFBQSxhQUFhQyxVQUFVLENBQUNELE9BQUQsRUFBVUYsRUFBVixDQUF2QjtBQUFBLEtBQVosQ0FBUjtBQUFBLEdBQWQ7O0FBQ0FJLGtEQUFTLENBQUMsWUFBTTtBQUFBLGFBQ0NDLFNBREQ7QUFBQTtBQUFBOztBQUFBO0FBQUEscVNBQ2Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFFVU4sS0FBSyxDQUFDVCxTQUFELENBRmY7O0FBQUE7QUFHSU0sZ0NBQWdCLENBQUNYLGNBQWMsQ0FBQ0UsT0FBaEIsQ0FBaEI7QUFDQU8sdUJBQU8sQ0FBQ0gsV0FBRCxDQUFQO0FBSko7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFNSUssZ0NBQWdCLENBQUNYLGNBQWMsQ0FBQ0csT0FBaEIsQ0FBaEI7QUFDQVUsd0JBQVEsYUFBUjs7QUFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURjO0FBQUE7QUFBQTs7QUFXZE8sYUFBUztBQUNWLEdBWlEsRUFZTixFQVpNLENBQVQ7O0FBY0EsV0FBU0MsWUFBVCxDQUFzQkMsYUFBdEIsRUFBcUNDLFlBQXJDLEVBQW1EO0FBQ2pELFFBQU1DLGVBQWUsR0FBRywwSUFBSWhCLElBQVAsQ0FBckI7O0FBQ0EsUUFBTWlCLFVBQVUsR0FBR2pCLElBQUksQ0FBQ2tCLEdBQUwsQ0FBUyxVQUFVQyxHQUFWLEVBQWU7QUFDekMsYUFBT0EsR0FBRyxDQUFDQyxFQUFKLEtBQVdOLGFBQWEsQ0FBQ00sRUFBekIsR0FBOEJOLGFBQTlCLEdBQThDSyxHQUFyRDtBQUNELEtBRmtCLENBQW5COztBQUZpRCxhQU1sQ0UsYUFOa0M7QUFBQTtBQUFBOztBQUFBO0FBQUEseVNBTWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVJcEIsdUJBQU8sQ0FBQ2dCLFVBQUQsQ0FBUDtBQUZKO0FBQUEsdUJBR1VYLEtBQUssQ0FBQ1QsU0FBRCxDQUhmOztBQUFBO0FBSUksb0JBQUlrQixZQUFKLEVBQWtCO0FBQ2hCQSw4QkFBWTtBQUNiOztBQU5MO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBUUlPLHVCQUFPLENBQUNDLEdBQVIsQ0FBWSxtQ0FBWjs7QUFDQSxvQkFBSVIsWUFBSixFQUFrQjtBQUNoQkEsOEJBQVk7QUFDYjs7QUFDRGQsdUJBQU8sQ0FBQ2UsZUFBRCxDQUFQOztBQVpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BTmlEO0FBQUE7QUFBQTs7QUFxQmpESyxpQkFBYTtBQUNkOztBQUVELFNBQU87QUFDTHJCLFFBQUksRUFBSkEsSUFESztBQUVMRSxpQkFBYSxFQUFiQSxhQUZLO0FBR0xFLFNBQUssRUFBTEEsS0FISztBQUlMUyxnQkFBWSxFQUFaQTtBQUpLLEdBQVA7QUFNRDs7R0FqRFFqQixlOztBQW1EVCwrREFBZUEsZUFBZiIsImZpbGUiOiIuL3NyYy9ob29rcy91c2VSZXF1ZXN0RGVsYXkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBSRVFVRVNUX1NUQVRVUyA9IHtcbiAgTE9BRElORzogXCJsb2FkaW5nXCIsXG4gIFNVQ0NFU1M6IFwic3VjY2Vzc1wiLFxuICBGQUlMVVJFOiBcImZhaWx1cmVcIixcbn07XG5cbmZ1bmN0aW9uIHVzZVJlcXVlc3REZWxheShkZWxheVRpbWUgPSAxMDAwLCBpbml0aWFsRGF0YSA9IFtdKSB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3JlcXVlc3RTdGF0dXMsIHNldFJlcXVlc3RTdGF0dXNdID0gdXNlU3RhdGUoUkVRVUVTVF9TVEFUVVMuTE9BRElORyk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IGRlbGF5ID0gKG1zKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGRlbGF5RnVuYygpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGRlbGF5KGRlbGF5VGltZSk7XG4gICAgICAgIHNldFJlcXVlc3RTdGF0dXMoUkVRVUVTVF9TVEFUVVMuU1VDQ0VTUyk7XG4gICAgICAgIHNldERhdGEoaW5pdGlhbERhdGEpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBzZXRSZXF1ZXN0U3RhdHVzKFJFUVVFU1RfU1RBVFVTLkZBSUxVUkUpO1xuICAgICAgICBzZXRFcnJvcihlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZGVsYXlGdW5jKCk7XG4gIH0sIFtdKTtcblxuICBmdW5jdGlvbiB1cGRhdGVSZWNvcmQocmVjb3JkVXBkYXRlZCwgZG9uZUNhbGxiYWNrKSB7XG4gICAgY29uc3Qgb3JpZ2luYWxSZWNvcmRzID0gWy4uLmRhdGFdO1xuICAgIGNvbnN0IG5ld1JlY29yZHMgPSBkYXRhLm1hcChmdW5jdGlvbiAocmVjKSB7XG4gICAgICByZXR1cm4gcmVjLmlkID09PSByZWNvcmRVcGRhdGVkLmlkID8gcmVjb3JkVXBkYXRlZCA6IHJlYztcbiAgICB9KTtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGRlbGF5RnVuY3Rpb24oKSB7XG4gICAgICB0cnkge1xuICAgICAgICBzZXREYXRhKG5ld1JlY29yZHMpO1xuICAgICAgICBhd2FpdCBkZWxheShkZWxheVRpbWUpO1xuICAgICAgICBpZiAoZG9uZUNhbGxiYWNrKSB7XG4gICAgICAgICAgZG9uZUNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgdGhyb3duIGluc2lkZSBkZWxheUZ1bmN0aW9uXCIsIGVycm9yKTtcbiAgICAgICAgaWYgKGRvbmVDYWxsYmFjaykge1xuICAgICAgICAgIGRvbmVDYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICAgIHNldERhdGEob3JpZ2luYWxSZWNvcmRzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZGVsYXlGdW5jdGlvbigpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBkYXRhLFxuICAgIHJlcXVlc3RTdGF0dXMsXG4gICAgZXJyb3IsXG4gICAgdXBkYXRlUmVjb3JkLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VSZXF1ZXN0RGVsYXk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/hooks/useRequestDelay.js\n");

/***/ })

});