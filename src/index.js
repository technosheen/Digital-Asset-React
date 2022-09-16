import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Home from './views/home'
import Pardot from './views/pardot'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Home} exact path="/" />
        <Route component={Pardot} exact path="/pardot" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
