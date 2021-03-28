import './styles.scss';

import React from 'react';
import PropTypes from 'prop-types';

import { Constrain } from '../Constrain/Constrain';
import Logo from '../../../images/logo.svg';
import { Link } from 'react-router-dom';

/**
 * Component for header element.
 *
 * @component
 * @param {string} modifierClasses Class modifiers of the component.
 * @param {node} rightContent right side content of the component.
 * @return {object} (
 *   <Header modifierClasses={modifierClasses} />
 *      {rightContent}
 *   </Header>
 * )
 */

export const Header = ({ modifierClasses, rightContent }) => {
  return (
    <header
      className={['header', `${modifierClasses}`].join(' ').trim()}
    >
      <Constrain modifierClasses='constrain--wide'>
        <div className='header__inner'>
          <div className='header__left'>
            <Link to="/">
              <img className='section-title__img'
                src={Logo}
                alt='logo-img'/>
            </Link>
          </div>
          <div className='header__right'>
            {rightContent}
          </div>
        </div>
      </Constrain>
    </header>
  );
};

Header.propTypes = {
  /**
   * Header's modifier classes
   */
  modifierClasses: PropTypes.string,
  /**
   * Header's right-content
   */
  rightContent: PropTypes.node,
};

Header.defaultProps = {
  modifierClasses: '',
  rightContent: 'content goes here.',
};
