import React, { useContext, useEffect, useState } from 'react';
import { Route } from 'react-router';
import { useHistory } from 'react-router-dom';

import { AccountMenu } from '../../components/AccountMenu/AccountMenu';
import { AuthContext } from '../../components/AuthProvider/AuthProvider';
import { Constrain } from '../../layouts/Constrain/Constrain';
import { USERS } from '../../../services/user-service';
import { UserInfo } from '../../components/UserInfo/UserInfo';

/**
 * Component for Account page.
 *
 * @component
 * @return {object} (
 *   <Account />
 * )
 */

export const Account = () => {
  const { currentUser } = useContext(AuthContext);
  const [profile, setProfile] = useState(null);
  const history = useHistory();

  useEffect(() => {
    if (currentUser) {
      USERS.getUser(currentUser.uid).then((res) => {
        setProfile(res);
      });
      // .then((res) => {
      //   const user = res.data();
      //   user.email = currentUser.email;
      //   setProfile(user);
      // }).catch((error) => {
      //   // setError(error);
      // });
    }
  }, [currentUser]);

  useEffect(()=> {
    history.push('/account/information');
  });

  return (
    <div className="account">
      <Constrain>
        <div className="sidebar">
          <div className="sidebar__aside">
            { profile &&
              <AccountMenu username={profile.username ?
                profile.username :
                'Friend'
              }
              message="Lorem Ipsum for now" />
            }
          </div>
          <div className="sidebar__main">
            <h1>My Account</h1>
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
