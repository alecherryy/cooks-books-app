import './styles.scss';

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component for split section layout element.
 *
 * @param {string} modifierClasses of the component
 * @param {node} children of the component
 * @return {object} (
 *   <SplitSection modifierClasses={modifierClasses}>
 *      {children}
 *    </SplitSection>
 * )
 */

export const SplitSection = ({ children, modifierClasses }) => {
  return (
    <div className={['split-section', modifierClasses]
      .join(' ').trim()}>
      {children}
    </div>
  );
};

SplitSection.propTypes = {
  /**
   * SplitSection's children
   */
  children: PropTypes.node,
  /**
   * SplitSection's modifierClasses
   */
  modifierClasses: PropTypes.string,
};

SplitSection.defaultProps = {
  children: '',
};
