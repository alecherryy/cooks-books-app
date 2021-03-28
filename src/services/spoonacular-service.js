const MULTI_URL =
  'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch';

const RANDOM_URL =
  'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random';

const BY_ID_URL =
  'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes';

//  find recipes by keywords, TODO: add some filters, add keywords by space
const findRecipesByKeywords = (keywords) => {
  return (
    fetch(`${MULTI_URL}?query=${keywords}`, {
      // method: 'GET',
      headers: {
        'x-rapidapi-key':
          '96a59c87e8msh987f6b0d4a69ef3p1240d5jsne302b83f190e',
        'x-rapidapi-host':
          'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
      },
    })
      .then((response) => response.json()));
};

// find random recipes, number is number you want back
// Gives a JSON object with an array of recipes:
// {recipes: [
// {an array of recipe objects,
//   relevant fields probably
//     'title', 'image', 'servings', 'readiInMinutes',
//     'instructions'}
// ]}
const findRandomRecipes = (number) => {
  return (
    fetch(`${RANDOM_URL}?number=${number}`, {
      // method: 'GET',
      headers: {
        'x-rapidapi-key':
          '96a59c87e8msh987f6b0d4a69ef3p1240d5jsne302b83f190e',
        'x-rapidapi-host':
          'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
      },
    })
      .then((response) => response.json()));
};

// find recipe by id, sample ids in webpages for now:
//   850965 for bagel dip
//   716429 pasta with garlic and stuff
//   158042 for egg salad
// Gives a JSON object back, relevant fields probably:
//   'title', 'image', 'servings', 'readiInMinutes',
//   'instructions'
//

const findRecipeById = (id) => {
  return (
    fetch(`${BY_ID_URL}/${id}/information`, {
      // method: 'GET',
      headers: {
        'x-rapidapi-key':
          '96a59c87e8msh987f6b0d4a69ef3p1240d5jsne302b83f190e',
        'x-rapidapi-host':
          'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
      },
    })
      .then((response) => response.json()));
};

/**
 * Find recipes similar to the recipe ID
 *
 * @param {string} id of the recipe
 * @return {object} a recipe object
 */
const findSimilarRecipeById = (id) => {
  return (
    fetch(`${BY_ID_URL}/${id}/similar`, {
      // method: 'GET',
      headers: {
        'x-rapidapi-key':
          '96a59c87e8msh987f6b0d4a69ef3p1240d5jsne302b83f190e',
        'x-rapidapi-host':
          'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
      },
    })
      .then((response) => response.json()));
};

// use an object to namespace the functions being called from this service
export const api = {
  findRecipesByKeywords,
  findRandomRecipes,
  findRecipeById,
  findSimilarRecipeById,
};
