import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { HeroList, HeroProfile } from 'components/common';
import './normalize.css';
import './style.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/heroes">
          <HeroList />
          <Route path="/heroes/profile">
            <HeroProfile />
          </Route>
        </Route>
        <Redirect from="*" to="/heroes" />
      </Switch>
    </Router>
  );
}

export default App;