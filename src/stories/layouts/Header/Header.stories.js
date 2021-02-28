import React from 'react';

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
    <Header {...args} />
  );
};

// Default Header
export const Default = Template.bind({});
Default.args = {
  modifierClasses: '',
  content: 'This is the header content.',
};
