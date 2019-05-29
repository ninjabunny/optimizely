import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { OptimizelyProvider } from '@optimizely/react-sdk'
import * as optimizelySDK from '@optimizely/js-web-sdk'

// AvNpyVSiJb4ZsB5R2Pv9Xc

const optimizely = optimizelySDK.createInstance({
  sdkKey: 'AvNpyVSiJb4ZsB5R2Pv9Xc',
})
ReactDOM.render(
  <OptimizelyProvider optimizely={optimizely} userId={window.userId}>
    <App />
  </OptimizelyProvider>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
