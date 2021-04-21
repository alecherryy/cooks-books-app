import firebase from '../firebase';

const USERS_COLLECTION = 'users';

/**
 * Create/Update a profile
 *
 * @param {string} userId id of the user
 * @param {object} fields an object with fields and their values
 * @return {object} a promise
 */
const setProfile = (userId, ...fields) => {
  return firebase.firestore().collection(USERS_COLLECTION).doc(userId).set(
    ...fields, { merge: true });
};

/**
 * Get a profile document
 *
 * @param {string} userId id of the user
 * @return {object} a promise
 */
const getProfile = (userId) => {
  return firebase.firestore().collection(USERS_COLLECTION).doc(userId).get();
};

/**
 * Subscribe to realtime updates on a profile
 *
 * @param {string} userId id of the user
 * @param {function} setProfile function to set the returned profile
 */
const getProfileUpdates = (userId, setProfile) => {
  firebase.firestore().collection(USERS_COLLECTION).doc(userId)
    .onSnapshot((doc) => {
      setProfile(doc.data());
    });
};

/**
 * Update profile of current user
 *
 * @param {string} userId id of the user
 * @param {object} profile to update
 * @return {object} updated user
 */
const updateProfile = (userId, profile) => {
  const doc = firebase.firestore().collection(USERS_COLLECTION)
    .doc(userId);
  // console.log(doc.data()); // eslint-disable-line no-console

  return doc.set(profile).data();
};

export const USERS = {
  setProfile,
  getProfile,
  getProfileUpdates,
  updateProfile,
};
