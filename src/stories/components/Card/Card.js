import './styles.scss';

// import React, { useState } from 'react';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Component for card element.
 *
 * @component
 * @param {boolean} isFavorite Card is user favorite.
 * @param {string} image Source of the component.
 * @param {string} url URL of the component.
 * @param {string} title of the component.
 * @param {string} description of the component.
 * @param {number} portions of the component.
 * @param {number} time in mins of the component.
 * @param {number} rating of the component.
 * @return {object} (
 *   <Card isFavorite={isFavorite} url={url} title={title}
 *      description={description} portions={portions}
 *      time={time} rating={rating}
 *   />
 * )
 */
export const Card = ({
  isFavorite, image, url, title, description, portions, time, rating,
}) => {
  const [favorite, setFavorite] = useState(
    isFavorite ? isFavorite : false);

  const toggleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <a className={[
      'card',
      `${favorite ? 'card--favorite' : ''}`].join(' ').trim()
    } url={url}>
      <Front title={title} description={description} image={image}/>
      <Back title={title} description={description} portions={portions}
        time={time} rating={rating} onClick={() => toggleFavorite()} />
    </a>
  );
};

Card.propTypes = {
  /**
   * Card's isFavorite
   */
  isFavorite: PropTypes.bool,
  /**
   * Card's image
   */
  image: PropTypes.string,
  /**
   * Card's url
   */
  url: PropTypes.string,
  /**
   * Card's title
   */
  title: PropTypes.string,
  /**
   * Card's description
   */
  description: PropTypes.string,
  /**
   * Card's portions
   */
  portions: PropTypes.number,
  /**
   * Card's time
   */
  time: PropTypes.number,
  /**
   * Card's rating
   */
  rating: PropTypes.number,
};

Card.defaultProps = {
  isFavorite: false,
  image: '',
  url: '#',
  title: 'Card title',
  description: 'Lorem ipsum dolor sit amet, errem postulant' +
    ' ei sea, an brute ocurreret sed.',
  portions: 4,
  time: 20,
  rating: 3.5,
};

/**
 * Component for front card element.
 *
 * @component
 * @param {string} title of the component.
 * @param {string} image Source of the component.
 * @param {string} description of the component.
 * @return {object} (
 *   <Front description={description} title={title}
 *      image={image} />
 * )
 */
const Front = ({ title, image, description }) => {
  return (
    <span className="card__front"
      style={{ backgroundImage: `url(${image})` }}>
      <span className="card__title">
        {title}
      </span>
      <span>{description}</span>
    </span>
  );
};

Front.propTypes = {
  /**
   * Front's title
   */
  title: PropTypes.string,
  /**
   * Front's image
   */
  image: PropTypes.string,
  /**
   * Front's description
   */
  description: PropTypes.string,
};

Front.defaultProps = {
  image: '',
  title: 'Card title',
  description: '',
};

/**
 * Component for card element.
 *
 * @component
 * @param {boolean} favorite card.
 * @param {string} title of the component.
 * @param {string} description of the component.
 * @param {number} portions of the component.
 * @param {number} time in mins of the component.
 * @param {number} rating of the component.
 * @param {func} onClick of the component.
 * @return {object} (
 *   <Back favorite={favorite} title={title}
 *      description={description} portions={portions}
 *      time={time} rating={rating} onClick={onClick} />
 * )
 */
const Back = ({
  favorite, title, description, portions, time, rating, onClick,
}) => {
  return (
    <span className="card__back">
      <button className="card__favorite" onClick={onClick}>
        {favorite ? 'Remove from' : 'Add to'} favorites
      </button>
      <span className="card__title">
        {title}
      </span>
      {description}
      <div className="card__info">
        {description &&
          <span className="card__icon card__icon--portions">
            Yields {portions}
          </span>
        }
        {time &&
          <span className="card__icon card__icon--time">
            {time} mins
          </span>
        }
        {rating &&
          <span className="card__icon card__icon--rating">
            {rating}
          </span>
        }
      </div>
    </span>
  );
};

Back.propTypes = {
  /**
   * Front's favorite
   */
  favorite: PropTypes.bool,
  /**
   * Back's title
   */
  title: PropTypes.string,
  /**
   * Back's description
   */
  description: PropTypes.string,
  /**
   * Back's portions
   */
  portions: PropTypes.number,
  /**
   * Back's time
   */
  time: PropTypes.number,
  /**
   * Back's rating
   */
  rating: PropTypes.number,
  /**
   * Back's onClick
   */
  onClick: PropTypes.func,
};

Back.defaultProps = {
  favorite: false,
  title: 'Card title',
  description: 'Lorem ipsum dolor sit amet, errem postulant' +
    ' ei sea, an brute ocurreret sed.',
  portions: 4,
  time: 20,
  rating: 3.5,
  onClick: null,
};
