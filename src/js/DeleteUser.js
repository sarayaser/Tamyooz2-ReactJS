import React, { Component } from 'react';
import './../css/buttons.css';
import UserButtons from './UserButtons';
class DeleteUser extends Component {
  constructor(){
    super();
    this.state={
      buttons: [
        {
        title: 'Add User',
        className: 'buttons'
      },
      {
        title: 'Update User',
        className: 'buttons'
      },
      {
        title: 'Delete User',
        className: 'selectedButton'
      }
    ]
  }
  }
  render() {

    return (
      <div>
      <UserButtons buttons={this.state.buttons}/>
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
                    <b ClassName="bStyle">Delete User</b>
                </td>
            </tr>
            <tr>
                <td>
                    <select className="selectStyle">
                        <option>
                            Person 1
                        </option>
                        <option>
                            Person 2
                        </option>
                    </select>
                </td>
                <td>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </td>
                <td style={{float:'right'}}>
                    <label ClassName="lableStyle">Select User</label>
                </td>
            </tr>

            <tr>

                <td style={{float:'left'}}>
                    <br />
                    <br />
                    <button className="buttonStyle"> Delete User</button>
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

export default DeleteUser;
