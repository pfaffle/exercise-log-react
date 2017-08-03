import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import MainMenu from './MainMenu.js'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Exercise Log</h2>
        </div>
        <MainMenu />
      </div>
    )
  }
}

export default App
