import firebase from '../firebase';

const INSTRUCTIONS_COLLECTION = 'instructions';
const ALL_INSTRUCTIONS = firebase.firestore()
  .collection(INSTRUCTIONS_COLLECTION);


/**
 * Add a single instruction to firebase.
 *
 * @param {object} instruction the instruction to add
 * @param {string} recipeId the recipeId to associate with the instruction
 * @return {object} a promise from the firestore
 */
const createInstruction = (instruction) => {
  return ALL_INSTRUCTIONS.add(instruction);
};

/**
 * Add all the given instructions to the firebase.
 *
 * @param {object} instructionsArray an array of instructions
 * @param {string} recipeId the recipeId to associate with the instructions
 */
const createAllInstructions = (instructionsArray ) => {
  instructionsArray.map( (instruction) => {
    createInstruction( instruction );
  });
};


/**
 * Find all the instructions associated with a given recipeId.
 *
 * @param {string} recipeId the recipe to find instruction for.
 * @return {object} a promise array of all the instruction
 */
const findAllInstructionsForId = (recipeId) => {
  return ALL_INSTRUCTIONS.where( 'recipeId', '==', recipeId ).get();
};


export const INSTRUCTIONS = {
  createInstruction,
  createAllInstructions,
  findAllInstructionsForId,
};
