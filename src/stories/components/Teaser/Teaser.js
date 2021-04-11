import './styles.scss';

import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from '../../layouts/Grid/Grid';
import { Link } from 'react-router-dom';

/**
 * Component for teaser element.
 *
 * @component
 * @param {string} image Source of the component.
 * @param {string} url URL of the component.
 * @param {string} title of the component.
 * @param {string} excerpt of the component.
 * @param {number} portions of the component.
 * @param {number} time in mins of the component.
 * @param {number} rating of the component.
 * @return {object} (
 *   <Teaser url={url} image={image} excerpt={excerpt} title={title}
 *      portions={portions} time={time} rating={rating}
 *   />
 * )
 */
export const Teaser = ({
  url, image, title, excerpt, portions, time, rating,
}) => {
  return (
    <div className="teaser">
      <img className="teaser__image" src={image} />
      <div className="teaser__content">
        <Link to={url} className="teaser__link">
          <h4 className="teaser__title">{title}</h4>
        </Link>
        <p dangerouslySetInnerHTML={ { __html: excerpt } } />
        <Grid numColumns={3}>
          <div className="teaser__item teaser__item--portions">
            Yields {portions}
          </div>
          <div className="teaser__item teaser__item--time">
            {time} min
          </div>
          <div className="teaser__item teaser__item--rating">
            {rating}
          </div>
        </Grid>
      </div>
    </div>
  );
};

Teaser.propTypes = {
  /**
   * Teaser's image
   */
  image: PropTypes.string,
  /**
   * Teaser's url
   */
  url: PropTypes.string,
  /**
   * Teaser's title
   */
  title: PropTypes.string,
  /**
   * Teaser's excerpt
   */
  excerpt: PropTypes.string,
  /**
   * Teaser's portion
   */
  portions: PropTypes.number,
  /**
   * Teaser's time
   */
  time: PropTypes.number,
  /**
   * Teaser's rating
   */
  rating: PropTypes.number,
};

Teaser.defaultProps = {
  image: '',
  url: '#',
  title: 'This is a recipe teaser',
  excerpt: 'Saperet dolorum commune ad vel, ' +
    'harum mnesarchum mei ad, ridens salutatus est et.',
  portions: 4,
  time: 25,
  rating: 3.8,
};
