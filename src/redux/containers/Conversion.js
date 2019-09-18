import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ConversionForm from '../components/ConversionForm'

// import { convert } from '../actions/conversion'

import * as conversionActions from '../actions/conversion'

export class Conversion extends Component {

  componentWillMount() {
    this.props.fetchCurrencies()
  }

  render() {
   
    const { convert, currencies, convertedAmount } = this.props
    return (
      <div>
        CONVERSION
        <ConversionForm
          onSubmit={data => convert(data)}
          currencies={currencies}
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
    convertedAmount: state.conversion.convertedAmount
  }),
  dispatch => bindActionCreators(conversionActions, dispatch)
)(Conversion)