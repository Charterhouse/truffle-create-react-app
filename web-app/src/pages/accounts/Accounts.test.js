import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { inRouter } from 'test-helpers/router'
import Accounts from './Accounts'

jest.mock('web3/withWeb3')

it('renders without crashing', async () => {
  const div = document.createElement('div')
  await ReactDOM.render(inRouter(Accounts, '/accounts'), div)
})

it('renders correctly', async () => {
  const accounts = await renderer
    .create(inRouter(Accounts, '/accounts'))
  expect(accounts.toJSON()).toMatchSnapshot()
})
