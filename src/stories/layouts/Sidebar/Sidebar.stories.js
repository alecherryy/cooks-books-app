import React from 'react';
import '../../../scss/styles.scss';
import { Constrain } from '../Constrain/Constrain';
import { Sidebar } from './Sidebar';

/**
 * Example Component: Sidebar
 */
export default {
  title: 'Example/Sidebar',
  component: Sidebar,
};

const Template = (args) => {
  return (
    <Constrain>
      <Sidebar {...args} />
    </Constrain>
  );
};

// Left Sidebar
export const Default = Template.bind({});
Default.args = {
  modifierClasses: '',
  asideContent:
        <div>
          <h3>Sidebar Content</h3>
          <p>Lorem ipsum dolor sit amet, aliquip pertinax intellegebat
            vel ad.</p>
        </div>,
  mainContent:
        <div>
          <h3>Main Content</h3>
          <p>Lorem ipsum dolor sit amet, aliquip pertinax intellegebat vel ad.
            Quo diceret comprehensam id, mazim labore instructior et mea.
            Lorem ipsum dolor sit amet, aliquip pertinax intellegebat vel ad.
            Quo diceret comprehensam id, mazim labore instructior et mea.
            Lorem ipsum dolor sit amet, aliquip pertinax intellegebat vel ad.
            Quo diceret comprehensam id, mazim labore instructior et mea.</p>
          <p>Lorem ipsum dolor sit amet, aliquip pertinax intellegebat vel ad.
            Quo diceret comprehensam id, mazim labore instructior et mea.
            Lorem ipsum dolor sit amet, aliquip pertinax intellegebat vel ad.
            Quo diceret comprehensam id, mazim labore instructior et mea.
            Lorem ipsum dolor sit amet, aliquip pertinax intellegebat vel ad.
            Quo diceret comprehensam id, mazim labore instructior et mea.</p>
        </div>,
};

// Right Sidebar
export const Reverse = Template.bind({});
Reverse.args = {
  modifierClasses: 'sidebar--reverse',
  asideContent:
        <div>
          <h3>Main Content</h3>
          <p>Lorem ipsum dolor sit amet, aliquip pertinax intellegebat vel ad.
            Quo diceret comprehensam id, mazim labore instructior et mea.
            Lorem ipsum dolor sit amet, aliquip pertinax intellegebat vel ad.
            Quo diceret comprehensam id, mazim labore instructior et mea.
            Lorem ipsum dolor sit amet, aliquip pertinax intellegebat vel ad.
            Quo diceret comprehensam id, mazim labore instructior et mea.</p>
          <p>Lorem ipsum dolor sit amet, aliquip pertinax intellegebat vel ad.
            Quo diceret comprehensam id, mazim labore instructior et mea.
            Lorem ipsum dolor sit amet, aliquip pertinax intellegebat vel ad.
            Quo diceret comprehensam id, mazim labore instructior et mea.
            Lorem ipsum dolor sit amet, aliquip pertinax intellegebat vel ad.
            Quo diceret comprehensam id, mazim labore instructior et mea.</p>
        </div>,
  mainContent:
        <div>
          <h3>Sidebar Content</h3>
          <p>Lorem ipsum dolor sit amet, aliquip pertinax intellegebat
            vel ad.</p>
        </div>,
};
