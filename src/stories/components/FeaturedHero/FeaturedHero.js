import './styles.scss';

import React from 'react';
import { Link } from 'react-router-dom';

import { SpinningImages } from '../SpinningImages/SpinningImages';

/**
 * Component for Featured Hero element.
 *
 * @component
 * @return {object} (
 *   <FeaturedHero />
 * )
 */
export const FeaturedHero = ({}) => {
  return (
    <div className="featured-hero">
      <div className="featured-hero__text is-first">
        <h1 className="featured-hero__title">Explore
          <span className="featured-hero__light"> recipes</span><br />
        </h1>
        <Link className="featured-hero__link" to="/search">
          View all recipes
        </Link>
      </div>
      <div className="featured-hero__image">
        <SpinningImages />
      </div>
      <div className="featured-hero__text is-last">
        <h1 className="featured-hero__title">Create
          <span className="featured-hero__light"> new ones</span><br />
        </h1>
        <Link className="featured-hero__link" to="/login">Add a recipe</Link>
      </div>
    </div>
  );
};
