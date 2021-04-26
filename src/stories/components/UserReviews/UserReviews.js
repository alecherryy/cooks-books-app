import './styles.scss';

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Review } from '../Review/Review';
import { REVIEWS } from '../../../services/review-service';
import { UTILS } from '../../../utils/utils';
// import { API } from '../../../services/spoonacular-service';

/**
 * Component for UserReviews element.
 *
 * @component
 * @param {string} id Title for the UserReviews component.
 * @return {object} (
 *  <UserReviews id={id} />
 * )
 */
export const UserReviews = ({ id }) => {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const theReviews = [];
    if (!reviews) {
      REVIEWS.findReviewsForUserId(id).then((collection) => {
        collection.forEach((doc) => {
          theReviews.push(doc.data());
        });
      });
    }
    setReviews(theReviews);
  }, []);

  // get recipe title
  const getRecipeTitle = (id) => {
    // return API.findRecipeById(id).then((res) => {
    //   return res;
    // });
  };

  return (
    <div className="user-review">
      <h3 className="user-review__title">Reviews</h3>
      {reviews ? reviews.map((r, index) => {
        return (
          <Review
            key={index}
            profUrl={id}
            isUserVariant={true}
            recipeId={r.recipeId}
            recipeTitle={getRecipeTitle(r.recipeId)}
            title={r.title}
            content={r.content}
            date={UTILS.convertDateToString(new Date(r.date))}
            rating={parseInt(r.rating)}
            name={r.username}
          />
        );
      }) :
        <p>This user has not published any reviews yet.</p>
      }
    </div>
  );
};

UserReviews.propTypes = {
  /**
   * UserReviews's id.
   */
  id: PropTypes.string,
};

UserReviews.defaultProps = {
  id: '609262',
};
