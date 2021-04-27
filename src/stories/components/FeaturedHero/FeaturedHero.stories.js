import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { FeaturedHero } from './FeaturedHero';
import { Constrain } from '../../layouts/Constrain/Constrain';
import { AuthProvider } from '../AuthProvider/AuthProvider';

/**
 * Sample FeaturedHero component.
 */
export default {
  title: 'Example/FeaturedHero',
  component: FeaturedHero,
};

const Template = (args) => {
  return (
    <AuthProvider>
      <MemoryRouter>
        <Constrain>
          <FeaturedHero {...args} />
        </Constrain>
      </MemoryRouter>
    </AuthProvider>
  );
};

// Default section title
export const Default = Template.bind({});
