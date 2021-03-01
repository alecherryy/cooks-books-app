import './styles.scss';
import Artwork1 from '../../../images/artwork-1.svg';
import Artwork2 from '../../../images/artwork-2.svg';
// import Artwork3 from '../../../images/artwork-3.svg';
// import Artwork4 from '../../../images/artwork-4.svg';
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
        <img className="spinninng-images__image"
          key={i} src={image} alt="Decorative Artwork" />)
      }
    </div>
  );
};
