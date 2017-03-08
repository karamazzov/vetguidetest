import React, { Component } from 'react';
import { addMedicament } from '.././AdminActions'
import { connect } from 'react-redux';
import MedicamentsForm from './MedicamentsForm'

class MedicamentsFormContainer extends Component {


	render() {

		return(

		<MedicamentsForm />

		)

	}

}

export default connect(null, { addMedicament } )(MedicamentsFormContainer);