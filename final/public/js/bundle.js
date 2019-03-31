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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/cinemaHall.js":
/*!***************************!*\
  !*** ./src/cinemaHall.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observer */ \"./src/observer.js\");\n/* harmony import */ var _place__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./place */ \"./src/place.js\");\n\n\nlet observable = new _observer__WEBPACK_IMPORTED_MODULE_0__[\"Observable\"]();\nlet addToCart = new _observer__WEBPACK_IMPORTED_MODULE_0__[\"Observer\"](({\n  cart,\n  item\n}) => {\n  cart.push(item);\n});\nobservable.addObserver(addToCart);\n\nconst removeFromCart = (cart, item) => {\n  let removed = cart.findIndex(elem => elem.row === item.row && elem.place === item.place);\n  cart.splice(removed, 1);\n};\n\nconst submitOrder = cart => {\n  if (localStorage.getItem('ordered')) {\n    console.log('local storage');\n  } else {\n    localStorage.setItem('ordered', JSON.stringify(cart));\n  }\n};\n\nclass CinemaHall {\n  constructor(rows, places, priceList) {\n    this.rows = rows;\n    this.places = places;\n    this.priceList = priceList;\n    this.cart = [];\n    this.ordered = [];\n  }\n\n  render() {\n    if (localStorage.getItem('ordered')) this.ordered = JSON.parse(localStorage.getItem('ordered'));\n    const root = document.getElementById('root');\n    const nodeInDom = document.querySelector('.wrap');\n    let node;\n\n    if (nodeInDom === null) {\n      node = document.createElement('div');\n      node.className = 'wrap';\n    } else {\n      node = nodeInDom;\n      node.innerHTML = '';\n    }\n\n    node.innerHTML += `\n        <div class=\"hall\">\n        <div class=\"screen\"></div>\n        <div class=\"schema\"></div>\n</div>\n        `;\n    const schema = node.querySelector('.schema');\n\n    for (let i = 1; i <= this.rows; i++) {\n      schema.innerHTML += `<ul class=\"row row-${i}\"></ul>`;\n      let row = schema.querySelector(`.row-${i}`);\n\n      for (let j = 1; j <= this.places; j++) {\n        let place = new _place__WEBPACK_IMPORTED_MODULE_1__[\"default\"](i, j, row, true);\n        place.checkIsActive([...this.ordered, ...this.cart]);\n        place.setPrices(this.priceList);\n        place.render();\n      }\n    }\n\n    if (this.cart.length > 0) {\n      node.innerHTML += `<div class=\"cart\"></div>`;\n      let cartNode = document.querySelector('.cart');\n      this.cart.forEach(item => {\n        cartNode.innerHTML += `<div class=\"cartItem\">\n            <div class=\"cartItem-infoBlock\">\n                <strong>${item.row}</strong>\n                <p>ряд</p>\n            </div>\n            <div class=\"cartItem-infoBlock\">\n                <strong>${item.place}</strong>\n                <p>место</p>\n            </div>\n            <div class=\"cartItem-infoBlock priceBlock\">\n                <strong>${item.price} грн</strong>                \n            </div>\n            <button class=\"removeFromCart\">X</button>\n</div>`;\n      });\n      cartNode.innerHTML += `<button class=\"buyBtn\">Купить <strong>${this.cart.reduce((sum, item) => {\n        return sum + item.price;\n      }, 0)} грн </strong></button>`;\n    }\n\n    root.addEventListener('click', e => {\n      e.preventDefault();\n\n      if (e.target.matches('.active')) {\n        observable.sendMessage({\n          cart: this.cart,\n          item: {\n            row: Number(e.target.dataset.row),\n            place: Number(e.target.dataset.place),\n            price: Number(e.target.dataset.price)\n          }\n        });\n        this.render();\n      }\n\n      if (e.target.matches('.removeFromCart')) {\n        removeFromCart(this.cart, {\n          row: Number(e.target.dataset.row),\n          place: Number(e.target.dataset.place)\n        });\n        this.render();\n      }\n\n      if (e.target.matches('.buyBtn')) {\n        submitOrder(this.cart);\n        alert('order submitted');\n        this.cart = [];\n        this.render();\n      }\n    }, {\n      once: true\n    });\n    root.appendChild(node);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CinemaHall);\n\n//# sourceURL=webpack:///./src/cinemaHall.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cinemaHall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cinemaHall */ \"./src/cinemaHall.js\");\n\nconst PriceList = [{\n  type: 'econom',\n  rows: [1, 2],\n  price: 60\n}, {\n  type: 'standart',\n  rows: [3, 4],\n  price: 90\n}, {\n  type: 'vip',\n  rows: [5],\n  price: 115\n}];\nlet cinema = new _cinemaHall__WEBPACK_IMPORTED_MODULE_0__[\"default\"](5, 10, PriceList);\ncinema.render();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/observer.js":
/*!*************************!*\
  !*** ./src/observer.js ***!
  \*************************/
/*! exports provided: Observable, Observer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Observable\", function() { return Observable; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Observer\", function() { return Observer; });\nfunction Observable() {\n  const observers = [];\n\n  this.sendMessage = msg => {\n    observers.map(obs => {\n      obs.notify(msg);\n    });\n  };\n\n  this.addObserver = function (observer) {\n    observers.push(observer);\n  };\n}\n\nfunction Observer(behavior) {\n  this.notify = function (msg) {\n    behavior(msg);\n  };\n}\n\n\n\n//# sourceURL=webpack:///./src/observer.js?");

/***/ }),

/***/ "./src/place.js":
/*!**********************!*\
  !*** ./src/place.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Place {\n  constructor(row, number, parentNode) {\n    this.row = row;\n    this.number = number;\n    this.parentNode = parentNode;\n  }\n\n  render() {\n    const place = document.createElement('li');\n    place.innerHTML = `\n        <a href=\"#\" \n            class=\"place ${this.isActive ? 'active' : null}\" \n            data-row=\"${this.row}\" \n            data-place=\"${this.number}\"\n            data-type = \"${this.type}\"\n            data-price = \"${this.price}\" >\n           </a>`;\n    this.parentNode.appendChild(place);\n  }\n\n  checkIsActive(array) {\n    if (!array.find(item => item.row === this.row && item.place === this.number)) this.isActive = true;\n  }\n\n  setPrices(priceList) {\n    let priceItem = priceList.find(item => item.rows.indexOf(this.row) !== -1);\n    this.price = priceItem.price;\n    this.type = priceItem.type;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Place);\n\n//# sourceURL=webpack:///./src/place.js?");

/***/ })

/******/ });