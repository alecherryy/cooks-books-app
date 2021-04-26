import React from 'react';

import { MemoryRouter } from 'react-router';
import { Sidebar } from '../../layouts/Sidebar/Sidebar';
import { AuthProvider } from '../AuthProvider/AuthProvider';
import { Information } from './Information';

/**
 * Example Component: Account Menu
 */
export default {
  title: 'Example/Information',
  component: Information,
};

const Template = (args) => <MemoryRouter>
  <AuthProvider>
    <Sidebar
      asideContent={<Information {...args} />}
      mainContent='Main content goes here'
    />
  </AuthProvider>
</MemoryRouter>;

// Default Information
export const Default = Template.bind({});
Default.args = {
  username: 'Alessia',
};
