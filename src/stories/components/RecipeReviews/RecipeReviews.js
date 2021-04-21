import './styles.scss';

import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from '../../../Auth';
import { useHistory } from 'react-router-dom';

import { Review } from '../Review/Review';
import { Form } from '../Form/Form';
import { FormItem } from '../FormItem/FormItem';

import database from '../../../services/firestore-service';
import { UTILS } from '../../../utils/utils';

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
  // to leave username as part of review
  const { currentUser } = useContext(AuthContext);
  const [profile, setProfile] = useState(null);
  const history = useHistory();

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [reviews, setReviews] = useState(null);
  const [review, setReview] = useState({
    // recipeId,
    title: '',
    content: '',
    rating: '',
    username: '',
    date: UTILS.convertDateToString(new Date()),
  });

  useEffect(() => {
    setErrorMessage('');
    setSuccessMessage('');
    // get profiles username to attach to reviews
    if (currentUser) {
      database.getProfile(currentUser.uid)
        .then((doc) => {
          setProfile(doc.data());
        })
        .catch((error) => {
          // setError(error)
        });
    }

    // this call is purely to make document discoverable in future
    database.setRecipe(recipeId);
    // this one actually gets data
    setReviewsFromDB();
  }, [currentUser]);


  /**
   * Makes call to Firestore, grabs all reviews for this recipe
   *   and saves them to the local state variable 'reviews'
   */
  const setReviewsFromDB = () => {
    setReviews([]);
    database.getReviewsForRecipe(recipeId)
      .then((collection) => {
        const theReviews = [];
        collection.forEach((doc) => {
          theReviews.push(doc.data());
        });
        setReviews(theReviews);
      });
  };

  /**
   * Validates for not-null options in form, if all not null
   *   submits the current review to the database, clears
   *   the fields, and then re-grabs all the reviews for the
   *   current recipe
   * Redirects to login if no current user.
   */
  const checkAndSubmitReviewToDB = () => {
    setErrorMessage('');
    setSuccessMessage('');

    // basic data validation, check all for non-empty
    if ( profile === null ) {
      // this first if is JANK but getting profile back takes forever
      //   gotta give time for the promise to resolve before user can
      //   submit a review
      setErrorMessage( 'Please try again in a second.' );
    } else if ( review.title === '' ) {
      setErrorMessage( 'Please enter a review title.' );
    } else if ( review.content === '' ) {
      setErrorMessage('Please enter content of the review.' );
    } else if ( review.rating === '' ) {
      setErrorMessage('Please give a rating for this review.' );

    // everything is non empty, so clear values, and submit review
    } else {
      // this gets around the setReview being async
      const reviewToAdd = { ...review, username: profile.username };
      // submit to firebase, when successfull regrab all reviews
      database.addReviewToRecipe(recipeId, reviewToAdd)
        .then((docRef) => {
          setReviewsFromDB();
          setSuccessMessage( 'Review submitted!' );
        });

      clearRecipeFormFields();
    };
  };


  /**
   * TODO: Without a major rework of the form component, I can't
   *   think of a clean solution for this right now.
   */
  const clearRecipeFormFields = () => {
    // TODO: I can't think of a good way to do this
  };

  /**
   * Submit the review to the database, using the values of the fields.
   * @param {event} e event from the button
   */
  const submitNewReview = (e) => {
    e.preventDefault();

    // if no user, send to login
    if (!currentUser) {
      history.push(`/login`);

    // otherwise, submit review to db, and repopulate reviews from DB
    } else {
      checkAndSubmitReviewToDB();
    }
  };

  return (
    <div className="recipe-review">
      <NewReview
        recipeId={recipeId}
        handleClick={(e) => submitNewReview(e)}
        addReviewTitle={(e) =>
          setReview({
            ...review,
            title: e.target.value,
          })
        }
        addReviewContent={(e) =>
          setReview({
            ...review,
            content: e.target.value,
          })
        }
        addReviewRating={(e) =>
          setReview({
            ...review,
            rating: e.target.value,
          })
        }
        username={profile && profile.username}
        errorMessage={errorMessage}
        successMessage={successMessage}
      />
      {reviews && <h3>Reviews</h3>}
      {reviews &&
        reviews.map((r, index) => {
          return (
            <Review
              key={index}
              title={r.title}
              content={r.content}
              date={r.date}
              rating={r.rating}
              name={r.username}
            />
          );
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
 * @param {string} errorMessage error message of review.
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
  // username,
  errorMessage,
  successMessage,
}) => {
  // rating scale
  const ratings = ['Select an option', 1, 2, 3, 4, 5];

  return (
    <div className="add-review">
      <h3>
        Tried this recipe?
        <span className="text-regular"> Leave a review.</span>
      </h3>
      <p className="spaced-30-bottom">
        Tell other users what you think of this recipes,including tips, changes
        and anything you have done to make it your own. Happy cooking!
      </p>
      {/* <p className="text-bold text-user-warning">
      Reviewer: {username}</p> */}
      <p className="text-bold text-user-warning">{errorMessage}</p>
      <p className="text-bold text-user-success">{successMessage}</p>
      <Form
        modifierClasses="form--review"
        handleClick={handleClick}
        buttonColor="black"
        buttonText="Leave a review"
      >
        <FormItem placeholder="Title" handleChange={addReviewTitle} />
        <FormItem type="textarea" handleChange={addReviewContent} />
        <FormItem
          modifierClasses="special-margins"
          type="select"
          showLabel={true}
          label="What would you rate this recipe?"
          options={ratings}
          handleChange={addReviewRating}
        />
        <p className="text-small">
          Rate this recipe on a scale of 1 through 5, 1 being the lowest rating
          and 5 being the best possible score.
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
  /**
   * RecipeReview's username.
   */
  // username: PropTypes.string,
  /**
   * RecipeReview's error message.
   */
  errorMessage: PropTypes.string,
  /**
   * RecipeReview's success message.
   */
  successMessage: PropTypes.string,
};
