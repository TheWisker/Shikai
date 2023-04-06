'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* global test, jest, expect */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _enzyme = require('enzyme');

var _color = require('../../helpers/color');

var color = _interopRequireWildcard(_color);

var _Compact = require('./Compact');

var _Compact2 = _interopRequireDefault(_Compact);

var _CompactColor = require('./CompactColor');

var _CompactColor2 = _interopRequireDefault(_CompactColor);

var _CompactFields = require('./CompactFields');

var _CompactFields2 = _interopRequireDefault(_CompactFields);

var _common = require('../common');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('Compact renders correctly', function () {
  var tree = _reactTestRenderer2.default.create(_react2.default.createElement(_Compact2.default, color.red)).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Compact with onSwatchHover renders correctly', function () {
  var tree = _reactTestRenderer2.default.create(_react2.default.createElement(_Compact2.default, _extends({}, color.red, { onSwatchHover: function onSwatchHover() {} }))).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Compact onChange events correctly', function () {
  var changeSpy = jest.fn(function (data) {
    expect(color.simpleCheckForValidColor(data)).toBeTruthy();
  });
  var tree = (0, _enzyme.mount)(_react2.default.createElement(_Compact2.default, _extends({}, color.red, { onChange: changeSpy })));
  expect(changeSpy).toHaveBeenCalledTimes(0);
  var swatches = tree.find(_common.Swatch);
  swatches.at(0).childAt(0).simulate('click');

  expect(changeSpy).toHaveBeenCalled();
});

test('Compact with onSwatchHover events correctly', function () {
  var hoverSpy = jest.fn(function (data) {
    expect(color.simpleCheckForValidColor(data)).toBeTruthy();
  });
  var tree = (0, _enzyme.mount)(_react2.default.createElement(_Compact2.default, _extends({}, color.red, { onSwatchHover: hoverSpy })));
  expect(hoverSpy).toHaveBeenCalledTimes(0);
  var swatches = tree.find(_common.Swatch);
  swatches.at(0).childAt(0).simulate('mouseOver');

  expect(hoverSpy).toHaveBeenCalled();
});

test('CompactColor renders correctly', function () {
  var tree = _reactTestRenderer2.default.create(_react2.default.createElement(_CompactColor2.default, null)).toJSON();
  expect(tree).toMatchSnapshot();
});

test('CompactFields renders correctly', function () {
  var tree = _reactTestRenderer2.default.create(_react2.default.createElement(_CompactFields2.default, color.red)).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Compact renders custom styles correctly', function () {
  var tree = _reactTestRenderer2.default.create(_react2.default.createElement(_Compact2.default, _extends({}, color.red, { styles: { default: { wrap: { boxShadow: '0 0 10px red' } } } }))).toJSON();
  expect(tree.props.style.boxShadow).toBe('0 0 10px red');
});