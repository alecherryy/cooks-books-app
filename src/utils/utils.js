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
 * Convert dae to string.
 *
 * @name convertScore
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
 * Export utiliy functions
 */
export const UTILS = {
  convertScore, convertDateToString,
};
