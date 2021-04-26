import React from 'react';

import { Stats } from './Stats';
import { Constrain } from '../../layouts/Constrain/Constrain';

/**
 * Sample Stats component.
 */
export default {
  title: 'Example/Stats',
  component: Stats,
};

const Template = (args) => {
  return (
    <Constrain>
      <Stats {...args} />
    </Constrain>
  );
};

// Default section title
export const Default = Template.bind({});
