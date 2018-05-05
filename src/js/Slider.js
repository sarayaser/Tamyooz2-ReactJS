import React, { Component } from 'react';


class Slider extends Component {
  render() {
    return (
      <div className="Slider">
        <div className="slide">
          <div className="container">
            <img styles={{width:'1220',height: '532'}} src={this.props.src} />
          </div>
        </div>
        <div className="slider_footer">
          <div className="container">
            <p className="percentage">80%</p>
            <p className="p1">خصم</p>
            <br/>
            <p className="p2">علي الأرقام المميزة</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
