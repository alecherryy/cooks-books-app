/**
 * Convert Spoonacular score to 5-point scale.
 *
 * @name convertScore
 * @param {number} num of the score
 * @return {num} the recipe rating
 */
const convertScore = (num) => {
  const score = num ? (num / 100) * 5 : null;

  return Math.round(score * 10) / 10;
};

/**
 * Convert date to string.
 *
 * @name convertDateToString
 * @param {Date} date of the score
 * @return {string} date in a string
 */
const convertDateToString = (date) => {
  return date.toLocaleDateString('default', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
};

/**
 * Find if the recipe is listed in
 * Spoonacular.
 *
 * @name isSpoonRecipeId
 * @param {String} recipeId id of the recipe
 * @return {boolean} if recipe in spoonacular
 */
const isSpoonRecipeId = (recipeId) => {
  return ! isNaN( parseInt(recipeId) );
};

/**
 * Scroll to top of page
 *
 * @name scrollToTop
 */
const scrollToTop = () => {
  window.setTimeout(function() {
    window.scrollTo({
      top: 0,
      // left: 0,
      behavior: 'smooth',
    });
  });
};

/**
 * Get recipe's image URL for custom dimensions.
 *
 * Note: API supports the following dimensions only:
 * 90 x 90
 * 240 x 150
 * 312 x 150
 * 312 x 231
 * 480 x 360
 * 556 x 370
 * 636 x 393
 *
 * @name getRecipeImgURL
 * @param {String} recipeId id of the recipe
 * @param {Number} imgLength length of the image
 * @param {Number} imgWidth width of the image
 * @return {string} URL of the image
 */
export const getRecipeImgURL = (recipeId, imgLength, imgWidth) => {
  return `https://spoonacular.com` +
    `/recipeImages/${recipeId}-${imgLength}x${imgWidth}.jpg`;
};

/**
 * Export utiliy functions
 */
export const UTILS = {
  scrollToTop,
  convertScore,
  convertDateToString,
  isSpoonRecipeId,
  getRecipeImgURL,
};
