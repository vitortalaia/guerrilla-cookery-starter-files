import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'

import registerServiceWorker from './register-service-worker'

import appReducers from './reducers/reducers'

import App from './containers/app'

import './styles/font.css'
import './styles/base.css'

const loggerMiddleware = createLogger()

const store = createStore(appReducers, applyMiddleware(
  loggerMiddleware
))

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
