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
import Artwork from '../../../images/artwork-4.svg';


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
        <p className='text-bold'>{resultJSON.number} results out of
          {' '}{resultJSON.totalResults} recipes</p>
        <br />
        <Grid numColumns={4} >
          {resultJSON.results.map((r) => {
            const ratings = r.spoonacularScore ?
              (r.spoonacularScore / 100) * 5 :
              null;
            return (
              <div key={r.id}>
                <Teaser
                  title={r.title}
                  image={r.image}
                  time={r.readyInMinutes}
                  portions={r.servings}
                  rating={Math.round(ratings * 10) / 10}
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
