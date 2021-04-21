import './styles.scss';

import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../../Auth';
import { USERS } from '../../../services/user-service';

/**
 * Functional Component for Account Menu
 *
 * @component
 * @return {object} (
 *  <AccountMenu />
 * )
*/
export const AccountMenu = () => {
  const { logout, currentUser } = useContext(AuthContext);
  const [profile, setProfile] = useState(null);
  const history = useHistory();

  useEffect(() => {
    if (currentUser) {
      // setError('');
      USERS.getProfile(currentUser.uid)
        .then((doc) => {
          setProfile(doc.data());
        })
        .catch((error) => {
          // setError(error);
        });
    }
  }, [currentUser]);

  // define menu items
  const menu = [
    { path: 'information', title: 'Your Information' },
    { path: 'favorites', title: 'Favorites' },
    { path: 'reviews', title: 'Reviews' },
    { path: 'people', title: 'People' },
  ];

  const handleLogout = () => {
    // setError('');
    logout().then(() => {
      history.push('/');
    }).catch((error) => {
      // setError(error);
    });
  };

  return (
    <div className="account-menu">
      <div className="account-menu__welcome">
        <span className="text-bold">Hello, </span>
        {profile && profile.username}.
      </div>
      <p>Welcome back. This is your account page with all the information
        you need.
      </p>
      <ul className="account-menu__menu">
        {
          menu.map((item, index) =>
            <MenuItem key={index} path={item.path} title={item.title} />,
          )
        }
        <li className="account-menu__item">
          <button className="account-menu__link account-menu__link--account"
            onClick={handleLogout}>
            <span className="account-menu__text">Logout</span>
          </button>
        </li>
      </ul>
    </div>
  );
};


/**
 * Partial for MenuItem component.
 *
 * @param {string} path of the menu item
 * @param {string} title of the menu item
 * @return {function} (
 *   <MenuItetm path={path} title={title} />
 * )
 */
const MenuItem = ({ path, title }) => {
  return (
    <li className="account-menu__item">
      <NavLink className={`account-menu__link account-menu__link--${path}`}
        to={`/account/${path}`}>
        <span className="account-menu__text">
          {title}
        </span>
      </NavLink>
    </li>
  );
};

MenuItem.propTypes = {
  /**
   * MenuItem's path
   */
  path: PropTypes.string.isRequired,
  /**
   * MenuItem's title
   */
  title: PropTypes.string.isRequired,
};

MenuItem.defaultProps = {
  path: '/',
  title: 'Title',
};
