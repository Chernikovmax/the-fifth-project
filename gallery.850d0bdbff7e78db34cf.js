var gallery =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "EEML");
/******/ })
/************************************************************************/
/******/ ({

/***/ "C+0D":
/*!**************************************!*\
  !*** ./src/styles/gallery/index.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://%5Bname%5D/./src/styles/gallery/index.css?");

/***/ }),

/***/ "EEML":
/*!****************************************!*\
  !*** ./src/scripts/gallery/gallery.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _styles_gallery_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/gallery/index.css */ \"C+0D\");\n/* harmony import */ var _styles_gallery_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_gallery_index_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _header_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header-menu.js */ \"hTXs\");\n/* harmony import */ var _header_menu_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_header_menu_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar IMAGE_QUANTITY = 30;\nvar pictureMiniatures = [];\nvar galleryPictureMiniatures = []; // Code below automatically fills up the arrays by <img> tags.\n\n(function () {\n  for (var i = 0; i < IMAGE_QUANTITY; i++) {\n    pictureMiniatures.push(\"<img src=\\\"./media/imgs/mountains/minis/\".concat(i, \"_mountain.jpg\\\" alt=\\\"Some mountain\\\" class=\\\"modal-nav__mini-pic\\\">\"));\n    galleryPictureMiniatures.push(\"<img src=\\\"./media/imgs/mountains/minis/\".concat(i, \"_mountain.jpg\\\" alt=\\\"Some mountain\\\" class=\\\"gallery__item-pic\\\">\"));\n  }\n})(); // Code below automatically renders the images on gallery page.\n\n\n(function (arr) {\n  arr.forEach(function (item, index) {\n    var out = \"<a onclick=\\\"openCertainModal(\".concat(index, \")\\\" class=\\\"gallery__item-link\\\">\\n                  \").concat(item, \"\\n              </a>\");\n    var galleryMiniature = document.createElement('li');\n    galleryMiniature.classList.add('gallery__item');\n    galleryMiniature.innerHTML = out;\n    var gallery = document.querySelector('.gallery');\n    gallery.appendChild(galleryMiniature);\n  });\n})(galleryPictureMiniatures);\n\nvar currentImage; //This variable will contain the information about rendered image for style management when switching.\n\nvar modal = document.querySelector('#gallery-modal');\nvar modalImage = document.querySelector('.modal-nav__image');\nvar modalMiniatureField = document.querySelector('.modal-nav');\n\nvar toggleModal = function toggleModal() {\n  document.querySelector('body').classList.toggle('body-scroll');\n\n  if (document.querySelector('.modal-nav__picture') !== null) {\n    document.querySelector('.modal-nav__picture').remove();\n  }\n\n  modal.classList.toggle('modal-active');\n};\n\ndocument.querySelector('#close-btn').addEventListener('click', toggleModal); //Code below allows closing modalbox by pressing \"Esc\" key on keyboard\n\nmodal.addEventListener('keydown', function (event) {\n  if (event.key === 'Escape') {\n    toggleModal();\n    return clearModalOnClose();\n  }\n}); //Code below allows switching images in modalbox by pressing keyboard's left/right keys\n\nmodal.addEventListener('keydown', function (event) {\n  if (event.key === 'ArrowLeft') {\n    return prevPic();\n  } else if (event.key === 'ArrowRight') {\n    return nextPic();\n  }\n});\n\nvar clearModalOnClose = function clearModalOnClose() {\n  document.querySelector('.modal-nav__mini-active').classList.remove('modal-nav__mini-active');\n  modalMiniatureField.innerHTML = '';\n};\n\ndocument.querySelector('#close-btn').addEventListener('click', clearModalOnClose);\n\nvar renderMiniatures = function renderMiniatures(arr) {\n  arr.forEach(function (item, index) {\n    var out = \"<a onclick=\\\"setPicture(\".concat(index, \")\\\" class=\\\"modal-nav__mini-link\\\">\\n                  \").concat(item, \"\\n              </a>\");\n    var miniature = document.createElement('li');\n    miniature.setAttribute('tabIndex', '1');\n    miniature.classList.add('modal-nav__mini');\n    miniature.innerHTML = out;\n    modalMiniatureField.appendChild(miniature);\n  });\n};\n\nvar openCertainModal = function openCertainModal(index) {\n  renderMiniatures(pictureMiniatures);\n  document.querySelectorAll('.modal-nav__mini')[index].classList.add('modal-nav__mini-active');\n  toggleModal();\n  document.querySelector('.modal-nav__mini-active').focus();\n  currentImage = index;\n  var image = document.createElement('img');\n  image.setAttribute('class', 'modal-nav__picture');\n  image.setAttribute('alt', 'Some mountain');\n  image.setAttribute('src', \"./media/imgs/mountains/\".concat(index, \"_mountain.jpg\"));\n  modalImage.appendChild(image);\n};\n\nglobal.openCertainModal = openCertainModal;\n\nvar setPicture = function setPicture(index) {\n  activateMiniPic(index);\n  document.querySelector('.modal-nav__picture').remove();\n  var image = document.createElement('img');\n  image.setAttribute('class', 'modal-nav__picture');\n  image.setAttribute('alt', 'Some mountain');\n  image.setAttribute('src', \"./media/imgs/mountains/\".concat(index, \"_mountain.jpg\"));\n  modalImage.appendChild(image);\n};\n\nglobal.setPicture = setPicture; //Code below highlights image miniatures in modalbox\n\nvar activateMiniPic = function activateMiniPic(index) {\n  var miniPics = document.querySelectorAll('.modal-nav__mini');\n  miniPics[currentImage].classList.remove('modal-nav__mini-active');\n  miniPics[index].classList.add('modal-nav__mini-active');\n  miniPics[index].focus();\n  currentImage = index;\n};\n\nvar prevPic = function prevPic() {\n  if (currentImage - 1 > 0) {\n    setPicture(currentImage - 1);\n  } else {\n    setPicture(IMAGE_QUANTITY - 1);\n  }\n};\n\ndocument.querySelector('#prev-btn').addEventListener('click', prevPic);\n\nvar nextPic = function nextPic() {\n  if (currentImage + 1 < IMAGE_QUANTITY) {\n    setPicture(currentImage + 1);\n  } else {\n    setPicture(0);\n  }\n};\n\ndocument.querySelector('#next-btn').addEventListener('click', nextPic);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ \"yLpj\")))\n\n//# sourceURL=webpack://%5Bname%5D/./src/scripts/gallery/gallery.js?");

/***/ }),

/***/ "hTXs":
/*!************************************!*\
  !*** ./src/scripts/header-menu.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {var menuBtn = document.querySelector('#burger-menu');\nvar menu = document.querySelector('#main-menu');\nvar menuList = document.querySelector('#main-menu-list');\nvar menuActive = false;\nglobal.menuActive = menuActive;\n\nvar toggleMenu = function toggleMenu() {\n  document.querySelector('body').classList.toggle('body-scroll');\n  menu.classList.toggle('header-container--active');\n  menuList.classList.toggle('header-menu--active');\n\n  if (menuActive === false) {\n    menuBtn.innerHTML = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" x=\\\"0px\\\" y=\\\"0px\\\" viewBox=\\\"0 0 80 80\\\" style=\\\"enable-background:new 0 0 80 80;\\\" xml:space=\\\"preserve\\\">\\n            <g>\\n            \\t<polygon points=\\\"40,49.007 15.714,73.293 6.707,64.286 30.993,40 6.707,15.714 15.714,6.707 40,30.993    64.286,6.707 73.293,15.714 49.007,40 73.293,64.286 64.286,73.293  \\\"/>\\n            \\t<path d=\\\"M15.714,7.414l23.578,23.578L40,31.7l0.707-0.707L64.286,7.414l8.3,8.3L49.007,39.293L48.3,40   l0.707,0.707l23.578,23.579l-8.3,8.3L40.707,49.007L40,48.3l-0.707,0.707L15.714,72.586l-8.3-8.3l23.579-23.579L31.7,40   l-0.707-0.707L7.414,15.714L15.714,7.414 M64.286,6L40,30.286L15.714,6L6,15.714L30.286,40L6,64.286L15.714,74L40,49.714L64.286,74   L74,64.286L49.714,40L74,15.714L64.286,6L64.286,6z\\\"/>\\n            </g>\\n          </svg>\";\n    menuActive = true;\n    return;\n  }\n\n  if (menuActive === true) {\n    menuBtn.innerHTML = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 24 24\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" enable-background=\\\"new 0 0 24 24\\\">\\n            <g>\\n              <path d=\\\"M24,3c0-0.6-0.4-1-1-1H1C0.4,2,0,2.4,0,3v2c0,0.6,0.4,1,1,1h22c0.6,0,1-0.4,1-1V3z\\\"/>\\n              <path d=\\\"M24,11c0-0.6-0.4-1-1-1H1c-0.6,0-1,0.4-1,1v2c0,0.6,0.4,1,1,1h22c0.6,0,1-0.4,1-1V11z\\\"/>\\n              <path d=\\\"M24,19c0-0.6-0.4-1-1-1H1c-0.6,0-1,0.4-1,1v2c0,0.6,0.4,1,1,1h22c0.6,0,1-0.4,1-1V19z\\\"/>\\n            </g>\\n          </svg>\";\n    menuActive = false;\n    return;\n  }\n};\n\nmenuBtn.addEventListener('click', toggleMenu);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ \"yLpj\")))\n\n//# sourceURL=webpack://%5Bname%5D/./src/scripts/header-menu.js?");

/***/ }),

/***/ "yLpj":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack://%5Bname%5D/(webpack)/buildin/global.js?");

/***/ })

/******/ });