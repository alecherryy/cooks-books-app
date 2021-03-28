import React from 'react';
import { MemoryRouter } from 'react-router';
import { MainMenu } from './MainMenu';

/**
 * Sample MainMenu component.
 */
export default {
  title: 'Example/MainMenu',
  component: MainMenu,
};

const Template = (args) => <MemoryRouter>
  <MainMenu {...args} />
</MemoryRouter>;

// Default Main Menu
export const Default = Template.bind({});
