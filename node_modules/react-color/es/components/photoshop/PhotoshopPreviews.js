import React from 'react';
import reactCSS from 'reactcss';

export var PhotoshopPreviews = function PhotoshopPreviews(_ref) {
  var rgb = _ref.rgb,
      currentColor = _ref.currentColor;

  var styles = reactCSS({
    'default': {
      swatches: {
        border: '1px solid #B3B3B3',
        borderBottom: '1px solid #F0F0F0',
        marginBottom: '2px',
        marginTop: '1px'
      },
      new: {
        height: '34px',
        background: 'rgb(' + rgb.r + ',' + rgb.g + ', ' + rgb.b + ')',
        boxShadow: 'inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 1px 0 #000'
      },
      current: {
        height: '34px',
        background: currentColor,
        boxShadow: 'inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 -1px 0 #000'
      },
      label: {
        fontSize: '14px',
        color: '#000',
        textAlign: 'center'
      }
    }
  });

  return React.createElement(
    'div',
    null,
    React.createElement(
      'div',
      { style: styles.label },
      'new'
    ),
    React.createElement(
      'div',
      { style: styles.swatches },
      React.createElement('div', { style: styles.new }),
      React.createElement('div', { style: styles.current })
    ),
    React.createElement(
      'div',
      { style: styles.label },
      'current'
    )
  );
};

export default PhotoshopPreviews;