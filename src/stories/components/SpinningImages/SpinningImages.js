import './styles.scss';
import Artwork1 from '../../../images/artwork-1.svg';
import Artwork2 from '../../../images/artwork-2.svg';
import React from 'react';

/**
 * Component for button element.
 *
 * @component
 * @return {object} (
 *   <SpinningImages />
 * )
 */
export const SpinningImages = () => {
  const imageArray = [
    Artwork1,
    Artwork2,
  ];

  return (
    <div className="spinning-images">
      { imageArray.map((image, i) =>
        <img className="spinning-images__image"
          key={i} src={image} alt="Decorative Artwork" />)
      }
    </div>
  );
};
