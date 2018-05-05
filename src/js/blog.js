/*this page is done by Name:Sara Yasser     ID:20140140 */

import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import BlogDetailsVideo from './blogDetailsVideo';
import FaFacebookSquare from 'react-icons/lib/fa/facebook-square';
import TiSocialTwitter from 'react-icons/lib/ti/social-twitter';
import FaPaperPlane from 'react-icons/lib/fa/paper-plane';
import BlogPhone from './blogPhone';
import './../css/blog.css';


class Blog extends Component {
    render() {
       return (
            <div>
                <Header />
                <label id="subtitle"> الرئيسية > المدونه</label> 
                <section id="topImgs">
                    <div id="rightImgDiv" class ="phoneDiv">
                        <BlogPhone/>
                    </div>
                    <div id="leftImgDiv" class="phoneDiv"> 
                         <BlogPhone/>
                    </div>
                </section>

                 <section id="topVideos">
                            <BlogDetailsVideo />
                            <BlogDetailsVideo />                            
                            <BlogDetailsVideo />
                            <BlogDetailsVideo />
                </section>
                
                <section id="topImgs">
                    <div id="rightImgDiv" class ="phoneDiv">
                        <BlogPhone/>
                    </div>
                    <div id="leftImgDiv" class="phoneDiv"> 
                         <BlogPhone/>
                    </div>
                </section>

                <section id="topVideos">
                            <BlogDetailsVideo />
                            <BlogDetailsVideo />                            
                            <BlogDetailsVideo />
                            <BlogDetailsVideo />
                </section>
                
                <Footer />

            </div>  
        );
    }
}

export default Blog;