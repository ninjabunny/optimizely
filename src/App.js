import React from 'react'
import logo from './logo.svg'
import './App.css'
import {
  OptimizelyExperiment,
  OptimizelyVariation,
} from '@optimizely/react-sdk'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
      <OptimizelyExperiment experiment='exp1'>
        <OptimizelyVariation variation='simple'>So Simple</OptimizelyVariation>

        <OptimizelyVariation variation='detailed'>
          Very Complex
        </OptimizelyVariation>

        <OptimizelyVariation default>Default Render</OptimizelyVariation>
      </OptimizelyExperiment>
    </div>
  )
}

export default App
