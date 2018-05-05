import React, { Component } from 'react';
//import './../css/profile.css';

class ProfileSectionItem extends Component {
    render() {
        return (
            <div>
                <label className="left">{this.props.label1}<i className="fa fa-pencil-square-o"></i></label>
                <label>{this.props.label2}</label>
                <br />
            </div>
        );
    }
}

export default ProfileSectionItem;
