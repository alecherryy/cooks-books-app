import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import PropTypes from 'prop-types';

import { Constrain } from '../../layouts/Constrain/Constrain';
import { Sidebar } from '../../layouts/Sidebar/Sidebar';
import { USERS } from '../../../services/user-service';
import { UserReviews } from '../../components/UserReviews/UserReviews';
import { Information } from '../../components/Information/Information';
import { Favorites } from '../../components/Favorites/Favorites';
import { Fragment } from 'react';

/**
 * Component for User page.
 *
 * @component
 * @return {object} (
 *   <User />
 * )
 */
export const User = () => {
  const { userId } = useParams();
  const [profile, setProfile] = useState(null);

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
  }, []);

  return (
    <div className="user">
      <Constrain>
        <Sidebar
          asideContent={<Information user={profile} />}
          mainContent={<Content user={profile} />} />
      </Constrain>
    </div>
  );
};

/**
 * Main content of the User page.
 *
 * @component
 * @return {object} (
 *   <Content />
 * )
 */
const Content = ({ user }) => {
  const { userId } = useParams();

  return (
    <Fragment>
      <Favorites user={user} />
      <UserReviews id={userId} />
    </Fragment>
  );
};


Content.propTypes = {
  /**
   * Favorites's user.
   */
  user: PropTypes.object,
};

Content.defaultProps = {
  user: null,
};
