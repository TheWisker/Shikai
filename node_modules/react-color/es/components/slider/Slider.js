import React from 'react';
import PropTypes from 'prop-types';
import reactCSS from 'reactcss';
import merge from 'lodash-es/merge';

import { ColorWrap, Hue } from '../common';
import SliderSwatches from './SliderSwatches';
import SliderPointer from './SliderPointer';

export var Slider = function Slider(_ref) {
  var hsl = _ref.hsl,
      onChange = _ref.onChange,
      pointer = _ref.pointer,
      _ref$styles = _ref.styles,
      passedStyles = _ref$styles === undefined ? {} : _ref$styles,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className;

  var styles = reactCSS(merge({
    'default': {
      hue: {
        height: '12px',
        position: 'relative'
      },
      Hue: {
        radius: '2px'
      }
    }
  }, passedStyles));

  return React.createElement(
    'div',
    { style: styles.wrap || {}, className: 'slider-picker ' + className },
    React.createElement(
      'div',
      { style: styles.hue },
      React.createElement(Hue, {
        style: styles.Hue,
        hsl: hsl,
        pointer: pointer,
        onChange: onChange
      })
    ),
    React.createElement(
      'div',
      { style: styles.swatches },
      React.createElement(SliderSwatches, { hsl: hsl, onClick: onChange })
    )
  );
};

Slider.propTypes = {
  styles: PropTypes.object
};
Slider.defaultProps = {
  pointer: SliderPointer,
  styles: {}
};

export default ColorWrap(Slider);