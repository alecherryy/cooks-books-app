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

/**
 * Finds all the recipes with the associated user ID.
 *
 * @param {string} userId the id of the usere.
 * @return {object} a promise.
 */
const findReviewsForUserId = (userId) => {
  return ALL_REVIEWS.where( 'uid', '==', userId ).get();
};

/**
 * Find all reviews
 *
 * @return {number} code
 */
const findAllReviews = () => {
  return ALL_REVIEWS.get().then((snapshot) => {
    return snapshot;
  });
};

export const REVIEWS = {
  createReview,
  findReviewsForRecipeId,
  findReviewsForUserId,
  findAllReviews,
};
