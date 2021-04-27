import React from 'react';

import { Home } from './Home';
import { MemoryRouter } from 'react-router-dom';
import { AuthProvider } from '../../components/AuthProvider/AuthProvider';

/**
 * Example Component: Home
 */
export default {
  title: 'Example/Home',
  component: Home,
};

const Template = (args) => {
  return (
    <AuthProvider>
      <MemoryRouter>
        <Home {...args} />
      </MemoryRouter>
    </AuthProvider>
  );
};

// Home
export const Default = Template.bind({});
