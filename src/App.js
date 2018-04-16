import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import SelectBox from './components/select.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Practice Components :P</h1>
        </header>
        <SelectBox />
      </div>
    )
  }
}

export default App
