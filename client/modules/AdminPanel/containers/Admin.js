import React, { Component } from 'react';
import { Link, Match} from 'react-router';
import MedicamentsPage  from './MedicamentsPage';
import AdminAuthPage from './AdminAuthPage';
import MedicamentsForm from './MedicamentsForm';
import AdminApp from './AdminApp'


export const Admin = () => (
  
    <div>

        <Match exactly pattern='/' component={AdminAuthPage} />
        <Match exactly pattern='/medicaments' component={MedicamentsPage} />
        <Match exactly pattern='/medicaments/new' component={MedicamentsForm} />


    </div>


    );

