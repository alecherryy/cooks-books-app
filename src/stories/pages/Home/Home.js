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
import { SplitSection } from '../../layouts/SplitSection/SplitSection';


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
      </Constrain>
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
      <SplitSection modifierClasses="split-section--reverse">
        <SectionTitle
          title='Recipe of the day'
          imagePath={ArtVegetables}
          svgClass='section-title__icon--spatula'
          paragraph='Get the best recipe every day of the week
            with our daily picks' />
        <FeaturedCard
          image={`https://spoonacular.com/recipeImages/${recipeOfTheDay.id}-636x393.jpg`}
          url={`/recipes/${recipeOfTheDay.id}`}
          title={recipeOfTheDay.title}
          eyebrow={
            recipeOfTheDay.dishTypes &&
            recipeOfTheDay.dishTypes.length > 0 ?
              recipeOfTheDay.dishTypes[0] : ''
          }/>
      </SplitSection>
      <SplitSection>
        <SectionTitle
          title='Most popular recipes'
          url='#'
          imagePath={ArtChicken}
          svgClass='section-title__icon--spoon'
          paragraph='Top rated fan favourites from the Books of Cooks'/>
        <Carousel cards={
          popularRecipes.map((recipe) => {
            return ({
              id: recipe.id,
              isFavorite: false,
              url: `/recipes/${recipe.id}`,
              image: `https://spoonacular.com/recipeImages/${recipe.id}-636x393.jpg`,
              title: recipe.title,
              description: recipe.summary,
              portions: recipe.servings,
              time: recipe.readyInMinutes,
              rating: recipe.spoonacularScore ?
                Math.round(recipe.spoonacularScore * 0.5) / 10 : '',
            });
          })
        }/>
      </SplitSection>
      <Constrain>
        <SectionTitle
          modifierClasses='spaced-aside-auto spaced-80-bottom'
          title="This week's top picks"
          url='#'
          imagePath={ArtDessert}
          svgClass='section-title__icon--measuring-cup'
          paragraph='Curated collection of recipes for this week
            by our top Cooks'/>
        <Grid numColumns={4}>
          {
            popularRecipes.map((recipe, index) =>
              <Card
                key={index}
                isFavorite={false}
                url={`/recipes/${recipe.id}`}
                image={`https://spoonacular.com/recipeImages/${recipe.id}-636x393.jpg`}
                title={recipe.title}
                description={`${recipe.summary.toString().split('. ')[0]}.`}
                portions={parseInt(recipe.servings)}
                time={parseInt(recipe.readyInMinutes)}
                rating={recipe.spoonacularScore ?
                  Math.round(recipe.spoonacularScore * 0.5) / 10 : ''}
              />,
            )
          }
        </Grid>
      </Constrain>
      <Constrain modifierClasses="align-right spaced-30-bottom">
        <Button text='All recipes'
          modifierClasses='button--purple button--peek-right'
          url='/search'
        />
      </Constrain>
    </div>
  );
};
