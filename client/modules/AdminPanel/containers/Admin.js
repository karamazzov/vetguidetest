import React, { Component } from 'react';
import { Link, Match } from 'react-router';
import MedicamentsPage  from './MedicamentsPage';
import AdminAuthPage from './AdminAuthPage';
import MedicamentsForm from './MedicamentsForm';


class Admin extends Component {
  render() {
    return (

    <div className='ui container'>
        <div className='ui three item menu'>

            <Link className='item' activeClassName='active' activeOnlyWhenExact to='/'>Login</Link>
            <Link className='item' activeClassName='active' activeOnlyWhenExact to='/medicaments'>Medicaments</Link>
            <Link className='item' activeClassName='active' activeOnlyWhenExact to='/medicaments/new'>Add Medicaments</Link>

        </div>

        <Match exactly pattern='/admin' component={AdminAuthPage} />
        <Match exactly pattern='/admin/medicaments' component={MedicamentsPage} />
        <Match exactly pattern='/admin/medicaments/new' component={MedicamentsForm} />

    </div>


    );
  }
}

export default Admin;
