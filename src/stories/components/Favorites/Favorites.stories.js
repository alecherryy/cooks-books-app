import React from 'react';
import { Favorites } from './Favorites';

/**
 * Sample Favorites component.
 */
export default {
  title: 'Example/Favorites',
  component: Favorites,
};

const Template = (args) => <Favorites {...args} />;

export const Default = Template.bind({});
