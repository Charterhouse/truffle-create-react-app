import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { inRouter } from 'test-helpers/router'
import DApp from './DApp'

jest.mock('web3/withWeb3')

it('renders without crashing', async () => {
  const div = document.createElement('div')
  await ReactDOM.render(inRouter(DApp, '/daap'), div)
})

it('renders correctly', async () => {
  const dapp = await renderer
    .create(inRouter(DApp, '/daap'))
  expect(dapp.toJSON()).toMatchSnapshot()
})
