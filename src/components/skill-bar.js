import React, { Component } from 'react';
import { bool, number, shape, string } from 'prop-types';
import ClassNames from 'classnames/bind';
import Styles from './skill-bar.css';

const cx = ClassNames.bind(Styles);

class SkillSets extends Component {
  render() {
    const { skill: { skill, level }, shouldProgress } = this.props;

    return (
      <div className={cx('skill-container')}>
        <div>{skill}</div>
        <div className={cx('skill-bar-holder')}>
          <div className={cx('skill-bar', shouldProgress && `skill-level-${level}`)} />
        </div>
      </div>
    );
  }
}

SkillSets.propTypes = {
  skill: shape({
    level: number,
    skill: string
  }),
  shouldProgress: bool
};

export default SkillSets
