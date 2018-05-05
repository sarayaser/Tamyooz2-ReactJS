import React, { Component } from 'react';
import './../css/profile.css';

class LogoArea extends Component {
  render() {
    return (
        <div className="logoArea" id={this.props.id}>
          <img src={require("./../images/logo.png")} className="logo" />
        </div>
    );
  }
}

export default LogoArea;
