import './styles.scss';

import React, { useState } from 'react';
import PropTypes from 'prop-types';


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
  const menuOptions = [
    // TODO:, once we know how our pages are rigged up, username
    //   can be used in these to also have each option route to the
    //   proper component? That was my thought anyways.
    { key: 0, text: 'Account', iconClass: 'person' },
    { key: 1, text: 'Favorites', iconClass: 'heart' },
    { key: 2, text: 'Your Reviews', iconClass: 'list' },
    { key: 3, text: 'People', iconClass: 'two-people' },
    { key: 4, text: 'Logout', iconClass: 'logout' },
  ];

  const [currActive, setCurrActive] = useState(0);

  // const [activeOption, setActiveOption] = useState("ACCOUNT");
  return (
    <div className="account-menu">
      <div className="account-menu__welcome">
        <span className="account-menu__bold-hello">Hello, </span>
        {username}.
      </div>
      <div className="account-menu__message">{message}</div>
      {/* <br /><br /> */}
      {
        // map each option from the array of JSONs to the proper menu option
        menuOptions.map((option) =>
          <div key={option.key}

            // If currActive, also make text have active class
            className={`account-menu__option 
            ${option.key === currActive ? `account-menu__option--active` : ''}`}
            // to={`PROPER-PLACE-HERE`}
            onClick={() => setCurrActive(option.key)}>

            {/* If currActive, also make icon have active class */}
            <span className={`account-menu__icon 
            account-menu__icon--${option.iconClass}
            ${option.key === currActive ? 'account-menu__icon--active' : ''}`}>
            </span>

            {/* Display the option text TODO: use username to make link */}
            <span className="account-menu__option-text">{option.text}</span>
          </div>)
      }
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
