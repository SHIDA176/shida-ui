import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "type"];
import t from 'prop-types';
import React from 'react';
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
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("button", _extends({
    className: prefixCls,
    style: {
      backgroundColor: kinds[type]
    }
  }, rest), children);
};
Button.propTypes = {
  type: t.oneOf(['primary', 'text', 'waring'])
};
export default Button;