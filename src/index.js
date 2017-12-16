import React from 'react';
import Provider from 'react-redux';
import ReactDOM from 'react-dom';
import App from './app/components/App/App.jsx';
import store from './app/util/store.js';

//ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));