import React, { memo, useState } from 'react';
import HeroCard from './HeroCard';
import classnames from 'classnames/bind';
import style from './style.css';

const cx = classnames.bind(style);

const HeroList = memo(() => {
  const [selectHeroId, setSelectHeroId] = useState(null);

  const handleHeroSelect = (heroId) => () => {
    setSelectHeroId(heroId);
  }

  return (
    <div className={cx('hero-list-container')}>
      <h1 className={cx('hero-list-title')}>Choose your hahow Hero!</h1>
      <div className={cx('hero-list')}>
        {fakeData.map(hero =>
          <HeroCard
            key={hero.id}
            heroData={hero}
            isHeroSelected={selectHeroId === hero.id}
            onClick={handleHeroSelect(hero.id)}
          />)}
      </div>
    </div>
  );
});

export default HeroList;

const fakeData = [
  {
    "id": "1",
    "name": "Daredevil",
    "image": "http://i.annihil.us/u/prod/marvel/i/mg/6/90/537ba6d49472b/standard_xlarge.jpg"
  },
  {
    "id": "2",
    "name": "Thor",
    "image": "http://x.annihil.us/u/prod/marvel/i/mg/5/a0/537bc7036ab02/standard_xlarge.jpg"
  },
  {
    "id": "3",
    "name": "Iron Man",
    "image": "http://i.annihil.us/u/prod/marvel/i/mg/6/a0/55b6a25e654e6/standard_xlarge.jpg"
  },
  {
    "id": "4",
    "name": "Hulk",
    "image": "http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/standard_xlarge.jpg"
  }
];