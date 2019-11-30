import React from 'react';
import classNames from 'classnames/bind';
import style from './style.css';

const cx = classNames.bind(style);

const CircleSpinner = () => {
  return <span className={cx('circle-spinner')} />;
};

export default CircleSpinner;
