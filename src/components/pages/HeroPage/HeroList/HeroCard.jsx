import React from 'react';
import { Link } from "react-router-dom";
import classnames from 'classnames/bind';
import style from './style.css';

const cx = classnames.bind(style);

const HeroCard = ({ heroData, isHeroSelected, onClick }) => {
  return (
    <Link to={`/heroes/${heroData.id}`} className={cx('hero-card-container')} onClick={onClick}>
      <div className={cx('hero-card-img-container')}>
        <img className={cx('hero-card-img')} src={heroData.image} alt={heroData.name} />
      </div>
      <p className={cx('hero-card-name', { 'is-hero-selected': isHeroSelected })}>{heroData.name}</p>
    </Link>
  );
};

export default HeroCard;