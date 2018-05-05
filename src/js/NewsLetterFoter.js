import React, { Component } from 'react';
import LogoArea from "./../js/LogoArea";
import FaFacebookSquare from 'react-icons/lib/fa/facebook-square';
import TiSocialTwitter from 'react-icons/lib/ti/social-twitter';
import FaPaperPlane from 'react-icons/lib/fa/paper-plane';
import './../css/newsletter.css';

class NewsLetterFoter extends Component {
	render() {
		return (

			<div id="under" className="div">

				<p id="ta">
					تابعنا على
				</p>
				<div id="line"></div>
				<div id="social">
					<i id="facebook" > <FaFacebookSquare color="#fff" /> </i>
					<i id="twitter" > <TiSocialTwitter color="#fff" /> </i>
					<i id="telegram"> <FaPaperPlane color="#fff" /> </i>

				</div>

			</div>

		);

	}
}
export default NewsLetterFoter;