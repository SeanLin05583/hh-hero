import React, { memo, useState, useEffect } from 'react';
import { Redirect, useParams } from "react-router-dom";
import { CircleSpinner } from 'components/common';
import { apiGetHeroProfile, apiPatchHeroProfile } from 'api';
import HeroProfileEditor from './HeroProfileEditor';
import classnames from 'classnames/bind';
import style from './style.css';

const cx = classnames.bind(style);

const initialHeroProfile = {
  str: 0,
  int: 0,
  agi: 0,
  luk: 0,
}

const HeroProfile = memo(({ heroList, setHeroId }) => {
  const { heroId } = useParams();
  const [isHeroProfileLoading, setIsHeroProfileLoading] = useState(true);
  const [isHeroProfilePatching, setIsHeroProfilePatching] = useState(false);
  const [heroProfile, setHeroProfile] = useState(initialHeroProfile);
  const targetHero = heroList.find(hero => hero.id === heroId);

  useEffect(() => {
    const fetchHeroProfile = async (heroId) => {
      setIsHeroProfileLoading(true);
      const { data: responseHeroProfile } = await apiGetHeroProfile(heroId);
      setHeroProfile(responseHeroProfile);
      setIsHeroProfileLoading(false);
    }
    if (targetHero) {
      setHeroId(heroId);
      fetchHeroProfile(heroId);
    }
  }, [heroList, heroId]);


  const handleProfileSave = (heroId) => (heroProfile) => async () => {
    setIsHeroProfilePatching(true);
    await apiPatchHeroProfile(heroId, heroProfile);
    setIsHeroProfilePatching(false);
  }

  if (!targetHero) {
    return <Redirect to="/heroes" />
  }

  return (
    <div className={cx('hero-profile-container')}>
      {isHeroProfileLoading && <CircleSpinner />}
      {!isHeroProfileLoading &&
        <>
          <h2 className={cx('hero-profile-title')}>
            {`Hello ${targetHero.name}`}
          </h2>
          <HeroProfileEditor
            data={heroProfile}
            onHeroSave={handleProfileSave(heroId)}
            isPatching={isHeroProfilePatching}
          />
        </>
      }
    </div>
  );
});

export default HeroProfile;