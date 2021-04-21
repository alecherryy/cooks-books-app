import React from 'react';
import { RecipeReviews } from './RecipeReviews';

/**
 * Sample RecipeReviews component.
 */
export default {
  title: 'Example/RecipeReviews',
  component: RecipeReviews,
};

const Template = (args) => <RecipeReviews {...args} />;

export const Default = Template.bind({});
