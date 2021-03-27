import React from 'react';
import '../../../scss/styles.scss';
import { Recipe } from './Recipe';

/**
 * Example Component: Recipe
 */
export default {
  title: 'Example/Recipe',
  component: Recipe,
};

const Template = (args) => {
  return (
    <Recipe {...args} />
  );
};

// Default Recipe
export const Default = Template.bind({});
