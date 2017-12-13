import React from 'react'
import { Wrapper } from 'components/wrapper'
import { AppNavigation } from 'components/navigation'

export default ({ location }) =>
  <Wrapper>
    <h1>Home</h1>
    <p>Note that Web3 is not loaded for this page.</p>
    <AppNavigation location={location} />
  </Wrapper>
