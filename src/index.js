import React from 'react';
import ReactDOM from 'react-dom';
//import './css/profile.css';
//import './css/newsletter.css';
import Header from './js/Header';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
