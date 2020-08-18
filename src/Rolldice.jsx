import React, { Component } from 'react';
import Dice from './child/Dice';

class Rolldice extends Component {
  static defaultProps = {
    sides: ['one', 'two', 'three', 'four', 'five', 'six'],
  };
  constructor(props) {
    super(props);
    this.state = { Die1: 'one', Die2: 'two', isRolling: false };
    this.roll = this.roll.bind(this);
  }
  roll() {
    //use the index of props array to pick random no
    // newDie1 = this.props.sides[0] which is one
    const newDie1 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];

    const newDie2 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    // setState
    this.setState({ Die1: newDie1, Die2: newDie2, isRolling: true });
    // wait 1 sec and set isRolling back to false
    setTimeout(() => {
      this.setState({ isRolling: false });
    }, 1000);
  }
  render() {
    return (
      <div>
        <Dice face={this.state.Die1} />
        <Dice face={this.state.Die2} />
        <button onClick={this.roll} disabled={this.state.isRolling}>
          {this.state.isRolling ? 'Rolling...' : 'Roll Dice!'}
        </button>
      </div>
    );
  }
}

export default Rolldice;
