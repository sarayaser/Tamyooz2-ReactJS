import React, { Component } from 'react';
import './../css/buttons.css';
import PhoneButtons from './PhoneButtons';
class AddPhone extends Component {
  constructor(){
    super();
    this.state={
      buttons: [
        {
        title: 'Add Phone',
        className: 'selectedButton'
      },
      {
        title: 'Update Phone',
        className: 'buttons'
      },
      {
        title: 'Delete Phone',
        className: 'buttons'
      }
    ]
  }
  }
  render() {

    return (
      <div>
      <PhoneButtons buttons={this.state.buttons}/>
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
                          <b ClassName="bStyle">Add Phone Number</b>
                      </td>
                  </tr>
                  <tr>

                      <td style={{float:'left'}}>
                          <input className="inputStyle" name="fullName" value="N/A" />
                      </td>

                      <td>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </td>
                      <td style={{float:'right'}}>
                          <label className="lableStyle">الرقم</label>
                      </td>
                  </tr>
                  <tr>

                      <td style={{float:'left'}}>
                          <input className="inputStyle" name="fullName" value="N/A" />
                      </td>

                      <td>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </td>
                      <td style={{float:'right'}}>
                          <label className="lableStyle"> الفئه  </label>
                      </td>
                  </tr>
                  <tr>

                      <td style={{float:'left'}}>
                          <input className="inputStyle" name="fullName" value="N/A" />
                      </td>

                      <td>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </td>
                      <td style={{float:'right'}}>
                          <label className="lableStyle"> الحد الادنى للمزايده</label>
                      </td>
                  </tr>
                  <tr>

                      <td style={{float:'left'}}>
                          <input className="inputStyle" name="Nationality" value="N/A" />
                      </td>

                      <td>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </td>
                      <td style={{float:'right'}}>
                          <label className="lableStyle"> مزايدات</label>
                      </td>
                  </tr>
                  <tr>

                      <td style={{float:'left'}}>
                          <input className="inputStyle" name="nationalType" value="N/A" />
                      </td>

                      <td>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </td>
                      <td style={{float:'right'}}>
                          <label className="lableStyle"> الوقت المتبقى </label>
                      </td>
                  </tr>
                  <tr>

                      <td style={{float:'left'}}>
                          <input className="inputStyle" name="numberOfNationality" value="N/A" />
                      </td>

                      <td>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </td>
                      <td style={{float:'right'}}>
                          <label className="lableStyle"> وقت الانتهاء </label>
                      </td>
                  </tr>
                  <tr>

                      <td style={{float:'left'}}>
                          <br />
                          <br />
                          <button className="buttonStyle"> Add Phone Number</button>
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

export default AddPhone;
