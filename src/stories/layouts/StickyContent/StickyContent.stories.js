import React from 'react';
import '../../../scss/styles.scss';
import { Constrain } from '../Constrain/Constrain';
import { StickyContent } from './StickyContent';

/**
 * Example Component: StickyContent
 */
export default {
  title: 'Example/StickyContent',
  component: StickyContent,
};

const Template = (args) => {
  return (
    <Constrain>
      <StickyContent>
        <h4>Sticky Content</h4>
        <p>Lorem ipsum dolor sit amet, cum justo repudiandae ei.
          Ius laoreet nominavi dissentias te, te nobis civibus ius. Qui
          cibo assum accusam ei. Veritus splendide quo ut. Id mel offendit
          volutpat, qui mutat volutpat eu.</p>
      </StickyContent>
    </Constrain>
  );
};

// Default StickyContent
export const Default = Template.bind({});
