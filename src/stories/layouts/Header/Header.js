import './styles.scss';

import React from 'react';
import PropTypes from 'prop-types';

import { Constrain } from '../Constrain/Constrain';

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
    <div
      className={['header', `${modifierClasses}`].join(' ').trim()}
    >
      <Constrain modifierClasses="constrain--wide">
        <div className="header__inner">
          <div className='header__left'>
            CookBooks Logo here
          </div>
          <div className='header__right'>
            {rightContent}
          </div>
        </div>
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
   * Header's right-content
   */
  rightContent: PropTypes.node,
};

Header.defaultProps = {
  modifierClasses: '',
  rightContent: 'content goes here.',
};
