import '../../../scss/utility.scss';

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import { API } from '../../../services/spoonacular-service';
import { Constrain } from '../../layouts/Constrain/Constrain';
import { FeaturedImage } from '../../components/FeaturedImage/FeaturedImage';
import { Sidebar } from '../../layouts/Sidebar/Sidebar';
import { StickyContent } from '../../layouts/StickyContent/StickyContent';
import { Fragment } from 'react';
import { Instructions } from '../../components/Instructions/Instructions';
import { Ingredients } from '../../components/Ingredients/Ingredients';

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

  useEffect(() => {
    const recipeID = recipeId ? recipeId : '609262'; // default sample recipe id

    API.findRecipeById(recipeID).then((res) => {
      setRecipe(res);
      setIntro(res.summary);
      setIngredients(res.extendedIngredients);
    });

    API.getRecipeIntructions(recipeID).then((res) => {
      setInstructions(res[0]);
    });
  }, []);

  // get Spoontacular score
  const score = recipe.spoonacularScore;
  // convert to 5-scale rating
  const ratings = score ? (score / 100) * 5 : null;

  return (
    <div className="recipe">
      <Constrain>
        <FeaturedImage title={recipe.title} image={recipe.image}
          time={recipe.readyInMinutes} portions={recipe.servings}
          rating={Math.round(ratings * 10) / 10}
        />
        <Sidebar asideContent={
          <StickyContent>
            <Ingredients ingredients={ingredients} />
          </StickyContent>
        }
        mainContent={<Content summary={intro}
          instructions={instructions}
        />} />
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
