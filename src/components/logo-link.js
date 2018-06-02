import React from 'react';
import { string, bool } from 'prop-types';
import ClassNames from 'classnames/bind';
import Styles from './logo-link.css';

const cx = ClassNames.bind(Styles);

const LogoLink = ({ name, path, hasBlurred }) => (
  <div onClick={() => { window.open(path, '_blank') }} className={cx('logo', name, hasBlurred)} />
);

LogoLink.propTypes = {
  name: string,
  path: string,
  hasBlurred: bool
};

export default LogoLink;
