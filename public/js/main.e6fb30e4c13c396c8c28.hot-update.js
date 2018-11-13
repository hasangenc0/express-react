webpackHotUpdate("main",{"./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! no static exports found */function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));\n\n__webpack_require__(/*! ./css/App.css */ "./src/css/App.css");\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nfunction _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar App =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(App, _Component);\n\n  function App(props) {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));\n    _this.state = {\n      linkedin: "https://www.linkedin.com/in/hasangenc0",\n      logo: null\n    };\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: "componentDidMount",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      var logo = new Image();\n      logo.src = this.props.srcLoaded;\n\n      logo.onload = function () {\n        _this2.ironImageHd.setAttribute(\'style\', "background-image: url(\'".concat(_this2.props.srcLoaded, "\')"));\n\n        _this2.ironImageHd.classList.add(\'iron-image-fade-in\');\n      };\n    }\n  }, {\n    key: "render",\n    value: function render() {\n      return _react.default.createElement("center", {\n        className: "App"\n      }, _react.default.createElement("a", {\n        href: "https://github.com/hasangenc0/express-react"\n      }, _react.default.createElement("h1", null, " Express - React "), _react.default.createElement("img", {\n        src: "https://github.com/hasangenc0/express-react/raw/master/logo.png"\n      })), _react.default.createElement("h6", null, "Created by ", _react.default.createElement("a", {\n        href: this.state.linkedin\n      }, " ", _react.default.createElement("b", null, "Hasan Genc"))));\n    }\n  }]);\n\n  return App;\n}(_react.Component);\n\nvar _default = App;\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/App.js?')}});