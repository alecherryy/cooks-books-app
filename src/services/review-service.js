import firebase from '../firebase';

const REVIEWS_COLLECTION = 'reviews';
const ALL_REVIEWS = firebase.firestore().collection(REVIEWS_COLLECTION);

/**
 * Creates and posts a recipe to the Firebase with the given fields.
 *
 * @param {object} review the review to be posted to firebase.
 * @return {object} a promise.
 */
const createReview = ( review ) => {
  return ALL_REVIEWS.add(review);
};

/**
 * Finds all the recipes with the associated recipeId.
 *
 * @param {string} recipeId the id of the recipe to find.
 * @return {object} a promise.
 */
const findReviewsForRecipeId = ( recipeId ) => {
  return ALL_REVIEWS.where( 'recipeId', '==', recipeId ).get();
};


const api = {
  createReview,
  findReviewsForRecipeId,
};

export default api;
