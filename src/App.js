import './App.scss';

import { Header } from './stories/layouts/Header/Header';
import { Main } from './stories/layouts/Main/Main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Recipe } from './stories/pages/Recipe/Recipe';
import { Footer } from './stories/layouts/Footer/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Main>
        <Switch>
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
