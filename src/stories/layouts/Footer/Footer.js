import './styles.scss';

import React from 'react';
import PropTypes from 'prop-types';

import { Constrain } from '../Constrain/Constrain';

/**
 * Component for footer element.
 *
 * @component
 * @param {string} modifierClasses Class modifiers of the component.
 * @param {node} content content of the component.
 * @return {object} (
 *   <Footer modifierClasses={modifierClasses} />
 *      {content}
 *   </Footer>
 * )
 */

export const Footer = ({ modifierClasses, content }) => {
  return (
    <div
      className={['footer', `${modifierClasses}`].join(' ').trim()}
    >
      <Constrain modifierClasses="constrain--wide">
        {content}
      </Constrain>
    </div>
  );
};

Footer.propTypes = {
  /**
   * Footer's modifier classes
   */
  modifierClasses: PropTypes.string,
  /**
   * Footer's content
   */
  content: PropTypes.node,
};

Footer.defaultProps = {
  modifierClasses: '',
  content: 'Content goes here.',
};
