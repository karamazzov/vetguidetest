/**
 * Root Component
 */
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router';

// Import Routes
import routes from './routes';
import AdminApp from './modules/AdminPanel/containers/AdminApp';

// Base stylesheet
require('./main.css');

export default function App(props) {
  return (

  	<BrowserRouter>

  	<Provider store={props.store}>


    	<AdminApp />


    </Provider>

    </BrowserRouter>
  );
}


