import React from 'react';
import { storiesOf } from '@storybook/react';
import { renderWithKnobs } from '../../../.storybook/report';
import SyncColorField from '../../../.storybook/SyncColorField';

import Photoshop from './Photoshop';

storiesOf('Pickers', module).add('PhotoshopPicker', function () {
  return React.createElement(
    SyncColorField,
    { component: Photoshop },
    renderWithKnobs(Photoshop)
  );
});