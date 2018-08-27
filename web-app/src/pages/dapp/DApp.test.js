import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { renderInRouter } from 'test-helpers/router'
import { DApp } from './DApp'

const testAccounts = [
  '0x627306090abab3a6e1400e9345bc60c78a8bef57'
]

const testContract = {
  set: (balance, obj) => {
    return new Promise(resolve => {
      resolve()
    })
  },
  get: {
    call: obj => {
      return new Promise(resolve => {
        resolve({ toNumber: () => 15 })
      })
    }
  }
}

const renderDAppInRoute = routeProps =>
  <DApp accounts={testAccounts}
    contract={testContract}
    {...routeProps} />

let dappInRoute

beforeEach(() => {
  dappInRoute = renderInRouter(
    renderDAppInRoute,
    '/dapp')
})

it('renders without crashing', async () => {
  const div = document.createElement('div')
  await ReactDOM.render(dappInRoute, div)
})

it('renders correctly', async () => {
  const dapp = await renderer
    .create(dappInRoute)
  await waitForAsyncCallsToComplete()
  expect(dapp.toJSON()).toMatchSnapshot()
})

const waitForAsyncCallsToComplete = async () => {
  // queue another item on the event loop callback queue
  // and wait for it to be executed
  await Promise.resolve()
}
