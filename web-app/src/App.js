import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from 'pages/home'
import Accounts from 'pages/accounts'
import DApp from 'pages/dapp'

export default () =>
  <Router>
    <div>
      <Route exact path='/' component={Home} />
      <Route path='/dapp' component={DApp} />
      <Route path='/accounts' component={Accounts} />
    </div>
  </Router>
