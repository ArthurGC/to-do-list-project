/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://use.typekit.net/mry2cbf.css);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\n::before,\\n::after {\\n  box-sizing: border-box;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nbody {\\n  width: 100%;\\n  min-height: 100vh;\\n  position: relative;\\n}\\n\\nul {\\n  list-style: none;\\n}\\n\\n.link {\\n  text-decoration: none;\\n}\\n\\n.completed {\\n  text-decoration: line-through;\\n  color: #bbb;\\n}\\n\\nheader {\\n  background: #2e8ae6;\\n}\\nheader nav {\\n  padding: calc(1rem + 0.8vw) calc(1.5rem + 4.5vw);\\n}\\nheader nav a {\\n  font-family: muli, sans-serif;\\n  font-style: normal;\\n  font-size: calc(24px + 0.5vw);\\n  font-weight: 500;\\n  line-height: 32px;\\n  color: #fff;\\n}\\n\\n.content {\\n  padding: calc(1rem + 0.8vw) calc(1.5rem + 4.5vw);\\n}\\n.content h1 {\\n  margin: calc(1rem + 2vh) 0;\\n  font-family: muli, sans-serif;\\n  font-style: normal;\\n  font-size: calc(24px + 0.7vw);\\n  font-weight: 800;\\n  line-height: 32px;\\n  text-align: center;\\n  color: #222;\\n}\\n.content .container {\\n  position: relative;\\n  margin: calc(1rem + 2vh) 0;\\n  max-width: 500px;\\n  margin-inline: auto;\\n  background: #fff;\\n  min-height: 320px;\\n  border: none;\\n  box-shadow: 0 5px 8px 0 #bebabe;\\n}\\n.content .container-title {\\n  padding: calc(0.5rem + 0.3vw) calc(0.8rem + 0.5vw);\\n  border-bottom: 1px solid #ebebeb;\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  justify-content: space-between;\\n}\\n.content .container-title h2 {\\n  font-family: muli, sans-serif;\\n  font-style: normal;\\n  font-size: calc(15px + 0.3vw);\\n  font-weight: 600;\\n  line-height: 32px;\\n  color: #6a6c75;\\n}\\n.content .container-title i {\\n  font-size: calc(11px + 0.3vw);\\n  cursor: pointer;\\n  color: #aaa;\\n}\\n.content .container .input-task {\\n  width: 100%;\\n  height: calc(2.5rem + 0.4vw);\\n  border: none;\\n  outline: none;\\n  font-family: muli, sans-serif;\\n  font-style: normal;\\n  font-size: calc(15px + 0.3vw);\\n  font-weight: 500;\\n  line-height: 24px;\\n  color: #6a6c75;\\n  font-style: italic;\\n  padding: 0 calc(0.8rem + 0.5vw);\\n  border-bottom: 1px solid #ebebeb;\\n}\\n.content .container ul {\\n  min-height: 200px;\\n  max-height: 45vh;\\n  overflow: auto;\\n}\\n.content .container ul li {\\n  font-family: muli, sans-serif;\\n  font-style: normal;\\n  font-size: calc(15px + 0.3vw);\\n  font-weight: 500;\\n  line-height: 24px;\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  justify-content: space-between;\\n  color: #6a6c75;\\n  padding: calc(0.5rem + 0.3vw) calc(0.8rem + 0.5vw);\\n  border-bottom: 1px solid #ebebeb;\\n}\\n.content .container ul li input {\\n  flex-basis: 10%;\\n  cursor: pointer;\\n}\\n.content .container ul li label {\\n  flex-basis: 77%;\\n  outline: none;\\n  border-radius: 5px;\\n  padding: 0 8px;\\n}\\n.content .container ul li .remove {\\n  flex-basis: 5%;\\n  cursor: pointer;\\n  color: #aaa;\\n}\\n.content .container .btn-clear {\\n  position: sticky;\\n  left: 0;\\n  bottom: 0;\\n  width: 100%;\\n  text-align: center;\\n  padding: calc(0.5rem + 0.3vw) calc(0.8rem + 0.5vw);\\n  font-family: muli, sans-serif;\\n  font-style: normal;\\n  font-size: calc(15px + 0.3vw);\\n  font-weight: 500;\\n  line-height: 24px;\\n  color: #6a6c75;\\n  background: #f6f6f6;\\n  cursor: pointer;\\n}\\n\\n.footer {\\n  position: absolute;\\n  left: 0;\\n  bottom: 0;\\n  width: 100%;\\n  padding: calc(1rem + 0.8vw) calc(1.5rem + 4.5vw);\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  justify-content: space-between;\\n  background: #f6f6f6;\\n}\\n.footer__p {\\n  font-family: muli, sans-serif;\\n  font-style: normal;\\n  font-size: calc(12px + 0.3vw);\\n  font-weight: 500;\\n  line-height: 24px;\\n  color: #6a6c75;\\n}\\n\\n.container-list .item .text-task:focus {\\n  background: #f1ff6e;\\n}\\n.container-list .item .remove:hover {\\n  color: red;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list-project/./src/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/getTarget.js */ \"./node_modules/style-loader/dist/runtime/getTarget.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = function(css, style){\n      if (style.styleSheet) {\n        style.styleSheet.cssText = css;\n      } else {\n      while (style.firstChild) {\n        style.removeChild(style.firstChild);\n      }\n\n      style.appendChild(document.createTextNode(css));\n    }\n  };\noptions.setAttributes = function(style) {\n        var nonce =\n           true ? __webpack_require__.nc : 0;\n\n        if (nonce) {\n          style.setAttribute(\"nonce\", nonce);\n        }\n      };\noptions.insert = function(style){\n    var target = _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default()(\"head\");\n\n    if (!target) {\n      throw new Error(\n        \"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\"\n      );\n    }\n\n    target.appendChild(style);\n  };\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_4__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_4__.default && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_4__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_4__.default.locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list-project/./src/styles.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/getTarget.js":
/*!*************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/getTarget.js ***!
  \*************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n\nmodule.exports = getTarget;\n\n//# sourceURL=webpack://to-do-list-project/./node_modules/style-loader/dist/runtime/getTarget.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ \"./src/styles.scss\");\n/* harmony import */ var _modules_tools_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/tools.js */ \"./src/modules/tools.js\");\n/* harmony import */ var _modules_add_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/add.js */ \"./src/modules/add.js\");\n/* harmony import */ var _modules_render_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/render.js */ \"./src/modules/render.js\");\n/* harmony import */ var _modules_remove_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/remove.js */ \"./src/modules/remove.js\");\n/* harmony import */ var _modules_drag_drop_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/drag-drop.js */ \"./src/modules/drag-drop.js\");\n/* harmony import */ var _modules_checkbox_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/checkbox.js */ \"./src/modules/checkbox.js\");\n/* harmony import */ var _modules_description_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/description.js */ \"./src/modules/description.js\");\n\n\n\n\n\n\n\n\n\nconst input = (0,_modules_tools_js__WEBPACK_IMPORTED_MODULE_1__.getElement)('.input-task');\nconst listContainer = (0,_modules_tools_js__WEBPACK_IMPORTED_MODULE_1__.getElement)('.container-list');\nconst removeCompletedTasks = (0,_modules_tools_js__WEBPACK_IMPORTED_MODULE_1__.getElement)('.btn-clear');\nconst removeAllIcon = (0,_modules_tools_js__WEBPACK_IMPORTED_MODULE_1__.getElement)('.refresh-icon');\n\n// Page loads\ndocument.addEventListener('DOMContentLoaded', () => {\n  (0,_modules_render_js__WEBPACK_IMPORTED_MODULE_3__.renderTaskDom)();\n  (0,_modules_drag_drop_js__WEBPACK_IMPORTED_MODULE_5__.refreshDragDropTarget)();\n  (0,_modules_description_js__WEBPACK_IMPORTED_MODULE_7__.refreshDescriptions)();\n});\n\n// Add a task\ninput.addEventListener('keyup', (event) => {\n  event.preventDefault();\n  (0,_modules_add_js__WEBPACK_IMPORTED_MODULE_2__.addTask)(event);\n});\n\n// Checkbox status and remove a task\nlistContainer.addEventListener('click', (event) => {\n  (0,_modules_checkbox_js__WEBPACK_IMPORTED_MODULE_6__.refreshStatus)(event);\n  (0,_modules_remove_js__WEBPACK_IMPORTED_MODULE_4__.removeTask)(event);\n});\n\n// Remove completed tasks\nremoveCompletedTasks.addEventListener('click', _modules_remove_js__WEBPACK_IMPORTED_MODULE_4__.removeTaskChecked);\n\n// Remove all tasks\nremoveAllIcon.addEventListener('click', _modules_remove_js__WEBPACK_IMPORTED_MODULE_4__.removeAllTask);\n\n\n//# sourceURL=webpack://to-do-list-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/add.js":
/*!****************************!*\
  !*** ./src/modules/add.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTask\": () => (/* binding */ addTask)\n/* harmony export */ });\n/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store.js */ \"./src/modules/store.js\");\n/* harmony import */ var _tools_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tools.js */ \"./src/modules/tools.js\");\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render.js */ \"./src/modules/render.js\");\n/* harmony import */ var _drag_drop_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drag-drop.js */ \"./src/modules/drag-drop.js\");\n/* harmony import */ var _description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./description.js */ \"./src/modules/description.js\");\n/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./classes.js */ \"./src/modules/classes.js\");\n\n\n\n\n\n\n\nconst addTask = (event) => {\n  if (event.keyCode === 13) {\n    const listTasks = (0,_store_js__WEBPACK_IMPORTED_MODULE_0__.getDataLocalStorage)();\n    const input = (0,_tools_js__WEBPACK_IMPORTED_MODULE_1__.getElement)('.input-task');\n    const inputValue = (0,_tools_js__WEBPACK_IMPORTED_MODULE_1__.getElementValue)('.input-task');\n    const newTask = new _classes_js__WEBPACK_IMPORTED_MODULE_5__.Task(inputValue, false, listTasks.length);\n    listTasks.push(newTask);\n    (0,_store_js__WEBPACK_IMPORTED_MODULE_0__.setDataLocalStorage)(listTasks);\n    input.value = '';\n    (0,_render_js__WEBPACK_IMPORTED_MODULE_2__.renderTaskDom)();\n    (0,_drag_drop_js__WEBPACK_IMPORTED_MODULE_3__.refreshDragDropTarget)();\n    (0,_description_js__WEBPACK_IMPORTED_MODULE_4__.refreshDescriptions)();\n  }\n};\n\n\n//# sourceURL=webpack://to-do-list-project/./src/modules/add.js?");

/***/ }),

/***/ "./src/modules/checkbox.js":
/*!*********************************!*\
  !*** ./src/modules/checkbox.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"refreshStatus\": () => (/* binding */ refreshStatus)\n/* harmony export */ });\n/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store.js */ \"./src/modules/store.js\");\n\n\nconst refreshStatus = (event) => {\n  const isCheckBox = event.target.classList.contains('checkbox');\n  if (isCheckBox) {\n    const listTasks = (0,_store_js__WEBPACK_IMPORTED_MODULE_0__.getDataLocalStorage)();\n    const id = parseInt(event.target.parentElement.dataset.id, 10);\n    if (event.target.checked) {\n      listTasks[id].status = true;\n      event.target.nextElementSibling.classList.add('completed');\n      event.target.setAttribute('checked', 'true');\n    } else {\n      listTasks[id].status = false;\n      event.target.nextElementSibling.classList.remove('completed');\n      event.target.removeAttribute('checked');\n    }\n    (0,_store_js__WEBPACK_IMPORTED_MODULE_0__.setDataLocalStorage)(listTasks);\n  }\n};\n\n\n//# sourceURL=webpack://to-do-list-project/./src/modules/checkbox.js?");

/***/ }),

/***/ "./src/modules/classes.js":
/*!********************************!*\
  !*** ./src/modules/classes.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Task\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n  constructor(description, status, index) {\n    this.description = description;\n    this.status = status;\n    this.index = index;\n  }\n}\n\n\n//# sourceURL=webpack://to-do-list-project/./src/modules/classes.js?");

/***/ }),

/***/ "./src/modules/description.js":
/*!************************************!*\
  !*** ./src/modules/description.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"refreshDescriptions\": () => (/* binding */ refreshDescriptions)\n/* harmony export */ });\n/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store.js */ \"./src/modules/store.js\");\n/* harmony import */ var _tools_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tools.js */ \"./src/modules/tools.js\");\n\n\n\nconst refreshDescriptions = () => {\n  const descriptionLabels = (0,_tools_js__WEBPACK_IMPORTED_MODULE_1__.getElements)('.container-list li .text-task');\n  descriptionLabels.forEach((label) => {\n    label.addEventListener('input', () => {\n      const listTasks = (0,_store_js__WEBPACK_IMPORTED_MODULE_0__.getDataLocalStorage)();\n      const id = parseInt(label.parentElement.dataset.id, 10);\n      listTasks[id].description = label.textContent;\n      (0,_store_js__WEBPACK_IMPORTED_MODULE_0__.setDataLocalStorage)(listTasks);\n    });\n  });\n};\n\n\n//# sourceURL=webpack://to-do-list-project/./src/modules/description.js?");

/***/ }),

/***/ "./src/modules/drag-drop.js":
/*!**********************************!*\
  !*** ./src/modules/drag-drop.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"refreshDragDropTarget\": () => (/* binding */ refreshDragDropTarget)\n/* harmony export */ });\n/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store.js */ \"./src/modules/store.js\");\n/* harmony import */ var _tools_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tools.js */ \"./src/modules/tools.js\");\n/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes.js */ \"./src/modules/classes.js\");\n\n\n\n\nconst listContainer = (0,_tools_js__WEBPACK_IMPORTED_MODULE_1__.getElement)('.container-list');\n\nconst refreshInformation = () => {\n  const listTasks = [];\n  const items = (0,_tools_js__WEBPACK_IMPORTED_MODULE_1__.getChildren)(listContainer);\n  items.forEach((item, index) => {\n    const newTask = new _classes_js__WEBPACK_IMPORTED_MODULE_2__.Task(item.children[1].textContent, item.children[0].checked, index);\n    listTasks.push(newTask);\n  });\n\n  (0,_store_js__WEBPACK_IMPORTED_MODULE_0__.setDataLocalStorage)(listTasks);\n};\n\nlet firstElementDragging;\n\nconst dragStart = (e) => {\n  firstElementDragging = e.currentTarget;\n  firstElementDragging.style.opacity = '0.5';\n\n  e.dataTransfer.effectAllowed = 'move';\n  e.dataTransfer.setData('text/html', firstElementDragging.innerHTML);\n};\nconst dragEnd = (e) => {\n  e.currentTarget.style.opacity = '1';\n};\n\nconst dragOver = (e) => {\n  e.preventDefault();\n};\n\nconst drop = (e) => {\n  e.stopPropagation();\n  const secondElementDrop = e.currentTarget;\n\n  if (firstElementDragging !== secondElementDrop) {\n    firstElementDragging.innerHTML = secondElementDrop.innerHTML;\n    secondElementDrop.innerHTML = e.dataTransfer.getData('text/html');\n    refreshInformation();\n  }\n};\n\nconst addListenerDragDrop = (listTasks) => {\n  listTasks.forEach((task) => {\n    task.addEventListener('dragstart', dragStart);\n    task.addEventListener('dragend', dragEnd);\n    task.addEventListener('dragover', dragOver);\n    task.addEventListener('drop', drop);\n  });\n};\n\nconst refreshDragDropTarget = () => {\n  const targets = (0,_tools_js__WEBPACK_IMPORTED_MODULE_1__.getElements)('.item');\n  addListenerDragDrop(targets);\n};\n\n\n//# sourceURL=webpack://to-do-list-project/./src/modules/drag-drop.js?");

/***/ }),

/***/ "./src/modules/initial.js":
/*!********************************!*\
  !*** ./src/modules/initial.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"listTasks\": () => (/* binding */ listTasks)\n/* harmony export */ });\nconst listTasks = [\n  {\n    description: 'Wash the dishes',\n    status: false,\n    index: 0,\n  },\n  {\n    description: 'Brush your teeth',\n    status: true,\n    index: 1,\n  },\n  {\n    description: 'Wake up early',\n    status: false,\n    index: 2,\n  },\n];\n\n\n\n\n//# sourceURL=webpack://to-do-list-project/./src/modules/initial.js?");

/***/ }),

/***/ "./src/modules/remove.js":
/*!*******************************!*\
  !*** ./src/modules/remove.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"removeTask\": () => (/* binding */ removeTask),\n/* harmony export */   \"removeTaskChecked\": () => (/* binding */ removeTaskChecked),\n/* harmony export */   \"removeAllTask\": () => (/* binding */ removeAllTask)\n/* harmony export */ });\n/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store.js */ \"./src/modules/store.js\");\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render.js */ \"./src/modules/render.js\");\n/* harmony import */ var _drag_drop_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drag-drop.js */ \"./src/modules/drag-drop.js\");\n/* harmony import */ var _description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./description.js */ \"./src/modules/description.js\");\n\n\n\n\n\nconst bundleRefreshHandlersAndUpdate = (listOfTask) => {\n  (0,_render_js__WEBPACK_IMPORTED_MODULE_1__.refreshIndex)(listOfTask);\n  (0,_store_js__WEBPACK_IMPORTED_MODULE_0__.setDataLocalStorage)(listOfTask);\n  (0,_render_js__WEBPACK_IMPORTED_MODULE_1__.renderTaskDom)();\n  (0,_drag_drop_js__WEBPACK_IMPORTED_MODULE_2__.refreshDragDropTarget)();\n  (0,_description_js__WEBPACK_IMPORTED_MODULE_3__.refreshDescriptions)();\n};\n\nconst removeTask = (event) => {\n  const isRemoveIcon = event.target.classList.contains('remove');\n  if (isRemoveIcon) {\n    const listTasks = (0,_store_js__WEBPACK_IMPORTED_MODULE_0__.getDataLocalStorage)();\n    const id = parseInt(event.target.parentElement.dataset.id, 10);\n    listTasks.splice(id, 1);\n    bundleRefreshHandlersAndUpdate(listTasks);\n  }\n};\n\nconst removeTaskChecked = () => {\n  const listTasks = (0,_store_js__WEBPACK_IMPORTED_MODULE_0__.getDataLocalStorage)();\n  if (listTasks !== []) {\n    const newListTask = listTasks.filter((task) => task.status === false);\n    bundleRefreshHandlersAndUpdate(newListTask);\n  }\n};\n\nconst removeAllTask = () => {\n  const listTasks = [];\n  (0,_store_js__WEBPACK_IMPORTED_MODULE_0__.setDataLocalStorage)(listTasks);\n  (0,_render_js__WEBPACK_IMPORTED_MODULE_1__.renderTaskDom)();\n};\n\n\n//# sourceURL=webpack://to-do-list-project/./src/modules/remove.js?");

/***/ }),

/***/ "./src/modules/render.js":
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderTaskDom\": () => (/* binding */ renderTaskDom),\n/* harmony export */   \"refreshIndex\": () => (/* binding */ refreshIndex)\n/* harmony export */ });\n/* harmony import */ var _initial_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial.js */ \"./src/modules/initial.js\");\n/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store.js */ \"./src/modules/store.js\");\n/* harmony import */ var _tools_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tools.js */ \"./src/modules/tools.js\");\n\n\n\n\nconst listContainer = (0,_tools_js__WEBPACK_IMPORTED_MODULE_2__.getElement)('.container-list');\nconst fragment = document.createDocumentFragment();\n\nconst createTaskStructure = (task) => {\n  const taskContainer = (0,_tools_js__WEBPACK_IMPORTED_MODULE_2__.createElement)('li');\n  taskContainer.dataset.id = task.index;\n  taskContainer.setAttribute('draggable', 'true');\n  taskContainer.classList.add('item');\n\n  const checkBox = (0,_tools_js__WEBPACK_IMPORTED_MODULE_2__.createElement)('input');\n  checkBox.setAttribute('type', 'checkbox');\n  checkBox.classList.add('checkbox');\n  if (task.status) {\n    checkBox.setAttribute('checked', 'true');\n  }\n\n  const description = (0,_tools_js__WEBPACK_IMPORTED_MODULE_2__.createElement)('label');\n  description.setAttribute('contenteditable', 'true');\n  description.classList.add('text-task');\n  description.textContent = task.description;\n  if (task.status) {\n    description.classList.add('completed');\n  }\n\n  const iconRemove = (0,_tools_js__WEBPACK_IMPORTED_MODULE_2__.createElement)('i');\n  iconRemove.classList.add('fas', 'fa-trash-alt', 'remove');\n\n  taskContainer.appendChild(checkBox);\n  taskContainer.appendChild(description);\n  taskContainer.appendChild(iconRemove);\n  fragment.appendChild(taskContainer);\n};\n\nconst renderTaskDom = () => {\n  const list = (0,_store_js__WEBPACK_IMPORTED_MODULE_1__.getDataLocalStorage)();\n  if (list === _initial_js__WEBPACK_IMPORTED_MODULE_0__.listTasks) {\n    (0,_store_js__WEBPACK_IMPORTED_MODULE_1__.setDataLocalStorage)(list);\n  }\n  listContainer.innerHTML = '';\n  list.forEach((task) => createTaskStructure(task));\n  listContainer.appendChild(fragment);\n};\n\nconst refreshIndex = (listTasks) => {\n  listTasks.forEach((task, index) => {\n    task.index = index;\n  });\n};\n\n\n//# sourceURL=webpack://to-do-list-project/./src/modules/render.js?");

/***/ }),

/***/ "./src/modules/store.js":
/*!******************************!*\
  !*** ./src/modules/store.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getDataLocalStorage\": () => (/* binding */ getDataLocalStorage),\n/* harmony export */   \"setDataLocalStorage\": () => (/* binding */ setDataLocalStorage)\n/* harmony export */ });\n/* harmony import */ var _initial_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial.js */ \"./src/modules/initial.js\");\n\n\nconst getDataLocalStorage = () => JSON.parse(localStorage.getItem('TaskData')) || _initial_js__WEBPACK_IMPORTED_MODULE_0__.listTasks;\n\nconst setDataLocalStorage = (listTasks) => {\n  localStorage.setItem('TaskData', JSON.stringify(listTasks));\n};\n\n\n//# sourceURL=webpack://to-do-list-project/./src/modules/store.js?");

/***/ }),

/***/ "./src/modules/tools.js":
/*!******************************!*\
  !*** ./src/modules/tools.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getElement\": () => (/* binding */ getElement),\n/* harmony export */   \"getElements\": () => (/* binding */ getElements),\n/* harmony export */   \"getChildren\": () => (/* binding */ getChildren),\n/* harmony export */   \"getElementValue\": () => (/* binding */ getElementValue),\n/* harmony export */   \"createElement\": () => (/* binding */ createElement)\n/* harmony export */ });\nconst getElement = (identifier) => document.querySelector(identifier);\n\nconst getElements = (identifier) => [...document.querySelectorAll(identifier)];\nconst getChildren = (element) => [...element.children];\n\nconst getElementValue = (identifier) => document.querySelector(identifier).value;\n\nconst createElement = (identifier) => document.createElement(identifier);\n\n\n//# sourceURL=webpack://to-do-list-project/./src/modules/tools.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;