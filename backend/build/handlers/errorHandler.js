"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.notFound = exports.productionErrors = exports.developmentErrors = exports.handleErrors = exports.CustomError = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

var _logHandler = _interopRequireDefault(require("./logHandler.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var CustomError = /*#__PURE__*/function (_Error) {
  (0, _inherits2["default"])(CustomError, _Error);

  var _super = _createSuper(CustomError);

  function CustomError(error, name, status) {
    var _this;

    (0, _classCallCheck2["default"])(this, CustomError);
    // Pass remaining arguments (including vender specific ones) to parent constructor
    _this = _super.call(this, error); // Maintains proper stack trace for where our error was thrown (node v8)

    if (Error.captureStackTrace) Error.captureStackTrace((0, _assertThisInitialized2["default"])(_this), CustomError);
    _this.name = name;
    _this.status = status;
    return _this;
  }

  return CustomError;
}( /*#__PURE__*/(0, _wrapNativeSuper2["default"])(Error));

exports.CustomError = CustomError;

var handleErrors = function handleErrors(fn) {
  return function (req, res, next) {
    return fn(req, res, next)["catch"](next);
  };
};

exports.handleErrors = handleErrors;

var developmentErrors = function developmentErrors(err, req, res, next) {
  err.stack = err.stack || '';
  var errorDetails = {
    name: err.name,
    status: err.status,
    error: err.message,
    stack: err.stack
  };

  _logHandler["default"].error(err);

  return res.status(err.status || 500).json(errorDetails);
};

exports.developmentErrors = developmentErrors;

var productionErrors = function productionErrors(err, req, res, next) {
  _logHandler["default"].error(err);

  var errorDetails = {
    name: err.name,
    error: err.message
  };
  return res.status(err.status || 500).json(errorDetails);
};

exports.productionErrors = productionErrors;

var notFound = function notFound(req, res, next) {
  var err = Error('server.notFound');
  err.status = 404;

  _logHandler["default"].error(err);

  next(err);
}; // 403 = user record not found
// 401 = wrong password


exports.notFound = notFound;
//# sourceMappingURL=errorHandler.js.map