import React, { Component } from 'react';
import './../css/buttons.css';
import BlogsButtons from './BlogsButtons';
import Header from './Header';
import Footer from './Footer';
class AddBlog extends Component {
  constructor(){
    super();
    this.state={
      buttons: [
        {
        title: 'Add Blog',
        className: 'selectedButton'
      },
      {
        title: 'Update Blog',
        className: 'buttons'
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
          <Header/>
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
                      <b className="bStyle">Add Blog</b>
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
                      <button style={{color:'#4b44b7', fontSize:'20px' , backgroundColor:'white'}}> Add Blog</button>
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
      <Footer/>
      </div>
    );
  }
}

export default AddBlog;
