import React, { memo, useState } from 'react';
import { useStateValue } from 'state';
import { CircleSpinner, NumberEditor } from 'components/common';
import classnames from 'classnames/bind';
import style from './style.css';

const cx = classnames.bind(style);

const HeroProfileEditor = memo(({ onHeroSave, isPatching }) => {
  const [{ heroProfile }, dispatch] = useStateValue();
  const [pointLeft, setPointLeft] = useState(0);

  const handleProfileChange = (heroAttr) => (newValue) => () => {
    const oldValue = heroProfile[heroAttr];
    const newPointLeft = pointLeft + (oldValue > newValue ? 1 : -1)

    const newProfile = {
      ...heroProfile,
      [heroAttr]: newValue,
    }

    setPointLeft(newPointLeft);
    dispatch({ type: 'SET_HERO_PROFILE', heroProfile: newProfile });
  }

  return (
    <div className={cx('hero-profile-editor-container')}>
      <div>
        {Object.keys(heroProfile).map(heroAttr =>
          <div key={heroAttr} className={cx('hero-profile-attr')}>
            {`${heroAttr.toUpperCase()}：`}
            <NumberEditor
              point={heroProfile[heroAttr]}
              disabledAdd={pointLeft === 0 || isPatching}
              disabledMinus={heroProfile[heroAttr] === 0 || isPatching}
              onChange={handleProfileChange(heroAttr)}
            />
          </div>
        )}
      </div>
      <div className={cx('hero-profile-button-container')}>
        <p className={cx('hero-profile-point-remain')}>{`剩餘點數: ${pointLeft}`}</p>
        <button
          className={cx('hero-profile-save-button')}
          disabled={pointLeft > 0 || isPatching}
          onClick={onHeroSave}
        >
          {isPatching ? <CircleSpinner color="white" /> : '儲存'}
        </button>
      </div>
    </div>
  );
});

export default HeroProfileEditor;