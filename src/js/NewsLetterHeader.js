import React , {Component} from 'react';
import  LogoArea from "./../js/LogoArea";
import './../css/newsletter.css';

class NewsLetterHeader extends Component{
	render(){
		return ( 

		<div className="div">
        <LogoArea id="logoArea" />
		<img  id="img1" src={require("./../images/Vector Smart Object11.png")} />

		<p className="thanks">
			شكرًا لإختياركم
		</p>
		<p className="thanks" id="t">
			تميز
		</p>

	</div> 
	);

	}
}
export default NewsLetterHeader;