import './styles.scss';

import React from 'react';
import PropTypes from 'prop-types';

import { Footer } from '../../components/Footer/Footer';

/**
 * Component for SearchPage.
 *
 * @component
 * @param {string} test Text to render.
 * @return {object} (
 *  <SearchPage />
 * )
 */
export const SearchPage = ({ test }) => {
  // const helloWorld = 'Hello World!';
  return (
    <>
      <h2>SEARCH_PAGE:_{test}</h2>
      {/* <Footer /> */}
    </>
  );
};

SearchPage.propTypes = {
  /**
   * SearchPages's text to render
   */
  test: PropTypes.string,
};

SearchPage.defaultProps = {
  test: 'lorem ipsum',
};
