import React from 'react'
import { Link } from 'react-router-dom'

export default () =>
  <div style={{ padding: '20px' }}>
    <h1>Home</h1>
    <p>Note that Web3 is not loaded for this page.</p>
    <Link to='/daap'>My DAap</Link>
    <Link to='/accounts' style={{ marginLeft: '20px' }}>My Accounts</Link>
  </div>
