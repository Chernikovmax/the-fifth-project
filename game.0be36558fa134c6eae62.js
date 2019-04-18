var game =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "NI8a");
/******/ })
/************************************************************************/
/******/ ({

/***/ "NI8a":
/*!***********************************!*\
  !*** ./src/scripts/game/index.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _styles_game_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/game/index.css */ \"P0ow\");\n/* harmony import */ var _styles_game_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_game_index_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _header_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header-menu.js */ \"hTXs\");\n/* harmony import */ var _header_menu_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_header_menu_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _aiGame_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aiGame.js */ \"mp7t\");\n/* harmony import */ var _2playersGame_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./2playersGame.js */ \"URUH\");\n\n\n\n\nvar gameMods = document.querySelector('.game-mods');\nvar currentGame;\nglobal.currentGame = currentGame;\ngameMods.addEventListener('click', newGame);\n\nfunction newGame(event) {\n  if (event.target.id === 'ai-mod') {\n    currentGame = new _aiGame_js__WEBPACK_IMPORTED_MODULE_2__[\"AIGameMod\"]();\n  } else if (event.target.id === 'two-players-mod') {\n    currentGame = new _2playersGame_js__WEBPACK_IMPORTED_MODULE_3__[\"TwoPlayersGame\"]();\n  }\n\n  global.currentGame = currentGame;\n  return;\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ \"yLpj\")))\n\n//# sourceURL=webpack://%5Bname%5D/./src/scripts/game/index.js?");

/***/ }),

/***/ "P0ow":
/*!***********************************!*\
  !*** ./src/styles/game/index.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://%5Bname%5D/./src/styles/game/index.css?");

/***/ }),

/***/ "URUH":
/*!******************************************!*\
  !*** ./src/scripts/game/2playersGame.js ***!
  \******************************************/
/*! exports provided: TwoPlayersGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TwoPlayersGame\", function() { return TwoPlayersGame; });\n/* harmony import */ var _gameBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBase.js */ \"jAG3\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\nvar TwoPlayersGame =\n/*#__PURE__*/\nfunction (_GameBase) {\n  _inherits(TwoPlayersGame, _GameBase);\n\n  function TwoPlayersGame() {\n    var _this;\n\n    _classCallCheck(this, TwoPlayersGame);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(TwoPlayersGame).call(this));\n\n    _this.start();\n\n    _this._addListeners();\n\n    _this.gameListener = true;\n    _this.gameMod;\n    return _this;\n  }\n\n  _createClass(TwoPlayersGame, [{\n    key: \"game_3x3_2players\",\n    value: function game_3x3_2players(event) {\n      if (event.target.className !== 'game-field__cell' && event.target.innerHTML !== \"\") {\n        return;\n      }\n\n      var clickedCellIndex = parseInt(event.target.getAttribute('data-value'), 10); // this.movePlayer.bind(this);\n\n      this._playersMove(clickedCellIndex);\n\n      this._isWinner(this.board, this.movingPlayer);\n\n      this.changePlayer.bind(this);\n      this.changePlayer();\n    }\n  }, {\n    key: \"_isWinner\",\n    value: function _isWinner(board, player) {\n      if (!this.didFinished(board, player)) {\n        return;\n      }\n\n      while (this.winningCombinations.length > 0) {\n        this.cellsOnBoard[this.winningCombinations.pop()].classList.add('victory-cell');\n      }\n\n      this.renderingArea.removeEventListener('click', this.gameMod);\n      this.gameListener = false;\n      this.gameMessage.innerHTML = \"GAME OVER: \".concat(this.movingPlayer === _gameBase_js__WEBPACK_IMPORTED_MODULE_0__[\"FIRST_PLAYER\"] ? 'FIRST PLAYER WIN!' : 'SECOND PLAYER WIN!');\n    }\n  }, {\n    key: \"_playersMove\",\n    value: function _playersMove(cellIndex) {\n      this.movePlayer(cellIndex);\n      return this.gameMessage.innerHTML = \"\".concat(this.movingPlayer === _gameBase_js__WEBPACK_IMPORTED_MODULE_0__[\"FIRST_PLAYER\"] ? _gameBase_js__WEBPACK_IMPORTED_MODULE_0__[\"CIRCLE_ICON\"] : _gameBase_js__WEBPACK_IMPORTED_MODULE_0__[\"CROSS_ICON\"], \" PLAYER'S MOVE\");\n    }\n  }, {\n    key: \"_addListeners\",\n    value: function _addListeners() {\n      var _this2 = this;\n\n      this.gameMod = function () {\n        return _this2.game_3x3_2players(event);\n      };\n\n      this.renderingArea.addEventListener('click', this.gameMod);\n      this.clearGameBtn.addEventListener('click', function () {\n        _this2.stop();\n\n        if (!_this2.gameListener) {\n          _this2.renderingArea.addEventListener('click', _this2.gameMod);\n\n          _this2.gameListener = true;\n        }\n      });\n      this.gameMods.addEventListener('mousedown', this._deleteCurrentInstance.bind(this), {\n        once: true\n      });\n    }\n  }, {\n    key: \"_deleteCurrentInstance\",\n    value: function _deleteCurrentInstance() {\n      this.stop();\n      this.renderingArea.removeEventListener('click', this.currentGameMod);\n    }\n  }]);\n\n  return TwoPlayersGame;\n}(_gameBase_js__WEBPACK_IMPORTED_MODULE_0__[\"GameBase\"]);\n\n//# sourceURL=webpack://%5Bname%5D/./src/scripts/game/2playersGame.js?");

/***/ }),

/***/ "hTXs":
/*!************************************!*\
  !*** ./src/scripts/header-menu.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {var menuBtn = document.querySelector('#burger-menu');\nvar menu = document.querySelector('#main-menu');\nvar menuList = document.querySelector('#main-menu-list');\nvar menuActive = false;\nglobal.menuActive = menuActive;\n\nvar toggleMenu = function toggleMenu() {\n  document.querySelector('body').classList.toggle('body-scroll');\n  menu.classList.toggle('header-container--active');\n  menuList.classList.toggle('header-menu--active');\n\n  if (menuActive === false) {\n    menuBtn.innerHTML = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" x=\\\"0px\\\" y=\\\"0px\\\" viewBox=\\\"0 0 80 80\\\" style=\\\"enable-background:new 0 0 80 80;\\\" xml:space=\\\"preserve\\\">\\n            <g>\\n            \\t<polygon points=\\\"40,49.007 15.714,73.293 6.707,64.286 30.993,40 6.707,15.714 15.714,6.707 40,30.993    64.286,6.707 73.293,15.714 49.007,40 73.293,64.286 64.286,73.293  \\\"/>\\n            \\t<path d=\\\"M15.714,7.414l23.578,23.578L40,31.7l0.707-0.707L64.286,7.414l8.3,8.3L49.007,39.293L48.3,40   l0.707,0.707l23.578,23.579l-8.3,8.3L40.707,49.007L40,48.3l-0.707,0.707L15.714,72.586l-8.3-8.3l23.579-23.579L31.7,40   l-0.707-0.707L7.414,15.714L15.714,7.414 M64.286,6L40,30.286L15.714,6L6,15.714L30.286,40L6,64.286L15.714,74L40,49.714L64.286,74   L74,64.286L49.714,40L74,15.714L64.286,6L64.286,6z\\\"/>\\n            </g>\\n          </svg>\";\n    menuActive = true;\n    return;\n  }\n\n  if (menuActive === true) {\n    menuBtn.innerHTML = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 24 24\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" enable-background=\\\"new 0 0 24 24\\\">\\n            <g>\\n              <path d=\\\"M24,3c0-0.6-0.4-1-1-1H1C0.4,2,0,2.4,0,3v2c0,0.6,0.4,1,1,1h22c0.6,0,1-0.4,1-1V3z\\\"/>\\n              <path d=\\\"M24,11c0-0.6-0.4-1-1-1H1c-0.6,0-1,0.4-1,1v2c0,0.6,0.4,1,1,1h22c0.6,0,1-0.4,1-1V11z\\\"/>\\n              <path d=\\\"M24,19c0-0.6-0.4-1-1-1H1c-0.6,0-1,0.4-1,1v2c0,0.6,0.4,1,1,1h22c0.6,0,1-0.4,1-1V19z\\\"/>\\n            </g>\\n          </svg>\";\n    menuActive = false;\n    return;\n  }\n};\n\nmenuBtn.addEventListener('click', toggleMenu);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ \"yLpj\")))\n\n//# sourceURL=webpack://%5Bname%5D/./src/scripts/header-menu.js?");

/***/ }),

/***/ "jAG3":
/*!**************************************!*\
  !*** ./src/scripts/game/gameBase.js ***!
  \**************************************/
/*! exports provided: FIRST_PLAYER, SECOND_PLAYER, CROSS_ICON, CIRCLE_ICON, GameBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FIRST_PLAYER\", function() { return FIRST_PLAYER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SECOND_PLAYER\", function() { return SECOND_PLAYER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CROSS_ICON\", function() { return CROSS_ICON; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CIRCLE_ICON\", function() { return CIRCLE_ICON; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GameBase\", function() { return GameBase; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar DEFAULT_BOARD = [0, 1, 2, 3, 4, 5, 6, 7, 8];\nvar FIRST_PLAYER = 'cross';\nvar SECOND_PLAYER = 'circle';\nvar CROSS_ICON = \"<svg class=\\\"symbol\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" x=\\\"0px\\\" y=\\\"0px\\\" viewBox=\\\"0 0 80 80\\\">\\n            <g>\\n              <polygon\\n                fill=\\\"#ff3f40\\\"\\n                points=\\\"40,49.007 15.714,73.293 6.707,64.286 30.993,40 6.707,15.714 15.714,6.707 40,30.993    64.286,6.707 73.293,15.714 49.007,40 73.293,64.286 64.286,73.293  \\\"\\n              />\\n            </g>\\n</svg>\";\nvar CIRCLE_ICON = \"<svg class=\\\"symbol\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" x=\\\"0px\\\" y=\\\"0px\\\"\\n     viewBox=\\\"0 0 438.533 438.533\\\" style=\\\"enable-background:new 0 0 438.533 438.533;\\\" xml:space=\\\"preserve\\\">\\n  <g fill=\\\"#0080ff\\\">\\n    <path d=\\\"M409.133,109.203c-19.608-33.592-46.205-60.189-79.798-79.796C295.736,9.801,259.058,0,219.273,0\\n      c-39.781,0-76.47,9.801-110.063,29.407c-33.595,19.604-60.192,46.201-79.8,79.796C9.801,142.8,0,179.489,0,219.267\\n      c0,39.78,9.804,76.463,29.407,110.062c19.607,33.592,46.204,60.189,79.799,79.798c33.597,19.605,70.283,29.407,110.063,29.407\\n      s76.47-9.802,110.065-29.407c33.593-19.602,60.189-46.206,79.795-79.798c19.603-33.596,29.403-70.284,29.403-110.062\\n      C438.533,179.485,428.732,142.795,409.133,109.203z M353.742,297.208c-13.894,23.791-32.736,42.633-56.527,56.534\\n      c-23.791,13.894-49.771,20.834-77.945,20.834c-28.167,0-54.149-6.94-77.943-20.834c-23.791-13.901-42.633-32.743-56.527-56.534\\n      c-13.897-23.791-20.843-49.772-20.843-77.941c0-28.171,6.949-54.152,20.843-77.943c13.891-23.791,32.738-42.637,56.527-56.53\\n      c23.791-13.895,49.772-20.84,77.943-20.84c28.173,0,54.154,6.945,77.945,20.84c23.791,13.894,42.634,32.739,56.527,56.53\\n      c13.895,23.791,20.838,49.772,20.838,77.943C374.58,247.436,367.637,273.417,353.742,297.208z\\\"/>\\n  </g>\\n</svg>\";\nvar GameBase =\n/*#__PURE__*/\nfunction () {\n  function GameBase() {\n    _classCallCheck(this, GameBase);\n\n    this.board = [].concat(DEFAULT_BOARD);\n    this.movingPlayer = FIRST_PLAYER;\n    this.winningCombinations = [];\n  }\n\n  _createClass(GameBase, [{\n    key: \"renderBoard\",\n    value: function renderBoard(selector) {\n      var gameField = document.querySelector(selector);\n\n      for (var i = 0; i < this.board.length; i++) {\n        var cell = document.createElement('section');\n        cell.setAttribute('data-value', \"\".concat(i));\n        cell.className = 'game-field__cell';\n        gameField.appendChild(cell);\n      }\n    }\n  }, {\n    key: \"movePlayer\",\n    value: function movePlayer(cellNumber) {\n      var _this = this;\n\n      var cell = document.querySelector(\"[data-value=\\\"\".concat(cellNumber, \"\\\"]\"));\n      cell.innerHTML = this.movingPlayer === FIRST_PLAYER ? CROSS_ICON : CIRCLE_ICON;\n      this.board[cellNumber] = this.movingPlayer;\n\n      var emptyCellsOnBoard = function emptyCellsOnBoard(board) {\n        return _this.getEmptyCells(board);\n      };\n\n      if (emptyCellsOnBoard(this.board).length === 0) {\n        return this.gameMessage.innerHTML = 'GAME OVER! GAMEBOARD IS FILLED OUT!';\n      } // this.gameMessage.innerHTML =  `${(this.movingPlayer === FIRST_PLAYER)? CIRCLE_ICON : CROSS_ICON} PLAYER'S MOVE`;\n\n\n      return;\n    }\n  }, {\n    key: \"getEmptyCells\",\n    value: function getEmptyCells(board) {\n      return board.filter(function (cell) {\n        return cell !== FIRST_PLAYER && cell !== SECOND_PLAYER;\n      });\n    }\n  }, {\n    key: \"changePlayer\",\n    value: function changePlayer() {\n      if (this.movingPlayer === FIRST_PLAYER) {\n        return this.movingPlayer = SECOND_PLAYER;\n      } else {\n        return this.movingPlayer = FIRST_PLAYER;\n      }\n    }\n  }, {\n    key: \"didFinished\",\n    value: function didFinished(board, player) {\n      switch (true) {\n        case board[0] === player && board[1] === player && board[2] === player:\n          this.winningCombinations.push(0, 1, 2);\n          return true;\n\n        case board[3] === player && board[4] === player && board[5] === player:\n          this.winningCombinations.push(3, 4, 5);\n          return true;\n\n        case board[6] === player && board[7] === player && board[8] === player:\n          this.winningCombinations.push(6, 7, 8);\n          return true;\n\n        case board[0] === player && board[3] === player && board[6] === player:\n          this.winningCombinations.push(0, 3, 6);\n          return true;\n\n        case board[1] === player && board[4] === player && board[7] === player:\n          this.winningCombinations.push(1, 4, 7);\n          return true;\n\n        case board[2] === player && board[5] === player && board[8] === player:\n          this.winningCombinations.push(2, 5, 8);\n          return true;\n\n        case board[0] === player && board[4] === player && board[8] === player:\n          this.winningCombinations.push(0, 4, 8);\n          return true;\n\n        case board[2] === player && board[4] === player && board[6] === player:\n          this.winningCombinations.push(2, 4, 6);\n          return true;\n      }\n\n      return false;\n    }\n  }, {\n    key: \"start\",\n    value: function start() {\n      this.gameMods = document.querySelector('.game-mods');\n      this.renderingArea = document.querySelector('.game-field');\n      this.gameMessage = document.querySelector('#event-message');\n      this.clearGameBtn = document.querySelector('.clear-field');\n      this.renderingArea.innerHTML = '';\n      this.gameMessage.classList.add('gaming-message--active');\n      this.clearGameBtn.classList.add('clear-field--active');\n\n      for (var i = 0; i < this.board.length; i++) {\n        var cell = document.createElement('section');\n        cell.setAttribute('data-value', \"\".concat(i));\n        cell.className = 'game-field__cell';\n        this.renderingArea.appendChild(cell);\n      }\n\n      this.cellsOnBoard = document.querySelectorAll('.game-field__cell');\n      return;\n    }\n  }, {\n    key: \"stop\",\n    value: function stop() {\n      for (var i = 0; i < this.cellsOnBoard.length; i++) {\n        this.cellsOnBoard[i].classList.remove('victory-cell');\n        this.cellsOnBoard[i].innerHTML = '';\n      }\n\n      this.board = [].concat(DEFAULT_BOARD);\n      this.movingPlayer = FIRST_PLAYER;\n      this.winningCombinations = [];\n      this.gameMessage.innerHTML = \"\".concat(CROSS_ICON, \" PLAYER'S MOVE\");\n      return;\n    }\n  }]);\n\n  return GameBase;\n}();\n\n//# sourceURL=webpack://%5Bname%5D/./src/scripts/game/gameBase.js?");

/***/ }),

/***/ "mp7t":
/*!************************************!*\
  !*** ./src/scripts/game/aiGame.js ***!
  \************************************/
/*! exports provided: AIGameMod */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AIGameMod\", function() { return AIGameMod; });\n/* harmony import */ var _gameBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBase.js */ \"jAG3\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\nvar AIGameMod =\n/*#__PURE__*/\nfunction (_GameBase) {\n  _inherits(AIGameMod, _GameBase);\n\n  function AIGameMod() {\n    var _this;\n\n    _classCallCheck(this, AIGameMod);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(AIGameMod).call(this));\n\n    _this.start();\n\n    _this._addListeners();\n\n    _this.gameListener = true;\n    _this.currentGameMod;\n    return _this;\n  }\n\n  _createClass(AIGameMod, [{\n    key: \"game_3x3_withAi\",\n    value: function game_3x3_withAi(event) {\n      var _this2 = this;\n\n      if (event.target.className !== 'game-field__cell' && event.target.innerHTML !== \"\") {\n        return;\n      }\n\n      var clickedCellIndex = parseInt(event.target.getAttribute('data-value'), 10);\n\n      var moveP = function moveP(i) {\n        return _this2.movePlayer(i);\n      };\n\n      moveP(clickedCellIndex);\n\n      this._isWinner(this.board, _gameBase_js__WEBPACK_IMPORTED_MODULE_0__[\"FIRST_PLAYER\"]);\n\n      this.changePlayer.bind(this);\n      this.changePlayer();\n      var aiCell = this.minimax(this.board, _gameBase_js__WEBPACK_IMPORTED_MODULE_0__[\"SECOND_PLAYER\"]).index;\n      moveP(aiCell);\n\n      this._isWinner(this.board, _gameBase_js__WEBPACK_IMPORTED_MODULE_0__[\"SECOND_PLAYER\"]);\n\n      this.changePlayer();\n    }\n  }, {\n    key: \"minimax\",\n    value: function minimax(newBoard, player) {\n      var availCells = this.getEmptyCells(newBoard);\n\n      if (this.didFinished(newBoard, _gameBase_js__WEBPACK_IMPORTED_MODULE_0__[\"FIRST_PLAYER\"], 'forecast')) {\n        return {\n          score: -10\n        };\n      } else if (this.didFinished(newBoard, _gameBase_js__WEBPACK_IMPORTED_MODULE_0__[\"SECOND_PLAYER\"], 'forecast')) {\n        return {\n          score: 10\n        };\n      } else if (availCells.length === 0) {\n        return {\n          score: 0\n        };\n      }\n\n      var moves = [];\n\n      for (var i = 0; i < availCells.length; i++) {\n        var move = {};\n        move.index = newBoard[availCells[i]];\n        newBoard[availCells[i]] = player;\n\n        if (player === _gameBase_js__WEBPACK_IMPORTED_MODULE_0__[\"SECOND_PLAYER\"]) {\n          var result = this.minimax(newBoard, _gameBase_js__WEBPACK_IMPORTED_MODULE_0__[\"FIRST_PLAYER\"]);\n          move.score = result.score;\n        } else {\n          var _result = this.minimax(newBoard, _gameBase_js__WEBPACK_IMPORTED_MODULE_0__[\"SECOND_PLAYER\"]);\n\n          move.score = _result.score;\n        }\n\n        newBoard[availCells[i]] = move.index;\n        moves.push(move);\n      }\n\n      var bestMove;\n\n      if (player === _gameBase_js__WEBPACK_IMPORTED_MODULE_0__[\"SECOND_PLAYER\"]) {\n        var bestScore = -10000;\n\n        for (var _i = 0; _i < moves.length; _i++) {\n          if (moves[_i].score > bestScore) {\n            bestScore = moves[_i].score;\n            bestMove = _i;\n          }\n        }\n      } else {\n        var _bestScore = 10000;\n\n        for (var _i2 = 0; _i2 < moves.length; _i2++) {\n          if (moves[_i2].score < _bestScore) {\n            _bestScore = moves[_i2].score;\n            bestMove = _i2;\n          }\n        }\n      }\n\n      return moves[bestMove];\n    }\n  }, {\n    key: \"_isWinner\",\n    value: function _isWinner(board, player) {\n      if (!this.didFinished(board, player)) {\n        return;\n      }\n\n      for (var i = 0; i < 3; i++) {\n        this.cellsOnBoard[this.winningCombinations.pop()].classList.add('victory-cell');\n      }\n\n      this.renderingArea.removeEventListener('click', this.currentGameMod);\n      this.gameListener = false;\n      this.gameMessage.innerHTML = \"GAME OVER: \".concat(this.movingPlayer === _gameBase_js__WEBPACK_IMPORTED_MODULE_0__[\"FIRST_PLAYER\"] ? 'PLAYER WIN!' : 'AI PLAYER WIN!');\n    }\n  }, {\n    key: \"_addListeners\",\n    value: function _addListeners() {\n      var _this3 = this;\n\n      this.currentGameMod = function () {\n        return _this3.game_3x3_withAi(event);\n      };\n\n      this.renderingArea.addEventListener('click', this.currentGameMod);\n      this.clearGameBtn.addEventListener('click', function () {\n        _this3.stop();\n\n        if (!_this3.gameListener) {\n          _this3.renderingArea.addEventListener('click', _this3.currentGameMod);\n\n          _this3.gameListener = true;\n        }\n      });\n      this.gameMods.addEventListener('mousedown', this._deleteCurrentInstance.bind(this), {\n        once: true\n      });\n    }\n  }, {\n    key: \"_deleteCurrentInstance\",\n    value: function _deleteCurrentInstance() {\n      this.stop();\n      this.renderingArea.removeEventListener('click', this.currentGameMod);\n    }\n  }]);\n\n  return AIGameMod;\n}(_gameBase_js__WEBPACK_IMPORTED_MODULE_0__[\"GameBase\"]);\n\n//# sourceURL=webpack://%5Bname%5D/./src/scripts/game/aiGame.js?");

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