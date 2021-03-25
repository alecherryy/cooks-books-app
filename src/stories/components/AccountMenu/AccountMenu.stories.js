import React from 'react';
import { AccountMenu } from './AccountMenu';

/**
 * Example Component: Account Menu
 */
export default {
  title: 'Example/AccountMenu',
  component: AccountMenu,
};

const Template = (args) => <AccountMenu {...args} />;

// Default AccountMenu
export const Default = Template.bind({});
Default.args = {
  username: 'Alessia',
};
