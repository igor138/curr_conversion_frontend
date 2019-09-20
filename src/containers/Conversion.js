import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ConversionForm from '../components/ConversionForm'
import * as conversionActions from '../redux/actions/conversion'

export class Conversion extends Component {

  componentDidMount() {
    this.props.fetchCurrencies()
  }

  render() {
    const { convert, currencies, convertedAmount, isLoading, error } = this.props

    const errorBlock = error && <div className='error'>{error}</div>

    return (
      <div>
        CONVERSION
        <ConversionForm
          onSubmit={data => convert(data)}
          currencies={currencies}
          isLoading={isLoading}
        />
        <div>
          {convertedAmount}
        </div>
        {errorBlock}
      </div>
    )
  }
}

export default connect(
  state => ({
    currencies: state.conversion.currencies,
    convertedAmount: state.conversion.convertedAmount,
    isLoading: state.conversion.isLoading,
    error: state.conversion.error
    
  }),
  dispatch => bindActionCreators(conversionActions, dispatch)
)(Conversion)