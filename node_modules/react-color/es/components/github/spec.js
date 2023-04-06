var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* global test, jest, expect */

import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import * as color from '../../helpers/color';

import Github from './Github';
import GithubSwatch from './GithubSwatch';
import { Swatch } from '../common';

test('Github renders correctly', function () {
  var tree = renderer.create(React.createElement(Github, color.red)).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Github onChange events correctly', function () {
  var changeSpy = jest.fn(function (data) {
    expect(color.simpleCheckForValidColor(data)).toBeTruthy();
  });
  var tree = mount(React.createElement(Github, { onChange: changeSpy }));
  expect(changeSpy).toHaveBeenCalledTimes(0);
  var swatches = tree.find(Swatch);
  swatches.at(0).childAt(0).simulate('click');

  expect(changeSpy).toHaveBeenCalled();
});

test('Github with onSwatchHover events correctly', function () {
  var hoverSpy = jest.fn(function (data) {
    expect(color.simpleCheckForValidColor(data)).toBeTruthy();
  });
  var tree = mount(React.createElement(Github, { onSwatchHover: hoverSpy }));
  expect(hoverSpy).toHaveBeenCalledTimes(0);
  var swatches = tree.find(Swatch);
  swatches.at(0).childAt(0).simulate('mouseOver');

  expect(hoverSpy).toHaveBeenCalled();
});

test('Github `triangle="hide"`', function () {
  var tree = renderer.create(React.createElement(Github, _extends({}, color.red, { triangle: 'hide' }))).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Github `triangle="top-right"`', function () {
  var tree = renderer.create(React.createElement(Github, _extends({}, color.red, { triangle: 'top-right' }))).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Github renders custom styles correctly', function () {
  var tree = renderer.create(React.createElement(Github, _extends({}, color.red, { styles: { default: { card: { boxShadow: '0 0 10px red' } } } }))).toJSON();
  expect(tree.props.style.boxShadow).toBe('0 0 10px red');
});

test('GithubSwatch renders correctly', function () {
  var tree = renderer.create(React.createElement(GithubSwatch, { color: '#333' })).toJSON();
  expect(tree).toMatchSnapshot();
});