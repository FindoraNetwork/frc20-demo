const FRC20Token = artifacts.require("FRC20Token");

module.exports = function (deployer) {
  deployer.deploy(FRC20Token);
};
