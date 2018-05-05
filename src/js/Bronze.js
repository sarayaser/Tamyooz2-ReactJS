import React, { Component } from 'react';
import '../css/TamyosCars.css';
var cl1="image image-cards";
class Bronze extends Component {
  render() {
    return (

      <div className="Bronze">
        <div className="container">
          <div className  ="price">
              السعر الحالي
              <br/> 1000 ريال
          </div>
          <div className={cl1}>
            {this.props.image_cards}
            <img src={this.props.src}/>
          </div>
          <div className="carCategoryName">برونزي</div>
          <div className="bronze_footer">
            <table>
              <tr>
                <td styles={{width: '240px'}}>
                  <div className="link">
                    <a href="#"> للمزايدة  </a>
                  </div>
                </td>
                <td styles={{width: '280px'}}>وقت الانتهاء <br/> 0.6:00 م 11 2018 مارس</td>
                <td styles={{width: '344px'}}>الوقت المتبقي <br/>10 ي 10 س 10 د 10 ث </td>
                <td styles={{width: '126px'}}>مزايدات <br/> 10</td>
                <td styles={{width: '240px'}}>احد الأدني للمزايدة <br/> 1000 ريال</td>
              </tr>

            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Bronze;
