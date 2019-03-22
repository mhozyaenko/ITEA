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
/*! no static exports found */
/***/ (function(module, exports) {

eval("document.addEventListener('DOMContentLoaded', () => {\r\n  let night = new CustomEvent('night', {\r\n    cancelable: true,\r\n    isTrusted: true,\r\n    });\r\n  let stop = new CustomEvent('stop');\r\n  let start = new CustomEvent('start');\r\n\r\n  let trafficLight = document.querySelectorAll('.trafficLight');\r\n  let nightModeBtn = document.getElementById('Do');\r\n\r\n  function nightTraffic() {\r\n    const nightMode = setInterval(()=> {\r\n      this.classList.toggle('yellow');\r\n    }, 1000);\r\n\r\n    this.addEventListener('click', function () {\r\n      clearInterval(nightMode);\r\n      this.classList.remove('yellow');\r\n      this.removeEventListener('night', nightTraffic)\r\n    }, {once: true});\r\n  }\r\n\r\n  trafficLight.forEach(item => {\r\n    item.addEventListener('night', nightTraffic);\r\n    item.addEventListener('stop', function () {\r\n      this.classList.add('red');\r\n      this.classList.remove('green');\r\n    });\r\n    item.addEventListener('start', function () {\r\n      this.classList.add('green');\r\n      this.classList.remove('red');\r\n    });\r\n    item.addEventListener('click', function () {\r\n     ((!this.matches('.green') && (!this.matches('.red'))) || (this.matches('.green') && (!this.matches('.red')))) ?\r\n        this.dispatchEvent(stop) : this.dispatchEvent(start);\r\n    })\r\n  });\r\n\r\n  trafficLight.forEach(item => {\r\n    item.dispatchEvent(night);\r\n  });\r\n\r\nnightModeBtn.addEventListener('click', () => {\r\n  trafficLight.forEach(item => {\r\n    item.removeEventListener('night', nightTraffic);\r\n    item.addEventListener('night', nightTraffic);\r\n    item.dispatchEvent(night);\r\n  });\r\n})\r\n});\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });