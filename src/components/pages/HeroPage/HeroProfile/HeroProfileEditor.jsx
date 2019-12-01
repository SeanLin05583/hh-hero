import React, { memo, useState } from 'react';
import { useStateValue } from 'state';
import { CircleSpinner, NumberEditor } from 'components/common';
import { apiPatchHeroProfile } from 'api';
import classnames from 'classnames/bind';
import style from './style.css';

const cx = classnames.bind(style);

const HeroProfileEditor = memo(({ heroId }) => {
  const [{ heroProfile }, dispatch] = useStateValue();
  const [pointLeft, setPointLeft] = useState(0);
  const [isHeroProfilePatching, setIsHeroProfilePatching] = useState(false);

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

  const handleProfileSave = async () => {
    setIsHeroProfilePatching(true);
    await apiPatchHeroProfile(heroId, heroProfile);
    setIsHeroProfilePatching(false);
  };

  return (
    <div className={cx('hero-profile-editor-container')}>
      <div>
        {Object.keys(heroProfile).map(heroAttr =>
          <div key={heroAttr} className={cx('hero-profile-attr')}>
            {`${heroAttr.toUpperCase()}：`}
            <NumberEditor
              point={heroProfile[heroAttr]}
              disabledAdd={pointLeft === 0 || isHeroProfilePatching}
              disabledMinus={heroProfile[heroAttr] === 0 || isHeroProfilePatching}
              onChange={handleProfileChange(heroAttr)}
            />
          </div>
        )}
      </div>
      <div className={cx('hero-profile-button-container')}>
        <p className={cx('hero-profile-point-remain')}>{`剩餘點數: ${pointLeft}`}</p>
        <button
          className={cx('hero-profile-save-button')}
          disabled={pointLeft > 0 || isHeroProfilePatching}
          onClick={handleProfileSave}
        >
          {isHeroProfilePatching ? <CircleSpinner color="white" /> : '儲存'}
        </button>
      </div>
    </div>
  );
});

export default HeroProfileEditor;