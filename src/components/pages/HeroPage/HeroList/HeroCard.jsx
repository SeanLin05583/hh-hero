import React, { memo } from 'react';
import { useStateValue } from 'state';
import { Link } from "react-router-dom";
import classnames from 'classnames/bind';
import style from './style.css';

const cx = classnames.bind(style);

const HeroCard = memo(({ heroData }) => {
  const [{ selectedHeroId }, dispatch] = useStateValue();
  const isHeroSelected = selectedHeroId === heroData.id;

  const setHeroId = (heroId) => () => {
    dispatch({ type: 'SET_HERO_ID', heroId });
  };

  return (
    <Link to={`/heroes/${heroData.id}`} className={cx('hero-card-container')} onClick={setHeroId(heroData.id)}>
      <div className={cx('hero-card-img-container')}>
        <img className={cx('hero-card-img')} src={heroData.image} alt={heroData.name} />
      </div>
      <p className={cx('hero-card-name', { 'is-hero-selected': isHeroSelected })}>{heroData.name}</p>
    </Link>
  );
});

export default HeroCard;