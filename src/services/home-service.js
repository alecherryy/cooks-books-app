import firebase from '../firebase';

const HOME_COLLECTION_NAME = 'home';
const HOME_COLLECTION = firebase.firestore().collection(HOME_COLLECTION_NAME);

/**
 * Create/Update a home variable (document)
 *
 * @param {string} key key of the document
 * @param {object} document a document with keys and values
 * @return {object} a promise
 */
const setHomeVariable = (key, ...document) => {
  return HOME_COLLECTION.doc(key).set(...document, { merge: true });
};

/**
 * Get a home variable (document)
 *
 * @param {string} key key of the document
 * @return {object} a promise
 */
const findHomeVariable = (key) => {
  return HOME_COLLECTION.doc(key).get();
};

// /**
//  * Subscribe to realtime updates on a profile
//  *
//  * @param {string} userId id of the user
//  * @param {function} setProfile function to set the returned profile
//  */
// const getUserUpdates = (userId, setProfile) => {
//   HOME.doc(userId)
//     .onSnapshot((doc) => {
//       setProfile(doc.data());
//     });
// };

export const HOME = {
  setHomeVariable,
  findHomeVariable,
};
