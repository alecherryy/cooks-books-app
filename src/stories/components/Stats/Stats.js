import './styles.scss';

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Grid } from '../../layouts/Grid/Grid';
import Dish from '../../../images/icon-dish-pink.svg';
import Pot from '../../../images/icon-pot-pink.svg';
import CookBook from '../../../images/icon-cookbook-pink.svg';
import Plant from '../../../images/icon-plant-pink.svg';
import { USERS } from '../../../services/user-service';
import { REVIEWS } from '../../../services/review-service';

/**
 * Component for Stats element.
 *
 * @component
 * @return {object} (
 *   <Stats />
 * )
 */
/* eslint-disable */
export const Stats = () => {
  const [stats, setStats] = useState({
    users: '',
    reviews: '',
    recipes: '',
  });

  useEffect(async () => {
    const users = await USERS.findAllUsers()
      .then((res) => res.size)

    const reviews = await REVIEWS.findAllReviews()
      .then((res) => res.size)

    setStats({
      ...stats,
      users,
      reviews,
    })
  }, []);

  return (
    <div className="stats">
      <Grid numColumns={4}>
        <Item num='2.6k' image={CookBook} text='Ingredients' />
        <Item num={`${stats.users}`} image={Dish} text='Users' />
        <Item num={`${stats.reviews}`} image={Pot} text='Reviews' />
        <Item num='26' image={Plant} text='Cuisines' />
      </Grid>
    </div>
  );
};

/**
 * Component for Stats element.
 *
 * @component
 * @param {string} image source of the item
 * @param {string} text of the item
 * @param {string} num of the item
 * @return {object} (
 *   <Stats image={image} text={text} />
 * )
 */
const Item = ({ image, text, num }) => {
  return (
    <div className="stats__item">
      <img className="stats__image" src={image} alt="Stat Icon" />
      <span className="stats__num">{num}</span>
      <p>{text}</p>
    </div>
  );
};


Item.propTypes = {
  /**
   * Item's image
   */
  image: PropTypes.string,
  /**
   * Item's text
   */
  text: PropTypes.string,
  /**
   * Item's num
   */
  num: PropTypes.string,
};

Item.defaultProps = {
  image: '',
  text: 'Item text',
  number: '1',
};
