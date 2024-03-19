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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/Restaurant.jpg */ \"./src/Restaurant.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* style.css */\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n    height: 100vh;\r\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center;\r\n    position: relative;\r\n}\r\n\r\n#content {\r\n    position: relative;\r\n    z-index: 1; /* Ensure content appears above background */\r\n    padding: 80px 20px 20px; /* Add top padding equal to navigation bar height */\r\n    background-color: rgba(255, 255, 255, 0.7); /* Transparent white background */\r\n}\r\n\r\n.full-screen-bg {\r\n    display: none; /* Hide the background image added in JavaScript */\r\n}\r\n\r\nnav {\r\n    height: 50px;\r\n    text-align: center;\r\n    background-color: white;\r\n    \r\n}\r\n\r\nnav {\r\n    height: 60px; /* Increase height for better visibility */\r\n    background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent white background */\r\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */\r\n    position: fixed; /* Fixed position to stick at the top */\r\n    width: 100%; /* Take full width of the viewport */\r\n    z-index: 2; /* Ensure it appears above other content */\r\n}\r\n\r\n/* Navigation bar buttons */\r\nnav button {\r\n    background-color: transparent; /* Transparent background */\r\n    border: none; /* Remove border */\r\n    cursor: pointer; /* Show pointer cursor on hover */\r\n    padding: 10px 20px; /* Add padding for better touch targets */\r\n    font-size: 16px; /* Increase font size */\r\n    font-weight: bold; /* Make text bold */\r\n    color: #333; /* Dark text color */\r\n    transition: color 0.3s ease, background-color 0.3s ease; /* Smooth transition effect */\r\n}\r\n\r\n/* Navigation bar button hover effect */\r\nnav button:hover {\r\n    color: #fff; /* Change text color to white on hover */\r\n    background-color: #c0392b; /* Change background color on hover */\r\n}\r\n\r\n/* Active button style */\r\nnav button.active {\r\n    color: #fff; /* White text color for active button */\r\n    background-color: #e74c3c; /* Red background color for active button */\r\n}\r\n\r\nform {\r\n    max-width: 400px;\r\n    margin: 0 auto;\r\n}\r\n\r\ninput[type=\"text\"],\r\ninput[type=\"email\"],\r\ninput[type=\"tel\"],\r\ninput[type=\"checkbox\"] {\r\n    width: 100%;\r\n    padding: 10px;\r\n    margin-bottom: 10px;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    box-sizing: border-box;\r\n}\r\n\r\ninput[type=\"checkbox\"] {\r\n    width: auto; /* Adjust width for checkbox */\r\n    margin-bottom: 0; /* Remove margin bottom for checkbox */\r\n}\r\n\r\ninput[type=\"submit\"] {\r\n    background-color: #c0392b;\r\n    color: #fff;\r\n    border: none;\r\n    padding: 12px 20px;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n}\r\n\r\ninput[type=\"submit\"]:hover {\r\n    background-color: #a93226;\r\n}\r\n\r\nsvg {\r\n    max-width: 100%; /* Ensure the SVG logo doesn't exceed the width of the content */\r\n    max-height: calc(100vh - 200px); /* Adjust the height to fit the viewport minus any other elements (e.g., nav) and the combined heights of the h1 and p elements */\r\n    margin-bottom: 20px; /* Add some bottom margin for spacing */\r\n}\r\n\r\n/* Styles for menu container */\r\n.menu-container {\r\n    display: flex;\r\n    gap: 20px; /* Add gap between menu cards */\r\n    justify-content: space-around; /* Center-align menu cards horizontally */\r\n    padding: 20px; /* Add padding to the menu container */\r\n}\r\n\r\n/* Styles for menu cards */\r\n.menu-card {\r\n    flex: 0 0 auto; /* Prevent menu cards from growing */\r\n    width: 250px; /* Set fixed width for menu cards */\r\n    background-color: white;\r\n    border-radius: 10px;\r\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add shadow effect */\r\n    transition: transform 0.3s, box-shadow 0.3s; /* Add transition effects */\r\n}\r\n\r\n.menu-card:hover {\r\n    transform: translateY(-5px); /* Apply slight translateY transformation on hover */\r\n    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Increase shadow on hover */\r\n}\r\n\r\n/* Styles for menu card elements */\r\n.menu-card img {\r\n    width: 100%;\r\n    border-top-left-radius: 10px;\r\n    border-top-right-radius: 10px;\r\n}\r\n\r\n.menu-card h2,\r\n.menu-card p {\r\n    margin: 10px;\r\n}\r\n\r\n.footer {\r\n    background-color: #333;\r\n    color: #fff;\r\n    padding: 20px;\r\n    text-align: center;\r\n}\r\n\r\n.contact-details {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.social-icons {\r\n    margin-top: 10px;\r\n}\r\n\r\n.social-icons span {\r\n    font-size: 24px;\r\n    margin: 0 5px;\r\n}\r\n\r\n/* Add font-awesome CDN link in your HTML file to use font-awesome icons */\r\n\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/about-us.js":
/*!*************************!*\
  !*** ./src/about-us.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n// about-us.js with the form component and original content\r\n\r\n\r\nconst aboutUs = () => {\r\n    const content = document.getElementById('content');\r\n    content.innerHTML = '';\r\n\r\n    // Original content\r\n    let h1 = document.createElement('h1');\r\n    let p = document.createElement('p');\r\n    h1.textContent = \"Contact us\";\r\n    p.textContent = 'Contact us to get the latest updates and discounts!';\r\n    content.appendChild(h1);\r\n    content.appendChild(p);\r\n\r\n    // Create form element\r\n    const form = document.createElement('form');\r\n    form.classList.add('contact-form');\r\n\r\n    // Create input fields\r\n    const firstNameInput = createInput('text', 'First Name', 'first-name');\r\n    const lastNameInput = createInput('text', 'Last Name', 'last-name');\r\n    const emailInput = createInput('email', 'Email', 'email');\r\n    const phoneInput = createInput('tel', 'Phone Number', 'phone');\r\n    \r\n    // Create checkbox for notifications\r\n    const notificationsCheckbox = document.createElement('input');\r\n    notificationsCheckbox.type = 'checkbox';\r\n    notificationsCheckbox.id = 'notifications';\r\n    notificationsCheckbox.name = 'notifications';\r\n    const notificationsLabel = document.createElement('label');\r\n    notificationsLabel.textContent = 'Receive notifications from the restaurant';\r\n    notificationsLabel.htmlFor = 'notifications';\r\n    \r\n    // Create submit button\r\n    const submitButton = document.createElement('input');\r\n    submitButton.type = 'submit';\r\n    submitButton.value = 'Submit';\r\n\r\n    // Append input fields, checkbox, and submit button to form\r\n    form.appendChild(firstNameInput);\r\n    form.appendChild(lastNameInput);\r\n    form.appendChild(emailInput);\r\n    form.appendChild(phoneInput);\r\n    form.appendChild(notificationsCheckbox);\r\n    form.appendChild(notificationsLabel);\r\n    form.appendChild(document.createElement('br')); // Add line break\r\n    form.appendChild(submitButton);\r\n\r\n    // Append form to container div\r\n    content.appendChild(form);\r\n\r\n    return content;\r\n}\r\n\r\n// Helper function to create input fields\r\nfunction createInput(type, placeholder, id) {\r\n    const input = document.createElement('input');\r\n    input.type = type;\r\n    input.placeholder = placeholder;\r\n    input.id = id;\r\n    input.name = id;\r\n    return input;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aboutUs);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/about-us.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\n// footer.js\r\nconst createFooter = () => {\r\n    const footer = document.createElement('footer');\r\n    footer.classList.add('footer');\r\n\r\n    const contactDetails = document.createElement('div');\r\n    contactDetails.classList.add('contact-details');\r\n\r\n    const email = document.createElement('p');\r\n    email.textContent = \"Email: contact@restaurant.com\";\r\n\r\n    const phoneNumber = document.createElement('p');\r\n    phoneNumber.textContent = \"Phone: +1 (123) 456-7890\";\r\n\r\n    const socialMedia = document.createElement('p');\r\n    socialMedia.textContent = \"Follow us on social media:\";\r\n\r\n    const socialIcons = document.createElement('div');\r\n    socialIcons.classList.add('social-icons');\r\n\r\n    // Add social media icons here (fake example)\r\n    const facebookIcon = document.createElement('span');\r\n    facebookIcon.classList.add('fab', 'fa-facebook-square');\r\n\r\n    const twitterIcon = document.createElement('span');\r\n    twitterIcon.classList.add('fab', 'fa-twitter-square');\r\n\r\n    const instagramIcon = document.createElement('span');\r\n    instagramIcon.classList.add('fab', 'fa-instagram-square');\r\n\r\n    socialIcons.appendChild(facebookIcon);\r\n    socialIcons.appendChild(twitterIcon);\r\n    socialIcons.appendChild(instagramIcon);\r\n\r\n    contactDetails.appendChild(email);\r\n    contactDetails.appendChild(phoneNumber);\r\n    contactDetails.appendChild(socialMedia);\r\n    contactDetails.appendChild(socialIcons);\r\n\r\n    footer.appendChild(contactDetails);\r\n\r\n    return footer;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createFooter);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/footer.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ \"./src/page-load.js\");\n// Importing pageLoad function from page-load.js\r\n\r\n\r\n// Exporting home function\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\r\n  // Simply return the pageLoad function\r\n  return (0,_page_load__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n});\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ \"./src/page-load.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about_us__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-us */ \"./src/about-us.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nlet currentPage = (0,_page_load__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\nconst menuButton = document.getElementById('menu');\r\nmenuButton.addEventListener('click', () => {\r\n    currentPage = (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); // Render menu page\r\n});\r\n\r\nconst aboutUsButton = document.getElementById(\"about-us\");\r\naboutUsButton.addEventListener('click', () => {\r\n    currentPage = (0,_about_us__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();  // Render About Us page\r\n});\r\n\r\nconst homeButton = document.getElementById(\"home\");\r\nhomeButton.addEventListener('click', () => {\r\n    currentPage = (0,_home__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(); // Render home page\r\n});\r\n\r\n// Initial render\r\ndocument.getElementById('content').appendChild(currentPage);\r\n\r\n// Append footer\r\ndocument.body.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\nconst menu = () => {\r\n\r\n\r\n    //Main content creation\r\n    const content = document.getElementById('content')\r\n    content.innerHTML = '';\r\n    let h1 = document.createElement('h1');\r\n\r\n    \r\n\r\n\r\n\r\n    h1.textContent = \"Our Menu\";\r\n\r\n\r\n    \r\n    content.appendChild(h1);\r\n\r\n        // Create container for menu cards\r\n        const menuContainer = document.createElement('div');\r\n        menuContainer.classList.add('menu-container');\r\n    \r\n        // Menu items\r\n        const menus = [\r\n            {\r\n                name: \"Gourmet Burger\",\r\n                image: \"../src/gourmet-burger.jpg\",\r\n                description: \"A delicious burger made with premium beef patty, topped with gourmet cheese, fresh vegetables, and special sauce.\",\r\n                price: \"$10.99\"\r\n            },\r\n            {\r\n                name: \"Pasta\",\r\n                image: \"../src/gourmet-pasta.jpg\",\r\n                description: \"Authentic Italian pasta cooked to perfection and served with your choice of sauce: marinara, alfredo, or pesto.\",\r\n                price: \"$12.99\"\r\n            },\r\n            {\r\n                name: \"Pizza\",\r\n                image: \"../src/gourmet-pizza.jpg\",\r\n                description: \"Classic Italian pizza with a crispy crust, topped with tomato sauce, mozzarella cheese, and your favorite toppings.\",\r\n                price: \"$14.99\"\r\n            }\r\n        ];\r\n    \r\n        // Create menu cards\r\n        menus.forEach(menuItem => {\r\n            const card = document.createElement('div');\r\n            card.classList.add('menu-card');\r\n    \r\n            const image = document.createElement('img');\r\n            image.src = menuItem.image;\r\n            image.alt = menuItem.name;\r\n    \r\n            const name = document.createElement('h2');\r\n            name.textContent = menuItem.name;\r\n    \r\n            const description = document.createElement('p');\r\n            description.textContent = menuItem.description;\r\n    \r\n            const price = document.createElement('p');\r\n            price.textContent = menuItem.price;\r\n    \r\n            // Append elements to card\r\n            card.appendChild(image);\r\n            card.appendChild(name);\r\n            card.appendChild(description);\r\n            card.appendChild(price);\r\n    \r\n            // Append card to menu container\r\n            menuContainer.appendChild(card);\r\n        });\r\n    \r\n        // Append menu container to content div\r\n        content.appendChild(menuContainer);\r\n\r\n    return content;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n// page-load.js with img element added\r\n\r\n\r\nconst pageLoad = () => {\r\n    // Get existing content div\r\n    const content = document.getElementById('content');\r\n\r\n    // Clear existing content before adding new content\r\n    content.innerHTML = '';\r\n\r\n    // Main content creation\r\n    const h1 = document.createElement('h1');\r\n    h1.textContent = \"Welcome to our restaurant\";\r\n\r\n     // SVG logo code\r\n     const svgLogo = `\r\n     <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 530 530\" width=\"100\" height=\"100\" style=\"enable-background:new 0 0 512.003 512.003\" xml:space=\"preserve\"><path style=\"fill:#d6e0e0\" d=\"M195.047 503.946h232.54c8.234 0 14.907-6.675 14.907-14.906V65.945c0-8.232-6.673-14.906-14.907-14.906H69.508V489.04c0 8.231 6.673 14.906 14.907 14.906h83.678\"/><path style=\"fill:#e2453d\" d=\"M341.86 175.602v-54.551c0-9.77-7.921-17.69-17.69-17.69-9.771 0-17.69 7.92-17.69 17.69v54.551c-8.096 1.496-14.232 8.579-14.232 17.108v129.385c0 9.614 7.797 17.411 17.41 17.411h29.019c9.616 0 17.413-7.797 17.413-17.411V192.709c.002-8.528-6.137-15.612-14.23-17.107z\"/><path style=\"fill:#7c868e\" d=\"M324.17 103.362c-9.771 0-17.69 7.92-17.69 17.69v15.329h35.378v-15.329c.002-9.77-7.919-17.69-17.688-17.69z\"/><path style=\"fill:#e2453d\" d=\"M191.751 209.209v47.464c0 18.694 15.155 33.846 33.847 33.846s33.845-15.151 33.845-33.846v-47.464h-67.692z\"/><path style=\"fill:#d6e0e0\" d=\"M191.75 209.209h67.685v32.936H191.75z\"/><path style=\"fill:#f59d40\" d=\"M292.252 211.045h63.841v85.715h-63.841zM119.072 51.038H69.508V489.04c0 8.231 6.673 14.906 14.907 14.906h34.657V51.038z\"/><g style=\"opacity:.2\"><path style=\"fill:#020202\" d=\"M94.291 489.04V51.038H69.508V489.04c0 8.231 6.673 14.906 14.907 14.906h24.781c-8.233 0-14.905-6.675-14.905-14.906z\"/></g><path style=\"fill:#7c868e\" d=\"M69.508 51.038 406.069 8.055v42.983z\"/><path style=\"fill:#020202\" d=\"M427.588 42.984h-13.465V8.055a8.054 8.054 0 0 0-9.074-7.99L68.488 43.05c-.09.012-.176.033-.265.047-.148.024-.295.046-.44.078-.112.025-.219.056-.329.085-.143.038-.286.074-.425.119-.116.038-.229.083-.341.125-.126.047-.253.092-.377.145-.127.055-.249.118-.373.179-.104.052-.21.1-.311.156-.136.075-.267.159-.398.243-.083.053-.169.101-.249.156a7.533 7.533 0 0 0-.42.315c-.061.048-.127.092-.187.142a8.178 8.178 0 0 0-.446.405c-.038.037-.079.07-.117.107a7.79 7.79 0 0 0-.511.563c-.033.04-.061.085-.095.126a7.987 7.987 0 0 0-.359.48c-.062.091-.116.189-.175.283-.075.12-.152.239-.221.364-.057.103-.105.212-.158.318-.06.122-.123.244-.178.369-.045.105-.083.214-.123.322-.052.134-.104.266-.148.404-.033.104-.059.212-.089.318a7.24 7.24 0 0 0-.113.439c-.023.103-.038.208-.056.312a8.095 8.095 0 0 0-.072.471c-.012.104-.018.209-.026.315a7.801 7.801 0 0 0-.025.484c-.001.041-.006.081-.006.121v438.002c0 12.66 10.3 22.96 22.961 22.96h83.678a8.053 8.053 0 0 0 8.054-8.054 8.053 8.053 0 0 0-8.054-8.054h-40.967V59.092h300.462a6.86 6.86 0 0 1 6.853 6.852V489.04a6.86 6.86 0 0 1-6.853 6.852h-232.54a8.053 8.053 0 0 0-8.054 8.054 8.053 8.053 0 0 0 8.054 8.054h232.54c12.661 0 22.961-10.3 22.961-22.96V65.945c-.001-12.66-10.301-22.961-22.962-22.961zm-316.57 452.908H84.415c-3.778 0-6.853-3.073-6.853-6.852V59.092h33.456v436.8zm85.127-452.908 201.87-25.782v25.782h-201.87z\"/><path style=\"fill:#020202\" d=\"M259.441 201.155H191.75a8.053 8.053 0 0 0-8.054 8.054v47.464c0 20.349 14.584 37.348 33.847 41.115v33.663h-13.769a8.053 8.053 0 0 0-8.054 8.054 8.053 8.053 0 0 0 8.054 8.054h43.644a8.053 8.053 0 0 0 8.054-8.054 8.053 8.053 0 0 0-8.054-8.054h-13.767v-33.663c19.262-3.767 33.845-20.766 33.845-41.115v-47.464a8.054 8.054 0 0 0-8.055-8.054zm-59.636 16.108h51.583v16.828h-51.583v-16.828zm25.792 65.202c-14.222 0-25.793-11.57-25.793-25.792v-6.474h51.583v6.474c0 14.222-11.568 25.792-25.79 25.792zM349.914 121.051c0-14.195-11.548-25.744-25.744-25.744s-25.744 11.548-25.744 25.744v48.808c-8.535 4.188-14.232 12.951-14.232 22.85v129.384c0 14.042 11.424 25.465 25.464 25.465h29.019c14.042 0 25.467-11.424 25.467-25.465V192.709c0-9.899-5.697-18.66-14.232-22.85v-48.808h.002zm-1.876 81.946h-47.734v-10.288a9.342 9.342 0 0 1 7.641-9.188 8.052 8.052 0 0 0 6.591-7.92v-31.167h19.27v31.167a8.055 8.055 0 0 0 6.591 7.92 9.34 9.34 0 0 1 7.64 9.188v10.288zm0 85.712h-47.734v-69.604h47.734v69.604zm-33.502-167.658c0-5.312 4.322-9.636 9.636-9.636 5.312 0 9.636 4.322 9.636 9.636v7.275h-19.27v-7.275h-.002zm24.143 210.4H309.66c-5.16 0-9.357-4.198-9.357-9.358v-17.277h47.734v17.277c.001 5.161-4.197 9.358-9.358 9.358zM230.221 383.844a8.053 8.053 0 0 0 8.054 8.054h75.474c4.449 0 8.054-3.605 8.054-8.054s-3.605-8.054-8.054-8.054h-75.474a8.053 8.053 0 0 0-8.054 8.054zM346.398 410.176H205.626a8.053 8.053 0 0 0-8.054 8.054 8.053 8.053 0 0 0 8.054 8.054h140.772a8.053 8.053 0 0 0 8.054-8.054 8.053 8.053 0 0 0-8.054-8.054zM346.398 444.562H205.626c-4.448 0-8.054 3.605-8.054 8.054s3.606 8.054 8.054 8.054h140.772c4.449 0 8.054-3.605 8.054-8.054s-3.606-8.054-8.054-8.054z\"/></svg>\r\n `;\r\n\r\n    const p = document.createElement('p');\r\n    p.textContent = `We are delighted to have you visit our restaurant today.\\n Our team is committed to providing you with an exceptional dining experience, from the moment you walk in the door to the moment you leave.  Please take a look at our menu and let us know if you have any questions or dietary restrictions.`;\r\n    p.style.fontWeight = 'bold';\r\n    p.style.paddingTop = '40px';\r\n\r\n    // Append elements to content div\r\n    content.appendChild(h1);\r\n    content.insertAdjacentHTML('beforeend', svgLogo);\r\n    content.appendChild(p);\r\n\r\n    return content;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/page-load.js?");

/***/ }),

/***/ "./src/Restaurant.jpg":
/*!****************************!*\
  !*** ./src/Restaurant.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7f0c91b16ef0e4da0fbc.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/Restaurant.jpg?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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