import React from 'react';
import { Teaser } from './Teaser';

import { Grid } from '../../layouts/Grid/Grid';
import { Constrain } from '../../layouts/Constrain/Constrain';

/**
 * Example Component: Teaser
 */
export default {
  title: 'Example/Teaser',
  component: Teaser,
};

const Template = (args) => <Constrain modifierClasses="constrain--wide">
  <Grid numColumns={4}>
    <Teaser {...args} />
  </Grid>
</Constrain>;

// Default spinning featured image
export const Default = Template.bind({});
Default.args = {
  image: 'https://picsum.photos/id/122/300/350',
  url: '#',
  title: 'Creamy Steak Marinade Pasts',
  excerpt: 'Saperet dolorum commune ad vel, ' +
    'harum mnesarchum mei ad, ridens salutatus est et.',
  portions: 4,
  time: 25,
  rating: 3.8,
};
