import './styles.scss';

import React from 'react';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';

/**
 * Component for Main Menu element.
 *
 * @component
 * @param {string} modifierClasses Class modifiers of the component.
 * @return {object} (
 *   <MainMenu />
 * )
 */
export const MainMenu = () => {
  return (
    <ul className="main-menu">
      <li className="main-menu__item">
        <Link to="/search"
          className="main-menu__link main-menu__link--search">Search</Link>
      </li>
      <li className="main-menu__item">
        <Button url="/login" text="Login" />
      </li>
    </ul>
  );
};
