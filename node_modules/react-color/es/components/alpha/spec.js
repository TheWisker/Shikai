var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* global test, expect, jest */

import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import * as color from '../../helpers/color';
// import canvas from 'canvas'

import Alpha from './Alpha';
import { Alpha as CommonAlpha } from '../common';
import AlphaPointer from './AlphaPointer';

test('Alpha renders correctly', function () {
  var tree = renderer.create(React.createElement(Alpha, color.red)).toJSON();
  expect(tree).toMatchSnapshot();
});

// test('Alpha renders on server correctly', () => {
//   const tree = renderer.create(
//     <Alpha renderers={{ canvas }} { ...color.red } />
//   ).toJSON()
//   expect(tree).toMatchSnapshot()
// })

test('Alpha onChange events correctly', function () {
  var changeSpy = jest.fn(function (data) {
    expect(color.simpleCheckForValidColor(data)).toBeTruthy();
  });
  var tree = mount(React.createElement(Alpha, _extends({}, color.red, { width: 20, height: 200, onChange: changeSpy })));
  expect(changeSpy).toHaveBeenCalledTimes(0);
  var alphaCommon = tree.find(CommonAlpha);
  alphaCommon.at(0).childAt(2).simulate('mouseDown', {
    pageX: 100,
    pageY: 10
  });
  expect(changeSpy).toHaveBeenCalled();
});

test('Alpha renders vertically', function () {
  var tree = renderer.create(React.createElement(Alpha, _extends({}, color.red, { width: 20, height: 200, direction: 'vertical' }))).toJSON();
  expect(tree).toMatchSnapshot();
});

test('AlphaPointer renders correctly', function () {
  var tree = renderer.create(React.createElement(AlphaPointer, null)).toJSON();
  expect(tree).toMatchSnapshot();
});