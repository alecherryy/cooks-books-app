import './styles.scss';

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form } from '../Form/Form';
import { FormItem } from '../FormItem/FormItem';

/**
 * Component for AddReview element.
 *
 * @component
 * @param {string} recipeId Title for the AddReview component.
 * @return {object} (
 *  <AddReview modifierClasses={modifierClasses} title={title}
 *    rating={rating} date={date} name={name} profUrl={profUrl}
 *    content={content} recipeTitle={recipeTitle} recipeLink={recipeLink}/>
 * )
 */
export const AddReview = ({ recipeId }) => {
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
    e.preventDefault();
  };

  return (
    <div className="add-review">
      <h3>Tried this recipe?
        <span className="text-regular"> Leave a review.</span></h3>
      <p>Help other users discover new recipes by reviewing the ones
        you have tried; include tips, changes and anything you have
        done to make this recipe your own. Happy cooking!
      </p>
      <Form handleClick={(e) => submitNewReview(e)} buttonColor="black"
        buttonText="Leave a review">
        <FormItem placeholder="Title"
          handleChange={(e) => setReview({
            ...review,
            title: e.target.value,
          })} />
        <FormItem type="textarea"
          handleChange={(e) => setReview({
            ...review,
            content: e.target.value,
          })} />
      </Form>
    </div>
  );
};

AddReview.propTypes = {

  /**
   * AddReview's recipeId.
   */
  recipeId: PropTypes.string,
};

AddReview.defaultProps = {
  recipeId: '609262',
};
