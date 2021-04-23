import './styles.scss';

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Review } from '../Review/Review';
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
  const [reviews, setReviews] = useState(null);
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

  useEffect(() => {
    // TODO make call to DB to fecth the recipe's reviews
    setReviews([{
      title: 'Test',
      content: 'Hello world',
      rating: '4',
      username: 'apizzoccheri',
      date: new Date(),
    }]);
  }, []);

  // push review to database
  const submitNewReview = (e) => {
    e.preventDefault();
  };

  return (
    <div className="recipe-review">
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
      { reviews && <h3>Reviews</h3> }
      { reviews && reviews.map((r, index) => {
        return <Review key={index} title={r.title} content={r.content}
          date={r.date} rating={r.rating} name={r.username} />;
      })}
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
      <p className="spaced-30-bottom">
        Tell other users what you think of this recipes,including
        tips, changes and anything you have done to make it your own.
        Happy cooking!
      </p>
      <Form modifierClasses="form--review"
        handleClick={handleClick} buttonColor="black"
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
