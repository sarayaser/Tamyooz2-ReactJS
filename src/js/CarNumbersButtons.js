import React, { Component } from 'react';
import './../css/buttons.css';
class CarNumbersButtons extends Component {
  render() {
    let buttonsList
    if(this.props.buttons)
    {
      buttonsList=this.props.buttons;
    }
    return (
      <div>
      <div className="divStyle">
      <table>
             <tr>
                 <td>
                     <a href="AddCarNumber.js" className={buttonsList[0].className}> {buttonsList[0].title} &nbsp;&nbsp;&nbsp;</a>
                 </td>
                 <td>
                     <a href="UpdateCarNumber.js" className={buttonsList[1].className}> {buttonsList[1].title} &nbsp;&nbsp;&nbsp;</a>
                </td>
                 <td>
                     <a href="DeleteCarNumber.js" className={buttonsList[2].className}> {buttonsList[2].title} &nbsp;&nbsp;&nbsp;</a>
                 </td>
             </tr>
         </table>
      </div>
      </div>
    );
  }
}

export default CarNumbersButtons;
