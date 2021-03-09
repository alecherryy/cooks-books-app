import React from 'react';
import { SectionTitle } from './SectionTitle';

/**
 * Sample SectionTitle component.
 */
export default {
  title: 'Example/SectionTitle',
  component: SectionTitle,
};

const Template = (args) => <SectionTitle {...args} />;

// Default section title
export const Default = Template.bind({});
Default.args = {
  modifierClasses: '',
  url: '#',
  title: 'This is a Section Title',
  imagePath: 'https://picsum.photos/id/249/425/200',
  paragraph: `Type almpedit praesent honestatis mea ad
    nemore referrentur est ei, usu no omnium
    partiendo rationibus.`,
  svgClass: 'section-title__icon--placeholder',
};
