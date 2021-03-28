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

  // call function on component rendering
  useEffect(() => {
    makeElementSticky();

    let timeOut = false;
    window.onresize = function() {
      if (timeOut !== false) {
        clearTimeout(timeOut);
      }

      // 200 is time in miliseconds.
      timeOut = setTimeout(makeElementSticky, 200);
    };
  }, []);

  // check screen size and enable stickybitx
  const makeElementSticky = () => {
    if (window.innerWidth > 799) {
      stickybits(stickyEl.current, {
        stickyBitStickyOffset: 20,
        useStickyClasses: true,
      });
    } else {
      stickybits(stickyEl.current, {
        useStickyClasses: false,
      });
    }
  };

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
