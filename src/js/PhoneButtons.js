import React, { Component } from 'react';
import './../css/buttons.css';
class PhoneButtons extends Component {

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
                     <a href="AddPhone.js" className={buttonsList[0].className}> {buttonsList[0].title} &nbsp;&nbsp;&nbsp;</a>
                 </td>
                 <td>
                     <a href="UpdatePhone.js" className={buttonsList[1].className}> {buttonsList[1].title} &nbsp;&nbsp;&nbsp;</a>
                </td>
                 <td>
                     <a href="DeletePhone.js" className={buttonsList[2].className}> {buttonsList[2].title} &nbsp;&nbsp;&nbsp;</a>
                 </td>
             </tr>
         </table>
      </div>
      </div>
    );
  }
}
export default PhoneButtons;
