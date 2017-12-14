import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { renderInRouter } from 'test-helpers/router'
import { Accounts } from './Accounts'

const testAccounts = [
  '0x627306090abab3a6e1400e9345bc60c78a8bef57'
]

const renderAccountsInRoute = routeProps =>
  <Accounts accounts={testAccounts} {...routeProps} />

let accountsInRoute

beforeEach(() => {
  accountsInRoute = renderInRouter(
    renderAccountsInRoute,
    '/accounts')
})

it('renders without crashing', async () => {
  const div = document.createElement('div')
  await ReactDOM.render(accountsInRoute, div)
})

it('renders correctly', async () => {
  const accounts = await renderer
    .create(accountsInRoute)
  expect(accounts.toJSON()).toMatchSnapshot()
})
