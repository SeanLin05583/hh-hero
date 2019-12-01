import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { HeroPage } from 'components/pages';
import { StateProvider } from 'state';
import './normalize.css';
import classnames from 'classnames/bind';
import style from './style.css';

const cx = classnames.bind(style);

const initialState = {
  selectedHeroId: 0,
  heroList: [],
  heroProfile: {
    str: 0,
    int: 0,
    agi: 0,
    luk: 0,
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_HERO_ID':
      return {
        ...state,
        selectedHeroId: action.heroId,
      };
    case 'SET_HERO_LIST':
      return {
        ...state,
        heroList: action.heroList,
      };
    case 'SET_HERO_PROFILE':
      return {
        ...state,
        heroProfile: action.heroProfile,
      };
    default:
      return state;
  }
};

const App = () => {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Router>
        <div className={cx('app-container')}>
          <Switch>
            <Route path="/heroes" component={HeroPage} />
            <Redirect from="*" to="/heroes" />
          </Switch>
        </div>
      </Router>
    </StateProvider>
  );
}

export default App;