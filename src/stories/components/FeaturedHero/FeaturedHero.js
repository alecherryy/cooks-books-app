import './styles.scss';

import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { SpinningImages } from '../SpinningImages/SpinningImages';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { USERS } from '../../../services/user-service';

/**
 * Component for Featured Hero element.
 *
 * @component
 * @return {object} (
 *   <FeaturedHero />
 * )
 */
export const FeaturedHero = () => {
  const { user } = useContext(AuthContext);
  const [url, setUrl] = useState('login');

  useEffect(() => {
    if (user) {
      USERS.findUser(user.uid)
        .then((doc) => {
          const isChef = response.data().userType === 'Chef';

          if (isChef) {
            setUrl('add-recipe');
          } else {
            setUrl('account/information');
          }
        })
        .catch((error) => {
          // setError(error);
        });
    }
  }, []);

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
        <Link className="featured-hero__link" to={`/${url}`}>Add a recipe</Link>
      </div>
    </div>
  );
};
