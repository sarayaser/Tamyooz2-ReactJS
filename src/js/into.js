import React, { Component } from 'react';
import './../css/into.css';


class into extends Component {
    render() {

        return (
                <div className="container">
                        <img className="BackgroundImg" alt="Background" src={require("./../images/intro-blogdetails/intro.JPG")}/>

                        <div className="LogoContainer">
                            <img className="logo" alt="logo" src={require("./../images/intro-blogdetails/logo-Sara.png")}/>
                        </div>

                        <div className="verticalLine"></div>

                        <div className="peopleRight" onclick="fadePeople()">
                            <img id="peopleImg" alt="people" src={require("./../images/intro-blogdetails/people.png")}/>
                            <label id="people">أرقام جوال</label>
                        </div>

                        <div className="carLeft" onclick="fadeCar()">
                            <img id="carImg" alt="car" src={require("./../images/intro-blogdetails/car.png")}/>
                            <label id="car">أرقام سيارات</label>

                        </div>

                </div>

        );
    }
}

export default into;
