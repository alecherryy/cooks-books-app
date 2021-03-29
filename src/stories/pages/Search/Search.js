import './styles.scss';

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, useHistory } from 'react-router-dom';
import { useParams } from 'react-router';

import { Constrain } from '../../layouts/Constrain/Constrain';
import { Grid } from '../../layouts/Grid/Grid';
import { Teaser } from '../../components/Teaser/Teaser';
import { Button } from '../../components/Button/Button';
import { Form } from '../../components/Form/Form';
import { FormItem } from '../../components/FormItem/FormItem';
import { API } from '../../../services/spoonacular-service';
import artwork from '../../../images/artwork-4.svg';


/**
 * Component for Search Page.
 *
 * @component
 * @return {object} (
 *  <SearchPage />
 * )
 */
export const Search = () => {
  const { searchTerms } = useParams();
  const [searchBar, setSearchBar] = useState('');
  const [resultJSON, setResultJSON] = useState(
    { totalResults: 0, results: [], number: 0 });
  const history = useHistory();

  // listen for changes in url, search based on that
  useEffect(() => {
    setSearchBar(searchTerms);
    if (searchTerms) {
      API.findRecipesByKeywords(searchTerms)
        .then((theResults) => setResultJSON(theResults));
    }
  }, [searchTerms]);

  return (
    <>
      <Router >
        <Constrain>
          {/* TODO: Break this into a component */}
          <Constrain modifierClasses="constrain--narrow">
            <img src={artwork} alt="img-title" />
            <h1>
              <span><b>Search </b></span>
              all recipes
            </h1>
            <p>{`Type almpedit praesent honestatis mea ad,
              nemore referrentur est ei, usu no omnium 
              partiendo rationibus`}</p>
            <Form
              buttonText='Search'
              handleClick={() => {
                history.push(`/search/${searchBar}`);
              }}>
              <FormItem
                handleChange={(e) => setSearchBar(e.target.value)}
                placeholder={'Type something to search for'}
                value={searchBar} />
            </Form>
          </Constrain>

          <div className='results-infsso'>
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
                      time={r.readyInMinutes}
                      portions={r.servings}
                      rating={((r.spoonacularScore + 10) / 20) | 0}
                      excerpt={`${r.title} from ${r.sourceName}`}
                      url={`/recipes/${r.id}`} />
                  </div>
                );
              })}
            </Grid>
          </div>

          {/* TODO: MAKE THIS BUTTON CALL API FOR 10 MORE AND APPEND */}
          <Constrain modifierClasses="constrain--narrow">
            <Button text='Load More Recipes' />
          </Constrain>

        </Constrain>
      </Router>
    </>
  );
};
