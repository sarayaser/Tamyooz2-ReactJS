/*this page is done by Name:Sara Yasser     ID:20140140 */

import React, { Component } from 'react';
import './../css/blogPhone.css';


class BlogPhone extends Component {
    render() {
       return (
       			<div>
       				<img  src={require("./../images/pexels-photo.jpg")} className="phoneImg" id="phoneright"/>
					<p className="phoneTxt" >احجز رقمك الآن واحصل على مهلة 3 أيام لدفع الرسوم. </p>
					<p className="min"> 1 min ago</p>
					<hr className ="divLine"/>
					<p className="readMore"> Read more <i className="fa fa-arrow-right"></i></p>
					<div className="social">
						<a href="https://www.facebook.com"><i className ="fa fa-facebook-official" id="facebook"></i></a>
						<a href="https://www.twitter.com"><i className="fa fa-twitter" id="twitter"></i></a>
						<a href="https://telegram.org">
							<i className="fa fa-paper-plane" id="telegram"></i>
						</a>
					</div>
       			</div>
        );
    }
}

export default BlogPhone;