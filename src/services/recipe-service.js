import firebase from '../firebase';

const RECIPES_COLLECTION = 'recipes';
const REVIEWS_COLLECTION = 'reviews';

/**
 * Create/Update a recipe
 *
 * @param {string} recipeId id of the recipe, from spoonacular
 * @param {object} fields an object with fields and their values
 * @return {object} a promise
 */
const createRecipeFromSpoonId = (recipeId, ...fields) => {
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
const readRecipeById = (recipeId) => {
  return firebase.firestore().collection(RECIPES_COLLECTION)
    .doc(recipeId).get();
};

/**
 *
 * @param {string} recipeId the id of the recipe to add the review to
 * @param {object} review the review object to add
 * @return {object} a promise
 */
const createReviewForRecipe = (recipeId, review) => {
  return firebase.firestore().collection(RECIPES_COLLECTION).doc(recipeId)
    .collection(REVIEWS_COLLECTION).add(review);
};

/**
 *
 * @param {string} recipeId the id of the recipe to remove the review from
 * @param {string} reviewId the reviewId to remove
 * @return {object} a promise
 */
const deleteReviewFromRecipe = (recipeId, reviewId) => {
  return firebase.firestore().collection(RECIPES_COLLECTION)
    .doc(reviewId).delete();
};

/**
 * Get reviews from a recipe document
 *
 * @param {string} recipeId id of the recipe
 * @return {object} a promise
 */
const readReviewsForRecipe = (recipeId) => {
  return firebase.firestore().collection(RECIPES_COLLECTION).doc(recipeId)
    .collection(REVIEWS_COLLECTION).get();
};

/**
 * Subscribe to realtime updates on a recipe
 *
 * @param {string} recipeId id of the recipe
 * @param {function} setRecipe function to set the returned recipe
 */
const readRecipeUpdates = (recipeId, setRecipe) => {
  firebase.firestore().collection(REVIEWS_COLLECTION).doc(recipeId)
    .onSnapshot((doc) => {
      setRecipe(doc.data());
    });
};

/**
 * Subscribe to realtime updates on a reviews of a recipe
 * CURRENTLY UNUSED
 *
 * @param {string} recipeId id of the recipe
 * @param {function} setRecipe function to set the returned recipe
 */
const readReviewsForRecipeUpdates = (recipeId, setRecipe) => {
  firebase.firestore().collection(REVIEWS_COLLECTION).doc(recipeId)
    .collection(REVIEWS_COLLECTION)
    .onSnapshot((doc) => {
      setRecipe(doc.data());
    });
};

const api = {
  createRecipeFromSpoonId,
  readRecipeById,
  createReviewForRecipe,
  deleteReviewFromRecipe,
  readReviewsForRecipe,
  readRecipeUpdates,
  readReviewsForRecipeUpdates,
};

export default api;
