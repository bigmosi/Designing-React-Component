/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/contexts/SpeakerFilterContext.js":
/*!**********************************************!*\
  !*** ./src/contexts/SpeakerFilterContext.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SpeakerFilterContext\": function() { return /* binding */ SpeakerFilterContext; },\n/* harmony export */   \"SpeakerFilterProvider\": function() { return /* binding */ SpeakerFilterProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useSpeakerFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useSpeakerFilter */ \"./src/hooks/useSpeakerFilter.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/kinyera/Designing React Component/src/contexts/SpeakerFilterContext.js\",\n    _s = $RefreshSig$();\n\n\n\nvar SpeakerFilterContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\n\nfunction SpeakerFilterProvider(_ref) {\n  _s();\n\n  var children = _ref.children,\n      _ref$startingShowSess = _ref.startingShowSessions,\n      startingShowSessions = _ref$startingShowSess === void 0 ? false : _ref$startingShowSess,\n      _ref$startingEventYea = _ref.startingEventYear,\n      startingEventYear = _ref$startingEventYea === void 0 ? \"2019\" : _ref$startingEventYea;\n\n  var _useSpeakerFilter = (0,_hooks_useSpeakerFilter__WEBPACK_IMPORTED_MODULE_2__.default)(startingShowSessions, startingEventYear),\n      showSessions = _useSpeakerFilter.showSessions,\n      setShowSessions = _useSpeakerFilter.setShowSessions,\n      eventYear = _useSpeakerFilter.eventYear,\n      setEventYear = _useSpeakerFilter.setEventYear,\n      searchQuery = _useSpeakerFilter.searchQuery,\n      setSearchQuery = _useSpeakerFilter.setSearchQuery,\n      EVENT_YEARS = _useSpeakerFilter.EVENT_YEARS;\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerFilterContext.provider, {\n    value: {\n      showSessions: showSessions,\n      setShowSessions: setShowSessions,\n      eventYear: eventYear,\n      setEventYear: setEventYear,\n      searchQuery: searchQuery,\n      setSearchQuery: setSearchQuery,\n      EVENT_YEARS: EVENT_YEARS\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 9\n  }, this);\n}\n\n_s(SpeakerFilterProvider, \"FvvxygAX8j8qnjzCTCUT61tIkXQ=\", false, function () {\n  return [_hooks_useSpeakerFilter__WEBPACK_IMPORTED_MODULE_2__.default];\n});\n\n_c = SpeakerFilterProvider;\n\n\nvar _c;\n\n$RefreshReg$(_c, \"SpeakerFilterProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL1NwZWFrZXJGaWx0ZXJDb250ZXh0LmpzP2Y1NzkiXSwibmFtZXMiOlsiU3BlYWtlckZpbHRlckNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiU3BlYWtlckZpbHRlclByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzdGFydGluZ1Nob3dTZXNzaW9ucyIsInN0YXJ0aW5nRXZlbnRZZWFyIiwidXNlU3BlYWtlckZpbHRlciIsInNob3dTZXNzaW9ucyIsInNldFNob3dTZXNzaW9ucyIsImV2ZW50WWVhciIsInNldEV2ZW50WWVhciIsInNlYXJjaFF1ZXJ5Iiwic2V0U2VhcmNoUXVlcnkiLCJFVkVOVF9ZRUFSUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxvQkFBb0IsZ0JBQUdDLG9EQUFhLEVBQTFDOztBQUVBLFNBQVVDLHFCQUFWLE9BQXdHO0FBQUE7O0FBQUEsTUFBckVDLFFBQXFFLFFBQXJFQSxRQUFxRTtBQUFBLG1DQUE1REMsb0JBQTREO0FBQUEsTUFBNURBLG9CQUE0RCxzQ0FBckMsS0FBcUM7QUFBQSxtQ0FBOUJDLGlCQUE4QjtBQUFBLE1BQTlCQSxpQkFBOEIsc0NBQVYsTUFBVTs7QUFBQSwwQkFNaEdDLGdFQUFnQixDQUNoQkYsb0JBRGdCLEVBRWhCQyxpQkFGZ0IsQ0FOZ0Y7QUFBQSxNQUVoR0UsWUFGZ0cscUJBRWhHQSxZQUZnRztBQUFBLE1BRWxGQyxlQUZrRixxQkFFbEZBLGVBRmtGO0FBQUEsTUFHaEdDLFNBSGdHLHFCQUdoR0EsU0FIZ0c7QUFBQSxNQUd0RkMsWUFIc0YscUJBR3RGQSxZQUhzRjtBQUFBLE1BSWhHQyxXQUpnRyxxQkFJaEdBLFdBSmdHO0FBQUEsTUFJcEZDLGNBSm9GLHFCQUlwRkEsY0FKb0Y7QUFBQSxNQUtoR0MsV0FMZ0cscUJBS2hHQSxXQUxnRzs7QUFXcEcsc0JBQ0ksOERBQUMsb0JBQUQsQ0FBc0IsUUFBdEI7QUFDSSxTQUFLLEVBQ0Q7QUFDSU4sa0JBQVksRUFBWkEsWUFESjtBQUNrQkMscUJBQWUsRUFBZkEsZUFEbEI7QUFFSUMsZUFBUyxFQUFUQSxTQUZKO0FBRWNDLGtCQUFZLEVBQVpBLFlBRmQ7QUFHSUMsaUJBQVcsRUFBWEEsV0FISjtBQUdnQkMsb0JBQWMsRUFBZEEsY0FIaEI7QUFJSUMsaUJBQVcsRUFBWEE7QUFKSixLQUZSO0FBQUEsY0FVS1Y7QUFWTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFjSDs7R0F6QlNELHFCO1VBTUZJLDREOzs7S0FORUoscUI7QUEyQlYiLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvU3BlYWtlckZpbHRlckNvbnRleHQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHVzZVNwZWFrZXJGaWx0ZXIgZnJvbSBcIi4uL2hvb2tzL3VzZVNwZWFrZXJGaWx0ZXJcIjtcblxuY29uc3QgU3BlYWtlckZpbHRlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmZ1bmN0aW9uICBTcGVha2VyRmlsdGVyUHJvdmlkZXIgKHsgY2hpbGRyZW4sc3RhcnRpbmdTaG93U2Vzc2lvbnMgPSBmYWxzZSwgc3RhcnRpbmdFdmVudFllYXIgPSBcIjIwMTlcIiB9KSB7XG4gICAgY29uc3Qge1xuICAgICAgICBzaG93U2Vzc2lvbnMsIHNldFNob3dTZXNzaW9ucyxcbiAgICAgICAgZXZlbnRZZWFyLHNldEV2ZW50WWVhcixcbiAgICAgICAgc2VhcmNoUXVlcnksc2V0U2VhcmNoUXVlcnksXG4gICAgICAgIEVWRU5UX1lFQVJTXG4gICAgfSA9IHVzZVNwZWFrZXJGaWx0ZXIoXG4gICAgICAgIHN0YXJ0aW5nU2hvd1Nlc3Npb25zLFxuICAgICAgICBzdGFydGluZ0V2ZW50WWVhclxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8U3BlYWtlckZpbHRlckNvbnRleHQucHJvdmlkZXJcbiAgICAgICAgICAgIHZhbHVlPXtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNob3dTZXNzaW9ucywgc2V0U2hvd1Nlc3Npb25zLFxuICAgICAgICAgICAgICAgICAgICBldmVudFllYXIsc2V0RXZlbnRZZWFyLFxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hRdWVyeSxzZXRTZWFyY2hRdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgRVZFTlRfWUVBUlMsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICA+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvU3BlYWtlckZpbHRlckNvbnRleHQucHJvdmlkZXI+XG4gICAgKTtcbn1cblxuZXhwb3J0IHsgU3BlYWtlckZpbHRlckNvbnRleHQsIFNwZWFrZXJGaWx0ZXJQcm92aWRlciB9OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contexts/SpeakerFilterContext.js\n");

/***/ })

});