import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import GiphyApp from './GiphyApp.js';

ReactDOM.render(<GiphyApp />, document.getElementById('root'));
registerServiceWorker();
