(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
        value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _statesLoading = require("./states/Loading");

var _statesMainMenu = require("./states/MainMenu");

var NinjaRain = (function (_Phaser$Game) {
        _inherits(NinjaRain, _Phaser$Game);

        function NinjaRain() {
                _classCallCheck(this, NinjaRain);

                _get(Object.getPrototypeOf(NinjaRain.prototype), "constructor", this).call(this, 800, 600, Phaser.AUTO, 'game-content');

                var startingStateName = "Loading"; //get this from config? (modules?)

                //add states here
                this.state.add("Loading", _statesLoading.Loading);
                this.state.add("MainMenu", _statesMainMenu.MainMenu);

                //starts the game with the starting state
                this.state.start(startingStateName);
        }

        return NinjaRain;
})(Phaser.Game);

exports.NinjaRain = NinjaRain;

},{"./states/Loading":3,"./states/MainMenu":4}],2:[function(require,module,exports){
"use strict";

var _Game = require("./Game");

new _Game.NinjaRain();

},{"./Game":1}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
        }
    }, {
        key: "create",
        value: function create() {
            //add loaded stuff to game
            this.world.add(this.loadingText);
            this.time.events.add(Phaser.Timer.SECOND * 2, function () {
                this.state.start("MainMenu");
            }, this);
        }
    }]);

    return Loading;
})(Phaser.State);

exports.Loading = Loading;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MainMenu = (function (_Phaser$State) {
    _inherits(MainMenu, _Phaser$State);

    function MainMenu() {
        _classCallCheck(this, MainMenu);

        _get(Object.getPrototypeOf(MainMenu.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(MainMenu, [{
        key: "preload",
        value: function preload() {
            var menuText = "Menu";
            var menuTextStyle = {
                font: "65px Arial",
                fontWeight: "bold",
                fill: "#EFEFEF",
                align: "center"
            };

            this.game.stage.backgroundColor = "#112D5B";
            this.menuText = this.make.text(this.world.centerX, 50, menuText, menuTextStyle);
            this.menuText.anchor.set(0.5, 0); //we want our text centered
        }
    }, {
        key: "create",
        value: function create() {
            //add loaded stuff to game
            this.world.add(this.menuText);
            this.add.image(this.world.centerX, 250, 'naruto-logo').anchor.set(0.5, 0);
        }
    }]);

    return MainMenu;
})(Phaser.State);

exports.MainMenu = MainMenu;

},{}]},{},[2]);
