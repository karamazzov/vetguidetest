import React, { Component } from 'react';
import classnames from 'classnames';
import { addMedicament } from '../AdminActions'
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

class MedicamentsForm extends Component {

	state = {

		name: '',
		manufacturer: '',
		species: '',
		errors: {},
		loading: false,
		done: false

	}

	handleChange = (e) => {

		if(!!this.state.errors[e.target.name]){

			let errors = Object.assign({}, this.state.errors);
			delete errors[e.target.name];
			this.setState({ [e.target.name]: e.target.value, errors });

		}

		else {

			this.setState({ [e.target.name]: e.target.value });

		}

	}

	handleSubmit = (e) => {

		e.preventDefault();

		let errors = {};
    	if (this.state.name === '') errors.name = "Can't be empty";
    	if (this.state.manufacturer === '') errors.manufacturer = "Can't be empty";
    	if (this.state.species === '') errors.species = "Can't be empty";
    	this.setState({ errors });
    	const isValid = Object.keys(errors).length === 0

		if(isValid) {

			const { name, manufacturer, species } = this.state
			this.setState({loading:true})	
			this.props.addMedicament({name, manufacturer, species}).then(

				() => { this.setState({ done: true }) },
				(err) => err.response.json().then(({errors}) => this.setState({ errors, loading: false }))

				);
			

		}


	}

  render() {

  	const form = (

  		<form className={classnames('ui', 'form', { loading: this.state.loading })} onSubmit={this.handleSubmit}>


     {!!this.state.errors.global && <div className="ui negative message"><p>{this.state.errors.global}</p></div>}

     	<div className={classnames('field', { error: !!this.state.errors.name })}>

     		<label htmlFor='name'>Name</label>
     		<input id='name'
     		name='name'
     		value={this.state.name}
     		onChange={this.handleChange}
     		/>
     		<span>{this.state.errors.name}</span>

     	</div>

     	<div className={classnames('field', { error: !!this.state.errors.manufacturer })}>

     		<label htmlFor='manufacturer'>Manufacturer</label>
     		<input id='manufacturer'
     		name='manufacturer'
     		value={this.state.manufacturer}
     		onChange={this.handleChange}
     		/>
     		<span>{this.state.errors.manufacturer}</span>

     	</div>

     	<div className={classnames('field', { error: !!this.state.errors.species })}>

     		<label htmlFor='species'>Target Species</label>
     		<input id='species'
     		name='species'
     		value={this.state.species}
     		onChange={this.handleChange}
     		/>
     		<span>{this.state.errors.species}</span>

     	</div>

     	<div className='field'>
     		
     		<button className='ui primary button'>ADD</button>

     	</div>

     </form>

  		)

    return (

    <div>

     { this.state.done ? <Redirect to='/medicaments' /> : form }

    </div>

    );
  }
}

export default connect(null, { addMedicament })(MedicamentsForm);