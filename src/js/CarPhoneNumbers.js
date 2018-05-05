import React, { Component } from 'react';
import '../css/TamyosCars.css';
class CarPhoneNumbers extends Component {
  render() {
    return (
      <div className="CarPhoneNumbers">
        <div className="container">
          <p className="pr">{this.props.pr}</p>
          <p className="pl">{this.props.pl}</p>
        </div>
      </div>
    );
  }
}

export default CarPhoneNumbers;
