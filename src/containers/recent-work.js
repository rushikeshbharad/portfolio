import React, { Component } from 'react';
import ClassNames from 'classnames/bind';
import Styles from './recent-work.css';

const cx = ClassNames.bind(Styles);

const Experience = ({ title, description }) => (
  <div className={cx('experience-container')}>
    <div className={cx('experience-title')}>{title}</div>
    <ul className={cx('experience-bullet-container')}>
      {description.map((bullet, key) => (
          <li className={cx('experience-bullet')} key={key}>
            {bullet}
          </li>
      ))}
    </ul>
  </div>
);

class RecentWork extends Component {
  render() {
    return (
      <div className={cx('recent-work-container')}>
        <Experience
          title="1.5+ years in RSL"
          description={[
            'with client "Nest (Google)"',
            'worked for Home automation device monitoring',
            'have participated in shipping 15+ major releases',
            'stack involved - Javascript (ES6/7), React.js, Redux.js',
          ]}
        />
        <Experience
          title="2 years in Cognizant"
          description={[
            'with client "JP Morgan & Chase"',
            'have shipped confidential work',
            'Desktop applications and console automators',
            'stacks involved - Javascript ASP.NET, C#, WCF',
          ]}
        />
      </div>
    );
  }
}

export default RecentWork;
