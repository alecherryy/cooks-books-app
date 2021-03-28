import '../../../scss/_utility.scss';

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Constrain } from '../../layouts/Constrain/Constrain';
import { FeaturedImage } from '../../components/FeaturedImage/FeaturedImage';
import { Sidebar } from '../../layouts/Sidebar/Sidebar';
import { StickyContent } from '../../layouts/StickyContent/StickyContent';
import { Fragment } from 'react';
import { api } from '../../../services/spoonacular-service';
// import { useParams } from 'react-router';

/**
 * Component for Recipe page.
 *
 * @component
 * @return {object} (
 *   <Recipe />
 * )
 */

export const Recipe = () => {
  // const { id } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    // const recipeID = id ? id : '716429';
    const recipeID = '609262';

    api.findRecipeById(recipeID).then((res) => {
      console.log(res); // eslint-disable-line no-console
      setRecipe(res); // eslint-disable-line no-console
    });
  }, []);

  const score = recipe.spoonacularScore;
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
            <h4>Ingredients</h4>
            <ul className="text-small list-clean">
              { recipe.extendedIngredients.map((el) => {
                const meas = el.measures.us.unitLong;
                return <li key={el.id}>
                  {el.amount} {meas} {el.name}
                </li>;
              }) }
            </ul>
          </StickyContent>
        }
        mainContent={<Content summary={recipe.summary}
          instructions={recipe.instructions}
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
  return (
    <Fragment>
      <p className="text-italic"
        dangerouslySetInnerHTML={ { __html: summary } } />
      { instructions && <>
        <h3>Instructions</h3>
        <p dangerouslySetInnerHTML={ { __html: instructions } } />
      </> }
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
