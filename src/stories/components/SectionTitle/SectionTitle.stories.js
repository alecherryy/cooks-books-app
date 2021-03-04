import React from 'react';
import { SectionTitle } from './SectionTitle';

/**
 * Sample SectionTitle component
 */
export default {
  title: 'Example/SectionTitle',
  imagePath: 'brokenfornow.png',
  paragraph: 'lorem ipsum et cetera',
  svgPath: 'brokenalsofornow.png',
  component: SectionTitle,
};

const Template = (args) => <SectionTitle {...args} />;

// Default section title
export const Default = Template.bind({});
Default.args = {
  modifierClasses: '',
  url: '#',
  title: 'Default Title',
  imagePath: '',
  paragraph: '',
  svgPath: '',
};
