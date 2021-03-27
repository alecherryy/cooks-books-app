import React from 'react';
import { Review } from './Review';

/**
 * Sample Review component.
 */
export default {
  title: 'Example/Review',
  component: Review,
};

const Template = (args) => <Review {...args} />;

export const Default = Template.bind({});
Default.args = {
  isUserVariant: false,
  modifierClasses: '',
  title: 'Sample Review Title',
  rating: 4,
  date: 'August 16, 1929',
  // date: new Date('August 16, 1929 06:00:00'),
  name: 'username',
  profUrl: '#',
  content:
    `Quaestio laboramus eum ex, dolorem electram ei duo. In iuvaret
    graecis vis, et mel noluisse insolens facilisis. At est postea iisque,
    patrioque liberavisse use ei, nam detraxit pericula at.`,
  recipeTitle: 'Sample Recipe Title',
  recipeLink: '#',
};
