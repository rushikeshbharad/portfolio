import React, { Component, Fragment } from 'react';
import ClassNames from 'classnames/bind';
import Spinner from './components/spinner';
import LogoLinks from './containers/logo-links';
import Reliability from './containers/reliability';
import RecentWork from './containers/recent-work';
import Responsibility from './containers/responsibility';
import SkillSet from './containers/skill-sets';
import TopNavigator from './containers/top-navigator';
import About from './containers/about';
import Content from './containers/content';
import Header from './components/header';
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
          <Header />
        </Content>
        <Content index={2}>
          <Reliability />
        </Content>
        <Content index={3}>
          <RecentWork />
        </Content>
        <Content index={4}>
          <SkillSet />
        </Content>
        <Content index={5}>
          <Responsibility />
        </Content>
        <Content index={6}>
          <About />
        </Content>
      </Fragment>
    );
  }
}

export default App;
