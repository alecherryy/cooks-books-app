import './styles.scss';

// import React from 'react';
import React, { useState } from 'react';
// import React, { useState, useEffect } from 'react';

// import PropTypes from 'prop-types';

// import { Footer } from '../../components/Footer/Footer';
import { Teaser } from '../../components/Teaser/Teaser';
import { Button } from '../../components/Button/Button';

// import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import spoonService from '../../../services/spoonacular-service';

import { Constrain } from '../../layouts/Constrain/Constrain';
import { Grid } from '../../layouts/Grid/Grid';

import img1 from '../../../images/artwork-4.svg';

// import test from '../../../images/artwork-1.svg'


/**
 * Component for Search Page.
 *
 * @component
 * @return {object} (
 *  <SearchPage />
 * )
 */
export const SearchPage = () => {
  const [resultJSON, setResultJSON] = useState(
    { totalResults: 0, results: [], number: 0 });
  // {
  //   totalResults: 0, results:
  //     [
  //       {
  //         id: 'abc123',
  //         title: 'DUMMY DATA FOR TEST',
  //         image: 'https://picsum.photos/id/122/300/350'
  //       },
  //     ],
  // }

  const [searchTerms, setSearchTerms] = useState('');

  const updateTermAndSearchApi = () => {
    // spoonService.findRecipeById(716429)
    //   .then((theResult) => alert(theResult));
    // setResultJSON({ totalResults: 0, results: [], number: 0 });
    spoonService.findRecipesByKeywords(searchTerms)
      .then((theResult) => setResultJSON(theResult));
  };

  return (
    <>
      <Constrain>

        {/* TODO: Break this into a component */}
        <div className='welcome'>
          <img className='welcome__img' src={img1} alt="img-title"></img>
          <div className='welcome__title'>
            <span className='welcome__title-bold'>Search </span>
            all recipes</div>
          <p className='welcome__paragraph'>
            {`Type almpedit praesent honestatis mea ad,
            nemore referrentur est ei, usu no omnium 
            partiendo rationibus`}</p>
        </div>

        <div className='searchbar'>
          <input
            onChange={(e) => setSearchTerms(e.target.value)}
            value={searchTerms}></input>
          <Button
            modifierClasses='button--red'
            isButton={true}
            text='search'
            onClick={() => updateTermAndSearchApi()} />
        </div>

        <div className='results-info'>
          {`${resultJSON.number} results out of
           ${resultJSON.totalResults} Recipes`}</div>

        <div className='results-grid'>
          <Grid numColumns={4} >
            {resultJSON.results.map((r) => {
              return (
                <div key={r.id}>
                  <Teaser title={r.title} image={r.image} />
                </div>
              );
            })}
          </Grid>
        </div>

        {/* MAKE THIS BUTTON CALL API FOR 10 MORE AND APPEND? */}
        <div className='show-more-btn'>
          <Button text='Show More' />
        </div>

      </Constrain>
    </>
  );
};
