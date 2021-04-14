import React from 'react';
import { Route, Switch } from 'react-router';
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
  return (
    <div className="account">
      <Constrain>
        <div className="sidebar">
          <div className="sidebar__aside">
            <AccountMenu username='Placeholder' message="Lorem Ipsum for now" />
          </div>
          <div className="sidebar__main">
            <Switch>
              <Route exact path="/account/information">
                Your account information.
              </Route>
            </Switch>
          </div>
        </div>
      </Constrain>
    </div>
  );
};
