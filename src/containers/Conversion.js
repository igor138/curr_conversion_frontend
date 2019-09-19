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
    const { convert, currencies, convertedAmount, isLoading } = this.props
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
      </div>
    )
  }
}

export default connect(
  state => ({
    currencies: state.conversion.currencies,
    convertedAmount: state.conversion.convertedAmount,
    isLoading: state.conversion.isLoading
  }),
  dispatch => bindActionCreators(conversionActions, dispatch)
)(Conversion)