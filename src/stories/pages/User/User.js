import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { Constrain } from '../../layouts/Constrain/Constrain';
import { Sidebar } from '../../layouts/Sidebar/Sidebar';
import { USERS } from '../../../services/user-service';

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
        <Sidebar mainContent={profile.username} />
      </Constrain>
    </div>
  );
};
