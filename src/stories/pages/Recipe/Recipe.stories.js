import React from 'react';
import { MemoryRouter } from 'react-router';
import '../../../scss/styles.scss';
import { AuthProvider } from '../../components/AuthProvider/AuthProvider';
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
    <AuthProvider>
      <MemoryRouter initialEntries={['/recipes/609262']}>
        <Recipe {...args} />
      </MemoryRouter>
    </AuthProvider>
  );
};

// Default Recipe
export const Default = Template.bind({});
