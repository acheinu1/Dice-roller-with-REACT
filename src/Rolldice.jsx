import React, { Component } from 'react';
import Dice from './child/Dice';
class Rolldice extends Component {
  constructor(props) {
    super(props);
    this.state = { Die1: 'one', Die2: 'two' };
  }
  render() {
    return (
      <div>
        <Dice face={this.state.Die1} />
        <Dice face={this.state.Die2} />
      </div>
    );
  }
}

export default Rolldice;
