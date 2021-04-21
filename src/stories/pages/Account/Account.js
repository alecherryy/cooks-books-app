import React, { useContext, useEffect, useState } from 'react';
import { Route } from 'react-router';
import { useHistory } from 'react-router-dom';

import { AccountMenu } from '../../components/AccountMenu/AccountMenu';
import { AuthContext } from '../../components/AuthProvider/AuthProvider';
import { Constrain } from '../../layouts/Constrain/Constrain';
import database from '../../../services/firestore-service';

/**
 * Component for Account page.
 *
 * @component
 * @return {object} (
 *   <Account />
 * )
 */

export const Account = () => {
  const currentUser = useContext(AuthContext);
  const [profile, setProfile] = useState(null);
  const history = useHistory();

  useEffect(() => {
    if (currentUser.currentUser) {
      database.getProfile(currentUser.currentUser.uid)
        .then((doc) => {
          setProfile(doc.data());
        })
        .catch((error) => {
          // setError(error);
        });
    }

    /* eslint-disable */
    console.log(profile);
  }, [currentUser]);

  useEffect(()=> {
    history.push('/account/information');
  });

  return (
    <div className="account">
      <Constrain>
        <div className="sidebar">
          <div className="sidebar__aside">
            <AccountMenu username={profile && profile.username ?
              profile.username :
              ''
            }
            message="Lorem Ipsum for now" />
          </div>
          <div className="sidebar__main">
            <Route exact path="/account/information">
              Your account information.
            </Route>
          </div>
        </div>
      </Constrain>
    </div>
  );
};
