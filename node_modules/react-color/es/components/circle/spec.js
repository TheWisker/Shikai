/* global test, jest, expect */

import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import Circle from './Circle';
import CircleSwatch from './CircleSwatch';
import { Swatch } from '../common';
import * as color from '../../helpers/color';

test('Circle renders correctly', function () {
  var tree = renderer.create(React.createElement(Circle, null)).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Circle onChange events correctly', function () {
  var changeSpy = jest.fn(function (data) {
    expect(color.simpleCheckForValidColor(data)).toBeTruthy();
  });
  var tree = mount(React.createElement(Circle, { onChange: changeSpy }));
  expect(changeSpy).toHaveBeenCalledTimes(0);
  var swatches = tree.find(Swatch);
  swatches.at(0).childAt(0).simulate('click');

  expect(changeSpy).toHaveBeenCalled();
});

test('Circle with onSwatchHover events correctly', function () {
  var hoverSpy = jest.fn(function (data) {
    expect(color.simpleCheckForValidColor(data)).toBeTruthy();
  });
  var tree = mount(React.createElement(Circle, { onSwatchHover: hoverSpy }));
  expect(hoverSpy).toHaveBeenCalledTimes(0);
  var swatches = tree.find(Swatch);
  swatches.at(0).childAt(0).simulate('mouseOver');

  expect(hoverSpy).toHaveBeenCalled();
});

test('Circle renders custom styles correctly', function () {
  var tree = renderer.create(React.createElement(Circle, { styles: { default: { card: { boxShadow: 'none' } } } })).toJSON();
  expect(tree.props.style.boxShadow).toBe('none');
});

test('CircleSwatch renders correctly', function () {
  var tree = renderer.create(React.createElement(CircleSwatch, null)).toJSON();
  expect(tree).toMatchSnapshot();
});

test('CircleSwatch renders with sizing and spacing', function () {
  var tree = renderer.create(React.createElement(CircleSwatch, { circleSize: 40, circleSpacing: 40 })).toJSON();
  expect(tree).toMatchSnapshot();
});