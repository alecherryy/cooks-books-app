import React from 'react';
import { MemoryRouter } from 'react-router';
import '../../../scss/styles.scss';
import { SearchPage } from './SearchPage';

/**
 * Example Component: Search Page
 */
export default {
  title: 'Example/SearchPage',
  component: SearchPage,
};

const Template = (args) => {
  return (
    <MemoryRouter initialEntries={['/search/jerusalem]']}>
      <SearchPage {...args} />
    </MemoryRouter>
  );
};


// Default search page
export const Default = Template.bind({});
