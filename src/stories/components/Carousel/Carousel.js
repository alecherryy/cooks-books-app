import './styles.scss';
import 'swiper/swiper.scss';

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card } from '../Card/Card';
import { Button } from '../Button/Button';

/**
 * Component for Carousel element.
 *
 * @component
 * @param {array} cards Array of card objects.
 * @return {object} (
 *   <Carousel cards={cards} />
 * )
 */
export const Carousel = ({ cards }) => {
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    setSwiper(document.querySelector('.swiper-container').swiper);
  }, []);

  useEffect(() => {
    if (swiper) {
      swiper.$wrapperEl.addClass('swiper-wrapper--pad');
    }
  }, [swiper]);

  const nextRecipe = () => {
    swiper.slideNext();
  };

  const argsSwiper = {
    spaceBetween: 20,
    slidesPerView: 'auto',
    loop: true,
    loopedSlides: 20,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 3,
      },
      1024: {
        width: 1024,
        slidesPerView: 4,
      },
    },
  };

  return (
    <>
      <Swiper {...argsSwiper} >
        {
          cards.map((card, index) =>
            <SwiperSlide key={index}
              className='swiper-slide--box'>
              <Card isFavorite={card.isFavorite}
                url={card.url}
                image={card.image}
                title={card.title}
                description={card.description}
                portions={card.portions}
                time={card.time}
                rating={card.rating}
              />
            </SwiperSlide>,
          )
        }
        <span slot='container-end'>
          <Button text='Next'
            modifierClasses='button--blue button--peek'
            isButton={true}
            onClick={nextRecipe}
          />
        </span>
      </Swiper>
    </>
  );
};

Carousel.propTypes = {
  /**
   * An array of cards
   */
  cards: PropTypes.array,
};

Carousel.defaultProps = {
  cards: [
    {
      isFavorite: false,
      url: '#',
      title: 'Card title',
      description: 'Lorem ipsum dolor sit amet',
      portions: '4',
      time: '20',
      rating: '3.5',
    },
  ],
};
