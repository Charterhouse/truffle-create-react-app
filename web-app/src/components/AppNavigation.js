import React from 'react'
import { Navigation } from 'components/Navigation'
import { Link } from 'react-router-dom'

export const AppNavigation = ({ location }) =>
  <Navigation location={location}>
    <Link to='/'>Home</Link>
    <Link to='/daap'>My DAap</Link>
    <Link to='/accounts'>My Accounts</Link>
  </Navigation>
