import React from 'react';
import { MemoryRouter } from 'react-router';
import '../../../scss/styles.scss';
import { Login } from './Login';

/**
 * Example Component: Login
 */
export default {
  title: 'Example/Login',
  component: Login,
};

const Template = (args) => {
  return (
    <MemoryRouter initialEntries={['/login']}>
      <Login {...args} />
    </MemoryRouter>
  );
};

// Default Login
export const Default = Template.bind({});
