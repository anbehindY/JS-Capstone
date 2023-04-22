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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-color: #121212;\\r\\n  color: #fff;\\r\\n  font-family: 'Montseratt', sans-serif;\\r\\n}\\r\\n\\r\\nbody::-webkit-scrollbar {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  display: flex;\\r\\n  height: 10%;\\r\\n  gap: 100px;\\r\\n  padding: 3% 10%;\\r\\n  align-items: center;\\r\\n  font-family: 'Poppins', sans-serif;\\r\\n}\\r\\n\\r\\n.myLogo {\\r\\n  width: 100px;\\r\\n  height: 100px;\\r\\n  border-radius: 50%;\\r\\n}\\r\\n\\r\\nnav {\\r\\n  display: flex;\\r\\n  justify-content: flex-end;\\r\\n  width: 80%;\\r\\n  gap: 10%;\\r\\n}\\r\\n\\r\\nnav > a {\\r\\n  text-decoration: none;\\r\\n  font-size: 1.5em;\\r\\n  color: aliceblue;\\r\\n}\\r\\n\\r\\nmain {\\r\\n  padding: 5% 5%;\\r\\n}\\r\\n\\r\\n.card-container {\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  gap: 100px;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.cardImg {\\r\\n  width: 200px;\\r\\n  height: 300px;\\r\\n  border-radius: 16px;\\r\\n}\\r\\n\\r\\n.caption {\\r\\n  display: flex;\\r\\n  border: none;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.name {\\r\\n  font-size: 1em;\\r\\n  font-weight: 500;\\r\\n}\\r\\n\\r\\n.likes {\\r\\n  font-weight: 200;\\r\\n  font-size: small;\\r\\n}\\r\\n\\r\\n.btn {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.commentBtn,\\r\\n.likeBtn {\\r\\n  background: #fff;\\r\\n  border: none;\\r\\n  height: 25px;\\r\\n  border-radius: 5px;\\r\\n  cursor: pointer;\\r\\n  color: black;\\r\\n  box-shadow: 1px 1px gray;\\r\\n  opacity: 0.9;\\r\\n}\\r\\n\\r\\n.commentBtn:hover,\\r\\n.likeBtn:hover {\\r\\n  background-color: #e50914;\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n.likeBtn:focus {\\r\\n  background-color: #e50914;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  padding: 0 4%;\\r\\n  border: 1px solid gray;\\r\\n}\\r\\n\\r\\n.comment-popup {\\r\\n  position: fixed;\\r\\n  top: 10%;\\r\\n  left: 10%;\\r\\n  right: 10%;\\r\\n  bottom: 10%;\\r\\n  border: 2px solid gray;\\r\\n  display: none;\\r\\n  flex-direction: column;\\r\\n  z-index: 100;\\r\\n  overflow: auto;\\r\\n  padding: 20px 8%;\\r\\n  background-color: black;\\r\\n  border-radius: 10px;\\r\\n}\\r\\n\\r\\n.comment-popup::-webkit-scrollbar {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.close-popup-btn {\\r\\n  position: fixed;\\r\\n  top: 12%;\\r\\n  right: 12%;\\r\\n  font-weight: 700;\\r\\n  font-size: xx-large;\\r\\n  cursor: pointer;\\r\\n  border: none;\\r\\n  background-color: transparent;\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n.showDetails {\\r\\n  display: flex;\\r\\n  height: 500px;\\r\\n}\\r\\n\\r\\n.description {\\r\\n  padding: 10% 0 0 10%;\\r\\n}\\r\\n\\r\\n.genre {\\r\\n  color: brown;\\r\\n  font-size: large;\\r\\n}\\r\\n\\r\\n.comment-form {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 10px;\\r\\n  max-width: 300px;\\r\\n}\\r\\n\\r\\n.popup-photo {\\r\\n  width: 50%;\\r\\n  height: 80%;\\r\\n  align-self: center;\\r\\n}\\r\\n\\r\\n.submit-comment-btn {\\r\\n  padding: 0.5rem;\\r\\n  border: 1px solid black;\\r\\n  border-radius: 5px;\\r\\n  background-color: white;\\r\\n  font-weight: 700;\\r\\n  color: black;\\r\\n  width: 100px;\\r\\n  cursor: pointer;\\r\\n  opacity: 0.9;\\r\\n}\\r\\n\\r\\ninput,\\r\\ntextarea {\\r\\n  padding: 0.5rem;\\r\\n  outline: none;\\r\\n  opacity: 0.9;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://js-capstone/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://js-capstone/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://js-capstone/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://js-capstone/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://js-capstone/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://js-capstone/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://js-capstone/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://js-capstone/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://js-capstone/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://js-capstone/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo.png */ \"./src/logo.png\");\n/* harmony import */ var _modules_tvMazeApi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tvMazeApi.js */ \"./src/modules/tvMazeApi.js\");\n/* harmony import */ var _modules_likeFunctions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/likeFunctions.js */ \"./src/modules/likeFunctions.js\");\n/* harmony import */ var _modules_commentFunctions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/commentFunctions.js */ \"./src/modules/commentFunctions.js\");\n/* harmony import */ var _modules_showsCounter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/showsCounter.js */ \"./src/modules/showsCounter.js\");\n/* harmony import */ var _modules_commentsCounter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/commentsCounter.js */ \"./src/modules/commentsCounter.js\");\n\n\n\n\n\n\n\n\n// Add Logo to the header\nconst divLogo = document.querySelector('.logo');\nconst myLogo = new Image();\nmyLogo.src = _logo_png__WEBPACK_IMPORTED_MODULE_1__;\nmyLogo.classList.add('myLogo');\ndivLogo.append(myLogo);\n\n// Add logo to title tab\nconst titleLogo = document.getElementById('titleLogo');\ntitleLogo.href = _logo_png__WEBPACK_IMPORTED_MODULE_1__;\n\n// Initialize arrays to keep the objects of tv shows and likes\nlet showsArray = [];\nlet likesArray = [];\n\n// Create an eventlistener for every comment button to display popup with data fetched from API\nconst popup = (array) => {\n  const commentBtns = document.querySelectorAll('.commentBtn');\n  const commentPopup = document.querySelector('.comment-popup');\n  const closeBtn = document.querySelector('.close-popup-btn');\n  const comments = document.querySelector('.comments');\n  commentBtns.forEach((btn, index) => {\n    btn.addEventListener('click', () => {\n      const movieSummary = document.querySelector('.movie-summary');\n      const movieTitle = document.querySelector('.movie-title');\n      const popupPhoto = document.querySelector('.popup-photo');\n      const submitCommentBtn = document.querySelector('.submit-comment-btn');\n      const genre = document.querySelector('.genre');\n      submitCommentBtn.setAttribute('id', index);\n      commentPopup.style.display = 'flex';\n      document.body.style.overflow = 'hidden';\n      popupPhoto.src = array[index].image.original;\n      movieTitle.textContent = array[index].name;\n      genre.textContent = array[index].genres.join(', ');\n      movieSummary.innerHTML = array[index].summary;\n      (0,_modules_commentFunctions_js__WEBPACK_IMPORTED_MODULE_4__.getComment)(index).then((arr) => {\n        if (arr.length > 0) {\n          arr.forEach((item) => {\n            (0,_modules_commentFunctions_js__WEBPACK_IMPORTED_MODULE_4__.createComment)(item);\n            (0,_modules_commentsCounter_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n          });\n        }\n      });\n    });\n  });\n  closeBtn.addEventListener('click', () => {\n    commentPopup.style.display = 'none';\n    document.body.style.overflow = 'auto';\n    comments.textContent = 'Comments';\n  });\n};\n\n// Display all the tv shows fetched from API to the web page\nconst loadShows = async () => {\n  const showData = await (0,_modules_tvMazeApi_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  const likeData = await (0,_modules_likeFunctions_js__WEBPACK_IMPORTED_MODULE_3__.getLikes)();\n  showsArray = showData;\n  likesArray = likeData;\n  showsArray.forEach((showInfo) => {\n    let movieLikes = 0;\n    if (likesArray.find((like) => like.item_id === showInfo.id)) {\n      movieLikes = likesArray.find((like) => like.item_id === showInfo.id).likes;\n    }\n    const cardsContainer = document.querySelector('.card-container');\n    cardsContainer.innerHTML += `<div class=\"card\">\n      <img class=\"cardImg\" src=\"${showInfo.image.original}\" alt=\"${showInfo.name}\">\n      <div class=\"caption\">\n          <p class=\"name\">${showInfo.name}</p>\n          <p class=\"likes\" likes-id=\"${showInfo.id}\">${movieLikes} ${movieLikes >= 1 ? 'likes' : 'like'}</p>\n      </div>\n      <div class=\"btn\">\n      <button id=\"${showInfo.id}\" class=\"commentBtn\" type=\"button\">Comment</button>\n      <button id=\"${showInfo.id}\" class=\"likeBtn\" show-id=\"${showInfo.id}\" type=\"button\">Like</button>\n      </div>\n  </div>`;\n\n    // Add an event listener to every like button to update the likes\n    const likeBtns = document.querySelectorAll('.likeBtn');\n    likeBtns.forEach((likeBtn) => {\n      likeBtn.addEventListener('click', () => {\n        (0,_modules_likeFunctions_js__WEBPACK_IMPORTED_MODULE_3__.addLike)(Number(likeBtn.getAttribute('show-id')));\n      });\n    });\n  });\n  popup(showsArray);\n};\n\nloadShows();\n(0,_modules_commentFunctions_js__WEBPACK_IMPORTED_MODULE_4__.postComment)();\n(0,_modules_showsCounter_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n\n//# sourceURL=webpack://js-capstone/./src/index.js?");

/***/ }),

/***/ "./src/modules/commentFunctions.js":
/*!*****************************************!*\
  !*** ./src/modules/commentFunctions.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createComment\": () => (/* binding */ createComment),\n/* harmony export */   \"getComment\": () => (/* binding */ getComment),\n/* harmony export */   \"postComment\": () => (/* binding */ postComment)\n/* harmony export */ });\n/* harmony import */ var _commentsCounter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentsCounter.js */ \"./src/modules/commentsCounter.js\");\n/* harmony import */ var _involvementApi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./involvementApi.js */ \"./src/modules/involvementApi.js\");\n\n\n\nconst commentUrl = `${_involvementApi_js__WEBPACK_IMPORTED_MODULE_1__.baseUrl}apps/${_involvementApi_js__WEBPACK_IMPORTED_MODULE_1__.involvementAppId}/comments`;\nconst commentsList = document.querySelector('.comments-list');\nconst getComment = async (id) => {\n  try {\n    const response = await fetch(`${commentUrl}?item_id=${id}`);\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    throw new Error(error);\n  }\n};\n\nconst createComment = (item) => {\n  const comment = document.createElement('li');\n  comment.textContent = `${item.creation_date} ${item.username}: ${item.comment}`;\n  commentsList.appendChild(comment);\n};\nconst postComment = () => {\n  const nameInput = document.querySelector('.name-input');\n  const commentInput = document.querySelector('.comment-input');\n  const submitCommentBtn = document.querySelector('.submit-comment-btn');\n  const submitCommentHandler = async (e) => {\n    e.preventDefault();\n    const id = Number(e.target.id);\n    const username = nameInput.value;\n    const comment = commentInput.value;\n    if (username && comment) {\n      const data = { item_id: id, username, comment };\n      fetch(commentUrl, {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json',\n        },\n        body: JSON.stringify(data),\n      }).then(() => {\n        nameInput.value = '';\n        commentInput.value = '';\n        getComment(id).then((arr) => {\n          commentsList.innerHTML = '';\n          if (arr.length > 0) {\n            arr.forEach((item) => {\n              createComment(item);\n              (0,_commentsCounter_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n            });\n          }\n        });\n      });\n    }\n  };\n  submitCommentBtn.addEventListener('click', submitCommentHandler);\n};\n\n\n\n//# sourceURL=webpack://js-capstone/./src/modules/commentFunctions.js?");

/***/ }),

/***/ "./src/modules/commentsCounter.js":
/*!****************************************!*\
  !*** ./src/modules/commentsCounter.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentsCounter = () => {\n  const commentsList = document.querySelector('.comments-list');\n  const comments = document.querySelector('.comments');\n  const length = commentsList.childElementCount;\n  comments.textContent = `Comments (${length})`;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentsCounter);\n\n//# sourceURL=webpack://js-capstone/./src/modules/commentsCounter.js?");

/***/ }),

/***/ "./src/modules/involvementApi.js":
/*!***************************************!*\
  !*** ./src/modules/involvementApi.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"baseUrl\": () => (/* binding */ baseUrl),\n/* harmony export */   \"involvementAppId\": () => (/* binding */ involvementAppId)\n/* harmony export */ });\nconst baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';\nconst involvementAppId = 'xdGIdbM3G0CTV3VsQ65m';\n\n\n\n//# sourceURL=webpack://js-capstone/./src/modules/involvementApi.js?");

/***/ }),

/***/ "./src/modules/likeFunctions.js":
/*!**************************************!*\
  !*** ./src/modules/likeFunctions.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addLike\": () => (/* binding */ addLike),\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes),\n/* harmony export */   \"updateLikes\": () => (/* binding */ updateLikes)\n/* harmony export */ });\n/* harmony import */ var _involvementApi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./involvementApi.js */ \"./src/modules/involvementApi.js\");\n\n\nconst getLikes = async () => {\n  try {\n    const response = await fetch(`${_involvementApi_js__WEBPACK_IMPORTED_MODULE_0__.baseUrl}apps/${_involvementApi_js__WEBPACK_IMPORTED_MODULE_0__.involvementAppId}/likes`);\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    throw new Error(error);\n  }\n};\n\nconst updateLikes = async () => {\n  const likeTexts = document.querySelectorAll('.likes');\n  const likes = await getLikes();\n\n  likeTexts.forEach((likeText) => {\n    let movieLikes = 0;\n    if (likes.find((like) => like.item_id === Number(likeText.getAttribute('likes-id')))) {\n      movieLikes = likes.find((like) => like.item_id === Number(likeText.getAttribute('likes-id'))).likes;\n    }\n    likeText.textContent = `${movieLikes} ${movieLikes > 1 ? 'likes' : 'like'}`;\n  });\n};\n\nconst addLike = async (id) => {\n  const response = await fetch(`${_involvementApi_js__WEBPACK_IMPORTED_MODULE_0__.baseUrl}apps/${_involvementApi_js__WEBPACK_IMPORTED_MODULE_0__.involvementAppId}/likes`, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({\n      item_id: id,\n    }),\n  });\n  Promise.resolve(response);\n  updateLikes();\n};\n\n\n\n//# sourceURL=webpack://js-capstone/./src/modules/likeFunctions.js?");

/***/ }),

/***/ "./src/modules/showsCounter.js":
/*!*************************************!*\
  !*** ./src/modules/showsCounter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _tvMazeApi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tvMazeApi.js */ \"./src/modules/tvMazeApi.js\");\n\n\nconst countItems = async () => {\n  const response = await (0,_tvMazeApi_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  return response.length;\n};\n\nconst displayShowsCounter = async () => {\n  const counts = await countItems();\n  const showsCount = document.querySelector('.showsCount');\n  showsCount.innerHTML = `TV Shows (${counts})`;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayShowsCounter);\n\n//# sourceURL=webpack://js-capstone/./src/modules/showsCounter.js?");

/***/ }),

/***/ "./src/modules/tvMazeApi.js":
/*!**********************************!*\
  !*** ./src/modules/tvMazeApi.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getShows = async () => {\n  try {\n    const response = await fetch('https://api.tvmaze.com/shows');\n    let data = await response.json();\n    data = data.slice(0, 20);\n    return data;\n  } catch (error) {\n    throw new Error(error);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getShows);\n\n\n//# sourceURL=webpack://js-capstone/./src/modules/tvMazeApi.js?");

/***/ }),

/***/ "./src/logo.png":
/*!**********************!*\
  !*** ./src/logo.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3927e04399f878d7fd4e.png\";\n\n//# sourceURL=webpack://js-capstone/./src/logo.png?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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