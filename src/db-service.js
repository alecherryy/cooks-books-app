import firebase from './firebase';

const USERS_COLLECTION = 'users';

const setProfile = (userId, ...fields) => {
  return firebase.firestore().collection(USERS_COLLECTION).doc(userId).set(
    ...fields, { merge: true });
};

const getProfile = (userId) => {
  return firebase.firestore().collection(USERS_COLLECTION).doc(userId).get();
};

const getProfileUpdates = (userId, setProfile) => {
  return firebase.firestore().collection(USERS_COLLECTION).doc(userId)
    .onSnapshot((doc) => {
      setProfile(doc.data());
    });
};

const api = { setProfile, getProfile, getProfileUpdates };

export default api;
