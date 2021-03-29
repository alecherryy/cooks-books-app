import React from 'react';
import { MemoryRouter } from 'react-router';
import '../../../scss/styles.scss';
import { Signup } from './Signup';

/**
 * Example Component: Signup
 */
export default {
  title: 'Example/Signup',
  component: Signup,
};

const Template = (args) => {
  return (
    <MemoryRouter initialEntries={['/signup']}>
      <Signup {...args} />
    </MemoryRouter>
  );
};

// Default Signup
export const Default = Template.bind({});
