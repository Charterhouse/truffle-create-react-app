import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { inRouter } from 'test-helpers/router'
import { Home } from './Home'

it('renders without crashing', async () => {
  const div = document.createElement('div')
  await ReactDOM.render(inRouter(Home, '/'), div)
})

it('renders correctly', async () => {
  const home = await renderer
    .create(inRouter(Home, '/'))
  expect(home.toJSON()).toMatchSnapshot()
})
