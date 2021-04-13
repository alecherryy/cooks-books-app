import './styles.scss';

import React, { useContext } from 'react';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Auth';

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
  const { currentUser } = useContext(AuthContext);
  return (
    <ul className="main-menu">
      <li className="main-menu__item">
        <Link to="/search"
          className="main-menu__link main-menu__link--search">Search</Link>
      </li>
      <li className="main-menu__item">
        { currentUser === null ?
          <Button url="/login" text="Login" /> :
          <Button url="/" text="My Account" />
        }
      </li>
    </ul>
  );
};
