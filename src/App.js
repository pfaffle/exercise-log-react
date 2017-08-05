import React, { Component } from 'react'
import logo from './Dumbbell.svg'
import './App.css'
import MainMenu from './MainMenu.js'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='header'>
          <img className='logo' src={logo} alt='logo' />
        </div>
        <h2>Exercise Log</h2>
        <MainMenu />
      </div>
    )
  }
}

export default App
