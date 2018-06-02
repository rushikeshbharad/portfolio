import React, { Component } from 'react';
import ClassNames from 'classnames/bind';
import SkillBar from '../components/skill-bar';
import Styles from './skill-sets.css';

const cx = ClassNames.bind(Styles);

const skills = [
    {
        skill: 'Javascript (ES6+)',
        level: 9
    },
    {
        skill: 'React.js',
        level: 9
    },
    {
        skill: 'Redux.js',
        level: 8
    },
    {
        skill: 'CSS3',
        level: 7
    },
    {
        skill: 'Node.js',
        level: 6
    },
    {
        skill: 'C# and .NET',
        level: 6
    },
    {
        skill: 'SQL',
        level: 5
    },
];

class SkillSets extends Component {
  state = {
    skillVisibility: skills.map(() => false),
    shouldDisplaySkills: false
  };

  setStateToAnimateSkills = () => {
    setTimeout(() => {
      if (this.skillsAnimated !== skills.length && this.state.shouldDisplaySkills) {
        const { skillVisibility } = this.state;
        this.skillsAnimated += 1;
        skillVisibility[this.skillsAnimated - 1] = true;
        this.setState({ skillVisibility });
        this.setStateToAnimateSkills();
      } else {
        this.skillsAnimated = 0;
      }
    }, 500);
  };

  componentDidMount() {
    const onScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const isBelowThirdContainer = scrollTop > 480 * 2.5;
      const isAboveFourthContainer = scrollTop < 480 * 3.5;
      const shouldDisplaySkills = isBelowThirdContainer && isAboveFourthContainer;

      if (shouldDisplaySkills !== this.state.shouldDisplaySkills) {
        if (shouldDisplaySkills) {
          this.skillsAnimated = 0;
          this.setStateToAnimateSkills();
        } else {
          const skillVisibility = skills.map(() => false);
          this.setState({ skillVisibility });
        }
        this.setState({ shouldDisplaySkills });
      }
    };

    window.addEventListener('scroll', onScroll);
    document.body.addEventListener('touchmove', onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll');
    document.body.removeEventListener('touchmove');
  }

  render() {
    return (
      <div className={cx('skill-sets-container')}>
        {skills
          .map((s, i) => (<SkillBar key={i} skill={s} shouldProgress={this.state.skillVisibility[i]} />))
          .filter(e => e)
        }
      </div>
    );
  }
}

export default SkillSets;
