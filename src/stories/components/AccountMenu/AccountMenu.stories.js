import React from 'react';

import { MemoryRouter } from 'react-router';
import { AuthProvider } from '../AuthProvider/AuthProvider';
import { Sidebar } from '../../layouts/Sidebar/Sidebar';
import { AccountMenu } from './AccountMenu';

/**
 * Example Component: Account Menu
 */
export default {
  title: 'Example/AccountMenu',
  component: AccountMenu,
};

const Template = (args) => <MemoryRouter>
  <AuthProvider>
    <Sidebar
      asideContent={<AccountMenu {...args} />}
      mainContent='Main content goes here'
    />
  </AuthProvider>
</MemoryRouter>;

// Default AccountMenu
export const Default = Template.bind({});
Default.args = {
  username: 'Alessia',
};
