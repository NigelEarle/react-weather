import React from 'react';
import ReactDOM from 'react-dom';
import AppComponent from './components/app/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<AppComponent />, document.getElementById('root'));
registerServiceWorker();
