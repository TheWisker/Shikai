'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _enzyme = require('enzyme');

var _color = require('../../helpers/color');

var color = _interopRequireWildcard(_color);

var _Sketch = require('./Sketch');

var _Sketch2 = _interopRequireDefault(_Sketch);

var _SketchFields = require('./SketchFields');

var _SketchFields2 = _interopRequireDefault(_SketchFields);

var _SketchPresetColors = require('./SketchPresetColors');

var _SketchPresetColors2 = _interopRequireDefault(_SketchPresetColors);

var _common = require('../common');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import canvas from 'canvas'

/* global test, jest, expect */

test('Sketch renders correctly', function () {
  var tree = _reactTestRenderer2.default.create(_react2.default.createElement(_Sketch2.default, color.red)).toJSON();
  expect(tree).toMatchSnapshot();
});

// test('Sketch renders on server correctly', () => {
//   const tree = renderer.create(
//     <Sketch renderers={{ canvas }} { ...color.red } />
//   ).toJSON()
//   expect(tree).toMatchSnapshot()
// })

test('Sketch onChange events correctly', function () {
  var changeSpy = jest.fn(function (data) {
    expect(color.simpleCheckForValidColor(data)).toBeTruthy();
  });
  var tree = (0, _enzyme.mount)(_react2.default.createElement(_Sketch2.default, { onChange: changeSpy }));
  expect(changeSpy).toHaveBeenCalledTimes(0);
  var swatches = tree.find(_common.Swatch);
  swatches.at(0).childAt(0).simulate('click');

  expect(changeSpy).toHaveBeenCalled();
});

test('Sketch with onSwatchHover events correctly', function () {
  var hoverSpy = jest.fn(function (data) {
    expect(color.simpleCheckForValidColor(data)).toBeTruthy();
  });
  var tree = (0, _enzyme.mount)(_react2.default.createElement(_Sketch2.default, { onSwatchHover: hoverSpy }));
  expect(hoverSpy).toHaveBeenCalledTimes(0);
  var swatches = tree.find(_common.Swatch);
  swatches.at(0).childAt(0).simulate('mouseOver');

  expect(hoverSpy).toHaveBeenCalled();
});

test('Sketch renders custom styles correctly', function () {
  var tree = _reactTestRenderer2.default.create(_react2.default.createElement(_Sketch2.default, { styles: { default: { picker: { boxShadow: 'none' } } } })).toJSON();
  expect(tree.props.style.boxShadow).toBe('none');
});

test('SketchFields renders correctly', function () {
  var tree = _reactTestRenderer2.default.create(_react2.default.createElement(_SketchFields2.default, color.red)).toJSON();
  expect(tree).toMatchSnapshot();
});

test('SketchPresetColors renders correctly', function () {
  var tree = _reactTestRenderer2.default.create(_react2.default.createElement(_SketchPresetColors2.default, { colors: ['#fff', '#999', '#000'] })).toJSON();
  expect(tree).toMatchSnapshot();
});

test('SketchPresetColors with custom titles renders correctly', function () {
  var colors = [{
    color: '#fff',
    title: 'white'
  }, {
    color: '#999',
    title: 'gray'
  }, {
    color: '#000'
  }, '#f00'];
  var tree = _reactTestRenderer2.default.create(_react2.default.createElement(_SketchPresetColors2.default, { colors: colors })).toJSON();
  expect(tree).toMatchSnapshot();
});