import React, { Component, Fragment } from 'react';
import ClassNames from 'classnames/bind';
import Spinner from './components/spinner';
import LogoLinks from './containers/logo-links';
import Reliability from './containers/reliability';
import RecentWork from './containers/recent-work';
import TopNavigator from './containers/top-navigator';
import Content from './containers/content';
import Styles from './App.css';

const cx = ClassNames.bind(Styles);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldDisplaySpinner: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        shouldDisplaySpinner: false,
      });
    }, 3000);
  }

  render() {
    return (
      <Fragment>
        {this.state.shouldDisplaySpinner && <Spinner />}
        <LogoLinks />
        <TopNavigator />
        <Content index={1} classNames={cx('header-container')}>
          <span className={cx('header')}>
            Web developer, committed towards delivering a quality product
          </span>
        </Content>
        <Content index={2}>
          <Reliability />
        </Content>
        <Content index={3}>
          <RecentWork />
        </Content>
        <Content index={4} />
        <Content index={5} />
        <Content index={6}>
          <div className={cx('personal-info')}>
            <div className={cx('pic')} />
            <div className={cx('name')}>Rushikesh Bharad</div>
          </div>
        </Content>
      </Fragment>
    );
  }
}

export default App;
