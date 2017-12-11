var Migrations = artifacts.require('./web-app/src/contracts/Migrations.sol')

module.exports = function (deployer) {
  deployer.deploy(Migrations)
}
