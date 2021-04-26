import React from 'react';
import { MemoryRouter } from 'react-router';
import { AuthProvider } from '../../components/AuthProvider/AuthProvider';
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
      <AuthProvider>
        <Account {...args} />
      </AuthProvider>
    </MemoryRouter>
  );
};

// Default Account
export const Default = Template.bind({});
