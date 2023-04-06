/* global test, jest, expect */

import React from 'react';
import renderer from 'react-test-renderer';
import { red } from '../../helpers/color';
// import canvas from 'canvas'

import Alpha from './Alpha';
import Checkboard from './Checkboard';
import EditableInput from './EditableInput';
import Hue from './Hue';
import Saturation from './Saturation';
import Swatch from './Swatch';

test('Alpha renders correctly', function () {
  var tree = renderer.create(React.createElement(Alpha, red)).toJSON();
  expect(tree).toMatchSnapshot();
});

// test('Alpha renders on server correctly', () => {
//   const tree = renderer.create(
//     <Alpha renderers={{ canvas }} { ...red } />
//   ).toJSON()
//   expect(tree).toMatchSnapshot()
// })

test('Checkboard renders correctly', function () {
  var tree = renderer.create(React.createElement(Checkboard, null)).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Checkboard renders children correctly', function () {
  var tree = renderer.create(React.createElement(
    Checkboard,
    null,
    React.createElement(
      'button',
      null,
      'Click'
    )
  )).toJSON();
  expect(tree).toMatchSnapshot();
});

// test('Checkboard renders on server correctly', () => {
//   const tree = renderer.create(
//     <Checkboard renderers={{ canvas }} />
//   ).toJSON()
//   expect(tree).toMatchSnapshot()
// })

test('EditableInput renders correctly', function () {
  var tree = renderer.create(React.createElement(EditableInput, { label: 'Hex', placeholder: '#fff' })).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Hue renders correctly', function () {
  var tree = renderer.create(React.createElement(Hue, red)).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Saturation renders correctly', function () {
  var tree = renderer.create(React.createElement(Saturation, red)).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Swatch renders correctly', function () {
  var tree = renderer.create(React.createElement(Swatch, { color: '#333', style: { opacity: '0.4' } })).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Swatch renders custom title correctly', function () {
  var tree = renderer.create(React.createElement(Swatch, { color: '#fff', title: 'white' })).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Swatch renders with an onMouseOver handler correctly', function () {
  var tree = renderer.create(React.createElement(Swatch, { color: '#fff', title: 'white', onHover: function onHover() {} })).toJSON();
  expect(tree).toMatchSnapshot();
});