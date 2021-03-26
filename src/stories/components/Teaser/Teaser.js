import './styles.scss';

import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from '../../layouts/Grid/Grid';

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
      <MaskImage image={image} />
      <div className="teaser__content">
        <a href={url} className="teaser__link">
          <h4 className="teaser__title">{title}</h4>
        </a>
        <p>{excerpt}</p>
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

/**
 * Component for mask image element.
 *
 * @component
 * @param {string} image Source of the component.
 * @return {object} (
 *   <MaskImage image={image} />
 * )
 */
const MaskImage = ({ image }) => {
  return (
    /* eslint-disable max-len */
    <>
      <svg className="teaser__mask">
        <defs>
          <clipPath id="MaskImage">
            <path className="teaser__path" d="M85.601597,12.2407264 L175.101597,167.259274 C181.590943,178.49915 177.739877,192.871525 166.5,199.360871 C155.260123,205.850216 140.887749,201.99915 134.398403,190.759274 L44.898403,35.7407264 C38.4090572,24.5008497 42.2601233,10.1284752 53.5,3.63912937 C64.7398767,-2.85021644 79.1122512,1.00084971 85.601597,12.2407264 Z M50.0884573,60.7083488 L115.088457,173.291651 C120.05902,181.900918 117.109267,192.909546 108.5,197.880109 C99.8907328,202.850671 88.8821055,199.900918 83.9115427,191.291651 L18.9115427,78.7083488 C13.94098,70.0990815 16.8907328,59.0904542 25.5,54.1198915 C34.1092672,49.1493287 45.1178945,52.0990815 50.0884573,60.7083488 Z M27.0573684,116.001289 L55.0573684,164.498711 C59.0614328,171.433954 56.685243,180.302015 49.75,184.30608 C42.814757,188.310144 33.9466961,185.933954 29.9426316,178.998711 L1.94263165,130.501289 C-2.06143279,123.566046 0.31475696,114.697985 7.25,110.69392 C14.185243,106.689856 23.0533039,109.066046 27.0573684,116.001289 Z M136.088457,10.7083488 L201.088457,123.291651 C206.05902,131.900918 203.109267,142.909546 194.5,147.880109 C185.890733,152.850671 174.882105,149.900918 169.911543,141.291651 L104.911543,28.7083488 C99.94098,20.0990815 102.890733,9.09045423 111.5,4.11989149 C120.109267,-0.850671263 131.117895,2.09908153 136.088457,10.7083488 Z M194.057368,30.0012887 L222.057368,78.4987113 C226.061433,85.4339543 223.685243,94.3020152 216.75,98.3060797 C209.814757,102.310144 200.946696,99.9339543 196.942632,92.9987113 L168.942632,44.5012887 C164.938567,37.5660457 167.314757,28.6979848 174.25,24.6939203 C181.185243,20.6898559 190.053304,23.0660457 194.057368,30.0012887 Z" />
          </clipPath>
        </defs>
      </svg>
      <img className="teaser__image" src={image}
        alt="Photo of the recipe dish" />
    </>
    /* eslint-enable */
  );
};

MaskImage.propTypes = {
  /**
   * MaskImage's image
   */
  image: PropTypes.string,
};

MaskImage.defaultProps = {
  image: '',
};
