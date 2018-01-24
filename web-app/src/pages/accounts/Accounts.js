import React from 'react'
import { Wrapper } from 'components/wrapper'
import { AppNavigation } from 'components/navigation'

const Accounts = ({ accounts, location }) =>
  <Wrapper>
    <h1>My Accounts</h1>
    <pre>{JSON.stringify(accounts, null, 4)}</pre>
    <AppNavigation location={location} />
  </Wrapper>

export { Accounts }
