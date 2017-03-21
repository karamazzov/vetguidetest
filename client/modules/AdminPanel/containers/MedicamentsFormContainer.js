import React, { Component } from 'react';
import { addMedicament } from '.././AdminActions'
import { connect } from 'react-redux';
import MedicamentsForm from './MedicamentsForm'


class MedicamentsFormContainer extends Component {


	handleSubmit = (data) => {   

    this.props.dispatch(addMedicament({data}))

   }



	render() {

		return(

		<MedicamentsForm mySubmit={this.handleSubmit}/>

		)

	}

}

export default connect()(MedicamentsFormContainer);