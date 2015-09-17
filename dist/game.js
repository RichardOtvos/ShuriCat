/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Game = __webpack_require__(1);
	
	new _Game.NinjaRain();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _get = __webpack_require__(2)["default"];
	
	var _inherits = __webpack_require__(16)["default"];
	
	var _classCallCheck = __webpack_require__(27)["default"];
	
	Object.defineProperty(exports, "__esModule", {
	        value: true
	});
	
	var _statesLoading = __webpack_require__(28);
	
	var _statesMainMenu = __webpack_require__(32);
	
	var NinjaRain = (function (_Phaser$Game) {
	        _inherits(NinjaRain, _Phaser$Game);
	
	        function NinjaRain() {
	                _classCallCheck(this, NinjaRain);
	
	                _get(Object.getPrototypeOf(NinjaRain.prototype), "constructor", this).call(this, 1024, 600, Phaser.AUTO, 'game-content');
	
	                var startingStateName = "Loading"; //get this from config? (modules?)
	
	                //add states here
	                this.state.add("Loading", _statesLoading.Loading);
	                this.state.add("MainMenu", _statesMainMenu.MainMenu);
	
	                //starts the game with the starting state
	                this.state.start(startingStateName);
	
	                //enable physics
	                this.physics.startSystem(Phaser.Physics.ARCADE);
	        }
	
	        return NinjaRain;
	})(Phaser.Game);
	
	exports.NinjaRain = NinjaRain;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$getOwnPropertyDescriptor = __webpack_require__(3)["default"];
	
	exports["default"] = function get(_x, _x2, _x3) {
	  var _again = true;
	
	  _function: while (_again) {
	    var object = _x,
	        property = _x2,
	        receiver = _x3;
	    desc = parent = getter = undefined;
	    _again = false;
	    if (object === null) object = Function.prototype;
	
	    var desc = _Object$getOwnPropertyDescriptor(object, property);
	
	    if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);
	
	      if (parent === null) {
	        return undefined;
	      } else {
	        _x = parent;
	        _x2 = property;
	        _x3 = receiver;
	        _again = true;
	        continue _function;
	      }
	    } else if ("value" in desc) {
	      return desc.value;
	    } else {
	      var getter = desc.get;
	
	      if (getter === undefined) {
	        return undefined;
	      }
	
	      return getter.call(receiver);
	    }
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(4), __esModule: true };

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(5);
	__webpack_require__(6);
	module.exports = function getOwnPropertyDescriptor(it, key){
	  return $.getDesc(it, key);
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = __webpack_require__(7);
	
	__webpack_require__(11)('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(8)
	  , defined = __webpack_require__(10);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// indexed object, fallback for non-array-like ES3 strings
	var cof = __webpack_require__(9);
	module.exports = 0 in Object('z') ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	module.exports = function(KEY, exec){
	  var $def = __webpack_require__(12)
	    , fn   = (__webpack_require__(14).Object || {})[KEY] || Object[KEY]
	    , exp  = {};
	  exp[KEY] = exec(fn);
	  $def($def.S + $def.F * __webpack_require__(15)(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(13)
	  , core      = __webpack_require__(14)
	  , PROTOTYPE = 'prototype';
	var ctx = function(fn, that){
	  return function(){
	    return fn.apply(that, arguments);
	  };
	};
	var $def = function(type, name, source){
	  var key, own, out, exp
	    , isGlobal = type & $def.G
	    , isProto  = type & $def.P
	    , target   = isGlobal ? global : type & $def.S
	        ? global[name] : (global[name] || {})[PROTOTYPE]
	    , exports  = isGlobal ? core : core[name] || (core[name] = {});
	  if(isGlobal)source = name;
	  for(key in source){
	    // contains in native
	    own = !(type & $def.F) && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    if(isGlobal && typeof target[key] != 'function')exp = source[key];
	    // bind timers to global for call from export context
	    else if(type & $def.B && own)exp = ctx(out, global);
	    // wrap global constructors for prevent change them in library
	    else if(type & $def.W && target[key] == out)!function(C){
	      exp = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      exp[PROTOTYPE] = C[PROTOTYPE];
	    }(out);
	    else exp = isProto && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export
	    exports[key] = exp;
	    if(isProto)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$def.F = 1;  // forced
	$def.G = 2;  // global
	$def.S = 4;  // static
	$def.P = 8;  // proto
	$def.B = 16; // bind
	$def.W = 32; // wrap
	module.exports = $def;

/***/ },
/* 13 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var UNDEFINED = 'undefined';
	var global = module.exports = typeof window != UNDEFINED && window.Math == Math
	  ? window : typeof self != UNDEFINED && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 14 */
/***/ function(module, exports) {

	var core = module.exports = {};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$create = __webpack_require__(17)["default"];
	
	var _Object$setPrototypeOf = __webpack_require__(19)["default"];
	
	exports["default"] = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }
	
	  subClass.prototype = _Object$create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};
	
	exports.__esModule = true;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(18), __esModule: true };

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(5);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(20), __esModule: true };

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(21);
	module.exports = __webpack_require__(14).Object.setPrototypeOf;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $def = __webpack_require__(12);
	$def($def.S, 'Object', {setPrototypeOf: __webpack_require__(22).set});

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(5).getDesc
	  , isObject = __webpack_require__(23)
	  , anObject = __webpack_require__(24);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} // eslint-disable-line
	    ? function(buggy, set){
	        try {
	          set = __webpack_require__(25)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	          set({}, []);
	        } catch(e){ buggy = true; }
	        return function setPrototypeOf(O, proto){
	          check(O, proto);
	          if(buggy)O.__proto__ = proto;
	          else set(O, proto);
	          return O;
	        };
	      }()
	    : undefined),
	  check: check
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	// http://jsperf.com/core-js-isobject
	module.exports = function(it){
	  return it !== null && (typeof it == 'object' || typeof it == 'function');
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(23);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(26);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  } return function(/* ...args */){
	      return fn.apply(that, arguments);
	    };
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _get = __webpack_require__(2)["default"];
	
	var _inherits = __webpack_require__(16)["default"];
	
	var _createClass = __webpack_require__(29)["default"];
	
	var _classCallCheck = __webpack_require__(27)["default"];
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var Loading = (function (_Phaser$State) {
	    _inherits(Loading, _Phaser$State);
	
	    function Loading() {
	        _classCallCheck(this, Loading);
	
	        _get(Object.getPrototypeOf(Loading.prototype), "constructor", this).apply(this, arguments);
	    }
	
	    _createClass(Loading, [{
	        key: "preload",
	        value: function preload() {
	            var loadingText = "Loading...";
	            var loadingTextStyle = {
	                font: "65px Arial",
	                fontWeight: "bold",
	                fill: "#EFEFEF",
	                align: "center"
	            };
	
	            this.game.stage.backgroundColor = "#E36633";
	            this.loadingText = this.make.text(this.world.centerX, this.world.centerY, loadingText, loadingTextStyle);
	            this.loadingText.anchor.set(0.5); //we want our text centered
	
	            //Load images
	            this.game.load.image("naruto-logo", "assets/narutoLogo.png");
	            this.game.load.image("ninja", "assets/ninja.png");
	            this.game.load.image("sky", "assets/sky.jpg");
	            this.game.load.image("ground", "assets/ground.jpg");
	        }
	    }, {
	        key: "create",
	        value: function create() {
	            //enable physics
	            this.game.physics.startSystem(Phaser.Physics.ARCADE);
	            this.game.physics.arcade.gravity.y = 900;
	
	            //add loaded stuff to game
	            this.world.add(this.loadingText);
	            this.time.events.add(Phaser.Timer.SECOND * 1, function () {
	                this.state.start("MainMenu");
	            }, this);
	        }
	    }]);
	
	    return Loading;
	})(Phaser.State);
	
	exports.Loading = Loading;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$defineProperty = __webpack_require__(30)["default"];
	
	exports["default"] = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	
	      _Object$defineProperty(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	})();
	
	exports.__esModule = true;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(31), __esModule: true };

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(5);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _get = __webpack_require__(2)["default"];
	
	var _inherits = __webpack_require__(16)["default"];
	
	var _createClass = __webpack_require__(29)["default"];
	
	var _classCallCheck = __webpack_require__(27)["default"];
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _objectsNinja = __webpack_require__(33);
	
	var _objectsGround = __webpack_require__(34);
	
	var MainMenu = (function (_Phaser$State) {
	    _inherits(MainMenu, _Phaser$State);
	
	    function MainMenu() {
	        _classCallCheck(this, MainMenu);
	
	        _get(Object.getPrototypeOf(MainMenu.prototype), "constructor", this).apply(this, arguments);
	    }
	
	    _createClass(MainMenu, [{
	        key: "preload",
	        value: function preload() {
	            var menuText = "Ninja Rain";
	            var menuTextStyle = {
	                font: "65px Arial",
	                fontWeight: "bold",
	                fill: "#EFEFEF",
	                align: "center"
	            };
	
	            this.menuText = this.make.text(this.world.centerX, 50, menuText, menuTextStyle);
	            this.menuText.anchor.set(0.5, 0); //we want our text centered
	            this.ninja = new _objectsNinja.Ninja(this.game, 10, 10, 'ninja');
	            this.ground = new _objectsGround.Ground(this.game, 0, this.game.world.height - 30, 'ground');
	        }
	    }, {
	        key: "create",
	        value: function create() {
	            //add background -later refactor to somewhere else
	            this.add.image(0, 0, 'sky');
	
	            //add loaded stuff to game
	            this.world.add(this.menuText);
	            this.world.add(this.ninja);
	            this.world.add(this.ground);
	        }
	    }, {
	        key: "update",
	        value: function update() {
	            this.game.physics.arcade.collide(this.ninja, this.ground);
	        }
	    }]);
	
	    return MainMenu;
	})(Phaser.State);
	
	exports.MainMenu = MainMenu;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _get = __webpack_require__(2)["default"];
	
	var _inherits = __webpack_require__(16)["default"];
	
	var _createClass = __webpack_require__(29)["default"];
	
	var _classCallCheck = __webpack_require__(27)["default"];
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var Ninja = (function (_Phaser$Sprite) {
	    _inherits(Ninja, _Phaser$Sprite);
	
	    function Ninja(game, x, y, key, frame) {
	        _classCallCheck(this, Ninja);
	
	        _get(Object.getPrototypeOf(Ninja.prototype), "constructor", this).call(this, game, x, y, key, frame);
	
	        //add properties
	        this.data = {
	            speedX: 500,
	            speedY: 650
	            //bounceY: 0.4
	        };
	
	        //init stuff
	        this.initPhysics();
	        this.initControls();
	
	        //bouncy ninja is bouncy
	        //this.body.bounce.y = this.data.bounceY;
	    }
	
	    _createClass(Ninja, [{
	        key: "initPhysics",
	        value: function initPhysics() {
	            this.game.physics.arcade.enableBody(this);
	            this.body.collideWorldBounds = true;
	        }
	    }, {
	        key: "initControls",
	        value: function initControls() {
	            var cursors = this.game.input.keyboard.createCursorKeys();
	
	            this.data.controls = {
	                cursors: cursors
	            };
	        }
	
	        //this method is called by Phaser
	    }, {
	        key: "update",
	        value: function update() {
	            this.moveNinja();
	        }
	    }, {
	        key: "moveNinja",
	        value: function moveNinja() {
	            this.body.velocity.x = 0;
	            if (this.body.velocity.y > 0) {}
	
	            if (this.data.controls.cursors.right.isDown) {
	                this.body.velocity.x = this.data.speedX;
	            } else if (this.data.controls.cursors.left.isDown) {
	                this.body.velocity.x = -this.data.speedX;
	            }
	
	            if (this.data.controls.cursors.up.isDown && this.body.touching.down) {
	                this.body.velocity.y = -this.data.speedY;
	            }
	        }
	    }]);
	
	    return Ninja;
	})(Phaser.Sprite);
	
	exports.Ninja = Ninja;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _get = __webpack_require__(2)["default"];
	
	var _inherits = __webpack_require__(16)["default"];
	
	var _createClass = __webpack_require__(29)["default"];
	
	var _classCallCheck = __webpack_require__(27)["default"];
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var Ground = (function (_Phaser$Sprite) {
	    _inherits(Ground, _Phaser$Sprite);
	
	    function Ground(game, x, y, key) {
	        _classCallCheck(this, Ground);
	
	        _get(Object.getPrototypeOf(Ground.prototype), "constructor", this).call(this, game, x, y, key);
	
	        this.initPhysics();
	    }
	
	    _createClass(Ground, [{
	        key: "initPhysics",
	        value: function initPhysics() {
	            this.game.physics.arcade.enableBody(this);
	            this.body.collideWorldBounds = true;
	            this.body.immovable = true;
	        }
	    }]);
	
	    return Ground;
	})(Phaser.Sprite);
	
	exports.Ground = Ground;

/***/ }
/******/ ]);
//# sourceMappingURL=game.js.map