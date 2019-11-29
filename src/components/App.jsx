import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { HeroPage } from 'components/pages';
import './normalize.css';
import classnames from 'classnames/bind';
import style from './style.css';

const cx = classnames.bind(style);

const App = () => {
  return (
    <Router>
      <div className={cx('app-container')}>
        <Switch>
          <Route path="/heroes" component={HeroPage} />
          <Redirect from="*" to="/heroes" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;