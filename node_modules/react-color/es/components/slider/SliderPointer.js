import React from 'react';
import reactCSS from 'reactcss';

export var SliderPointer = function SliderPointer() {
  var styles = reactCSS({
    'default': {
      picker: {
        width: '14px',
        height: '14px',
        borderRadius: '6px',
        transform: 'translate(-7px, -1px)',
        backgroundColor: 'rgb(248, 248, 248)',
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)'
      }
    }
  });

  return React.createElement('div', { style: styles.picker });
};

export default SliderPointer;