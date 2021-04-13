import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import fire from './firebase';

/**
 * A context to be used by components in the tree, holds
 * the logged in user.
 */
export const AuthContext = React.createContext();

/**
 * A class for an AuthProvider, handles getting user login
 * using firebase authentication.
 *
 * @param {node} children
 * @return {object} (
 *  <AuthProvider>
 *    {children}
 *  </AuthProvider>
 * )
 */
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fire.auth().onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  /**
   * AuthProvider's children
   */
  children: PropTypes.node,
};
