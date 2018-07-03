import React from 'react';
import { string, bool } from 'prop-types';
import ClassNames from 'classnames/bind';
import Styles from './logo-link.css';

const cx = ClassNames.bind(Styles);

const LogoLink = ({ name, path, hasBlurred, svgPath, viewBox }) => (
  <svg viewBox={viewBox} className={cx('logo', name, hasBlurred)} onClick={() => { window.open(path, '_blank') }}>
    <path d={svgPath}></path>
    {/*<div onClick={() => { window.open(path, '_blank') }} className={cx('logo', name, hasBlurred)} />*/}
  </svg>
);

LogoLink.propTypes = {
  name: string,
  path: string,
  hasBlurred: bool,
  svgPath: string
};

export default LogoLink;
