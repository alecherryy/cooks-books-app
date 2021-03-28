import React from 'react';

import { Constrain } from '../../layouts/Constrain/Constrain';
import { FormItem } from './FormItem';

/**
 * Example Component: Form Item
 */
export default {
  title: 'Example/FormItem',
  component: FormItem,
};

const Template = (args) => <Constrain modifierClasses="constrain--narrow">
  <FormItem type="text" placeholder="Text" />
  <FormItem type="email" placeholder="Email" />
  <FormItem type="textarea" value="Some text in the textarea" />
</Constrain>;

// Default Form Item
export const Default = Template.bind({});
