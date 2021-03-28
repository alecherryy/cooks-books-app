import React from 'react';
import { MemoryRouter } from 'react-router';
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
    <MemoryRouter initialEntries={['/recipes/609262']}>
      <Recipe {...args} />
    </MemoryRouter>
  );
};

// Default Recipe
export const Default = Template.bind({});
