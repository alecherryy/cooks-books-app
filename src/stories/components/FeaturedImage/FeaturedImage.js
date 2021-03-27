import './styles.scss';

import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Constrain } from '../../layouts/Constrain/Constrain';
import { useEffect } from 'react';

/**
 * Component for Featured Hero element.
 *
 * @component
 * @return {object} (
 *   <FeaturedImage />
 * )
 */
export const FeaturedImage = ({ image, alt, title, excerpt }) => {
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
      } aria-label={alt} ref={bgImage}></div>
      <Constrain modifierClasses="constrain--narrow">
        <h1 className="featured-image__title">{title}</h1>
        { excerpt && <p>{excerpt}</p> }
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
   * FeaturedImage's alt text
   */
  alt: PropTypes.string,
  /**
   * FeaturedImage's title
   */
  title: PropTypes.string,
  /**
   * FeaturedImage's excerpt
   */
  excerpt: PropTypes.string,
};

FeaturedImage.defaultProps = {
  image: '',
  url: '#',
  title: 'This is a recipe title',
  excerpt: '',
};
