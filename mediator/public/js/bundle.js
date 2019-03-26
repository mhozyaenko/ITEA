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

eval("class Professor {\n  constructor(name) {\n    this.name = name;\n    this.monitor = null;\n  }\n\n  answerTheQuestion(student) {\n    if (student.monitor !== 'monitor') {\n      console.error('It is not your bussines');\n    } else {\n      console.log('Yes, my dear?!');\n    }\n  }\n\n}\n\nclass Student {\n  constructor(name) {\n    this.name = name;\n    this.monitor = null;\n  }\n\n  getAnswer() {\n    this.monitor !== null ? console.log(`${this.name} - wait for answer from Professor`) : console.error(`${this.name} - you can't ask without Monitor, please add to group first`);\n  }\n\n  tipTheMonitor(question, professor) {\n    this.monitor !== null ? this.monitor.askProfessor(this, professor, question) : console.error(`${this.name} - you can't ask without Monitor, please add to group first`);\n  }\n\n}\n\nclass Monitor extends Student {\n  constructor(name) {\n    super(name);\n    this.monitor = 'monitor';\n    this.studentGroup = {};\n    this.professors = {};\n  }\n\n  addToGroup(student) {\n    this.studentGroup[student.name] = student;\n    student.monitor = this;\n    console.log(`Add new student '${student.name}'  to group`);\n    console.log('List or students:', this.studentGroup);\n  }\n\n  addProfessor(professor) {\n    this.professors[professor.name] = professor;\n    professor.monitor = this;\n    console.log(`Add new professor '${professor.name}'`);\n    console.log('List or professors:', this.professors);\n  }\n\n  askProfessor(student, professor, question) {\n    console.log(`${student.name} asks ${professor.name}: ${question}`);\n    professor.answerTheQuestion(this, question);\n  }\n\n}\n\nlet student1 = new Student('Alisa');\nlet student2 = new Student('John');\nlet student3 = new Student('Jane');\nlet monitor = new Monitor('Helen');\nlet professor = new Professor('Einstein');\nmonitor.addProfessor(professor);\nmonitor.addToGroup(student1);\nmonitor.addToGroup(student2);\nstudent1.tipTheMonitor('question', professor);\nstudent1.getAnswer('question', professor);\nstudent3.tipTheMonitor('question', professor);\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });