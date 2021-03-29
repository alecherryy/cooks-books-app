import React from 'react';
import { MemoryRouter } from 'react-router';
import '../../../scss/styles.scss';
import { Search } from './Search';

/**
 * Example Component: Search Page
 */
export default {
  title: 'Example/SearchPage',
  component: Search,
};

const Template = (args) => {
  return (
    <MemoryRouter initialEntries={['/search/jerusalem']}>
      <Search {...args} />
    </MemoryRouter>
  );
};

// Default search page
export const Default = Template.bind({});
