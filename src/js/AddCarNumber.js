import React, { Component } from 'react';
import './../css/buttons.css';
import CarNumbersButtons from './CarNumbersButtons';
class AddCarNumber extends Component {
  constructor(){
    super();
    this.state={
      buttons: [
        {
        title: 'Add Car Number',
        className: 'selectedButton'
      },
      {
        title: 'Update Car Number',
        className: 'buttons'
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
                        <b ClassName="bStyle">Add Car Number</b>
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

                        <button ClassName="buttonStyle"> Add Car Number</button>
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

export default AddCarNumber;
