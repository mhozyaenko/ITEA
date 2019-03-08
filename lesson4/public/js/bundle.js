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

/***/ "./composition.js":
/*!************************!*\
  !*** ./composition.js ***!
  \************************/
/*! exports provided: BackendDeveloper, FrontendDeveloper, Designer, ProjectManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BackendDeveloper\", function() { return BackendDeveloper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FrontendDeveloper\", function() { return FrontendDeveloper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Designer\", function() { return Designer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectManager\", function() { return ProjectManager; });\nconst MakeBackendMagic = state => ({\r\n    makeBackendMagic: () => console.log(`${state.name} is making Backend Magic`)\r\n});\r\nconst MakeFrontendMagic = state => ({\r\n    makeFrontendMagic: () => console.log(`${state.name} is making Frontend Magic`)\r\n});\r\nconst MakeItLooksBeautiful = state => ({\r\n    makeItLooksBeautiful: () => console.log(`${state.name} is making it look beautiful`)\r\n});\r\nconst DrinkSomeTea = state => ({\r\n    drinkSomeTea : (cups) => console.log(`${state.name} needs to drink ${cups} of tea`)\r\n});\r\nconst DistributeTasks = state => ({\r\n    distributeTasks : () => console.log(`${state.name} is distributing tasks`)\r\n});\r\nconst WatchYoutube = state => ({\r\n    watchYoutube : () => console.log(`${state.name} is watching youtube`)\r\n});\r\nconst Procrastinate = state => ({\r\n    procrastinate : () => console.log(`${state.name} is procrastinating`)\r\n});\r\n\r\nconst BackendDeveloper = employee => {\r\n    const state = employee;\r\n    return Object.assign(\r\n        {},\r\n        state,\r\n        MakeBackendMagic(state),\r\n        DrinkSomeTea(state),\r\n        Procrastinate(state)\r\n    )\r\n}\r\nconst FrontendDeveloper = employee => {\r\n    const state = employee;\r\n    return Object.assign(\r\n        {},\r\n        state,\r\n        MakeFrontendMagic(state),\r\n        DrinkSomeTea(state),\r\n        WatchYoutube(state)\r\n    )\r\n}\r\nconst Designer = employee => {\r\n    const state = employee;\r\n    return Object.assign(\r\n        {},\r\n        state,\r\n        MakeItLooksBeautiful(state),\r\n        WatchYoutube(state),\r\n        Procrastinate(state)\r\n    )\r\n}\r\nconst ProjectManager = employee => {\r\n    const state = employee;\r\n    return Object.assign(\r\n        {},\r\n        state,\r\n        DistributeTasks(state),\r\n        Procrastinate(state),\r\n        DrinkSomeTea(state)\r\n    )\r\n}\r\n\n\n//# sourceURL=webpack:///./composition.js?");

/***/ }),

/***/ "./employees.js":
/*!**********************!*\
  !*** ./employees.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst employees = [\r\n    {\r\n        name: 'Jane',\r\n        gender: 'female',\r\n        age: 21,\r\n        type: 'design'\r\n    },\r\n    {\r\n        name: 'George',\r\n        gender: 'male',\r\n        age: 31,\r\n        type: 'backend'\r\n    },\r\n    {\r\n        name: 'Kate',\r\n        gender: 'female',\r\n        age: 25,\r\n        type: 'frontend'\r\n    },\r\n    {\r\n        name: 'Alisa',\r\n        gender: 'female',\r\n        age: 29,\r\n        type: 'project'\r\n    },\r\n    {\r\n        name: 'Anna',\r\n        gender: 'female',\r\n        age: 30,\r\n        type: 'frontend'\r\n    },\r\n    {\r\n        name: 'Alex',\r\n        gender: 'male',\r\n        age: 41,\r\n        type: 'project'\r\n    },\r\n    {\r\n        name: 'Peter',\r\n        gender: 'male',\r\n        age: 24,\r\n        type: 'design'\r\n    },\r\n    {\r\n        name: 'Stewart',\r\n        gender: 'male',\r\n        age: 27,\r\n        type: 'backend'\r\n    },\r\n    {\r\n        name: 'Tina',\r\n        gender: 'female',\r\n        age: 24,\r\n        type: 'frontend'\r\n    },\r\n    {\r\n        name: 'Kate',\r\n        gender: 'female',\r\n        age: 25,\r\n        type: 'backend'\r\n    },\r\n    {\r\n        name: 'Luke',\r\n        gender: 'male',\r\n        age: 34,\r\n        type: 'frontend'\r\n    },\r\n\r\n];\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (employees);\n\n//# sourceURL=webpack:///./employees.js?");

/***/ }),

/***/ "./fabric.js":
/*!*******************!*\
  !*** ./fabric.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _composition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./composition */ \"./composition.js\");\n\r\n\r\n    const makeEmployee = (state) => {\r\n        let Employee;\r\n        switch (state.type) {\r\n            case 'backend': {\r\n                Employee = _composition__WEBPACK_IMPORTED_MODULE_0__[\"BackendDeveloper\"];\r\n                break;\r\n            }\r\n            case 'frontend': {\r\n                Employee = _composition__WEBPACK_IMPORTED_MODULE_0__[\"FrontendDeveloper\"];\r\n                break;\r\n            }\r\n            case 'design': {\r\n                Employee = _composition__WEBPACK_IMPORTED_MODULE_0__[\"Designer\"];\r\n                break;\r\n            }\r\n            case 'project': {\r\n                Employee = _composition__WEBPACK_IMPORTED_MODULE_0__[\"ProjectManager\"];\r\n                break;\r\n            }\r\n            default: {\r\n                Employee = null;\r\n            }\r\n        }\r\n        return Employee(state);\r\n    }\r\n    const render = (state) => {\r\n        let root = document.getElementById('root');\r\n        let node = document.createElement('div');\r\n        node.innerHTML = `\r\n        <h3>${state.name}(${state.age})</h3>\r\n        <p>${state.type}</p>\r\n        <button class=\"hireBtn\" type=\"button\">Hire</button>\r\n`;\r\n        node.style.display = 'flex';\r\n        node.style.justifyContent = 'space-between';\r\n        node.style.alignItems = 'center';\r\n        node.style.borderBottom = '1px solid #555';\r\n        root.appendChild(node);\r\n        let hireBtn = node.querySelector('.hireBtn');\r\n        hireBtn.onclick = () => {\r\n            alert(`${state.name} hired!`);\r\n        };\r\n    }\r\n\r\n    const Worker = (worker) => {\r\n        const state = worker;\r\n        return Object.assign(\r\n            makeEmployee(state),\r\n            render(state));\r\n    };\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Worker);\n\n//# sourceURL=webpack:///./fabric.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fabric__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fabric */ \"./fabric.js\");\n/* harmony import */ var _employees__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employees */ \"./employees.js\");\n\r\n\r\n\r\n_employees__WEBPACK_IMPORTED_MODULE_1__[\"default\"].forEach(item => {\r\n    Object(_fabric__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(item);\r\n});\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });