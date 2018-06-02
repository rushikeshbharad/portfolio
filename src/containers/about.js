import React, { Component } from 'react';
import ClassNames from 'classnames/bind';
import Styles from './about.css';

const cx = ClassNames.bind(Styles);

class About extends Component {
  state = {
    contact: 'Contact me'
  };

  emailHover = () => {
    this.setState({ contact: 'rushicbharad@gmail.com' })
  };
  
  emailNoHover = () => {
    this.setState({ contact: 'Contact me' })
  };

  render() {
    return (
      <div>
        <div className={cx("profile-personal-info")}>
          <div className={cx("profile-pic")} />
          <div className={cx("profile-name")}>Rushikesh Bharad</div>
        </div>
        <div className={cx('profile-contact')}>
          <a
            href="mailto:rushicbharad@gmail.com"
            className={cx('profile-email')}
            onMouseEnter={this.emailHover}
            onMouseLeave={this.emailNoHover}
          >
            {this.state.contact}
          </a>
        </div>
      </div>
    );
  }
}

export default About;
