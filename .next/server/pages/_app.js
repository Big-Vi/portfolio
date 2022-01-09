/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./functions/ga.js":
/*!*************************!*\
  !*** ./functions/ga.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pageview\": () => (/* binding */ pageview),\n/* harmony export */   \"event\": () => (/* binding */ event)\n/* harmony export */ });\n// log the pageview with their URL\nconst pageview = (url)=>{\n// window.gtag('config', 'UA-203321363-1', {\n//     page_path: url,\n// });\n};\n// log specific events happening.\nconst event = ({ action , params  })=>{\n    window.gtag('event', action, params);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mdW5jdGlvbnMvZ2EuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxFQUFrQztBQUMzQixLQUFLLENBQUNBLFFBQVEsSUFBSUMsR0FBRyxHQUFLLENBQUM7QUFDOUIsRUFBNEM7QUFDNUMsRUFBc0I7QUFDdEIsRUFBTTtBQUNWLENBQUM7QUFFRCxFQUFpQztBQUMxQixLQUFLLENBQUNDLEtBQUssSUFBSSxDQUFDLENBQUNDLE1BQU0sR0FBRUMsTUFBTSxFQUFDLENBQUMsR0FBSyxDQUFDO0lBQzFDQyxNQUFNLENBQUNDLElBQUksQ0FBQyxDQUFPLFFBQUVILE1BQU0sRUFBRUMsTUFBTTtBQUN2QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vZnVuY3Rpb25zL2dhLmpzP2E3MzkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbG9nIHRoZSBwYWdldmlldyB3aXRoIHRoZWlyIFVSTFxuZXhwb3J0IGNvbnN0IHBhZ2V2aWV3ID0gKHVybCkgPT4ge1xuICAgIC8vIHdpbmRvdy5ndGFnKCdjb25maWcnLCAnVUEtMjAzMzIxMzYzLTEnLCB7XG4gICAgLy8gICAgIHBhZ2VfcGF0aDogdXJsLFxuICAgIC8vIH0pO1xufTtcblxuLy8gbG9nIHNwZWNpZmljIGV2ZW50cyBoYXBwZW5pbmcuXG5leHBvcnQgY29uc3QgZXZlbnQgPSAoeyBhY3Rpb24sIHBhcmFtcyB9KSA9PiB7XG4gICAgd2luZG93Lmd0YWcoJ2V2ZW50JywgYWN0aW9uLCBwYXJhbXMpO1xufTsiXSwibmFtZXMiOlsicGFnZXZpZXciLCJ1cmwiLCJldmVudCIsImFjdGlvbiIsInBhcmFtcyIsIndpbmRvdyIsImd0YWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./functions/ga.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_base_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/base.scss */ \"./styles/base.scss\");\n/* harmony import */ var _styles_base_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_base_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/styles.scss */ \"./styles/styles.scss\");\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_nprogress_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/nprogress.scss */ \"./styles/nprogress.scss\");\n/* harmony import */ var _styles_nprogress_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_nprogress_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_gtm_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-gtm-module */ \"react-gtm-module\");\n/* harmony import */ var react_gtm_module__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_gtm_module__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _functions_ga__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @functions/ga */ \"./functions/ga.js\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! nprogress */ \"nprogress\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\nconst tagManagerArgs = {\n    gtmId: 'GTM-N9J4M9S'\n};\nfunction MyApp({ Component , pageProps  }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        react_gtm_module__WEBPACK_IMPORTED_MODULE_6___default().initialize(tagManagerArgs);\n        // const handleRouteChange = (url) => {\n        //     ga.pageview(url)\n        // }\n        router.events.on('routeChangeStart', (url)=>{\n            nprogress__WEBPACK_IMPORTED_MODULE_8___default().configure({\n                showSpinner: false\n            });\n            nprogress__WEBPACK_IMPORTED_MODULE_8___default().start();\n        });\n        router.events.on('routeChangeComplete', (url, { shallow  })=>{\n            // if (!shallow) {\n            //     handleRouteChange(url)\n            // }\n            nprogress__WEBPACK_IMPORTED_MODULE_8___default().done();\n            // small hack to ensure scroll to top always happens last\n            setTimeout(()=>{\n                window.scrollTo(0, 0);\n            }, 100);\n        });\n        router.events.on('routeChangeError', ()=>nprogress__WEBPACK_IMPORTED_MODULE_8___default().done()\n        );\n        return ()=>{\n            router.events.off('routeChangeComplete', (url)=>{\n                handleRouteChange(url);\n            });\n        };\n    }, [\n        router.events\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n        ...pageProps,\n        __source: {\n            fileName: \"/Users/pod70/Sites/Personal/portfolio/pages/_app.js\",\n            lineNumber: 48,\n            columnNumber: 10\n        },\n        __self: this\n    }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEI7QUFDRTtBQUNHO0FBRUE7QUFDTTtBQUNFO0FBQ047QUFDRjtBQUVqQyxLQUFLLENBQUNLLGNBQWMsR0FBRyxDQUFDO0lBQ3BCQyxLQUFLLEVBQUUsQ0FBYTtBQUN4QixDQUFDO1NBRVFDLEtBQUssQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBRUMsU0FBUyxFQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3hDLEtBQUssQ0FBQ0MsTUFBTSxHQUFHVCxzREFBUztJQUV6QkQsZ0RBQVMsS0FBTyxDQUFDO1FBQ1pFLGtFQUFxQixDQUFDRyxjQUFjO1FBRXBDLEVBQXVDO1FBQ3ZDLEVBQXVCO1FBQ3ZCLEVBQUk7UUFFSkssTUFBTSxDQUFDRSxNQUFNLENBQUNDLEVBQUUsQ0FBQyxDQUFrQixvQkFBR0MsR0FBRyxHQUFLLENBQUM7WUFDN0NWLDBEQUFtQixDQUFDLENBQUM7Z0JBQUNZLFdBQVcsRUFBRSxLQUFLO1lBQUMsQ0FBQztZQUMxQ1osc0RBQWU7UUFDakIsQ0FBQztRQUNETSxNQUFNLENBQUNFLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDLENBQXFCLHVCQUFHQyxHQUFHLEVBQUUsQ0FBQ0ksQ0FBQUEsT0FBTyxHQUFDLEdBQU0sQ0FBQztZQUM1RCxFQUFrQjtZQUNsQixFQUE2QjtZQUM3QixFQUFJO1lBQ0pkLHFEQUFjO1lBQ2QsRUFBeUQ7WUFDekRnQixVQUFVLEtBQU8sQ0FBQztnQkFDaEJDLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ3RCLENBQUMsRUFBRSxHQUFHO1FBQ1IsQ0FBQztRQUNEWixNQUFNLENBQUNFLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDLENBQWtCLHVCQUFRVCxxREFBYzs7UUFFekQsTUFBTSxLQUFPLENBQUM7WUFDVk0sTUFBTSxDQUFDRSxNQUFNLENBQUNXLEdBQUcsQ0FBQyxDQUFxQix1QkFBR1QsR0FBRyxHQUFLLENBQUM7Z0JBQy9DVSxpQkFBaUIsQ0FBQ1YsR0FBRztZQUN6QixDQUFDO1FBQ0wsQ0FBQztJQUNOLENBQUMsRUFBRSxDQUFDSjtRQUFBQSxNQUFNLENBQUNFLE1BQU07SUFBQSxDQUFDO0lBRWpCLE1BQU0sc0VBQUVKLFNBQVM7V0FBS0MsU0FBUzs7Ozs7Ozs7QUFDakMsQ0FBQztBQUNELGlFQUFlRixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3N0eWxlcy9iYXNlLnNjc3NcIlxuaW1wb3J0IFwiLi4vc3R5bGVzL3N0eWxlcy5zY3NzXCJcbmltcG9ydCBcIi4uL3N0eWxlcy9ucHJvZ3Jlc3Muc2Nzc1wiO1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgVGFnTWFuYWdlciBmcm9tICdyZWFjdC1ndG0tbW9kdWxlJ1xuaW1wb3J0ICogYXMgZ2EgZnJvbSAnQGZ1bmN0aW9ucy9nYSdcbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzJztcblxuY29uc3QgdGFnTWFuYWdlckFyZ3MgPSB7XG4gICAgZ3RtSWQ6ICdHVE0tTjlKNE05Uydcbn1cblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBUYWdNYW5hZ2VyLmluaXRpYWxpemUodGFnTWFuYWdlckFyZ3MpXG4gICAgICBcbiAgICAgIC8vIGNvbnN0IGhhbmRsZVJvdXRlQ2hhbmdlID0gKHVybCkgPT4ge1xuICAgICAgLy8gICAgIGdhLnBhZ2V2aWV3KHVybClcbiAgICAgIC8vIH1cblxuICAgICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VTdGFydCcsICh1cmwpID0+IHtcbiAgICAgICAgTlByb2dyZXNzLmNvbmZpZ3VyZSh7IHNob3dTcGlubmVyOiBmYWxzZSB9KTtcbiAgICAgICAgTlByb2dyZXNzLnN0YXJ0KCk7XG4gICAgICB9KTtcbiAgICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCAodXJsLCB7c2hhbGxvd30gKSA9PiB7XG4gICAgICAgIC8vIGlmICghc2hhbGxvdykge1xuICAgICAgICAvLyAgICAgaGFuZGxlUm91dGVDaGFuZ2UodXJsKVxuICAgICAgICAvLyB9XG4gICAgICAgIE5Qcm9ncmVzcy5kb25lKCk7XG4gICAgICAgIC8vIHNtYWxsIGhhY2sgdG8gZW5zdXJlIHNjcm9sbCB0byB0b3AgYWx3YXlzIGhhcHBlbnMgbGFzdFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgIH0sIDEwMCk7XG4gICAgICB9KTtcbiAgICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlRXJyb3InLCAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpKTtcblxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICByb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VDb21wbGV0ZScsICh1cmwpID0+IHtcbiAgICAgICAgICAgICAgaGFuZGxlUm91dGVDaGFuZ2UodXJsKVxuICAgICAgICAgIH0pXG4gICAgICB9XG5cdH0sIFtyb3V0ZXIuZXZlbnRzXSk7XG5cbiAgcmV0dXJuIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbn1cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiVGFnTWFuYWdlciIsImdhIiwiTlByb2dyZXNzIiwidGFnTWFuYWdlckFyZ3MiLCJndG1JZCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwiaW5pdGlhbGl6ZSIsImV2ZW50cyIsIm9uIiwidXJsIiwiY29uZmlndXJlIiwic2hvd1NwaW5uZXIiLCJzdGFydCIsInNoYWxsb3ciLCJkb25lIiwic2V0VGltZW91dCIsIndpbmRvdyIsInNjcm9sbFRvIiwib2ZmIiwiaGFuZGxlUm91dGVDaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/base.scss":
/*!**************************!*\
  !*** ./styles/base.scss ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "./styles/nprogress.scss":
/*!*******************************!*\
  !*** ./styles/nprogress.scss ***!
  \*******************************/
/***/ (() => {



/***/ }),

/***/ "./styles/styles.scss":
/*!****************************!*\
  !*** ./styles/styles.scss ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("nprogress");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-gtm-module":
/*!***********************************!*\
  !*** external "react-gtm-module" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-gtm-module");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();