import React, { useContext, useEffect, useState } from 'react';

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
import { AuthContext } from '../../components/AuthProvider/AuthProvider';
import { HOME } from '../../../services/home-service';
import { UTILS } from '../../../utils/utils';
import { USERS } from '../../../services/user-service';
import firebase from 'firebase/app';

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
  const [topPicks, setTopPicks] = useState([]);
  const [recipeOfTheDay, setRecipeOfTheDay] = useState({});
  const { currentUser } = useContext(AuthContext);
  // const [error, setError] = useState('');
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // setError('');
    const today = new Date();
    setTopPicks([]);
    setPopularRecipes([]);
    setRecipeOfTheDay({});

    API.findRandomRecipes(8)
      .then((response) => {
        setPopularRecipes(response.recipes);
        // setRecipeOfTheDay(response.recipes[0]);
      });

    HOME.findHomeVariable('ROTD')
      .then((document) => {
        const day = today.getDate();
        if (!document.exists ||
          (document.exists && document.data().day !== day)) {
          API.findRandomRecipes(1)
            .then((response) => {
              HOME.setHomeVariable('ROTD', {
                day,
                recipe: response.recipes[0],
              })
                .then(() => {
                  setRecipeOfTheDay(response.recipes[0]);
                });
            })
            .catch((error) => {
              // setError(error);
            });
        } else {
          HOME.findHomeVariable('ROTD')
            .then((response) => {
              setRecipeOfTheDay(response.data().recipe);
            })
            .catch((error) => {
              // setError(error);
            });
        }
      })
      .catch((error) => {
        // setError(error);
      });

    HOME.findHomeVariable('TWTP')
      .then((document) => {
        const week = Math.ceil((today.getDate() - today.getDay() + 1) / 7);
        if (!document.exists ||
          (document.exists && document.data().week !== week)) {
          API.findRandomRecipes(8)
            .then((response) => {
              HOME.setHomeVariable('TWTP', {
                topRecipes: firebase.firestore.FieldValue.delete(),
              })
                .then(() => {
                  const topRecipes = response.recipes.map((recipe) =>
                    ({
                      recipeId: recipe.id,
                      tagCount: 0,
                    }),
                  );
                  HOME.setHomeVariable('TWTP', {
                    week,
                    topRecipes,
                  })
                    .then(() => {
                      setTopPicks(response.recipes);
                    });
                });
            })
            .catch((error) => {
              // setError(error);
            });
        } else {
          HOME.findHomeVariable('TWTP')
            .then((response) => {
              const sortedRecipes = response.data().topRecipes
                .sort((firstEl, secondEl) =>
                  secondEl.tagCount - firstEl.tagCount,
                )
                .filter((recipe, index) => index < 8);
              sortedRecipes.forEach((recipe) => {
                API.findRecipeById(recipe.recipeId)
                  .then((response) => {
                    setTopPicks((prevState) => ([
                      ...prevState,
                      response,
                    ]));
                  });
              });
            })
            .catch((error) => {
              // setError(error);
            });
        }
      })
      .catch((error) => {
        // setError(error);
      });

    // Leaving this here to test without making calls to Spoonacular
    // setPopularRecipes([
    //   {
    //     dishTypes: ['morning meal'],
    //     id: 715497,
    //     image: 'https://spoonacular.com/recipeImages/715497-556x370.jpg',
    //     readyInMinutes: 5,
    //     summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing ' +
    //       'elit.Vestibulum scelerisque tortor in nunc efficitur, sed ' +
    //       'aliquam neque rhoncus.',
    //     servings: 1,
    //     spoonacularScore: 99,
    //     title: 'Berry Banana Breakfast Smoothie',
    //   },
    //   {
    //     dishTypes: ['lunch'],
    //     id: 1070648,
    //     image: 'https://spoonacular.com/recipeImages/1070648-556x370.jpg',
    //     readyInMinutes: 30,
    //     summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing ' +
    //       'elit.Vestibulum scelerisque tortor in nunc efficitur, sed ' +
    //       'aliquam neque rhoncus.',
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
    //   summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing ' +
    //     'elit.Vestibulum scelerisque tortor in nunc efficitur, sed ' +
    //     'aliquam neque rhoncus.',
    //   servings: 1,
    //   spoonacularScore: 99,
    //   title: 'Berry Banana Breakfast Smoothie',
    // });
  }, []);

  useEffect(() => {
    if (currentUser) {
      USERS.getUserUpdates(currentUser.uid, setProfile);
    } else {
      setProfile(null);
    }
  }, [currentUser]);

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
            with our daily picks'/>
        <FeaturedCard
          image={getRecipeImgURL(recipeOfTheDay.id, 636, 393)}
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
              isFavorite: profile && profile.favoriteRecipes &&
                profile.favoriteRecipes.includes(recipe.id),
              url: `/recipes/${recipe.id}`,
              image: getRecipeImgURL(recipe.id, 636, 393),
              title: recipe.title,
              description: recipe.summary,
              portions: recipe.servings,
              time: recipe.readyInMinutes,
              rating: UTILS.convertScore(recipe.spoonacularScore),
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
            topPicks.map((recipe, index) =>
              <Card
                key={index}
                id={recipe.id}
                isFavorite={profile && profile.favoriteRecipes &&
                profile.favoriteRecipes.includes(recipe.id)}
                url={`/recipes/${recipe.id}`}
                image={getRecipeImgURL(recipe.id, 636, 393)}
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

export const getRecipeImgURL = (recipeId, imgLength, imgWidth) => {
  // Note: The API supports the following dimensions:-
  // 90 x 90
  // 240 x 150
  // 312 x 150
  // 312 x 231
  // 480 x 360
  // 556 x 370
  // 636 x 393
  return `https://spoonacular.com` +
    `/recipeImages/${recipeId}-${imgLength}x${imgWidth}.jpg`;
};
