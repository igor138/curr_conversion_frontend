import React from 'react'
import { Field, reduxForm } from 'redux-form'

const notEmpty = value => {
  if (!value || +value <= 0) return 'empty'
}
const ConversionForm  = ({ handleSubmit, invalid, currencies, isLoading }) => {
  const currOptions = currencies && Object.entries(currencies).map(
    ([code, name]) => <option key={code} value={code}>{name}</option>
  )

  currOptions.unshift(<option key='null' value=''>Select currency</option>)

  return <form noValidate onSubmit={handleSubmit}>
    <div>
      <div>
        Source currency: 
        <Field
          name='sourceCurrency'
          type='select'
          component='select'
          validate={[notEmpty]}
        >
          {currOptions}
        </Field>
      </div>
      <div>
        Destination currency: 
        <Field
          name='destCurrency'
          type='select'
          component='select'
          validate={[notEmpty]}
        >
          {currOptions}
        </Field>
      </div>
      <div>
        Amount: 
        <Field
          name='amount'
          type='number'
          component='input'
          validate={[notEmpty]}
        />
      </div>
      <button
        type='submit'
        className='avs-btn avs-btn-primary avs-large'
        disabled={invalid || isLoading}
      >
        Convert
      </button>
    </div>
  </form>
}

export default reduxForm({
  form: 'conversion',
  enableReinitialize: true
})(ConversionForm)
