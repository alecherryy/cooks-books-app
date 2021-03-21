import React from 'react';
import { Carousel } from './Carousel';

/**
 * Example Component: Carousel
 */
export default {
  title: 'Example/Carousel',
  component: Carousel,
};

const Template = (args) => <Carousel {...args} />;

// Default carousel
export const Default = Template.bind({});
Default.args = {
  cards: [
    {
      isFavorite: false,
      url: '#',
      image: 'https://picsum.photos/id/429/300/500',
      title: 'Card title 1',
      description: 'Lorem ipsum dolor sit amet',
      portions: '4',
      time: '20',
      rating: '3.5',
    },
    {
      isFavorite: true,
      url: '#',
      image: 'https://picsum.photos/id/292/300/500',
      title: 'Card title 2',
      description: 'Lorem ipsum dolor sit amet',
      portions: '3',
      time: '35',
      rating: '4.0',
    },
    {
      isFavorite: false,
      url: '#',
      image: 'https://picsum.photos/id/517/300/500',
      title: 'Card title 3',
      description: 'Lorem ipsum dolor sit amet',
      portions: '2',
      time: '15',
      rating: '4.5',
    },
    {
      isFavorite: true,
      url: '#',
      image: 'https://picsum.photos/id/63/300/500',
      title: 'Card title 4',
      description: 'Lorem ipsum dolor sit amet',
      portions: '5',
      time: '75',
      rating: '4.7',
    },
    {
      isFavorite: true,
      url: '#',
      image: 'https://picsum.photos/id/674/300/500',
      title: 'Card title 5',
      description: 'Lorem ipsum dolor sit amet',
      portions: '2',
      time: '40',
      rating: '4.2',
    },
  ],
};
