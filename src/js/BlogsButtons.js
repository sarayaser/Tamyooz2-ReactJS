import React, { Component } from 'react';
import './../css/buttons.css';
class BlogsButtons extends Component {
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
                     <a href="AddBlog.js" className={buttonsList[0].className}> {buttonsList[0].title} &nbsp;&nbsp;&nbsp;</a>
                 </td>
                 <td>
                     <a href="UpdateBlog.js" className={buttonsList[1].className}> {buttonsList[1].title} &nbsp;&nbsp;&nbsp;</a>
                </td>
                 <td>
                     <a href="DeleteBlog.js" className={buttonsList[2].className}> {buttonsList[2].title} &nbsp;&nbsp;&nbsp;</a>
                 </td>
             </tr>
         </table>
      </div>
      </div>
    );
  }
}

export default BlogsButtons;
