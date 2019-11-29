import React from 'react';
import { Route } from "react-router-dom";
import HeroList from './HeroList';
import HeroProfile from './HeroProfile';

const HeroPage = () => {
  return (
    <>
      <HeroList />
      <Route path="/heroes/:heroId">
        <HeroProfile />
      </Route>
    </>
  );
}

export default HeroPage;