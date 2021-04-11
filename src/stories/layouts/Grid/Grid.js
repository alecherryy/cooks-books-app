import './styles.scss';

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component for grid layout element.
 *
 * @param {string} modifierClasses of the component
 * @param {node} children of the component
 * @param {number} numColumns number of columns in layout.
 * @return {object} (
 *   <Grid numColumns={numColumns} modifierClasses={modifierClasses}>
 *      {children}
 *    </Grid>
 * )
 */

export const Grid = ({ children, numColumns, modifierClasses }) => {
  const numColumnsModifierClass = numColumns ? `grid--${numColumns}-col` : '';

  return (
    <div className={['grid', numColumnsModifierClass, modifierClasses]
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
   * Grid's modifierClasses
   */
  modifierClasses: PropTypes.string,
};

Grid.defaultProps = {
  children: '',
};
