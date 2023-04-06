/* global test, jest, expect */

import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import * as color from '../../helpers/color';

import Swatches from './Swatches';
import SwatchesColor from './SwatchesColor';
import SwatchesGroup from './SwatchesGroup';
import { Swatch } from '../common';

test('Swatches renders correctly', function () {
  var tree = renderer.create(React.createElement(Swatches, { hex: color.red.hex, colors: [['#fff'], ['#333']] })).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Swatches renders custom styles correctly', function () {
  var tree = renderer.create(React.createElement(Swatches, { hex: color.red.hex, colors: [['#fff'], ['#333']], styles: { default: { picker: { boxShadow: '0 0 10px red' } } } })).toJSON();
  expect(tree.props.style.boxShadow).toBe('0 0 10px red');
});

test('Swatches onChange events correctly', function () {
  var changeSpy = jest.fn(function (data) {
    expect(color.simpleCheckForValidColor(data)).toBeTruthy();
  });
  var tree = mount(React.createElement(Swatches, { onChange: changeSpy }));
  expect(changeSpy).toHaveBeenCalledTimes(0);
  var swatches = tree.find(Swatch);
  swatches.at(0).childAt(0).simulate('click');

  expect(changeSpy).toHaveBeenCalled();
});

test('Swatches with onSwatchHover events correctly', function () {
  var hoverSpy = jest.fn(function (data) {
    expect(color.simpleCheckForValidColor(data)).toBeTruthy();
  });
  var tree = mount(React.createElement(Swatches, { onSwatchHover: hoverSpy }));
  expect(hoverSpy).toHaveBeenCalledTimes(0);
  var swatches = tree.find(Swatch);
  swatches.at(0).childAt(0).simulate('mouseOver');

  expect(hoverSpy).toHaveBeenCalled();
});

test('SwatchesColor renders correctly', function () {
  var tree = renderer.create(React.createElement(SwatchesColor, null)).toJSON();
  expect(tree).toMatchSnapshot();
});

test('SwatchesColor renders with props', function () {
  var tree = renderer.create(React.createElement(SwatchesColor, { active: true, first: true, last: true })).toJSON();
  expect(tree).toMatchSnapshot();
});

test('SwatchesGroup renders correctly', function () {
  var tree = renderer.create(React.createElement(SwatchesGroup, { active: color.red.hex, group: ['#fff'] })).toJSON();
  expect(tree).toMatchSnapshot();
});