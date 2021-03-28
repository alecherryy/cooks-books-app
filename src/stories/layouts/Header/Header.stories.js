import React from 'react';
import { MemoryRouter } from 'react-router';

import { Header } from './Header';

/**
 * Example Component: Header
 */
export default {
  title: 'Example/Header',
  component: Header,
};

const Template = (args) => {
  return (
    <MemoryRouter>
      <Header {...args} />
    </MemoryRouter>
  );
};

// Default Header
export const Default = Template.bind({});
Default.args = {
  modifierClasses: '',
  rightContent: 'This is header right-content.',
};
