import React from 'react';
import { Instructions } from './Instructions';

/**
 * Sample Instructions component.
 */
export default {
  title: 'Example/Instructions',
  component: Instructions,
};

const Template = (args) => <Instructions {...args} />;

// Default Instructions
export const Default = Template.bind({});
Default.args = {
  steps: [
    {
      number: 1,
      step: 'A step goes here',
    },
  ],
};
