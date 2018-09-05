import React from 'react'
import { getWeb3, getAccounts, getContractInstance } from 'services/web3'

export class Web3Loader extends React.Component {
  state = { web3: null, accounts: null, contract: null }

  async componentDidMount () {
    try {
      const web3 = await getWeb3()
      const accounts = await getAccounts(web3)
      const contract = await getContractInstance(web3)
      this.setState({ web3, accounts, contract })
    } catch (error) {
      alert(`Failed to load web3, accounts, and contract. Check console for details.`)
      console.log(error)
    }
  }

  render () {
    return this.props.render(this.state)
  }
}
