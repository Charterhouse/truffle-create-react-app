import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { inRouter } from 'test-helpers/router'
import { DApp } from './DApp'
import withWeb3 from 'web3/withWeb3'

jest.mock('web3/withWeb3')

it('renders without crashing', async () => {
  const div = document.createElement('div')
  await ReactDOM.render(inRouter(withWeb3(DApp), '/dapp'), div)
})

it('renders correctly', async () => {
  const dapp = await renderer
    .create(inRouter(withWeb3(DApp), '/dapp'))
  expect(dapp.toJSON()).toMatchSnapshot()
})
