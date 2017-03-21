import React, { Component } from 'react';
import { Link, Match} from 'react-router';
import { Admin } from './Admin';
import MedicamentsPage  from './MedicamentsPage';
import AdminAuthPage from './AdminAuthPage';
import MedicamentsFormContainer from './MedicamentsFormContainer';

class AdminApp extends Component {
  render() {
    return (

    	
    	<div className='ui grid'>

        	<div className='three wide column'>
            <div className='sidemenu'>

                <Link className='menuitem' activeClassName='active' activeOnlyWhenExact to='/admin'>Login</Link>
                <Link className='menuitem' activeClassName='active' activeOnlyWhenExact to='/admin/medicaments'>Medicaments</Link>
                <Link className='menuitem' activeClassName='active' activeOnlyWhenExact to='/admin/medicaments/new'>Add Medicaments</Link>
                
            </div>
        	</div>

            <div className='thirteen wide column'>
            <div className='admin-body'>

                <Match exactly pattern='/admin' component={AdminAuthPage} />
                <Match exactly pattern='/admin/medicaments' component={MedicamentsPage} />
                <Match exactly pattern='/admin/medicaments/new' component={MedicamentsFormContainer} />

            </div>
            </div>

        </div>



    );
  }
}

export default AdminApp;