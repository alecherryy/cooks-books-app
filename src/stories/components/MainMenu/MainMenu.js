import './styles.scss';

import React, { useContext, useEffect, useState } from 'react';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Auth';
import database from '../../../services/firestore-service';

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
  // const [error, setError] = useState('');
  const { currentUser, logout } = useContext(AuthContext);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (currentUser) {
      // setError('');
      database.getProfile(currentUser.uid)
        .then((doc) => {
          setProfile(doc.data());
        })
        .catch((error) => {
          // setError(error);
        });
    }
  }, [currentUser]);

  const handleLogout = () => {
    // setError('');
    logout()
      .catch((error) => {
        // setError(error);
      });
  };

  return (
    <ul className="main-menu">
      <li className="main-menu__item">
        <Link to="/search"
          className="main-menu__link main-menu__link--search">Search</Link>
      </li>
      {
        currentUser ?
          <>
            <li className="main-menu__item">
              Welcome back,&nbsp;
              <strong>{profile ? profile.username : currentUser.email}</strong>
            </li>
            <li className="main-menu__item">
              <Button
                text="logout"
                isButton={true}
                onClick={handleLogout}
              />
            </li>
          </> :
          <>
            <li className="main-menu__item">
              Hello there, <strong>Stranger!</strong>
            </li>
            <li className="main-menu__item">
              <Button url="/login" text="Login"/>
            </li>
          </>
      }
    </ul>
  );
};
