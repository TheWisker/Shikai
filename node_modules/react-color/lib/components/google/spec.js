'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _color = require('../../helpers/color');

var color = _interopRequireWildcard(_color);

var _enzyme = require('enzyme');

var _Google = require('./Google');

var _Google2 = _interopRequireDefault(_Google);

var _GoogleFields = require('./GoogleFields');

var _GoogleFields2 = _interopRequireDefault(_GoogleFields);

var _GooglePointer = require('./GooglePointer');

var _GooglePointer2 = _interopRequireDefault(_GooglePointer);

var _GooglePointerCircle = require('./GooglePointerCircle');

var _GooglePointerCircle2 = _interopRequireDefault(_GooglePointerCircle);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('Google renders correctly', function () {
  var tree = _reactTestRenderer2.default.create(_react2.default.createElement(_Google2.default, color.red)).toJSON();
  expect(tree).toMatchSnapshot();
});
test('Google onChange events correctly', function () {
  var changeSpy = jest.fn(function (data) {
    expect(color.simpleCheckForValidColor(data)).toBeTruthy();
  });
  var tree = (0, _enzyme.mount)(_react2.default.createElement(_Google2.default, _extends({}, color.red, { onChange: changeSpy })));
  expect(changeSpy).toHaveBeenCalledTimes(0);
});

test('GoogleFields renders correctly', function () {
  var tree = _reactTestRenderer2.default.create(_react2.default.createElement(_GoogleFields2.default, color.red)).toJSON();
  expect(tree).toMatchSnapshot();
});

test('GooglePointer renders correctly', function () {
  var tree = _reactTestRenderer2.default.create(_react2.default.createElement(_GooglePointer2.default, null)).toJSON();
  expect(tree).toMatchSnapshot();
});

test('GooglePointerCircle renders correctly', function () {
  var tree = _reactTestRenderer2.default.create(_react2.default.createElement(_GooglePointerCircle2.default, null)).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Google renders custom styles correctly', function () {
  var tree = _reactTestRenderer2.default.create(_react2.default.createElement(_Google2.default, { styles: { default: { picker: { width: '200px' } } } })).toJSON();
  expect(tree.props.style.width).toBe('200px');
});

test('Google renders correctly with width', function () {
  var tree = _reactTestRenderer2.default.create(_react2.default.createElement(_Google2.default, { width: 200 })).toJSON();
  expect(tree.props.style.width).toBe(200);
});

test('Google custom header correctly', function () {
  var tree = (0, _enzyme.mount)(_react2.default.createElement(_Google2.default, { header: 'Change the color!!!' }));
  expect(tree.instance().props.header).toBe('Change the color!!!');
});