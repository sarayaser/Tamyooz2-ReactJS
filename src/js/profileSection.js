import React, { Component } from 'react';
import ProfileSectionItem from './profileSectionItem';
import './../css/profile.css';

class ProfileSection extends Component {
    render() {
        let itemsArray = this.props.items;
        return (
            <section id={this.props.id}>
                <h2>{this.props.h2}</h2>
                {itemsArray.map(function(item){
                        return (<ProfileSectionItem key={item} label1={item[0]} label2={item[1]}/>)
                    })}

            </section>

        );
    }
}

export default ProfileSection;
