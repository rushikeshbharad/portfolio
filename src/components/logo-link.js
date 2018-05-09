import React from 'react';
import ClassNames from 'classnames/bind';
import Styles from './logo-link.css';

const cx = ClassNames.bind(Styles);

const LogoLink = ({ name, path }) => (
  <div onClick={() => { window.open(path, '_blank') }} className={cx('logo', name)}></div>
);

export default LogoLink;
