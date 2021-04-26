import './styles.scss';

import React, { useContext, useEffect, useState } from 'react';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { USERS } from '../../../services/user-service';

/**
 * Component for Main Menu element.
 *
 * @component
 * @return {object} (
 *   <MainMenu />
 * )
 */
export const MainMenu = () => {
  // const [error, setError] = useState('');
  const { currentUser } = useContext(AuthContext);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (currentUser) {
      // setError('');
      USERS.findUser(currentUser.uid)
        .then((doc) => {
          setProfile(doc.data());
        })
        .catch((error) => {
          // setError(error);
        });
    }
  }, [currentUser]);

  return (
    <ul className="main-menu">
      {
        currentUser ?
          <li className="main-menu__item">
            Welcome back,&nbsp;
            <strong>{profile && profile.username ?
              profile.username :
              'Friend'
            }</strong>!
          </li> :
          <li className="main-menu__item">
            Hello there,&nbsp;
            <strong>Stranger</strong>!
          </li>
      }
      <li className="main-menu__item">
        <Link to="/search"
          className="main-menu__link main-menu__link--search">Search</Link>
      </li>
      {
        currentUser && profile && profile.userType === 'Chef' &&
        <li className="main-menu__item">

          <Link to="/add-recipe"
            className="main-menu__link main-menu__link--add">Add a Recipe</Link>
        </li>
      }
      <li className="main-menu__item">
        {
          currentUser ?
            <Button url="/account/information" text="My Account"/> :
            <Button url="/login" text="Login"/>
        }
      </li>
    </ul>
  );
};
