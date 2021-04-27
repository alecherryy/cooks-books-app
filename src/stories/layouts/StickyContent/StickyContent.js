import './styles.scss';

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component for sticky content element.
 *
 * @component
 * @param {node} children Content of the component.
 * @return {object} (
 *   <StickyContent>
 *      {children}
 *   </StickyContent>
 * )
 */

export const StickyContent = ({ children }) => {
  return (
    <div className="sticky-content">
      {children}
    </div>
  );
};

StickyContent.propTypes = {
  /**
   * StickyContent's content
   */
  children: PropTypes.node,
};

StickyContent.defaultProps = {
  children: '',
};
