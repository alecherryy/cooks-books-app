import React from 'react';
import { Footer } from './Footer';

/**
 * Example Component: Footer
 */
export default {
  title: 'Example/Footer',
  component: Footer,
};

const Template = (args) => {
  return (
    <Footer {...args} />
  );
};

// Default Footer
export const Default = Template.bind({});
Default.args = {
  modifierClasses: '',
  content: 'Footer content goes here',
};
