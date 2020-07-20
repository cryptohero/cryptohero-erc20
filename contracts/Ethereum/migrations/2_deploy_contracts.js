var cryptohero = artifacts.require("./cryptohero.sol");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(cryptohero);
};
