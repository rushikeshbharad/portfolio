import React, { Component } from 'react';
import ClassNames from 'classnames/bind';
import Styles from './recent-work.css';

const cx = ClassNames.bind(Styles);

class RecentWork extends Component {
  render() {
    return (
      <div className={cx('recent-work-container')}>
        <div></div>
      </div>
    );
  }
}

export default RecentWork;
