import React from 'react';
import reactCSS from 'reactcss';

export var ChromePointerCircle = function ChromePointerCircle() {
  var styles = reactCSS({
    'default': {
      picker: {
        width: '12px',
        height: '12px',
        borderRadius: '6px',
        boxShadow: 'inset 0 0 0 1px #fff',
        transform: 'translate(-6px, -6px)'
      }
    }
  });

  return React.createElement('div', { style: styles.picker });
};

export default ChromePointerCircle;