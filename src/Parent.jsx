import React, { Component } from 'react';
import Rolldice from './Rolldice';
import './CSS/parent.css';

class Parent extends Component {
  render() {
    return (
      <div className='parent'>
        <Rolldice />
      </div>
    );
  }
}

export default Parent;
