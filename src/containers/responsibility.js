import React, { Component } from 'react';
import ClassNames from 'classnames/bind';
import { RESPONSIBILITIES } from "../constants";
import Styles from './responsibility.css';

const cx = ClassNames.bind(Styles);

class Responsibility extends Component {
  state = {
    classNames: RESPONSIBILITIES.map((_, i) => {
      if (i === 3) {
        return 50;
      }

      if (i === 2) {
        return 100;
      }

      if (i === 1) {
        return 50;
      }

      return 20;
    })
  };

  componentDidMount() {
    this.bullets.onscroll = e => {
      const contentHeight = e.srcElement.scrollHeight;
      const scrolledAt = e.srcElement.scrollTop;
      const boldItemIndex = Math.floor(scrolledAt * RESPONSIBILITIES.length / contentHeight + 2.75);
      const classNames = RESPONSIBILITIES.map((_, i) => {
        if (boldItemIndex + 1 === i || boldItemIndex - 1 === i) {
          return 50;
        }

        if (boldItemIndex === i) {
          return 100;
        }

        return 20;
      });

      this.setState({ classNames });
    };
  }

  render() {
    return (
      <div className={cx('responsibility-container')}>
        <div className={cx('responsibility-title')}>Responsibilities handled</div>
        <div
          className={cx('responsibility-bullets')}
          ref={bullets => {
            this.bullets = bullets;
          }}
        >
          {RESPONSIBILITIES.map((responsibility, i) =>
            <div key={i} className={cx('responsibility-bullet', `opt${this.state.classNames[i]}`)}>
              {responsibility}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Responsibility;
