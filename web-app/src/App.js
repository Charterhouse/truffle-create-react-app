import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from 'pages/home/Home'
import Accounts from 'pages/accounts/Accounts'
import DApp from 'pages/daap/DApp'

export default () =>
  <Router>
    <div>
      <Route exact path='/' component={Home} />
      <Route path='/daap' component={DApp} />
      <Route path='/accounts' component={Accounts} />
    </div>
  </Router>
