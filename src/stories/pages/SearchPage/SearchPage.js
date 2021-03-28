import './styles.scss';

import React, { useState } from 'react';
import PropTypes from 'prop-types';

// import { Footer } from '../../components/Footer/Footer';
import { Teaser } from '../../components/Teaser/Teaser';
import spoonService from '../../../services/spoonacular-service';

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
  const [listItems, setListItems] = useState(['a', 'b', 'c', 'd']);
  const [searchTerms, setSearchTerms] = useState('');

  const updateTermAndSearchApi = () => {
    alert('clicked button');
    setListItems([]);
    // const tempList = [];
    spoonService.findRecipesByKeywords(listItems)
      .then((theRecipes) => alert(theRecipes.length));
    // .then((theRecipes) => theRecipes.map( (recipe) => {
    //   tempList.push( recipe );
    // }));
    // alert(tempList);
    // alert(listItems);
  };

  return (
    <>
      <h2>SEARCH_PAGE:_{test}</h2>
      <h4>SEARCH_TERMS:_{searchTerms}</h4>
      <input
        onChange={(e) => setSearchTerms(e.target.value)}
        value={searchTerms}></input>
      <div><button
        onClick={() => updateTermAndSearchApi()}>Search</button></div>
      {listItems}
      {/* <ul>
        <li>ahhh</li>
        <li>{listItems}</li>
        {
          listItems.map((item) =>
            <li key={item}>Ahhh{item}</li>,
          )
        }
      </ul> */}
      <Teaser />
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
