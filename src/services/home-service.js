import firebase from '../firebase';

const HOME_COLLECTION = 'home';
const HOME_REF = firebase.firestore().collection(HOME_COLLECTION);

/**
 * Create/Update a home variable (document)
 *
 * @param {string} key key of the document
 * @param {object} document a document with keys and values
 * @return {object} a promise
 */
const setHomeVariable = (key, ...document) => {
  return HOME_REF.doc(key).set(...document, { merge: true });
};

/**
 * Get a home variable (document)
 *
 * @param {string} key key of the document
 * @return {object} a promise
 */
const findHomeVariable = (key) => {
  return HOME_REF.doc(key).get();
};


export const HOME = {
  setHomeVariable,
  findHomeVariable,
};
