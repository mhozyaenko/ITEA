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

/***/ "./es7functional.js":
/*!**************************!*\
  !*** ./es7functional.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// const es7 = () => {\r\n//\r\n//   class CoolMath {\r\n//\r\n//     toNumber(x) {return Number(x)}\r\n//     addNumbers(a.toNumber){ return a+b; }\r\n//     multiplyNumbers(a,b){ return a*b}\r\n//     minusNumbers(a,b){ return a-b }\r\n//   }\r\n//   let Calcul = new CoolMath();\r\n//   let x = Calcul.addNumbers(2, 2);\r\n//   let y = Calcul.multiplyNumbers(\"10\", \"2\");\r\n//   let z = Calcul.minusNumbers(10, 2);\r\n//\r\n//   console.log(x, y, z);\r\n// };\r\n//\r\n// export default es7;\r\n\n\n//# sourceURL=webpack:///./es7functional.js?");

/***/ }),

/***/ "./human.js":
/*!******************!*\
  !*** ./human.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst BeachParty = () => {\r\n  class Human {\r\n    constructor(name) {\r\n      this.name = name;\r\n      this.currentTemperature = 10;\r\n      this.minTemperature = 0;\r\n      this.maxTemperature = 50;\r\n      console.log(`new Human ${this.name} arrived!`);\r\n    }\r\n\r\n    changeTemperature(changeValue) {\r\n      console.log('current', this.currentTemperature + changeValue,\r\n        'max', this.maxTemperature\r\n      );\r\n      let prevTemperature = this.currentTemperature;\r\n      this.currentTemperature += changeValue;\r\n\r\n      if (this.currentTemperature < this.minTemperature) {\r\n        console.error(`Temperature is to low: ${this.currentTemperature}. ${this.name} froze to death :(`);\r\n      } else {\r\n        if (this.currentTemperature > this.maxTemperature) {\r\n          console.log(`Temperature is to high: ${this.currentTemperature}. ${this.name} roasted on the sun :(`)\r\n        } else {\r\n          if (this.currentTemperature > prevTemperature) {\r\n            console.log(`It's hot outside (${this.currentTemperature} deg), please take some coolers or ${this.name} will die!`)\r\n          } else {\r\n            console.log(`It's cold outside (${this.currentTemperature} deg), please wear some clothes, or ${this.name} will die!`);\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  class HumanWithCoolers extends Human {\r\n    constructor(name) {\r\n      super(name);\r\n      this.coolers = [\r\n        {\r\n          name: 'ice-cream',\r\n          temperatureCoolRate: -5\r\n        },\r\n        {\r\n          name: 'juice',\r\n          temperatureCoolRate: -7\r\n        }];\r\n    }\r\n\r\n    addCooler(cooler) {\r\n      (cooler.name && cooler.temperatureCoolRate) ? this.coolers.push(cooler)\r\n        : console.log('cooler is not valid');\r\n    }\r\n\r\n    changeTemperatureWithCooler(changeValue) {\r\n      this.changeTemperature(changeValue);\r\n      if (this.currentTemperature > 30 && this.currentTemperature < 50) {\r\n        if (this.coolers.length > 0) {\r\n          let usedCooler = this.coolers[0];\r\n          this.currentTemperature += usedCooler.temperatureCoolRate;\r\n          console.log(`Human ${this.name} used ${usedCooler.name}. Temperature: ${this.currentTemperature}`);\r\n          this.coolers.splice(0, 1);\r\n        } else {\r\n          console.log('Oops! No more coolers to use...');\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  let Alisa = new HumanWithCoolers('Alisa');\r\n  Alisa.changeTemperatureWithCooler(30);\r\n  Alisa.changeTemperatureWithCooler(5);\r\n  Alisa.addCooler({name: 'lemon'});\r\n  Alisa.changeTemperatureWithCooler(5);\r\n  Alisa.addCooler({name: 'ice', temperatureCoolRate: -10});\r\n  Alisa.changeTemperatureWithCooler(15);\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (BeachParty);\n\n//# sourceURL=webpack:///./human.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _human__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./human */ \"./human.js\");\n/* harmony import */ var _messenger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messenger */ \"./messenger.js\");\n/* harmony import */ var _es7functional__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./es7functional */ \"./es7functional.js\");\n/* harmony import */ var _es7functional__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_es7functional__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\r\n// BeachParty();\r\n//\r\n// const Messenger = new Application('viber', 'slack', 'telegram');\r\n// Messenger.createInterface();\r\n\r\n_es7functional__WEBPACK_IMPORTED_MODULE_2___default()();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./messenger.js":
/*!**********************!*\
  !*** ./messenger.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _notifier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifier */ \"./notifier.js\");\n\r\n\r\nconst Messengers = [\r\n  {name: 'sms', image: 'img/sms.svg', type: 'mts'},\r\n  {name: 'mail', image: 'img/gmail.svg'},\r\n  {name: 'telegram', image: 'img/telegram.svg'},\r\n  {name: 'viber', image: 'img/viber.svg'},\r\n  {name: 'slack', image: 'img/slack.svg'},\r\n];\r\n\r\nclass Application {\r\n    constructor(...args) {\r\n      this.notifierTargets = Messengers.filter(item => args.indexOf(item.name)!=-1);\r\n      this.notifier = new _notifier__WEBPACK_IMPORTED_MODULE_0__[\"NotifierFactory\"](this.notifierTargets);\r\n      this.createInterface = this.createInterface.bind(this);\r\n      this.node = null;\r\n    }\r\n    createInterface(){\r\n      const root = document.getElementById('root');\r\n      const AppNode = document.createElement('section');\r\n\r\n      AppNode.className = 'notifer_app';\r\n      console.log( this.notifierTargets);\r\n      AppNode.innerHTML =\r\n        `\r\n      <div class=\"notifer_app--container\">\r\n        <header>\r\n          <input class=\"notifier__messanger\" type=\"text\"/>\r\n          <button class=\"notifier__send\">Send Message</button>\r\n        </header>\r\n        <div class=\"notifier__container\">\r\n        ${\r\n          this.notifierTargets.map( item =>\r\n            `\r\n            <div class=\"notifier__item\" data-slug=\"${item.name}\">\r\n              <header class=\"notifier__header\">\r\n                <img width=\"25\" src=\"${item.image}\"/>\r\n                <span>${item.name}</span>\r\n              </header>\r\n              <div class=\"notifier__messages\"></div>\r\n            </div>\r\n            `).join('')\r\n          }\r\n        </div>\r\n      </div>\r\n    `;\r\n      const container = AppNode.querySelector('.notifier__container');\r\n      const btn = AppNode.querySelector('.notifier__send');\r\n      const input = AppNode.querySelector('.notifier__messanger');\r\n      btn.addEventListener('click', () => {\r\n        let value = input.value;\r\n        this.notifier.sendMessage(value, this.node);\r\n      });\r\n\r\n      this.node = AppNode;\r\n      root.appendChild(AppNode);\r\n    }\r\n  }\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Application);\r\n\n\n//# sourceURL=webpack:///./messenger.js?");

/***/ }),

/***/ "./notifier.js":
/*!*********************!*\
  !*** ./notifier.js ***!
  \*********************/
/*! exports provided: NotifierFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NotifierFactory\", function() { return NotifierFactory; });\nclass Notifier {\r\n  send( msg, baseNode, block ){\r\n    console.log('Mesasge was sended:', msg );\r\n    const target = baseNode.querySelector(`.notifier__item[data-slug=\"${block}\"]`);\r\n    console.log('target', target);\r\n    target.innerHTML += `<div>${msg}</div>`;\r\n  }\r\n}\r\nclass SmsNotifier extends Notifier {\r\n  send( msg, baseNode, block = 'sms' ){\r\n    super.send(msg, baseNode, block);\r\n  }\r\n}\r\nclass ViberNotifier extends Notifier {\r\n  send( msg, baseNode, block = 'viber'){\r\n    super.send(msg, baseNode, block);\r\n  }\r\n}\r\nclass GmailNotifier extends Notifier {\r\n  send( msg, baseNode, block = 'mail' ){\r\n   super.send(msg, baseNode, block);\r\n  }\r\n}\r\nclass TelegramNotifier extends Notifier {\r\n  send( msg, baseNode, block = 'telegram' ){\r\n    super.send(msg, baseNode, block);\r\n  }\r\n}\r\nclass SlackNotifier extends Notifier {\r\n  send( msg, baseNode, block = 'slack' ){\r\n   super.send(msg, baseNode, block);\r\n  }\r\n}\r\nclass NotifierFactory {\r\n  constructor(clients) {\r\n    let obs = clients.map( item => {\r\n      switch (item.name) {\r\n        case 'sms': {\r\n          return new SmsNotifier(item);\r\n          break;\r\n        }\r\n        case 'viber': {\r\n          return new ViberNotifier(item);\r\n          break;\r\n        }\r\n        case 'mail': {\r\n          return new GmailNotifier(item);\r\n          break;\r\n        }\r\n        case 'telegram': {\r\n          return new TelegramNotifier(item);\r\n          break;\r\n        }\r\n        case 'slack': {\r\n          return new SlackNotifier(item);\r\n          break;\r\n        }\r\n        default: return;\r\n      }\r\n    });\r\n    this.clients = obs;\r\n  }\r\n  sendMessage( msg, baseNode ){\r\n    this.clients.map( ( obs ) => {\r\n      obs.send(msg, baseNode);\r\n    });\r\n  }\r\n  addNotifier( notifier ){\r\n    this.clients.push( notifier );\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./notifier.js?");

/***/ })

/******/ });