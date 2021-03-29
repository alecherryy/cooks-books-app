import React from 'react';

import { Home } from './Home';
import { MemoryRouter } from 'react-router-dom';

/**
 * Example Component: Home
 */
export default {
  title: 'Example/Home',
  component: Home,
};

const Template = (args) => {
  return (
    <MemoryRouter>
      <Home {...args} />
    </MemoryRouter>
  );
};

// Home
export const Default = Template.bind({});
