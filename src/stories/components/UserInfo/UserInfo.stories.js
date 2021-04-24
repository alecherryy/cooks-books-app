import React from 'react';
import { UserInfo } from './UserInfo';

import { Constrain } from '../../layouts/Constrain/Constrain';

/**
 * Example Component: UserInfo
 */
export default {
  title: 'Example/UserInfo',
  component: UserInfo,
};

const Template = (args) => <Constrain modifierClasses="constrain--narrow">
  <UserInfo {...args} />
</Constrain>;

// Default spinning featured image
export const Default = Template.bind({});
Default.args = {
  user: {
    fullName: 'Alessia Pizzoccheri',
    username: 'apizzoccheri',
    email: 'test@email.com',
    password: 'password',
    role: 'Chef',
  },
};
