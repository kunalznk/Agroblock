const Migrations = artifacts.require("Migrations");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
const Database = artifacts.require("./Safemath.sol");

module.exports = function (deployer) {
  deployer.deploy(Safemath);
};
const Database = artifacts.require("./Agro.sol");

module.exports = function (deployer) {
  deployer.deploy(Agro);
};
const Database = artifacts.require("./Database.sol");

module.exports = function (deployer) {
  deployer.deploy(Database);
};
