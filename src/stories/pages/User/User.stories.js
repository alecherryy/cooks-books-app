import '../../../scss/styles.scss';

import React from 'react';

import { AuthProvider } from '../../components/AuthProvider/AuthProvider';
import { MemoryRouter } from 'react-router';
import { User } from './User';

/**
 * Example Component: User
 */
export default {
  title: 'Example/User',
  component: User,
};

const Template = (args) => {
  return (
    <MemoryRouter initialEntries={[
      '/user/SmoxSEx4H0d4nX1vK075BewfZmC3'
    ]}>
      <AuthProvider>
        <User {...args} />
      </AuthProvider>
    </MemoryRouter>
  );
};

// Default User
export const Default = Template.bind({});
