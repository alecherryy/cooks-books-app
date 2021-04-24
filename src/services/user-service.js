import firebase from '../firebase';

const USERS_COLLECTION = 'users';
const ALL_USERS = firebase.firestore().collection(USERS_COLLECTION);

/**
 * Create/Update a profile
 *
 * @param {string} userId id of the user
 * @param {object} user an object with fields and their values
 * @return {object} a promise
 */
const updateUser = (userId, ...user) => {
  return ALL_USERS.doc(userId).set(...user, { merge: true });
};

/**
 * Get a profile document
 *
 * @param {string} userId id of the user
 * @return {object} a promise
 */
const findUser = (userId) => {
  return ALL_USERS.doc(userId).get();
};

/**
 * Subscribe to realtime updates on a profile
 *
 * @param {string} userId id of the user
 * @param {function} setProfile function to set the returned profile
 */
const getUserUpdates = (userId, setProfile) => {
  ALL_USERS.doc(userId)
    .onSnapshot((doc) => {
      setProfile(doc.data());
    });
};

export const USERS = {
  findUser,
  updateUser,
  getUserUpdates,
};
