import React, { Component } from 'react'
import logo from './Dumbbell.svg'
import './App.css'
import MainMenu from './MainMenu.js'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div>
          <img src={logo} alt='logo' />
          <h2>Exercise Log</h2>
        </div>
        <MainMenu />
      </div>
    )
  }
}

export default App
