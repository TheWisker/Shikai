import React from 'react';
import reactCSS from 'reactcss';

import SliderSwatch from './SliderSwatch';

export var SliderSwatches = function SliderSwatches(_ref) {
  var onClick = _ref.onClick,
      hsl = _ref.hsl;

  var styles = reactCSS({
    'default': {
      swatches: {
        marginTop: '20px'
      },
      swatch: {
        boxSizing: 'border-box',
        width: '20%',
        paddingRight: '1px',
        float: 'left'
      },
      clear: {
        clear: 'both'
      }
    }
  });

  // Acceptible difference in floating point equality
  var epsilon = 0.1;

  return React.createElement(
    'div',
    { style: styles.swatches },
    React.createElement(
      'div',
      { style: styles.swatch },
      React.createElement(SliderSwatch, {
        hsl: hsl,
        offset: '.80',
        active: Math.abs(hsl.l - 0.80) < epsilon && Math.abs(hsl.s - 0.50) < epsilon,
        onClick: onClick,
        first: true
      })
    ),
    React.createElement(
      'div',
      { style: styles.swatch },
      React.createElement(SliderSwatch, {
        hsl: hsl,
        offset: '.65',
        active: Math.abs(hsl.l - 0.65) < epsilon && Math.abs(hsl.s - 0.50) < epsilon,
        onClick: onClick
      })
    ),
    React.createElement(
      'div',
      { style: styles.swatch },
      React.createElement(SliderSwatch, {
        hsl: hsl,
        offset: '.50',
        active: Math.abs(hsl.l - 0.50) < epsilon && Math.abs(hsl.s - 0.50) < epsilon,
        onClick: onClick
      })
    ),
    React.createElement(
      'div',
      { style: styles.swatch },
      React.createElement(SliderSwatch, {
        hsl: hsl,
        offset: '.35',
        active: Math.abs(hsl.l - 0.35) < epsilon && Math.abs(hsl.s - 0.50) < epsilon,
        onClick: onClick
      })
    ),
    React.createElement(
      'div',
      { style: styles.swatch },
      React.createElement(SliderSwatch, {
        hsl: hsl,
        offset: '.20',
        active: Math.abs(hsl.l - 0.20) < epsilon && Math.abs(hsl.s - 0.50) < epsilon,
        onClick: onClick,
        last: true
      })
    ),
    React.createElement('div', { style: styles.clear })
  );
};

export default SliderSwatches;