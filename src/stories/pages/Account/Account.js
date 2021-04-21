import React, { useEffect } from 'react';
import { Route } from 'react-router';
import { useHistory } from 'react-router-dom';

import { AccountMenu } from '../../components/AccountMenu/AccountMenu';
import { UserInfo } from '../../components/UserInfo/UserInfo';
import { Constrain } from '../../layouts/Constrain/Constrain';

/**
 * Component for Account page.
 *
 * @component
 * @return {object} (
 *   <Account />
 * )
 */

export const Account = () => {
  const history = useHistory();

  useEffect(()=> {
    history.push('/account/information');
  });

  return (
    <div className="account">
      <Constrain>
        <div className="sidebar">
          <div className="sidebar__aside">
            <AccountMenu username='Placeholder' message="Lorem Ipsum for now" />
          </div>
          <div className="sidebar__main">
            <h1>My Account</h1>
            <p>In this page, you will find all information related
              to your account, favorite recipes, reviews you have posted
              and much more.
            </p>
            <Route exact path="/account/information">
              <UserInfo />
            </Route>
          </div>
        </div>
      </Constrain>
    </div>
  );
};
