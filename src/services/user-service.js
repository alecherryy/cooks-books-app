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

/**
 * Delete user from the database
 *
 * @param {string} userId id of the user
 * @return {number} code
 */
const deleteUser = (userId) => {
  return ALL_USERS.doc(userId).delete().then(() => {
    return 200;
  }).catch((error) => {
    // do something
  });
};

/**
 * Find all users
 *
 * @return {number} code
 */
const findAllUsers = () => {
  return ALL_USERS.get().then((snapshot) => {
    return snapshot;
  });
};

export const USERS = {
  findAllUsers,
  findUser,
  updateUser,
  getUserUpdates,
  deleteUser,
};
