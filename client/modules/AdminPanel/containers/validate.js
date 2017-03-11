const validate = values => {
  const errors = {}
  if(!values.brand || !values.manufacturer || !values.form) {
    errors.brand = 'Required'
    errors.manufacturer = 'Required'
    errors.form = 'Required'
  }

  return errors

}

export default validate