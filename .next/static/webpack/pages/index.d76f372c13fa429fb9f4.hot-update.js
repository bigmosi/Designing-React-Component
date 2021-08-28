/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Speaker.js":
/*!***********************************!*\
  !*** ./src/components/Speaker.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_kinyera_Designing_React_Component_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/kinyera/Designing React Component/src/components/Speaker.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_home_kinyera_Designing_React_Component_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nfunction Session(_ref) {\n  var title = _ref.title,\n      room = _ref.room;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n    className: \"session w-100\",\n    children: [title, \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"strong\", {\n      children: [\"Room: \", room.name]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 15\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 5\n  }, this);\n}\n\n_c = Session;\n\nfunction Sessions(_ref2) {\n  var sessions = _ref2.sessions;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    className: \"sessionBox card h-250\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Session, _objectSpread({}, sessions[0]), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 5\n  }, this);\n}\n\n_c2 = Sessions;\n\nfunction SpeakerImage(_ref3) {\n  var id = _ref3.id,\n      first = _ref3.first,\n      last = _ref3.last;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    className: \"speaker-img d-flex flex-row justify-content-center align-items-center h-300\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n      className: \"contain-fit\",\n      src: \"/images/speaker-\".concat(id, \".jpg\"),\n      width: \"300\",\n      alt: \"\".concat(first, \" \").concat(last)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 5\n  }, this);\n}\n\n_c3 = SpeakerImage;\n\nfunction SpeakerFavorite(_ref4) {\n  _s();\n\n  var favorite = _ref4.favorite,\n      onFavoriteToggle = _ref4.onFavoriteToggle;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      intransition = _useState[0],\n      setIntransition = _useState[1];\n\n  function doneCallback() {\n    setIntransition(false);\n    console.log(\"In SpeakerFavorite:doneCallback \".concat(new Date().getMilliseconds()));\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    className: \"action padB1\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n      onClick: function onClick() {\n        setIntransition(true);\n        return onFavoriteToggle(doneCallback);\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"i\", {\n        className: favorite === true ? \"fa fa-star orange\" : \"fa fa-star-o orange\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 11\n      }, this), \"\", \"Favorite\", \"\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 7\n  }, this);\n}\n\n_s(SpeakerFavorite, \"TLoGMU6EkPkjF3aXT5+a+ie31Kk=\");\n\n_c4 = SpeakerFavorite;\n\nfunction SpeakerDemographics(_ref5) {\n  var first = _ref5.first,\n      last = _ref5.last,\n      bio = _ref5.bio,\n      company = _ref5.company,\n      twitterHandle = _ref5.twitterHandle,\n      favorite = _ref5.favorite,\n      onFavoriteToggle = _ref5.onFavoriteToggle;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    className: \"speaker-info\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: \"d-flex justify-content-between mb-3\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n        className: \"text-truncate w-200\",\n        children: [first, \" \", last]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SpeakerFavorite, {\n      favorite: favorite,\n      onFavoriteToggle: onFavoriteToggle\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n        className: \"card-description\",\n        children: bio\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"social d-flex flex-row mt-4\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n          className: \"company\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h5\", {\n            children: \"Company\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 82,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h6\", {\n            children: company\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 83,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n          className: \"twitter\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h5\", {\n            children: \"Twitter\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 86,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h6\", {\n            children: twitterHandle\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 87,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 68,\n    columnNumber: 5\n  }, this);\n}\n\n_c5 = SpeakerDemographics;\n\nfunction Speaker(_ref6) {\n  var speaker = _ref6.speaker,\n      showSessions = _ref6.showSessions,\n      onFavoriteToggle = _ref6.onFavoriteToggle;\n  var id = speaker.id,\n      first = speaker.first,\n      last = speaker.last,\n      sessions = speaker.sessions;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    className: \"col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: \"card card-height p-4 mt-4\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SpeakerImage, {\n        id: id,\n        first: first,\n        last: last\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 105,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SpeakerDemographics, _objectSpread(_objectSpread({}, speaker), {}, {\n        onFavoriteToggle: onFavoriteToggle\n      }), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 7\n    }, this), showSessions === true ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Sessions, {\n      sessions: sessions\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 7\n    }, this) : null]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 103,\n    columnNumber: 5\n  }, this);\n}\n\n_c6 = Speaker;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speaker);\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"Session\");\n$RefreshReg$(_c2, \"Sessions\");\n$RefreshReg$(_c3, \"SpeakerImage\");\n$RefreshReg$(_c4, \"SpeakerFavorite\");\n$RefreshReg$(_c5, \"SpeakerDemographics\");\n$RefreshReg$(_c6, \"Speaker\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlci5qcz82NWFmIl0sIm5hbWVzIjpbIlNlc3Npb24iLCJ0aXRsZSIsInJvb20iLCJuYW1lIiwiU2Vzc2lvbnMiLCJzZXNzaW9ucyIsIlNwZWFrZXJJbWFnZSIsImlkIiwiZmlyc3QiLCJsYXN0IiwiU3BlYWtlckZhdm9yaXRlIiwiZmF2b3JpdGUiLCJvbkZhdm9yaXRlVG9nZ2xlIiwidXNlU3RhdGUiLCJpbnRyYW5zaXRpb24iLCJzZXRJbnRyYW5zaXRpb24iLCJkb25lQ2FsbGJhY2siLCJjb25zb2xlIiwibG9nIiwiRGF0ZSIsImdldE1pbGxpc2Vjb25kcyIsIlNwZWFrZXJEZW1vZ3JhcGhpY3MiLCJiaW8iLCJjb21wYW55IiwidHdpdHRlckhhbmRsZSIsIlNwZWFrZXIiLCJzcGVha2VyIiwic2hvd1Nlc3Npb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBLFNBQVNBLE9BQVQsT0FBa0M7QUFBQSxNQUFmQyxLQUFlLFFBQWZBLEtBQWU7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFDaEMsc0JBQ0U7QUFBTSxhQUFTLEVBQUMsZUFBaEI7QUFBQSxlQUNHRCxLQURILG9CQUNVO0FBQUEsMkJBQWVDLElBQUksQ0FBQ0MsSUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDs7S0FOUUgsTzs7QUFRVCxTQUFTSSxRQUFULFFBQWdDO0FBQUEsTUFBWkMsUUFBWSxTQUFaQSxRQUFZO0FBQzlCLHNCQUNFO0FBQUssYUFBUyxFQUFDLHVCQUFmO0FBQUEsMkJBQ0UsOERBQUMsT0FBRCxvQkFBYUEsUUFBUSxDQUFDLENBQUQsQ0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEOztNQU5RRCxROztBQVFULFNBQVNFLFlBQVQsUUFBMkM7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ci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuZnVuY3Rpb24gU2Vzc2lvbih7IHRpdGxlLCByb29tIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJzZXNzaW9uIHctMTAwXCI+XG4gICAgICB7dGl0bGV9IDxzdHJvbmc+Um9vbToge3Jvb20ubmFtZX08L3N0cm9uZz5cbiAgICA8L3NwYW4+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFNlc3Npb25zKHsgc2Vzc2lvbnMgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2Vzc2lvbkJveCBjYXJkIGgtMjUwXCI+XG4gICAgICA8U2Vzc2lvbiB7Li4uc2Vzc2lvbnNbMF19IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFNwZWFrZXJJbWFnZSh7IGlkLCBmaXJzdCwgbGFzdCB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGVha2VyLWltZyBkLWZsZXggZmxleC1yb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgaC0zMDBcIj5cbiAgICAgIDxpbWdcbiAgICAgICAgY2xhc3NOYW1lPVwiY29udGFpbi1maXRcIlxuICAgICAgICBzcmM9e2AvaW1hZ2VzL3NwZWFrZXItJHtpZH0uanBnYH1cbiAgICAgICAgd2lkdGg9XCIzMDBcIlxuICAgICAgICBhbHQ9e2Ake2ZpcnN0fSAke2xhc3R9YH1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFNwZWFrZXJGYXZvcml0ZSh7IGZhdm9yaXRlLCBvbkZhdm9yaXRlVG9nZ2xlIH0pIHtcblxuICAgIGNvbnN0IFtpbnRyYW5zaXRpb24sc2V0SW50cmFuc2l0aW9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGZ1bmN0aW9uIGRvbmVDYWxsYmFjaygpIHtcbiAgICAgICAgc2V0SW50cmFuc2l0aW9uKGZhbHNlKTtcbiAgICAgICAgY29uc29sZS5sb2coYEluIFNwZWFrZXJGYXZvcml0ZTpkb25lQ2FsbGJhY2sgJHtuZXcgRGF0ZSgpLmdldE1pbGxpc2Vjb25kcygpfWApO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb24gcGFkQjFcIj5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZXRJbnRyYW5zaXRpb24odHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm4gb25GYXZvcml0ZVRvZ2dsZShkb25lQ2FsbGJhY2spO1xuICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgIGZhdm9yaXRlID09PSB0cnVlID9cbiAgICAgICAgICAgICAgXCJmYSBmYS1zdGFyIG9yYW5nZVwiIDogXCJmYSBmYS1zdGFyLW8gb3JhbmdlXCJcbiAgICAgICAgICB9XG4gICAgICAgICAgLz57XCJcIn1cbiAgICAgICAgICBGYXZvcml0ZXtcIlwifVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmZ1bmN0aW9uIFNwZWFrZXJEZW1vZ3JhcGhpY3Moe1xuICBmaXJzdCxcbiAgbGFzdCxcbiAgYmlvLFxuICBjb21wYW55LFxuICB0d2l0dGVySGFuZGxlLFxuICBmYXZvcml0ZSxcbiAgb25GYXZvcml0ZVRvZ2dsZVxufSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3BlYWtlci1pbmZvXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtYi0zXCI+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXRydW5jYXRlIHctMjAwXCI+XG4gICAgICAgICAge2ZpcnN0fSB7bGFzdH1cbiAgICAgICAgPC9oMz5cbiAgICAgIDwvZGl2PlxuICAgICAgPFNwZWFrZXJGYXZvcml0ZSBcbiAgICAgICAgZmF2b3JpdGU9e2Zhdm9yaXRlfVxuICAgICAgICBvbkZhdm9yaXRlVG9nZ2xlPXtvbkZhdm9yaXRlVG9nZ2xlfSBcbiAgICAgIC8+XG4gICAgICA8ZGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLWRlc2NyaXB0aW9uXCI+e2Jpb308L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsIGQtZmxleCBmbGV4LXJvdyBtdC00XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wYW55XCI+XG4gICAgICAgICAgICA8aDU+Q29tcGFueTwvaDU+XG4gICAgICAgICAgICA8aDY+e2NvbXBhbnl9PC9oNj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3aXR0ZXJcIj5cbiAgICAgICAgICAgIDxoNT5Ud2l0dGVyPC9oNT5cbiAgICAgICAgICAgIDxoNj57dHdpdHRlckhhbmRsZX08L2g2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBTcGVha2VyKHsgc3BlYWtlciwgc2hvd1Nlc3Npb25zLCBvbkZhdm9yaXRlVG9nZ2xlIH0pIHtcbiAgY29uc3QgeyBcbiAgICBpZCwgXG4gICAgZmlyc3QsIFxuICAgIGxhc3QsIFxuICAgIHNlc3Npb25zXG4gICB9ID0gc3BlYWtlcjtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTQgY29sLXNtLTEyIGNvbC14cy0xMlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtaGVpZ2h0IHAtNCBtdC00XCI+XG4gICAgICAgIDxTcGVha2VySW1hZ2UgaWQ9e2lkfSBmaXJzdD17Zmlyc3R9IGxhc3Q9e2xhc3R9IC8+XG4gICAgICAgIDxTcGVha2VyRGVtb2dyYXBoaWNzIHsuLi5zcGVha2VyfSBvbkZhdm9yaXRlVG9nZ2xlPXtvbkZhdm9yaXRlVG9nZ2xlfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICB7c2hvd1Nlc3Npb25zID09PSB0cnVlID8gXG4gICAgICA8U2Vzc2lvbnMgc2Vzc2lvbnM9e3Nlc3Npb25zfSAvPiA6IG51bGwgfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTcGVha2VyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Speaker.js\n");

/***/ })

});