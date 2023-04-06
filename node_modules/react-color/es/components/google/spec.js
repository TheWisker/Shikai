var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import renderer from 'react-test-renderer';
import * as color from '../../helpers/color';
import { mount } from 'enzyme';

import Google from './Google';
import GoogleFields from './GoogleFields';
import GooglePointer from './GooglePointer';
import GooglePointerCircle from './GooglePointerCircle';

test('Google renders correctly', function () {
  var tree = renderer.create(React.createElement(Google, color.red)).toJSON();
  expect(tree).toMatchSnapshot();
});
test('Google onChange events correctly', function () {
  var changeSpy = jest.fn(function (data) {
    expect(color.simpleCheckForValidColor(data)).toBeTruthy();
  });
  var tree = mount(React.createElement(Google, _extends({}, color.red, { onChange: changeSpy })));
  expect(changeSpy).toHaveBeenCalledTimes(0);
});

test('GoogleFields renders correctly', function () {
  var tree = renderer.create(React.createElement(GoogleFields, color.red)).toJSON();
  expect(tree).toMatchSnapshot();
});

test('GooglePointer renders correctly', function () {
  var tree = renderer.create(React.createElement(GooglePointer, null)).toJSON();
  expect(tree).toMatchSnapshot();
});

test('GooglePointerCircle renders correctly', function () {
  var tree = renderer.create(React.createElement(GooglePointerCircle, null)).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Google renders custom styles correctly', function () {
  var tree = renderer.create(React.createElement(Google, { styles: { default: { picker: { width: '200px' } } } })).toJSON();
  expect(tree.props.style.width).toBe('200px');
});

test('Google renders correctly with width', function () {
  var tree = renderer.create(React.createElement(Google, { width: 200 })).toJSON();
  expect(tree.props.style.width).toBe(200);
});

test('Google custom header correctly', function () {
  var tree = mount(React.createElement(Google, { header: 'Change the color!!!' }));
  expect(tree.instance().props.header).toBe('Change the color!!!');
});