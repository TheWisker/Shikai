import React from 'react';
import { storiesOf } from '@storybook/react';
import { renderWithKnobs } from '../../../.storybook/report';
import SyncColorField from '../../../.storybook/SyncColorField';

import Sketch from './Sketch';

storiesOf('Pickers', module).add('SketchPicker', function () {
  return React.createElement(
    SyncColorField,
    { component: Sketch },
    renderWithKnobs(Sketch, {}, null, {
      width: { range: true, min: 140, max: 500, step: 1 }
    })
  );
}).add('SketchPicker Custom Styles', function () {
  return React.createElement(
    SyncColorField,
    { component: Sketch },
    renderWithKnobs(Sketch, {
      styles: {
        default: {
          picker: {
            boxShadow: 'none'
          }
        }
      }
    }, null, {
      width: { range: true, min: 140, max: 500, step: 1 }
    })
  );
});