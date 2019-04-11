var app =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "FZBc");
/******/ })
/************************************************************************/
/******/ ({

/***/ "4fRq":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/rng-browser.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Unique ID creation requires a high quality random # generator.  In the\n// browser this is a little complicated due to unknown quality of Math.random()\n// and inconsistent support for the `crypto` API.  We do the best we can via\n// feature-detection\n\n// getRandomValues needs to be invoked in a context where \"this\" is a Crypto\n// implementation. Also, find the complete implementation of crypto on IE11.\nvar getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||\n                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));\n\nif (getRandomValues) {\n  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto\n  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef\n\n  module.exports = function whatwgRNG() {\n    getRandomValues(rnds8);\n    return rnds8;\n  };\n} else {\n  // Math.random()-based (RNG)\n  //\n  // If all else fails, use Math.random().  It's fast, but is of unspecified\n  // quality.\n  var rnds = new Array(16);\n\n  module.exports = function mathRNG() {\n    for (var i = 0, r; i < 16; i++) {\n      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;\n      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;\n    }\n\n    return rnds;\n  };\n}\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/uuid/lib/rng-browser.js?");

/***/ }),

/***/ "5qVv":
/*!******************************************************!*\
  !*** ./src/scripts/home/feature-products-gallery.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var showFirstProduct = function showFirstProduct() {\n  return showFeatureProduct(0);\n};\n\nvar first = document.querySelector('[data-type=\"1st-feature-product\"]');\nfirst.addEventListener(\"click\", showFirstProduct);\n\nvar showSecondProduct = function showSecondProduct() {\n  return showFeatureProduct(1);\n};\n\nvar second = document.querySelector('[data-type=\"2nd-feature-product\"]');\nsecond.addEventListener(\"click\", showSecondProduct);\n\nvar showThirdProduct = function showThirdProduct() {\n  return showFeatureProduct(2);\n};\n\nvar third = document.querySelector('[data-type=\"3rd-feature-product\"]');\nthird.addEventListener(\"click\", showThirdProduct);\n\nvar showFourthProduct = function showFourthProduct() {\n  return showFeatureProduct(3);\n};\n\nvar fourth = document.querySelector('[data-type=\"4th-feature-product\"]');\nfourth.addEventListener(\"click\", showFourthProduct);\n\nvar showFifthProduct = function showFifthProduct() {\n  return showFeatureProduct(4);\n};\n\nvar fifth = document.querySelector('[data-type=\"5th-feature-product\"]');\nfifth.addEventListener(\"click\", showFifthProduct);\n\nfunction showFeatureProduct(index) {\n  var products = document.getElementsByClassName('feature-products__slide');\n  var titles = document.getElementsByClassName('feature-products__menu-item');\n\n  for (var i = 0; i < products.length; i++) {\n    products[i].classList.remove('feature-products__slide--active');\n    titles[i].classList.remove('feature-products__menu-item--active');\n  }\n\n  products[index].classList.add('feature-products__slide--active');\n  titles[index].classList.add('feature-products__menu-item--active');\n}\n\n//# sourceURL=webpack://%5Bname%5D/./src/scripts/home/feature-products-gallery.js?");

/***/ }),

/***/ "FZBc":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/index.css */ \"VxdY\");\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _header_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header-menu.js */ \"hTXs\");\n/* harmony import */ var _header_menu_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_header_menu_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_feature_products_gallery_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/feature-products-gallery.js */ \"5qVv\");\n/* harmony import */ var _home_feature_products_gallery_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_feature_products_gallery_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_comments_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/comments.js */ \"t6sz\");\n\n\n\n\nvar slides = document.getElementsByClassName('slide');\nvar dots = document.getElementsByClassName('slide-switches__dot');\nvar slideIndex = 0;\nvar slideInterval = setInterval(nextSlide, 2500);\nvar play = true;\nvar playbackBtn = document.querySelector('.slide-switches__playback');\nvar previousBtn = document.querySelector('.slide-switches__prev');\nvar nextBtn = document.querySelector('.slide-switches__next');\nshowFirstSlide();\n\nfunction showFirstSlide() {\n  slides[slideIndex].classList.add('slide--active');\n  dots[slideIndex].classList.add('slide-switches__dot--active');\n}\n\nfunction slideChange(n) {\n  clearSlideshow();\n  slideIndex = n;\n\n  if (slideIndex > slides.length - 1) {\n    slideIndex = 0;\n    slides[slideIndex].classList.add('slide--active');\n    return dots[slideIndex].classList.add('slide-switches__dot--active');\n  }\n\n  if (slideIndex < 0) {\n    slideIndex = slides.length - 1;\n    slides[slideIndex].classList.add('slide--active');\n    return dots[slideIndex].classList.add('slide-switches__dot--active');\n  }\n\n  slides[slideIndex].classList.add('slide--active');\n  dots[slideIndex].classList.add('slide-switches__dot--active');\n}\n\nfunction nextSlide() {\n  slideChange(slideIndex + 1);\n}\n\nfunction clearSlideshow() {\n  slides[slideIndex].classList.remove('slide--active');\n  dots[slideIndex].classList.remove('slide-switches__dot--active');\n} // The following code is for buttons\n\n\nfunction setSlide(num) {\n  pauseSlideshow();\n  slideChange(num);\n}\n\nglobal.setSlide = setSlide;\n\nfunction setPrevSlide() {\n  pauseSlideshow();\n  slideChange(slideIndex - 1);\n}\n\nglobal.setPrevSlide = setPrevSlide;\n\nfunction setNextSlide() {\n  pauseSlideshow();\n  slideChange(slideIndex + 1);\n}\n\nglobal.setNextSlide = setNextSlide;\n\nvar playbackSwitcher = function playbackSwitcher() {\n  if (play === true) {\n    return pauseSlideshow();\n  }\n\n  if (play === false) {\n    return playSlideshow();\n  }\n};\n\nglobal.playbackSwitcher = playbackSwitcher; // playbackBtn.addEventListener('click', playbackSwitcher);\n\nfunction playSlideshow() {\n  play = true;\n  playbackBtn.innerHTML = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" x=\\\"0\\\" y=\\\"0\\\"\\n     viewBox=\\\"0 0 47.607 47.607\\\" xml:space=\\\"preserve\\\">\\n    <g>\\n      <path d=\\\"M17.991,40.976c0,3.662-2.969,6.631-6.631,6.631l0,0c-3.662,0-6.631-2.969-6.631-6.631V6.631C4.729,2.969,7.698,0,11.36,0\\n        l0,0c3.662,0,6.631,2.969,6.631,6.631V40.976z\\\"/>\\n      <path d=\\\"M42.877,40.976c0,3.662-2.969,6.631-6.631,6.631l0,0c-3.662,0-6.631-2.969-6.631-6.631V6.631\\n        C29.616,2.969,32.585,0,36.246,0l0,0c3.662,0,6.631,2.969,6.631,6.631V40.976z\\\"/>\\n    </g>\\n  </svg>\";\n  slideInterval = setInterval(nextSlide, 2500);\n}\n\nfunction pauseSlideshow() {\n  play = false;\n  playbackBtn.innerHTML = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" x=\\\"0\\\" y=\\\"0\\\"\\n  \\t viewBox=\\\"0 0 232.153 232.153\\\" xml:space=\\\"preserve\\\">\\n  \\t<g>\\n  \\t\\t<path style=\\\"fill: #ff2d2d;fill-rule:evenodd;clip-rule:evenodd;\\\" d=\\\"M203.791,99.628L49.307,2.294c-4.567-2.719-10.238-2.266-14.521-2.266\\n  \\t\\t\\tc-17.132,0-17.056,13.227-17.056,16.578v198.94c0,2.833-0.075,16.579,17.056,16.579c4.283,0,9.955,0.451,14.521-2.267\\n  \\t\\t\\tl154.483-97.333c12.68-7.545,10.489-16.449,10.489-16.449S216.471,107.172,203.791,99.628z\\\"/>\\n  \\t</g>\\n  </svg>\";\n  clearInterval(slideInterval);\n}\n\nfunction focusOnLetter() {\n  document.getElementById('addressee-name').focus();\n}\n\ndocument.querySelector('.slide__contact-btn').addEventListener('click', focusOnLetter);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ \"yLpj\")))\n\n//# sourceURL=webpack://%5Bname%5D/./src/scripts/index.js?");

/***/ }),

/***/ "I2ZF":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/bytesToUuid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\nvar byteToHex = [];\nfor (var i = 0; i < 256; ++i) {\n  byteToHex[i] = (i + 0x100).toString(16).substr(1);\n}\n\nfunction bytesToUuid(buf, offset) {\n  var i = offset || 0;\n  var bth = byteToHex;\n  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4\n  return ([bth[buf[i++]], bth[buf[i++]], \n\tbth[buf[i++]], bth[buf[i++]], '-',\n\tbth[buf[i++]], bth[buf[i++]], '-',\n\tbth[buf[i++]], bth[buf[i++]], '-',\n\tbth[buf[i++]], bth[buf[i++]], '-',\n\tbth[buf[i++]], bth[buf[i++]],\n\tbth[buf[i++]], bth[buf[i++]],\n\tbth[buf[i++]], bth[buf[i++]]]).join('');\n}\n\nmodule.exports = bytesToUuid;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/uuid/lib/bytesToUuid.js?");

/***/ }),

/***/ "VxdY":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://%5Bname%5D/./src/styles/index.css?");

/***/ }),

/***/ "hTXs":
/*!************************************!*\
  !*** ./src/scripts/header-menu.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {var menuBtn = document.querySelector('#burger-menu');\nvar menu = document.querySelector('#main-menu');\nvar menuList = document.querySelector('#main-menu-list');\nvar menuActive = false;\nglobal.menuActive = menuActive;\n\nvar toggleMenu = function toggleMenu() {\n  document.querySelector('body').classList.toggle('body-scroll');\n  menu.classList.toggle('header-container--active');\n  menuList.classList.toggle('header-menu--active');\n\n  if (menuActive === false) {\n    menuBtn.innerHTML = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" x=\\\"0px\\\" y=\\\"0px\\\" viewBox=\\\"0 0 80 80\\\" style=\\\"enable-background:new 0 0 80 80;\\\" xml:space=\\\"preserve\\\">\\n            <g>\\n            \\t<polygon points=\\\"40,49.007 15.714,73.293 6.707,64.286 30.993,40 6.707,15.714 15.714,6.707 40,30.993    64.286,6.707 73.293,15.714 49.007,40 73.293,64.286 64.286,73.293  \\\"/>\\n            \\t<path d=\\\"M15.714,7.414l23.578,23.578L40,31.7l0.707-0.707L64.286,7.414l8.3,8.3L49.007,39.293L48.3,40   l0.707,0.707l23.578,23.579l-8.3,8.3L40.707,49.007L40,48.3l-0.707,0.707L15.714,72.586l-8.3-8.3l23.579-23.579L31.7,40   l-0.707-0.707L7.414,15.714L15.714,7.414 M64.286,6L40,30.286L15.714,6L6,15.714L30.286,40L6,64.286L15.714,74L40,49.714L64.286,74   L74,64.286L49.714,40L74,15.714L64.286,6L64.286,6z\\\"/>\\n            </g>\\n          </svg>\";\n    menuActive = true;\n    return;\n  }\n\n  if (menuActive === true) {\n    menuBtn.innerHTML = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 24 24\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" enable-background=\\\"new 0 0 24 24\\\">\\n            <g>\\n              <path d=\\\"M24,3c0-0.6-0.4-1-1-1H1C0.4,2,0,2.4,0,3v2c0,0.6,0.4,1,1,1h22c0.6,0,1-0.4,1-1V3z\\\"/>\\n              <path d=\\\"M24,11c0-0.6-0.4-1-1-1H1c-0.6,0-1,0.4-1,1v2c0,0.6,0.4,1,1,1h22c0.6,0,1-0.4,1-1V11z\\\"/>\\n              <path d=\\\"M24,19c0-0.6-0.4-1-1-1H1c-0.6,0-1,0.4-1,1v2c0,0.6,0.4,1,1,1h22c0.6,0,1-0.4,1-1V19z\\\"/>\\n            </g>\\n          </svg>\";\n    menuActive = false;\n    return;\n  }\n};\n\nmenuBtn.addEventListener('click', toggleMenu);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ \"yLpj\")))\n\n//# sourceURL=webpack://%5Bname%5D/./src/scripts/header-menu.js?");

/***/ }),

/***/ "t6sz":
/*!**************************************!*\
  !*** ./src/scripts/home/comments.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"vuxd\");\n\n\nvar uuidv1 = __webpack_require__(/*! uuid/v1 */ \"xDdU\");\n\n(function () {\n  var commentForm = document.querySelector('[name=\"comment-form\"]');\n  var commentsField = document.querySelector('.comments');\n  var addCommentBtn = document.getElementById('add-comment');\n  var addSubCommentBtn = document.getElementById('add-subcomment');\n  var comments = [];\n  var topCommentsNav = document.querySelector('#top-comments-nav');\n  var bottomCommentsNav = document.querySelector('#bottom-comments-nav');\n  var commentBundleIndex; // Constants below are for creating new comments and replies for it.\n\n  var commentatorName = document.querySelector('[name=\"commentator-name\"]');\n  var commentatorEmail = document.querySelector('[name=\"commentator-email\"]');\n  var commentatorText = document.querySelector('[name=\"comment-text\"]');\n\n  var fetchComments = function fetchComments() {\n    return fetch('https://jsonplaceholder.typicode.com/comments').then(function (response) {\n      return response.json();\n    });\n  };\n\n  var renderComments = function renderComments(commentsList) {\n    return commentsList.forEach(function (item) {\n      var out = \"\\n      <a name=\\\"anchor-\".concat(item.id, \"\\\"></a>\\n      <section class=\\\"user-comment__data\\\">\\n        <img src=\\\"../src/icons/avatar.png\\\" class=\\\"user-comment__avatar\\\">\\n        <section class=\\\"user-comment__name\\\">\").concat(item.name, \" (\").concat(item.email, \")</section>\\n        <section class=\\\"user-comment__date\\\">\").concat(Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"convertTime\"])(item.time), \"</section>\\n      </section>\\n      <p class=\\\"user-comment__text\\\">\\n        \").concat(item.body, \"\\n      </p>\\n      <section class=\\\"wrapper-comment-interactions\\\">\\n        <button class=\\\"reply-comment-btn\\\" type=\\\"button\\\" onclick=\\\"replyThisComment('\").concat(item.name, \"', \").concat(item.id, \")\\\">REPLY</button>\\n        <button class=\\\"comment-replies-btn\\\" id=\\\"replies-\").concat(item.id, \"\\\" onclick=\\\"renderSubComments(\").concat(item.id, \")\\\">\\n          Show replied comments (\").concat(subComments[item.id] !== undefined ? subComments[item.id].length : 0, \")\\n        </button>\\n      </section>\\n      <section id=\\\"comment-replies-\").concat(item.id, \"\\\"></section>\\n  \");\n      var comment = document.createElement('section');\n      comment.setAttribute('class', 'user-comment-wrapper');\n      comment.setAttribute('id', \"comment-\".concat(item.id));\n      comment.innerHTML = out;\n      commentsField.insertBefore(comment, commentsField.firstChild);\n    });\n  }; // ----------------------Button wich activates comment field ---------------------\n\n\n  var commentsRendered = false;\n  var showCommentsBtn = document.querySelector('.show-comments-btn');\n\n  function activateComments() {\n    if (commentsRendered === false) {\n      commentsRendered = true;\n      showCommentsBtn.innerText = 'Hide comments';\n    } else {\n      commentsRendered = false;\n      showCommentsBtn.innerText = 'Show comments';\n    }\n\n    document.querySelector('.comments-field').classList.toggle('comments-field--active');\n    commentBundleIndex = 0;\n    renderCommentBundleBtns();\n    document.querySelector(\"#comments-bottom0\").classList.add('comments-nav__btn--active');\n    document.querySelector(\"#comments-top0\").classList.add('comments-nav__btn--active');\n    return renderComments(comments.slice(comments.length >= 15 ? comments.length - 15 : 0));\n  }\n\n  showCommentsBtn.addEventListener('click', activateComments); // --------------------------------------------------------------------------------\n  // ----------------------Button wich adds a new comment and renders it immediatly------------------------------\n\n  var addCommentButton = function addCommentButton() {\n    if (commentatorName.value === \"\" || commentatorEmail.value === \"\" || commentatorText.value === \"\") {\n      return;\n    }\n\n    if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"validateEmail\"])(commentatorEmail.value) !== true) return;\n    var comment = {\n      name: commentatorName.value,\n      email: commentatorEmail.value,\n      time: Math.floor(Date.now() / 1000),\n      body: commentatorText.value,\n      id: comments.length + Date.now()\n    };\n    comments.push(comment);\n    commentForm.reset();\n    renderCommentBundleBtns();\n    document.querySelector(\"#comments-bottom0\").classList.add('comments-nav__btn--active');\n    document.querySelector(\"#comments-top0\").classList.add('comments-nav__btn--active');\n    renderComments(comments.slice(comments.length >= 15 ? comments.length - 15 : 0));\n  };\n\n  addCommentBtn.addEventListener('click', addCommentButton); // ------------------------------------------------------------------------------------\n\n  fetchComments().then(function (data) {\n    comments = data;\n    global.comments = comments;\n  });\n\n  function renderCommentBundleBtns() {\n    clearCommentBundleBtns();\n    var sortedCommentsQuantity = Math.ceil(comments.length / 15);\n    createBtn(\"comments-nav__btn\", \"comments-nav__prev\", \"<\", topCommentsNav, \"prevCommentBundle(\".concat(commentBundleIndex - 1, \")\"));\n    createBtn(\"comments-nav__btn\", \"comments-nav__prev\", \"<\", bottomCommentsNav, \"prevCommentBundle(\".concat(commentBundleIndex - 1, \")\"));\n\n    for (var i = 0; i < sortedCommentsQuantity; i++) {\n      createBtn(\"comments-nav__btn\", \"comments-top\".concat(i), i + 1, topCommentsNav, \"renderCertainComments(\".concat(i, \")\"));\n      createBtn(\"comments-nav__btn\", \"comments-bottom\".concat(i), i + 1, bottomCommentsNav, \"renderCertainComments(\".concat(i, \")\"));\n    }\n\n    createBtn(\"comments-nav__btn\", \"comments-nav__next\", \">\", topCommentsNav, \"nextCommentBundle(\".concat(commentBundleIndex + 1, \")\"));\n    createBtn(\"comments-nav__btn\", \"comments-nav__next\", \">\", bottomCommentsNav, \"nextCommentBundle(\".concat(commentBundleIndex + 1, \")\"));\n  }\n\n  function renderCertainComments(index) {\n    var end = comments.length - index * 15;\n    var begin = end - 15;\n\n    if (begin < 0) {\n      begin = 0;\n    }\n\n    clearComments();\n\n    if (commentBundleIndex !== undefined) {\n      document.querySelector(\"#comments-bottom\".concat(commentBundleIndex)).classList.remove('comments-nav__btn--active');\n      document.querySelector(\"#comments-top\".concat(commentBundleIndex)).classList.remove('comments-nav__btn--active');\n    }\n\n    commentBundleIndex = index;\n    global.commentBundleIndex = commentBundleIndex;\n    renderCommentBundleBtns();\n    document.querySelector(\"#comments-bottom\".concat(index)).classList.add('comments-nav__btn--active');\n    document.querySelector(\"#comments-top\".concat(index)).classList.add('comments-nav__btn--active');\n    renderComments(comments.slice(begin, end));\n  }\n\n  global.renderCertainComments = renderCertainComments;\n\n  function createBtn(btnClass, btnId, btnName, btnLocation, onClick) {\n    var commentsBundleBtn = document.createElement(\"button\");\n    commentsBundleBtn.setAttribute('class', \"\".concat(btnClass));\n    commentsBundleBtn.setAttribute('id', \"\".concat(btnId));\n\n    if (onClick) {\n      commentsBundleBtn.setAttribute('onclick', \"\".concat(onClick));\n    }\n\n    commentsBundleBtn.innerHTML = btnName;\n    btnLocation.appendChild(commentsBundleBtn);\n  }\n\n  function clearComments() {\n    commentsField.innerHTML = '';\n  }\n\n  function clearCommentBundleBtns() {\n    topCommentsNav.innerHTML = '';\n    bottomCommentsNav.innerHTML = '';\n  }\n\n  function prevCommentBundle(index) {\n    if (index < 0) {\n      index = Math.floor(comments.length / 15);\n    }\n\n    renderCertainComments(index);\n  }\n\n  global.prevCommentBundle = prevCommentBundle;\n\n  function nextCommentBundle(index) {\n    if (index > Math.floor(comments.length / 15)) {\n      index = 0;\n    }\n\n    renderCertainComments(index);\n  }\n\n  global.nextCommentBundle = nextCommentBundle;\n  /*----------------------------------------------------------------------------------------Subcomments-----------------------------------------------------------------------*/\n\n  var subComments = {};\n  global.subComments = subComments;\n\n  function replyThisComment(commentatorName, commentId) {\n    addCommentBtn.classList.remove('comment-form__send-btn--active');\n    addSubCommentBtn.classList.add('comment-form__send-btn--active');\n    document.getElementById(\"comment-input-name\").focus();\n    showCommentsBtn.addEventListener('click', activateComments);\n    addSubCommentBtn.setAttribute('onclick', \"addSubCommentButton('\".concat(commentatorName, \"', \").concat(commentId, \")\"));\n  }\n\n  global.replyThisComment = replyThisComment;\n\n  function addSubCommentButton(name, commentId) {\n    if (commentatorName.value === \"\" || commentatorEmail.value === \"\" || commentatorText.value === \"\") {\n      return;\n    }\n\n    if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"validateEmail\"])(commentatorEmail.value) !== true) return;\n    var subComment = {\n      name: commentatorName.value,\n      email: commentatorEmail.value,\n      time: Math.floor(Date.now() / 1000),\n      body: commentatorText.value,\n      id: Date.now() + commentId,\n      parrentCommentId: commentId,\n      parrentCommentName: name\n    };\n\n    if (subComments[commentId] !== undefined) {\n      subComments[commentId].push(subComment);\n    } else {\n      subComments[commentId] = [subComment];\n    }\n\n    commentForm.reset();\n    renderSubComments(commentId);\n  }\n\n  global.addSubCommentButton = addSubCommentButton;\n\n  function renderSubComments(parrentCommentId) {\n    var parentCommentReplies = document.getElementById(\"comment-replies-\".concat(parrentCommentId));\n    parentCommentReplies.innerHTML = '';\n    var parentCommentRepliesBtn = document.getElementById(\"replies-\".concat(parrentCommentId));\n    parentCommentRepliesBtn.innerText = \"Show replied comments (\".concat(subComments[parrentCommentId].length, \")\");\n    subComments[parrentCommentId].forEach(function (item) {\n      var out = \"\\n        <a name=\\\"anchor-\".concat(item.id, \"\\\"></a>\\n        <section class=\\\"user-comment__data\\\">\\n          <img src=\\\"../src/icons/avatar.png\\\" class=\\\"user-comment__avatar\\\">\\n          <section class=\\\"user-comment__name\\\">\").concat(item.name, \" (\").concat(item.email, \")</section>\\n          <section class=\\\"user-comment__date\\\">\").concat(Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"convertTime\"])(item.time), \"</section>\\n        </section>\\n        <p class=\\\"user-comment__text\\\">\\n          <a class=\\\"commentator-anchor\\\" href=\\\"#anchor-\").concat(item.parrentCommentId, \"\\\">\").concat(item.parrentCommentName, \",</a>\\n          \").concat(item.body, \"\\n        </p>\\n        <section class=\\\"wrapper-comment-interactions\\\">\\n          <button class=\\\"reply-comment-btn\\\" type=\\\"button\\\" onclick=\\\"replyThisComment('\").concat(item.name, \"', \").concat(item.id, \")\\\">REPLY</button>\\n          <button class=\\\"comment-replies-btn\\\" id=\\\"replies-\").concat(item.id, \"\\\" onclick=\\\"renderSubComments(\").concat(item.id, \")\\\">\\n            Show replied comments (\").concat(subComments[item.id] !== undefined ? subComments[item.id].length : 0, \")\\n          </button>\\n        </section>\\n        <section id=\\\"comment-replies-\").concat(item.id, \"\\\"></section>\\n    \");\n      var comment = document.createElement('section');\n      comment.setAttribute('class', 'user-comment-wrapper subcomment');\n      comment.setAttribute('id', \"comment-\".concat(item.id));\n      comment.innerHTML = out;\n      parentCommentReplies.insertBefore(comment, parentCommentReplies.firstChild);\n    });\n    addSubCommentBtn.removeAttribute('onclick');\n    addSubCommentBtn.classList.remove('comment-form__send-btn--active');\n    addCommentBtn.classList.add('comment-form__send-btn--active');\n  }\n\n  global.renderSubComments = renderSubComments;\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ \"yLpj\")))\n\n//# sourceURL=webpack://%5Bname%5D/./src/scripts/home/comments.js?");

/***/ }),

/***/ "vuxd":
/*!************************************!*\
  !*** ./src/scripts/utils/index.js ***!
  \************************************/
/*! exports provided: convertTime, normalizeTime, validateEmail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"convertTime\", function() { return convertTime; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"normalizeTime\", function() { return normalizeTime; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateEmail\", function() { return validateEmail; });\nfunction convertTime(secs) {\n  var d = new Date(secs * 1000);\n  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];\n  var year = d.getFullYear();\n  var month = months[d.getMonth()];\n  var date = d.getDate();\n  var hour = d.getHours();\n  var min = d.getMinutes();\n  var sec = d.getSeconds();\n  return secs !== undefined ? \"\".concat(month, \"/\").concat(date, \"/\").concat(year, \" \").concat(normalizeTime(hour), \":\").concat(normalizeTime(min), \":\").concat(normalizeTime(sec)) : 'Apr/7/1993 13:10:44';\n}\nfunction normalizeTime(time) {\n  if (String(time).length < 2) {\n    return \"0\".concat(time);\n  } else return time;\n}\nfunction validateEmail(email) {\n  var required = /^(([^<>()[\\]\\\\.,;:\\s@\\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\\"]+)*)|(\\\".+\\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\n  return required.test(email);\n}\n\n//# sourceURL=webpack://%5Bname%5D/./src/scripts/utils/index.js?");

/***/ }),

/***/ "xDdU":
/*!*********************************!*\
  !*** ./node_modules/uuid/v1.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var rng = __webpack_require__(/*! ./lib/rng */ \"4fRq\");\nvar bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ \"I2ZF\");\n\n// **`v1()` - Generate time-based UUID**\n//\n// Inspired by https://github.com/LiosK/UUID.js\n// and http://docs.python.org/library/uuid.html\n\nvar _nodeId;\nvar _clockseq;\n\n// Previous uuid creation time\nvar _lastMSecs = 0;\nvar _lastNSecs = 0;\n\n// See https://github.com/broofa/node-uuid for API details\nfunction v1(options, buf, offset) {\n  var i = buf && offset || 0;\n  var b = buf || [];\n\n  options = options || {};\n  var node = options.node || _nodeId;\n  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;\n\n  // node and clockseq need to be initialized to random values if they're not\n  // specified.  We do this lazily to minimize issues related to insufficient\n  // system entropy.  See #189\n  if (node == null || clockseq == null) {\n    var seedBytes = rng();\n    if (node == null) {\n      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)\n      node = _nodeId = [\n        seedBytes[0] | 0x01,\n        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]\n      ];\n    }\n    if (clockseq == null) {\n      // Per 4.2.2, randomize (14 bit) clockseq\n      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;\n    }\n  }\n\n  // UUID timestamps are 100 nano-second units since the Gregorian epoch,\n  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so\n  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'\n  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.\n  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();\n\n  // Per 4.2.1.2, use count of uuid's generated during the current clock\n  // cycle to simulate higher resolution clock\n  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;\n\n  // Time since last uuid creation (in msecs)\n  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;\n\n  // Per 4.2.1.2, Bump clockseq on clock regression\n  if (dt < 0 && options.clockseq === undefined) {\n    clockseq = clockseq + 1 & 0x3fff;\n  }\n\n  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new\n  // time interval\n  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {\n    nsecs = 0;\n  }\n\n  // Per 4.2.1.2 Throw error if too many uuids are requested\n  if (nsecs >= 10000) {\n    throw new Error('uuid.v1(): Can\\'t create more than 10M uuids/sec');\n  }\n\n  _lastMSecs = msecs;\n  _lastNSecs = nsecs;\n  _clockseq = clockseq;\n\n  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch\n  msecs += 12219292800000;\n\n  // `time_low`\n  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;\n  b[i++] = tl >>> 24 & 0xff;\n  b[i++] = tl >>> 16 & 0xff;\n  b[i++] = tl >>> 8 & 0xff;\n  b[i++] = tl & 0xff;\n\n  // `time_mid`\n  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;\n  b[i++] = tmh >>> 8 & 0xff;\n  b[i++] = tmh & 0xff;\n\n  // `time_high_and_version`\n  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version\n  b[i++] = tmh >>> 16 & 0xff;\n\n  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)\n  b[i++] = clockseq >>> 8 | 0x80;\n\n  // `clock_seq_low`\n  b[i++] = clockseq & 0xff;\n\n  // `node`\n  for (var n = 0; n < 6; ++n) {\n    b[i + n] = node[n];\n  }\n\n  return buf ? buf : bytesToUuid(b);\n}\n\nmodule.exports = v1;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/uuid/v1.js?");

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