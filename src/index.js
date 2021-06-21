import {Provider} from 'react-redux';
import './assets/styles/index.css';
import ReactDom from 'react-dom';
import App from './containers';
import store from './store';
import React from 'react';

ReactDom.render(
	<Provider store={store}>
        <App/>
	</Provider>,
    document.getElementById('root')
);
