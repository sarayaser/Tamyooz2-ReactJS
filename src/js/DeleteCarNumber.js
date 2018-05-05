import React, { Component } from 'react';
import './../css/buttons.css';
import CarNumbersButtons from './CarNumbersButtons';
class DeleteCarNumber extends Component {
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
        className: 'buttons'
      },
      {
        title: 'Delete Car Number',
        className: 'selectedButton'
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
                    <b ClassName="bStyle">Delete Car Number</b>
                </td>
            </tr>
            <tr>
                <td>
                    <select className="selectStyle">
                        <option>
                            Blog 1
                        </option>
                        <option>
                            Blog 2
                        </option>
                    </select>
                </td>
                <td>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </td>
                <td style={{float:'right'}}>
                    <label ClassName="lableStyle">Select Car Number</label>
                </td>
            </tr>

            <tr>

                <td style={{float:'left'}}>
                    <br />
                    <br />
                    <button className="buttonStyle"> Delete Car Number</button>
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

export default DeleteCarNumber;
