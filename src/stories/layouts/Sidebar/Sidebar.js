import './styles.scss';

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component for sidebar element.
 *
 * @component
 * @param {string} modifierClasses Class modifiers of the component.
 * @param {node} asideContent Left content of the component.
 * @param {node} mainContent Right content of the component.
 * @return {object} (
 *   <Sidebar modifierClasses={modifierClasses} />
 *      {asideContent}
 *      {mainContent}
 *   </Sidebar>
 * )
 */

export const Sidebar = ({ modifierClasses, asideContent, mainContent }) => {
  return (
    <div
      className={['sidebar', `${modifierClasses}`].join(' ').trim()}
    >
      <div className="sidebar__aside">{asideContent}</div>
      <div className="sidebar__main">{mainContent}</div>
    </div>
  );
};

Sidebar.propTypes = {
  /**
   * Sidebar's modifier classes
   */
  modifierClasses: PropTypes.string,
  /**
   * Sidebar's sidebar content
   */
  asideContent: PropTypes.node,
  /**
   * Sidebar's main content
   */
  mainContent: PropTypes.node,
};

Sidebar.defaultProps = {
  modifierClasses: '',
  asideContent: '',
  mainContent: '',
};
