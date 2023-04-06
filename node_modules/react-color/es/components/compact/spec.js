var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* global test, jest, expect */

import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import * as color from '../../helpers/color';

import Compact from './Compact';
import CompactColor from './CompactColor';
import CompactFields from './CompactFields';
import { Swatch } from '../common';

test('Compact renders correctly', function () {
  var tree = renderer.create(React.createElement(Compact, color.red)).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Compact with onSwatchHover renders correctly', function () {
  var tree = renderer.create(React.createElement(Compact, _extends({}, color.red, { onSwatchHover: function onSwatchHover() {} }))).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Compact onChange events correctly', function () {
  var changeSpy = jest.fn(function (data) {
    expect(color.simpleCheckForValidColor(data)).toBeTruthy();
  });
  var tree = mount(React.createElement(Compact, _extends({}, color.red, { onChange: changeSpy })));
  expect(changeSpy).toHaveBeenCalledTimes(0);
  var swatches = tree.find(Swatch);
  swatches.at(0).childAt(0).simulate('click');

  expect(changeSpy).toHaveBeenCalled();
});

test('Compact with onSwatchHover events correctly', function () {
  var hoverSpy = jest.fn(function (data) {
    expect(color.simpleCheckForValidColor(data)).toBeTruthy();
  });
  var tree = mount(React.createElement(Compact, _extends({}, color.red, { onSwatchHover: hoverSpy })));
  expect(hoverSpy).toHaveBeenCalledTimes(0);
  var swatches = tree.find(Swatch);
  swatches.at(0).childAt(0).simulate('mouseOver');

  expect(hoverSpy).toHaveBeenCalled();
});

test('CompactColor renders correctly', function () {
  var tree = renderer.create(React.createElement(CompactColor, null)).toJSON();
  expect(tree).toMatchSnapshot();
});

test('CompactFields renders correctly', function () {
  var tree = renderer.create(React.createElement(CompactFields, color.red)).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Compact renders custom styles correctly', function () {
  var tree = renderer.create(React.createElement(Compact, _extends({}, color.red, { styles: { default: { wrap: { boxShadow: '0 0 10px red' } } } }))).toJSON();
  expect(tree.props.style.boxShadow).toBe('0 0 10px red');
});