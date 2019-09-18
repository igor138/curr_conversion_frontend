import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class ConversionForm extends Component {
  render() {
    const { handleSubmit, invalid, submitting, pristine, currencies } = this.props

    const currOptions = currencies && Object.entries(currencies).map(([code, name]) => 
      <option key={code} value={code}>{name}</option>
    )

    return (
      <form noValidate onSubmit={handleSubmit}>
        <div>
          <div>
            Source currency: 
            <Field
              name='sourceCurrency'
              type='select'
              component='select'
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
            // validate=[]
          />
          </div>
        </div>
        <div className='avs-form-group'>
          <button
            type='submit'
            className='avs-btn avs-btn-primary avs-large'
            disabled={invalid || submitting || pristine}
          >
            Convert
          </button>
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'conversion',
  enableReinitialize: true
})(ConversionForm)
