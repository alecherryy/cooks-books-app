import './styles.scss';

import React from 'react';
import PropTypes from 'prop-types';
import { Fragment } from 'react';

/**
 * Component for Review element.
 *
 * @component
 * @param {boolean} isUserVariant True if Review is User variant.
 * @param {string} modifierClasses Class modifiers of the Review component.
 * @param {string} title Title for the Review component.
 * @param {number} rating Rating in stars of the Review component.
 * @param {string} date Date of creation of the Review component.
 * @param {string} name Name of user who wrote the review.
 * @param {string} profUrl URL to profile of author of component.
 * @param {string} content Content of the review component.
 * @param {string} recipeTitle Title of the recipe referenced by component.
 * @param {string} recipeLink Link to the recipe referenced by component.
 * @return {object} (
 *  <Review modifierClasses={modifierClasses} title={title}
 *    rating={rating} date={date} name={name} profUrl={profUrl}
 *    content={content} recipeTitle={recipeTitle} recipeLink={recipeLink}/>
 * )
 */
export const Review = ({
  isUserVariant, modifierClasses, title, rating, date, name,
  profUrl, content, recipeTitle, recipeLink,
}) => {
  const classes = ['review', `${modifierClasses}`].join(' ').trim();

  return (
    <Fragment>
      <div className={classes}>

        {isUserVariant && <div className="review__recipe">
          {recipeTitle}</div>}

        <div className="review__title">
          {title}
        </div>

        <div className="review__sub-header">
          <span className="review__sub-header-item">
            {/* This is awful, I know - eek. I need to chat about how to
              do this right. */}
            <i className="review__icon review__icon--star"></i>
            <i className="review__icon review__icon--star"></i>
            <i className="review__icon review__icon--star"></i>
            <i className="review__icon review__icon--star"></i>
            <i className="review__icon review__icon--star"></i>
            {/* {rating} */}
          </span>
          <span className="review__sub-header-item">{date}</span>
          {!isUserVariant && <span className="review__sub-header-item">
            By: <a href={profUrl}>@{name}</a>
          </span>}
        </div>

        <div className="review__content">
          {content}
        </div>

        {isUserVariant &&
          <div className="review__view-recipe">
            <br />
            <a href={recipeLink}>
              View Recipe
              <i className="review__icon review__icon--arrow pad-left"></i>
            </a>
          </div>}
      </div>
    </Fragment>
  );
};

Review.propTypes = {

  /**
   * Review's isUserVariant boolean field.
   */
  isUserVariant: PropTypes.bool,

  /**
   * Review's modifier classes.
   */
  modifierClasses: PropTypes.string,

  /**
   * Review's title.
   */
  title: PropTypes.string,

  /**
   * Review's rating.
   */
  rating: PropTypes.number,

  /**
   * Review's date.
   */
  date: PropTypes.string,
  // TODO: Actually record this as a date? I was getting an error
  // date: PropTypes.instanceOf( Date ),

  /**
   * Review's name.
   */
  name: PropTypes.string,

  /**
   * Review's profUrl.
   */
  profUrl: PropTypes.string,

  /**
   * Review's content.
   */
  content: PropTypes.string,

  /**
   * Review's recipeTitle.
   */
  recipeTitle: PropTypes.string,

  /**
   * Review's recipeLink.
   */
  recipeLink: PropTypes.string,
};

Review.defaultProps = {
  isUserVariant: false,
  modifierClasses: '',
  title: 'Review Title',
  rating: 4,
  date: 'August 16, 1929',
  // date: new Date('August 16, 1929 06:00:00'),
  name: 'Reviewer',
  profUrl: '#',
  content: 'Lorem ipsum dolor sit amet, errem postulant' +
    ' ei sea, an brute ocurreret sed.',
  recipeTitle: 'Recipe Title',
  recipeLink: 'Recipe Link',
};
