import './styles.scss';

// import React, { useState } from 'react';
import PropTypes from 'prop-types';

// import { Footer } from '../../components/Footer/Footer';
import { Teaser } from '../../components/Teaser/Teaser';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
// import spoonService from '../../../services/spoonacular-service';

import { Constrain } from '../../layouts/Constrain/Constrain';
import { Grid } from '../../layouts/Grid/Grid';


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
  // const [listItems, setListItems] = useState(['a', 'b', 'c', 'd']);
  // const [searchTerms, setSearchTerms] = useState('');

  // const updateTermAndSearchApi = () => {
  //   alert('clicked button');
  //   setListItems([]);
  //   // const tempList = [];
  //   spoonService.findRecipesByKeywords(listItems)
  //     .then((theRecipes) => alert(theRecipes.length));
  //   // .then((theRecipes) => theRecipes.map( (recipe) => {
  //   //   tempList.push( recipe );
  //   // }));
  //   // alert(tempList);
  //   // alert(listItems);
  // };

  return (
    <>
      {/* <h2>SEARCH_PAGE:_{test}</h2> */}
      {/* <h4>SEARCH_TERMS:_{searchTerms}</h4> */}
      {/* <input
        onChange={(e) => setSearchTerms(e.target.value)}
        value={searchTerms}></input>
      <div><button
        onClick={() => updateTermAndSearchApi()}>Search</button></div>
      {listItems} */}
      <Constrain modifierClasses='constrain--narrow'>
        <h1>Testerino</h1>
        <SectionTitle
          imagePath=''
          title='Search All Recipes'
          paragraph={`Type almpedit praesent honestatis mea ad,
          nemore referrentur est ei, usu no omnium partiendo rationibus`} />
      </Constrain>

      <Grid numColumns={4} >
        <Teaser />
        <Teaser />
        <Teaser />
        <Teaser />
      </Grid>
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
      {/* TODO: Why does this throw errors for me */}
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
