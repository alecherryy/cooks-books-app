import React from 'react';
import { SearchPage } from './SearchPage';

/**
 * Example Component: Search Page
 */
export default {
  title: 'Example/SearchPage',
  component: SearchPage,
};

const Template = (args) => <SearchPage {...args} />;

// Default search page
export const Default = Template.bind({});
Default.args = {
  test: 'default',
};
