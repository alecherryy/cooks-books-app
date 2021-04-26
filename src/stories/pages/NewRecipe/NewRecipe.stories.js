import React from 'react';
import { AuthProvider } from '../../components/AuthProvider/AuthProvider';
import { NewRecipe } from './NewRecipe';

/**
 * Sample NewRecipe component.
 */
export default {
  title: 'Example/NewRecipe',
  component: NewRecipe,
};

const Template = (args) =>
  <AuthProvider>
    <NewRecipe />
  </AuthProvider>;

export const Default = Template.bind({});
Default.args = {
  // no args
};
