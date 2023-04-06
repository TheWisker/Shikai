'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Google = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

var _merge = require('lodash/merge');

var _merge2 = _interopRequireDefault(_merge);

var _common = require('../common');

var _GooglePointerCircle = require('./GooglePointerCircle');

var _GooglePointerCircle2 = _interopRequireDefault(_GooglePointerCircle);

var _GooglePointer = require('./GooglePointer');

var _GooglePointer2 = _interopRequireDefault(_GooglePointer);

var _GoogleFields = require('./GoogleFields');

var _GoogleFields2 = _interopRequireDefault(_GoogleFields);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Google = exports.Google = function Google(_ref) {
  var width = _ref.width,
      onChange = _ref.onChange,
      rgb = _ref.rgb,
      hsl = _ref.hsl,
      hsv = _ref.hsv,
      hex = _ref.hex,
      header = _ref.header,
      _ref$styles = _ref.styles,
      passedStyles = _ref$styles === undefined ? {} : _ref$styles,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className;

  var styles = (0, _reactcss2.default)((0, _merge2.default)({
    'default': {
      picker: {
        width: width,
        background: '#fff',
        border: '1px solid #dfe1e5',
        boxSizing: 'initial',
        display: 'flex',
        flexWrap: 'wrap',
        borderRadius: '8px 8px 0px 0px'
      },
      head: {
        height: '57px',
        width: '100%',
        paddingTop: '16px',
        paddingBottom: '16px',
        paddingLeft: '16px',
        fontSize: '20px',
        boxSizing: 'border-box',
        fontFamily: 'Roboto-Regular,HelveticaNeue,Arial,sans-serif'
      },
      saturation: {
        width: '70%',
        padding: '0px',
        position: 'relative',
        overflow: 'hidden'
      },
      swatch: {
        width: '30%',
        height: '228px',
        padding: '0px',
        background: 'rgba(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ', 1)',
        position: 'relative',
        overflow: 'hidden'
      },
      body: {
        margin: 'auto',
        width: '95%'
      },
      controls: {
        display: 'flex',
        boxSizing: 'border-box',
        height: '52px',
        paddingTop: '22px'
      },
      color: {
        width: '32px'
      },
      hue: {
        height: '8px',
        position: 'relative',
        margin: '0px 16px 0px 16px',
        width: '100%'
      },
      Hue: {
        radius: '2px'
      }
    }
  }, passedStyles));
  return _react2.default.createElement(
    'div',
    { style: styles.picker, className: 'google-picker ' + className },
    _react2.default.createElement(
      'div',
      { style: styles.head },
      header
    ),
    _react2.default.createElement('div', { style: styles.swatch }),
    _react2.default.createElement(
      'div',
      { style: styles.saturation },
      _react2.default.createElement(_common.Saturation, {
        hsl: hsl,
        hsv: hsv,
        pointer: _GooglePointerCircle2.default,
        onChange: onChange
      })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.body },
      _react2.default.createElement(
        'div',
        { style: styles.controls, className: 'flexbox-fix' },
        _react2.default.createElement(
          'div',
          { style: styles.hue },
          _react2.default.createElement(_common.Hue, {
            style: styles.Hue,
            hsl: hsl,
            radius: '4px',
            pointer: _GooglePointer2.default,
            onChange: onChange
          })
        )
      ),
      _react2.default.createElement(_GoogleFields2.default, {
        rgb: rgb,
        hsl: hsl,
        hex: hex,
        hsv: hsv,
        onChange: onChange
      })
    )
  );
};

Google.propTypes = {
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  styles: _propTypes2.default.object,
  header: _propTypes2.default.string

};

Google.defaultProps = {
  width: 652,
  styles: {},
  header: 'Color picker'
};

exports.default = (0, _common.ColorWrap)(Google);