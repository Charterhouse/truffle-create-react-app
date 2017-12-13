import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { withWeb3 } from 'services/web3'
import { Home } from 'pages/home'
import { Accounts } from 'pages/accounts'
import { DApp } from 'pages/dapp'

export default () =>
  <Router>
    <div>
      <Route exact path='/' component={Home} />
      <Route path='/dapp' component={withWeb3(DApp)} />
      <Route path='/accounts' component={withWeb3(Accounts)} />
    </div>
  </Router>
