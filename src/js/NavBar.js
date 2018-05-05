import React, { Component } from 'react';
import './../css/profile.css';

class NavBar extends Component {
  render() {
    return (
        <div id="nav">
          <ul>
            <a href="#"><li>{this.props.opt1}</li></a>
            <a href="#"><li>{this.props.opt2}</li></a>
            <a href="#"><li>{this.props.opt3}</li></a>
            <a href="#"><li>{this.props.opt4}</li></a>
          </ul>

          <button><img  id ="btnIcon"src={require("./../images/btn icon.png")}/>للإعلان عن رقمك لدينا</button>

        </div>

    );
  }
}

export default NavBar;
