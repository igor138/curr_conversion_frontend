import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Error from '../components/Error'
import * as statsActions from '../redux/actions/stats'

export class Stats extends Component {
  componentDidMount() {
    this.props.update()
  }

  render() {
    const {
      popularDestCurrency, conversionsCount, totalAmount, update, error
    } = this.props

    return (
      <div>
        STATS
        <div>
          Popular currency:
          {popularDestCurrency}
        </div>
        <div>
          Conversions count:
          {conversionsCount}
        </div>
        <div>
          Conversions total amount:
          {totalAmount}
        </div>
        <button onClick={update}>
          Refresh stats
        </button>
        {error && <Error error={error}/>}  
      </div>
    )
  }
}

export default connect(
  state => ({
    popularDestCurrency: state.stats.popularDestCurrency,
    conversionsCount: state.stats.conversionsCount,
    totalAmount: state.stats.totalAmount,
    error: state.stats.error
  }),
  dispatch => bindActionCreators(statsActions, dispatch)
)(Stats)