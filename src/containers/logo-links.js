import React from 'react';
import ClassNames from 'classnames/bind';
import LogoLink from '../components/logo-link';
import { logoLinks } from '../constants';
import Styles from './logo-links.css';

const cx = ClassNames.bind(Styles);

const LogoLinks = () => (
  <div className={cx('logo-links')}>
    {logoLinks.map((props, key) => <LogoLink key={key} {...props} />)}
  </div>
);

export default LogoLinks;
