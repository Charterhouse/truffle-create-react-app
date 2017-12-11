import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import renderer from 'react-test-renderer'
import DApp from './DApp'

jest.mock('web3/withWeb3')

it('renders without crashing', async () => {
  const div = document.createElement('div')
  await ReactDOM.render(<Router><DApp /></Router>, div)
})

it('renders correctly', async () => {
  const app = await renderer
    .create(<Router><DApp /></Router>)
  expect(app.toJSON()).toMatchSnapshot()
})
