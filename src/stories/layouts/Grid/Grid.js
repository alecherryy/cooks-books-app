import './styles.scss';

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component for grid layout element.
 *
 * @param {node} children of the component
 * @param {number} numColumns number of columns in layout.
 * @param {boolean} reverse reverse the direction of items
 * @return {object} (
 *   <Grid numColumns={numColumns} reverse={reverse}>
 *      {children}
 *    </Grid>
 * )
 */

export const Grid = ({ children, numColumns, reverse }) => {
  const numColumnsModifierClass = numColumns ? `grid--${numColumns}-col` : '';
  const reverseModifierClass = reverse ? `grid--reverse` : '';

  return (
    <div className={['grid', numColumnsModifierClass, reverseModifierClass]
      .join(' ').trim()}>
      {children}
    </div>
  );
};

Grid.propTypes = {
  /**
   * Grid's children
   */
  children: PropTypes.node,
  /**
   * Grid's number of columns
   */
  numColumns: PropTypes.number,
  /**
   * Grid items' direction
   */
  reverse: PropTypes.bool,
};

Grid.defaultProps = {
  children: '',
};
