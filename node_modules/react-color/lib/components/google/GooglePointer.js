'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GooglePointer = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GooglePointer = exports.GooglePointer = function GooglePointer(props) {
  var styles = (0, _reactcss2.default)({
    'default': {
      picker: {
        width: '20px',
        height: '20px',
        borderRadius: '22px',
        transform: 'translate(-10px, -7px)',
        background: 'hsl(' + Math.round(props.hsl.h) + ', 100%, 50%)',
        border: '2px white solid'
      }
    }
  });

  return _react2.default.createElement('div', { style: styles.picker });
};

GooglePointer.propTypes = {
  hsl: _propTypes2.default.shape({
    h: _propTypes2.default.number,
    s: _propTypes2.default.number,
    l: _propTypes2.default.number,
    a: _propTypes2.default.number
  })
};

GooglePointer.defaultProps = {
  hsl: { a: 1, h: 249.94, l: 0.2, s: 0.50 }
};

exports.default = GooglePointer;