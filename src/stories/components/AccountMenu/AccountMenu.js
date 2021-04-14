import './styles.scss';

import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


/**
 * Functional Component for Account Menu
 *
 * @component
 * @param {string} username Username for the AccountMenu
 * @param {string} message Possible variable message
 * @return {object} (
 *  <AccountMenu username={username} message={message} />
 * )
*/

export const AccountMenu = ({ username, message }) => {
  const menu = [
    { path: 'information', title: 'Your Information' },
    { path: 'favorites', title: 'Favorites' },
    { path: 'reviews', title: 'Reviews' },
    { path: 'people', title: 'People' },
    { path: 'logout', title: 'Logout' },
  ];

  // const [currActive, setCurrActive] = useState(0);

  // const [activeOption, setActiveOption] = useState("ACCOUNT");
  return (
    <div className="account-menu">
      <div className="account-menu__welcome">
        <span className="text-bold">Hello, </span>
        {username}.
      </div>
      <p>{message}</p>
      <ul className="account-menu__menu">
        {
          menu.map((item, index) =>
            <MenuItem key={index} path={item.path} title={item.title} />,
          )
        }
      </ul>
    </div>
  );
};

AccountMenu.propTypes = {
  /**
   * AccountMenu's username
   */
  username: PropTypes.string.isRequired,

  /**
   * AccountMenu's message, optional, there's a defaut message
   */
  message: PropTypes.string,
};

AccountMenu.defaultProps = {
  username: 'LogIn!',
  message: `Lorem ipsum dolor si amet, tollit accumsan expetanda.`,
};

const MenuItem = ({ path, title }) => {
  return (
    <li className="account-menu__item">
      <NavLink className={`account-menu__link account-menu__link--${path}`}
        to={`/account/${path}`}><span>{title}</span></NavLink>
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
