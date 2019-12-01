import React, { useState, useEffect } from 'react';
import { Route } from "react-router-dom";
import { useStateValue } from 'state';
import HeroList from './HeroList';
import HeroProfile from './HeroProfile';
import { CircleSpinner } from 'components/common';
import { apiGetHeroList } from 'api';
import classNames from 'classnames/bind';
import style from './style.css';

const cx = classNames.bind(style);

const HeroPage = () => {
  const [{ heroList }, dispatch] = useStateValue();
  const [isFetchingHeroList, setIsFetchingHeroList] = useState(true);

  useEffect(() => {
    const fetchHeroList = async () => {
      const { data: responseHeroList } = await apiGetHeroList();
      setIsFetchingHeroList(false);
      dispatch({ type: 'SET_HERO_LIST', heroList: responseHeroList });
    }

    fetchHeroList();
  }, []);

  return (
    <>
      {(isFetchingHeroList || heroList.length === 0) && (
        <div className={cx('circle-spinner-container')}>
          <CircleSpinner />
        </div>
      )}
      {!isFetchingHeroList && heroList.length > 0 &&
        <>
          <HeroList heroList={heroList} />
          <Route path="/heroes/:heroId">
            <HeroProfile />
          </Route>
        </>}
    </>
  );
}

export default HeroPage;