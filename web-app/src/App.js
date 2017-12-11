import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from 'components/Home'
import Accounts from 'components/Accounts'
import DApp from 'components/DApp'

export default () =>
  <Router>
    <div>
      <Route exact path='/' component={Home} />
      <Route path='/daap' component={DApp} />
      <Route path='/accounts' component={Accounts} />
    </div>
  </Router>
