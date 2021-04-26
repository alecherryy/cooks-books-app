import './styles.scss';

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component for Ingredients element.
 *
 * @component
 * @param {string} modifierClasses Class modifiers of the component.
 * @param {string} ingredients of the component.
 * @return {object} (
 *   <Ingredients ingredients={ingredients} />
 * )
 */
export const Ingredients = ({ ingredients }) => {
  return (
    <div className="ingredients">
      <h4 className="ingredients__title">Ingredients</h4>
      <ul className="ingredients__ingredients">
        {ingredients.map((ing, index) => {
          // added this, nesting objects in firestore is a pain
          //   and I think this is a cleaner solution
          // let meas = '';
          if ( ing.hasOwnProperty('recipeId') ) {
            // meas = ing.usUnitLong;
            return <li key={index}>
              {ing.fullDescription}
            </li>;
          } else {
            // meas = ing.measures.us.unitLong;
            return <li key={ing.id + index}>
              {Math.round(ing.amount * 10) / 10}
              { } {ing.measures.us.unitLong} {ing.name}
            </li>;
          }
          // return <li key={ing.id + index}>
          //   {Math.round(ing.amount * 10) / 10} {meas} {ing.name}
          // </li>;
        })}
      </ul>
    </div>
  );
};

Ingredients.propTypes = {
  /**
  * Ingredients's modifier classes.
  */
  ingredients: PropTypes.array,
};

Ingredients.defaultProps = {
  ingredients: [],
};
