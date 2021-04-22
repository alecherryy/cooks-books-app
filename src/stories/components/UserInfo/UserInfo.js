import './styles.scss';

import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button/Button';
import { USERS } from '../../../services/user-service';
import { AuthContext } from '../AuthProvider/AuthProvider';

/**
 * Component for account info element.
 *
 * @component
 * @param {object} user information.
 * @return {object} (
 *   <UserInfo user={user} />
 * )
 */
export const UserInfo = ({ user }) => {
  const { currentUser } = useContext(AuthContext);
  const [cachedUser, setCachedUser] = useState(user);
  const [editing, setEditing] = useState(false);


  const updateUser = () => {
    USERS.updateUser(currentUser.uid, cachedUser).then((res) => {
      USERS.findUser(currentUser.uid).then((doc) => {
        setCachedUser(doc.data());
      });
    });
  };

  const isChef = cachedUser && cachedUser.userType === 'Chef';

  return (
    <div className="user-info">
      <div className="user-info__top">
        <h3 className="user-info__title">Personal Information</h3>
        <button className={[
          'user-info__button',
          editing ? 'is-editing' : '',
        ].join(' ').trim()}
        onClick={() => {
          setEditing(!editing);
          updateUser();
        }}
        >{ editing ? 'Update' : 'Edit'}</button>
      </div>
      <p>Below you can find your account information; you can update your login
        credentials, full name, etc, as well as delete your account.
      </p>
      <div className="user-info__item">
        <label className="user-info__label">Full Name</label>
        <input type="text" className="user-info__input"
          value={cachedUser.fullName ? cachedUser.fullName : ''}
          disabled={!editing}
          onChange={(e) => setCachedUser({
            ...cachedUser,
            fullName: e.target.value,
          })} />
      </div>
      <div className="user-info__item">
        <label className="user-info__label">Username</label>
        <input type="text" className="user-info__input"
          value={cachedUser.username}
          disabled={!editing}
          onChange={(e) => setCachedUser({
            ...cachedUser,
            username: e.target.value,
          })} />
      </div>
      <div className="user-info__item">
        <label className="user-info__label">Account Type</label>
        <select
          disabled={!editing}
          defaultValue={cachedUser.userType}
          onChange={(e) => setCachedUser({
            ...cachedUser,
            userType: e.target.value,
          })}
          className={[
            'user-info__input',
            'user-info__input--select'].join(' ').trim()
          }
        >
          <option value="Chef">Chef</option>
          <option value="Foodie">Foodie</option>
        </select>
      </div>
      { isChef &&
        <div className="user-info__item">
          <label className="user-info__label">Restaurant Name</label>
          <input type="text" className="user-info__input"
            value={cachedUser.restaurant}
            disabled={!editing}
            onChange={(e) => setCachedUser({
              ...cachedUser,
              restaurant: e.target.value,
            })} />
        </div>
      }
      <div className="user-info__item">
        <label className="user-info__label">{
          isChef ?
            'Restaurant Website' :
            'Website'
        }</label>
        <input type="url" className="user-info__input"
          value={cachedUser.website ? cachedUser.website : ''}
          disabled={!editing}
          onChange={(e) => setCachedUser({
            ...cachedUser,
            website: e.target.value,
          })} />
      </div>
      <DeleteUser handleClick={null} />
    </div>
  );
};

UserInfo.propTypes = {
  /**
   * UserInfo's user
   */
  user: PropTypes.object,
};

UserInfo.defaultProps = {
  user: {},
};

/**
 * Component for delete user element.
 *
 * @component
 * @param {object} user information.
 * @return {object} (
 *   <DeleteUser handleClick={handleClick} />
 * )
 */
const DeleteUser = ({ handleClick }) => {
  return (
    <div className="user-info__delete">
      <h3>Delete Account</h3>
      <p>By deleting your account, you will no longer have
      access to certain functionalities only available to logged in users;
      all your information will be deleted, including recipes,
      favorites and reviews.</p>
      <Button isButton={true} text="Delete Account" onClick={handleClick} />
    </div>
  );
};

DeleteUser.propTypes = {
  /**
   * DeleteUser's handleClick
   */
  handleClick: PropTypes.func,
};

DeleteUser.defaultProps = {
  handleClick: null,
};
