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

/***/ "./calc.js":
/*!*****************!*\
  !*** ./calc.js ***!
  \*****************/
/*! exports provided: Calc, Command, AddCommand, SubCommand, MultiplyCommand, DivideCommand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Calc\", function() { return Calc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Command\", function() { return Command; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AddCommand\", function() { return AddCommand; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SubCommand\", function() { return SubCommand; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MultiplyCommand\", function() { return MultiplyCommand; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DivideCommand\", function() { return DivideCommand; });\nclass Calc {\r\n    constructor() {\r\n        this.currentValue = 0;\r\n        this.history = [];\r\n    }\r\n    execute(command) {\r\n        this.currentValue = command.execute(this.currentValue);\r\n        this.history.push(command);\r\n    }\r\n    getCurrentValue() {\r\n        return this.currentValue;\r\n    }\r\n    undo() {\r\n        const cmd = this.history.pop();\r\n        this.currentValue = cmd.undo(this.currentValue);\r\n    }\r\n}\r\nfunction Command(fn, undo, value) {\r\n    this.execute = fn;\r\n    this.undo = undo;\r\n    this.value = value;\r\n}\r\nfunction add(value) {\r\n    return value + this.value;\r\n}\r\nfunction sub(value) {\r\n    return value - this.value;\r\n}\r\nfunction multiply(value) {\r\n    return value * this.value;\r\n}\r\nfunction divide(value) {\r\n    return value / this.value;\r\n}\r\nfunction AddCommand(value) {\r\n    Command.call(this, add, sub, value);\r\n}\r\nfunction SubCommand(value) {\r\n    Command.call(this, sub, add, value);\r\n}\r\nfunction MultiplyCommand(value) {\r\n    Command.call(this, multiply, divide, value);\r\n}\r\nfunction DivideCommand(value) {\r\n    Command.call(this, divide, multiply, value);\r\n}\r\n\n\n//# sourceURL=webpack:///./calc.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _calc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calc.js */ \"./calc.js\");\n\r\n\r\nclass Calculator {\r\n   constructor() {\r\n       this.calc = new _calc_js__WEBPACK_IMPORTED_MODULE_0__[\"Calc\"]();\r\n   }\r\n   render() {\r\n       const root = document.getElementById('root');\r\n       const nodeInDom = root.querySelector('.wrap');\r\n       let node;\r\n       if (nodeInDom===null) {\r\n           node = document.createElement('div')\r\n           node.className = 'wrap';\r\n       } else {\r\n           node = nodeInDom;\r\n       }\r\n\r\n       node.innerHTML  = `\r\n       <input class=\"valueInput\" type=\"number\"/>\r\n       <h3>${this.calc.currentValue}</h3>\r\n       <div class=\"controls\">\r\n       <button class=\"addBtn\" type=\"button\">+</button>\r\n       <button class=\"subBtn\" type=\"button\">-</button>\r\n       <button class=\"multiplyBtn\" type=\"button\">*</button>\r\n       <button class=\"divideBtn\" type=\"button\">/</button>\r\n       <button class=\"undoBtn\" type=\"button\">undo</button>\r\n</div>\r\n`;\r\n       let history = document.createElement('ul');\r\n       this.calc.history.forEach(item => {\r\n       history.innerHTML += `<li>${item.execute.name} ${item.value}</li>`;\r\n   });\r\n       node.appendChild(history);\r\n       if (nodeInDom===null) root.appendChild(node);\r\n       const valueInput = node.querySelector('.valueInput');\r\n       const addBtn = node.querySelector('.addBtn');\r\n       addBtn.addEventListener('click', (e) => {\r\n           e.preventDefault();\r\n           let value = Number(valueInput.value);\r\n           this.calc.execute(new _calc_js__WEBPACK_IMPORTED_MODULE_0__[\"AddCommand\"](value));\r\n           this.render();\r\n       });\r\n       const subBtn = node.querySelector('.subBtn');\r\n       subBtn.addEventListener('click', (e) => {\r\n           e.preventDefault();\r\n           let value = Number(valueInput.value);\r\n           this.calc.execute(new _calc_js__WEBPACK_IMPORTED_MODULE_0__[\"SubCommand\"](value));\r\n           this.render();\r\n       });\r\n       const multiplyBtn = node.querySelector('.multiplyBtn');\r\n       multiplyBtn.addEventListener('click', (e)=> {\r\n           e.preventDefault();\r\n           let value = Number(valueInput.value);\r\n           this.calc.execute(new _calc_js__WEBPACK_IMPORTED_MODULE_0__[\"MultiplyCommand\"](value));\r\n           this.render();\r\n       });\r\n       const divideBtn = node.querySelector('.divideBtn');\r\n       divideBtn.addEventListener('click', (e)=>{\r\n           e.preventDefault();\r\n           let value = Number(valueInput.value);\r\n           this.calc.execute(new _calc_js__WEBPACK_IMPORTED_MODULE_0__[\"DivideCommand\"](value));\r\n           this.render();\r\n       });\r\n       const undoBtn = node.querySelector('.undoBtn');\r\n       undoBtn.addEventListener('click', (e)=>{\r\n           e.preventDefault();\r\n           console.log(this);\r\n           this.calc.undo();\r\n           this.render();\r\n       });\r\n   }\r\n}\r\n\r\nconst myCalc = new Calculator();\r\nmyCalc.render();\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });