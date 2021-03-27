import './styles.scss';

import React from 'react';
import { Constrain } from '../Constrain/Constrain';
import { Grid } from './Grid';

/**
 * Example Layout: Grid
 */
export default {
  title: 'Example/Grid',
  layout: Grid,
};

const Template = (args) => (
  <Constrain>
    <Grid
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
      <div className="grid__item">
        <h3>Test 3</h3>
        <p>Lorem ipsum dolor sit amet, aliquip pertinax intellegebat vel ad.
          Quo diceret comprehensam id, mazim labore instructior et mea.</p>
      </div>
      <div className="grid__item">
        <h3>Test 4</h3>
        <p>Lorem ipsum dolor sit amet, aliquip pertinax intellegebat vel ad.
          Quo diceret comprehensam id, mazim labore instructior et mea.</p>
      </div>
      <div className="grid__item">
        <h3>Test 5</h3>
        <p>Lorem ipsum dolor sit amet, aliquip pertinax intellegebat vel ad.
          Quo diceret comprehensam id, mazim labore instructior et mea.</p>
      </div>
      <div className="grid__item">
        <h3>Test 6</h3>
        <p>Lorem ipsum dolor sit amet, aliquip pertinax intellegebat vel ad.
          Quo diceret comprehensam id, mazim labore instructior et mea.</p>
      </div>
      <div className="grid__item">
        <h3>Test 7</h3>
        <p>Lorem ipsum dolor sit amet, aliquip pertinax intellegebat vel ad.
          Quo diceret comprehensam id, mazim labore instructior et mea.</p>
      </div>
      <div className="grid__item">
        <h3>Test 8</h3>
        <p>Lorem ipsum dolor sit amet, aliquip pertinax intellegebat vel ad.
          Quo diceret comprehensam id, mazim labore instructior et mea.</p>
      </div>
    </Grid>
  </Constrain>
);

// Grid Layout one column
export const OneColumn = Template.bind({});
OneColumn.args = {
  numColumns: 1,
};

// Grid Layout two columns
export const TwoColumn = Template.bind({});
TwoColumn.args = {
  numColumns: 2,
};

// Grid Layout three columns
export const ThreeColumn = Template.bind({});
ThreeColumn.args = {
  numColumns: 3,
};

// Grid Layout four columns
export const FourColumn = Template.bind({});
FourColumn.args = {
  numColumns: 4,
};

// Grid Layout two columns reversed
export const TwoColumnReversed = Template.bind({});
TwoColumnReversed.args = {
  numColumns: 2,
  reverse: true,
};
