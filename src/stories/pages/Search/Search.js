import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router';

import { Constrain } from '../../layouts/Constrain/Constrain';
import { Grid } from '../../layouts/Grid/Grid';
import { Teaser } from '../../components/Teaser/Teaser';
// import { Button } from '../../components/Button/Button';
import { Form } from '../../components/Form/Form';
import { FormItem } from '../../components/FormItem/FormItem';
import { API } from '../../../services/spoonacular-service';
import { RECIPES } from '../../../services/recipe-service';
import Artwork from '../../../images/artwork-4.svg';
import { UTILS } from '../../../utils/utils';


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
    { totalResults: 10, results: [], number: 0 });
  const history = useHistory();

  /**
   * Stiches together data from firebase and spoonacular.
   *   Ugly as heck due to needing information from two
   *   promises that have to resolve.
   * @param {string} searchTerms Terms to search.
   */
  const findAggregateSearchResults = (searchTerms) => {
    // call spoonacular first, save results
    API.findRecipesByKeywords(searchTerms)
      .then((theResults) => {
        const spoonJson = theResults;

        // when promise resolves, call firebase
        RECIPES.findRecipesByTitle(searchTerms)
          .then((snapshot) => {
            // iterate over all returned elements, add to spoonjson
            snapshot.forEach((doc) => {
              spoonJson.results.push(doc.data());
            });

            // set state to stitched json variable
            setResultJSON(spoonJson);
          });
      });
  };


  // listen for changes in url, search based on that
  useEffect(() => {
    setSearchBar(searchTerms);

    if (searchTerms) {
      findAggregateSearchResults(searchTerms);
    }
  }, [searchTerms]);

  return (
    <div className="search">
      <Constrain>
        <Constrain modifierClasses="constrain--narrow">
          <img src={Artwork} alt="Decorative Graphics" />
          <h1>Search <span className="text-regular">
            all recipes</span>
          </h1>
          <p>Type almpedit praesent honestatis mea ad,
            nemore referrentur est ei, usu no omnium
            partiendo rationibus</p>
          <Form
            buttonText='Search recipes'
            handleClick={(e) => {
              e.preventDefault();
              history.push(`/search/${searchBar}`);
            }}>
            <FormItem
              handleChange={(e) => setSearchBar(e.target.value)}
              placeholder={'Search for recipes'}
              value={searchBar} />
          </Form>
        </Constrain>
        <p className='text-bold'>{resultJSON.results.length} results out of
          {' '}
          {resultJSON.totalResults - 10 + resultJSON.results.length} recipes</p>
        <br />
        <Grid numColumns={4} >
          {resultJSON.results.map((r) => {
            return (
              <div key={r.id}>
                <Teaser
                  title={r.title}
                  image={r.image}
                  time={r.readyInMinutes}
                  portions={r.servings}
                  rating={UTILS.convertScore(r.spoonacularScore)}
                  excerpt={`${r.summary.toString().split('. ')[0]}.`}
                  // excerpt={`${r.title} from ${r.sourceName}`}
                  url={`/recipes/${r.id}`} />
              </div>
            );
          })}
        </Grid>
        {/* TODO: MAKE THIS BUTTON CALL API FOR 10 MORE AND APPEND */}
        {/* <Constrain modifierClasses="constrain--narrow">
          <Button text='Load More Recipes' />
        </Constrain> */}
      </Constrain>
    </div>
  );
};
