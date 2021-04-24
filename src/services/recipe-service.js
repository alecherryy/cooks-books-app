import firebase from '../firebase';

const RECIPES_COLLECTION = 'recipes';
const ALL_RECIPES = firebase.firestore().collection(RECIPES_COLLECTION);

/**
 * Add a recipe to the firebase.
 *
 * @param {object} recipe the recipe to be added
 * @return {object} a promise from the firestore.
 */
const createRecipe = (recipe) => {
  return ALL_RECIPES.add(recipe);
};

/**
 * Gets the recipe with the givenId. To be called when alphanumeric.
 *
 * @param {string} recipeId the id to find.
 * @return {object} a promise array of size (1) from the firestore
 */
const findRecipeById = (recipeId) => {
  return ALL_RECIPES.where( 'id', '==', recipeId ).get();
};

/**
 * Finds recipe by title, currently just returns all recipes that
 * have exactly this title.
 *
 * @param {string} recipeTitle the title to be looked for.
 * @return {object} a promise from firestore.
 */
const findRecipesByTitle = (recipeTitle) => {
  return ALL_RECIPES.where( 'title', '==', recipeTitle ).get();
};

export const RECIPES = {
  createRecipe,
  findRecipeById,
  findRecipesByTitle,
};
