import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ConvertionForm from '../components/ConvertionForm'

//import * as partnerActions from 'redux/actions/partner'

export class Convertion extends Component {
  
  render() {
   
    return (
      <div>
        CONVERTION
        <ConvertionForm/>
      </div>
    )
  }
}



export default connect(
  state => ({
    convertion: state.convertion
  }),
//   dispatch => bindActionCreators(partnerActions, dispatch)
)(Convertion)