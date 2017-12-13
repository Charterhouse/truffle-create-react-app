import React from 'react'
import withWeb3 from 'web3/withWeb3'
import { Wrapper } from 'components/wrapper/Wrapper'
import { AppNavigation } from 'components/navigation/AppNavigation'

// Simple demonstration of the withWeb3 higher-order component
const Accounts = ({ accounts, location }) =>
  <Wrapper>
    <h1>My Accounts</h1>
    <pre>{JSON.stringify(accounts, null, 4)}</pre>
    <AppNavigation location={location} />
  </Wrapper>

export default withWeb3(Accounts)
