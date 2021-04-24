import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import firebase from '../../../firebase';

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
    firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);

  const signup = (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  };

  const login = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  };

  const logout = () => {
    return firebase.auth().signOut();
  };

  const value = {
    currentUser,
    signup,
    login,
    logout,
  };

  return (
    <AuthContext.Provider
      value={value}
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
