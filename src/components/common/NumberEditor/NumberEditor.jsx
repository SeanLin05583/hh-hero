import React, { memo } from 'react';
import classnames from 'classnames/bind';
import style from './style.css';

const cx = classnames.bind(style);

const NumberEditor = memo(({
  disabledAdd,
  onChange,
  point,
}) => {
  return (
    <div className={cx('number-editor-container')}>
      <button className={cx('number-editor-button')} onClick={onChange(point - 1)} disabled={point === 0}>
        <i className="fas fa-minus" />
      </button>
      <span className={cx('number-editor-point')}>{point}</span>
      <button className={cx('number-editor-button')} onClick={onChange(point + 1)} disabled={disabledAdd}>
        <i className="fas fa-plus" />
      </button>
    </div>
  );
});

export default NumberEditor;