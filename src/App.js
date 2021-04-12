import './App.scss';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './stories/layouts/Header/Header';
import { Main } from './stories/layouts/Main/Main';
import { Footer } from './stories/layouts/Footer/Footer';
import { MainMenu } from './stories/components/MainMenu/MainMenu';
import { Recipe } from './stories/pages/Recipe/Recipe';
import { Login } from './stories/pages/Login/Login';
import { Home } from './stories/pages/Home/Home';
import { Signup } from './stories/pages/Signup/Signup';
import { Search } from './stories/pages/Search/Search';
import { AuthProvider } from './Auth';

function App() {
  return (
    <AuthProvider>
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
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Main>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
