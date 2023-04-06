var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* global test, test, expect */

import React from 'react';
import renderer from 'react-test-renderer';
import { red } from '../../helpers/color';

import Material from './Material';

test('Material renders correctly', function () {
  var tree = renderer.create(React.createElement(Material, red)).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Material renders custom styles correctly', function () {
  var tree = renderer.create(React.createElement(Material, _extends({}, red, { styles: { default: { wrap: { boxShadow: '0 0 10px red' } } } }))).toJSON();
  expect(tree.props.style.boxShadow).toBe('0 0 10px red');
});