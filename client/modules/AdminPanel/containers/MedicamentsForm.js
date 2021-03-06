import React, { Component } from 'react';
import classnames from 'classnames';
import { addMedicament } from '.././AdminActions'
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Field, FieldArray, reduxForm } from 'redux-form'
import validate from './validate'


const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className='field'>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label}/>
      {touched && error && <span className='error'>{error}</span>}
    </div>
  </div>
)

const renderIndications = ({ fields, meta: { error } }) => (

    <div>

    {fields.map((indication, index) =>
      <li  key={index}>
        <button
          className='ui negative button'
          type="button"
          title="Remove Indication"
          onClick={() => fields.remove(index)}>Remove Indication #{ index + 1 }</button>
        <Field
          name={indication}
          type="text"
          component={renderField}
          label={`Indication #${index + 1}`}/>
      </li>
    )}

     <button className='ui basic button' type="button" onClick={() => fields.push()}>Add Indication</button>

    {error && <li className="error">{error}</li>}

    </div>
 
  )

const renderSubstanceField = ({ fields, meta: { touched, error } }) => (

   <div className='form-section'>

       <h4 className="ui dividing header">Active Substance #1</h4>
         <div className='three fields'>
            <Field
              name='name'
              type="text"
              component={renderField}
              label="Active Substance Name"/>
            <Field
              name='intensity'
              type="text"
              component={renderField}
              label="Active Substance Intensity"/>
            <Field
              name='unit'
              type="text"
              component={renderField}
              label="Unit"/>
        </div>

    {fields.map((as, index) =>
      <li key={index}>
       
        <h4 className="ui dividing header">Active Substance #{index + 1}</h4>
         <div className='three fields'>
            <Field
              name={`${as}.name`}
              type="text"
              component={renderField}
              label="Active Substance Name"/>
            <Field
              name={`${as}.intensity`}
              type="text"
              component={renderField}
              label="Active Substance Intensity"/>
            <Field
              name={`${as}.unit`}
              type="text"
              component={renderField}
              label="Unit"/>
        </div>

         <button
          className={classnames('ui', 'negative', 'button')}
          type="button"
          title="Remove Active Substance"
          onClick={() => fields.remove(index)}>Remove Active Substance #{ index + 1 }</button>
        
      </li>

    )}

      <button className='btn btn-success btn-form' type="button" onClick={() => fields.push({})}>
      New
      </button>



    </div>

)

const renderSpeciesField = ({ fields, meta: { touched, error } }) => (

   <div className='form-section'>
     
    {fields.map((specimen, index) =>
      <li key={index}>
       
        <h4 className="ui dividing header">Specimen #{index + 1}</h4>
         <div className='ui grid'>
            <div className='eight wide column'>

                <Field
                name={`${specimen}.name`}
                type="text"
                component={renderField}
                label="Specimen Name"/>
                
            </div>
            <div className='eight wide column'>

                <FieldArray className='eight wide column'
                name={`${specimen}.indications`}
                component={renderIndications}/>

            </div>
        </div>

         <button
          className={classnames('ui', 'negative', 'button')}
          type="button"
          title="Remove Active Substance"
          onClick={() => fields.remove(index)}>Remove Specimen #{index + 1}</button>
        
      </li>

    )}

     <button className='btn btn-success btn-form' type="button" onClick={() => fields.push({})}>New</button>

    </div>

)

const MedicamentsForm = (props) => {
  const { handleSubmit, pristine, reset, submitting, mySubmit} = props

  return (
    <form className='ui form' onSubmit={handleSubmit(mySubmit)}>

    <div className='three fields'>
      <Field name="brand" type="text" component={renderField} label="Brand Name"/>
      <Field name="manufacturer" type="text" component={renderField} label="Manufacturer"/>
      <Field name="form" type="text" component={renderField} label="Pharmaceutical Form"/>
    </div>

      <FieldArray name="active_substance" component={renderSubstanceField}/>
      <FieldArray name="species" component={renderSpeciesField}/>

      <div>
        <button className='ui primary button' type="submit" disabled={submitting}>Submit</button>
        <button className='ui button' type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>
    </form>
  )
}

export default reduxForm({

  form: 'fieldArrays',     // a unique identifier for this form
  validate,

})(MedicamentsForm)