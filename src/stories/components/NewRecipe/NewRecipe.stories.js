import React from 'react';
import { NewRecipe } from './NewRecipe';

/**
 * Sample NewRecipe component.
 */
export default {
  title: 'Example/NewRecipe',
  component: NewRecipe,
};

const Template = (args) => <NewRecipe />;

export const Default = Template.bind({});
Default.args = {
  // no args
};
