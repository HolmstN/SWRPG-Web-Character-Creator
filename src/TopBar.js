import React, { Component } from 'react';
import './index.css';

class TopBar extends Component {

  render() {
    return (
      <div className='navbar'>
      <div><b>Total XP:</b>&nbsp;100&emsp;<b>Used XP:</b>&nbsp;0&emsp;<b>Unused XP:</b>&nbsp;100&emsp;<b>Olbigation:</b>&nbsp;10&emsp;<b>Credits:</b>&nbsp;1000</div>
      </div>
    );
  }
}
export default TopBar;
