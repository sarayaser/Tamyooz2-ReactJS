import React, { Component } from 'react';
import './../css/buttons.css';
import BlogsButtons from './BlogsButtons';
class UpdateBlog extends Component {
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
        className: 'selectedButton'
      },
      {
        title: 'Delete Blog',
        className: 'buttons'
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
                   <b className="bStyle">Update Blog</b>
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
                   <label className="lableStyle">Select Blog</label>
               </td>
           </tr>
              <tr>

                  <td style={{float:'left'}}>
                      <input className="inputStyle" name="blogTitle" value="N/A" />
                  </td>

                  <td>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </td>
                  <td style={{float:'right'}}>
                      <label className="lableStyle">Blog Title</label>
                  </td>
              </tr>
              <tr>

                  <td style={{float:'left'}}>
                      <input className="inputStyle" name="blogDescription" value="N/A" />
                  </td>

                  <td>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </td>
                  <td style={{float:'right'}}>
                      <label className="lableStyle">Blog Description</label>
                  </td>
              </tr>

              <tr>

                  <td style={{float:'left'}}>
                      <br />
                      <br />
                      <button style="color:#4b44b7; font-size:20px;background-color:white;"> Update Blog</button>
                  </td>
                  <td>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </td>
                  <td>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </td>
              </tr>
          </table>

      </div>
      </div>
    );
  }
}

export default UpdateBlog;
