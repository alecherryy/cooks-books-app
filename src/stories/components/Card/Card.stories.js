import React from 'react';

import { Card } from './Card';

/**
 * Example Component: Card
 */
export default {
  title: 'Example/Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

// Default card
export const Default = Template.bind({});
Default.args = {
  isFavorite: false,
  image: 'https://picsum.photos/id/247/300/500',
  url: '#',
  title: 'This is a recipe title',
  description: 'Lorem ipsum dolor sit amet, errem postulant' +
    ' ei sea, an brute ocurreret sed.',
  portions: 4,
  time: 20,
  rating: 3.5,
};

// Favorite card
export const Favorite = Template.bind({});
Favorite.args = {
  isFavorite: true,
  image: 'https://picsum.photos/id/248/300/500',
  url: '#',
  title: 'This is a favorite recipe title',
  description: 'Lorem ipsum dolor sit amet, errem postulant' +
    ' ei sea, an brute ocurreret sed.',
  portions: 4,
  time: 20,
  rating: 4.8,
};
