import './styles.scss';

// import React from 'react';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, useHistory } from 'react-router-dom';
import { useParams } from 'react-router';


// import React, { useState, useEffect } from 'react';

// import PropTypes from 'prop-types';

// import { Footer } from '../../components/Footer/Footer';
import { Teaser } from '../../components/Teaser/Teaser';
import { Button } from '../../components/Button/Button';
// import { Form } from '../../components/Form/Form';
import { FormItem } from '../../components/FormItem/FormItem';


// import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { API } from '../../../services/spoonacular-service';

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
  const { searchTerms } = useParams();

  const [resultJSON, setResultJSON] = useState(
    { totalResults: 0, results: [], number: 0 });

  const [searchBar, setSearchBar] = useState('');
  const history = useHistory();


  // const updateTermAndSearchApi = () => {
  //   // spoonService.findRecipeById(716429)
  //   //   .then((theResult) => alert(theResult));
  //   // setResultJSON({ totalResults: 0, results: [], number: 0 });
  //   if (searchBar === '') {
  //     alert('pls dont search with no terms');
  //     return;
  //   }
  //   alert('clicked me!');
  //   API.findRecipesByKeywords(searchBar)
  //     .then((theResult) => setResultJSON(theResult));
  // };

  useEffect(() => {
    setSearchBar(searchTerms);
    if (searchBar) {
      API.findRecipesByKeywords(searchBar)
        .then((theResults) => setResultJSON(theResults));
    }
  }, [searchTerms]);

  return (
    <>
      <Router >
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

          <div className='search'>
            <div className='search__input'>
              <h2>{searchTerms}</h2>
              <FormItem
                handleChange={(e) => setSearchBar(e.target.value)}
                placeholder={'Type something to search for'}
                value={searchBar} />
            </div>
            {/* <Button
              modifierClasses='button--red button--peek'
              isButton={false}
              text='search'
              url={`${searchBar}`}
            /> */}
            {/* <Button
              modifierClasses='button--red button--peek'
              isButton={true}
              text='dummy'
              onClick={() => updateTermAndSearchApi()}
            /> */}
            <Button
              modifierClasses='button--red button--peek'
              isButton={true}
              text='tryMe'
              onClick={() => {
                history.push(`/search/${searchBar}`);
              }}
            />
          </div>

          <div className='results-info'>
            {`${resultJSON.number} results out of
           ${resultJSON.totalResults} recipes.`}</div>

          <div className='results-grid'>
            <Grid numColumns={4} >
              {resultJSON.results.map((r) => {
                return (
                  <div key={r.id}>
                    <Teaser
                      title={r.title}
                      image={r.image}
                      time={r.preparationMinutes}
                      portions={r.servings}
                      rating={((r.spoonacularScore + 10) / 20) | 0}
                      url={`/recipes/${r.id}`} />
                  </div>
                );
              })}
            </Grid>
          </div>

          {/* TODO: MAKE THIS BUTTON CALL API FOR 10 MORE AND APPEND */}
          <div className='show-more-btn'>
            <Button text='Load More Recipes' />
          </div>

        </Constrain>
      </Router>
    </>
  );
};
