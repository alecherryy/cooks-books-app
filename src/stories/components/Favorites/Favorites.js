import './styles.scss';

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { UTILS } from '../../../utils/utils';
import { Grid } from '../../layouts/Grid/Grid';
import { Teaser } from '../Teaser/Teaser';
import { API } from '../../../services/spoonacular-service';

/**
 * Component for Favorites element.
 *
 * @component
 * @param {object} user Title for the Favorites component.
 * @return {object} (
 *  <Favorites user={user} />
 * )
 */
export const Favorites = ({ user }) => {
  const [favorites, setFavorites] = useState(null);

  useEffect(() => {
    findFavoriteRecipes();
  }, [favorites]);

  // get nodes to be rendered
  const findFavoriteRecipes = async () => {
    const recipes = [];
    if (user) {
      await Promise.all(user.data.favoriteRecipes.map((fav) =>
        findRecipe(fav, recipes)),
      );
    }

    // set state variables
    setFavorites(recipes);
  };

  // call API of each recipe and retrieve data
  const findRecipe = async (id, arr) => {
    const recipe = await API.findRecipeById(id);

    // push recipe to external arr
    arr.push(recipe);
  };

  return (
    <div className="favorites">
      <h3 className="favorites__title">Favorite Recipes</h3>
      <Grid numColumns={2}>
        {favorites ? favorites.map((r, index) => {
          return (
            <Teaser
              key={index}
              title={r.title}
              image={r.image}
              time={r.readyInMinutes}
              portions={r.servings}
              rating={UTILS.convertScore(r.spoonacularScore)}
              excerpt=''
              url={`/recipes/${r.id}`} />
          );
        }) :
          <p>This user has not published any reviews yet.</p>
        }
      </Grid>
    </div>
  );
};

Favorites.propTypes = {
  /**
   * Favorites's user.
   */
  user: PropTypes.object,
};

Favorites.defaultProps = {
  user: null,
};
