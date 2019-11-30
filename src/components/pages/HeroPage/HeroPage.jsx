import React, { useState, useEffect } from 'react';
import { Route } from "react-router-dom";
import HeroList from './HeroList';
import HeroProfile from './HeroProfile';
import { CircleSpinner } from 'components/common';
import { apiGetHeroList } from 'api';
import classNames from 'classnames/bind';
import style from './style.css';

const cx = classNames.bind(style);

const HeroPage = () => {
  const [heroList, setHeroList] = useState([]);
  const [selectHeroId, setSelectHeroId] = useState(null);
  const [isFetchingHeroList, setIsFetchingHeroList] = useState(true);

  useEffect(() => {
    const fetchHeroList = async () => {
      const { data: responseHeroList } = await apiGetHeroList();
      setIsFetchingHeroList(false);
      setHeroList(responseHeroList);
    }

    fetchHeroList();
  }, []);


  const handleHeroSelect = (heroId) => () => {
    setSelectHeroId(heroId);
  }

  return (
    <>
      {isFetchingHeroList && (
        <div className={cx('circle-spinner-container')}>
          <CircleSpinner />
        </div>
      )}
      {!isFetchingHeroList && <>
        <HeroList heroList={heroList} selectHeroId={selectHeroId} onHeroSelect={handleHeroSelect} />
        <Route path="/heroes/:heroId">
          {heroList.length > 0 &&
            <HeroProfile heroList={heroList} setHeroId={setSelectHeroId} />
          }
        </Route>
      </>}
    </>
  );
}

export default HeroPage;