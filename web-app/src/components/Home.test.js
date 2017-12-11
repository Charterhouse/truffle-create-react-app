import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import renderer from 'react-test-renderer'
import Home from './Home'

jest.mock('web3/withWeb3')

it('renders without crashing', async () => {
  const div = document.createElement('div')
  await ReactDOM.render(<Router><Home /></Router>, div)
})

it('renders correctly', async () => {
  const app = await renderer
    .create(<Router><Home /></Router>)
  expect(app.toJSON()).toMatchSnapshot()
})
