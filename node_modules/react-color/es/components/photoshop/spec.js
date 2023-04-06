var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* global test, jest, expect */

import React from 'react';
import renderer from 'react-test-renderer';
import { red } from '../../helpers/color';

import Photoshop from './Photoshop';
import PhotoshopButton from './PhotoshopButton';
import PhotoshopFields from './PhotoshopFields';
import PhotoshopPointer from './PhotoshopPointer';
import PhotoshopPointerCircle from './PhotoshopPointerCircle';
import PhotoshopPreviews from './PhotoshopPreviews';

test('Photoshop renders correctly', function () {
  var tree = renderer.create(React.createElement(Photoshop, _extends({}, red, { onAccept: function onAccept() {}, onCancel: function onCancel() {} }))).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Photoshop renders custom styles correctly', function () {
  var tree = renderer.create(React.createElement(Photoshop, _extends({}, red, { styles: { default: { picker: { boxShadow: '0 0 10px red' } } } }))).toJSON();
  expect(tree.props.style.boxShadow).toBe('0 0 10px red');
});

test('PhotoshopButton renders correctly', function () {
  var tree = renderer.create(React.createElement(PhotoshopButton, { label: 'accept', onClick: function onClick() {} })).toJSON();
  expect(tree).toMatchSnapshot();
});

test('PhotoshopFields renders correctly', function () {
  var tree = renderer.create(React.createElement(PhotoshopFields, red)).toJSON();
  expect(tree).toMatchSnapshot();
});

test('PhotoshopPointer renders correctly', function () {
  var tree = renderer.create(React.createElement(PhotoshopPointer, null)).toJSON();
  expect(tree).toMatchSnapshot();
});

test('PhotoshopPointerCircle renders correctly', function () {
  var tree = renderer.create(React.createElement(PhotoshopPointerCircle, red)).toJSON();
  expect(tree).toMatchSnapshot();
});

test('PhotoshopPreviews renders correctly', function () {
  var tree = renderer.create(React.createElement(PhotoshopPreviews, _extends({}, red, { currencColor: '#aeee00' }))).toJSON();
  expect(tree).toMatchSnapshot();
});