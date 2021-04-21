import React from 'react';
import { MemoryRouter } from 'react-router';
import '../../../scss/styles.scss';
import { Account } from './Account';

/**
 * Example Component: Account
 */
export default {
  title: 'Example/Account',
  component: Account,
};

const Template = (args) => {
  return (
    <MemoryRouter initialEntries={['/account/information']}>
      <Account {...args} />
    </MemoryRouter>
  );
};

// Default Account
export const Default = Template.bind({});
