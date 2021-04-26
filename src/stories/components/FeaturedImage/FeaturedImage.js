import './styles.scss';

import React, { useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { AuthContext } from '../AuthProvider/AuthProvider';
import firebase from 'firebase/app';
import { USERS } from '../../../services/user-service';
import { HOME } from '../../../services/home-service';
import { Constrain } from '../../layouts/Constrain/Constrain';
import { useHistory } from 'react-router-dom';

/**
 * Component for Featured Hero element.
 *
 * @component
 * @param {number} recipeId of the component.
 * @param {boolean} isFavorite of the component.
 * @param {boolean} image of the component.
 * @param {string} title of the component.
 * @param {string} excerpt of the component.
 * @param {number} portions of the component.
 * @param {number} time in mins of the component.
 * @param {number} rating of the component.
 * @return {object} (
 *   <FeaturedImage image={image} title={title} excerpt={excerpt} />
 * )
 */
export const FeaturedImage = ({
  recipeId, isFavorite, image, title, excerpt, portions, time, rating,
}) => {
  const { currentUser } = useContext(AuthContext);
  const [favorite, setFavorite] = useState(isFavorite);
  const history = useHistory();

  useEffect(() => {
    window.onscroll = function() {
      handleScroll();
    };
  }, []);

  const bgImage = useRef(null);

  const handleScroll = () => {
    const scrollpos = window.scrollY;
    if (bgImage.current != null) {
      if (scrollpos >= 100) {
        bgImage.current.classList.add('is-animated');
      } else {
        bgImage.current.classList.remove('is-animated');
      }
    }
  };

  const toggleFavorite = () => {
    if (currentUser) {
      USERS.findUser(currentUser.uid)
        .then((response) => {
          const isChef = response.data().userType === 'Chef';

          if (!favorite) {
            USERS.updateUser(currentUser.uid, {
              favoriteRecipes: firebase.firestore
                .FieldValue.arrayUnion(recipeId),
            }).then(() => {
              if (isChef) {
                HOME.findHomeVariable('TWTP')
                  .then((response) => {
                    const topRecipes = response.data().topRecipes;
                    const index = topRecipes.findIndex((recipe) =>
                      recipe.recipeId === recipeId,
                    );
                    if (index > -1) topRecipes[index].tagCount += 1;
                    else topRecipes.push({ recipeId, tagCount: 1 });

                    HOME.setHomeVariable('TWTP', { topRecipes });
                  });
              }
              setFavorite(!favorite);
            });
          } else {
            USERS.updateUser(currentUser.uid, {
              favoriteRecipes: firebase.firestore
                .FieldValue.arrayRemove(recipeId),
            }).then(() => {
              if (isChef) {
                HOME.findHomeVariable('TWTP')
                  .then((response) => {
                    const topRecipes = response.data().topRecipes;
                    const index = topRecipes.findIndex((recipe) =>
                      recipe.recipeId === recipeId,
                    );
                    if (index > -1) {
                      if (topRecipes[index].tagCount === 1) {
                        topRecipes.splice(index, 1);
                      } else {
                        topRecipes[index].tagCount -= 1;
                      }
                    }

                    HOME.setHomeVariable('TWTP', { topRecipes });
                  });
              }
              setFavorite(!favorite);
            });
          }
        });
    } else {
      history.push(`/login`);
    }
  };

  return (
    <div className={[
      'featured-image',
      `${isFavorite ? 'featured-image--favorite' : ''}`].join(' ').trim()
    }>
      <button className="featured-image__favorite" onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleFavorite();
      }} >
        {favorite ? 'Remove from' : 'Add to'} favorites
      </button>
      <div className="featured-image__image" style={
        { backgroundImage: `url('${image}')` }
      } aria-label={title} ref={bgImage}></div>
      <Constrain modifierClasses="constrain--narrow">
        <h1 className="featured-image__title">{title}</h1>
        { excerpt && <p>{excerpt}</p> }
        <div className="featured-image__info">
          {portions &&
            <span
              className="featured-image__icon featured-image__icon--portions">
              Yields {portions}
            </span>
          }
          {time &&
            <span className="featured-image__icon featured-image__icon--time">
              {time} mins
            </span>
          }
          {rating &&
            <span className="featured-image__icon featured-image__icon--rating">
              {rating}
            </span>
          }
        </div>
      </Constrain>
    </div>
  );
};

FeaturedImage.propTypes = {
  /**
   * FeaturedImage's recipeId
   */
  recipeId: PropTypes.number,
  /**
   * FeaturedImage's isFavorite
   */
  isFavorite: PropTypes.bool,
  /**
   * FeaturedImage's image
   */
  image: PropTypes.string,
  /**
   * FeaturedImage's title
   */
  title: PropTypes.string,
  /**
   * FeaturedImage's excerpt
   */
  excerpt: PropTypes.string,
  /**
   * FeaturedImage's portions
   */
  portions: PropTypes.number,
  /**
  * FeaturedImage's time
  */
  time: PropTypes.number,
  /**
  * FeaturedImage's rating
  */
  rating: PropTypes.number,
};

FeaturedImage.defaultProps = {
  recipeId: null,
  isFavorite: false,
  image: '',
  title: 'Steamed Mussels in White Wine',
  excerpt: '',
  portions: 4,
  time: 20,
  rating: 3.5,
};
