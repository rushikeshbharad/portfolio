import React from 'react';
import ClassNames from 'classnames/bind';
import Styles from './logo-link.css';

const cx = ClassNames.bind(Styles);

const LogoLink = ({ name, path, hasBlurred }) => (
  <div onClick={() => { window.open(path, '_blank') }} className={cx('logo', name, hasBlurred)}></div>
);

export default LogoLink;
