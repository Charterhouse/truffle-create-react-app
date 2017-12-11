const SimpleStorage = artifacts.require('./web-app/src/contracts/SimpleStorage.sol')

module.exports = function (deployer) {
  deployer.deploy(SimpleStorage)
}
