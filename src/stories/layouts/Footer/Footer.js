import './styles.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Constrain } from '../Constrain/Constrain';

/**
 * Component for footer element.
 *
 * @component
 * @param {string} modifierClasses Class modifiers of the component.
 * @return {object} (
 *   <Footer modifierClasses={modifierClasses} />
 * )
 */

export const Footer = ({ modifierClasses }) => {
  return (
    <div
      className={['footer', `${modifierClasses}`].join(' ').trim()}
    >
      <Constrain modifierClasses="constrain--wide">
        <Link className="footer__link" to="/privacy">
          Privacy
        </Link>
        Follow this project on&nbsp;
        <a href="https://github.com/alecherryy/cooks-books-app"
          rel="noreferrer" target="_blank">
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
