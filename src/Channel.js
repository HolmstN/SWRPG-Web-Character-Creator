import React, { Component } from 'react';
import './index.css';

class Channel extends Component {

  setChannel(stop) {
    stop.preventDefault();
    var channel = this.refs.channel.value.replace(/\W/g, '').toLowerCase();
;
    var user = this.refs.user.value.replace(/\W/g, '');
    this.props.setFormChan(channel, user);
  }

  render() {
    return (
      <div className='login-box'>
      <div>
      <h1>GN-R8</h1>
      <h2>SWRPG Character Creator</h2> <br />
      </div>
      <img src={`/favicon.ico`} alt='' style={{maxWidth:'225px'}} />
      <form onSubmit={this.setChannel.bind(this)}>
        <input className='textinput' style={{textAlign: 'center'}} ref="channel" name="channel" placeholder="Channel Name" /> <br /> <br />
        <div>
        <button>Enter</button>
        </div>
      </form>
        <div style={{paddingTop: '2em'}}>
          <span>Created by SkyJedi</span> <br/><br/>
          <span>Questions? Comments? <a href="mailto:skyjedi@gmail.com?subject=D1-C3%20Feedback">Contact Me</a></span> <div />
          <h6>A Character Creator for Fantasy Flight Games, Star Wars: Edge of the Empire, Age of Rebellion, and Force and Destiny</h6>
        </div>
      </div>
    );
  }
}
  export default Channel;
