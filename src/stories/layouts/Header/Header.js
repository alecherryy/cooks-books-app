import './styles.scss';

import React from 'react';
import PropTypes from 'prop-types';

import { Constrain } from '../Constrain/Constrain';

/**
 * Component for header element.
 *
 * @component
 * @param {string} modifierClasses Class modifiers of the component.
 * @param {node} content content of the component.
 * @return {object} (
 *   <Header modifierClasses={modifierClasses} />
 *      {content}
 *   </Header>
 * )
 */

export const Header = ({ modifierClasses, content }) => {
  return (
    <div
      className={['header', `${modifierClasses}`].join(' ').trim()}
    >
      <Constrain modifierClasses="constrain--wide">
        {content}
      </Constrain>
    </div>
  );
};

Header.propTypes = {
  /**
   * Header's modifier classes
   */
  modifierClasses: PropTypes.string,
  /**
   * Header's content
   */
  content: PropTypes.node,
};

Header.defaultProps = {
  modifierClasses: '',
  content: 'Content goes here.',
};
