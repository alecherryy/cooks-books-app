const URL =
  'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes';

const HEADERS = {
  'x-rapidapi-key': '96a59c87e8msh987f6b0d4a69ef3p1240d5jsne302b83f190e',
  'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
};

/**
 * Find given number of random recipes
 *
 * @param {number} number of the recipe
 * @return {object} a recipe object
 */
// find recipes by keywords, TODO: add some filters, add keywords by space
const findRecipesByKeywords = (keywords) => {
  return (
    fetch(`${URL}/complexSearch?query=${keywords}`, {
      headers: HEADERS,
    }).then((response) => response.json()));
};

/**
 * Find given number of random recipes
 *
 * @param {number} number of the recipe
 * @return {object} a recipe object
 */
const findRandomRecipes = (number) => {
  return (
    fetch(`${URL}/random?number=${number}`, {
      headers: HEADERS,
    }).then((response) => response.json()));
};

/**
 * Find recipes by ID
 *
 * @param {string} id of the recipe
 * @return {object} a recipe object
 */
const findRecipeById = (id) => {
  return (
    fetch(`${URL}/${id}/information`, {
      headers: HEADERS,
    }).then((response) => response.json()));
};

/**
 * Find recipes similar to the recipe ID
 *
 * @param {string} id of the recipe
 * @return {object} an array of recipe objects
 */
const findSimilarRecipeById = (id) => {
  return (
    fetch(`${URL}/${id}/similar`, {
      headers: HEADERS,
    }).then((response) => response.json()));
};

// use an object to namespace the functions being called from this service
export const API = {
  findRecipesByKeywords,
  findRandomRecipes,
  findRecipeById,
  findSimilarRecipeById,
};
