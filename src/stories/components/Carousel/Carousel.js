import 'swiper/swiper.scss';
import './styles.scss';

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
    loop: true,
    observer: true,
    observeParents: true,
    spaceBetween: 15,
    freeMode: true,
    slidesPerView: 1,
    breakpoints: {
      1024: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1400: {
        slidesPerView: 3,
      },
    },
  };

  return (
    <>
      <Swiper {...argsSwiper}
        className='swiper-container--layout'>
        {
          cards.map((card) =>
            <SwiperSlide key={card.id}
              className='swiper-slide--box'>
              <Card
                id={card.id}
                isFavorite={card.isFavorite}
                url={card.url}
                image={card.image}
                title={card.title}
                description={`${card.description.toString().split('. ')[0]}.`}
                portions={parseInt(card.portions)}
                time={parseInt(card.time)}
                rating={parseInt(card.rating)}
              />
            </SwiperSlide>,
          )
        }
        <span slot='container-end'>
          <Button text='Next'
            modifierClasses='button--red button--peek-left'
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
      rating: 3.5,
    },
  ],
};
