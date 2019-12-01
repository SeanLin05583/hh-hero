import React, { memo, useState } from 'react';
import HeroCard from './HeroCard';
import classnames from 'classnames/bind';
import style from './style.css';

const cx = classnames.bind(style);

const HeroList = memo(({ heroList }) => {
  return (
    <div className={cx('hero-list-container')}>
      <h1 className={cx('hero-list-title')}>Choose your hahow Hero!</h1>
      <div className={cx('hero-list')}>
        {heroList.map(hero =>
          <HeroCard
            key={hero.id}
            heroData={hero}
          />)}
      </div>
    </div>
  );
});

export default HeroList;