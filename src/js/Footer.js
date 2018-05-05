import React, { Component } from 'react';
import FaFacebookSquare from 'react-icons/lib/fa/facebook-square';
import TiSocialTwitter from 'react-icons/lib/ti/social-twitter';
import FaPaperPlane from 'react-icons/lib/fa/paper-plane';

class Footer extends Component {
 render() {
   return (
     <footer>

       <img src={require("./../images/footer.png")} />

       <div className="logoArea" id="footerLogoArea">
         <img src={require("./../images/logo.png")} className="logo" />
         <label>الحقوق محفوظة<br />&copy; 2018 تميز</label>
       </div>

       <label>تابعنا على</label>
       <div id="redRect"></div>
       <ul>
         <li><i id="facebook" > <FaFacebookSquare color="#fff" /> </i></li>
         <li><i id="twitter" > <TiSocialTwitter color="#fff" /> </i></li>
         <li><i id="telegram"> <FaPaperPlane color="#fff" /> </i></li>
       </ul>

     </footer>

   );
 }
}

export default Footer;
