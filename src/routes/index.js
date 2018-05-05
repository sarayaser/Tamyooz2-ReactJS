import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import NewsLetter from './../js/NewsLetter';
import NewsLetterHeader from './../js/NewsLetterHeader'
import profile from './../js/profile';
import into from './../js/into';
import blogDetails from './../js/blogDetails';
import blog from './../js/blog';
import BlogPhone from './../js/blogPhone';


export default ()=> (
		<BrowserRouter>
			<div>
				<Route path="/NewsLetter" component ={NewsLetter}/>
				<Route path="/profile" component={profile}/>
				<Route path="/into" component={into}/>
				<Route path="/blogDetails" component={blogDetails}/>
				<Route path="/blog" component={blog}/>
				<Route path="/BlogPhone" component={BlogPhone}/>

			</div>
		</BrowserRouter>
);