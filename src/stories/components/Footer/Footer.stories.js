import React from 'react';
import { MemoryRouter } from 'react-router-dom';

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
    <MemoryRouter>
      <Footer {...args} />
    </MemoryRouter>
  );
};

// Default Footer
export const Default = Template.bind({});
Default.args = {
  modifierClasses: '',
};
