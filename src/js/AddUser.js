import React, { Component } from 'react';
import './../css/buttons.css';
import UserButtons from './UserButtons';
class AddUser extends Component {
  constructor(){
    super();
    this.state={
      buttons: [
        {
        title: 'Add User',
        className: 'selectedButton'
      },
      {
        title: 'Update User',
        className: 'buttons'
      },
      {
        title: 'Delete User',
        className: 'buttons'
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
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               </td>
               <td>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               </td>
               <td style={{float:'right'}}>
                   <b className="bStyle">معلومات شخصيه</b>
               </td>
           </tr>
           <tr>

               <td style={{float:'left'}}>
                   <input className="inputStyle" name="fullName" value="N/A" />
               </td>

               <td>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               </td>
               <td style={{float:'right'}}>
                   <label className="lableStyle"> الاسم الكامل</label>
               </td>
           </tr>
           <tr>

               <td style={{float:'left'}}>
                   <input className="inputStyle" name="Nationality" value="N/A" />
               </td>

               <td>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               </td>
               <td style={{float:'right'}}>
                   <label className="lableStyle"> الجنسيه</label>
               </td>
           </tr>
           <tr>

               <td style={{float:'left'}}>
                   <input className="inputStyle" name="nationalType" value="N/A" />
               </td>

               <td>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               </td>
               <td style={{float:'right'}}>
                   <label className="lableStyle"> نوع الهويه</label>
               </td>
           </tr>
           <tr>

               <td style={{float:'left'}}>
                   <input className="inputStyle" name="numberOfNationality" value="N/A" />
               </td>

               <td>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               </td>
               <td style={{float:'right'}}>
                   <label className="lableStyle"> رقم الهويه</label>
               </td>
           </tr>
           <tr>

               <td style={{float:'left'}}>
                   <input className="inputStyle" name="language" value="العربيه" />
               </td>

               <td>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               </td>
               <td style={{float:'right'}}>
                   <label className="lableStyle"> اللغه</label>
               </td>
           </tr>
       </table>
   </div>
   <div className="table1Style">
       <hr style={{color:'grey'}} />
   </div>
   <div>
       <br />
       <table className="table2Style">
           <tr>
               <td>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               </td>
               <td>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               </td>
               <td style={{float:'right'}}>
                   <b className="bStyle"> العنوان</b>
               </td>
           </tr>
           <tr>

               <td style={{float:'left'}}>
                   <input className="inputStyle" value="N/A" />
               </td>

               <td>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               </td>
               <td style={{float:'right'}}>
                   <label className="lableStyle">العنوان 1</label>
               </td>
           </tr>
           <tr>

               <td style={{float:'left'}}>
                   <input className="inputStyle" name="Nationality" value="N/A" />
               </td>

               <td>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               </td>
               <td style={{float:'right'}}>
                   <label className="lableStyle"> العنوان 2</label>
               </td>
           </tr>
           <tr>

               <td style={{float:'left'}}>
                   <input  className="inputStyle" name="nationalType" value="N/A" />
               </td>

               <td>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               </td>
               <td style={{float:'right'}}>
                   <label className="lableStyle">المدينه </label>
               </td>
           </tr>
           <tr>

               <td style={{float:'left'}}>
                   <input  className="inputStyle" name="numberOfNationality" value="N/A" />
               </td>

               <td>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               </td>
               <td style={{float:'right'}}>
                   <label className="lableStyle">الدوله</label>
               </td>
           </tr>
           <tr>

               <td style={{float:'left'}}>
                   <input  className="inputStyle" name="language" value="العربيه" />
               </td>

               <td>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               </td>
               <td style={{float:'right'}}>
                   <label className="lableStyle"> رقم الهاتف ارصى</label>
               </td>
           </tr>
           <tr>
               <td style={{float:'left'}}>
                   <input  className="inputStyle" name="language" value="العربيه" />
               </td>

               <td>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               </td>
               <td style={{float:'right'}}>
                   <label className="lableStyle"> صندوق بريد</label>
               </td>
           </tr>
       </table>
   </div>
   <div className="table1Style">
         <hr style={{color:'grey'}} />
   </div>
   <div>
       <br />
       <table className="table2Style">
           <tr>
               <td>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               </td>
               <td>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               </td>
               <td style={{float:'right'}}>
                   <b className="bStyle">معلومات الملف المرورى</b>
               </td>
           </tr>
           <tr>

               <td style={{float:'left'}}>
                   <input className="inputStyle" name="fullName" value="N/A" />
               </td>

               <td>
                   &nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               </td>
               <td style={{float:'right'}}>
                   <label className="lableStyle"> البيان المرورى</label>
               </td>
           </tr>
           <tr>

               <td style={{float:'left'}}>
                   <input  className="inputStyle" name="Nationality" value="N/A" />
               </td>

               <td>
                   &nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               </td>
               <td style={{float:'right'}}>
                   <label className="lableStyle"> الرمز المرورى</label>
               </td>
           </tr>
           <tr>

               <td style={{float:'left'}}>
                   <input  className="inputStyle" name="nationalType" value="N/A" />
               </td>

               <td>
                   &nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               </td>
               <td style={{float:'right'}}>
                   <label className="lableStyle"> رقم اللوحه</label>
               </td>
           </tr>
           <tr>

               <td style={{float:'left'}}>
                   <input  className="inputStyle" name="numberOfNationality" value="N/A" />
               </td>

               <td>
                   &nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               </td>
               <td style={{float:'right'}}>
                   <label className="lableStyle"> مصدر اللوحه</label>
               </td>
           </tr>
           <tr>

               <td style={{float:'left'}}>
                   <input  className="inputStyle" name="language" value="العربيه" />
               </td>

               <td>
                   &nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               </td>
               <td style={{float:'right'}}>
                   <label className="lableStyle"> الفئه</label>
               </td>
           </tr>
           <tr>

               <td style={{float:'left'}}>
                   <input  className="inputStyle" name="language" value="العربيه" />
               </td>

               <td>
                   &nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               </td>
               <td style={{float:'right'}}>
                   <label className="lableStyle"> رقم رخصه القياده</label>
               </td>
           </tr>
           <tr>

               <td style={{float:'left'}}>
                   <input  className="inputStyle" name="language" value="العربيه" />
               </td>

               <td>
                   &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               </td>
               <td style={{float:'right'}}>
                   <label className="lableStyle"> جهة الاصدار</label>
               </td>
           </tr>
       </table>
   </div>
   <div className="table1Style">
          <hr style={{color:'grey'}} />
   </div>
   <div>
       <br />

       <table className="table2Style">
           <tr>
               <td>
                   &nbsp;&nbsp;   &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               </td>
               <td>
                   &nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               </td>
               <td style={{float:'right'}}>
                   <b className="bStyle">معلومات الاتصال</b>
               </td>
           </tr>
           <tr>

               <td style={{float:'left'}}>
                   <input  className="inputStyle" name="fullName" value="N/A" />
               </td>

               <td>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               </td>
               <td style={{float:'right'}}>
                   <label className="lableStyle">البريد الالكترونى </label>
               </td>
           </tr>
           <tr>

               <td style={{float:'left'}}>
                   <input  className="inputStyle" name="Nationality" value="N/A" />
               </td>

               <td>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               </td>
               <td style={{float:'right'}}>
                   <label className="lableStyle"> الهاتف 1 </label>
               </td>
           </tr>
           <tr>

               <td style={{float:'left'}}>
                   <input  className="inputStyle" name="nationalType" value="N/A" />
               </td>

               <td>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               </td>
               <td style={{float:'right'}}>
                   <label className="lableStyle">الهاتف 2</label>
               </td>
           </tr>

       </table>
   </div>
   <div className="table1Style">
         <hr style={{color:'grey'}} />
   </div>
   <div>
       <br />

       <table className="table2Style">
           <tr>
               <td>
                   &nbsp;&nbsp;  &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               </td>
               <td>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               </td>
               <td style={{float:'right'}}>
                   <b className="bStyle">مستندات شخصيه</b>
               </td>
           </tr>
           <tr>
               <td>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               </td>
               <td>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               </td>
               <td style={{float:'right'}}>
                   <label className="lableStyle">ضغط هنا لاضافه مستندات جديده</label>
               </td>
           </tr>
           <tr>

               <td style={{float:'left'}}>
                   <button className="buttonStyle"> Add User</button>
               </td>
               <td>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               </td>
               <td>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               </td>
           </tr>
          </table>

      </div>
      </div>
    );
  }
}

export default AddUser;
