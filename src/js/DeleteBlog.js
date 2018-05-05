import React, { Component } from 'react';
import './../css/buttons.css';
import BlogsButtons from './BlogsButtons';
class DeleteBlog extends Component {
  constructor(){
    super();
    this.state={
      buttons: [
        {
        title: 'Add Blog',
        className: 'buttons'
      },
      {
        title: 'Update Blog',
        className: 'buttons'
      },
      {
        title: 'Delete Blog',
        className: 'selectedButton'
      }
    ]
  }
  }
  render() {

    return (
      <div>
      <BlogsButtons buttons={this.state.buttons}/>
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
                    <b ClassName="bStyle">Delete Blog</b>
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
                    <label ClassName="lableStyle">Select Blog</label>
                </td>
            </tr>

            <tr>

                <td style={{float:'left'}}>
                    <br />
                    <br />
                    <button className="buttonStyle"> Delete Blog</button>
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

export default DeleteBlog;
