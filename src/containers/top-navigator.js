import React, { Component } from 'react';
import ClassNames from 'classnames/bind';
import Styles from './top-navigator.css';

const cx = ClassNames.bind(Styles);

let scrollTimer;

const scrollTop = () => {
  if (document.documentElement.scrollTop !== 0) {
    window.scrollBy(0, -10);
    scrollTimer = setTimeout(scrollTop, 1);
  } else {
    clearTimeout(scrollTimer);
  }
};

class TopNavigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldDisplayTopNavigator: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      let shouldDisplayTopNavigator = document.documentElement.scrollTop > 480;

      if (this.state.shouldDisplayTopNavigator !== shouldDisplayTopNavigator) {
        this.setState({
          shouldDisplayTopNavigator,
        });
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll');
  }

  render() {
    return (
      <div
        className={cx(
          'top-navigator',
          this.state.shouldDisplayTopNavigator && 'show',
        )}
        onClick={scrollTop}
      >
        ^
      </div>
    );
  }
}

export default TopNavigator;
