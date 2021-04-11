import React from 'react';

import { FeaturedImage } from './FeaturedImage';
import { Constrain } from '../../layouts/Constrain/Constrain';

/**
 * Sample FeaturedImage component.
 */
export default {
  title: 'Example/FeaturedImage',
  component: FeaturedImage,
};

const Template = (args) => {
  return (
    <Constrain>
      <FeaturedImage {...args} />
    </Constrain>
  );
};

// Default featured image
export const Default = Template.bind({});
Default.args = {
  image: 'https://picsum.photos/id/304/1200/600',
  alt: '#',
  title: 'Steamed Mussels in White Wine',
  excerpt: 'Lorem ipsum dolor sit amet, ex vis decore utamur, ' +
    'persequeris theophrastus eum at, vix eu illud legimus alienum.',
};
