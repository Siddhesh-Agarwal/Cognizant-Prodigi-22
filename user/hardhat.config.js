require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.10",
  paths: {
    artifacts: "./src/artifacts",
    sources: "./src",
    cache: "./src/cache",
    tests: "./src/test"
  },
};
