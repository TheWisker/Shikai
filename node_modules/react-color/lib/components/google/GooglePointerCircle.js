'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GooglePointerCircle = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GooglePointerCircle = exports.GooglePointerCircle = function GooglePointerCircle(props) {
  var styles = (0, _reactcss2.default)({
    'default': {
      picker: {
        width: '20px',
        height: '20px',
        borderRadius: '22px',
        border: '2px #fff solid',
        transform: 'translate(-12px, -13px)',
        background: 'hsl(' + Math.round(props.hsl.h) + ', ' + Math.round(props.hsl.s * 100) + '%, ' + Math.round(props.hsl.l * 100) + '%)'
      }
    }
  });

  return _react2.default.createElement('div', { style: styles.picker });
};

GooglePointerCircle.propTypes = {
  hsl: _propTypes2.default.shape({
    h: _propTypes2.default.number,
    s: _propTypes2.default.number,
    l: _propTypes2.default.number,
    a: _propTypes2.default.number
  })
};

GooglePointerCircle.defaultProps = {
  hsl: { a: 1, h: 249.94, l: 0.2, s: 0.50 }
};

exports.default = GooglePointerCircle;