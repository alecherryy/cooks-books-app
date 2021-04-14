import React, { useEffect } from 'react';
import { Route } from 'react-router';
import { useHistory } from 'react-router-dom';

import { AccountMenu } from '../../components/AccountMenu/AccountMenu';
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
            <Route exact path="/account/information">
              Your account information.
            </Route>
          </div>
        </div>
      </Constrain>
    </div>
  );
};
