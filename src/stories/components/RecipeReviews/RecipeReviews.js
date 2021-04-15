import './styles.scss';

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form } from '../Form/Form';
import { FormItem } from '../FormItem/FormItem';

/**
 * Component for RecipeReviews element.
 *
 * @component
 * @param {string} recipeId Title for the RecipeReviews component.
 * @return {object} (
 *  <RecipeReviews recipeId={recipeId} />
 * )
 */
export const RecipeReviews = ({ recipeId }) => {
  const [review, setReview] = useState({
    recipeId,
    title: '',
    content: '',
    rating: '',
    date: (new Date).toLocaleDateString('default', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }),
    user: 'apizzoccheri',
  });

  const submitNewReview = (e) => {
    console.log(review); // eslint-disable-line no-console
    e.preventDefault();
  };

  return (
    <div className="recipe-review">
      <h3>Reviews</h3>
      <NewReview recipeId={recipeId}
        handleClick={(e) => submitNewReview(e)}
        addReviewTitle={(e) => setReview({
          ...review,
          title: e.target.value,
        })}
        addReviewContent={(e) => setReview({
          ...review,
          content: e.target.value,
        })}
        addReviewRating={(e) => setReview({
          ...review,
          rating: e.target.value,
        })}
      />
    </div>
  );
};

RecipeReviews.propTypes = {
  /**
   * RecipeReviews's recipeId.
   */
  recipeId: PropTypes.string,
};

RecipeReviews.defaultProps = {
  recipeId: '609262',
};

/**
 * Component for NewReview form.
 *
 * @component
 * @param {func} handleClick the form.
 * @param {func} addReviewTitle title of the review.
 * @param {func} addReviewContent content of the review.
 * @param {func} addReviewRating rating of the review.
 * @return {object} (
 *  <RecipeReviews addReviewRating={addReviewRating}
 *    addReviewContent={addReviewContent} addReviewRating={addReviewRating}
 *  />
 * )
 */
const NewReview = ({
  handleClick,
  addReviewTitle,
  addReviewContent,
  addReviewRating,
}) => {
  // rating scale
  const ratings = ['Select an option', 1, 2, 3, 4, 5];

  return (
    <div className="add-review">
      <h3>Tried this recipe?
        <span className="text-regular"> Leave a review.</span></h3>
      <p>Help other users discover new recipes by reviewing the ones
        you have tried; include tips, changes and anything you have
        done to make this recipe your own. Happy cooking!
      </p>
      <Form handleClick={handleClick} buttonColor="black"
        buttonText="Leave a review">
        <FormItem placeholder="Title"
          handleChange={addReviewTitle} />
        <FormItem type="textarea"
          handleChange={addReviewContent} />
        <FormItem
          modifierClasses="special-margins"
          type="select"
          showLabel={true}
          label="What would you rate this recipe?"
          options={ratings}
          handleChange={addReviewRating} />
        <p className="text-small">Rate this recipe on a scale of 1
          through 5, 1 being the lowest rating and 5 being the
          best possible score.
        </p>
      </Form>
    </div>
  );
};

NewReview.propTypes = {
  /**
   * RecipeReviews's handleClick.
   */
  handleClick: PropTypes.func,
  /**
   * RecipeReviews's addReviewTitle.
   */
  addReviewTitle: PropTypes.func,
  /**
   * RecipeReviews's addReviewContent.
   */
  addReviewContent: PropTypes.func,
  /**
   * RecipeReviews's addReviewRating.
   */
  addReviewRating: PropTypes.func,
};
