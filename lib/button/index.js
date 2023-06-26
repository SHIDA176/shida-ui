"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _excluded = ["children", "type"];
var prefixCls = 'shida-alert';
var kinds = {
  primary: '#5352ED',
  text: '#2ED573',
  waring: '#FF4757'
};
var Button = function Button(_ref) {
  var children = _ref.children,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'primary' : _ref$type,
    rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement("button", (0, _extends2.default)({
    className: prefixCls,
    style: {
      backgroundColor: kinds[type]
    }
  }, rest), children);
};
Button.propTypes = {
  type: _propTypes.default.oneOf(['primary', 'text', 'waring'])
};
var _default = Button;
exports.default = _default;