import React, { Component } from 'react';
import { string, arrayOf } from 'prop-types';
import ClassNames from 'classnames/bind';
import { RECENT_WORK } from '../constants';
import Styles from './recent-work.css';

const cx = ClassNames.bind(Styles);

const Experience = ({ title, description, duration }) => (
  <div className={cx('experience-container')}>
    <div className={cx('experience-header')}>
      <div className={cx('experience-title')}>{title}</div>
      <div className={cx('experience-duration')}>{duration}</div>
    </div>
    <ul className={cx('experience-bullet-container')}>
      {description.map((bullet, key) => (
        <li className={cx('experience-bullet')} key={key}>
          {bullet}
        </li>
      ))}
    </ul>
  </div>
);

Experience.propTypes = {
  title: string,
  description: arrayOf(string),
  duration: string
};

class RecentWork extends Component {
  render() {
    return (
      <div className={cx('recent-work-container')}>
        <Experience
          title={RECENT_WORK.RSL.TITLE}
          description={RECENT_WORK.RSL.DESCRIPTION}
          duration={RECENT_WORK.RSL.DURATION}
        />
        <Experience
          title={RECENT_WORK.COGNIZANT.TITLE}
          description={RECENT_WORK.COGNIZANT.DESCRIPTION}
          duration={RECENT_WORK.COGNIZANT.DURATION}
        />
      </div>
    );
  }
}

export default RecentWork;
