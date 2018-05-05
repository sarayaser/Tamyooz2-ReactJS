import React, { Component } from 'react';
import './../css/buttons.css';
import CarNumbersButtons from './CarNumbersButtons';
class UpdateCarNumber extends Component {
  constructor(){
    super();
    this.state={
      buttons: [
        {
        title: 'Add Car Number',
        className: 'buttons'
      },
      {
        title: 'Update Car Number',
        className: 'selectedButton'
      },
      {
        title: 'Delete Car Number',
        className: 'buttons'
      }
    ]
  }
  }
  render() {
    return (
      <div>
      <CarNumbersButtons buttons={this.state.buttons}/>
      <div>
          <table className="tableStyle">
          <tr>
                         <td>
                             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                         </td>
                         <td>
                             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                         </td>
                         <td style={{float:'right'}}>
                             <b className="bStyle">Update Car Number</b>
                         </td>
                     </tr>

                     <tr>
                         <td>
                             <select className="selectStyle">
                                 <option>
                                     Car 1
                                 </option>
                                 <option>
                                     Car 2
                                 </option>
                             </select>
                         </td>
                         <td>
                             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                         </td>
                         <td style={{float:'right'}}>
                             <label className="lableStyle">Select Car Number</label>
                         </td>
                     </tr>

                   <tr>

                    <td style={{float:'left'}}>
                        <input ClassName="inputStyle" name="fullName" value="N/A" />
                    </td>

                    <td>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </td>
                    <td style={{float:'right'}}>
                        <label ClassName="lableStyle"> الرقم  </label>
                    </td>
                </tr>
                <tr>

                    <td style={{float:'left'}}>
                        <input ClassName="inputStyle" name="fullName" value="N/A" />
                    </td>

                    <td>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </td>
                    <td style={{float:'right'}}>
                        <label ClassName="lableStyle"> الفئه  </label>
                    </td>
                </tr>
                <tr>

                    <td style={{float:'left'}}>
                        <input ClassName="inputStyle" name="fullName" value="N/A" />
                    </td>

                    <td>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </td>
                    <td style={{float:'right'}}>
                        <label ClassName="lableStyle"> الحد الادنى للمزايده</label>
                    </td>
                </tr>
                <tr>

                    <td style={{float:'left'}}>
                        <input ClassName="inputStyle" name="Nationality" value="N/A" />
                    </td>

                    <td>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </td>
                    <td style={{float:'right'}}>
                        <label ClassName="lableStyle"> مزايدات</label>
                    </td>
                </tr>
                <tr>

                    <td style={{float:'left'}}>
                        <input ClassName="inputStyle" name="nationalType" value="N/A" />
                    </td>

                    <td>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </td>
                    <td style={{float:'right'}}>
                        <label ClassName="lableStyle"> الوقت المتبقى </label>
                    </td>
                </tr>
                <tr>

                    <td style={{float:'left'}}>
                        <input ClassName="inputStyle" name="numberOfNationality" value="N/A" />
                    </td>

                    <td>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </td>
                    <td style={{float:'right'}}>
                        <label ClassName="lableStyle"> وقت الانتهاء </label>
                    </td>
                </tr>
                <tr>

                    <td style={{float:'left'}}>
                        <br />
                        <br />

                        <button ClassName="buttonStyle"> Update Car Number</button>
                    </td>
                    <td>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </td>
                    <td>
                        &nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </td>
                </tr>
          </table>

      </div>
      </div>
    );
  }
}

export default UpdateCarNumber;
