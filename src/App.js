import './App.scss';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './stories/layouts/Header/Header';
import { Main } from './stories/layouts/Main/Main';
import { Footer } from './stories/layouts/Footer/Footer';
import { MainMenu } from './stories/components/MainMenu/MainMenu';
import { Recipe } from './stories/pages/Recipe/Recipe';
import { Login } from './stories/pages/Login/Login';
import { Signup } from './stories/pages/Signup/Signup';

function App() {
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
          <Route exact path="/recipes/:recipeId">
            <Recipe />
          </Route>
        </Switch>
      </Main>
      <Footer />
    </Router>
  );
}

export default App;
