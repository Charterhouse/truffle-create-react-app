import React from 'react'
import { Wrapper } from 'components/wrapper'
import { AppNavigation } from 'components/navigation'

// Demonstration of a basic dapp with the withWeb3 higher-order component
class DApp extends React.Component {
  state = { balance: null }

  async componentDidMount () {
    await this.getValue()
  }

  storeValue = async () => {
    const { accounts, contract } = this.props
    await this.getValue()
    await contract.set(this.state.balance + 5, { from: accounts[0] })
    await this.getValue()
  }

  getValue = async () => {
    const { accounts, contract } = this.props
    const response = await contract.get.call({ from: accounts[0] })
    this.setState({ balance: response.toNumber() })
  }

  render () {
    // Uncomment to use web3, accounts or the contract:
    // const { web3, accounts, contract } = this.props
    const { balance } = this.state
    return (
      <Wrapper>
        <h1>My DApp</h1>
        <div>
          <P>Current Balance: {balance}</P>
          <Button leftMargin onClick={this.getValue}>Refresh...</Button>
        </div>
        <Button onClick={this.storeValue}>Add 5 to the account balance</Button>
        <AppNavigation location={this.props.location} />
      </Wrapper>
    )
  }
}

const P = ({ children }) =>
  <p style={{ display: 'inline-block', marginBottom: '20px' }}>{ children }</p>

const Button = ({ children, leftMargin, ...rest }) => (
  leftMargin
    ? <button style={{ marginLeft: '20px' }} {...rest}>{ children }</button>
    : <button {...rest}>{ children }</button>
)

export { DApp }
