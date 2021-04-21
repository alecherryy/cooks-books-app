import firebase from '../firebase';

const USERS_COLLECTION = 'users';
const RECIPES_COLLECTION = 'recipes';
const REVIEWS_COLLECTION = 'reviews';

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
 * Create/Update a recipe
 *
 * @param {string} recipeId id of the recipe, from spoonacular
 * @param {object} fields an object with fields and their values
 * @return {object} a promise
 */
const setRecipe = (recipeId, ...fields) => {
  return firebase.firestore().collection(RECIPES_COLLECTION).doc(recipeId).set(
    { ...fields, exists: 'yes' }, { merge: true });
  // need to add at least one field, o/w won't show up in snapshots
};

/**
 * Get a recipe document
 *
 * @param {string} recipeId id of the recipe
 * @return {object} a promise
 */
const getRecipe = (recipeId) => {
  return firebase.firestore().collection(RECIPES_COLLECTION)
    .doc(recipeId).get();
};


/**
 *
 * @param {string} recipeId the id of the recipe to add the review to
 * @param {object} review the review object to add
 * @return {object} a promise
 */
const addReviewToRecipe = (recipeId, review) => {
  return firebase.firestore().collection(RECIPES_COLLECTION).doc(recipeId)
    .collection(REVIEWS_COLLECTION).add(review);
};

/**
 *
 * @param {string} recipeId the id of the recipe to remove the review from
 * @param {string} reviewId the reviewId to remove
 * @return {object} a promise
 */
const removeReviewFromRecipe = (recipeId, reviewId) => {
  return firebase.firestore().collection(RECIPES_COLLECTION)
    .doc(reviewId).delete();
};

/**
 * Get reviews from a recipe document
 *
 * @param {string} recipeId id of the recipe
 * @return {object} a promise
 */
const getReviewsForRecipe = (recipeId) => {
  return firebase.firestore().collection(RECIPES_COLLECTION).doc(recipeId)
    .collection(REVIEWS_COLLECTION).get();
};

/**
 * Subscribe to realtime updates on a recipe
 *
 * @param {string} recipeId id of the recipe
 * @param {function} setRecipe function to set the returned recipe
 */
const getRecipeUpdates = (recipeId, setRecipe) => {
  firebase.firestore().collection(REVIEWS_COLLECTION).doc(recipeId)
    .onSnapshot((doc) => {
      setRecipe(doc.data());
    });
};

/**
 * Subscribe to realtime updates on a reviews of a recipe
 *
 * @param {string} recipeId id of the recipe
 * @param {function} setRecipe function to set the returned recipe
 */
const getReviewsForRecipeUpdates = (recipeId, setRecipe) => {
  firebase.firestore().collection(REVIEWS_COLLECTION).doc(recipeId)
    .collection(REVIEWS_COLLECTION)
    .onSnapshot((doc) => {
      setRecipe(doc.data());
    });
};


const api = {
  setProfile,
  getProfile,
  getProfileUpdates,
  setRecipe,
  getRecipe,
  addReviewToRecipe,
  removeReviewFromRecipe,
  getReviewsForRecipe,
  getRecipeUpdates,
  getReviewsForRecipeUpdates,
};

export default api;
