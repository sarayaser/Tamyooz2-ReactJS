import React, { Component } from 'react';
import './../css/buttons.css';
import PhoneButtons from './PhoneButtons';
class DeletePhone extends Component {
  constructor(){
    super();
    this.state={
      buttons: [
        {
        title: 'Add Phone',
        className: 'buttons'
      },
      {
        title: 'Update Phone',
        className: 'buttons'
      },
      {
        title: 'Delete Phone',
        className: 'selectedButton'
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
                    <b ClassName="bStyle">Delete Phone</b>
                </td>
            </tr>
            <tr>
                <td>
                    <select className="selectStyle">
                        <option>
                            Phone 1
                        </option>
                        <option>
                            Phone 2
                        </option>
                    </select>
                </td>
                <td>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </td>
                <td style={{float:'right'}}>
                    <label ClassName="lableStyle">Select Phone</label>
                </td>
            </tr>

            <tr>

                <td style={{float:'left'}}>
                    <br />
                    <br />
                    <button className="buttonStyle"> Delete Phone</button>
                </td>
                <td>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </td>
                <td>
                    &nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </td>
            </tr>
        </table>
          </div>
      </div>
    );
  }
}

export default DeletePhone;
