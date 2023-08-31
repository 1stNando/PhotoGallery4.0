import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import { App } from './App'
import { BrowserRouter as Router } from 'react-router-dom'
//import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//   },
// ])

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
