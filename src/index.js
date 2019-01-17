import React from 'react'
import ReactDOM from 'react-dom'
import './styles/master.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

// Change unregister() to register()
// If you want your app to work offline and load faste
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
