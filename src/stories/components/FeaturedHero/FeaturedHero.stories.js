import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { FeaturedHero } from './FeaturedHero';
import { Constrain } from '../../layouts/Constrain/Constrain';

/**
 * Sample FeaturedHero component.
 */
export default {
  title: 'Example/FeaturedHero',
  component: FeaturedHero,
};

const Template = (args) => {
  return (
    <MemoryRouter>
      <Constrain>
        <FeaturedHero {...args} />
      </Constrain>
    </MemoryRouter>
  );
};

// Default section title
export const Default = Template.bind({});
