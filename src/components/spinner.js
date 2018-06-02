import React, { Component } from 'react';
import ClassNames from 'classnames/bind';
import Styles from './spinner.css';

const cx = ClassNames.bind(Styles);

class Spinner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spinner: { [-1]: 'spinner' },
    };
  }

  componentDidMount() {
    this.spinnerTimer = setInterval(() => {
      let count = +Object.keys(this.state.spinner);
      count = count + 1 > 3 ? 0 : count + 1;
      this.setState({
        spinner: { [count]: 'spinner' },
      });
    }, 600);
  }

  componentWillUnmount() {
    clearInterval(this.spinnerTimer);
  }

  render() {
    return (
      <div className={cx('spinner-container')}>
        <div className={cx('top-left', this.state.spinner[0])} />
        <div className={cx('top-right', this.state.spinner[1])} />
        <div className={cx('bottom-right', this.state.spinner[2])} />
        <div className={cx('bottom-left', this.state.spinner[3])} />
      </div>
    );
  }
}

export default Spinner;
