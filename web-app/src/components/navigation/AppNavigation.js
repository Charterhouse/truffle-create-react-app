import React from 'react'
import { Navigation } from './Navigation'
import { Link } from 'react-router-dom'

export const AppNavigation = ({ location }) =>
  <Navigation location={location}>
    <Link to='/'>Home</Link>
    <Link to='/dapp'>My DApp</Link>
    <Link to='/accounts'>My Accounts</Link>
  </Navigation>
