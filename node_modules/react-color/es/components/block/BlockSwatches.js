import React from 'react';
import reactCSS from 'reactcss';
import map from 'lodash-es/map';

import { Swatch } from '../common';

export var BlockSwatches = function BlockSwatches(_ref) {
  var colors = _ref.colors,
      onClick = _ref.onClick,
      onSwatchHover = _ref.onSwatchHover;

  var styles = reactCSS({
    'default': {
      swatches: {
        marginRight: '-10px'
      },
      swatch: {
        width: '22px',
        height: '22px',
        float: 'left',
        marginRight: '10px',
        marginBottom: '10px',
        borderRadius: '4px'
      },
      clear: {
        clear: 'both'
      }
    }
  });

  return React.createElement(
    'div',
    { style: styles.swatches },
    map(colors, function (c) {
      return React.createElement(Swatch, {
        key: c,
        color: c,
        style: styles.swatch,
        onClick: onClick,
        onHover: onSwatchHover,
        focusStyle: {
          boxShadow: '0 0 4px ' + c
        }
      });
    }),
    React.createElement('div', { style: styles.clear })
  );
};

export default BlockSwatches;