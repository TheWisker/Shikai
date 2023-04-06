import React from 'react';
import PropTypes from 'prop-types';
import reactCSS from 'reactcss';
import merge from 'lodash-es/merge';

import { ColorWrap, Saturation, Hue } from '../common';
import GooglePointerCircle from './GooglePointerCircle';
import GooglePointer from './GooglePointer';
import GoogleFields from './GoogleFields';

export var Google = function Google(_ref) {
  var width = _ref.width,
      onChange = _ref.onChange,
      rgb = _ref.rgb,
      hsl = _ref.hsl,
      hsv = _ref.hsv,
      hex = _ref.hex,
      header = _ref.header,
      _ref$styles = _ref.styles,
      passedStyles = _ref$styles === undefined ? {} : _ref$styles,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className;

  var styles = reactCSS(merge({
    'default': {
      picker: {
        width: width,
        background: '#fff',
        border: '1px solid #dfe1e5',
        boxSizing: 'initial',
        display: 'flex',
        flexWrap: 'wrap',
        borderRadius: '8px 8px 0px 0px'
      },
      head: {
        height: '57px',
        width: '100%',
        paddingTop: '16px',
        paddingBottom: '16px',
        paddingLeft: '16px',
        fontSize: '20px',
        boxSizing: 'border-box',
        fontFamily: 'Roboto-Regular,HelveticaNeue,Arial,sans-serif'
      },
      saturation: {
        width: '70%',
        padding: '0px',
        position: 'relative',
        overflow: 'hidden'
      },
      swatch: {
        width: '30%',
        height: '228px',
        padding: '0px',
        background: 'rgba(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ', 1)',
        position: 'relative',
        overflow: 'hidden'
      },
      body: {
        margin: 'auto',
        width: '95%'
      },
      controls: {
        display: 'flex',
        boxSizing: 'border-box',
        height: '52px',
        paddingTop: '22px'
      },
      color: {
        width: '32px'
      },
      hue: {
        height: '8px',
        position: 'relative',
        margin: '0px 16px 0px 16px',
        width: '100%'
      },
      Hue: {
        radius: '2px'
      }
    }
  }, passedStyles));
  return React.createElement(
    'div',
    { style: styles.picker, className: 'google-picker ' + className },
    React.createElement(
      'div',
      { style: styles.head },
      header
    ),
    React.createElement('div', { style: styles.swatch }),
    React.createElement(
      'div',
      { style: styles.saturation },
      React.createElement(Saturation, {
        hsl: hsl,
        hsv: hsv,
        pointer: GooglePointerCircle,
        onChange: onChange
      })
    ),
    React.createElement(
      'div',
      { style: styles.body },
      React.createElement(
        'div',
        { style: styles.controls, className: 'flexbox-fix' },
        React.createElement(
          'div',
          { style: styles.hue },
          React.createElement(Hue, {
            style: styles.Hue,
            hsl: hsl,
            radius: '4px',
            pointer: GooglePointer,
            onChange: onChange
          })
        )
      ),
      React.createElement(GoogleFields, {
        rgb: rgb,
        hsl: hsl,
        hex: hex,
        hsv: hsv,
        onChange: onChange
      })
    )
  );
};

Google.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  styles: PropTypes.object,
  header: PropTypes.string

};

Google.defaultProps = {
  width: 652,
  styles: {},
  header: 'Color picker'
};

export default ColorWrap(Google);