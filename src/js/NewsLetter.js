import React, { Component } from 'react';
import NewsLetterHeader from "./../js/NewsLetterHeader";
import NewsLetterParagraph from "./../js/NewsLetterParagraph";
import NewsLetterFoter from "./../js/NewsLetterFoter";
import './../css/newsletter.css';

class NewsLetter extends Component {
  render() {
    return (
    	<div>
 		<NewsLetterHeader/>
 		<NewsLetterParagraph/>
 		<NewsLetterFoter/>
 		</div>
    );	
  }
}

export default NewsLetter;
