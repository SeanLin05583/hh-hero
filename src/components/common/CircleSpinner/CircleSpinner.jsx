import React from 'react';
import classNames from 'classnames/bind';
import style from './style.css';

const cx = classNames.bind(style);

const CircleSpinner = ({ color }) => {
  return <span className={cx('circle-spinner', color)} />;
};

export default CircleSpinner;
