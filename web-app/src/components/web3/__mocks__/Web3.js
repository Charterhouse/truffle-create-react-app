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

export class Web3Loader extends React.Component {
  state = {
    web3: jest.fn(),
    accounts: [
      '0x627306090abab3a6e1400e9345bc60c78a8bef57'
    ],
    contract: contract
  }

  render () {
    return this.props.render(this.state)
  }
}
