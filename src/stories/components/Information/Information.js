import './styles.scss';

import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import ArtDessert from '../../../images/artwork-dessert.svg';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

/**
 * Functional Component for user Information
 * @param {object} user of the user
 * @component
 * @return {object} (
 *  <Information user={user} />
 * )
*/

export const Information = ({ user }) => {
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      { user &&
        <div className="information">
          <img className="information__img"
            src={ArtDessert} alt="Decorative Graphics"/>
          <h4>{user.data.fullName}</h4>
          <p>@{user.data.username}</p>
          <div className="information__bottom">
            <h6>Account Type</h6>
            <p>{user.data.userType}</p>
            {user.data.userType === 'Chef' &&
              <>
                <h6>Restaurant</h6>
                <p>{user.data.restaurant ? user.data.restaurant :
                  'Sorry, there is nothing here.'
                }</p>
              </>
            }
            <h6>Website</h6>
            { user.data.website ?
              <a href={user.data.website} target="_blank" rel="noreferrer">
                {user.data.website}
              </a> :
              <p>Sorry, there is nothing here.</p>
            }
          </div>
        </div>
      }
      { !currentUser &&
        <p>Don&apos;t have an account yet?
          <NavLink to="signup">Create one now.</NavLink>
        </p>
      }
    </>
  );
};

Information.propTypes = {
  /**
   * Information's user.
   */
  user: PropTypes.object,
};

Information.defaultProps = {
  user: null,
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
    <li className="information__item">
      <NavLink className={`information__link information__link--${path}`}
        to={`/account/${path}`}>
        <span className="information__text">
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
