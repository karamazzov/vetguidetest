import React, { Component } from 'react';
import classnames from 'classnames';
import { addMedicament } from '.././AdminActions'
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Field, FieldArray, reduxForm } from 'redux-form'
import validate from './validate'
import styles from './medicamentsform.css';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className='field'>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const renderSubstanceField = ({ fields, meta: { touched, error } }) => (

   <div className={styles.activesubstance}>

      <button className='ui basic button' type="button" onClick={() => fields.push({})}>New Active Substance</button>
     
   

    {fields.map((as, index) =>
      <li key={index}>
        <button
          type="button"
          title="Remove Active Substance"
          onClick={() => fields.remove(index)}/>
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
        
      </li>

    )}

    </div>

)

const renderSpeciesField = ({ fields, meta: { touched, error } }) => (

   <div className={styles.activesubstance}>

      <button className='ui basic button' type="button" onClick={() => fields.push({})}>New Specimen</button>
     
   
   

    {fields.map((specimen, index) =>
      <li key={index}>
        <button
          type="button"
          title="Remove Active Substance"
          onClick={() => fields.remove(index)}/>
        <h4 className="ui dividing header">Specimen #{index + 1}</h4>
         <div className='three fields'>
            <Field
              name={`${specimen}.name`}
              type="text"
              component={renderField}
              label="Specimen Name"/>
            <Field
              name={`${specimen}.indication`}
              type="text"
              component={renderField}
              label="Indication"/>
        </div>
        
      </li>

    )}

    </div>

)

const MedicamentsForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props

  return (
    <form className='ui form' onSubmit={handleSubmit}>

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

  onSubmit: (data) => {   

    addMedicament({data});

   }

})(MedicamentsForm)