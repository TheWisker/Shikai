'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _enzyme = require('enzyme');

var _Block = require('./Block');

var _Block2 = _interopRequireDefault(_Block);

var _BlockSwatches = require('./BlockSwatches');

var _BlockSwatches2 = _interopRequireDefault(_BlockSwatches);

var _common = require('../common');

var _color = require('../../helpers/color');

var color = _interopRequireWildcard(_color);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('Block renders correctly', function () {
  var tree = _reactTestRenderer2.default.create(_react2.default.createElement(_Block2.default, null)).toJSON();
  expect(tree).toMatchSnapshot();
}); /* global test, jest, expect */

test('Block onChange events correctly', function () {
  var changeSpy = jest.fn(function (data) {
    expect(color.simpleCheckForValidColor(data)).toBeTruthy();
  });
  var tree = (0, _enzyme.mount)(_react2.default.createElement(_Block2.default, { onChange: changeSpy }));
  expect(changeSpy).toHaveBeenCalledTimes(0);
  var swatches = tree.find(_common.Swatch);
  swatches.at(0).childAt(0).simulate('click');

  expect(changeSpy).toHaveBeenCalled();
});

test('Block with onSwatchHover events correctly', function () {
  var hoverSpy = jest.fn(function (data) {
    expect(color.simpleCheckForValidColor(data)).toBeTruthy();
  });
  var tree = (0, _enzyme.mount)(_react2.default.createElement(_Block2.default, { onSwatchHover: hoverSpy }));
  expect(hoverSpy).toHaveBeenCalledTimes(0);
  var swatches = tree.find(_common.Swatch);
  swatches.at(0).childAt(0).simulate('mouseOver');

  expect(hoverSpy).toHaveBeenCalled();
});

test('Block `triangle="hide"`', function () {
  var tree = _reactTestRenderer2.default.create(_react2.default.createElement(_Block2.default, { triangle: 'hide' })).toJSON();
  expect(tree).toMatchSnapshot();
});

test('BlockSwatches renders correctly', function () {
  var tree = _reactTestRenderer2.default.create(_react2.default.createElement(_BlockSwatches2.default, { colors: ['#fff', '#999', '#000'] })).toJSON();
  expect(tree).toMatchSnapshot();
});
test('Block renders custom styles correctly', function () {
  var tree = _reactTestRenderer2.default.create(_react2.default.createElement(_Block2.default, { styles: { default: { card: { boxShadow: 'none' } } } })).toJSON();
  expect(tree.props.style.boxShadow).toBe('none');
});