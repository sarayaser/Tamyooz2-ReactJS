import React, { Component } from 'react';
import '../css/TamyosCars.css';
class CarsNumbers extends Component {
  render() {
    return (
      <div className="CarsNumbers">
        <table>
          <tr>
            <td className="cell" styles={{width: '244px'}}>ارقام الفئة المميزة</td>
            <td className="cell" styles={{width: '244px'}}>ارقام الفئة البرونزية</td>
            <td className="cell" styles={{width: '244px'}}>ارقام الفئة الفضية</td>
            <td className="cell" styles={{width: '244px'}}>ارقام الفئة الذهبية</td>
            <td className="cell" styles={{width: '244px'}}>ارقام الفئة الماسية</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default CarsNumbers;
