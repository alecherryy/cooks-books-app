import React, { useContext, useEffect, useState } from 'react';
import { Route } from 'react-router';
import { useHistory } from 'react-router-dom';

import { AccountMenu } from '../../components/AccountMenu/AccountMenu';
import { AuthContext } from '../../components/AuthProvider/AuthProvider';
import { Constrain } from '../../layouts/Constrain/Constrain';
import { USERS } from '../../../services/user-service';
import { UserInfo } from '../../components/UserInfo/UserInfo';
import { Favorites } from '../../components/Favorites/Favorites';
import { UserReviews } from '../../components/UserReviews/UserReviews';

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
  const [profile, setProfile] = useState();
  const history = useHistory();

  useEffect(() => {
    if (currentUser) {
      USERS.findUser(currentUser.uid).then((res) => {
        const data = res.data();
        setProfile({
          _id: currentUser.uid,
          data,
        });
      }).catch((error) => {
        // setError(error);
      });
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
              <AccountMenu username={profile && profile.data.username}
                message={'Welcome back. This is your account' +
                'page with all the information you need.'} />
            }
          </div>
          <div className="sidebar__main">
            <h1>My Account</h1>
            <p>In this page, you will find all information related
              to your account, favorite recipes, reviews you published
              and much more.
            </p>
            <Route exact path="/account/information">
              {profile &&
                <UserInfo user={profile} />
              }
            </Route>
            <Route exact path="/account/favorites">
              {profile &&
                <Favorites user={profile} />
              }
            </Route>
            <Route exact path="/account/reviews">
              {profile &&
                <UserReviews id={profile._id} />
              }
            </Route>
          </div>
        </div>
      </Constrain>
    </div>
  );
};
