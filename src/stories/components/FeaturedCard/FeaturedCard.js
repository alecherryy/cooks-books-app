import './styles.scss';

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component for featured card element.
 *
 * @component
 * @param {string} image Source of the component.
 * @param {string} url URL of the component.
 * @param {string} title of the component.
 * @param {string} eyebrow of the component.
 * @return {object} (
 *   <FeaturedCard url={url} image={image} eyebrow={eyebrow} title={title} />
 * )
 */
export const FeaturedCard = ({ url, image, eyebrow, title }) => {
  return (
    <div className="featured-card">
      <a href={url} className="featured-card__link">
        <img className="featured-card__image" src={image}
          alt="Photo of the recipe dish" />
        <span className="featured-card__content">
          <span className="featured-card__eyebrow">{eyebrow}</span>
          <span className="featured-card__title">{title}</span>
          <span className="featured-card__button">Try it now</span>
        </span>
      </a>
    </div>
  );
};

FeaturedCard.propTypes = {
  /**
   * FeaturedCard's image
   */
  image: PropTypes.string,
  /**
   * FeaturedCard's url
   */
  url: PropTypes.string,
  /**
   * FeaturedCard's title
   */
  title: PropTypes.string,
  /**
   * FeaturedCard's eyebrow
   */
  eyebrow: PropTypes.string,
};

FeaturedCard.defaultProps = {
  image: '',
  url: '#',
  title: 'This is a featured card',
  eyebrow: 'Eyebrow',
};
