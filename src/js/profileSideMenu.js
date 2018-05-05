import React, { Component } from 'react';
import './../css/profile.css';

class NavBar extends Component {
  render() {

		let menuItems = this.props.menuItems;
    return (

		<div>
			<label id="currentHeading"><span>الرئيسية</span>>البيانات الشخصية</label>

			<aside id="sideList">
				
				<ul>
						{menuItems.map(function(item){
						return (<li key={item}>{item}</li>)
					})}
				</ul>

			</aside>
	 </div>

    );
  }
}

export default NavBar;
