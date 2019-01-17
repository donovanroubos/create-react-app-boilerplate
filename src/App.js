import React, { Component } from 'react'
import logo from './images/logo.svg'

// Pages
import ComponentLibrary from './pages/component-library'

class App extends Component {
  render() {
    return (
      <div className="app">
        <ComponentLibrary />
      </div>
    )
  }
}

export default App
