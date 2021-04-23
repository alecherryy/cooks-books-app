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

const api = {
  createRecipe,
  findRecipeById,
  findRecipesByTitle,
};

export default api;

/*
  For myself: what does a recipe need to have:
  the fields needed by Recipe:

    recipeId: <string> need this to be alphanumeric for easiness, autogenerate?
    title: <string> of what it is
    image: <imageUrl?> of what it is
    readyInMinutes: <string> of time
    servings: <integer> of num of servings
    spoonacularScore: <integer> that we can just convert idk?
    summary: <string> just some text saying what the recipe is all about

    ingredients: <array> of ingredients
      array includes minimally (per ingredient)
        measures.us.unitLong; <string> of what it is (cup, tsp, etc)
        id: <integer> maybe could be 0 honestly, its used as key and thats it?
        amount: <string> portion of a cup or whatever
        name: <string> for name

    instructions: <array> of instructions
      array elements include minimally (per instruction)
        steps: <array> high level object that contains each step
          number: <integer> of what step it is
          step: <string> of the directions for the step


  for measures:
  "measures": {
                "metric": {
                    "amount": 59.147,
                    "unitLong": "milliliters",
                    "unitShort": "ml"
                },
                "us": {
                    "amount": 0.25,
                    "unitLong": "cups",
                    "unitShort": "cups"
                }


*/
