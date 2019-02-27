/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _objectFreeze__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectFreeze */ \"./objectFreeze.js\");\n/* harmony import */ var _singleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./singleton */ \"./singleton.js\");\n\r\n\r\n\r\nObject(_objectFreeze__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\n_singleton__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addLaw(2, 'newLaw', 'someNewLaw');\r\nconsole.log(_singleton__WEBPACK_IMPORTED_MODULE_1__[\"default\"].readConstitution());\r\nconsole.log(_singleton__WEBPACK_IMPORTED_MODULE_1__[\"default\"].readLaw(2));\r\nconsole.log(_singleton__WEBPACK_IMPORTED_MODULE_1__[\"default\"].showSatiasfaction());\r\n_singleton__WEBPACK_IMPORTED_MODULE_1__[\"default\"].holiday();\r\nconsole.log(_singleton__WEBPACK_IMPORTED_MODULE_1__[\"default\"].showBudget());\r\nconsole.log(_singleton__WEBPACK_IMPORTED_MODULE_1__[\"default\"].showSatiasfaction());\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./objectFreeze.js":
/*!*************************!*\
  !*** ./objectFreeze.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet universe = {\r\n    infinity: Infinity,\r\n    good: ['cats', 'love', 'rock-n-roll'],\r\n    evil: {\r\n        bonuses: ['cookies', 'great look'],\r\n        aaa: {\r\n            a: 1,\r\n            b: 3\r\n        }\r\n    }\r\n};\r\n\r\n\r\nconst work = () => {\r\n   let frozenUniverse = Object.freeze(universe);\r\n    // frozenUniverse.infinity = \"jjj\";\r\n    // frozenUniverse.newProp = 15;\r\n    // frozenUniverse.evil.human = \"kkk\";\r\n    // console.log(frozenUniverse);\r\n\r\n   let deepFreeze = obj => {\r\n       let properties = Object.getOwnPropertyNames(obj);\r\n       properties.forEach(item => {\r\n           if (typeof(obj[item])==\"object\" && !(obj[item] instanceof Array)) {\r\n               Object.freeze(obj[item]);\r\n               deepFreeze(obj[item]);\r\n           };\r\n       });\r\n       return obj;\r\n    }\r\n\r\n    let deepFrozen = deepFreeze(frozenUniverse);\r\n    // deepFrozen.infinity = \"jjj\";\r\n    // deepFrozen.newProp = 15;\r\n    // deepFrozen.evil.human = \"kkk\";\r\n    // deepFrozen.evil.aaa.a=10;\r\n    console.log(deepFrozen);\r\n\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (work);\r\n\n\n//# sourceURL=webpack:///./objectFreeze.js?");

/***/ }),

/***/ "./singleton.js":
/*!**********************!*\
  !*** ./singleton.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst _data = {\r\n    laws: [\r\n        {\r\n            id: 0,\r\n            name: '123123',\r\n            description: 'dddd',\r\n        }\r\n    ],\r\n    budget: 1000000,\r\n    citizensSatisfactions: 0,\r\n}\r\n\r\nconst Government = {\r\n    addLaw: (id, name, description) => {\r\n        _data.laws.push({\r\n            id: id,\r\n            name: name,\r\n            description: description,\r\n        });\r\n        _data.citizensSatisfactions -= 10;\r\n    },\r\n    readConstitution: () => [..._data.laws],\r\n    readLaw: id => _data.laws.find(item => item.id===id),\r\n    showSatiasfaction: () => _data.citizensSatisfactions,\r\n    showBudget: () => _data.budget,\r\n    holiday: () => {\r\n        _data.budget -= 50000;\r\n        _data.citizensSatisfactions += 5;\r\n    }\r\n}\r\n\r\nObject.freeze(Government);\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Government);\r\n\n\n//# sourceURL=webpack:///./singleton.js?");

/***/ })

/******/ });