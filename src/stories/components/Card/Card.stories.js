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
  image: 'https://picsum.photos/400/600',
  url: '#',
  title: 'This is a recipe title',
  description: 'Lorem ipsum dolor sit amet, errem postulant' +
    ' ei sea, an brute ocurreret sed.',
  portions: 4,
  time: 20,
  rating: 3.5,
};
