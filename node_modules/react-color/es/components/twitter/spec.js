var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* global test, jest, expect */

import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import * as color from '../../helpers/color';

import Twitter from './Twitter';
import { Swatch } from '../common';

test('Twitter renders correctly', function () {
  var tree = renderer.create(React.createElement(Twitter, color.red)).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Material renders custom styles correctly', function () {
  var tree = renderer.create(React.createElement(Twitter, _extends({}, color.red, { styles: { default: { card: { boxShadow: '0 0 10px red' } } } }))).toJSON();
  expect(tree.props.style.boxShadow).toBe('0 0 10px red');
});

test('Twitter `triangle="hide"`', function () {
  var tree = renderer.create(React.createElement(Twitter, _extends({}, color.red, { triangle: 'hide' }))).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Twitter `triangle="top-right"`', function () {
  var tree = renderer.create(React.createElement(Twitter, _extends({}, color.red, { triangle: 'top-right' }))).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Twitter onChange events correctly', function () {
  var changeSpy = jest.fn(function (data) {
    expect(color.simpleCheckForValidColor(data)).toBeTruthy();
  });
  var tree = mount(React.createElement(Twitter, _extends({}, color.red, { onChange: changeSpy })));
  expect(changeSpy).toHaveBeenCalledTimes(0);
  var swatches = tree.find(Swatch);
  swatches.at(0).childAt(0).simulate('click');

  expect(changeSpy).toHaveBeenCalled();
});

test('Twitter with onSwatchHover events correctly', function () {
  var hoverSpy = jest.fn(function (data) {
    expect(color.simpleCheckForValidColor(data)).toBeTruthy();
  });
  var tree = mount(React.createElement(Twitter, _extends({}, color.red, { onSwatchHover: hoverSpy })));
  expect(hoverSpy).toHaveBeenCalledTimes(0);
  var swatches = tree.find(Swatch);
  swatches.at(0).childAt(0).simulate('mouseOver');

  expect(hoverSpy).toHaveBeenCalled();
});