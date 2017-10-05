import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as loaderActionCreators from '../actions/loader'

import Header from '../components/header'
import Loader from '../components/loader'

const actionCreators = {
  ...loaderActionCreators
}

class App extends Component {
  render () {
    const { props } = this

    return (
      <div className="container">
        <Header />

        { props.isFetching && <Loader /> }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.loader
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
