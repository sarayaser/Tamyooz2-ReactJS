import React, { Component } from 'react';
import Projects from '../css/TamyozCars.css';
import CarsNumbers from './CarsNumbers';
import Bronze from './Bronze';
import Bronze2 from './Bronze2';
import CarPhoneNumbers from './CarPhoneNumbers';
import Line from './Line';
import PlusNumbers from './PlusNumbers';
import Slider from './Slider';
class App extends Component {
  render() {
    return (
      <div className="TamyozCards">
        <Slider src={require('../images/Vector Smart Object11.png')} />
        <CarPhoneNumbers pr="الرئيسية > أرقام الهاتف" pl="الأنتقال لأارقام السيارات"/>
        <CarsNumbers/>
        <Bronze image_cards="57739999099"src={require('../images/Vector Smart Object copy 13.png')}/>
        <Line/>
        <Bronze2 image_cards="57739999099"src={require('../images/Vector Smart Object copy 13.png')}/>
        <Line/>
        <Bronze2 Bronze1="b" p="price1" c="CategoryName1" br="bronze_footer1" l="link1" i="image-cards1" image_cards="57739999099"src={require('../images/Vector Smart Object copy 13.png')}/>
        <Line/>
        <PlusNumbers/>
        <Line/>

      </div>
    );
  }
}
export default TamyozCards;
