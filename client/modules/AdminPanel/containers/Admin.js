import React, { Component } from 'react';
import { Link, Match} from 'react-router';
import { App } from '../../App/App';
import MedicamentsPage  from './MedicamentsPage';
import AdminAuthPage from './AdminAuthPage';
import MedicamentsForm from './MedicamentsForm';
import AdminApp from './AdminApp'


export const Admin = () => (
  
    <div>

    		
        	<Match exactly pattern='/admin' component={AdminAuthPage} />
        	<Match exactly pattern='/admin/medicaments' component={MedicamentsPage} />
        	<Match exactly pattern='/admin/medicaments/new' component={MedicamentsForm} />


    </div>


    );

