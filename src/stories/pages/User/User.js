import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { Constrain } from '../../layouts/Constrain/Constrain';
import { Sidebar } from '../../layouts/Sidebar/Sidebar';
import { USERS } from '../../../services/user-service';
import { UserReviews } from '../../components/UserReviews/UserReviews';
import { Information } from '../../components/Information/Information';

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
  });

  return (
    <div className="user">
      <Constrain>
        <Sidebar
          asideContent={<Information user={profile} />}
          mainContent={<Content />} />
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
const Content = () => {
  const { userId } = useParams();

  return (
    <UserReviews id={userId} />
  );
};
