/* global test, jest, expect */

import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import Block from './Block';
import BlockSwatches from './BlockSwatches';
import { Swatch } from '../common';
import * as color from '../../helpers/color';

test('Block renders correctly', function () {
  var tree = renderer.create(React.createElement(Block, null)).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Block onChange events correctly', function () {
  var changeSpy = jest.fn(function (data) {
    expect(color.simpleCheckForValidColor(data)).toBeTruthy();
  });
  var tree = mount(React.createElement(Block, { onChange: changeSpy }));
  expect(changeSpy).toHaveBeenCalledTimes(0);
  var swatches = tree.find(Swatch);
  swatches.at(0).childAt(0).simulate('click');

  expect(changeSpy).toHaveBeenCalled();
});

test('Block with onSwatchHover events correctly', function () {
  var hoverSpy = jest.fn(function (data) {
    expect(color.simpleCheckForValidColor(data)).toBeTruthy();
  });
  var tree = mount(React.createElement(Block, { onSwatchHover: hoverSpy }));
  expect(hoverSpy).toHaveBeenCalledTimes(0);
  var swatches = tree.find(Swatch);
  swatches.at(0).childAt(0).simulate('mouseOver');

  expect(hoverSpy).toHaveBeenCalled();
});

test('Block `triangle="hide"`', function () {
  var tree = renderer.create(React.createElement(Block, { triangle: 'hide' })).toJSON();
  expect(tree).toMatchSnapshot();
});

test('BlockSwatches renders correctly', function () {
  var tree = renderer.create(React.createElement(BlockSwatches, { colors: ['#fff', '#999', '#000'] })).toJSON();
  expect(tree).toMatchSnapshot();
});
test('Block renders custom styles correctly', function () {
  var tree = renderer.create(React.createElement(Block, { styles: { default: { card: { boxShadow: 'none' } } } })).toJSON();
  expect(tree.props.style.boxShadow).toBe('none');
});