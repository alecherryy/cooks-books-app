import React from 'react';
import { UserReviews } from './UserReviews';

/**
 * Sample UserReviews component.
 */
export default {
  title: 'Example/UserReviews',
  component: UserReviews,
};

const Template = (args) => <UserReviews {...args} />;

export const Default = Template.bind({});
