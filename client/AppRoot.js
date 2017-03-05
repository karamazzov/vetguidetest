/**
 * Root Component
 */
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router';

// Import Routes
import routes from './routes';
import AdminApp from './modules/AdminPanel/containers/AdminApp';
import { Routes } from './routes';


export default function AppRoot(props) {
  return (

  	<BrowserRouter>

  	<Provider store={props.store}>

    	<AdminApp />

     </Provider>

    	</BrowserRouter>
  );
}


