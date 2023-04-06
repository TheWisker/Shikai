var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* global test, jest, expect */

import React from 'react';
import renderer from 'react-test-renderer';
import * as color from '../../helpers/color';
import { mount } from 'enzyme';

import Chrome from './Chrome';
import ChromeFields from './ChromeFields';
import ChromePointer from './ChromePointer';
import ChromePointerCircle from './ChromePointerCircle';
import { Alpha } from '../common';

test('Chrome renders correctly', function () {
  var tree = renderer.create(React.createElement(Chrome, color.red)).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Chrome onChange events correctly', function () {
  var changeSpy = jest.fn(function (data) {
    expect(color.simpleCheckForValidColor(data)).toBeTruthy();
  });
  var tree = mount(React.createElement(Chrome, _extends({}, color.red, { onChange: changeSpy })));
  expect(changeSpy).toHaveBeenCalledTimes(0);

  // check the Alpha component
  var alphaCommon = tree.find(Alpha);
  alphaCommon.at(0).childAt(2).simulate('mouseDown', {
    pageX: 100,
    pageY: 10
  });
  expect(changeSpy).toHaveBeenCalledTimes(1);

  // TODO: check the Hue component
  // TODO: check the ChromeFields
  // TODO: check Saturation
});

// test('Chrome renders on server correctly', () => {
//   const tree = renderer.create(
//     <Chrome renderers={{ canvas }} { ...color.red } />
//   ).toJSON()
//   expect(tree).toMatchSnapshot()
// })

test('ChromeFields renders correctly', function () {
  var tree = renderer.create(React.createElement(ChromeFields, color.red)).toJSON();
  expect(tree).toMatchSnapshot();
});

test('ChromePointer renders correctly', function () {
  var tree = renderer.create(React.createElement(ChromePointer, null)).toJSON();
  expect(tree).toMatchSnapshot();
});

test('ChromePointerCircle renders correctly', function () {
  var tree = renderer.create(React.createElement(ChromePointerCircle, null)).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Chrome renders custom styles correctly', function () {
  var tree = renderer.create(React.createElement(Chrome, { styles: { default: { picker: { boxShadow: 'none' } } } })).toJSON();
  expect(tree.props.style.boxShadow).toBe('none');
});

test('Chrome renders correctly with width', function () {
  var tree = renderer.create(React.createElement(Chrome, { width: 300 })).toJSON();
  expect(tree.props.style.width).toBe(300);
});