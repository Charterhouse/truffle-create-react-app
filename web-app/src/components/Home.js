import React from 'react'
import { Link } from 'react-router-dom'
import { Wrapper } from 'components/Wrapper'

export default () =>
  <Wrapper>
    <h1>Home</h1>
    <p>Note that Web3 is not loaded for this page.</p>
    <Link to='/daap'>My DAap</Link>
    <Link to='/accounts' style={{ marginLeft: '20px' }}>My Accounts</Link>
  </Wrapper>
