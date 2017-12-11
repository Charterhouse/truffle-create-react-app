import React from 'react'
import { Link } from 'react-router-dom'
import withWeb3 from 'web3/withWeb3'

// Simple demonstration of the withWeb3 higher-order component
const Accounts = ({ accounts }) =>
  <div style={{ padding: '20px' }}>
    <h1>My Accounts</h1>
    <pre>{JSON.stringify(accounts, null, 4)}</pre>
    <div style={{ marginTop: '20px' }}>
      <Link to='/'>Home</Link>
      <Link to='/daap' style={{ marginLeft: '20px' }}>My DAap</Link>
    </div>
  </div>

export default withWeb3(Accounts)
