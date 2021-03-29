import React from 'react';

import { Constrain } from '../../layouts/Constrain/Constrain';
import { Form } from './Form';
import { FormItem } from '../FormItem/FormItem';

/**
 * Example Component: Form
 */
export default {
  title: 'Example/Form',
  component: Form,
};

const Template = (args) => <Constrain modifierClasses="constrain--narrow">
  <Form {...args} >
    <FormItem />
    <FormItem />
  </Form>
</Constrain>;

// Default Form
export const Default = Template.bind({});
