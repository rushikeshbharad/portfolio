import React from 'react';
import ClassNames from 'classnames/bind';
import Styles from './reliability.css';

const cx = ClassNames.bind(Styles);

const Reliability = () => (
  <div className={cx('reliability-container')}>
    <div className={cx('quality')}>
      <div className={cx('ship-icon')} />
      <div className={cx('reliability-title')}>Timely shipping</div>
    </div>
    <div className={cx('quality')}>
      <div className={cx('user-focused-icon')} />
      <div className={cx('reliability-title')}>User & product focused</div>
    </div>
    <div className={cx('quality')}>
      <div className={cx('responsive-icon')} />
      <div className={cx('reliability-title')}>Responsive design</div>
    </div>
    <div className={cx('quality')}>
      <div className={cx('code-quality-icon')} />
      <div className={cx('reliability-title')}>Best code practices</div>
    </div>
  </div>
);

export default Reliability;
