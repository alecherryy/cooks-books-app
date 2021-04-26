import './App.scss';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { Header } from './stories/layouts/Header/Header';
import { Main } from './stories/layouts/Main/Main';
import { Footer } from './stories/layouts/Footer/Footer';
import { MainMenu } from './stories/components/MainMenu/MainMenu';
import { Recipe } from './stories/pages/Recipe/Recipe';
import { Login } from './stories/pages/Login/Login';
import { Home } from './stories/pages/Home/Home';
import { Signup } from './stories/pages/Signup/Signup';
import { Search } from './stories/pages/Search/Search';
import { Account } from './stories/pages/Account/Account';
import { NewRecipe } from './stories/pages/NewRecipe/NewRecipe';
import { useContext } from 'react';
import { AuthContext } from './stories/components/AuthProvider/AuthProvider';
import { User } from './stories/pages/User/User';

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Header rightContent={<MainMenu />} />
      <Main>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path={['/search', '/search/:searchTerms']}>
            <Search />
          </Route>
          <Route exact path="/recipes/:recipeId">
            <Recipe />
          </Route>
          <Route exact path="/user/:userId">
            <User />
          </Route>
          <Route exact path="/add-recipe">
            <NewRecipe />
          </Route>
          <Route exact path={[
            `/account`,
            `/account/information`,
            `/account/favorites`,
            `/account/reviews`,
            `/account/people`,
          ]}>
            <Account user={user} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Main>
      <Footer />
    </Router>
  );
}

export default App;
