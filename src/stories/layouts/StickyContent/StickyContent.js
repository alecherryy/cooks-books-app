import './styles.scss';

import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import stickybits from 'stickybits/dist/stickybits';

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
  const stickyEl = useRef(null);

  useEffect(() => {
    stickybits(stickyEl.current);
  }, []);

  return (
    <div className="sticky-content" ref={stickyEl}>
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
