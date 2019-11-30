import React, { memo } from 'react';
import classnames from 'classnames/bind';
import style from './style.css';

const cx = classnames.bind(style);

const HeroProfileEditor = memo(({ heroProfile }) => {
  console.log(heroProfile);
  return (
    <div className={cx('hero-profile-editor-container')}>HeroProfileEditor</div>
  );
});

export default HeroProfileEditor;