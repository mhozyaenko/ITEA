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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _songs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./songs */ \"./songs.js\");\n/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observer */ \"./observer.js\");\n\r\n\r\n\r\n\r\nObject(_songs__WEBPACK_IMPORTED_MODULE_0__[\"MusicBox\"])();\r\n\r\nlet playlist = [];\r\n\r\nlet observableSongs = new _observer__WEBPACK_IMPORTED_MODULE_1__[\"Observable\"]();\r\nlet observablePlaylist = new _observer__WEBPACK_IMPORTED_MODULE_1__[\"Observable\"]();\r\nlet observable = new _observer__WEBPACK_IMPORTED_MODULE_1__[\"Observable\"]();\r\n\r\nlet addToPlayList = new _observer__WEBPACK_IMPORTED_MODULE_1__[\"Observer\"]((id) => {\r\n  if (!playlist.includes(id)) playlist.push(id);\r\n  Object(_songs__WEBPACK_IMPORTED_MODULE_0__[\"Playlist\"])(playlist);\r\n});\r\nlet removeFromPlaylist = new _observer__WEBPACK_IMPORTED_MODULE_1__[\"Observer\"]((id) => {\r\n  let index = playlist.indexOf(id);\r\n  playlist.splice(index, 1);\r\n  Object(_songs__WEBPACK_IMPORTED_MODULE_0__[\"Playlist\"])(playlist);\r\n});\r\nlet playSong = new _observer__WEBPACK_IMPORTED_MODULE_1__[\"Observer\"]((id) => {\r\n  Object(_songs__WEBPACK_IMPORTED_MODULE_0__[\"PlaySong\"])(id);\r\n})\r\n\r\nobservableSongs.addObserver(addToPlayList);\r\nobservablePlaylist.addObserver(removeFromPlaylist);\r\nobservable.addObserver(playSong);\r\n\r\nlet songs = document.getElementById('MusicBox');\r\nlet playlistBox = document.getElementById('playlist');\r\n\r\nsongs.addEventListener('click',  event => {\r\n  event.preventDefault();\r\n  let id = event.target.getAttribute('data-id');\r\n  if (event.target.matches('.toPlaylistBtn')) observableSongs.sendMessage(id);\r\n  if (event.target.matches('.toPlayerBtn')) observable.sendMessage(id);\r\n});\r\nplaylistBox.addEventListener('click',  event => {\r\n  event.preventDefault();\r\n  let id = event.target.getAttribute('data-id');\r\n  if (event.target.matches('.deleteBtn')) observablePlaylist.sendMessage(id);\r\n  if (event.target.matches('.toPlayerBtn')) observable.sendMessage(id);\r\n});\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./observer.js":
/*!*********************!*\
  !*** ./observer.js ***!
  \*********************/
/*! exports provided: Observable, Observer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Observable\", function() { return Observable; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Observer\", function() { return Observer; });\nfunction Observable() {\r\n  const observers = [];\r\n  this.sendMessage = ( msg ) => {\r\n    observers.map( ( obs ) => {\r\n      obs.notify(msg);\r\n    });\r\n  };\r\n  this.addObserver = function( observer ){\r\n    observers.push( observer );\r\n  };\r\n}\r\n\r\nfunction Observer (behavior) {\r\n  this.notify = function( msg ){\r\n    behavior( msg );\r\n  };\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./observer.js?");

/***/ }),

/***/ "./songs.js":
/*!******************!*\
  !*** ./songs.js ***!
  \******************/
/*! exports provided: MusicBox, Playlist, PlaySong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MusicBox\", function() { return MusicBox; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Playlist\", function() { return Playlist; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PlaySong\", function() { return PlaySong; });\nconst MusicList = [\r\n    {\r\n        title: 'Rammstain',\r\n        songs: [\r\n            {\r\n                id: 1,\r\n                name: 'Du Hast',\r\n                time: [3, 12]\r\n            },\r\n            {\r\n                id: 2,\r\n                name: 'Ich Will',\r\n                time: [5, 1]\r\n            },\r\n            {\r\n                id: 3,\r\n                name: 'Mutter',\r\n                time: [4, 15]\r\n            },\r\n            {\r\n                id: 4,\r\n                name: 'Ich tu dir weh',\r\n                time: [5, 13]\r\n            },\r\n            {\r\n                id: 5,\r\n                name: 'Rammstain',\r\n                time: [3, 64]\r\n            }\r\n        ]\r\n    },\r\n    {\r\n        title: 'System of a Down',\r\n        songs: [\r\n            {\r\n                id: 6,\r\n                name: 'Toxicity',\r\n                time: [4, 22]\r\n            },\r\n            {\r\n                id: 7,\r\n                name: 'Sugar',\r\n                time: [2, 44]\r\n            },\r\n            {\r\n                id: 8,\r\n                name: 'Lonely Day',\r\n                time: [3, 19]\r\n            },\r\n            {\r\n                id: 9,\r\n                name: 'Lost in Hollywood',\r\n                time: [5, 9]\r\n            },\r\n            {\r\n                id: 10,\r\n                name: 'Chop Suey!',\r\n                time: [2, 57]\r\n            }\r\n        ]\r\n    },\r\n    {\r\n        title: 'Green Day',\r\n        songs: [\r\n            {\r\n                id: 11,\r\n                name: '21 Guns',\r\n                time: [4, 16]\r\n            },\r\n            {\r\n                id: 12,\r\n                name: 'Boulevard of broken dreams!',\r\n                time: [6, 37]\r\n            },\r\n            {\r\n                id: 13,\r\n                name: 'Basket Case!',\r\n                time: [3, 21]\r\n            },\r\n            {\r\n                id: 14,\r\n                name: 'Know Your Enemy',\r\n                time: [4, 11]\r\n            }\r\n        ]\r\n    },\r\n    {\r\n        title: 'Linkin Park',\r\n        songs: [\r\n            {\r\n                id: 15,\r\n                name: 'Numb',\r\n                time: [3, 11]\r\n            },\r\n            {\r\n                id: 16,\r\n                name: 'New Divide',\r\n                time: [4, 41]\r\n            },\r\n            {\r\n                id: 17,\r\n                name: 'Breaking the Habit',\r\n                time: [4, 1]\r\n            },\r\n            {\r\n                id: 18,\r\n                name: 'Faint',\r\n                time: [3, 29]\r\n            }\r\n        ]\r\n    }\r\n]\r\n\r\nconst MusicBox = () => {\r\n    const MusicBox = document.getElementById('MusicBox');\r\n    MusicList.map( Artist => {\r\n        MusicBox.innerHTML += `<div><h4>${Artist.title}</h4><ul>`;\r\n        Artist.songs.map( song => {\r\n            MusicBox.innerHTML += `<li class=\"songItem\"><p>${song.name} </p>\r\n<a data-id=\"${song.id}\" href=\"#\" class=\"toPlayerBtn\">play</a>\r\n<a data-id=\"${song.id}\" href=\"#\" class=\"toPlaylistBtn\">add to playlist</a></li>`\r\n        });\r\n        MusicBox.innerHTML += '</ul></div>';\r\n\r\n    });\r\n}\r\n\r\nconst Playlist = (playlist) => {\r\n  const playlistNode = document.getElementById('playlist');\r\n  playlistNode.innerHTML = \"\";\r\n  let duration = 0;\r\n  MusicList.map ( Artist => {\r\n      Artist.songs.map( song => {\r\n          if (playlist.includes(String(song.id))) {\r\n            playlistNode.innerHTML += `<li class=\"playlistItem\"><p>${song.name}/${Artist.title}</p>\r\n    <a data-id=\"${song.id}\"  href=\"#\" class=\"toPlayerBtn\">play</a>\r\n    <a data-id=\"${song.id}\"  href=\"#\" class=\"deleteBtn\">delete</a></li>`;\r\n            duration += (song.time[0] * 60 + song.time[1]);\r\n          }\r\n      } );\r\n  });\r\n  let minutes = Math.floor(duration/60);\r\n  let seconds = duration - minutes*60;\r\n  playlistNode.innerHTML += `<strong>Total time: ${minutes} min ${seconds} sec</strong>`\r\n }\r\n const PlaySong = id => {\r\n    const player = document.getElementById('player');\r\n    MusicList.map ( artist => {\r\n        let chosenSong = artist.songs.find(item => item.id === Number(id));\r\n        if (chosenSong) {\r\n          player.innerHTML += `<strong>${artist.title} - ${chosenSong.name}</strong>\r\n          <p>time: ${chosenSong.time[0]}:${chosenSong.time[1]}</p>\r\n          `\r\n        }\r\n    });\r\n }\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./songs.js?");

/***/ })

/******/ });