var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* global test, expect */

import React from 'react';
import renderer from 'react-test-renderer';
import { red } from '../../helpers/color';

import Hue from './Hue';
import HuePointer from './HuePointer';

test('Hue renders correctly', function () {
  var tree = renderer.create(React.createElement(Hue, red)).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Hue renders vertically', function () {
  var tree = renderer.create(React.createElement(Hue, _extends({}, red, { width: 20, height: 200, direction: 'vertical' }))).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Hue renders custom styles correctly', function () {
  var tree = renderer.create(React.createElement(Hue, _extends({}, red, { styles: { default: { picker: { boxShadow: '0 0 10px red' } } } }))).toJSON();
  expect(tree.props.style.boxShadow).toBe('0 0 10px red');
});

test('HuePointer renders correctly', function () {
  var tree = renderer.create(React.createElement(HuePointer, null)).toJSON();
  expect(tree).toMatchSnapshot();
});