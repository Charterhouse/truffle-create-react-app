import React from 'react'
import { Link } from 'react-router-dom'
import withWeb3 from 'web3/withWeb3'

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
      <div style={{ padding: '20px' }}>
        <h1>My DApp</h1>
        <div>
          <p style={{ display: 'inline-block', marginBottom: '20px' }}>Current Balance: {balance}</p>
          <button style={{ marginLeft: '20px' }} onClick={this.getValue}>Refresh...</button>
        </div>
        <button onClick={this.storeValue}>Add 5 to the account balance</button>
        <div style={{ marginTop: '20px' }}>
          <Link to='/'>Home</Link>
          <Link to='/accounts' style={{ marginLeft: '20px' }}>My Accounts</Link>
        </div>
      </div>
    )
  }
}

export default withWeb3(DApp)
