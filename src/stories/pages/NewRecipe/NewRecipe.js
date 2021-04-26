import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../components/AuthProvider/AuthProvider';
import { Form } from '../../components/Form/Form';
import { FormItem } from '../../components/FormItem/FormItem';
import { USERS } from '../../../services/user-service';
import { RECIPES } from '../../../services/recipe-service';
import { INGREDIENTS } from '../../../services/ingredients-service';
import { INSTRUCTIONS } from '../../../services/instructions-service';
import { Constrain } from '../../layouts/Constrain/Constrain';
import Artwork from '../../../images/artwork-4.svg';

export const NewRecipe = () => {
  const [recipe, setRecipe] = useState({
    author: '',
    id: '',
    image: '',
    readyInMinutes: '',
    servings: '',
    spoonacularScore: '',
    summary: '',
    title: '',
    // uid: '', this gets set later
  });

  const { currentUser } = useContext(AuthContext);
  const [profile, setProfile] = useState(null);

  // dropdown options
  // I opted to make lots of these dropdowns for simplicity
  const ratingsDropdown = ['Rating out of 5', 1, 2, 3, 4, 5];
  const ingredientsDropdown = ['Number of ingredients', 1, 2, 3, 4, 5, 6, 7, 8];
  const instructionsDropdown = ['Number of instructions', 1, 2, 3, 4, 5, 6, 7];

  // states to handle ingredients, array of Jsons
  const [ingredientsArray, setIngredientsArray] = useState([{}, {}, {}]);
  const [instructionsArray, setInstructionsArray] = useState([{}, {}, {}]);


  // TODO: add error message, or o/w make the fields required
  const [successMessage, setSuccessMessage] = useState('');

  // unique recipeId, set with Date.now()
  //   so technically, if two users start making a recipe
  //   at exactly the same millisecond, it won't be unique - eek
  const [recipeId, setRecipeId] = useState('');


  /**
   * useEffect, gets logged in user, locks in recipeId.
   */
  useEffect(() => {
    setRecipeId('abc'.concat(Date.now().toString()));
    if (currentUser) {
      USERS.findUser(currentUser.uid)
        .then((doc) => {
          setProfile(doc.data());
        })
        .catch((error) => {
          // setError(error)
        });
    }
  }, [currentUser]);

  /**
   * Creates the recipe, prevents default then calls helper.
   *
   * @param {object} e event passed to this.
   */
  const createRecipe = (e) => {
    e.preventDefault();
    checkAndSubmitRecipeToDB(e);
  };

  /**
   * Submits the recipe to the DB, alongside ingredients
   *   and instructions.
   *
   * @param {object} e event passed to this.
   */
  const checkAndSubmitRecipeToDB = (e) => {
    const recipeToAdd =
      {
        ...recipe,
        uid: currentUser.uid,
        id: recipeId,
        author: profile.username,
      };

    RECIPES.createRecipe(recipeToAdd)
      .then((docRef) => {
        e.target.parentNode.reset();
        INGREDIENTS.createAllIngredients(ingredientsArray);
        INSTRUCTIONS.createAllInstructions(instructionsArray);
        // also reset recipeId, no more dupes
        setRecipeId('abc'.concat(Date.now().toString()));
        setSuccessMessage('Recipe submitted!');
      });
  };

  // big ol' chonker getting returned
  return (
    <div className="add-recipe">
      <Constrain modifierClasses="constrain--narrow">
        <img src={Artwork} alt="Decorative Graphics" />
        <h3>
          Have a recipe?
          <span className="text-regular"> Let the world know!</span>
        </h3>

        {/* Success message to show user */}
        <p className="text-bold text-user-success">{successMessage}</p>

        {/* Form */}
        <Form
          modifierClasses="form--recipe"
          buttonColor="black"
          buttonText="Submit your Recipe"
          handleClick={createRecipe}
        >
          <br/>
          {/*  Title input */}
          <FormItem
            placeholder="Title"
            handleChange={(e) => {
              setRecipe({
                ...recipe,
                // username: profile.username,
                title: e.target.value,
              });
            }}
          />
          {/*  image-url input */}
          <FormItem
            placeholder="Image url"
            handleChange={(e) => {
              setRecipe({
                ...recipe,
                image: e.target.value,
              });
            }}
          />
          <br/>
          {/*  preptime input */}
          <FormItem
            modifierClasses="special-margins"
            type="number"
            showLabel={true}
            placeholder="Time in minutes"
            label="How many minutes des this recipe take?"
            handleChange={(e) => {
              setRecipe({
                ...recipe,
                readyInMinutes: e.target.value,
              });
            }}
          />
          <br/>
          {/*  servings input */}
          <FormItem
            modifierClasses="special-margins"
            type="number"
            placeholder="Number of servings"
            showLabel={true}
            label="How many servings does this recipe yield?"
            handleChange={(e) => {
              setRecipe({
                ...recipe,
                servings: e.target.value,
              });
            }}
          />
          <br/>
          {/*  spoonscore input */}
          <FormItem
            modifierClasses="special-margins"
            type="select"
            showLabel={true}
            label="How would you rate this recipe from 1 through 5?"
            options={ratingsDropdown}
            handleChange={(e) => {
              setRecipe({
                ...recipe,
                spoonacularScore: e.target.value * 20,
              });
            }}
          />
          <br/>
          {/*  summary input */}
          <p className="text-bold">Summary of recipe:</p>
          <FormItem
            placeholder="Summary"
            type="textarea"
            handleChange={(e) => {
              setRecipe({
                ...recipe,
                summary: e.target.value,
              });
            }}
          />
          <br/>
          {/* INGREDIENTS HANDLING */}
          {/* Create array, edit array with events */}
          {/*  pass array to service when submit */}
          <FormItem
            modifierClasses="special-margins"
            type="select"
            showLabel={true}
            label="How many ingredients are there?"
            options={ingredientsDropdown}
            handleChange={(e) => {
              const tempArray = [];
              let i = 0;
              for (i; i < e.target.value; i++) {
                tempArray.push({});
              }
              setIngredientsArray(tempArray);
            }}
          />
          <br/>
          <p className="text-bold">Ingredients</p>
          {ingredientsArray.map((val, i) => {
            return (
              <FormItem
                key={i}
                placeholder={`e.g. 2 Cups of Flour`}
                handleChange={(e) => {
                  const newIngr =
                    {
                      fullDescription: e.target.value,
                      id: 0,
                      recipeId,
                    };
                  ingredientsArray[i] = newIngr;
                }}
              />
            );
          })}
          <br/>
          {/* INSTRUCTIONS HANDLING */}
          {/* Create array, edit array with events */}
          {/*  pass array to service when submit */}
          <FormItem
            modifierClasses="special-margins"
            type="select"
            showLabel={true}
            label="How many instructions are there?"
            options={instructionsDropdown}
            handleChange={(e) => {
              const tempArray = [];
              let i = 0;
              for (i; i < e.target.value; i++) {
                tempArray.push({});
              }
              setInstructionsArray(tempArray);
            }}
          />
          <br/>
          <p className="text-bold">Instructions</p>
          {instructionsArray.map((val, i) => {
            return (
              <FormItem
                key={i}
                placeholder={`e.g. Mix dry ingredients thoroughly`}
                handleChange={(e) => {
                  const newInstr =
                    {
                      step: e.target.value,
                      number: i + 1,
                      recipeId,
                    };
                  instructionsArray[i] = newInstr;
                }}
              />
            );
          })}
        </Form>
      </Constrain>
    </div>
  );
};

NewRecipe.propTypes = {
  // nothing as props
};

NewRecipe.defaultProps = {
  // no props
};
