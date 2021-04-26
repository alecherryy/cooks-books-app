import '../../../scss/utility.scss';

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import { API } from '../../../services/spoonacular-service';
import { RECIPES } from '../../../services/recipe-service';
import { INGREDIENTS } from '../../../services/ingredients-service';
import { INSTRUCTIONS } from '../../../services/instructions-service';
import { Constrain } from '../../layouts/Constrain/Constrain';
import { FeaturedImage } from '../../components/FeaturedImage/FeaturedImage';
import { Sidebar } from '../../layouts/Sidebar/Sidebar';
import { StickyContent } from '../../layouts/StickyContent/StickyContent';
import { Fragment } from 'react';
import { Instructions } from '../../components/Instructions/Instructions';
import { Ingredients } from '../../components/Ingredients/Ingredients';
import { RecipeReviews } from '../../components/RecipeReviews/RecipeReviews';
import { UTILS } from '../../../utils/utils';

/**
 * Component for Recipe page.
 *
 * @component
 * @return {object} (
 *   <Recipe />
 * )
 */

export const Recipe = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [intro, setIntro] = useState([]);

  /**
   * Makes calls to spoonacular to set state.
   *
   * @param {integer} id The used to call spoonacular
   */
  const setStateFromSpoonacular = (id) => {
    API.findRecipeById(id).then((res) => {
      setRecipe(res);
      setIntro(res.summary);
      setIngredients(res.extendedIngredients);
    });

    API.getRecipeIntructions(id).then((res) => {
      setInstructions(res[0]);
    });
  };

  /**
   * Makes calls to firebase to set state.
   *
   * @param {string} id The used to call firebase.
   */
  const setStateFromFirebase = (id) => {
    // set recipe, summary, with one call
    // call service to get promise, forEach through result
    RECIPES.findRecipeById( id ).then((snapshot) => {
      snapshot.forEach((doc) => {
        const recipe = doc.data();
        setRecipe(recipe);
        setIntro(recipe.summary);
      });
    });

    // loop through return from ingredientsService
    const newIngredients = [];
    // call service to get promise, forEach through result
    INGREDIENTS.findAllIngredientsForId( id )
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          newIngredients.push(doc.data());
        });
        setIngredients(newIngredients);
      });

    // loop through return from instructionsService
    const newInstructions = [];
    // call service to get promise, forEach through result
    INSTRUCTIONS.findAllInstructionsForId( id )
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          newInstructions.push(doc.data());
        });
        const newInstructionsInArray = { steps: newInstructions };
        setInstructions(newInstructionsInArray);
      });
  };


  useEffect(() => {
    const id = recipeId ? recipeId : '609262'; // default sample recipe id
    const isSpoonId = UTILS.isSpoonRecipeId(id);

    UTILS.scrollToTop();

    if ( isSpoonId ) {
      setStateFromSpoonacular(id);
    } else {
      setStateFromFirebase(id);
    };
  }, []);

  return (
    <div className="recipe">
      <Constrain>
        <FeaturedImage title={recipe.title} image={recipe.image}
          time={recipe.readyInMinutes} portions={recipe.servings}
          rating={UTILS.convertScore(recipe.spoonacularScore)}
        />
        <Sidebar asideContent={
          <StickyContent>
            <Ingredients ingredients={ingredients} />
          </StickyContent>
        }
        mainContent={<Content summary={intro}
          instructions={instructions}
        />} />
        <Sidebar asideContent=''
          mainContent={<RecipeReviews recipeId={recipeId}
            recipeTitle={recipe.title} />} />
      </Constrain>
    </div>
  );
};

/**
 * Component for Content element.
 *
 * @component
 * @param {string} summary of the component.
 * @param {string} instructions of the component.
 * @param {string} recipeId of the component.
 * @return {object} (
 *   <Content summary={summary} instructions={instructions} />
 * )
 */
const Content = ({ summary, instructions }) => {
  const formatSummary = `${summary.toString().split('. ')[0]}.`;
  return (
    <Fragment>
      <p className="text-italic text-large spaced-50-bottom"
        dangerouslySetInnerHTML={ { __html: formatSummary } } />
      { instructions && <Instructions steps={instructions.steps} /> }
    </Fragment>
  );
};

Content.propTypes = {
  /**
   * Content's summary
   */
  summary: PropTypes.string,
  /**
   * Content's instructions
   */
  instructions: PropTypes.string,
};

Content.defaultProps = {
  summary: '',
  instructions: '',
};
