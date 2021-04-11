import './styles.scss';

import React from 'react';
import { SplitSection } from './SplitSection';

/**
 * Example Layout: SplitSection
 */
export default {
  title: 'Example/SplitSection',
  layout: SplitSection,
};

const Template = (args) => (
  <SplitSection
    numColumns={args.numColumns}
    reverse={args.reverse}>
    <div className="grid__item">
      <h3>Test 1</h3>
      <p>Lorem ipsum dolor sit amet, aliquip pertinax intellegebat vel ad.
        Quo diceret comprehensam id, mazim labore instructior et mea.</p>
    </div>
    <div className="grid__item">
      <h3>Test 2</h3>
      <p>Lorem ipsum dolor sit amet, aliquip pertinax intellegebat vel ad.
        Quo diceret comprehensam id, mazim labore instructior et mea.</p>
    </div>
  </SplitSection>
);

// SplitSection Layout
export const Default = Template.bind({});

// Reverse SplitSection Layout
export const Reverse = Template.bind({});
Reverse.args = {
  modifierClasses: 'split-section--reverse',
};
