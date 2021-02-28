import React from 'react';
import { Button } from './Button';

/**
 * Example Component: Button
 */
export default {
  title: 'Example/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

// Default button
export const Default = Template.bind({});
Default.args = {
  modifierClasses: '',
  url: '#',
  text: 'Default Button',
};

// Red button
export const Red = Template.bind({});
Red.args = {
  modifierClasses: 'button--red',
  url: '#',
  text: 'Red Button',
};

// Red button
export const Blue = Template.bind({});
Blue.args = {
  modifierClasses: 'button--blue',
  url: '#',
  text: 'Blue Button',
};

// Purple button
export const Purple = Template.bind({});
Purple.args = {
  modifierClasses: 'button--purple',
  url: '#',
  text: 'Purple Button',
};
