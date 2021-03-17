import React from 'react';
import { FeaturedCard } from './FeaturedCard';

/**
 * Example Component: FeaturedCard
 */
export default {
  title: 'Example/FeaturedCard',
  component: FeaturedCard,
};

const Template = (args) => <FeaturedCard {...args} />;

// Default spinning featured image
export const Default = Template.bind({});
Default.args = {
  image: 'https://picsum.photos/id/301/700/500',
  url: '#',
  title: 'Steamed Mussels in White Wine',
  eyebrow: 'Seafood',
};
