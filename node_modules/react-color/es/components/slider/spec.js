/* global test, expect */

import React from 'react';
import renderer from 'react-test-renderer';
import { red } from '../../helpers/color';

import Slider from './Slider';
import SliderPointer from './SliderPointer';
import SliderSwatch from './SliderSwatch';
import SliderSwatches from './SliderSwatches';

test('Slider renders correctly', function () {
  var tree = renderer.create(React.createElement(Slider, red)).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Slider renders custom styles correctly', function () {
  var tree = renderer.create(React.createElement(Slider, { styles: { default: { wrap: { boxShadow: 'none' } } } })).toJSON();
  expect(tree.props.style.boxShadow).toBe('none');
});

test('SliderPointer renders correctly', function () {
  var tree = renderer.create(React.createElement(SliderPointer, null)).toJSON();
  expect(tree).toMatchSnapshot();
});

test('SliderSwatch renders correctly', function () {
  var tree = renderer.create(React.createElement(SliderSwatch, red)).toJSON();
  expect(tree).toMatchSnapshot();
});

test('SliderSwatches renders correctly', function () {
  var tree = renderer.create(React.createElement(SliderSwatches, red)).toJSON();
  expect(tree).toMatchSnapshot();
});