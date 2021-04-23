import React, { useContext, useEffect, useState } from 'react';
import { Route, useParams } from 'react-router';
import { useHistory } from 'react-router-dom';

import { UserMenu } from '../../components/UserMenu/UserMenu';
import { AuthContext } from '../../components/AuthProvider/AuthProvider';
import { Constrain } from '../../layouts/Constrain/Constrain';
import { USERS } from '../../../services/user-service';
import { UserInfo } from '../../components/UserInfo/UserInfo';

/**
 * Component for User page.
 *
 * @component
 * @return {object} (
 *   <User />
 * )
 */

export const User = () => {
  const [userId] = useParams();
  const [profile, setProfile] = useState();

  useEffect(() => {
    USERS.findUser(userId).then((res) => {
      const data = res.data();
      setProfile({
        _id: userId,
        data,
      });
    }).catch((error) => {
      // setError(error);
    });
  });

  return (
    <div className="user">
      <Constrain>
        <div className="sidebar">
          <div className="sidebar__aside">
            { profile &&
              <UserMenu username={profile.username &&
                profile.username}
              message="Lorem Ipsum for now" />
            }
          </div>
          <div className="sidebar__main">
            <h3>Favorites</h3>
            <p>In this page, you will find all information related
              to your account, favorite recipes, reviews you have posted
              and much more.
            </p>
            <Route exact path="/account/information">
              {profile &&
                <UserInfo user={profile} />
              }
            </Route>
          </div>
        </div>
      </Constrain>
    </div>
  );
};
