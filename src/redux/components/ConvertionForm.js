import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class ConvertionForm extends Component {
  render() {
    const { handleSubmit, invalid, submitting, pristine } = this.props
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
              <option value='USD'>Dollar</option>
              <option value='EUR'>Euro</option>
            </Field>
          </div>
          <div>
            Destination currency: 
            <Field
              name='destCurrency'
              type='select'
              component='select'
            >
              <option value='USD'>Dollar</option>
              <option value='EUR'>Euro</option>
            </Field>
          </div>
          <div>
          Amount: 
          <Field
            name='amount'
            type='number'
            component='input'
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
  form: 'convertion',
  enableReinitialize: true
})(ConvertionForm)
