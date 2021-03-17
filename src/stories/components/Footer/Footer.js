import './styles.scss';

import React from 'react';
import PropTypes from 'prop-types';

import { Constrain } from '../../layouts/Constrain/Constrain';

/**
 * Component for footer element.
 *
 * @component
 * @param {string} modifierClasses Class modifiers of the component.
 * @return {object} (
 *   <Footer modifierClasses={modifierClasses} />
 *      {content}
 *   </Footer>
 * )
 */

export const Footer = ({ modifierClasses }) => {
  return (
    <div
      className={['footer', `${modifierClasses}`].join(' ').trim()}
    >
      <Constrain modifierClasses="constrain--wide">
        <a href="#">
          Privacy
        </a>
        <span className="footer__pipe">
          |
        </span>
        Follow this project on&nbsp;
        <a href="https://github.com/alecherryy/cooks-books-app">
          GitHub
        </a>
      </Constrain>
    </div>
  );
};

Footer.propTypes = {
  /**
   * Footer's modifier classes
   */
  modifierClasses: PropTypes.string,
};

Footer.defaultProps = {
  modifierClasses: '',
};
