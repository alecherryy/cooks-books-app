import firebase from '../firebase';

const INGREDIENTS_COLLECTION = 'ingredients';
const ALL_INGREDIENTS = firebase.firestore().collection(INGREDIENTS_COLLECTION);

/**
 * Add a single ingredient to firebase.
 *
 * @param {object} ingredient the ingredient to add
 * @param {string} recipeId the recipeId to associate with the ingredient
 * @return {object} a promise from the firestore
 */
const createIngredient = (ingredient, recipeId) => {
  return ALL_INGREDIENTS.add(ingredient);
};

/**
 * Add all the given ingredients to the firebase.
 *
 * @param {object} ingredientsArray an array of ingredients
 * @param {string} recipeId the recipeId to associate with the ingredients
 */
const createAllIngredients = (ingredientsArray, recipeId ) => {
  ingredientsArray.map( (ingredient) => {
    createIngredient( ingredient, recipeId );
  });
};


/**
 * Find all the ingredients associated with a given recipeId.
 *
 * @param {string} recipeId the recipe to find ingredients for.
 * @return {object} a promise array of all the ingredients
 */
const findAllIngredientsForId = (recipeId) => {
  return ALL_INGREDIENTS.where( 'recipeId', '==', recipeId ).get();
};

const api = {
  createIngredient,
  createAllIngredients,
  findAllIngredientsForId,
};

export default api;
