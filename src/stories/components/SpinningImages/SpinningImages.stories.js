import React from 'react';
import { SpinningImages } from './SpinningImages';

/**
 * Example Component: SpinningImages
 */
export default {
  title: 'Example/SpinningImages',
  component: SpinningImages,
};

const Template = (args) => <SpinningImages {...args} />;

// Default spinning featured image
export const Default = Template.bind({});
