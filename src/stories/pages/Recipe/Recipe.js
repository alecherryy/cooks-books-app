import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component for Recipe page.
 *
 * @component
 * @param {string} modifierClasses Class modifiers of the component.
 * @return {object} (
 *   <Recipe modifierClasses={modifierClasses} />
 *      {asideContent}
 *      {mainContent}
 *   </Recipe>
 * )
 */

export const Recipe = ({ modifierClasses, asideContent, mainContent }) => {
  return (
    <div className="recipe">
    </div>
  );
};

Recipe.propTypes = {
  /**
   * Recipe's modifier classes
   */
  modifierClasses: PropTypes.string,
  /**
   * Recipe's sidebar content
   */
  asideContent: PropTypes.node,
  /**
   * Recipe's main content
   */
  mainContent: PropTypes.node,
};

Recipe.defaultProps = {
  modifierClasses: '',
  asideContent: '',
  mainContent: '',
};
