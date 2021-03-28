import './styles.scss';

import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import { Constrain } from '../../layouts/Constrain/Constrain';
import { useEffect } from 'react';

/**
 * Component for Featured Hero element.
 *
 * @component
 * @param {boolean} image of the component.
 * @param {string} title of the component.
 * @param {string} excerpt of the component.
 * @param {number} portions of the component.
 * @param {number} time in mins of the component.
 * @param {number} rating of the component.
 * @return {object} (
 *   <FeaturedImage image={image} title={title} excerpt={excerpt} />
 * )
 */
export const FeaturedImage = ({
  image, title, excerpt, portions, time, rating,
}) => {
  useEffect(() => {
    window.onscroll = function() {
      handleScroll();
    };
  }, []);

  const bgImage = useRef(null);

  const handleScroll = () => {
    const scrollpos = window.scrollY;
    if (scrollpos >= 100) {
      bgImage.current.classList.add('is-animated');
      // bgImage.classList.add('is-animated');
    } else {
      bgImage.current.classList.remove('is-animated');
    }
  };

  return (
    <div className="featured-image">
      <div className="featured-image__image" style={
        { backgroundImage: `url('${image}')` }
      } aria-label={title} ref={bgImage}></div>
      <Constrain modifierClasses="constrain--narrow">
        <h1 className="featured-image__title">{title}</h1>
        { excerpt && <p>{excerpt}</p> }
        <div className="featured-image__info">
          {portions &&
            <span
              className="featured-image__icon featured-image__icon--portions">
              Yields {portions}
            </span>
          }
          {time &&
            <span className="featured-image__icon featured-image__icon--time">
              {time} mins
            </span>
          }
          {rating &&
            <span className="featured-image__icon featured-image__icon--rating">
              {rating}
            </span>
          }
        </div>
      </Constrain>
    </div>
  );
};

FeaturedImage.propTypes = {
  /**
   * FeaturedImage's image
   */
  image: PropTypes.string,
  /**
   * FeaturedImage's title
   */
  title: PropTypes.string,
  /**
   * FeaturedImage's excerpt
   */
  excerpt: PropTypes.string,
  /**
   * FeaturedImage's portions
   */
  portions: PropTypes.number,
  /**
  * FeaturedImage's time
  */
  time: PropTypes.number,
  /**
  * FeaturedImage's rating
  */
  rating: PropTypes.number,
};

FeaturedImage.defaultProps = {
  image: 'https://picsum.photos/id/306/1200/600',
  title: 'Steamed Mussels in White Wine',
  excerpt: '',
  portions: 4,
  time: 20,
  rating: 3.5,
};
