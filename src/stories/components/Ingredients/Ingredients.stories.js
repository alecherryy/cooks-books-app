import React from 'react';
import { Ingredients } from './Ingredients';

/**
 * Sample Ingredients component.
 */
export default {
  title: 'Example/Ingredients',
  component: Ingredients,
};

const Template = (args) => <Ingredients {...args} />;

// Default Ingredients
export const Default = Template.bind({});
Default.args = {
  ingredients: [],
};
