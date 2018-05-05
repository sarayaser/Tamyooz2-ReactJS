/*this page is done by Name:Sara Yasser     ID:20140140  Using pure html, css, js */

import React, { Component } from 'react';
import './../css/blogDetailsVideo.css';


class BlogDetailsVideo extends Component {
    render() {

       return (
              <div className="video-text">
                <iframe className="video" src="https://www.youtube.com/embed/6DBi41reeF0" allowfullscreen></iframe>
                <div className="textUnderVideo">احجز رقمك الآن واحصل على مهلة 3 أيام لدفع </div>
                <div className="oneMinAgo1">1 min ago</div>
            </div>  
        );
    }
}

export default BlogDetailsVideo;