"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/resume-reset-password",{

/***/ "./pages/resume-reset-password.tsx":
/*!*****************************************!*\
  !*** ./pages/resume-reset-password.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_pod70_Sites_Personal_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_pod70_Sites_Personal_portfolio_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_pod70_Sites_Personal_portfolio_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_pod70_Sites_Personal_portfolio_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_pod70_Sites_Personal_portfolio_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.js\");\n/* harmony import */ var _getRealmApp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../getRealmApp */ \"./getRealmApp.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/Users/pod70/Sites/Personal/portfolio/pages/resume-reset-password.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_pod70_Sites_Personal_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\nvar Home = function Home() {\n  _s();\n\n  // Access the Realm App.\n  var app = (0,_getRealmApp__WEBPACK_IMPORTED_MODULE_8__.getRealmApp)();\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),\n      submitting = _useState[0],\n      setSubmitting = _useState[1];\n\n  var _useForm = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm)(),\n      register = _useForm.register,\n      reset = _useForm.reset,\n      handleSubmit = _useForm.handleSubmit,\n      errors = _useForm.formState.errors;\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),\n      message = _useState2[0],\n      setMessage = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),\n      success = _useState3[0],\n      setSuccess = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),\n      error = _useState4[0],\n      setError = _useState4[1];\n\n  var submit = /*#__PURE__*/function () {\n    var _ref = (0,_Users_pod70_Sites_Personal_portfolio_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/_Users_pod70_Sites_Personal_portfolio_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(e) {\n      var _router$query, token, tokenId;\n\n      return _Users_pod70_Sites_Personal_portfolio_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              setSubmitting(true);\n              _router$query = router.query, token = _router$query.token, tokenId = _router$query.tokenId;\n              console.log(token);\n              _context.prev = 3;\n              _context.next = 6;\n              return app.emailPasswordAuth.resetPassword(\"222222\", token, tokenId);\n\n            case 6:\n              _context.next = 11;\n              break;\n\n            case 8:\n              _context.prev = 8;\n              _context.t0 = _context[\"catch\"](3);\n              setError('error');\n\n            case 11:\n              if (!error) {\n                _context.next = 16;\n                break;\n              }\n\n              // 4. If there was an error, update the message in state.\n              setMessage(\"Something went wrong. Please try again later.\");\n              setSuccess(false);\n              setSubmitting(false);\n              return _context.abrupt(\"return\");\n\n            case 16:\n              // 5. Clear the input value and show a success message.\n              setTimeout(function () {\n                reset();\n                setSubmitting(false);\n                setSuccess(true);\n              }, 500);\n\n            case 17:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[3, 8]]);\n    }));\n\n    return function submit(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n        children: \"Vignesh Murugan | Full stack developer\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n        name: \"description\",\n        content: \"I'm Vignesh and full-stack developer currently working for Plato Creative in Christchurch New Zealand.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_6__.default, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n        id: \"reset-form\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n          className: \"block mb-4 xl:mb-6\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", _objectSpread(_objectSpread({\n            autoComplete: \"off\"\n          }, register('password', {\n            required: true\n          })), {}, {\n            type: \"password\",\n            name: \"password\",\n            placeholder: \"Enter password\",\n            className: \"border border-black w-full p-2\"\n          }), void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 15\n          }, _this), errors.password && errors.password.type === \"required\" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n            className: \"validation text-error\",\n            children: \"Password field is required\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 74\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n          onClick: handleSubmit(submit),\n          className: \"mx-auto button cursor-pointer mt-2 mb-4 \".concat(submitting ? \"disabled\" : \"\", \" \"),\n          children: submitting ? \"Resetting\" : \"Reset\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 51,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Home, \"5mB/+9oY/+ZXEMYkdBVDs4RsGyY=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter, react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm];\n});\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBcEIsYUFBOEJYLFFBQVEsQ0FBQyxVQUFELEVBQWE7QUFBQ3FCLFlBQUFBLFFBQVEsRUFBRTtBQUFYLFdBQWIsQ0FBdEM7QUFBc0UsZ0JBQUksRUFBQyxVQUEzRTtBQUFzRixnQkFBSSxFQUFDLFVBQTNGO0FBQXNHLHVCQUFXLEVBQUMsZ0JBQWxIO0FBQW1JLHFCQUFTLEVBQUM7QUFBN0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixFQUVLbEIsTUFBTSxDQUFDbUIsUUFBUCxJQUFtQm5CLE1BQU0sQ0FBQ21CLFFBQVAsQ0FBZ0JDLElBQWhCLEtBQXlCLFVBQTVDLGlCQUEwRDtBQUFNLHFCQUFTLEVBQUMsdUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUYvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFPRTtBQUFRLGlCQUFPLEVBQUVyQixZQUFZLENBQUNTLE1BQUQsQ0FBN0I7QUFBdUMsbUJBQVMsb0RBQThDYixVQUFVLEdBQUcsVUFBSCxHQUFnQixFQUF4RSxNQUFoRDtBQUFBLG9CQUNNQSxVQUFVLEdBQUcsV0FBSCxHQUFpQjtBQURqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBGLGVBVUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF3QkQsQ0EvREQ7O0dBQU1IO1VBR1dELG9EQUdtREY7OztLQU45REc7QUFpRU4sK0RBQWVBLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVzdW1lLXJlc2V0LXBhc3N3b3JkLnRzeD81ZTg2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgTGF5b3V0IGZyb20gJ0Bjb21wb25lbnRzL0xheW91dCdcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCJcbmltcG9ydCAqIGFzIFJlYWxtIGZyb20gXCJyZWFsbS13ZWJcIjtcbmltcG9ydCB7Z2V0UmVhbG1BcHB9IGZyb20gJy4uL2dldFJlYWxtQXBwJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgLy8gQWNjZXNzIHRoZSBSZWFsbSBBcHAuXG4gIGNvbnN0IGFwcCA9IGdldFJlYWxtQXBwKCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IFtzdWJtaXR0aW5nLCBzZXRTdWJtaXR0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCB7IHJlZ2lzdGVyLCByZXNldCwgaGFuZGxlU3VibWl0LCBmb3JtU3RhdGU6IHsgZXJyb3JzIH0gIH0gPSB1c2VGb3JtKCkgXG5cbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtzdWNjZXNzLCBzZXRTdWNjZXNzXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpXG5cbiAgY29uc3Qgc3VibWl0ID0gYXN5bmMgKGU6IGFueSkgPT4ge1xuICAgICAgICBzZXRTdWJtaXR0aW5nKHRydWUpXG4gICAgICAgIGNvbnN0IHsgdG9rZW4sIHRva2VuSWQgfSA9IHJvdXRlci5xdWVyeTtcbiAgICAgICAgY29uc29sZS5sb2codG9rZW4pO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGF3YWl0IGFwcC5lbWFpbFBhc3N3b3JkQXV0aC5yZXNldFBhc3N3b3JkKFwiMjIyMjIyXCIsIHRva2VuLCB0b2tlbklkKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBzZXRFcnJvcignZXJyb3InKTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIC8vIDQuIElmIHRoZXJlIHdhcyBhbiBlcnJvciwgdXBkYXRlIHRoZSBtZXNzYWdlIGluIHN0YXRlLlxuICAgICAgICAgICAgc2V0TWVzc2FnZShcIlNvbWV0aGluZyB3ZW50IHdyb25nLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiKVxuICAgICAgICAgICAgc2V0U3VjY2VzcyhmYWxzZSlcbiAgICAgICAgICAgIHNldFN1Ym1pdHRpbmcoZmFsc2UpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIDUuIENsZWFyIHRoZSBpbnB1dCB2YWx1ZSBhbmQgc2hvdyBhIHN1Y2Nlc3MgbWVzc2FnZS5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICByZXNldCgpXG4gICAgICAgICAgICBzZXRTdWJtaXR0aW5nKGZhbHNlKVxuICAgICAgICAgICAgc2V0U3VjY2Vzcyh0cnVlKVxuICAgICAgICB9LCA1MDApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlZpZ25lc2ggTXVydWdhbiB8IEZ1bGwgc3RhY2sgZGV2ZWxvcGVyPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkknbSBWaWduZXNoIGFuZCBmdWxsLXN0YWNrIGRldmVsb3BlciBjdXJyZW50bHkgd29ya2luZyBmb3IgUGxhdG8gQ3JlYXRpdmUgaW4gQ2hyaXN0Y2h1cmNoIE5ldyBaZWFsYW5kLlwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPExheW91dD5cbiAgICAgICAgPGZvcm0gaWQ9XCJyZXNldC1mb3JtXCI+XG5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgbWItNCB4bDptYi02XCI+XG4gICAgICAgICAgICAgIDxpbnB1dCBhdXRvQ29tcGxldGU9XCJvZmZcIiB7Li4ucmVnaXN0ZXIoJ3Bhc3N3b3JkJywge3JlcXVpcmVkOiB0cnVlfSl9IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgcGFzc3dvcmRcIiBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWJsYWNrIHctZnVsbCBwLTJcIi8+XG4gICAgICAgICAgICAgIHtlcnJvcnMucGFzc3dvcmQgJiYgZXJyb3JzLnBhc3N3b3JkLnR5cGUgPT09IFwicmVxdWlyZWRcIiAmJiA8c3BhbiBjbGFzc05hbWU9XCJ2YWxpZGF0aW9uIHRleHQtZXJyb3JcIj5QYXNzd29yZCBmaWVsZCBpcyByZXF1aXJlZDwvc3Bhbj59XG4gICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlU3VibWl0KHN1Ym1pdCl9IGNsYXNzTmFtZT17YG14LWF1dG8gYnV0dG9uIGN1cnNvci1wb2ludGVyIG10LTIgbWItNCAkeyBzdWJtaXR0aW5nID8gXCJkaXNhYmxlZFwiIDogXCJcIiB9IGB9PlxuICAgICAgICAgICAgICB7IHN1Ym1pdHRpbmcgPyBcIlJlc2V0dGluZ1wiIDogXCJSZXNldFwiIH1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnIvPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L0xheW91dD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkhlYWQiLCJMYXlvdXQiLCJ1c2VGb3JtIiwiZ2V0UmVhbG1BcHAiLCJ1c2VSb3V0ZXIiLCJIb21lIiwiYXBwIiwicm91dGVyIiwic3VibWl0dGluZyIsInNldFN1Ym1pdHRpbmciLCJyZWdpc3RlciIsInJlc2V0IiwiaGFuZGxlU3VibWl0IiwiZXJyb3JzIiwiZm9ybVN0YXRlIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJzdWNjZXNzIiwic2V0U3VjY2VzcyIsImVycm9yIiwic2V0RXJyb3IiLCJzdWJtaXQiLCJlIiwicXVlcnkiLCJ0b2tlbiIsInRva2VuSWQiLCJjb25zb2xlIiwibG9nIiwiZW1haWxQYXNzd29yZEF1dGgiLCJyZXNldFBhc3N3b3JkIiwic2V0VGltZW91dCIsInJlcXVpcmVkIiwicGFzc3dvcmQiLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/resume-reset-password.tsx\n");

/***/ })

});