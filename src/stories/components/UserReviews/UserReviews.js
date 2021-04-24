import './styles.scss';

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Review } from '../Review/Review';
import { REVIEWS } from '../../../services/review-service';
import { UTILS } from '../../../utils/utils';

/**
 * Component for UserReviews element.
 *
 * @component
 * @param {string} userId Title for the UserReviews component.
 * @return {object} (
 *  <UserReviews userId={userId} />
 * )
 */
export const UserReviews = ({ userId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    REVIEWS.findReviewsForRecipeId(recipeId).then((collection) => {
      const theReviews = [];
      collection.forEach((doc) => {
        theReviews.push(doc.data());
      });
      setReviews(theReviews);
    });
  });

  return (
    <div className="recipe-review">
      <h3 className="recipe-review__title">Reviews</h3>
      {reviews.length !== 0 ?
        reviews.map((r, index) => {
          return (
            <Review
              key={index}
              title={r.title}
              content={r.content}
              date={UTILS.convertDateToString(r.date)}
              rating={r.rating}
              name={r.username}
            />
          );
        }) :
        <p>{r.username} has not reviewed any recipe yet.</p>
      }
    </div>
  );
};

UserReviews.propTypes = {
  /**
   * UserReviews's recipeId.
   */
  userId: PropTypes.string,
};

UserReviews.defaultProps = {
  userId: '609262',
};
