import React from 'react';
import ClassNames from 'classnames/bind';
import Styles from './content.css';

const cx = ClassNames.bind(Styles);

const Content = ({ index, children, classNames }) => (
  <div id={index} className={cx('content', index % 2 === 0 ? 'even' : 'odd', classNames)}>
    {children}
  </div>
);

export default Content;
