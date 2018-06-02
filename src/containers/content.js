import React from 'react';
import { number, string, element } from 'prop-types'
import ClassNames from 'classnames/bind';
import Styles from './content.css';

const cx = ClassNames.bind(Styles);

const Content = ({ index, children, classNames }) => (
  <div className={cx('content', index % 2 === 0 ? 'even' : 'odd', classNames)}>
    {children}
  </div>
);

Content.propTypes = {
    index: number,
    children: element,
    classNames: string
};

export default Content;
