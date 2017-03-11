/* eslint-disable global-require */
import React from 'react';
import { Route, IndexRoute, Match } from 'react-router';
import App from './modules/App/App';
import Admin from './modules/AdminPanel/containers/Admin';
import AdminApp from './modules/AdminPanel/containers/AdminApp';
import MedicamentsPage  from './modules/AdminPanel/containers/MedicamentsPage';
import AdminAuthPage from './modules/AdminPanel/containers/AdminAuthPage';
import MedicamentsForm from './modules/AdminPanel/containers/MedicamentsForm';

// require.ensure polyfill for node
if (typeof require.ensure !== 'function') {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
} 

/* Workaround for async react routes to work with react-hot-reloader till
  https://github.com/reactjs/react-router/issues/2182 and
  https://github.com/gaearon/react-hot-loader/issues/288 is fixed.
 */
/* if (process.env.NODE_ENV !== 'production') {
  // Require async routes only in development for react-hot-reloader to work.
  require('./modules/Post/pages/PostListPage/PostListPage');
  require('./modules/Post/pages/PostDetailPage/PostDetailPage');
  require('./modules/AdminPanel/containers/Admin');
} */

// react-router setup with code-splitting
// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/


export const Routes = () => (
 
  <div>

    <Match pattern='/admin' component={AdminApp} />

  </div>

); 
