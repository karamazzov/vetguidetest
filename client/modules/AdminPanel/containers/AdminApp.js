import React, { Component } from 'react';
import { Link } from 'react-router';
import { Admin } from './Admin';

class AdminApp extends Component {
  render() {
    return (

    	
    	<div className='ui container'>
        	<div className='ui three item menu'>

            <Link className='item' activeClassName='active' to='/'>Login</Link>
            <Link className='item' activeClassName='active' to='/medicaments'>Medicaments</Link>
            <Link className='item' activeClassName='active' to='/medicaments/new'>Add Medicaments</Link>

        	</div>

            <Admin/>

        </div>



    );
  }
}

export default AdminApp;