import React, { useEffect, useState } from 'react';

import { API } from '../../../services/spoonacular-service';
import { FeaturedHero } from '../../components/FeaturedHero/FeaturedHero';
import { Constrain } from '../../layouts/Constrain/Constrain';
import { FeaturedCard } from '../../components/FeaturedCard/FeaturedCard';
import { Grid } from '../../layouts/Grid/Grid';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { Carousel } from '../../components/Carousel/Carousel';
import { Card } from '../../components/Card/Card';
import { Button } from '../../components/Button/Button';
import ArtVegetables from '../../../images/artwork-vegetables.svg';
import ArtChicken from '../../../images/artwork-chicken.svg';
import ArtDessert from '../../../images/artwork-dessert.svg';

/**
 * Component for Home page.
 *
 * @component
 * @return {object} (
 *   <Home />
 * )
 */
export const Home = () => {
  const [popularRecipes, setPopularRecipes] = useState([]);
  const [recipeOfTheDay, setRecipeOfTheDay] = useState({});

  useEffect(() => {
    API.findRandomRecipes(8).then((response) => {
      setPopularRecipes(response.recipes);
      setRecipeOfTheDay(response.recipes[0]);
    });

    // Leaving this here to test without making calls to Spoonacular
    // setPopularRecipes([
    //   {
    //     dishTypes: ['morning meal'],
    //     id: 715497,
    //     image: 'https://spoonacular.com/recipeImages/715497-556x370.jpg',
    //     readyInMinutes: 5,
    //     servings: 1,
    //     spoonacularScore: 99,
    //     title: 'Berry Banana Breakfast Smoothie',
    //   },
    //   {
    //     dishTypes: ['lunch'],
    //     id: 1070648,
    //     image: 'https://spoonacular.com/recipeImages/1070648-556x370.jpg',
    //     readyInMinutes: 30,
    //     servings: 6,
    //     spoonacularScore: 65,
    //     title: 'Easy Tomato Basil Chicken – One Pot Meal',
    //   },
    // ]);
    // setRecipeOfTheDay({
    //   dishTypes: ['morning meal'],
    //   id: 715497,
    //   image: 'https://spoonacular.com/recipeImages/715497-556x370.jpg',
    //   readyInMinutes: 5,
    //   servings: 1,
    //   spoonacularScore: 99,
    //   title: 'Berry Banana Breakfast Smoothie',
    // });
  }, []);

  return (
    <div className='home'>
      <Constrain>
        <FeaturedHero/>
        <Grid
          numColumns={4}
          modifierClasses='spaced-80-top spaced-20-bottom'>
          <div className='grid__item grid__tem--x-center'>
            RECIPES
          </div>
          <div className='grid__item grid__tem--x-center'>
            WORLD CUISINES
          </div>
          <div className='grid__item grid__tem--x-center'>
            USER REVIEWS
          </div>
          <div className='grid__item grid__tem--x-center'>
            CURATED MEAL PLANS
          </div>
        </Grid>
        <Grid
          numColumns={2}
          modifierClasses='grid--reverse spaced-20-bottom'>
          <div className='grid__item grid__item--lalign grid__tem--x-center'>
            <SectionTitle
              title='Recipe of the day'
              url='#'
              imagePath={ArtVegetables}
              svgClass='section-title__icon--spatula'
              paragraph='Get the best recipe every day of the week
                with our daily picks'/>
          </div>
          <div className='grid__item grid__item--lalign grid__item--spacer'>
            <FeaturedCard
              image={`https://spoonacular.com/recipeImages/${recipeOfTheDay.id}-636x393.jpg`}
              url={`/recipes/${recipeOfTheDay.id}`}
              title={recipeOfTheDay.title}
              eyebrow={
                recipeOfTheDay.dishTypes &&
                recipeOfTheDay.dishTypes.length > 0 ?
                  recipeOfTheDay.dishTypes[0] : ''
              }/>
          </div>
        </Grid>
        <Grid
          numColumns={2}
          modifierClasses='spaced-20-bottom'>
          <div className='grid__item grid__tem--x-center'>
            <SectionTitle
              title='Most popular recipes'
              url='#'
              imagePath={ArtChicken}
              svgClass='section-title__icon--spoon'
              paragraph='Top rated fan favourites from the Books of Cooks'/>
          </div>
          <div className='grid__item grid__item--spacer'>
            <Carousel cards={
              popularRecipes.map((recipe) => {
                return ({
                  id: recipe.id,
                  isFavorite: false,
                  url: `/recipes/${recipe.id}`,
                  image: `https://spoonacular.com/recipeImages/${recipe.id}-636x393.jpg`,
                  title: recipe.title,
                  description: '',
                  portions: recipe.servings,
                  time: recipe.readyInMinutes,
                  rating: recipe.spoonacularScore ?
                    Math.round(recipe.spoonacularScore * 0.5) / 10 : '',
                });
              })
            }/>
          </div>
        </Grid>
        <Grid
          numColumns={1}
          modifierClasses='spaced-80-bottom'>
          <div className='grid__item grid__tem--x-center'>
            <SectionTitle
              modifierClasses=''
              title="This week's top picks"
              url='#'
              imagePath={ArtDessert}
              svgClass='section-title__icon--measuring-cup'
              paragraph='Curated collection of recipes for this week
                by our top Cooks'/>
          </div>
        </Grid>
        <Grid numColumns={4}>
          {
            popularRecipes.map((recipe, index) =>
              <div
                className='grid__item grid__tem--x-center'
                key={index}>
                <Card
                  isFavorite={false}
                  url={`/recipes/${recipe.id}`}
                  image={`https://spoonacular.com/recipeImages/${recipe.id}-636x393.jpg`}
                  title={recipe.title}
                  description=''
                  portions={parseInt(recipe.servings)}
                  time={parseInt(recipe.readyInMinutes)}
                  rating={recipe.spoonacularScore ?
                    Math.round(recipe.spoonacularScore * 0.5) / 10 : ''}
                />
              </div>,
            )
          }
        </Grid>
        <Button text='All recipes'
          modifierClasses='button--purple button--peek-right'
          url='/search'
        />
        <br style={{ clear: 'both' }}/>
      </Constrain>
    </div>
  );
};
