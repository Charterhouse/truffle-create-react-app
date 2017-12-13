import React from 'react'

const contract = {
  set: (balance, obj) => {
    return new Promise(resolve => {
      resolve()
    })
  },
  get: {
    call: obj => {
      return new Promise(resolve => {
        resolve({ toNumber: () => 15 })
      })
    }
  }
}

const withWeb3 = PassedComponent => class extends React.Component {
  state = {
    web3: null,
    accounts: [
      '0x627306090abab3a6e1400e9345bc60c78a8bef57'
    ],
    contract: contract
  }

  render () {
    const { web3, accounts, contract } = this.state
    return (
      <PassedComponent
        web3={web3}
        accounts={accounts}
        contract={contract}
        {...this.props}
      />
    )
  }
}

export { withWeb3 }
