/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';

import medicaments from './modules/AdminPanel/AdminReducer';

import auth from './modules/Auth/AuthReducer';

import { reducer as formReducer } from 'redux-form'

// Combine all reducers into one root reducer
export default combineReducers({

  app,

  medicaments,

  form: formReducer,

  auth,
  
});
